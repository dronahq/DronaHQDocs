"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[18186],{50387:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var i=n(3905),o=n(86291);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function r(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const s={sidebar_position:114},u="Test, Publish, Rollback",c={unversionedId:"automations/test-publish-rollback",id:"automations/test-publish-rollback",title:"Test, Publish, Rollback",description:"Testing Automation",source:"@site/docs/automations/test-publish-rollback.md",sourceDirName:"automations",slug:"/automations/test-publish-rollback",permalink:"/automations/test-publish-rollback",draft:!1,tags:[],version:"current",lastUpdatedAt:1706882298,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:114,frontMatter:{sidebar_position:114},sidebar:"docSidebar",previous:{title:"Webhook",permalink:"/automations/webhook"},next:{title:"Automation Run Logs",permalink:"/automations/run-logs"}},p={},d=[{value:"Testing Automation",id:"testing-automation",level:2},{value:"Run logs",id:"run-logs",level:3},{value:"Running Individual Task",id:"running-individual-task",level:3},{value:"Publish the Automation",id:"publish-the-automation",level:2},{value:"Rollback",id:"rollback",level:2},{value:"Version Preview",id:"version-preview",level:3}],h={toc:d},m="wrapper";function k(t){var{components:e}=t,n=r(t,["components"]);return(0,i.kt)(m,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){a(t,e,n[e])}))}return t}({},h,n),{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"test-publish-rollback"},"Test, Publish, Rollback"),(0,i.kt)("h2",{id:"testing-automation"},"Testing Automation"),(0,i.kt)("p",null,"Upon configuring your automation flow, you can comprehensively test the entire process by simply clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Preview/Play")," button located on the top menu."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/automation/test-publish-rollback/test.png",alt:"Preview/Play Button",width:"70%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Preview/Play Button"))),(0,i.kt)("p",null,"Please note that testing the automation involving ",(0,i.kt)("inlineCode",{parentName:"p"},"webhooks")," may vary, as these automations typically require sample payloads for accurate assessment. In such cases, clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"play")," button will prompt a payload modal, allowing you to provide sample data for testing."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/automation/webhook/test.png",alt:"Test Webhook Automation",width:"70%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Test Webhook Automation"))),(0,i.kt)("p",null,"After successful execution, you will find the ",(0,i.kt)("inlineCode",{parentName:"p"},"Run logs")," section appearing below, providing a comprehensive overview of the automation flow's status."),(0,i.kt)("h3",{id:"run-logs"},"Run logs"),(0,i.kt)("p",null,"The Logs feature enables users to analyze the entire automation process, displaying the date/time and running status of each task within the flow. For further insights on the run logs, kindly refer ",(0,i.kt)("a",{parentName:"p",href:"/automations/run-logs"},"here"),"."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/automation/test-publish-rollback/log-panel.png",alt:"Run Logs Panel",width:"80%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Run Logs Panel"))),(0,i.kt)("h3",{id:"running-individual-task"},"Running Individual Task"),(0,i.kt)("p",null,"In addition to executing the entire automation flow, you have the option to test individual tasks. Simply click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"play icon")," on the specific task to execute it independently. This will provide you with the request, response, and output for that particular task."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/automation/test-publish-rollback/individual-task-run.png",alt:"Individual Task Run",width:"50%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Individual Task Run"))),(0,i.kt)("admonition",{title:"task dependency",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If a task is dependent on the output of a previous task, running it individually without executing the prior task may result in an error. In such cases, make sure to run the previous task individually before executing the current one."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/automation/test-publish-rollback/task-dependency.png",alt:"Task Dependency",width:"50%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Task Dependency")))),(0,i.kt)("h2",{id:"publish-the-automation"},"Publish the Automation"),(0,i.kt)("p",null,"After meticulously configuring the automation flow and conducting thorough testing, it is time to publish the automation and set it into action. To achieve this, simply click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Publish")," button."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Release Notes"),(0,i.kt)("span",{style:{"font-size":"20px","font-weight":500,"padding-left":"4px",color:"#FF5656"}},"*")," - Provide a concise yet informative description for the publication. This will help users understand the changes or updates made in this version."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Version")," - Choose the version number to be assigned to the publication. It is essential to select a version that is greater than the latest one, ensuring a clear and organized versioning system.")),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/automation/test-publish-rollback/publish-sidebar.png",alt:"Publish sidebar",width:"70%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Publish sidebar"))),(0,i.kt)("admonition",{title:"Enable Automation",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"For the automation to function as intended and be available for seamless execution, ensure that the automation is enabled. You can simply toggle the switch to turn on or off the Automation status. If the automation is ",(0,i.kt)("inlineCode",{parentName:"p"},"disabled"),", it will pause the live automation, and it will no longer be triggered unless enabled again."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/automation/test-publish-rollback/enable-automation.png",alt:"Enable/Disable Automation",width:"70%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Enable/Disable Automation")))),(0,i.kt)("p",null,"With the automation now published and active, it will carry out its designated tasks based on the predefined triggers, streamlining your processes and maximizing efficiency. Enjoy the seamless automation experience!"),(0,i.kt)("h2",{id:"rollback"},"Rollback"),(0,i.kt)("p",null,"To explore and access previously published versions of the automation, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," dropdown located in the top menu bar. This action will gracefully unveil a comprehensive list of all the published versions of the automation."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/automation/test-publish-rollback/version-modal.png",alt:"Version Modal",width:"70%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Version list modal"))),(0,i.kt)("p",null,"With the power of automation, you possess the flexibility to roll back to any previous version that was published earlier. This enables you to gracefully revert to a known state, ensuring smooth operation and easy recovery."),(0,i.kt)("p",null,"To initiate a rollback, simply direct your attention to the 'Roll Back' column and click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"arrow")," next to the desired version. "),(0,i.kt)("h3",{id:"version-preview"},"Version Preview"),(0,i.kt)("p",null,"Alternatively, for a sneak peek at the structure of a specific version, click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"eye")," icon under the 'Preview' column."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/automation/test-publish-rollback/version-preview.png",alt:"Version Preview",width:"80%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Version Preview"))),(0,i.kt)("p",null,"Once you have confidently identified the version you wish to roll back to, make your move by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Roll back")," button or, if you change your mind, simply click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"X")," button to gracefully close the preview."),(0,i.kt)("admonition",{title:"live automation",type:"caution"},(0,i.kt)("p",{parentName:"admonition"}," After performing the rollback, the chosen version becomes a draft version, safely isolated from the live automation. This allows you to meticulously review and fine-tune the automation until you are ready to publish it once again.")),(0,i.kt)("p",null,"With this seamless and versatile rollback mechanism, you can confidently manage and maintain the evolution of your automation, ensuring a smooth and efficient workflow at all times."))}k.isMDXComponent=!0}}]);