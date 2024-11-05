"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[18775],{94848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>d});n(67294);var r=n(3905),a=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={sidebar_position:1,title:"Clearbit"},p=void 0,s={unversionedId:"reference/connectors/clearbit",id:"reference/connectors/clearbit",title:"Clearbit",description:"Clearbit is a data enrichment platform that provides accurate and up-to-date information about individuals and companies",source:"@site/docs/reference/connectors/clearbit.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/clearbit",permalink:"/reference/connectors/clearbit",draft:!1,tags:[],version:"current",lastUpdatedAt:1716294393,formattedLastUpdatedAt:"May 21, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Clearbit"},sidebar:"docSidebar",previous:{title:"Clarifai",permalink:"/reference/connectors/clarifai"},next:{title:"ClickHouse",permalink:"/reference/connectors/clickhouse"}},u={},d=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring API Connector in DronaHQ",id:"configuring-api-connector-in-dronahq",level:2},{value:"Supported API endpoints",id:"supported-api-endpoints",level:2}],m={toc:d},b="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(b,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Clearbit is a data enrichment platform that provides accurate and up-to-date information about individuals and companies"),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clearbit API Key: Obtain an API key from Clearbit by signing up for an account and creating a new API key. This key is required to authenticate your requests when using the Clearbit Connector.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Environment Setup: Ensure you have a development environment capable of making HTTP requests to external APIs. This could involve using programming languages like Python, JavaScript, or any language that supports HTTP requests."))),(0,r.kt)("h2",{id:"configuring-api-connector-in-dronahq"},"Configuring API Connector in DronaHQ"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Account name"),". Then add the ",(0,r.kt)("inlineCode",{parentName:"p"},"API key")," for the connector account. Once all details are added, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Save"),". Your connector configuration is now done."),(0,r.kt)("figure",null,(0,r.kt)(a.Z,{src:"/img/reference/connectors/clearbit/details.png",alt:"Clearbit configuration details",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Clearbit configuration details"))),(0,r.kt)("h2",{id:"supported-api-endpoints"},"Supported API endpoints"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lookup person by email"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieves information about a person based on email.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lookup company by domain"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieves company details based on the domain name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lookup domain by company"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieves domain information associated with a company.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Company autocomplete by name"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides company name suggestions as you type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Company Logo by domain"),(0,r.kt)("td",{parentName:"tr",align:null},"Fetches the logo of a company using its domain name.")))))}f.isMDXComponent=!0}}]);