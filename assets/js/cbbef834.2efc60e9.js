"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[41196],{88822:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});a(67294);var n=a(3905),i=a(86291);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function g(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const l={sidebar_position:1,title:"Google Tag Manager Integration"},s=void 0,u={unversionedId:"building-apps-guides/google-tag-manger",id:"building-apps-guides/google-tag-manger",title:"Google Tag Manager Integration",description:"In today's data-driven world, understanding user behavior is crucial for success. For low-code app developers using DronaHQ, integrating with Google Tag Manager (GTM) unlocks a treasure trove of user insights. This dynamic duo empowers you to track user interactions, optimize app experiences, and gain valuable data for informed decision-making.",source:"@site/docs/building-apps-guides/google-tag-manger.md",sourceDirName:"building-apps-guides",slug:"/building-apps-guides/google-tag-manger",permalink:"/building-apps-guides/google-tag-manger",draft:!1,tags:[],version:"current",lastUpdatedAt:1715007340,formattedLastUpdatedAt:"May 6, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Google Tag Manager Integration"},sidebar:"docSidebar",previous:{title:"Import Your Figma Designs Directly into\xa0DronaHQ",permalink:"/building-apps-guides/figma-to-dronahq"},next:{title:"Guide to SMTP Email Configuration with Popular Email Providers",permalink:"/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers"}},p={},c=[{value:"Creating account in Google Tag Manger",id:"creating-account-in-google-tag-manger",level:2},{value:"Integrating Google Tag Manager with DronaHQ Apps",id:"integrating-google-tag-manager-with-dronahq-apps",level:2},{value:"Tags and Triggers (GTM)",id:"tags-and-triggers-gtm",level:4},{value:"Triggering Default Event from the App",id:"triggering-default-event-from-the-app",level:2},{value:"Tag Configuration:",id:"tag-configuration",level:4},{value:"All Pages Trigger:",id:"all-pages-trigger",level:4},{value:"Bringing It All Together:",id:"bringing-it-all-together",level:4},{value:"Triggering a Custom Event from the App",id:"triggering-a-custom-event-from-the-app",level:2},{value:"Tag Configuration:",id:"tag-configuration-1",level:4},{value:"Custom Event Trigger:",id:"custom-event-trigger",level:4},{value:"Practical Implementation in DronaHQ:",id:"practical-implementation-in-dronahq",level:4},{value:"Bringing It All Together:",id:"bringing-it-all-together-1",level:4}],d={toc:c},m="wrapper";function h(e){var{components:t}=e,a=g(e,["components"]);return(0,n.kt)(m,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In today's data-driven world, understanding user behavior is crucial for success. For low-code app developers using DronaHQ, integrating with Google Tag Manager (GTM) unlocks a treasure trove of user insights. This dynamic duo empowers you to track user interactions, optimize app experiences, and gain valuable data for informed decision-making."),(0,n.kt)("h2",{id:"creating-account-in-google-tag-manger"},"Creating account in Google Tag Manger"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Visit ",(0,n.kt)("a",{parentName:"li",href:"https://tagmanager.google.com/"},"Google Tag Manager")," and Sign in with your Google account."),(0,n.kt)("li",{parentName:"ol"},"If you're new to GTM, you'll see a button to ",(0,n.kt)("inlineCode",{parentName:"li"},"Create Account.")," Click that."),(0,n.kt)("li",{parentName:"ol"},"You'll need to name your account (e.g., your company name) and container (e.g., your website name) and agree to the terms of service.")),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/building-apps-guides/google-tag-manager/google-tag-manager-createacc.jpeg",alt:"Create account in GTM",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Create account in GTM"))),(0,n.kt)("p",null,"That's it! Once you have your account and container set up, you can start adding tracking codes and managing your website/app's data collection."),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/building-apps-guides/google-tag-manager/google-tag-manager-script.jpeg",alt:"GTM installation scripts",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"GTM installation scripts"))),(0,n.kt)("h2",{id:"integrating-google-tag-manager-with-dronahq-apps"},"Integrating Google Tag Manager with DronaHQ Apps"),(0,n.kt)("p",null,"Adding Google Tag Manager (GTM) to your DronaHQ app is a straightforward process:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the specific DronaHQ app where you want to integrate GTM."),(0,n.kt)("li",{parentName:"ol"},"Within the app's settings, look for the option labeled ",(0,n.kt)("inlineCode",{parentName:"li"},"Custom Scripts"),"."),(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("inlineCode",{parentName:"li"},"Tag Scripting")," or a designated section, paste the provided GTM head and body scripts."),(0,n.kt)("li",{parentName:"ol"},"Ensure you save the script integration for the changes to take effect.")),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/building-apps-guides/google-tag-manager/google-tag-manager-scriptdq.jpeg",alt:"Installing GTM scripts in a DronaHQ App",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Installing GTM scripts in a DronaHQ App"))),(0,n.kt)("h4",{id:"tags-and-triggers-gtm"},"Tags and Triggers (GTM)"),(0,n.kt)("p",null,"GTM presents an array of tags tailored to specific tracking needs. GTM like a toolbox for website/app tracking."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tags: These are the tools themselves. GTM offers various tags for different tracking needs, such as Google Analytics, Google Ads, or custom HTML tags."),(0,n.kt)("li",{parentName:"ul"},"Triggers: These act like the triggers on those tools. They define when a specific tag fires (activates) to collect data. Common triggers track events like page views, app initialization, button clicks, form submissions, or video plays.")),(0,n.kt)("p",null,"DronaHQ supports both custom and default events of GTM, enhancing its versatility for various tracking requirements."),(0,n.kt)("h2",{id:"triggering-default-event-from-the-app"},"Triggering Default Event from the App"),(0,n.kt)("p",null,"This example demonstrates setting up a Custom HTML tag in Google Tag Manager (GTM) to display a simple message on every page load. The tag will be triggered by the built-in All Pages trigger."),(0,n.kt)("h4",{id:"tag-configuration"},"Tag Configuration:"),(0,n.kt)("p",null,"From ",(0,n.kt)("inlineCode",{parentName:"p"},"Tags > New > Tag Configuration > Custom HTML (custom)"),", add below script and save."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  alert("The changes made will be in real-time affect")\n<\/script>\n')),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/building-apps-guides/google-tag-manager/google-tag-manager-tag2.jpeg",alt:"Custom HTML Tag",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Custom HTML Tag"))),(0,n.kt)("h4",{id:"all-pages-trigger"},"All Pages Trigger:"),(0,n.kt)("p",null,"Next, we'll establish a trigger to ensure our custom HTML tag fires on every page load. We'll leverage the built-in trigger type of All Pages."),(0,n.kt)("p",null,"In GTM, navigate to Triggers and click New, and under Trigger Configuration, select All Pages.\nThis pre-configured trigger automatically fires whenever a page loads on your website, making it ideal for tracking events that occur on all pages."),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/building-apps-guides/google-tag-manager/google-tag-manager-trigger2.jpeg",alt:"Custom Event Trigger",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Custom Event Trigger"))),(0,n.kt)("admonition",{title:"NOTE",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Make sure to Submit your GTM changes to be made effective in the app."),(0,n.kt)("li",{parentName:"ul"},"Publish your DronaHQ App and Check it on Public App link or End user portal to see your changes in Action."))),(0,n.kt)("h4",{id:"bringing-it-all-together"},"Bringing It All Together:"),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/building-apps-guides/google-tag-manager/google-tag-manager-example2.png",alt:"GTM tag in use.",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"GTM tag in use."))),(0,n.kt)("p",null,"With the Custom HTML tag and All Pages trigger configured, whenever a dashboard page loads or updates in real-time, the tag will be triggered, and your chosen notification method will be displayed."),(0,n.kt)("h2",{id:"triggering-a-custom-event-from-the-app"},"Triggering a Custom Event from the App"),(0,n.kt)("p",null,"Let's explore the process of triggering a custom GTM tag directly from the DronaHQ App. We'll set up a Custom HTML tag within GTM and configure it with a Custom Event trigger, ensuring it activates from within our application."),(0,n.kt)("h4",{id:"tag-configuration-1"},"Tag Configuration:"),(0,n.kt)("p",null,"From ",(0,n.kt)("inlineCode",{parentName:"p"},"Tags -> New -> Tag Configuration -> Custom HTML (custom)"),", Add below script and save."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script>\n  alert("Mail Sent!")\n<\/script>\n')),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/building-apps-guides/google-tag-manager/google-tag-manager-tag1.jpeg",alt:"Custom HTML Tag",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Custom HTML Tag"))),(0,n.kt)("h4",{id:"custom-event-trigger"},"Custom Event Trigger:"),(0,n.kt)("p",null,"Next, we'll establish a trigger to activate our custom event. We'll utilize a trigger type of Custom Events with the event name ",(0,n.kt)("inlineCode",{parentName:"p"},"sent_mail"),", set to fire on all custom events."),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/building-apps-guides/google-tag-manager/google-tag-manager-trigger1.jpeg",alt:"Custom Event Trigger",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Custom Event Trigger"))),(0,n.kt)("h4",{id:"practical-implementation-in-dronahq"},"Practical Implementation in DronaHQ:"),(0,n.kt)("p",null,"Now, let's apply this custom event within the DronaHQ lead generation app. Suppose we've incorporated a JavaScript code block action tied to a button click event:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"function JSCode(output) {\n  if (window.dataLayer) {\n    window.dataLayer.push({'event': 'sent_mail'});\n  }\n  return output;\n}\n")),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/building-apps-guides/google-tag-manager/google-tag-manager-action1.jpeg",alt:"Adding action flow",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Adding action flow"))),(0,n.kt)("admonition",{title:"NOTE",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Make sure to Submit your GTM changes to be made effective in the app."),(0,n.kt)("li",{parentName:"ul"},"Publish your DronaHQ App and Check it on Public App link or End user portal to see your changes in Action."))),(0,n.kt)("h4",{id:"bringing-it-all-together-1"},"Bringing It All Together:"),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/building-apps-guides/google-tag-manager/google-tag-manager-example1.png",alt:"GTM tag in use.",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"GTM tag in use."))),(0,n.kt)("p",null,'Imagine a user interacts with the lead generation app, triggering the button click action. This event then activates the custom HTML tag configuration within GTM, prompting the "Mail Sent!" alert.'))}h.isMDXComponent=!0}}]);