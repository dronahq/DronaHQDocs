"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[11151],{46411:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905),a=n(86291);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const s={sidebar_position:1,title:"Alert Control"},p=void 0,c={unversionedId:"reference/controls/alert",id:"reference/controls/alert",title:"Alert Control",description:"The Alert Control provides a mechanism to display important messages or notifications to users. It allows for customization of the alert type, title, description, action text, and more, enabling versatile use cases for various notifications.",source:"@site/docs/reference/controls/alert.md",sourceDirName:"reference/controls",slug:"/reference/controls/alert",permalink:"/reference/controls/alert",draft:!1,tags:[],version:"current",lastUpdatedAt:1700730474,formattedLastUpdatedAt:"Nov 23, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Alert Control"},sidebar:"docSidebar",previous:{title:"Advance Map",permalink:"/reference/controls/advance-map"},next:{title:"Back Next",permalink:"/reference/controls/backnext"}},u={},d=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Static Data Option",id:"static-data-option",level:3},{value:"Properties",id:"properties",level:2},{value:"Control Outputs",id:"control-outputs",level:2},{value:"Events",id:"events",level:2}],m={toc:d},k="wrapper";function f(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(k,o(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){l(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Alert Control provides a mechanism to display important messages or notifications to users. It allows for customization of the alert type, title, description, action text, and more, enabling versatile use cases for various notifications."),(0,r.kt)("figure",null,(0,r.kt)(a.Z,{src:"/img/reference/controls/alert/preview.jpeg",alt:"Alert Control",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Alert Control"))),(0,r.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,r.kt)("p",null,"The Alert Control facilitates the display of dynamic content using the Bind Data option. It accepts several data inputs."),(0,r.kt)("h3",{id:"static-data-option"},"Static Data Option"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Title"),": Represents the title of the alert."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Description"),": Specifies the detailed description or message to be conveyed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Action Text"),": Defines the text label for the action button."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Alert Type"),": Indicates the type of alert (e.g., Info, Note, Alert).")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Title": "This is a Sample Alert",\n  "Description": "This is the sample alert text.",\n  "Action Text": "Action",\n  "Alert Type": "Info"\n}\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alert Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the type of alert (Info, Note, Alert).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Title"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the title of the alert.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Note"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents additional notes or descriptive text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the detailed description or message content.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the text label for the action button.")))),(0,r.kt)("h2",{id:"control-outputs"},"Control Outputs"),(0,r.kt)("p",null,"The outputs from the Alert Control, represented by the placeholder ",(0,r.kt)("inlineCode",{parentName:"p"},"{{alert}}"),", can be utilized in other controls, data queries, or JavaScript functions using the control's unique name."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alert"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the data of the selected alert in the control.")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action_Click"),(0,r.kt)("td",{parentName:"tr",align:null},"Occurs when the action button in the alert control is clicked, typically triggering an action.")))))}f.isMDXComponent=!0}}]);