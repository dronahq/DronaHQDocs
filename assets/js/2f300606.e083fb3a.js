"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[92112],{78659:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={sidebar_label:"Page Structure",sidebar_position:0},l="Docs Page Structure",d={unversionedId:"docusaurus-mdx-guide/page-structure",id:"docusaurus-mdx-guide/page-structure",title:"Docs Page Structure",description:"Meta information",source:"@site/wiki/docusaurus-mdx-guide/page-structure.mdx",sourceDirName:"docusaurus-mdx-guide",slug:"/docusaurus-mdx-guide/page-structure",permalink:"/wiki/docusaurus-mdx-guide/page-structure",draft:!1,tags:[],version:"current",lastUpdatedAt:1691053192,formattedLastUpdatedAt:"Aug 3, 2023",sidebarPosition:0,frontMatter:{sidebar_label:"Page Structure",sidebar_position:0},sidebar:"wiki",previous:{title:"Docusaurus MDX Guide",permalink:"/wiki/category/docusaurus-mdx-guide"},next:{title:"Headings & Ids",permalink:"/wiki/docusaurus-mdx-guide/headings"}},u={},c=[{value:"Meta information",id:"meta-information",level:2},{value:"React component imports",id:"react-component-imports",level:2},{value:"Page title",id:"page-title",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Markdown Variables",id:"markdown-variables",level:2},{value:"Run docs build",id:"run-docs-build",level:2}],p={toc:c},m="wrapper";function f(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},p,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"docs-page-structure"},"Docs Page Structure"),(0,n.kt)("h2",{id:"meta-information"},"Meta information"),(0,n.kt)("p",null,"The following meta information should be added at the beginning of each docs page: ",(0,n.kt)("inlineCode",{parentName:"p"},"description")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"keywords"),"."),(0,n.kt)("p",null,"An example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown"},"---\ndescription: Data validations in Hasura\nkeywords:\n  - hasura\n  - docs\n  - schema\n  - data validation\n---\n")),(0,n.kt)("h2",{id:"react-component-imports"},"React component imports"),(0,n.kt)("p",null,"Please add any React component imports right below the frontmatter and before starting the main doc content."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"import Thumbnail from '@site/src/components/Thumbnail';\n")),(0,n.kt)("p",null,"Note: When importing components from ",(0,n.kt)("inlineCode",{parentName:"p"},"src/")," directory, please do not use relative paths. Docusaurus provides a global\nvariable ",(0,n.kt)("inlineCode",{parentName:"p"},"@site")," which is resolved to the root of the app - absolute import. So, doing\n",(0,n.kt)("inlineCode",{parentName:"p"},"@site/src/components/Thumbnail")," is the same as ",(0,n.kt)("inlineCode",{parentName:"p"},"../../../src/components/Thumbnail"),"."),(0,n.kt)("h2",{id:"page-title"},"Page title"),(0,n.kt)("p",null,"Add the main title for each docs page."),(0,n.kt)("p",null,"An example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# Data validations\n")),(0,n.kt)("p",null,"You can also add ",(0,n.kt)("inlineCode",{parentName:"p"},"title")," frontmatter."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown"},"---\ntitle: Data validations\n---\n")),(0,n.kt)("p",null,"By default the title will be the label for sidebar item. So, to use a shorten/different label for sidebar use the\n",(0,n.kt)("inlineCode",{parentName:"p"},"sidebar_label")," frontmatter to override."),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("p",null,"This is auto generated on the right sidebar. And the depth can be controlled via ",(0,n.kt)("inlineCode",{parentName:"p"},"toc_max_heading_level"),",\n",(0,n.kt)("inlineCode",{parentName:"p"},"toc_min_heading_level")," frontmatter."),(0,n.kt)("p",null,"Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/wiki/docusaurus-mdx-guide/table-of-contents"},"Table of Contents")," section to understand more about\nhwo to render this manually in between content and filtering items etc.,"),(0,n.kt)("h2",{id:"markdown-variables"},"Markdown Variables"),(0,n.kt)("p",null,"Add the markdown variables at very end of file for easier reference and maintainability. These variables are mostly for\nlinks. To avoid repetition of adding full path for each link, we could take advantage of\n",(0,n.kt)("a",{parentName:"p",href:"https://daringfireball.net/projects/markdown/syntax#link"},"reference-style-links")," syntax in markdown."),(0,n.kt)("p",null,"For Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown"},"## Section one\n\n.....\n\nREST ... [create_action][metadata-create-action] or [update_action][metadata-update-action] Metadata APIs ...\n[request_transform][requesttransformation] field ...:\n\n....\n\n## Section two\n\n.....\n\nREST ... [create_action][metadata-create-action] or [update_action][metadata-update-action] Metadata APIs ...\n[request_transform][requesttransformation] field ...:\n\n....\n\n\x3c!-- Shared Link Variables --\x3e\n\n[metadata-create-action]: /api-reference/metadata-api/actions.mdx#metadata-create-action\n[metadata-update-action]: /api-reference/metadata-api/actions.mdx#metadata-update-action\n[requesttransformation]: /api-reference/syntax-defs.mdx#requesttransformation\n")),(0,n.kt)("h2",{id:"run-docs-build"},"Run docs build"),(0,n.kt)("p",null,"Run the docs build in the end again with ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn build")," and make sure there are no errors/warnings because of any\ninconsistencies."))}f.isMDXComponent=!0}}]);