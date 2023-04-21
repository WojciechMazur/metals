"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4100],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(o,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],s={id:"vim",sidebar_label:"Vim",title:"Vim"},o=void 0,p={unversionedId:"editors/vim",id:"editors/vim",title:"Vim",description:"nvim-metals demo",source:"@site/target/docs/editors/vim.md",sourceDirName:"editors",slug:"/editors/vim",permalink:"/metals/docs/editors/vim",draft:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/editors/vim.md",tags:[],version:"current",frontMatter:{id:"vim",sidebar_label:"Vim",title:"Vim"},sidebar:"docs",previous:{title:"VS Code",permalink:"/metals/docs/editors/vscode"},next:{title:"Sublime Text",permalink:"/metals/docs/editors/sublime"}},m={},u=[{value:"Requirements",id:"requirements",level:2},{value:"nvim-metals",id:"nvim-metals",level:2},{value:"Vim alternatives",id:"vim-alternatives",level:2},{value:"Using an alternative LSP Client",id:"using-an-alternative-lsp-client",level:3},{value:"Files and Directories to include in your Gitignore",id:"files-and-directories-to-include-in-your-gitignore",level:2},{value:"Running scalafix rules",id:"running-scalafix-rules",level:2},{value:"Getting help",id:"getting-help",level:2}],c={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/BglIFli.gif",alt:"nvim-metals demo"})),(0,r.kt)("p",null,"While Metals works with most LSP clients for ",(0,r.kt)("a",{parentName:"p",href:"https://www.vim.org/"},"Vim")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://neovim.io/"},"Neovim"),", we recommend using the dedicated Neovim plugin to\nget the best Metals support. Metals has many specific commands and LSP\nextensions that won't be available when not using the extension."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Java 8, 11, 17 provided by OpenJDK or Oracle"),". Eclipse OpenJ9 is not\nsupported, please make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable\npoints to a valid Java 8, 11 or 17 installation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"macOS, Linux or Windows"),". Metals is developed on many operating systems and\nevery PR is tested on Ubuntu, Windows and MacOS."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scala 2.13, 2.12, 2.11 and Scala 3"),". Metals supports these Scala versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scala 2.13"),":\n2.13.10, 2.13.9, 2.13.8, 2.13.7, 2.13.6, 2.13.5, 2.13.4, 2.13.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scala 2.12"),":\n2.12.17, 2.12.16, 2.12.15, 2.12.14, 2.12.13, 2.12.12, 2.12.11, 2.12.10")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scala 2.11"),":\n2.11.12")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scala 3"),":\n3.3.0-RC4, 3.3.0-RC3, 3.2.2, 3.2.1, 3.2.0, 3.1.3, 3.1.2, 3.1.1, 3.1.0, 3.0.2"))),(0,r.kt)("p",null,"Note that 2.11.x support is deprecated and it will be removed in future releases.\nIt's recommended to upgrade to Scala 2.12 or Scala 2.13"),(0,r.kt)("h2",{id:"nvim-metals"},"nvim-metals"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/nvim-metals"},(0,r.kt)("inlineCode",{parentName:"a"},"nvim-metals"))," Is the the dedicated\nMetals extension for the ",(0,r.kt)("a",{parentName:"p",href:"https://neovim.io/doc/user/lsp.html"},"built-in LSP\nsupport")," in Neovim."),(0,r.kt)("p",null,"To get started with installation please see the ",(0,r.kt)("inlineCode",{parentName:"p"},"nvim-metals"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/nvim-metals#prerequisites"},"prerequisites")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/nvim-metals#installation"},"installation steps"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Version"),(0,r.kt)("th",null,"Published"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"0.11.12"),(0,r.kt)("td",null,"21 Apr 2023 13:18")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"0.11.12+3-9ee707be-SNAPSHOT"),(0,r.kt)("td",null,"21 Apr 2023 17:22")))),(0,r.kt)("p",null,"Keep in mind that by default Neovim doesn't have default mappings for the\nfunctionality you'll want like, hovers, goto definition, method signatures, etc.\nYou can find a full example configuration of these in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/nvim-metals/discussions/39"},"example\nconfiguration"),"."),(0,r.kt)("p",null,"For a guide on all the available features in ",(0,r.kt)("inlineCode",{parentName:"p"},"nvim-metals"),", refer to the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/nvim-metals/discussions/279"},"features list"),"."),(0,r.kt)("h2",{id:"vim-alternatives"},"Vim alternatives"),(0,r.kt)("p",null,"There are multiple Vim alternatives if you're not a Neovim user. Metals did have\na Metals-specific plugin that worked with Vim,\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/coc-metals"},(0,r.kt)("inlineCode",{parentName:"a"},"coc-metals")),", but it doesn't work\nwith the newest versions of Metals and is currently ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/coc-metals/issues/460"},"deprecated and\nunmaintained"),"."),(0,r.kt)("h3",{id:"using-an-alternative-lsp-client"},"Using an alternative LSP Client"),(0,r.kt)("p",null,"There are multiple other LSP clients that work with Vim. Here are a few:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/natebosch/vim-lsc/"},(0,r.kt)("inlineCode",{parentName:"a"},"natebosch/vim-lsc")),": simple installation and written in Vimscript."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/prabirshrestha/vim-lsp"},(0,r.kt)("inlineCode",{parentName:"a"},"vim-lsp")),": simple installation and written in\nVimscript."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/yegappan/lsp"},(0,r.kt)("inlineCode",{parentName:"a"},"yegappan/lsp")),": Very new and targeting\nVim9.")),(0,r.kt)("p",null,"Keep in mind that they have varying levels of LSP support, don't support Metals\nspecific commands (like build import), or Metals specific LSP extensions (like\ntree view), and you need to manage the Metals installation yourself."),(0,r.kt)("p",null,"There are two ways to install Metals yourself in order to work with an\nalternative client."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Most easily is to just use ",(0,r.kt)("a",{parentName:"li",href:"https://get-coursier.io/"},"Coursier")," to do a ",(0,r.kt)("inlineCode",{parentName:"li"},"cs\ninstall metals"),"."),(0,r.kt)("li",{parentName:"ol"},"Generating a Metals binary yourself.")),(0,r.kt)("h2",{id:"files-and-directories-to-include-in-your-gitignore"},"Files and Directories to include in your Gitignore"),(0,r.kt)("p",null,"The Metals server places logs and other files in the ",(0,r.kt)("inlineCode",{parentName:"p"},".metals")," directory. The\nBloop compile server places logs and compilation artifacts in the ",(0,r.kt)("inlineCode",{parentName:"p"},".bloop"),"\ndirectory. The Bloop plugin that generates Bloop configuration is added in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"metals.sbt")," file, which is added at ",(0,r.kt)("inlineCode",{parentName:"p"},"project/metals.sbt")," as well as further\n",(0,r.kt)("inlineCode",{parentName:"p"},"project")," directories depending on how deep ",(0,r.kt)("inlineCode",{parentName:"p"},"*.sbt")," files need to be supported.\nTo support each ",(0,r.kt)("inlineCode",{parentName:"p"},"*.sbt")," file Metals needs to create an additional file at\n",(0,r.kt)("inlineCode",{parentName:"p"},"./project/project/metals.sbt")," relative to the sbt file.\nWorking with Ammonite scripts will place compiled scripts into the ",(0,r.kt)("inlineCode",{parentName:"p"},".ammonite")," directory.\nIt's recommended to exclude these directories and files\nfrom version control systems like git."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# ~/.gitignore\n.metals/\n.bloop/\n.ammonite/\nmetals.sbt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"coursier bootstrap org.scalameta:metals_2.13:0.11.12 -o metals -f\n")),(0,r.kt)("p",null,"(optional) It's recommended to enable JVM string de-duplication and provide a\ngenerous stack size and memory options."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"coursier bootstrap \\\n  --java-opt -XX:+UseG1GC \\\n  --java-opt -XX:+UseStringDeduplication  \\\n  --java-opt -Xss4m \\\n  --java-opt -Xms100m \\\n  org.scalameta:metals_2.13:0.11.12 -o metals -f\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"-Dmetals.client=vim-lsc")," flag is there just as a helper to match your\npotential client. So make sure it matches your client name. This line isn't\nmandatory though as your client should be able to fully be configured via\n",(0,r.kt)("inlineCode",{parentName:"p"},"InitializationOptions"),". You can read more about his\n",(0,r.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/blog/2020/07/23/configuring-a-client#initializationoptions"},"here"),"."),(0,r.kt)("h2",{id:"running-scalafix-rules"},"Running scalafix rules"),(0,r.kt)("p",null,"Scalafix allows users to specify some refactoring and linting rules that can be applied to your\ncodebase. Please checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/scalafix"},"scalafix website")," for more information."),(0,r.kt)("p",null,"Since Metals v0.11.7 it's now possible to run scalafix rules using a special\ncommand ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.scalafix-run"),".\nThis should run all the rules defined in your ",(0,r.kt)("inlineCode",{parentName:"p"},".scalafix.conf")," file. All built-in rules\nand the ",(0,r.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/scalafix/docs/rules/community-rules.html#hygiene-rules"},"community hygiene ones")," can\nbe run without any additional settings. However, for all the other rules users need to\nadd an additional dependency in the ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.scalafixRulesDependencies")," user setting.\nThose rules need to be in form of strings such as ",(0,r.kt)("inlineCode",{parentName:"p"},"com.github.liancheng::organize-imports:0.6.0"),", which\nfollows the same convention as ",(0,r.kt)("a",{parentName:"p",href:"https://get-coursier.io/"},"coursier dependencies"),"."),(0,r.kt)("p",null,"A sample scalafix configuration can be seen below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'rules = [\n  OrganizeImports,\n  ExplicitResultTypes,\n  RemoveUnused\n]\n\nRemoveUnused.imports = false\n\nOrganizeImports.groupedImports = Explode\nOrganizeImports.expandRelative = true\nOrganizeImports.removeUnused = true\nOrganizeImports.groups = [\n  "re:javax?\\."\n  "scala."\n  "scala.meta."\n  "*"\n]\n\n')),(0,r.kt)("h2",{id:"getting-help"},"Getting help"),(0,r.kt)("p",null,"There is an active community using Vim and Metals. Apart from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/nvim-metals/issues/new/choose"},"creating an\nissue")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/nvim-metals/discussions"},"starting\na discussion")," for\n",(0,r.kt)("inlineCode",{parentName:"p"},"nvim-metals")," users, you can also ask questions in our ",(0,r.kt)("inlineCode",{parentName:"p"},"#vim-users")," ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/FaVDrJegEh"},"Discord\nChannel")," or ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#scalameta:vim-users"},"Matrix\nBridge"),"."))}h.isMDXComponent=!0}}]);