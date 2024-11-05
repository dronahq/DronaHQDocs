"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[17693],{72566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var i=n(3905),o=n(86291);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={sidebar_position:2},u="Configuring SSO with OIDC",p={unversionedId:"sso/configuring-sso-with-oidc",id:"sso/configuring-sso-with-oidc",title:"Configuring SSO with OIDC",description:"DronaHQ's OpenID Connect integration utilizes the Authorization Code Flow. When configuring SSO with OIDC in DronaHQ, it requires either an ID token or access token to be a JSON Web Token (JWT) containing the authenticated user's email.",source:"@site/docs/sso/configuring-sso-with-oidc.md",sourceDirName:"sso",slug:"/sso/configuring-sso-with-oidc",permalink:"/sso/configuring-sso-with-oidc",draft:!1,tags:[],version:"current",lastUpdatedAt:1697705514,formattedLastUpdatedAt:"Oct 19, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docSidebar",previous:{title:"Configuring SSO with SAML",permalink:"/sso/configuring-sso-with-saml"},next:{title:"Configuring SSO for Google OIDC",permalink:"/sso/configuring-sso-for-google-oidc"}},d={},c=[{value:"Setting up OIDC SSO",id:"setting-up-oidc-sso",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Adding SSO Configuration",id:"adding-sso-configuration",level:3},{value:"Steps",id:"steps",level:3}],m={toc:c},g="wrapper";function k(e){var{components:t}=e,n=l(e,["components"]);return(0,i.kt)(g,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-sso-with-oidc"},"Configuring SSO with OIDC"),(0,i.kt)("p",null,"DronaHQ's OpenID Connect integration utilizes the ",(0,i.kt)("a",{parentName:"p",href:"https://auth0.com/docs/flows/authorization-code-flow"},"Authorization Code Flow"),". When configuring SSO with OIDC in DronaHQ, it requires either an ID token or access token to be a JSON Web Token (JWT) containing the authenticated user's email."),(0,i.kt)("h2",{id:"setting-up-oidc-sso"},"Setting up OIDC SSO"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To set up OIDC SSO in DronaHQ, you will need:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"OAuth client ID for your application."),(0,i.kt)("li",{parentName:"ol"},"OAuth client secret for your application."),(0,i.kt)("li",{parentName:"ol"},"A list of scopes to grant to DronaHQ."),(0,i.kt)("li",{parentName:"ol"},"Authorization endpoint for your OpenID provider."),(0,i.kt)("li",{parentName:"ol"},"Token endpoint for your OpenID provider.")),(0,i.kt)("admonition",{title:"PLEASE NOTE",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Ensure you understand how your SSO provider formats its ID Token and access tokens, as DronaHQ decodes these tokens as JWTs. You must provide DronaHQ with the corresponding path in the decoded JWT that contains the user's information.")),(0,i.kt)("h3",{id:"adding-sso-configuration"},"Adding SSO Configuration"),(0,i.kt)("p",null,"For setting up OIDC SSO in DronaHQ, Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Manage Users -> SSO CONFIGURATION -> + Add SSO -> OIDC OpenID Connect")),(0,i.kt)("p",null,"Copy DronaHQ ",(0,i.kt)("inlineCode",{parentName:"p"},"OAuth Redirect URL")," and paste it to your OAuth Client App's ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect uri")," configuration."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/sso/sso-oauth-redirect.png",alt:"DronaHQ OAuth Redirect URL",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"DronaHQ OAuth Redirect URL"))),(0,i.kt)("p",null,"Enter form with below fields -"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Provide Friendly Name of this SSO configuration")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Restricted Domain"),(0,i.kt)("td",{parentName:"tr",align:null},"Enter domain name for which you want your users to login with for this SSO Configuration. You can add multiple domain names as well. eg - ",(0,i.kt)("inlineCode",{parentName:"td"},"domain1.com , domain2.com"),". DronaHQ will automatically redirect to SSO url when we encounter any user\u2019s sign in request with an email id belonging to the given restricted domain.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Client ID"),(0,i.kt)("td",{parentName:"tr",align:null},"Client ID from your OAuth app. It may also be called ",(0,i.kt)("inlineCode",{parentName:"td"},"Consumer Key or API Key"),". This property can be referenced in Token request as ",(0,i.kt)("inlineCode",{parentName:"td"},"{{auth.client_id}}"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Client Secret"),(0,i.kt)("td",{parentName:"tr",align:null},"Client Secret from your OAuth app. It may also be called ",(0,i.kt)("inlineCode",{parentName:"td"},"Consumer Secret or API Secret"),". This property can be referenced in Token request as ",(0,i.kt)("inlineCode",{parentName:"td"},"{{auth.client_secret}}"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Scope"),(0,i.kt)("td",{parentName:"tr",align:null},"OAuth scopes values seperated with a comma or space that you want DronaHQ to access data. For eg - ",(0,i.kt)("inlineCode",{parentName:"td"},"openid email"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Authorization Request"),(0,i.kt)("td",{parentName:"tr",align:null},"Authorization endpoint for your OpenID provider")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Access Token Request"),(0,i.kt)("td",{parentName:"tr",align:null},"Token endpoint for your OpenID provider. Modify request parameters if required.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Refresh Token Request"),(0,i.kt)("td",{parentName:"tr",align:null},"Token endpoint for your OpenID provider. Modify request parameters if required. This will be called, when using current access token returns ",(0,i.kt)("inlineCode",{parentName:"td"},"401 status code")," response")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Add Claim List"),(0,i.kt)("td",{parentName:"tr",align:null},"You can map your ",(0,i.kt)("inlineCode",{parentName:"td"},"User's ID, Name, Email and Group")," with corresponding values in DronaHQ. Here, you need to provide exact path of corresponding key present in JWT Token received from Token endpoint. For eg - Add ",(0,i.kt)("inlineCode",{parentName:"td"},"{{idToken.email}}")," to map against ",(0,i.kt)("inlineCode",{parentName:"td"},"DHQ User Email"),", this will refer to ",(0,i.kt)("inlineCode",{parentName:"td"},"email")," key present in ",(0,i.kt)("inlineCode",{parentName:"td"},"idToken")," parameter. Similarly you can use ",(0,i.kt)("inlineCode",{parentName:"td"},"{{accessToken.email}}")," in case ",(0,i.kt)("inlineCode",{parentName:"td"},"Email")," is received in ",(0,i.kt)("inlineCode",{parentName:"td"},"Access Token")," key's value.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Enable JIT user provisioning"),(0,i.kt)("td",{parentName:"tr",align:null},"Just in time (JIT) user provisioning enables DronaHQ to provision user accounts when users sign in via SSO for the ",(0,i.kt)("inlineCode",{parentName:"td"},"first time"),". This means you won't have to manually invite each user to DronaHQ first.")))),(0,i.kt)("admonition",{title:"TIP",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Enable JIT user provisioning toggle to automatically add new users provisioned by SSO into DronaHQ"),(0,i.kt)("li",{parentName:"ul"},"Map group name to provide restricted access of the App to the specific group of end users. For Example, you may want to restrict the Finance related Apps to your Finance team members in your organization and HR specific apps to your HR Team in your organization and so on. By default all users will be mapped to the Default group in DronaHQ."),(0,i.kt)("li",{parentName:"ul"},"If user's group is mapped with DronaHQ Group, and at time of user login, if its group name doesn't exists then DronaHQ will create a new group with same name and map it with this user."))),(0,i.kt)("h3",{id:"steps"},"Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fill above form."),(0,i.kt)("li",{parentName:"ol"},"Once, above form is filled, click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Save to draft")," option to save your SSO Configuration."),(0,i.kt)("li",{parentName:"ol"},"You will be able to view your recently saved SSO configuration in the list. You can click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Test SSO")," button and it will open SSO Login url in a popup. Once you login successfully and if everything is set up correctly, then finally you will see a success message at the bottom."),(0,i.kt)("li",{parentName:"ol"},"Now, that testing is successful, you can click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"more option")," for above SSO configuration and click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Activate")," to make it live.")),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/sso/sso-oauth-login-activate.png",alt:"Activate SSO",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Activate SSO"))),(0,i.kt)("p",null,"Once live, all your users belonging to above given domain will be redirected to your SSO login from both the ",(0,i.kt)("inlineCode",{parentName:"p"},"End User Portal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Creator Portal"),"."),(0,i.kt)("p",null,"With OIDC Single Sign-On (SSO), users can login into DronaHQ using a single set of login credentials. It simplifies user provisioning and management. User accounts can be created, updated, and deactivated centrally, ensuring efficient administration across all connected applications."))}k.isMDXComponent=!0}}]);