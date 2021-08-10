package tests.debug

import scala.meta.internal.metals.debug.DebugStep._
import scala.meta.internal.metals.debug.DebugWorkspaceLayout
import scala.meta.internal.metals.debug.StepNavigator

import munit.Location
import munit.TestOptions
import tests.BaseDapSuite
import tests.BuildServerInitializer
import tests.BuildToolLayout

// note(@tgodzik) all test have `System.exit(0)` added to avoid occasional issue due to:
// https://stackoverflow.com/questions/2225737/error-jdwp-unable-to-get-jni-1-2-environment
abstract class BaseStepDapSuite(
    suiteName: String,
    initializer: BuildServerInitializer,
    buildToolLayout: BuildToolLayout
) extends BaseDapSuite(suiteName, initializer, buildToolLayout) {

  assertSteps("step-out")(
    sources = """|/a/src/main/scala/Main.scala
                 |package a
                 |
                 |object Main {
                 |  def foo() = {
                 |>>  println()
                 |  }
                 |
                 |  def main(args: Array[String]): Unit = {
                 |    foo()
                 |    System.exit(0)
                 |  }
                 |}
                 |""".stripMargin,
    main = "a.Main",
    instrument = steps =>
      steps
        .at("a/src/main/scala/Main.scala", line = 5)(StepOut)
        .at("a/src/main/scala/Main.scala", line = 10)(Continue)
  )

  assertSteps("step-over")(
    sources = """|/a/src/main/scala/Main.scala
                 |package a
                 |
                 |object Main {
                 |  def main(args: Array[String]): Unit = {
                 |>>  println(1)
                 |    println(2)
                 |    System.exit(0)
                 |  }
                 |}
                 |""".stripMargin,
    main = "a.Main",
    instrument = steps =>
      steps
        .at("a/src/main/scala/Main.scala", line = 5)(StepOver)
        .at("a/src/main/scala/Main.scala", line = 6)(Continue)
  )

  assertSteps("step-into-java")(
    sources = """|/a/src/main/scala/a/ScalaMain.scala
                 |package a
                 |
                 |object ScalaMain {
                 |  def main(args: Array[String]): Unit = {
                 |>>  JavaClass.foo(7)
                 |    System.exit(0)
                 |  }
                 |}
                 |
                 |/a/src/main/java/a/JavaClass.java
                 |package a;
                 |
                 |class JavaClass {
                 |  static void foo(int i){
                 |    System.out.println(i);
                 |  }
                 |}""".stripMargin,
    main = "a.ScalaMain",
    instrument = steps =>
      steps
        .at("a/src/main/scala/a/ScalaMain.scala", line = 5)(StepIn)
        .at("a/src/main/java/a/JavaClass.java", line = 5)(StepOut)
        .at("a/src/main/scala/a/ScalaMain.scala", line = 6)(Continue)
  )

  assertSteps("step-into-scala-lib")(
    sources = """|/a/src/main/scala/Main.scala
                 |package a
                 |
                 |object Main {
                 |  def main(args: Array[String]): Unit = {
                 |>>  println("foo")
                 |    System.exit(0)
                 |  }
                 |}
                 |""".stripMargin,
    main = "a.Main",
    instrument = steps =>
      steps
        .at("a/src/main/scala/Main.scala", line = 5)(StepIn)
        .atDependency("scala/Predef.scala", line = 404)(Continue)
  )

  assertSteps("step-into-java-lib")(
    sources = """|/a/src/main/scala/Main.scala
                 |package a
                 |
                 |object Main {
                 |  def main(args: Array[String]): Unit = {
                 |>>  System.out.println("foo")
                 |    System.exit(0)
                 |  }
                 |}
                 |""".stripMargin,
    main = "a.Main",
    instrument = steps => {
      val (javaLibFile, javaLibLine) =
        if (isJava8) ("java/io/PrintStream.java", 805)
        else ("java.base/java/io/PrintStream.java", 881)

      steps
        .at("a/src/main/scala/Main.scala", line = 5)(StepIn)
        .atDependency(javaLibFile, javaLibLine)(Continue)
    }
  )

  assertSteps("stops-on-different-class-in-same-file")(
    sources = """|/a/src/main/scala/a/Main.scala
                 |package a
                 |
                 |object Main {
                 |  def main(args: Array[String]): Unit = {
                 |    val foo = new Foo
                 |>>  foo.call()
                 |    System.exit(0)
                 |  }
                 |}
                 |
                 |class Foo {
                 |  def call() = {
                 |>>  println("foo")
                 |  }
                 |}
                 |""".stripMargin,
    main = "a.Main",
    instrument = steps =>
      steps
        .at("a/src/main/scala/a/Main.scala", line = 6)(Continue)
        .at("a/src/main/scala/a/Main.scala", line = 13)(Continue)
  )

  def assertSteps(name: TestOptions)(
      sources: String,
      main: String,
      instrument: StepNavigator => StepNavigator
  )(implicit loc: Location): Unit = {
    test(name) {
      cleanWorkspace()
      val debugLayout = DebugWorkspaceLayout(sources)
      val workspaceLayout = buildToolLayout(debugLayout.toString, scalaVersion)
      val navigator = instrument(StepNavigator(workspace))

      for {
        _ <- initialize(workspaceLayout)
        debugger <- debugMain("a", main, navigator)
        _ <- debugger.initialize
        _ <- debugger.launch
        _ <- setBreakpoints(debugger, debugLayout)
        _ <- debugger.configurationDone
        _ <- debugger.shutdown
      } yield ()
    }
  }

}
