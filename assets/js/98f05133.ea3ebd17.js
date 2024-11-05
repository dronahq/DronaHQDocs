"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[87069],{22283:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>d});a(67294);var r=a(3905),o=a(86291);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const c={sidebar_position:1,title:"Set To LocalStorage"},s=void 0,p={unversionedId:"reference/actionflow-blocks/set-kv-data",id:"reference/actionflow-blocks/set-kv-data",title:"Set To LocalStorage",description:"What are LocalStorage Actions ?",source:"@site/docs/reference/actionflow-blocks/set-kv-data.md",sourceDirName:"reference/actionflow-blocks",slug:"/reference/actionflow-blocks/set-kv-data",permalink:"/reference/actionflow-blocks/set-kv-data",draft:!1,tags:[],version:"current",lastUpdatedAt:1727523850,formattedLastUpdatedAt:"Sep 28, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Set To LocalStorage"},sidebar:"docSidebar",previous:{title:"Set Data Queries Value",permalink:"/reference/actionflow-blocks/set-data-queries-value"},next:{title:"Set Language",permalink:"/reference/actionflow-blocks/set-language"}},u={},d=[{value:"What are LocalStorage Actions ?",id:"what-are-localstorage-actions-",level:2},{value:"Introduction to Set To LocalStorage",id:"introduction-to-set-to-localstorage",level:2},{value:"Parameters for Set To LocalStorage",id:"parameters-for-set-to-localstorage",level:2}],g={toc:d},k="wrapper";function m(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){n(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-are-localstorage-actions-"},"What are LocalStorage Actions ?"),(0,r.kt)("p",null,"LocalStorage actions can be used to store data in the form of key value pairs which persist across page reloads and different routes inside the micro apps. The LocalStorage actions include ",(0,r.kt)("inlineCode",{parentName:"p"},"Set To LocalStorage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Get From LocalStorage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Clear From LocalStorage"),". These actions leverage localstorage api to store the data. You can also configure the action to store key value pairs in a way that makes them globally accessible across different micro-apps."),(0,r.kt)("h2",{id:"introduction-to-set-to-localstorage"},"Introduction to Set To LocalStorage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Set To LocalStorage")," action allows you to store a key-value pair in the localstorage. The key must be a string, while the value can be of any data type, though non-string values will be converted to string for storage."),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/reference/actionflow-blocks/set-keyval/setkeyval-1.png",alt:"Set To LocalStorage 1",mdxType:"Thumbnail"})),(0,r.kt)("h2",{id:"parameters-for-set-to-localstorage"},"Parameters for Set To LocalStorage"),(0,r.kt)("p",null,"The following parameters are expected by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Set To LocalStorage")," action:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepts"),(0,r.kt)("th",{parentName:"tr",align:null},"Possible values"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"key")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"any string value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"any string value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Accessible across multiple microapps")),(0,r.kt)("td",{parentName:"tr",align:null},"checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"checked/unchecked")))),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/reference/actionflow-blocks/set-keyval/setkeyval-2.png",alt:"Set To LocalStorage 2",mdxType:"Thumbnail"})),(0,r.kt)("p",null,"By using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Set To LocalStorage")," action, you can conveniently store key value pairs and access them using ",(0,r.kt)("inlineCode",{parentName:"p"},"Get From LocalStorage"),"."))}m.isMDXComponent=!0}}]);