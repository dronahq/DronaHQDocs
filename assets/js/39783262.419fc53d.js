"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[38720],{85960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});n(67294);var a=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={sidebar_position:70},l="Working with Docusaurus",d={unversionedId:"working-with-docusaurus",id:"working-with-docusaurus",title:"Working with Docusaurus",description:"If you're interested in a deep dive on Docusaurus and how it works, check out their docs.",source:"@site/wiki/working-with-docusaurus.mdx",sourceDirName:".",slug:"/working-with-docusaurus",permalink:"/wiki/working-with-docusaurus",draft:!1,tags:[],version:"current",lastUpdatedAt:1691053192,formattedLastUpdatedAt:"Aug 3, 2023",sidebarPosition:70,frontMatter:{sidebar_position:70},sidebar:"wiki",previous:{title:"Tables",permalink:"/wiki/style/tables"},next:{title:"Sample Usage",permalink:"/wiki/sample"}},p={},u=[{value:"docusaurus.config.js",id:"docusaurusconfigjs",level:2},{value:"Cleint API - components, hooks etc.",id:"cleint-api---components-hooks-etc",level:2},{value:"Sidebar",id:"sidebar",level:2},{value:"Label &amp; position",id:"label--position",level:3},{value:"index.mdx file only directories",id:"indexmdx-file-only-directories",level:3},{value:"URL slug",id:"url-slug",level:2},{value:"Styling",id:"styling",level:2},{value:"React components",id:"react-components",level:2},{value:"Static assets",id:"static-assets",level:2},{value:"Updating to latest Docusaurus version",id:"updating-to-latest-docusaurus-version",level:2},{value:"Docusaurus Support",id:"docusaurus-support",level:2}],c={toc:u},m="wrapper";function h(e){var{components:t}=e,n=r(e,["components"]);return(0,a.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-docusaurus"},"Working with Docusaurus"),(0,a.kt)("p",null,"If you're interested in a deep dive on Docusaurus and how it works, check out ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs"},"their docs"),".\nThis page is intended to serve as a crash course on common conventions within Docusaurus and how they apply to Hasura's\ndocs \ud83e\udd19"),(0,a.kt)("admonition",{title:"Guides",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Also checkout their ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/category/guides"},"Guides"),", they are pretty detailed."),(0,a.kt)("p",{parentName:"admonition"},"Please check the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/advanced"},"Advanced Guides")," to learn in depth about Architecture, Plugins,\nRouting etc.")),(0,a.kt)("h2",{id:"docusaurusconfigjs"},"docusaurus.config.js"),(0,a.kt)("p",null,"All the magic happens here. ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/seo"},"SEO"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/themes"},"Theme"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins"},"Plugins"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/themes/configuration#navbar"},"Navbar"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/themes/configuration#footer-1"},"Footer"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/search#using-algolia-docsearch"},"Search Config"),", and\n",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/category/guides"},"what not...")),(0,a.kt)("p",null,"Please check the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/docusaurus-config"},"API for all possible config options here"),"."),(0,a.kt)("h2",{id:"cleint-api---components-hooks-etc"},"Cleint API - components, hooks etc."),(0,a.kt)("p",null,"Please check the ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docusaurus-core"},"client API docs")," for available React components, hooks &\nmodules."),(0,a.kt)("h2",{id:"sidebar"},"Sidebar"),(0,a.kt)("h3",{id:"label--position"},"Label & position"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Individual Files")),(0,a.kt)("p",null,"Use of ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebar_label")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebar_position")," frontmatter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown",metastring:"title=graphql/core/actions/create.mdx",title:"graphql/core/actions/create.mdx"},"---\nsidebar_label: Creating actions\nsidebar_position: 1\n---\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Directories (Categories)")),(0,a.kt)("p",null,"By default, index.mdx doc's - ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebar_label")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"sidebar_position")," will be applied for directories."),(0,a.kt)("p",null,"To override, please add a ",(0,a.kt)("inlineCode",{parentName:"p"},"_category_.json")," and add the ",(0,a.kt)("inlineCode",{parentName:"p"},"label")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"position")," properties."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=graphql/core/actions/_category_.json",title:"graphql/core/actions/_category_.json"},'{\n  "label": "Actions",\n  "position": 3\n}\n')),(0,a.kt)("admonition",{title:"More about Sidebar",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can also create a custom sidebar and add everthing manually."),(0,a.kt)("p",{parentName:"admonition"},"Checkout Docusaurus Docs for Sidebar - ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/sidebar"},"https://docusaurus.io/docs/sidebar"))),(0,a.kt)("h3",{id:"indexmdx-file-only-directories"},"index.mdx file only directories"),(0,a.kt)("p",null,"This is known and default behavior from docusaurus. ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," is considered direct link to directory index and won't be\nvisible unless there is one more file."),(0,a.kt)("p",null,"If you only have an index.mdx file, prefer ",(0,a.kt)("inlineCode",{parentName:"p"},"directory.mdx")," over ",(0,a.kt)("inlineCode",{parentName:"p"},"directory/index.mdx"),"."),(0,a.kt)("h2",{id:"url-slug"},"URL slug"),(0,a.kt)("p",null,"This only applies for index.mdx files."),(0,a.kt)("p",null,"index file routes are resolved to ",(0,a.kt)("inlineCode",{parentName:"p"},"directory/")," and not ",(0,a.kt)("inlineCode",{parentName:"p"},"directory/index")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"slug")," Metadata to manually set the slug to ",(0,a.kt)("inlineCode",{parentName:"p"},"index"),". Please check\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/pull/5830"},"this PR on docusaurus")," for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="graphql/core/actions/overview.mdx"',title:'"graphql/core/actions/overview.mdx"'},"---\nslug: index\n---\n")),(0,a.kt)("h2",{id:"styling"},"Styling"),(0,a.kt)("p",null,"The majority of styles is controlled through CSS variables - there is a heavy list available (use the browser inspect\nelement to see the complete list)."),(0,a.kt)("p",null,"These variables can be overridden and new custom styles to be added in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/css/custom.scss")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"src/css/_custom-dark.scss")," for light and dark themes respectively."),(0,a.kt)("h2",{id:"react-components"},"React components"),(0,a.kt)("p",null,"Add any new React Components to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/components/ComponentName")," directory. Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx")," file and use\n",(0,a.kt)("inlineCode",{parentName:"p"},"styles.module.scss")," for styling to not let this collide with global styles."),(0,a.kt)("p",null,"Then this component can be imported with ",(0,a.kt)("inlineCode",{parentName:"p"},"@site")," global directive."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import ComponentName from '@site/src/components/ComponentName';")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Check existing components for a better idea.")),(0,a.kt)("h2",{id:"static-assets"},"Static assets"),(0,a.kt)("p",null,"All the static assets lives in ",(0,a.kt)("inlineCode",{parentName:"p"},"static")," directory."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Asset"),(0,a.kt)("th",{parentName:"tr",align:null},"Directory"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Images"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"static/img"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fonts"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"static/fonts"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Icons"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"static/icons"))))),(0,a.kt)("h2",{id:"updating-to-latest-docusaurus-version"},"Updating to latest Docusaurus version"),(0,a.kt)("p",null,"Checkout the change log for latest releases and changes involved - ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/changelog/"},"https://docusaurus.io/changelog/")),(0,a.kt)("p",null,"Please ensure to check breaking changes and re-swizzle any swizzled components given they are part of breaking changes."),(0,a.kt)("p",null,"Any ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/swizzling"},"swizzled")," component will be cloned to ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"An Example:")," The ",(0,a.kt)("inlineCode",{parentName:"p"},"TOCInline")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TOCItems")," components are ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/swizzling"},"swizzled")," and\ncustom logic is added."),(0,a.kt)("p",null,"The custom added logic (",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme/TOCInline"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"src/theme/TOCItems"),") is indicated by comments - ",(0,a.kt)("inlineCode",{parentName:"p"},"// Customization START"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"// Customization END"),". If reswizzled in the future, only these blocks need an update."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/inline-toc#custom-table-of-contents"},(0,a.kt)("inlineCode",{parentName:"a"},"toc")," is a flat array")," and has no\nconcept of nested tree children structure. This behavior is changed in ",(0,a.kt)("inlineCode",{parentName:"p"},"2.0.0-beta.16"),". Please check the\n",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/changelog/2.0.0-beta.16#-breaking-change"},"Breaking changes that forced us to swizzle"),"."),(0,a.kt)("h2",{id:"docusaurus-support"},"Docusaurus Support"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discordapp.com/invite/docusaurus"},"Join their Discord")," and ask in ",(0,a.kt)("inlineCode",{parentName:"p"},"#help-and-questions")))}h.isMDXComponent=!0}}]);