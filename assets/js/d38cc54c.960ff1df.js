"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[81023],{48230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>d});n(67294);var a=n(3905),r=n(86291);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const u={sidebar_position:1,title:"Value Picker"},s=void 0,c={unversionedId:"reference/controls/value-picker",id:"reference/controls/value-picker",title:"Value Picker",description:"The Value Picker control is an advanced element that enables you to select a value along a slider, having predetermined minimum and maximum values.",source:"@site/docs/reference/controls/value-picker.md",sourceDirName:"reference/controls",slug:"/reference/controls/value-picker",permalink:"/reference/controls/value-picker",draft:!1,tags:[],version:"current",lastUpdatedAt:1697705514,formattedLastUpdatedAt:"Oct 19, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Value Picker"},sidebar:"docSidebar",previous:{title:"Typeahead",permalink:"/reference/controls/typeahead"},next:{title:"Vertical Divider",permalink:"/reference/controls/vertical-divider"}},p={},d=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Static Data Option",id:"static-data-option",level:3},{value:"Properties",id:"properties",level:2},{value:"Control Outputs",id:"control-outputs",level:2},{value:"Events",id:"events",level:2}],m={toc:d},h="wrapper";function k(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){l(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Value Picker control is an advanced element that enables you to select a value along a slider, having predetermined minimum and maximum values."),(0,a.kt)("figure",null,(0,a.kt)(r.Z,{src:"/img/reference/controls/value-picker/preview.jpeg",alt:"Value Picker",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Value Picker"))),(0,a.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,a.kt)("p",null,"The Value Picker controls accepts numeric format to display data. You can bind data to the Value Picker controls in various\nways, allowing for flexible customization and presentation of menu items."),(0,a.kt)("h3",{id:"static-data-option"},"Static Data Option"),(0,a.kt)("p",null,"To display static options in the Value Picker controls, you can use the Bind Data option. The Bind Data option must be\nspecified as numeric. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"50;\n")),(0,a.kt)("p",null,"This will set the by default value inside the control as ",(0,a.kt)("inlineCode",{parentName:"p"},"50"),"."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Minimum"),(0,a.kt)("td",{parentName:"tr",align:null},"This allows you to set the minimum value of the control.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum"),(0,a.kt)("td",{parentName:"tr",align:null},"This allows you to set the maximum value of the control.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Step"),(0,a.kt)("td",{parentName:"tr",align:null},"This is used to set the interval in terms of the value that the slider should move with each step increase of the slider.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Show End Values"),(0,a.kt)("td",{parentName:"tr",align:null},"If this is selected, the Max and Min values will be displayed below the slider.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Font"),(0,a.kt)("td",{parentName:"tr",align:null},"This lets you customize the look of the extreme values by setting the text size, weight (Light, Normal, Bold, Extra Bold, X Extra Bold), and color of the label.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Theme"),(0,a.kt)("td",{parentName:"tr",align:null},"This lets you choose the color of the control. You can either enter a custom hex code value or use one from the available themes in the builder.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Display Values"),(0,a.kt)("td",{parentName:"tr",align:null},"This option displays the selected value.")))),(0,a.kt)("h2",{id:"control-outputs"},"Control Outputs"),(0,a.kt)("p",null,"The outputs from the Value Picker control, represented by the placeholder ",(0,a.kt)("inlineCode",{parentName:"p"},"{{valuepicker}}"),", can be referenced in other controls, data queries, or JavaScript functions using the control's unique name."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"valuepicker"),(0,a.kt)("td",{parentName:"tr",align:null},"Represents the user-selected value from the given path/trail of the valuepicker control.")))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value_select"),(0,a.kt)("td",{parentName:"tr",align:null},"Occurs when there is a change in the value of the respective control, typically triggered by selecting another option or inputting a new value.")))))}k.isMDXComponent=!0}}]);