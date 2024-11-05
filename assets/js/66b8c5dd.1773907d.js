"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[4494],{3954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905),i=n(86291);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={sidebar_position:5,title:"General and security settings"},c="General and security settings",p={unversionedId:"org-management/general-and-security-settings",id:"org-management/general-and-security-settings",title:"General and security settings",description:"DronaHQ has 5 sections in Account Settings -> General & Security settings:",source:"@site/docs/org-management/general-and-security-settings.md",sourceDirName:"org-management",slug:"/org-management/general-and-security-settings",permalink:"/org-management/general-and-security-settings",draft:!1,tags:[],version:"current",lastUpdatedAt:1706882289,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"General and security settings"},sidebar:"docSidebar",previous:{title:"Configure SMTP for system generated emails",permalink:"/org-management/configure-custom-smtp"},next:{title:"Billing",permalink:"/org-management/billing"}},u={},m=[{value:"Device and user restrictions on mobile app",id:"device-and-user-restrictions-on-mobile-app",level:2},{value:"Creator portal and API level IP restrictions",id:"creator-portal-and-api-level-ip-restrictions",level:2},{value:"Customizing end user portal homescreen",id:"customizing-end-user-portal-homescreen",level:2},{value:"General account settings",id:"general-account-settings",level:2}],d={toc:m},g="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"general-and-security-settings"},"General and security settings"),(0,r.kt)("p",null,"DronaHQ has 5 sections in ",(0,r.kt)("inlineCode",{parentName:"p"},"Account Settings -> General & Security")," settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#device-and-user-restrictions-on-mobile-app"},"Device and user restrictions for mobile apps")," - You can configure different restrictions for securing the access on the mobile apps."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creator-portal-and-api-level-ip-restrictions"},"Builder and API IP restrictions")," - You can whitelist IP addresses for accessing DronaHQ ",(0,r.kt)("inlineCode",{parentName:"li"},"creator portal")," and admin level APIs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#customizing-end-user-portal-homescreen"},"Customize end user portal homescreen")," - You can customize the homescreen of the ",(0,r.kt)("inlineCode",{parentName:"li"},"end-user portal")," and toggle ON/OFF different features."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#general-account-settings"},"Account settings")," - You can configure account level settings like timezone, support URLs and emails and other privacy urls."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/audit-logger/overview/"},"Audit logging")," - You can turn ON/OFF audit logging features in DronaHQ. ")),(0,r.kt)("admonition",{title:"Please Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You you need to have admin or owner level privileges to access or modify these configurations.")),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{src:"/img/org-management/general-settings.png",alt:"General Settings",width:"100%",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"General and Security settings"))),(0,r.kt)("h2",{id:"device-and-user-restrictions-on-mobile-app"},"Device and user restrictions on mobile app"),(0,r.kt)("p",null,"In this section you can configure the following properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Device Security"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Allow Rooted and Jailbroken Devices")," - If you toggle off this property, your end-users on jailbroken or rooted devices wont be able to login into the end-user portal mobile app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Login Session Expiry (In Days)")," - The end-user will automatically log out of the mobile app after the specified days. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enforce Passcode Policy")," - You can enable mpin based passcode policy for the end-users. They will be asked to set up an mpin at the start.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Passcode Timeout Interval (In Minutes)")," - This allows end-users to access the app without the mpin for specified minutes in a session."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable Biometric")," - This allows end-users to access the end-user portal mobile app without a custom mpin and via a choice of biometrics."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Screenshot restrictions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Allow Screenshot (Android)")," - This will restrict your end-users from taking a screenshot on their android mobile app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable Logging")," - Screenshot attempts are logged at DronaHQ end (available on request)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Capture Screenshot")," - Screenshots taken on iOS devices can be captured at DronaHQ end (available on request)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User restrictions"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Per User Device Limit")," - Restrict the number of different unique mobile devices that a particular end-user can login from. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Display User Profile")," - Enable/Disable user profile to be shown on the end-user portal. ")))),(0,r.kt)("admonition",{title:"Please Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Except for the user profile property, all other properties are applicable only on the DronaHQ mobile app or custom white branded mobile app flavors generated from the DronaHQ mobile app for end-users.")),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{src:"/img/org-management/mobile-restrictions.png",alt:"Mobile restrictions",width:"100%",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Mobile and User restrictions"))),(0,r.kt)("h2",{id:"creator-portal-and-api-level-ip-restrictions"},"Creator portal and API level IP restrictions"),(0,r.kt)("p",null,"In this section you can restrict your owner, admin and creators to access the DronaHQ ",(0,r.kt)("inlineCode",{parentName:"p"},"creator portal")," from specific whitelisted IP addresses. You can also restrict specific account level API access from different IP addresses. "),(0,r.kt)("admonition",{title:"Please Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"IP restrictions will work only on DronaHQ cloud edition.")),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{src:"/img/org-management/IP-restrictions.png",alt:"IP restrictions",width:"100%",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Creator portal and API IP restrictions"))),(0,r.kt)("h2",{id:"customizing-end-user-portal-homescreen"},"Customizing end user portal homescreen"),(0,r.kt)("p",null,"DronaHQ offers a way in which the end-user portal in some cases can be switched to a specific app. You can select the app from a list and this will enable your end-users to directly land on that particular app. The default DronaHQ home screen where you see the catalog of apps will be completely skipped. "),(0,r.kt)("admonition",{title:"Please Note",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"All the DronaHQ features which have an effect on the homescreen of the ",(0,r.kt)("inlineCode",{parentName:"p"},"end-user portal")," like app catalogs etc. will not be functional when you enable this feature.")),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{src:"/img/org-management/custom-home.png",alt:"Custom home",width:"100%",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Custom homescreen"))),(0,r.kt)("h2",{id:"general-account-settings"},"General account settings"),(0,r.kt)("p",null,"Since the end-users would be from the specific organization its important that DronaHQ provides a way in which you can customize the privacy policy, support email and support URLs to your own which will be seen at different sections in the product. "),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{src:"/img/org-management/account-config.png",alt:"Account configuration",width:"100%",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Account configuration"))))}f.isMDXComponent=!0}}]);