"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[81110],{14002:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905),a=n(86291);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const u={sidebar_position:1,title:"Quantity"},s=void 0,p={unversionedId:"reference/controls/quantity",id:"reference/controls/quantity",title:"Quantity",description:"The Quantity control is an advanced input element designed to specify the quantity of a particular product or any other item. It is commonly used in microapps where users need to input a numeric quantity for various purposes.",source:"@site/docs/reference/controls/quantity.md",sourceDirName:"reference/controls",slug:"/reference/controls/quantity",permalink:"/reference/controls/quantity",draft:!1,tags:[],version:"current",lastUpdatedAt:1699517643,formattedLastUpdatedAt:"Nov 9, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Quantity"},sidebar:"docSidebar",previous:{title:"Progress Bar",permalink:"/reference/controls/progress-bar"},next:{title:"Query Builder",permalink:"/reference/controls/query-builder"}},c={},d=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Static Data Option",id:"static-data-option",level:3},{value:"Properties",id:"properties",level:2},{value:"Control Outputs",id:"control-outputs",level:2},{value:"Events",id:"events",level:2}],m={toc:d},y="wrapper";function h(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)(y,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){o(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Quantity control is an advanced input element designed to specify the quantity of a particular product or any other item. It is commonly used in microapps where users need to input a numeric quantity for various purposes."),(0,r.kt)("figure",null,(0,r.kt)(a.Z,{src:"/img/reference/controls/quantity/preview.jpeg",alt:"Quantity Control",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Quantity Control"))),(0,r.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,r.kt)("p",null,"The Quantity control requires two different pieces of data to display:"),(0,r.kt)("h3",{id:"static-data-option"},"Static Data Option"),(0,r.kt)("p",null,"To input data into the Quantity control, you need to specify the binding data in two sections:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Product Title",\n    "value": 5\n}\n')),(0,r.kt)("p",null,"This JSON object includes the product's title as a string and the associated quantity as a number."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Theme"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows customization of the control's color, either using a custom hex code or choosing from available themes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Displays the item's label, indicating the element for which the quantity is being entered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Properties"),(0,r.kt)("td",{parentName:"tr",align:null},"Customizes the text label's appearance, enabling size, weight (Light, Normal, Bold, Extra Bold, X Extra Bold), and color changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dark Icons"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the color of the icons to increase and decrease the quantity to a darker shade, typically black.")))),(0,r.kt)("h2",{id:"control-outputs"},"Control Outputs"),(0,r.kt)("p",null,"The Quantity control outputs data associated with the product or item, represented by the placeholders ",(0,r.kt)("inlineCode",{parentName:"p"},"{{quantity.title}}")," for the product's title and ",(0,r.kt)("inlineCode",{parentName:"p"},"{{quantity.value}}")," for the entered quantity."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{{quantity.title}}"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the title or label of the product associated with the entered quantity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{{quantity.value}}"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates the entered quantity for the corresponding product.")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value_change"),(0,r.kt)("td",{parentName:"tr",align:null},"Activates upon modification in the value of the respective control, typically used for numeric input.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enter_press"),(0,r.kt)("td",{parentName:"tr",align:null},"Triggers upon pressing the Enter key after inputting data in the Quantity control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"focus_out"),(0,r.kt)("td",{parentName:"tr",align:null},"Occurs when the control loses focus, typically when the user clicks outside the control.")))))}h.isMDXComponent=!0}}]);