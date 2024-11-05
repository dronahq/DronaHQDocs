"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[31415],{88006:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(67294);function a(t){const{title:e,videoId:n,caption:a}=t;return r.createElement("figure",{style:{width:"100%",margin:"2rem 0"}},r.createElement("iframe",{style:{width:"100%",height:"auto",aspectRatio:"16/9",borderRadius:"0.5rem",overflow:"hidden"},src:`https://youtube.com/embed/${n}?autoplay=1`,srcDoc:`<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:100px;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.25em gray}</style><a href=https://youtube.com/embed/${n}?autoplay=1><img src=https://img.youtube.com/vi/${n}/maxresdefault.jpg alt='${e}'><span><svg width="100px" height="100px" viewBox="0 0 463 462" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.5" cx="231.742" cy="230.999" r="231" fill="#FE5011"></circle><path d="M181.703 165.53C181.703 156.392 191.812 150.873 199.499 155.814L301.34 221.283C308.412 225.83 308.412 236.168 301.34 240.715L199.499 306.184C191.812 311.125 181.703 305.606 181.703 296.468V165.53Z" fill="#FFFFFF"></path></svg></span></a>`,frameBorder:"0",allowFullScreen:!0,title:e||"YouTube video player",loading:"lazy",allow:"autoplay; picture-in-picture"}),a&&r.createElement("figcaption",{style:{textAlign:"center"}},r.createElement("i",null,a)))}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function o(t){var{host:e}=t,n=i(t,["host"]);return"youtube"===e?r.createElement(a,n):r.createElement("div",null,r.createElement("p",null,r.createElement("strong",null,"VideoEmbed")," component is not implemented for ",e," ","yet."))}},55930:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>u,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905),a=n(86291),i=n(88006);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const u={sidebar_position:1,title:"Stripe"},s=void 0,p={unversionedId:"reference/connectors/stripe",id:"reference/connectors/stripe",title:"Stripe",description:"The Stripe connector enables you to build your payment infrastructure in a matter of minutes. You can build your Apps interface on top of the payment data. You can find the connector beneficial to get customer details, create customers, initiate refunds, and others for your Stripe account.",source:"@site/docs/reference/connectors/stripe.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/stripe",permalink:"/reference/connectors/stripe",draft:!1,tags:[],version:"current",lastUpdatedAt:1692863819,formattedLastUpdatedAt:"Aug 24, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Stripe"},sidebar:"docSidebar",previous:{title:"Snowflake",permalink:"/reference/connectors/snowflake"},next:{title:"Supabase Database",permalink:"/reference/connectors/supabase"}},d={},m=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring API Connector in DronaHQ",id:"configuring-api-connector-in-dronahq",level:2},{value:"Supported API endpoints",id:"supported-api-endpoints",level:2},{value:"Using Stripe connector",id:"using-stripe-connector",level:2},{value:"Get Customers",id:"get-customers",level:3},{value:"Adding a Customer",id:"adding-a-customer",level:3}],g={toc:m},f="wrapper";function y(t){var{components:e}=t,n=c(t,["components"]);return(0,r.kt)(f,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){o(t,e,n[e])}))}return t}({},g,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Stripe connector enables you to build your payment infrastructure in a matter of minutes. You can build your Apps interface on top of the payment data. You can find the connector beneficial to get customer details, create customers, initiate refunds, and others for your Stripe account."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Stripe API Key: Obtain an API key from Stripe by signing up for an account and creating a new API key. This key is required to authenticate your requests when using the Stripe Connector.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Environment Setup: Ensure you have a development environment capable of making HTTP requests to external APIs. This could involve using programming languages like Python, JavaScript, or any language that supports HTTP requests."))),(0,r.kt)("h2",{id:"configuring-api-connector-in-dronahq"},"Configuring API Connector in DronaHQ"),(0,r.kt)("p",null,"Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Account name"),". Then add the ",(0,r.kt)("inlineCode",{parentName:"p"},"API key")," for the connector account. Once all details are added, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Save"),". Your connector configuration is now done."),(0,r.kt)("figure",null,(0,r.kt)(a.Z,{src:"/img/reference/connectors/stripe/details.jpeg",alt:"Stripe with configuration details.",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Stripe with configuration details."))),(0,r.kt)("p",null,"After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the ",(0,r.kt)("inlineCode",{parentName:"p"},"connected accounts")," list. You can find this option from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Connector -> Manage Account")," section. This centralized location allows you to conveniently monitor and manage your connected accounts."),(0,r.kt)("h2",{id:"supported-api-endpoints"},"Supported API endpoints"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetAccount"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve details about the connected Stripe account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetCustomerList"),(0,r.kt)("td",{parentName:"tr",align:null},"Fetch a list of customers associated with your Stripe account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateCustomer"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new customer profile within your Stripe account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UpdateCustomer"),(0,r.kt)("td",{parentName:"tr",align:null},"Update an existing customer's information within your Stripe account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetAllCharges"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve a list of all charges made through your Stripe account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InitiateRefund"),(0,r.kt)("td",{parentName:"tr",align:null},"Initiate a refund for a specific payment using its charge ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreateProduct"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new product within your Stripe account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetProductDetails"),(0,r.kt)("td",{parentName:"tr",align:null},"Fetch details about a specific product using its ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ListAllProducts"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve a list of all products within your Stripe account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DeleteProduct"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a product using its ID from your Stripe account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ListAllPrices"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve a list of all prices associated with your Stripe account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreatePrice"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new price for a product within your Stripe account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreatePriceRecurring"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a recurring price for a product with subscription intervals.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetPriceDetails"),(0,r.kt)("td",{parentName:"tr",align:null},"Fetch details about a specific price using its ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CreatePaymentLink"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate a payment link for receiving payments outside of your Stripe-integrated app.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ListAllPaymentLinks"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve a list of all payment links created in your Stripe account.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GetPaymentLinkDetails"),(0,r.kt)("td",{parentName:"tr",align:null},"Fetch details about a specific payment link using its ID.")))),(0,r.kt)("h2",{id:"using-stripe-connector"},"Using Stripe connector"),(0,r.kt)("h3",{id:"get-customers"},"Get Customers"),(0,r.kt)("p",null,"We'll explore how to retrieve a list of Customers, a significant resource within your Stripe account. Customer details encompass profiles, billing, tax information, as well as shipping and billing addresses. You may need to retrieve customer data for various purposes, such as payment collection and invoicing."),(0,r.kt)("p",null,"Follow these steps to retrieve customer data using the Stripe connector:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Begin by connecting your Stripe account, as we've previously demonstrated."),(0,r.kt)("li",{parentName:"ol"},"Integrate a Table Grid control into your form."),(0,r.kt)("li",{parentName:"ol"},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"Bind Data Option -> Quick Select -> Connector Library"),", select the Stripe Connector from the list of connectors and proceed."),(0,r.kt)("li",{parentName:"ol"},"Choose the ",(0,r.kt)("inlineCode",{parentName:"li"},"GetCustomers")," action from the available options."),(0,r.kt)("li",{parentName:"ol"},"Authenticate the connected account and proceed."),(0,r.kt)("li",{parentName:"ol"},"Configure the connector fields as required, select the display keys, and save your settings.")),(0,r.kt)("p",null,"Upon running the form, you'll witness the customer list within the Table Grid. Additionally, you can create an Action Flow or Workflow for more advanced functionality."),(0,r.kt)("figure",null,(0,r.kt)(a.Z,{src:"/img/reference/connectors/stripe/cust.jpeg",alt:"Customer List",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Customer List"))),(0,r.kt)("h3",{id:"adding-a-customer"},"Adding a Customer"),(0,r.kt)("p",null,"Suppose you wish to add a customer to your Stripe account. In that case, design a form incorporating an action button. Configure an Action Flow that triggers the Stripe Connector to achieve this."),(0,r.kt)("figure",null,(0,r.kt)(a.Z,{src:"/img/reference/connectors/stripe/form.jpeg",alt:"Customer List",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Customer List"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Under ",(0,r.kt)("inlineCode",{parentName:"li"},"Action Flow -> Server Side Actions,")," opt for the Stripe Connector."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateCustomer")," action from the available choices."),(0,r.kt)("li",{parentName:"ol"},"Authenticate the connected account and proceed."),(0,r.kt)("li",{parentName:"ol"},"Fill in the connector configuration fields, using keywords to link controls to respective fields.")),(0,r.kt)("figure",null,(0,r.kt)(a.Z,{src:"/img/reference/connectors/stripe/key.jpeg",alt:"Customer List",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Customer List"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Add a connector name and any execution condition, then finish the setup.")),(0,r.kt)("p",null,"Now, when users submit data through the form, the action flow will generate a new customer entry within your Stripe Account. You can also extend this functionality by integrating other connectors, like Shopify and Stripe, to create a comprehensive refund tool."),(0,r.kt)("p",null,"For a practical example of building a refund tool by integrating Shopify and Stripe, refer to this instructional video."),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{host:"youtube",videoId:"otnYoygxz9U",mdxType:"VideoEmbed"})))}y.isMDXComponent=!0}}]);