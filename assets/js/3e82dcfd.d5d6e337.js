"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[93612],{18738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>u});n(67294);var r=n(3905),a=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={sidebar_position:1,title:"Trello"},s=void 0,d={unversionedId:"reference/connectors/trello",id:"reference/connectors/trello",title:"Trello",description:"Trello is a versatile project management tool that uses boards, lists, and cards to help teams organize tasks and projects visually.",source:"@site/docs/reference/connectors/trello.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/trello",permalink:"/reference/connectors/trello",draft:!1,tags:[],version:"current",lastUpdatedAt:1692684263,formattedLastUpdatedAt:"Aug 22, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Trello"},sidebar:"docSidebar",previous:{title:"SurrealDB",permalink:"/reference/connectors/surrealdb"},next:{title:"Twilio",permalink:"/reference/connectors/twillio"}},p={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring API Connector in DronaHQ",id:"configuring-api-connector-in-dronahq",level:2},{value:"Supported API endpoints",id:"supported-api-endpoints",level:2}],m={toc:u},f="wrapper";function k(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(f,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Trello is a versatile project management tool that uses boards, lists, and cards to help teams organize tasks and projects visually. "),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"API Key and Token: To connect with the Trello API, you'll need an API key and a user token. These credentials are obtained by generating a developer API key from the Trello developer website. Make sure to keep your API key and token secure.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Access to Trello App: If you plan to use a custom Trello app for integration, ensure you have created the app within your Trello account. This step is required for some advanced features and integrations.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Permissions: Make sure you have the necessary permissions to interact with the chosen board and list within Trello. This includes the ability to create, edit, and manage cards."))),(0,r.kt)("h2",{id:"configuring-api-connector-in-dronahq"},"Configuring API Connector in DronaHQ"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Account name"),". Then add the ",(0,r.kt)("inlineCode",{parentName:"p"},"API key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"API Token")," for the connector account. Once all details are added, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Save"),". Your connector configuration is now done."),(0,r.kt)("figure",null,(0,r.kt)(a.Z,{src:"/img/reference/connectors/trello/enterdetails.png",alt:"Trello to be enter Sample details.",mdxType:"Thumbnail"})),(0,r.kt)("p",null,"After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the ",(0,r.kt)("inlineCode",{parentName:"p"},"connected accounts")," list. You can find this option from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connector -> Manage Account")," section. This centralized location allows you to conveniently monitor and manage your connected accounts."),(0,r.kt)("h2",{id:"supported-api-endpoints"},"Supported API endpoints"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetMyBoards"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve a list of boards associated with your account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetBoardLists"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve the lists within a specific board.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AddCard"),(0,r.kt)("td",{parentName:"tr",align:null},"Add a new card to a specified list on a board.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetCardsInList"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve the cards within a specific list on a board.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetAllOpenCardsInBoard"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve all open cards within a specific board.")))))}k.isMDXComponent=!0}}]);