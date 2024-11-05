"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[62848],{37761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>f});n(67294);var o=n(3905),i=n(86291);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={sidebar_position:1,title:"Reset Control Data"},c=void 0,p={unversionedId:"reference/actionflow-blocks/reset-control-data",id:"reference/actionflow-blocks/reset-control-data",title:"Reset Control Data",description:"The Reset Control Data action offers a convenient method to reset the data of specified controls within your micro-app back to their default values or initial states. This functionality is especially useful when you want to provide users with the ability to revert inputs or selections to their original settings.",source:"@site/docs/reference/actionflow-blocks/reset-control-data.md",sourceDirName:"reference/actionflow-blocks",slug:"/reference/actionflow-blocks/reset-control-data",permalink:"/reference/actionflow-blocks/reset-control-data",draft:!1,tags:[],version:"current",lastUpdatedAt:1706604329,formattedLastUpdatedAt:"Jan 30, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Reset Control Data"},sidebar:"docSidebar",previous:{title:"Redirect Parent Window",permalink:"/reference/actionflow-blocks/redirect-parent-window"},next:{title:"Reset Screen",permalink:"/reference/actionflow-blocks/reset-screen"}},u={},f=[{value:"Setting up the Reset Control Data Action",id:"setting-up-the-reset-control-data-action",level:2}],d={toc:f},h="wrapper";function m(e){var{components:t}=e,n=l(e,["components"]);return(0,o.kt)(h,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset Control Data")," action offers a convenient method to reset the data of specified controls within your micro-app back to their default values or initial states. This functionality is especially useful when you want to provide users with the ability to revert inputs or selections to their original settings."),(0,o.kt)("figure",null,(0,o.kt)(i.Z,{src:"/img/reference/actionflow-blocks/reset-control-data/resetcontroldata.png",alt:"Reset Control Data",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Reset Control Data"))),(0,o.kt)("h2",{id:"setting-up-the-reset-control-data-action"},"Setting up the Reset Control Data Action"),(0,o.kt)("p",null,"To effectively utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset Control Data")," action, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Action Flows")," area, locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset Control Data")," block.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset Control Data")," block to initiate the setup process.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the list of controls available in your current app, select the controls for which you intend to reset the data.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Continue")," to proceed with the setup.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under the Configure Connector\u2019s Field, you will need to select the controls that you want to reset the values for. This step ensures that only the specified controls will be affected."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- Trigger Dependent Data Query: When activated, this toggle ensures that resetting the selected control with values triggers the execution of a data query associated with that control. In scenarios involving nested data queries, forming a chain-like structure, the process commences from the final dependent data query and systematically executes each one in reverse order.\n\n- Maintain Pagination (Table Grid Control Only): Enabling this toggle is a straightforward yet impactful action. Upon resetting the data in a Table Grid, it preserves the existing pagination state. For instance, if the user is on the second page, the Table Grid will maintain this position post-reset. This functionality significantly reduces the necessity for users to frequently navigate through pages while observing or implementing changes within the Table Grid.\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You can also specify conditions under which the action should be executed, as well as the specific environment in which it should take place.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assigning a unique name to the action using the Action Unique Name field is essential for effective identification and management of tasks within the flow.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Finish")," to complete the setup."))),(0,o.kt)("figure",null,(0,o.kt)(i.Z,{src:"/img/reference/actionflow-blocks/reset-control-data/feild.png",alt:"feild",mdxType:"Thumbnail"})),(0,o.kt)("p",null,"By using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset Control Data")," action, you empower users with the ability to easily restore controls to their default values or initial states. This enhances user experience by offering a safety net for data modifications and simplifying the process of reverting changes."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset Control Data")," action is a valuable tool for creating user-friendly micro-apps that prioritize user control and usability, allowing users to confidently explore and interact with your app's features."))}m.isMDXComponent=!0}}]);