"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[67651],{24488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>s,toc:()=>m});n(67294);var a=n(3905),i=n(86291);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={sidebar_position:1},c="Using Summary Variable",s={unversionedId:"pdf-creator-concepts/using-summary-variable",id:"pdf-creator-concepts/using-summary-variable",title:"Using Summary Variable",description:"Let us consider a scenario, where you want to embed summarized report inside a pdf. To make a summarized report within DronaHQ app, summary control can be used, which holds input field data from different pages.",source:"@site/docs/pdf-creator-concepts/using-summary-variable.md",sourceDirName:"pdf-creator-concepts",slug:"/pdf-creator-concepts/using-summary-variable",permalink:"/pdf-creator-concepts/using-summary-variable",draft:!1,tags:[],version:"current",lastUpdatedAt:1701973196,formattedLastUpdatedAt:"Dec 7, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Dynamic Table",permalink:"/pdf-creator-concepts/dynamic-table"},next:{title:"Add-on: DronaHQ Public and Embed",permalink:"/_heading_addon_public_and_embed"}},d={},m=[{value:"Building a sample app",id:"building-a-sample-app",level:2},{value:"Creating PDF Template",id:"creating-pdf-template",level:3},{value:"App UI Configuration",id:"app-ui-configuration",level:3},{value:"Developing business logic",id:"developing-business-logic",level:3},{value:"App Preview",id:"app-preview",level:3}],u={toc:m},g="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-summary-variable"},"Using Summary Variable"),(0,a.kt)("p",null,"Let us consider a scenario, where you want to embed summarized report inside a pdf. To make a summarized report within DronaHQ app, summary control can be used, which holds input field data from different pages. "),(0,a.kt)("p",null,"Inside the pdf template, a ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," variable and a ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," component needs to be added. The ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," variable will pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," control's data to the ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," component. The ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," component can then render that data in a tabular format."),(0,a.kt)("h2",{id:"building-a-sample-app"},"Building a sample app"),(0,a.kt)("h3",{id:"creating-pdf-template"},"Creating PDF Template"),(0,a.kt)("p",null,"Create a new pdf template, inside the template editor add a ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," component and create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," variable ",(0,a.kt)("inlineCode",{parentName:"p"},"candidate_exp"),", as shown below."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/using-summary-variables/pdf-editor-summary-variable.png",alt:"Creation of summary component and variable",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Creation of summary component and variable"))),(0,a.kt)("p",null,"Go the the properties of ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," component, and from the variable dropdown select the ",(0,a.kt)("inlineCode",{parentName:"p"},"summary")," variable we just created i.e. ",(0,a.kt)("inlineCode",{parentName:"p"},"candidate_exp"),". Save and publish the template."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/using-summary-variables/pdf-editor-summary-configuration.png",alt:"Adding summary variable to summary component",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Adding summary variable to summary component"))),(0,a.kt)("h3",{id:"app-ui-configuration"},"App UI Configuration"),(0,a.kt)("p",null,"For this use case, we need to create two screens, first screen will have the Form UI named as ",(0,a.kt)("inlineCode",{parentName:"p"},"Candidate Details")," and second screen will have the summary control named as ",(0,a.kt)("inlineCode",{parentName:"p"},"Candidate Info"),"."),(0,a.kt)("p",null,"Create a Form UI of your choice. For demonstration, we have taken name(text input), qualification(dropdown), organization name(text input), experience (numeric field) and a button which navigates to the second screen. The organization name and experience fields are contained inside the Form Repeat control, so multiple work experiences can be added for a single candidate."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/using-summary-variables/app-setup-candidate-form.png",alt:"Form UI",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Form UI (first screen)"))),(0,a.kt)("p",null,"Create the second screen, drag and drop a summary control and a button which will generate the pdf. Go to Summary control properties and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages")," setting value to the previous screen which has the Form UI."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/using-summary-variables/app-setup-summary-control.png",alt:"Summary Control",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Summary Control (second screen)"))),(0,a.kt)("h3",{id:"developing-business-logic"},"Developing business logic"),(0,a.kt)("p",null,"Add navigate action to the ",(0,a.kt)("inlineCode",{parentName:"p"},"button_click")," event of ",(0,a.kt)("inlineCode",{parentName:"p"},"Submit")," button placed on the Form UI. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Navigate To")," field select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Candidate Info")," (second screen)."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/using-summary-variables/navigate-action-configuration.png",alt:"Navigate to summary control screen",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Navigate to summary control screen"))),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"button_click")," event of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Report")," button placed on the second screen, add a ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate PDF")," action and select the pdf template we created earlier. Give reference of the summary control in the ",(0,a.kt)("inlineCode",{parentName:"p"},"candidate_exp"),"(summary variable) field and name of the PDF file. Setting a password is optional. "),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/using-summary-variables/generate-pdf-action-configuration.png",alt:"Generate PDF Action Configuration",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Generate PDF Action Configuration"))),(0,a.kt)("p",null,"Continue and add a variable which will hold the generated pdf's link"),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/using-summary-variables/generate-pdf-link-variable.png",alt:"Generate PDF Action Configuration",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Generate PDF Action Configuration"))),(0,a.kt)("p",null,"Now add ",(0,a.kt)("inlineCode",{parentName:"p"},"Open URL")," action on to the success branch of ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate PDF")," action, and in the URL field give reference to the link variable we created inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate PDF")," action."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/using-summary-variables/open-url-action-configuration.png",alt:"Open PDF Link using Open URL action",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Open PDF link using Open URL action"))),(0,a.kt)("h3",{id:"app-preview"},"App Preview"),(0,a.kt)("p",null,"Enter the candidate details and click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Submit")," button. Now click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Report")," button, this will open the generated pdf in a new browser tab."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/using-summary-variables/app-preview.png",alt:"Summary control shows candidate details",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Summary control shows candidate details"))),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/using-summary-variables/generated-pdf-report.png",alt:"Generated pdf",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Generated pdf having candidate details"))))}f.isMDXComponent=!0}}]);