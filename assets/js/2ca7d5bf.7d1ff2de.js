"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[99730],{94737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>u});r(67294);var a=r(3905);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const l={sidebar_position:47},s="Keywords",d={unversionedId:"reference/keywords-js-utilities/keywords",id:"reference/keywords-js-utilities/keywords",title:"Keywords",description:"Keywords are predefined variables in a DronaHQ that users can use in their applications. They provide important information about the logged-in user or the application's state, which is vital for building logical workflows. In the DronaHQ, there are three different sets of keywords available, each serving different purposes and located in various locations within the DronaHQ.",source:"@site/docs/reference/keywords-js-utilities/keywords.md",sourceDirName:"reference/keywords-js-utilities",slug:"/reference/keywords-js-utilities/keywords",permalink:"/reference/keywords-js-utilities/keywords",draft:!1,tags:[],version:"current",lastUpdatedAt:1715344827,formattedLastUpdatedAt:"May 10, 2024",sidebarPosition:47,frontMatter:{sidebar_position:47},sidebar:"docSidebar",previous:{title:"Keywords and JS Utilities",permalink:"/category/keywords-and-js-utilities"},next:{title:"Fx formulas",permalink:"/reference/keywords-js-utilities/fx-formulas"}},p={},u=[{value:"App builder keywords",id:"app-builder-keywords",level:2},{value:"Automation Keywords",id:"automation-keywords",level:2},{value:"BPM Flow keywords",id:"bpm-flow-keywords",level:2}],k={toc:u},m="wrapper";function c(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},k,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keywords"},"Keywords"),(0,a.kt)("p",null,"Keywords are predefined variables in a DronaHQ that users can use in their applications. They provide important information about the logged-in user or the application's state, which is vital for building logical workflows. In the DronaHQ, there are three different sets of keywords available, each serving different purposes and located in various locations within the DronaHQ."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#app-builder-keywords"},"App builder keywords")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#automation-keywords"},"Automation keywords")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#bpm-flow-keywords"},"BPM Flow keywords"))),(0,a.kt)("h2",{id:"app-builder-keywords"},"App builder keywords"),(0,a.kt)("p",null,"In app development, keywords play a crucial role as they are used during the app-building process and are also visible in the app's preview and final published version. Generally, two types of keywords are utilized: ",(0,a.kt)("inlineCode",{parentName:"p"},"Dynamically generated")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Predefined or Static"),"."),(0,a.kt)("p",null,"Dynamically generated keywords, such as Routing Keywords and Querystring Keywords, are generated dynamically based on configuration, allowing for more flexibility and customization."),(0,a.kt)("p",null,"On the other hand, Predefined or static keywords are pre-initialized during the app initialization process. These keywords values may change if modified using actions or on some system events."),(0,a.kt)("p",null,"Following are list of all the static keywords:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Keyword"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"USER EMAIL"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores the logged-in user's email address.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"USERNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores the logged-in user's name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"USERFIRSTNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores the name of the logged-in user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,a.kt)("td",{parentName:"tr",align:null},"Static keyword for boolean true.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,a.kt)("td",{parentName:"tr",align:null},"Static keyword for boolean false.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NULL"),(0,a.kt)("td",{parentName:"tr",align:null},"Static keyword for js null value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DATAENV"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores the current data environment of the application and can be modified using the actions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DATAENVLIST"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores the list of available data environments in the application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WORKFLOWENV"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores the current workflow environment of the application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DEVICESIZE"),(0,a.kt)("td",{parentName:"tr",align:null},"Its value can be either Desktop or Mobile or Mobile portrait or Mobile landscape depending on the device and its orientation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DEVICETYPE"),(0,a.kt)("td",{parentName:"tr",align:null},"Its value can be android, ios and web depending upon the type of device the user is using.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MODE"),(0,a.kt)("td",{parentName:"tr",align:null},"Tells you if the device is either online or offline depending upon internet connectivity.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WIDTH"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns you the width of the viewport and is updated every time the viewport is resized.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"APPENV"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores the App environment and cannot be modified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"APPNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores the App name and cannot be modified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LANGUAGE"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores the current app language, used in localization and can be modified using actions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VERSION"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores the current version of the application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ACTIVESCREEN"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns the current active screen id.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OVERLAYSCREEN"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns the current active overlay screens id like Menu / Popup / Tray")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"USERGROUP"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns all the group name the logged-in user belongs to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PROFILEIMAGE"),(0,a.kt)("td",{parentName:"tr",align:null},"Returns Profile image URL of the logged-in user")))),(0,a.kt)("h2",{id:"automation-keywords"},"Automation Keywords"),(0,a.kt)("p",null,"Automation keywords provide essential functionalities for DronaHQ's automation builder, enabling users to interact with incoming data, access automation-related details, and efficiently manage tasks within their automated workflows."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Keyword"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTOMATION.version"),(0,a.kt)("td",{parentName:"tr",align:null},"Retrieves the version of the running automation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTOMATION.triggerTime"),(0,a.kt)("td",{parentName:"tr",align:null},"Retrieves the start time of the trigger for the automation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AUTOMATION.logs"),(0,a.kt)("td",{parentName:"tr",align:null},"Accesses the Run Logs within a task, storing preview task logs. Helps with debugging.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"webhook.body"),(0,a.kt)("td",{parentName:"tr",align:null},"Accesses the body of the webhook request. Useful for extracting data from incoming requests.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"webhook.query"),(0,a.kt)("td",{parentName:"tr",align:null},"Accesses the query parameters of the webhook request. Helps in processing URL parameters.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"webhook.headers"),(0,a.kt)("td",{parentName:"tr",align:null},"Accesses the headers of the webhook request. Useful for authentication and request details.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SELF"),(0,a.kt)("td",{parentName:"tr",align:null},"Refers to the current task. In the Logging section, use ",(0,a.kt)("inlineCode",{parentName:"td"},"SELF.output_variable_name")," to access the task's output. Useful for data chaining between tasks.")))),(0,a.kt)("h2",{id:"bpm-flow-keywords"},"BPM Flow keywords"))}c.isMDXComponent=!0}}]);