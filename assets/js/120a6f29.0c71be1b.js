"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[41727],{15853:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>u});n(67294);var a=n(3905),r=n(86291);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const s={sidebar_position:1,title:"Name"},p=void 0,c={unversionedId:"reference/controls/name",id:"reference/controls/name",title:"Name",description:"The Name control is designed to accept names in a composite manner, enabling the user to input the complete name in a single field. It facilitates the entry of both first and last names simultaneously.",source:"@site/docs/reference/controls/name.md",sourceDirName:"reference/controls",slug:"/reference/controls/name",permalink:"/reference/controls/name",draft:!1,tags:[],version:"current",lastUpdatedAt:1699440015,formattedLastUpdatedAt:"Nov 8, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Name"},sidebar:"docSidebar",previous:{title:"Multi Image",permalink:"/reference/controls/multi-image"},next:{title:"Nav Bar",permalink:"/reference/controls/navbar"}},m={},u=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Static Data Option",id:"static-data-option",level:3},{value:"Properties",id:"properties",level:2},{value:"Control Outputs",id:"control-outputs",level:2},{value:"Events",id:"events",level:2}],d={toc:u},h="wrapper";function g(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(h,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},d,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Name control is designed to accept names in a composite manner, enabling the user to input the complete name in a single field. It facilitates the entry of both first and last names simultaneously."),(0,a.kt)("figure",null,(0,a.kt)(r.Z,{src:"/img/reference/controls/name/preview.jpeg",alt:"Name Control",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Name Control"))),(0,a.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,a.kt)("p",null,"The Name control accepts data in the string format for both the first name and last name, allowing the user to input and store the complete name in a single field"),(0,a.kt)("h3",{id:"static-data-option"},"Static Data Option"),(0,a.kt)("p",null,"Utilizing the Bind Data option to display static options in the Name control involves specifying of strings."),(0,a.kt)("p",null,"Suppose you are designing an application where users want to input first and last name.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'first_name:\n[\n    "Shibam"\n]\n\nlast_name:\n[\n    "Dhar"\n]\n\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Theme"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows selection of the text box's color, either using a hex code or choosing from available themes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,a.kt)("td",{parentName:"tr",align:null},"Provides a prompt for users, guiding what needs to be entered in the Name field.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Max Text Length"),(0,a.kt)("td",{parentName:"tr",align:null},"Limits the maximum character count for the Name Control.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hide Last Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Hides the last name component, allowing only the first name to be entered.")))),(0,a.kt)("h2",{id:"control-outputs"},"Control Outputs"),(0,a.kt)("p",null,"The output from the Name control, represented by the placeholder ",(0,a.kt)("inlineCode",{parentName:"p"},"{{name}}"),", captures the complete name as entered by the user."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"Represents the complete name input.")))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value_change"),(0,a.kt)("td",{parentName:"tr",align:null},"Occurs when there is a modification in the value of the respective control.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enter_press"),(0,a.kt)("td",{parentName:"tr",align:null},"Activates upon pressing the Enter key while interacting with the Name control.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"focus_out"),(0,a.kt)("td",{parentName:"tr",align:null},"Triggers when the control loses focus, typically when the user clicks outside the control.")))))}g.isMDXComponent=!0}}]);