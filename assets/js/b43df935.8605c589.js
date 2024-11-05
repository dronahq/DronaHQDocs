"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[66706],{85083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});r(67294);var o=r(3905),i=r(86291);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const s={sidebar_position:1,title:"Copy Objects"},c=void 0,u={unversionedId:"file-storage/data-queries/copyobject",id:"file-storage/data-queries/copyobject",title:"Copy Objects",description:"DronaHQ File Storage simplifies the process of copying files within your Amazon S3 buckets. You can use the CopyObject query from the File Storage library to set up this feature in DronaHQ.",source:"@site/docs/file-storage/data-queries/copyobject.md",sourceDirName:"file-storage/data-queries",slug:"/file-storage/data-queries/copyobject",permalink:"/file-storage/data-queries/copyobject",draft:!1,tags:[],version:"current",lastUpdatedAt:1722853446,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Copy Objects"},sidebar:"docSidebar",previous:{title:"File Strorage - Queries",permalink:"/category/file-strorage---queries"},next:{title:"Delete Objects",permalink:"/file-storage/data-queries/deleteobject"}},p={},d=[{value:"Copying Objects with DronaHQ File Storage",id:"copying-objects-with-dronahq-file-storage",level:2},{value:"Structuring the Query",id:"structuring-the-query",level:2},{value:"Configuration Details",id:"configuration-details",level:3}],y={toc:d},b="wrapper";function f(e){var{components:t}=e,r=l(e,["components"]);return(0,o.kt)(b,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"DronaHQ File Storage simplifies the process of copying files within your Amazon S3 buckets. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"CopyObject")," query from the File Storage library to set up this feature in DronaHQ."),(0,o.kt)("h2",{id:"copying-objects-with-dronahq-file-storage"},"Copying Objects with DronaHQ File Storage"),(0,o.kt)("p",null,"DronaHQ File Storage allows you to copy objects stored in your Amazon S3 buckets. Follow the steps below to configure the object copying functionality using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CopyObject")," feature in DronaHQ."),(0,o.kt)("h2",{id:"structuring-the-query"},"Structuring the Query"),(0,o.kt)("p",null,"This query requires details about the destination file path and the source file path to work. Start by providing a name and opt for the option when the query should run. Then configure the details."),(0,o.kt)("figure",null,(0,o.kt)(i.Z,{src:"/img/file-storage/queries/copyobject.jpeg",alt:"Copy Object Query",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Copy Object Query"))),(0,o.kt)("h3",{id:"configuration-details"},"Configuration Details"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Destination File"),(0,o.kt)("td",{parentName:"tr",align:null},"Specify the destination file path where the file should be copied. Use placeholders to dynamically set the file path.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Copy Source"),(0,o.kt)("td",{parentName:"tr",align:null},"Provide the source file path that needs to be copied. Use placeholders to dynamically set the file path.")))))}f.isMDXComponent=!0}}]);