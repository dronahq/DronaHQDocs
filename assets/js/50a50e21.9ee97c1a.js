"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[70001],{13642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>d,metadata:()=>c,toc:()=>p});n(67294);var a=n(3905),i=n(86291);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const d={sidebar_position:1,title:"SendGrid"},s=void 0,c={unversionedId:"reference/connectors/sendgrid",id:"reference/connectors/sendgrid",title:"SendGrid",description:"SendGrid makes sending emails possible without the use of email servers.",source:"@site/docs/reference/connectors/sendgrid.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/sendgrid",permalink:"/reference/connectors/sendgrid",draft:!1,tags:[],version:"current",lastUpdatedAt:1692863819,formattedLastUpdatedAt:"Aug 24, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SendGrid"},sidebar:"docSidebar",previous:{title:"SAP HANA",permalink:"/reference/connectors/sap-hana"},next:{title:"Sequin",permalink:"/reference/connectors/sequin"}},u={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring API Connector in DronaHQ",id:"configuring-api-connector-in-dronahq",level:2},{value:"Getting the API Key",id:"getting-the-api-key",level:3},{value:"Supported API endpoints",id:"supported-api-endpoints",level:2},{value:"Using SendGrid Connector",id:"using-sendgrid-connector",level:2},{value:"Send Mail without using template",id:"send-mail-without-using-template",level:3},{value:"Send email using Dynamic Templates",id:"send-email-using-dynamic-templates",level:3}],m={toc:p},g="wrapper";function k(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SendGrid makes sending emails possible without the use of email servers. "),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"SendGrid API Key: Obtain an API key from SendGrid by signing up for an account and creating a new API key. This key is required to authenticate your requests when using the SendGrid Connector.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Environment Setup: Ensure you have a development environment capable of making HTTP requests to external APIs. This could involve using programming languages like Python, JavaScript, or any language that supports HTTP requests."))),(0,a.kt)("h2",{id:"configuring-api-connector-in-dronahq"},"Configuring API Connector in DronaHQ"),(0,a.kt)("p",null,"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"Account name"),". Then add the ",(0,a.kt)("inlineCode",{parentName:"p"},"API key")," for the connector account. Once all details are added, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save"),". Your connector configuration is now done."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/sendgrid/details.png",alt:"SendGrid with configuration details.",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"SendGrid with configuration details."))),(0,a.kt)("h3",{id:"getting-the-api-key"},"Getting the API Key"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Getting the API Key:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Log in to your SendGrid account."),(0,a.kt)("li",{parentName:"ul"},"Navigate to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings")," section and select ",(0,a.kt)("inlineCode",{parentName:"li"},"API Keys.")),(0,a.kt)("li",{parentName:"ul"},"You will find a list of your existing SendGrid API keys here. If you need to create a new API key, click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Create API Key")," and proceed."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provide Access:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To send emails using the API key, it's recommended to provide ",(0,a.kt)("inlineCode",{parentName:"li"},"Full Access")," permissions."),(0,a.kt)("li",{parentName:"ul"},"After creating the API key, locate it in the list and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Edit API Key.")),(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"API Key permissions")," section, choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Full Access")," and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Update."))))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copying the API Key:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once you've configured the permissions, your API key will be generated.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Copy the generated API key and store it securely, as you will need it for authentication in the future."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/sendgrid/apikey.jpeg",alt:"SendGrid api key",mdxType:"Thumbnail"})))))),(0,a.kt)("p",null,"After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the ",(0,a.kt)("inlineCode",{parentName:"p"},"connected accounts")," list. You can find this option from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector -> Manage Account")," section. This centralized location allows you to conveniently monitor and manage your connected accounts."),(0,a.kt)("h2",{id:"supported-api-endpoints"},"Supported API endpoints"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Action"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GetMessages"),(0,a.kt)("td",{parentName:"tr",align:null},"Retrieve a list of sent email messages from your SendGrid account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Get All Templates"),(0,a.kt)("td",{parentName:"tr",align:null},"Retrieve a list of all available email templates in your SendGrid account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Send Mail"),(0,a.kt)("td",{parentName:"tr",align:null},"Send an email using a SendGrid template or by providing custom content.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Send Mail With Legacy Templates"),(0,a.kt)("td",{parentName:"tr",align:null},"Send an email using legacy templates from your SendGrid account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Get Template By ID"),(0,a.kt)("td",{parentName:"tr",align:null},"Retrieve a specific email template by its unique ID from your SendGrid account.")))),(0,a.kt)("h2",{id:"using-sendgrid-connector"},"Using SendGrid Connector"),(0,a.kt)("h3",{id:"send-mail-without-using-template"},"Send Mail without using template"),(0,a.kt)("p",null,"To create your email campaign list and wish to send an email to the selected recipients you can make use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Send Mail")," action."),(0,a.kt)("p",null,"You need to provide the list of recipients, add the email subject, email message body, and you are done. You would not select any template here."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/sendgrid/sendmail.jpeg",alt:"SendGrid send mail",mdxType:"Thumbnail"})),(0,a.kt)("p",null,"So now whenever you run the form, select the recipients from the dropdown and click to trigger the email."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/sendgrid/mail.jpeg",alt:"SendGrid send mail",mdxType:"Thumbnail"})),(0,a.kt)("h3",{id:"send-email-using-dynamic-templates"},"Send email using Dynamic Templates"),(0,a.kt)("p",null,"Create a template for your campaigns in your Sendgrid account ",(0,a.kt)("a",{parentName:"p",href:"https://mc.sendgrid.com/dynamic-templates"},"here"),". Use this template that you have created in SendGrid and can also add the dynamic fields within the templates."),(0,a.kt)("p",null,"Sendgrid is easing out the legacy templates and allows you to migrate existing legacy templates to dynamic / marketing ones instead if you want to do it."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a template in SendGrid under Dynamic templates. Add the Subject and the Message content and Save. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the Connector, you should make sure that you add the Mandatory fields for From EMail, From Name and To Email."))),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/sendgrid/template.jpeg",alt:"SendGrid send mail",mdxType:"Thumbnail"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run the app you can see that the email would be sent from the email to the recipient\u2019s email id. You would be able to view the email as per the template if you have chosen the template.")),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/sendgrid/mail2.jpeg",alt:"SendGrid send mail",mdxType:"Thumbnail"})),(0,a.kt)("admonition",{title:"NOTE",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"If you are adding a template, the subject and message from the Template would override the Subject and Message from the Configuration."),(0,a.kt)("li",{parentName:"ul"},"In case you do not select a template then make sure that you add the Subject and Message Body else it would appear blank in the Recipients email."),(0,a.kt)("li",{parentName:"ul"},"When using the template, make sure the template is Active."))))}k.isMDXComponent=!0}}]);