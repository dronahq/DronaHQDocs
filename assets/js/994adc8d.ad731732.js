"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[31416],{50615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>u});n(67294);var a=n(3905),i=n(86291);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={sidebar_position:1},c="Dynamic Table",d={unversionedId:"pdf-creator-concepts/dynamic-table",id:"pdf-creator-concepts/dynamic-table",title:"Dynamic Table",description:"Standard tables do not exhibit the property to add more rows dynamically as per the data selected. Hence, DronaHQ provides the dynamic table component that enables the addition of multiple rows at run time. The Dynamic tables are easily customizable and allow you to add multi-select data using the List variables. The List variables can be of type text or image.",source:"@site/docs/pdf-creator-concepts/dynamic-table.md",sourceDirName:"pdf-creator-concepts",slug:"/pdf-creator-concepts/dynamic-table",permalink:"/pdf-creator-concepts/dynamic-table",draft:!1,tags:[],version:"current",lastUpdatedAt:1701973196,formattedLastUpdatedAt:"Dec 7, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Concepts",permalink:"/category/concepts-4"},next:{title:"Using Summary Variable",permalink:"/pdf-creator-concepts/using-summary-variable"}},s={},u=[{value:"Building a sample app",id:"building-a-sample-app",level:2},{value:"Creating PDF Template",id:"creating-pdf-template",level:3},{value:"App UI Configuration",id:"app-ui-configuration",level:3},{value:"Developing business logic",id:"developing-business-logic",level:3},{value:"App Preview",id:"app-preview",level:3}],m={toc:u},b="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(b,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dynamic-table"},"Dynamic Table"),(0,a.kt)("p",null,"Standard tables do not exhibit the property to add more rows dynamically as per the data selected. Hence, DronaHQ provides the dynamic table component that enables the addition of multiple rows at run time. The Dynamic tables are easily customizable and allow you to add multi-select data using the ",(0,a.kt)("inlineCode",{parentName:"p"},"List variables"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"List variables")," can be of type text or image."),(0,a.kt)("h2",{id:"building-a-sample-app"},"Building a sample app"),(0,a.kt)("h3",{id:"creating-pdf-template"},"Creating PDF Template"),(0,a.kt)("p",null,"Create a new pdf template, inside the template editor add a ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic table")," component and add some columns. For each column you add, create a corresponding list variable for it. Now add those variables to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic table")," accordingly. Save and publish the template."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/dynamic-table/pdf-editor-dynamic-table-list-variables.png",alt:"Creation of dynamic table and list variables",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Creation of dynamic table and list variables"))),(0,a.kt)("h3",{id:"app-ui-configuration"},"App UI Configuration"),(0,a.kt)("p",null,"Drag and drop a form repeat control and add the required fields to it. For demonstration we have taken book name(text input), author name(text input), categories(dropdown), book format(checkboxes) and a button ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Books Report")," which will generate the pdf. "),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/dynamic-table/app-setup-books-form.png",alt:"Form UI - Book Details",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Form UI - Book Details"))),(0,a.kt)("h3",{id:"developing-business-logic"},"Developing business logic"),(0,a.kt)("p",null,"Upon ",(0,a.kt)("inlineCode",{parentName:"p"},"button_click")," event of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Books Report"),", add a ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate PDF")," action and select the pdf template we created earlier. Appropriately configure variable fields with input controls as shown below."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/dynamic-table/generate-pdf-action-configuration.png",alt:"Generate PDF Action Configuration",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Generate PDF Action Configuration"))),(0,a.kt)("p",null,"Continue and add a variable which will hold the generated pdf's link"),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/dynamic-table/generate-pdf-link-variable.png",alt:"Generate PDF Action Configuration",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Generate PDF Action Configuration"))),(0,a.kt)("p",null,"Now add ",(0,a.kt)("inlineCode",{parentName:"p"},"Open URL")," action on to the success branch of ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate PDF")," action, and in the URL field give reference to the link variable we created inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate PDF")," action."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/dynamic-table/open-url-action-configuration.png",alt:"Open PDF Link using Open URL action",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Open PDF link using Open URL action"))),(0,a.kt)("h3",{id:"app-preview"},"App Preview"),(0,a.kt)("p",null,"Enter the book details and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Books Report"),", this will open the generated pdf in a new browser tab."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/pdf-creator-concepts/dynamic-table/generated-pdf-report.png",alt:"Generated pdf",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Generated pdf having book details"))))}f.isMDXComponent=!0}}]);