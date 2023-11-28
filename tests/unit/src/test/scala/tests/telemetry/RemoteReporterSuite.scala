package tests.telemetry

import tests.BaseSuite
import tests.telemetry.SampleReports
import scala.meta.internal.telemetry
import scala.meta.internal.metals
import scala.meta.internal.jdk.CollectionConverters._
import scala.meta.internal.jdk.OptionConverters._

import io.undertow.server.handlers.PathHandler
import java.net.ServerSocket
import java.io.IOException
import scala.util.control.NonFatal
import scala.collection.mutable
import java.net.InetSocketAddress
import io.undertow.server.handlers.BlockingHandler

class RemoteReporterSuite extends BaseSuite {
  def simpleReport(id: String) = metals.Report(
    name = "name",
    text = "text",
    shortSummary = "sumamry",
    path = None,
    id = Some(id),
    error = Some(new RuntimeException("A", new NullPointerException())),
  )

  // Remote telemetry reporter should be treated as best effort, ensure that logging
  test("ignore connectiviy failures") {
    val reporter = new metals.RemoteTelemetryReportContext(
      "https://not.existing.endpoint.for.metals.tests:8081",
      None,
      getReporterContext = () =>
        SampleReports.metalsLSPReport().getReporterContext.getMetalsLSP.get(),
      logger = metals.RemoteTelemetryReportContext.LoggerAccess.system,
    )

    assertEquals(
      None,
      reporter.incognito.create(simpleReport("")),
    )
  }

  // Test end-to-end connection and event serialization using local http server implementing TelemetryService endpoints
  test("connect with local server") {
    implicit val ctx = new MockTelemetryServer.Context(
      reports = mutable.ListBuffer.empty
    )
    val server = MockTelemetryServer("127.0.0.1", 8081)
    server.start()
    try {
      val serverEndpoint = MockTelemetryServer.address(server)
      for {
        reporterCtx <- Seq(
          SampleReports.metalsLSPReport(),
          SampleReports.scalaPresentationCompilerReport(),
          SampleReports.unknownReport(),
        ).map(_.getReporterContext().get())
        reporter = new metals.RemoteTelemetryReportContext(
          serverEndpoint,
          None,
          getReporterContext = () => reporterCtx,
          logger = metals.RemoteTelemetryReportContext.LoggerAccess.system,
        )
      } {
        val createdReport = simpleReport(reporterCtx.toString())
        reporter.incognito.create(createdReport)
        val received = ctx.reports.filter(_.getId().toScala == createdReport.id)
        assert(received.nonEmpty, "Not received matching id")
        assert(received.size == 1, "Found more then 1 received event")
      }
    } finally server.stop()
  }
}

object MockTelemetryServer {
  import io.undertow.Handlers.path
  import io.undertow.Undertow
  import io.undertow.server.HttpHandler
  import io.undertow.server.HttpServerExchange
  import io.undertow.util.Headers

  case class Context(reports: mutable.ListBuffer[telemetry.ReportEvent])

  def apply(
      host: String,
      preferredPort: Int,
  )(implicit ctx: Context) = {
    val port = freePort(host, preferredPort)

    val baseHandler = path().withEndpoint(
      telemetry.TelemetryService.SendReportEventEndpoint,
      defaultResponse = null.asInstanceOf[Void],
      _.reports,
    )
    Undertow.builder
      .addHttpListener(port, host)
      .setHandler(baseHandler)
      .build()
  }

  implicit class EndpointOps(private val handler: PathHandler) extends AnyVal {
    def withEndpoint[I, O](
        endpoint: telemetry.ServiceEndpoint[I, O],
        defaultResponse: O,
        eventCollectionsSelector: Context => mutable.ListBuffer[I],
    )(implicit ctx: Context): PathHandler = handler.addExactPath(
      endpoint.getUri(),
      new BlockingHandler(
        new SimpleHttpHandler[I, O](
          endpoint,
          defaultResponse,
          eventCollectionsSelector(ctx),
        )
      ),
    )
  }

  private class SimpleHttpHandler[I, O](
      endpoint: telemetry.ServiceEndpoint[I, O],
      response: O,
      receivedEvents: mutable.ListBuffer[I],
  ) extends HttpHandler {
    override def handleRequest(exchange: HttpServerExchange): Unit = {
      exchange.getRequestReceiver().receiveFullString {
        (exchange: HttpServerExchange, json: String) =>
          receivedEvents += telemetry.GsonCodecs.gson
            .fromJson(json, endpoint.getInputType())
          exchange
            .getResponseHeaders()
            .put(Headers.CONTENT_TYPE, "application/json")
          exchange.setStatusCode(200)
          exchange.endExchange()
          exchange
            .getResponseSender()
            .send(
              telemetry.GsonCodecs.gson
                .toJson(response, endpoint.getOutputType())
            )
      }
    }
  }

  def address(server: Undertow): String =
    server.getListenerInfo.asScala.headOption match {
      case Some(listener) =>
        s"${listener.getProtcol}:/" + listener.getAddress.toString
      case None => ""
    }

  final def freePort(host: String, port: Int, maxRetries: Int = 20): Int = {
    try {
      val socket = new ServerSocket()
      try {
        socket.bind(new InetSocketAddress(host, port))
        socket.getLocalPort()
      } finally {
        socket.close()
      }
    } catch {
      case NonFatal(_: IOException) if maxRetries > 0 =>
        freePort(host, port + 1, maxRetries - 1)
    }
  }
}
