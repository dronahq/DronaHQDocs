"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[83771],{17429:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>p,metadata:()=>d,toc:()=>u});i(67294);var n=i(3905),a=i(86291);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}const p={sidebar_position:1,title:"Guide to SMTP Email Configuration with Popular Email Providers"},s=void 0,d={unversionedId:"building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers",id:"building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers",title:"Guide to SMTP Email Configuration with Popular Email Providers",description:"For sending and receiving emails, Simple Mail Transfer Protocol (SMTP) plays a crucial role. SMTP is a set of rules governing the interaction between the sender's email client and the recipient's email server. In this guide, we'll delve into SMTP email configuration with popular email providers.",source:"@site/docs/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers.md",sourceDirName:"building-apps-guides",slug:"/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers",permalink:"/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers",draft:!1,tags:[],version:"current",lastUpdatedAt:1706882289,formattedLastUpdatedAt:"Feb 2, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Guide to SMTP Email Configuration with Popular Email Providers"},sidebar:"docSidebar",previous:{title:"Google Tag Manager Integration",permalink:"/building-apps-guides/google-tag-manger"},next:{title:"JSON Manipulation - Sorting and Filtering with JavaScript",permalink:"/building-apps-guides/json-sorting-filtering"}},m={},u=[{value:"Configuring Gmail SMTP with DronaHQ System-Generated Emails",id:"configuring-gmail-smtp-with-dronahq-system-generated-emails",level:2},{value:"Set-Up SMTP in Gmail",id:"set-up-smtp-in-gmail",level:3},{value:"Configuring Amazon SES SMTP with DronaHQ System Generated Emails",id:"configuring-amazon-ses-smtp-with-dronahq-system-generated-emails",level:2},{value:"Set-up SMTP in Amazon SES",id:"set-up-smtp-in-amazon-ses",level:3},{value:"Creating Identity",id:"creating-identity",level:4},{value:"Creating SMTP Details",id:"creating-smtp-details",level:4},{value:"Configuring SendGrid SMTP with DronaHQ System Generated Emails",id:"configuring-sendgrid-smtp-with-dronahq-system-generated-emails",level:2},{value:"Set-up SMTP in SendGrid",id:"set-up-smtp-in-sendgrid",level:3},{value:"Sender Identity",id:"sender-identity",level:4},{value:"Integrating SMTP Relay",id:"integrating-smtp-relay",level:4}],g={toc:u},c="wrapper";function k(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(c,l(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){r(e,t,i[t])}))}return e}({},g,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For sending and receiving emails, Simple Mail Transfer Protocol (SMTP) plays a crucial role. SMTP is a set of rules governing the interaction between the sender's email client and the recipient's email server. In this guide, we'll delve into SMTP email configuration with popular email providers."),(0,n.kt)("admonition",{title:"NOTE",type:"info"},(0,n.kt)("p",{parentName:"admonition"}," For a comprehensive step-by-step guide on SMTP configuration, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/org-management/configure-custom-smtp/"},"this detailed article"),".")),(0,n.kt)("h2",{id:"configuring-gmail-smtp-with-dronahq-system-generated-emails"},"Configuring Gmail SMTP with DronaHQ System-Generated Emails"),(0,n.kt)("p",null,"First, it is needed to set up ",(0,n.kt)("a",{parentName:"p",href:"#setting-up-smtp-in-gmail"},"SMTP in Gmail"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"HOST NAME: Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"smtp.gmail.com"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"PORT: Use ",(0,n.kt)("inlineCode",{parentName:"p"},"587")," as the port number.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"USER NAME: Provide the email address of the user who will be sending the emails.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"PASSWORD: Use the same password that you used when creating the app on your Google Account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"ENABLE SSL: Ensure that this option is checked."))),(0,n.kt)("p",null,"Proceed with the following steps:"),(0,n.kt)("figure",null,(0,n.kt)(a.Z,{src:"/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/smtp-details.png",alt:"Push Notification",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Gmail SMTP config"))),(0,n.kt)("h3",{id:"set-up-smtp-in-gmail"},"Set-Up SMTP in Gmail"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to your Google Account settings by going to ",(0,n.kt)("inlineCode",{parentName:"p"},"Manage Google Account"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Google account dashboard, click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Security")," and then select ",(0,n.kt)("inlineCode",{parentName:"p"},"App Passwords"),"."))),(0,n.kt)("admonition",{title:"NOTE",type:"caution"},(0,n.kt)("p",{parentName:"admonition"}," Ensure that 2-step verification is already enabled in your Google Account.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Under the drop-down menu for ",(0,n.kt)("inlineCode",{parentName:"p"},"Select app"),", choose ",(0,n.kt)("inlineCode",{parentName:"p"},"Other"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Provide a name for the app (e.g., DronaHQ) and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Generate"),"."))),(0,n.kt)("figure",null,(0,n.kt)(a.Z,{src:"/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/create-app.png",alt:"create app",mdxType:"Thumbnail"})),(0,n.kt)("p",null,"A password will be generated; make sure to copy it. You will use this password for email configuration. The user name will be the email address associated with your Google Account."),(0,n.kt)("h2",{id:"configuring-amazon-ses-smtp-with-dronahq-system-generated-emails"},"Configuring Amazon SES SMTP with DronaHQ System Generated Emails"),(0,n.kt)("p",null,"First, it is needed to configure ",(0,n.kt)("a",{parentName:"p",href:"#set-up-smtp-in-amazon-ses"},"SMTP in Amazon SES"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"HOST NAME: Use ",(0,n.kt)("inlineCode",{parentName:"p"},"email-smtp.ap-south-1.amazonaws.com"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"PORT: Set the port to ",(0,n.kt)("inlineCode",{parentName:"p"},"587"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"USER NAME and PASSWORD: You can find these credentials on the AWS Console under Amazon SES > Account Dashboard > Create SMTP credentials.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"ENABLE SSL: Ensure that this option is checked."))),(0,n.kt)("p",null,"Proceed with the following steps:"),(0,n.kt)("figure",null,(0,n.kt)(a.Z,{src:"/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/smtp-email-config.png",alt:"Amazon SES SMTP Config",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"SMTP Email Config"))),(0,n.kt)("h3",{id:"set-up-smtp-in-amazon-ses"},"Set-up SMTP in Amazon SES"),(0,n.kt)("p",null,"To configure Amazon Web Services SES for the SMTP server, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create an account on AWS and log in to the AWS console.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"There are two steps required to integrate SES on AWS: Creating Identity and Creating SMTP details."))),(0,n.kt)("h4",{id:"creating-identity"},"Creating Identity"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Search for SES in the search bar and click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Amazon Simple Email Service."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This will open the dashboard. Proceed to create an identity.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("inlineCode",{parentName:"p"},"Email Address")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Domain")," based on where the email is required to be sent.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Verify the email address if ",(0,n.kt)("inlineCode",{parentName:"p"},"Email Address")," is selected as the identity type."))),(0,n.kt)("h4",{id:"creating-smtp-details"},"Creating SMTP Details"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On your Amazon SES dashboard, click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Account Dashboard")," from the sidebar.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Details related to the SMTP endpoint and port will be provided under ",(0,n.kt)("inlineCode",{parentName:"p"},"Simple Mail Transfer Protocol (SMTP) settings."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Create SMTP credentials.")))),(0,n.kt)("figure",null,(0,n.kt)(a.Z,{src:"/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/smtp-ses.png",alt:"create app",mdxType:"Thumbnail"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'You will be directed to a new window of IAM Management Control. Provide an IAM User Name (or you can use the default too) and click "Create."')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SMTP Username and SMTP Password will be generated, which will be used for email configuration."))),(0,n.kt)("figure",null,(0,n.kt)(a.Z,{src:"/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/ses-details.png",alt:"create app",mdxType:"Thumbnail"})),(0,n.kt)("h2",{id:"configuring-sendgrid-smtp-with-dronahq-system-generated-emails"},"Configuring SendGrid SMTP with DronaHQ System Generated Emails"),(0,n.kt)("p",null,"First, it is needed to configure ",(0,n.kt)("a",{parentName:"p",href:"#set-up-smtp-in-sendgrid"},"SMTP in SendGrid"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"HOST NAME: Use ",(0,n.kt)("inlineCode",{parentName:"p"},"smtp.sendgrid.net"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"PORT: Set the port to ",(0,n.kt)("inlineCode",{parentName:"p"},"587"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"USER NAME and PASSWORD: These credentials will be the same as provided by SendGrid after creating identity and configuring SMTP relay for that identity.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"ENABLE SSL: Ensure that this option is checked."))),(0,n.kt)("p",null,"Proceed with the following steps:"),(0,n.kt)("figure",null,(0,n.kt)(a.Z,{src:"/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/smtp-sendgrid-config.png",alt:"SendGrid SMTP Config",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"SMTP Email Config"))),(0,n.kt)("h3",{id:"set-up-smtp-in-sendgrid"},"Set-up SMTP in SendGrid"),(0,n.kt)("p",null,"To configure SendGrid for the SMTP server, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create an account on SendGrid and log in.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete two components for this: Setting up sender identity under sender authentication and Integrating SMTP relay."))),(0,n.kt)("h4",{id:"sender-identity"},"Sender Identity"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a sender identity from where the email would be sent. The sender identity details, like the email ID, need to be authenticated.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Proceed from the sidebar of the dashboard as ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings > Sender Authentication > Create a Sender"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fill in the details, providing sender and receiver email addresses, and other necessary details.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click on create. Next, verify the email address provided while creating a sender identity."))),(0,n.kt)("h4",{id:"integrating-smtp-relay"},"Integrating SMTP Relay"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Email API > Integration Guide > SMTP Relay"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In the next step, give the API a name and click ",(0,n.kt)("inlineCode",{parentName:"p"},"Create Key")," to generate a new API key."))),(0,n.kt)("figure",null,(0,n.kt)(a.Z,{src:"/img/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers/key.png",alt:"SendGrid SMTP Config",mdxType:"Thumbnail"})),(0,n.kt)("p",null,"Details related to the server, ports, username, and password will be displayed, and these can be used for email configuration."))}k.isMDXComponent=!0}}]);