"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[450],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(o),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return o?r.createElement(h,i(i({ref:t},c),{},{components:o})):r.createElement(h,i({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6093:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=o(7462),a=o(3366),n=(o(7294),o(3905)),i=["components"],l={author:"Katarzyna Marek",title:"Workspace folders",authorURL:"https://github.com/kasiaMarek",authorImageURL:"https://github.com/kasiaMarek.png"},s=void 0,p={permalink:"/metals/blog/2023/07/17/workspace-folders",source:"@site/blog/2023-07-17-workspace-folders.md",title:"Workspace folders",description:"In the upcoming version of metals we will add support for LSP workspace folders. This feature allows you to load multiple Scala projects/modules into the same workspace without the need to switch between multiple windows.",date:"2023-07-17T00:00:00.000Z",formattedDate:"July 17, 2023",tags:[],readingTime:3.805,hasTruncateMarker:!1,authors:[{name:"Katarzyna Marek",url:"https://github.com/kasiaMarek",imageURL:"https://github.com/kasiaMarek.png"}],frontMatter:{author:"Katarzyna Marek",title:"Workspace folders",authorURL:"https://github.com/kasiaMarek",authorImageURL:"https://github.com/kasiaMarek.png"},nextItem:{title:"Metals v0.11.12 - Aluminium",permalink:"/metals/blog/2023/04/21/aluminium"}},c={authorsImageUrls:[void 0]},m=[{value:"The new multi-root approach",id:"the-new-multi-root-approach",level:2},{value:"How do I use the multi-root feature?",id:"how-do-i-use-the-multi-root-feature",level:2},{value:"VSCode",id:"vscode",level:3},{value:"nvim-metals (<em>section written by ckipp01</em>)",id:"nvim-metals-section-written-by-ckipp01",level:3},{value:"Changes for the clients",id:"changes-for-the-clients",level:2},{value:"Quick summary",id:"quick-summary",level:2}],u={toc:m},d="wrapper";function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,n.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In the upcoming version of metals we will add support for ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#workspace_workspaceFolders"},"LSP workspace folders"),". This feature allows you to load multiple Scala projects/modules into the same workspace without the need to switch between multiple windows."),(0,n.kt)("h2",{id:"the-new-multi-root-approach"},"The new multi-root approach"),(0,n.kt)("p",null,"Before this feature metals would only support a single project treating a workspace root folder as the root of the project. The workspace root was established based on the ",(0,n.kt)("inlineCode",{parentName:"p"},"rootUri")," field of ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#initializeParams"},(0,n.kt)("inlineCode",{parentName:"a"},"InitializeParams"))," sent by the client upon initialization."),(0,n.kt)("p",null,"Now a single metals instance can accommodate several projects (or multiple roots of a project) at the time. In ",(0,n.kt)("inlineCode",{parentName:"p"},"InitializeParams")," metals first looks for projects' roots under ",(0,n.kt)("inlineCode",{parentName:"p"},"workspaceFolders")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"InitializeParams")," and if empty we still fallback to the ",(0,n.kt)("inlineCode",{parentName:"p"},"rootUri"),". Loaded projects can be changed dynamically though ",(0,n.kt)("inlineCode",{parentName:"p"},"didChangeWorkspaceFolders")," notifications, which allow the client (editor) to inform metals about any added or removed projects."),(0,n.kt)("p",null,"All workspace folders are handled in metals separately and are oblivious of each other.\nE.g. for the following multi project structure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"project1\n|- build.sbt\n|- src\n  |- Main.scala\n\nproject2\n|- build.sbt\n|- src\n  |- Main.scala\n")),(0,n.kt)("p",null,"we will keep two separate entities: one responsible for ",(0,n.kt)("inlineCode",{parentName:"p"},"project1"),", and another one for ",(0,n.kt)("inlineCode",{parentName:"p"},"project2"),".\nUpon receiving most requests metals will redirect them to the entity responsible for the project of interest. If there are no other clues the project is chosen based on the currently opened file. E.g. if the user wants to insert an inferred type in the file ",(0,n.kt)("inlineCode",{parentName:"p"},"../project1/src/Main"),", the request received by Metals will be redirected to the entity responsible for ",(0,n.kt)("inlineCode",{parentName:"p"},"project1"),"."),(0,n.kt)("p",null,"For some requests we collect information from all the projects and send a joint result, e.g. when searching for workspace symbols."),(0,n.kt)("h2",{id:"how-do-i-use-the-multi-root-feature"},"How do I use the multi-root feature?"),(0,n.kt)("h3",{id:"vscode"},"VSCode"),(0,n.kt)("p",null,"In VSCode workspace folder support is achieved by ",(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces"},"multi-root workspaces"),". To load multiple projects into a single workspace you can simply open one of the projects and add the other one using ",(0,n.kt)("inlineCode",{parentName:"p"},"File > Add Folder to Workspace")," and then choosing the correct folder."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/LTYrx9V.gif",alt:"add-workspace-folder"})),(0,n.kt)("p",null,"Now you have two projects loaded side by side, so you can easily see both and switch between them. All of the current metals functionality accommodates multiple projects, so you can use metals the same way as you did before. The biggest changes will be visible in the places where information from the whole workspace is collected, like workspace symbol search, test explorer, or metals doctor."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/zWmmsC2.gif",alt:"multi-root-tests"})),(0,n.kt)("p",null,"The target project for a command is usually chosen based on the currently opened file. E.g. if you run ",(0,n.kt)("inlineCode",{parentName:"p"},"Switch build server")," the command it will be executed for the project in focus. If no project is in focus the editor will explicitly ask for which project the command should be executed."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/tV7K822.gif",alt:"target-folder"})),(0,n.kt)("p",null,"Finally, logs can still be found in the ",(0,n.kt)("inlineCode",{parentName:"p"},".metals/metals.log")," in the root of each project. Note, that for the time being all information is logged to all opened workspace folders, so anything logged for ",(0,n.kt)("inlineCode",{parentName:"p"},"project1")," will also be visible in logs for ",(0,n.kt)("inlineCode",{parentName:"p"},"project2"),"."),(0,n.kt)("h3",{id:"nvim-metals-section-written-by-ckipp01"},"nvim-metals (",(0,n.kt)("em",{parentName:"h3"},"section written by ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/ckipp01"},"ckipp01")),")"),(0,n.kt)("p",null,"When using nvim-metals, you'll start just like you do with any other project.\nSince the idea of a workspace is a bit \"artificial\" with Neovim, you can really\njust add any new root to have a multi-root workspace. All you'll need to do is\nnavigate to a file at the root level of the workspace you'd like to add, and use\nthe\n",(0,n.kt)("a",{parentName:"p",href:"https://neovim.io/doc/user/lsp.html#vim.lsp.buf.add_workspace_folder()"},(0,n.kt)("inlineCode",{parentName:"a"},"vim.lsp.buf.add_workspace_folder()"))," function to add the folder containing the file you're in as another root."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/E8iriR9.gif",alt:"add_workspace_folder"})),(0,n.kt)("p",null,"To make this easier, you can also just create a mapping to use."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},'vim.keymap.set("n", "<leader>awf", vim.lsp.buf.add_workspace_folder)\n')),(0,n.kt)("p",null,"To verify that this has worked correctly you should be able to now see both\nworkspaces reflected in your Metals Doctor."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/2u48wDK.gif",alt:"nvim-metals doctor"})),(0,n.kt)("p",null,"You should also see that some commands, like the\n",(0,n.kt)("a",{parentName:"p",href:"https://neovim.io/doc/user/lsp.html#vim.lsp.buf.workspace_symbol()"},(0,n.kt)("inlineCode",{parentName:"a"},"vim.lsp.buf.workspace_symbol()")),"\nnow show results from all the added workspaces."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/RczJIcp.gif",alt:"workspace_symbols"})),(0,n.kt)("h2",{id:"changes-for-the-clients"},"Changes for the clients"),(0,n.kt)("p",null,"Since workspace folders are a part of the LSP for any client implementing this capability the multi-root support should work out of the box, however, there will be a few minor changes to needed accommodate the new approach."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The metals doctor result json format will change to contain a list of diagnostics for each workspace folder. Current format can be found in the description of ",(0,n.kt)("inlineCode",{parentName:"li"},"RunDoctor")," command (visible in ",(0,n.kt)("inlineCode",{parentName:"li"},"ClientCommands.scala")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"metals")," repo)."),(0,n.kt)("li",{parentName:"ol"},"For test explorer users ",(0,n.kt)("inlineCode",{parentName:"li"},"BuildTargetUpdate")," will also now contain information about the target folder.")),(0,n.kt)("h2",{id:"quick-summary"},"Quick summary"),(0,n.kt)("p",null,"Metals now supports the ",(0,n.kt)("a",{parentName:"p",href:"https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#workspace_workspaceFolders"},"LSP workspace folders"),", which in VSCode are implemented by ",(0,n.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces"},"multi-root workspaces"),"."),(0,n.kt)("p",null,"If you haven't yet make sure to try out our new multi-root support!"))}h.isMDXComponent=!0}}]);