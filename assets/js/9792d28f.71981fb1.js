"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[67423],{23408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>h});n(67294);var a=n(3905),i=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={sidebar_position:1,title:"Navigate to Auth"},u=void 0,s={unversionedId:"reference/actionflow-blocks/navigate-to-auth",id:"reference/actionflow-blocks/navigate-to-auth",title:"Navigate to Auth",description:"The Navigate to Authentication Screen action is designed to clear cached authentication data or allow users to proceed with different credentials for connector authentication. This functionality is particularly useful when users need to manage cached tokens and switch between authentication credentials for connectors within your app.",source:"@site/docs/reference/actionflow-blocks/navigate-to-auth.md",sourceDirName:"reference/actionflow-blocks",slug:"/reference/actionflow-blocks/navigate-to-auth",permalink:"/reference/actionflow-blocks/navigate-to-auth",draft:!1,tags:[],version:"current",lastUpdatedAt:1728289102,formattedLastUpdatedAt:"Oct 7, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Navigate to Auth"},sidebar:"docSidebar",previous:{title:"Move Action",permalink:"/reference/actionflow-blocks/move-action"},next:{title:"Navigate To",permalink:"/reference/actionflow-blocks/navigate-to"}},p={},h=[{value:"Setting up the Navigate to Auth",id:"setting-up-the-navigate-to-auth",level:2},{value:"App Preview",id:"app-preview",level:2}],f={toc:h},d="wrapper";function g(e){var{components:t}=e,n=c(e,["components"]);return(0,a.kt)(d,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Navigate to Authentication Screen")," action is designed to clear cached authentication data or allow users to proceed with different credentials for connector authentication. This functionality is particularly useful when users need to manage cached tokens and switch between authentication credentials for connectors within your app."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/actionflow-blocks/navigate-to-auth/navigate-to-auth.png",alt:"Navigate to Auth URL",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Navigate to Auth URL"))),(0,a.kt)("h2",{id:"setting-up-the-navigate-to-auth"},"Setting up the Navigate to Auth"),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/actionflow-blocks/navigate-to-auth/feild.jpeg",alt:"Navigate to Auth URL",mdxType:"Thumbnail"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After successful authentication with a connector, you might want to reset cached token data. In this case, you can utilize the ",(0,a.kt)("inlineCode",{parentName:"p"},"Navigate to Authentication Screen")," action.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Configure Action's Fields section, you'll find a dropdown option that determines whether the app should be reloaded after authentication or if it should continue from where the user left off."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If set to ",(0,a.kt)("inlineCode",{parentName:"li"},"TRUE"),": After the user authenticates on the Managed Authentication screen, clicking ",(0,a.kt)("inlineCode",{parentName:"li"},"Continue")," will reload the app and start from the beginning. This is useful when you want to provide a fresh start after authentication."),(0,a.kt)("li",{parentName:"ul"},"If set to ",(0,a.kt)("inlineCode",{parentName:"li"},"FALSE"),": After the user authenticates on the Managed Authentication screen, clicking ",(0,a.kt)("inlineCode",{parentName:"li"},"Continue")," will resume the app from where the user left off, preserving all data and progress.")))),(0,a.kt)("h2",{id:"app-preview"},"App Preview"),(0,a.kt)("p",null,"Once you've set up the ",(0,a.kt)("inlineCode",{parentName:"p"},"Navigate to Authentication Screen")," action and configured its fields, you can preview its behavior."),(0,a.kt)("p",null,"In the preview, you'll experience how the action influences the app's behavior after authentication. Depending on whether the app is reloaded or continues from the last state, users can have a seamless experience while navigating the app's authenticated sections."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/actionflow-blocks/navigate-to-auth/preview.png",alt:"Set Routing URL",mdxType:"Thumbnail"})),(0,a.kt)("p",null,"Utilizing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Navigate to Authentication Screen")," action allows you to enhance user experience by providing options to manage cached authentication data and choose how the app behaves after authentication."))}g.isMDXComponent=!0}}]);