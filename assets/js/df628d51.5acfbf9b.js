"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[43267],{18155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>l,toc:()=>p});n(67294);var i=n(3905),r=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={sidebar_position:1,title:"Resending activation links"},u="Resending activation links",l={unversionedId:"org-user-management-concepts/resending-activation-links",id:"org-user-management-concepts/resending-activation-links",title:"Resending activation links",description:"The feature of resending activation links for unverified and non-activated user accounts is a valuable tool for ensuring a smooth onboarding process. When users are invited in DronaHQ, they receive an activation link via email to verify their account. However, due to various reasons such as email delivery issues or oversight, some users may miss or ignore the initial activation email.",source:"@site/docs/org-user-management-concepts/resending-activation-links.md",sourceDirName:"org-user-management-concepts",slug:"/org-user-management-concepts/resending-activation-links",permalink:"/org-user-management-concepts/resending-activation-links",draft:!1,tags:[],version:"current",lastUpdatedAt:1692255300,formattedLastUpdatedAt:"Aug 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Resending activation links"},sidebar:"docSidebar",previous:{title:"Just in time user provisioning with SSO",permalink:"/org-user-management-concepts/jit-user-provisioning-with-sso"},next:{title:"Using SSO oAuth token in Connectors",permalink:"/org-user-management-concepts/using-sso-oauth-token-in-connectors"}},d={},p=[],m={toc:p},g="wrapper";function v(e){var{components:t}=e,n=s(e,["components"]);return(0,i.kt)(g,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"resending-activation-links"},"Resending activation links"),(0,i.kt)("p",null,"The feature of resending activation links for unverified and non-activated user accounts is a valuable tool for ensuring a smooth onboarding process. When users are invited in DronaHQ, they receive an activation link via email to verify their account. However, due to various reasons such as email delivery issues or oversight, some users may miss or ignore the initial activation email."),(0,i.kt)("p",null,"To address this, the ",(0,i.kt)("inlineCode",{parentName:"p"},"activation link")," feature allows administrators to fetch the activation link and template email manually. They can then send the users a reminder to activate their accounts. This feature not only ensures that legitimate users can complete the registration process but also enhances security by preventing unauthorized account activations."),(0,i.kt)("admonition",{title:"Please Note",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The admin users in DronaHQ will only see this option when the invited users have not yet verified their accounts or activated their account. If the user is added with a password this option will not be seen against those users as they are pre-activated users. Also if SSO is configured in the account this option is no relevance for those users.")),(0,i.kt)("figure",null,(0,i.kt)(r.Z,{src:"/img/user-management/activate-model.png",alt:"Activation model",width:"100%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Activation help"))))}v.isMDXComponent=!0}}]);