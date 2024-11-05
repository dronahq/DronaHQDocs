"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[61098],{39470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"General",description:"General documentation style",sidebar_position:1,keywords:["hasura","style","general"],slug:"general"},l="General Style Points",c={unversionedId:"style/general",id:"style/general",title:"General",description:"General documentation style",source:"@site/wiki/style/general.mdx",sourceDirName:"style",slug:"/style/general",permalink:"/wiki/style/general",draft:!1,tags:[],version:"current",lastUpdatedAt:1691053192,formattedLastUpdatedAt:"Aug 3, 2023",sidebarPosition:1,frontMatter:{title:"General",description:"General documentation style",sidebar_position:1,keywords:["hasura","style","general"],slug:"general"},sidebar:"wiki",previous:{title:"Style",permalink:"/wiki/category/style"},next:{title:"Bullet Lists",permalink:"/wiki/style/bullets"}},u={},p=[],d={toc:p},y="wrapper";function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(y,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general-style-points"},"General Style Points"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Try to include a ",(0,r.kt)("inlineCode",{parentName:"li"},"TL;DR")," block for feature documentation at the top of the doc to summarise it as much as possible."),(0,r.kt)("li",{parentName:"ul"},"Hasura features should be proper noun ",(0,r.kt)("em",{parentName:"li"},"title case")," to differentiate from any other uses of the word Eg: Console,\nMetadata, Migrations, Actions, Events, etc."),(0,r.kt)("li",{parentName:"ul"},"Keep in mind you are trying to write for beginner, intermediate and advanced users."),(0,r.kt)("li",{parentName:"ul"},"All lines in markdown should break at ",(0,r.kt)("strong",{parentName:"li"},"120 characters")," for better readability in IDEs. 120 is useful because it\nstill allows side-by-side editing on most screens and closely matches the line length of the final output page at max\nwidth."),(0,r.kt)("li",{parentName:"ul"},"Add appropriate cross-links in content to assist users.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you refer to some functionality that is documented in some other docs page, add a link to that page."),(0,r.kt)("li",{parentName:"ul"},'If you have a statement like "create a relationship between tables X and Y ...", make "create a relationship"\na link to the ',(0,r.kt)("inlineCode",{parentName:"li"},"Create relationships")," page."))),(0,r.kt)("li",{parentName:"ul"},'Try to make each section within a page self-sufficient. i.e. avoid structuring all pages as step-by-step guides unless\nit really is the intent. This ensures that we can refer to sections externally (from other docs pages, Console, etc.)\nand expect that the user will be able to follow the section without being lost on the context that was set in earlier\nsections of the page. Adding statements such as "As we have described in the above section ..." might help to set up\nthe needed context.')))}f.isMDXComponent=!0}}]);