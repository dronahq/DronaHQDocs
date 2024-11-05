"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[91843],{77494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>g});n(67294);var r=n(3905),o=n(86291);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={sidebar_position:1,title:"Toggle"},c=void 0,p={unversionedId:"reference/controls/toggle",id:"reference/controls/toggle",title:"Toggle",description:"The Toggle control provides a binary selection interface, allowing users to switch between two mutually exclusive options or states. It typically showcases an ON/OFF or YES/NO functionality, offering a visual representation of toggling between the options.",source:"@site/docs/reference/controls/toggle.md",sourceDirName:"reference/controls",slug:"/reference/controls/toggle",permalink:"/reference/controls/toggle",draft:!1,tags:[],version:"current",lastUpdatedAt:1698827717,formattedLastUpdatedAt:"Nov 1, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Toggle"},sidebar:"docSidebar",previous:{title:"Timer",permalink:"/reference/controls/timer"},next:{title:"Typeahead",permalink:"/reference/controls/typeahead"}},u={},g=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Static Data Option",id:"static-data-option",level:3},{value:"Properties",id:"properties",level:2},{value:"Control Outputs",id:"control-outputs",level:2},{value:"Events",id:"events",level:2}],d={toc:g},f="wrapper";function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(f,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},d,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Toggle control provides a binary selection interface, allowing users to switch between two mutually exclusive options or states. It typically showcases an ON/OFF or YES/NO functionality, offering a visual representation of toggling between the options."),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/reference/controls/toggle/preview.jpeg",alt:"Toggle Control",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Toggle Control"))),(0,r.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,r.kt)("p",null,"The Toggle control can be bound to boolean data, representing a switch between two states: true or false."),(0,r.kt)("h3",{id:"static-data-option"},"Static Data Option"),(0,r.kt)("p",null,"The Toggle control can display a predefined static state using the Bind Data option. You can utilize this feature to set an initial state for the toggle switch."),(0,r.kt)("p",null,"For example, you can represent an initial state as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"true\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Style"),(0,r.kt)("td",{parentName:"tr",align:null},"Configures the theme of the toggle control.")))),(0,r.kt)("h2",{id:"control-outputs"},"Control Outputs"),(0,r.kt)("p",null,"The outputs from the Toggle control, represented by the placeholder ",(0,r.kt)("inlineCode",{parentName:"p"},"{{toggle}}"),", can be referenced in other controls, data queries, or JavaScript functions using the control's unique name."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"toggle"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the binary state of the toggle.")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value_select"),(0,r.kt)("td",{parentName:"tr",align:null},"Occurs when there is a toggle the value of the respective control, from Yes to No or True to False.")))))}b.isMDXComponent=!0}}]);