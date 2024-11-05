"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[4199],{17652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>d});n(67294);var i=n(3905),a=n(86291);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={sidebar_position:1},p="Reading query params in public apps",u={unversionedId:"building-apps-concepts/reading-query-params-in-public-apps",id:"building-apps-concepts/reading-query-params-in-public-apps",title:"Reading query params in public apps",description:"Query string parameters are key-value pairs which store values in the URL such as search terms or page translation data that can be referenced inside the Web App. Using DronaHQ's Query String config option, you can configure custom query string parameters to perform certain actions on page load or prefill data to input controls within the app.",source:"@site/docs/building-apps-concepts/reading-query-params-in-public-apps.md",sourceDirName:"building-apps-concepts",slug:"/building-apps-concepts/reading-query-params-in-public-apps",permalink:"/building-apps-concepts/reading-query-params-in-public-apps",draft:!1,tags:[],version:"current",lastUpdatedAt:1701973196,formattedLastUpdatedAt:"Dec 7, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Data Query Performance",permalink:"/building-apps-concepts/query-performance"},next:{title:"Reusable headers",permalink:"/building-apps-concepts/reusable-headers"}},c={},d=[{value:"Configure Query String Parameters",id:"configure-query-string-parameters",level:2},{value:"Accessing Query String Values",id:"accessing-query-string-values",level:2},{value:"Using Data Bind Section",id:"using-data-bind-section",level:3},{value:"Using Actionflow&#39;s Compute Block",id:"using-actionflows-compute-block",level:3}],g={toc:d},m="wrapper";function b(e){var{components:t}=e,n=l(e,["components"]);return(0,i.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reading-query-params-in-public-apps"},"Reading query params in public apps"),(0,i.kt)("p",null,"Query string parameters are key-value pairs which store values in the URL such as search terms or page translation data that can be referenced inside the Web App. Using DronaHQ's ",(0,i.kt)("inlineCode",{parentName:"p"},"Query String")," config option, you can configure custom query string parameters to perform certain actions on page load or prefill data to input controls within the app."),(0,i.kt)("h2",{id:"configure-query-string-parameters"},"Configure Query String Parameters"),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Config Options -> Query String"),". Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Add query string")," and define your query strings name and value. Once done, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Save Query String"),"."),(0,i.kt)("figure",null,(0,i.kt)(a.Z,{src:"/img/building-apps-concepts/reading_query_params_in_public_apps/query-string-config-options.png",alt:"Query String Config Options Modal",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Query string config screen"))),(0,i.kt)("h2",{id:"accessing-query-string-values"},"Accessing Query String Values"),(0,i.kt)("p",null,"The query string parameter values can be accessed through the ",(0,i.kt)("inlineCode",{parentName:"p"},'QUERYSTRING("paramName")')," function where ",(0,i.kt)("inlineCode",{parentName:"p"},"paramName")," is the name of the query string parameter you want to access. The query string value can be statically binded to any control using the Formula Box available in Data Bind Section or can be accessed in the Actionflow using the Compute action block."),(0,i.kt)("h3",{id:"using-data-bind-section"},"Using Data Bind Section"),(0,i.kt)("p",null,"You can bind query string value to the control, by clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Control -> Data Bind Section -> FX -> Edit")," and then specify the query string parameter within the ",(0,i.kt)("inlineCode",{parentName:"p"},'QUERYSTRING("paramName")')," function in the formula box as shown below. In our example, it is ",(0,i.kt)("inlineCode",{parentName:"p"},'QUERYSTRING("Name")'),"."),(0,i.kt)("figure",null,(0,i.kt)(a.Z,{src:"/img/building-apps-concepts/reading_query_params_in_public_apps/data-bind-formula-box-query-string.png",alt:"Query String Config Options Modal",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Data bind formula box"))),(0,i.kt)("h3",{id:"using-actionflows-compute-block"},"Using Actionflow's Compute Block"),(0,i.kt)("p",null,"Binding query string variable is a two step process in Actionflow, where firstly the query string parameter value is stored inside a variable using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Compute")," block and then using ",(0,i.kt)("inlineCode",{parentName:"p"},"Set Control Value")," block the variable's stored value is assigned to a control."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Access Query String")," - Add a ",(0,i.kt)("inlineCode",{parentName:"li"},"Compute")," block, and create variable(s) by clicking on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Variable")," button. In our example, we have set the variable name as ",(0,i.kt)("inlineCode",{parentName:"li"},"emailVar")," and the formula as ",(0,i.kt)("inlineCode",{parentName:"li"},'QUERYSTRING("Email")'),".")),(0,i.kt)("figure",null,(0,i.kt)(a.Z,{src:"/img/building-apps-concepts/reading_query_params_in_public_apps/action-flow-compute-query-string.png",alt:"Action Flow Set Control Value - Query String",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Actionflow compute block to access query string value"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bind Variable to Control")," - Within the ",(0,i.kt)("inlineCode",{parentName:"li"},"Set Control Value")," block, select the control you want to bind data with, and set the control value as the variable created inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"Compute")," block.")),(0,i.kt)("figure",null,(0,i.kt)(a.Z,{src:"/img/building-apps-concepts/reading_query_params_in_public_apps/action-flow-setControlValue-query-string.png",alt:"Action Flow Set Control Value - Query String",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Variable value binded to control"))))}b.isMDXComponent=!0}}]);