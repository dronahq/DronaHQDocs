"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[13513],{89598:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>f});i(67294);var n=i(3905),o=i(86291);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}const l={sidebar_position:5},p="Push notifications",c={unversionedId:"mobile-apps/push-notifications",id:"mobile-apps/push-notifications",title:"Push notifications",description:"Push notifications in DronaHQ offer a powerful way to engage users and deliver real-time updates, alerts, and personalized messages directly to their mobile devices. With push notifications, creators can keep users informed and engaged, enhancing user retention and overall app experience.",source:"@site/docs/mobile-apps/push-notifications.md",sourceDirName:"mobile-apps",slug:"/mobile-apps/push-notifications",permalink:"/mobile-apps/push-notifications",draft:!1,tags:[],version:"current",lastUpdatedAt:1692255300,formattedLastUpdatedAt:"Aug 17, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docSidebar",previous:{title:"Native actionblocks",permalink:"/mobile-apps/native-actionblocks"},next:{title:"Offline apps",permalink:"/mobile-apps/offline-apps"}},u={},f=[{value:"Configure Push Notification task in Actionflow",id:"configure-push-notification-task-in-actionflow",level:2},{value:"Sending Push Notification",id:"sending-push-notification",level:2}],d={toc:f},h="wrapper";function m(e){var{components:t}=e,i=s(e,["components"]);return(0,n.kt)(h,r(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){a(e,t,i[t])}))}return e}({},d,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"push-notifications"},"Push notifications"),(0,n.kt)("p",null,"Push notifications in DronaHQ offer a powerful way to engage users and deliver real-time updates, alerts, and personalized messages directly to their mobile devices. With push notifications, creators can keep users informed and engaged, enhancing user retention and overall app experience."),(0,n.kt)("p",null,"Push notifications are supported by DronaHQ End user portal - ",(0,n.kt)("inlineCode",{parentName:"p"},"Android")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"iOS")," Mobile App."),(0,n.kt)("h2",{id:"configure-push-notification-task-in-actionflow"},"Configure Push Notification task in Actionflow"),(0,n.kt)("p",null,"Let us see how to add a Push notification. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"So to one of your screen, add a ",(0,n.kt)("inlineCode",{parentName:"p"},"button")," control and go to its ",(0,n.kt)("inlineCode",{parentName:"p"},"Events"),". On the ",(0,n.kt)("inlineCode",{parentName:"p"},"button_click")," event, add an Action flow.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Under ",(0,n.kt)("inlineCode",{parentName:"p"},"Server Side")," Actions, select ",(0,n.kt)("inlineCode",{parentName:"p"},"Push Notification")," task and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Continue"),"."))),(0,n.kt)("figure",null,(0,n.kt)(o.Z,{src:"/img/mobile-apps/push-notification-configure.png",alt:"Configure Push Notification",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Configure Push Notification"))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("inlineCode",{parentName:"p"},"App")," to be opened when the user clicks the notification received in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Mobile App"),". ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the User List. This is the array of users. Make sure that you use an Array format for providing the list of users, even when you would be adding a single user id. These users will be those that are added in your ",(0,n.kt)("inlineCode",{parentName:"p"},"Manage Users")," listing.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter the Notification heading, Notification Title (a mandatory field), Notification body, Notification Icon URL and Notification Image URL and click Continue. "))),(0,n.kt)("p",null,"You can also use Action flow ",(0,n.kt)("inlineCode",{parentName:"p"},"keywords")," to provide values to the respective fields."),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"You can specify a condition to ",(0,n.kt)("inlineCode",{parentName:"li"},"When to Execute")," the particular action flow, Action unique name (mandatory field), and also add any output variables. These variables can then be used in your other Actionflow blocks. Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Finish")," and the Push notification task is ready.")),(0,n.kt)("p",null,"The Push notification task returns Error or Success. So you can define further tasks to be completed on error or success of the push notification task."),(0,n.kt)("figure",null,(0,n.kt)(o.Z,{src:"/img/mobile-apps/push-notification-actionflow.png",alt:"Push Notification Actionflow",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Push Notification Actionflow"))),(0,n.kt)("p",null,"It is important to remember that you need to publish your app first before your notifications can be received by the respective users or group of users in the Super App. Also, it is important to note that the user who would be receiving the notification is logged in to the App so that notifications are received by the user. The iOS users also need to make sure that the Push notification permissions are enabled."),(0,n.kt)("admonition",{title:"NOTE",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"You need to publish your app first before your notifications can be received by the respective users or group of users in the Mobile App."),(0,n.kt)("li",{parentName:"ul"},"User who would be receiving the notification must be logged in to the App so that notifications are received by the user."),(0,n.kt)("li",{parentName:"ul"},"The iOS users also need to make sure that the Push notification permissions are enabled."))),(0,n.kt)("h2",{id:"sending-push-notification"},"Sending Push Notification"),(0,n.kt)("p",null,"So now when you run this form and trigger the ",(0,n.kt)("inlineCode",{parentName:"p"},"button_click")," event on click of the ",(0,n.kt)("inlineCode",{parentName:"p"},"button")," control, you would be able to see the notification in your Mobile app."),(0,n.kt)("figure",null,(0,n.kt)(o.Z,{src:"/img/mobile-apps/push-notification-form.png",alt:"Push Notification Form",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Push Notification Form"))),(0,n.kt)("p",null,"The notification can be seen in the illustration below. When you click on any of the notifications, it will open the App specified. In the example here ",(0,n.kt)("inlineCode",{parentName:"p"},"TestApp_Vedavati")," App would be opened when you click on the Notification. You can note the configuration done for the example."),(0,n.kt)("figure",null,(0,n.kt)(o.Z,{src:"/img/mobile-apps/push-notification-sample-configure.png",alt:"Push Notification Configured",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Push Notification Configured"))),(0,n.kt)("p",null,"So the notification received on click of the Push notification button is as seen below on the DHQ Life mobile app."),(0,n.kt)("figure",null,(0,n.kt)(o.Z,{src:"/img/mobile-apps/push-notification-received.jpg",alt:"Push Notification Received",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Push Notification Received"))))}m.isMDXComponent=!0}}]);