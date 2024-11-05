"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[78283],{16124:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>g,metadata:()=>c,toc:()=>p});o(67294);var i=o(3905),n=o(86291);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function a(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const g={sidebar_position:6,title:"Sumologic Setup",description:"Learn how to integrate Sumologic Logger with DronaHQ."},u="Sumologic Logger Integration",c={unversionedId:"audit-logger/sumologic-setup",id:"audit-logger/sumologic-setup",title:"Sumologic Setup",description:"Learn how to integrate Sumologic Logger with DronaHQ.",source:"@site/docs/audit-logger/sumologic-setup.md",sourceDirName:"audit-logger",slug:"/audit-logger/sumologic-setup",permalink:"/audit-logger/sumologic-setup",draft:!1,tags:[],version:"current",lastUpdatedAt:1710335898,formattedLastUpdatedAt:"Mar 13, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Sumologic Setup",description:"Learn how to integrate Sumologic Logger with DronaHQ."},sidebar:"docSidebar",previous:{title:"Datadog Setup",permalink:"/audit-logger/datadog-setup"},next:{title:"Sentry Setup",permalink:"/audit-logger/sentry-setup"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Configuration Steps",id:"configuration-steps",level:2},{value:"Expected log in Sumologic Logger:",id:"expected-log-in-sumologic-logger",level:2},{value:"Testing Sumologic Logger Integration",id:"testing-sumologic-logger-integration",level:2}],d={toc:p},m="wrapper";function k(e){var{components:t}=e,o=a(e,["components"]);return(0,i.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},i=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),i.forEach((function(t){r(e,t,o[t])}))}return e}({},d,o),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sumologic-logger-integration"},"Sumologic Logger Integration"),(0,i.kt)("p",null,"This documentation provides step-by-step instructions on how to integrate Sumologic Logger as an audit logger within the DronaHQ platform."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Sumologic Logger integration allows you to capture and manage logs efficiently in your DronaHQ modules. Follow the steps below to set up Sumologic Logger as your audit logger."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you begin, ensure that you have the following prerequisites in place:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A DronaHQ account with an Enterprise Plan."),(0,i.kt)("li",{parentName:"ul"},"Access to a Sumologic account."),(0,i.kt)("li",{parentName:"ul"},"Sumologic connection details.")),(0,i.kt)("h2",{id:"configuration-steps"},"Configuration Steps"),(0,i.kt)("p",null,"To get started with Sumologic Logger integration, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a new collector or select an existing one to send your logs to.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To create new collector : In ",(0,i.kt)("inlineCode",{parentName:"p"},"Manage Data > Collection \nAdd Collector > Hosted Collector > Select HTTP Logs & Metrics")," for data source")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Obtain the Sumologic HTTP Source URL. You will need this URL to configure the integration."))),(0,i.kt)("figure",null,(0,i.kt)(n.Z,{src:"/img/audit-logger/sourceurl-sumologic.png",alt:"Source URL of Collector",width:"100%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Source URL of Collector"))),(0,i.kt)("p",null,"To configure Sumologic Logger as your audit logger, follow these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Audit Logger")," section, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Setup External Logging."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'In the "Select Logger Configuration" dropdown, choose "Sumologic Logger."'))),(0,i.kt)("figure",null,(0,i.kt)(n.Z,{src:"/img/audit-logger/dropdown-logger.png",alt:"Audit logger Dropdown select",width:"100%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Audit logger Dropdown select"))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Provide the Sumologic HTTP Source URL in the appropriate field.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click the "Create Integration" button to initiate the integration process.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the integration is successful, you will see a ",(0,i.kt)("inlineCode",{parentName:"p"},"Logger Initialized")," message."))),(0,i.kt)("figure",null,(0,i.kt)(n.Z,{src:"/img/audit-logger/sumologic-setup.png",alt:"Sumologic Setup",width:"100%",mdxType:"Thumbnail"}),(0,i.kt)(n.Z,{src:"/img/audit-logger/audit-logger-setup.png",alt:"Audit Logger Setup",width:"100%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Audit Logger Setup"))),(0,i.kt)("h2",{id:"expected-log-in-sumologic-logger"},"Expected log in Sumologic Logger:"),(0,i.kt)("figure",null,(0,i.kt)(n.Z,{src:"/img/audit-logger/output-sumologic.png",alt:"External log Output",width:"100%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"External log Output"))),(0,i.kt)("h2",{id:"testing-sumologic-logger-integration"},"Testing Sumologic Logger Integration"),(0,i.kt)("p",null,"You can test the Sumologic Logger integration to ensure it's functioning as expected:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Within the External Logging settings, look for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Test")," button and input custom log details.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log specific details such as event names, user information, organization ID, and more. This data will be useful for monitoring and analysis."))),(0,i.kt)("p",null,"By following these steps, you can seamlessly integrate Sumologic Logger as an audit logger in your DronaHQ account, enhancing your log management capabilities."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: Ensure that you provide accurate Sumologic Logger connection details for a smooth integration experience.")))}k.isMDXComponent=!0}}]);