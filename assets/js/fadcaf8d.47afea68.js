"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[5757],{37646:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905),o=n(86291);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const s={sidebar_position:1,title:"Terms and Conditions"},d=void 0,c={unversionedId:"reference/controls/terms-and-conditions",id:"reference/controls/terms-and-conditions",title:"Terms and Conditions",description:"The Terms and Conditions control is used to display a declaration statement and retrieve agreement from the user for specified terms and conditions before proceeding. It is checkbox type control specially for terms and condition with link addition feature.",source:"@site/docs/reference/controls/terms-and-conditions.md",sourceDirName:"reference/controls",slug:"/reference/controls/terms-and-conditions",permalink:"/reference/controls/terms-and-conditions",draft:!1,tags:[],version:"current",lastUpdatedAt:1708410288,formattedLastUpdatedAt:"Feb 20, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Terms and Conditions"},sidebar:"docSidebar",previous:{title:"Tags",permalink:"/reference/controls/tags"},next:{title:"Text Input",permalink:"/reference/controls/text-input"}},p={},u=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Static Data Option",id:"static-data-option",level:3},{value:"Properties",id:"properties",level:2},{value:"Control Outputs",id:"control-outputs",level:2},{value:"Events",id:"events",level:2}],m={toc:u},h="wrapper";function g(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)(h,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){a(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Terms and Conditions control is used to display a declaration statement and retrieve agreement from the user for specified terms and conditions before proceeding. It is checkbox type control specially for terms and condition with link addition feature."),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/reference/controls/terms-and-conditions/preview.jpeg",alt:"Terms and Conditions Control",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Terms and Conditions Control"))),(0,r.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,r.kt)("p",null,"The Terms and Conditions control binds to boolean data, representing the agreement or disagreement with the provided conditions."),(0,r.kt)("h3",{id:"static-data-option"},"Static Data Option"),(0,r.kt)("p",null,"Using the Bind Data option, you can set an initial state for the control. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"false\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Declaration"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the declaration text, indicating user agreement with the terms and conditions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Terms URL"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the URL where the detailed terms and conditions can be found. Including the ",(0,r.kt)("inlineCode",{parentName:"td"},"http://")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"https://")," protocol is essential, as it ensures proper interpretation by the browser, guiding it on how to resolve the URL relative to the current page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Error Message"),(0,r.kt)("td",{parentName:"tr",align:null},"Displays a message when the user fails to agree to the terms and conditions, requesting agreement to proceed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Theme"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the theme or color scheme for the Terms and Conditions control.")))),(0,r.kt)("h2",{id:"control-outputs"},"Control Outputs"),(0,r.kt)("p",null,"The outputs from the Terms and Conditions control, represented by the placeholder ",(0,r.kt)("inlineCode",{parentName:"p"},"{{termsandconditions}}"),", can be referenced in other controls, data queries, or JavaScript functions using the control's unique name."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"termsandconditions"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the user's agreement or confirmation to the terms and conditions.")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value_select"),(0,r.kt)("td",{parentName:"tr",align:null},"Occurs when there is a change in the value of the respective control, typically triggered by selecting another option or inputting a new value.")))))}g.isMDXComponent=!0}}]);