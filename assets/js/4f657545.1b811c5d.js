"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[54785],{19039:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});r(67294);var n=r(3905),a=r(86291);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const s={sidebar_position:1,title:"Numeric"},c=void 0,u={unversionedId:"reference/controls/numeric",id:"reference/controls/numeric",title:"Numeric",description:"The Numeric Control is a versatile tool used to gather numeric data or perform calculations based on user inputs. It can handle various numeric formats, such as whole numbers and decimals, making it suitable for a wide range of applications.",source:"@site/docs/reference/controls/numeric.md",sourceDirName:"reference/controls",slug:"/reference/controls/numeric",permalink:"/reference/controls/numeric",draft:!1,tags:[],version:"current",lastUpdatedAt:1692183919,formattedLastUpdatedAt:"Aug 16, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Numeric"},sidebar:"docSidebar",previous:{title:"NFC Reader",permalink:"/reference/controls/nfc-reader"},next:{title:"OTP",permalink:"/reference/controls/otp"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"Control Output",id:"control-output",level:2},{value:"Events",id:"events",level:2}],m={toc:d},b="wrapper";function h(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(b,l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},m,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Numeric Control is a versatile tool used to gather numeric data or perform calculations based on user inputs. It can handle various numeric formats, such as whole numbers and decimals, making it suitable for a wide range of applications."),(0,n.kt)("figure",null,(0,n.kt)(a.Z,{src:"/img/reference/controls/numeric/preview.jpeg",alt:"Textarea",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Textarea"))),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Theme"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose the color of the Container box. You can use a custom hex code or select one from the available themes in the builder.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Format"),(0,n.kt)("td",{parentName:"tr",align:null},"Three options available: Normal - displays the number as entered, Currency - rounds off to the nearest whole number, Accounting - displays negative values in brackets.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,n.kt)("td",{parentName:"tr",align:null},"Provides a hint to users on what to input. It appears in the field and disappears when users start typing.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Decimal Precision"),(0,n.kt)("td",{parentName:"tr",align:null},"Defines the number of digits after the decimal point to be displayed. Use 0 for no decimal points.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Debounce Time (ms)"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the delay between events in milliseconds, controlling the action frequency on value change.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Show Barcode Scanner"),(0,n.kt)("td",{parentName:"tr",align:null},"Enables barcode scanning for data entry using a mobile device's camera. When scanned, the interpreted data sets as the control value.")))),(0,n.kt)("h2",{id:"control-output"},"Control Output"),(0,n.kt)("p",null,"The outputs from the Numeric control, represented by the placeholder ",(0,n.kt)("inlineCode",{parentName:"p"},"{{numeric}}"),", can be referenced in other controls, data queries, or JavaScript functions using the control's unique name."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Output"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"numeric"),(0,n.kt)("td",{parentName:"tr",align:null},"Represents the numeric value available in the Numeric control.")))),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value_change"),(0,n.kt)("td",{parentName:"tr",align:null},"Triggers when you change the value in the Numeric control. Initiates subsequent actions with the same flow as used for action buttons, list controls, etc.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"focus_out"),(0,n.kt)("td",{parentName:"tr",align:null},"Triggers when focus moves to another control, initiating the action flow.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"enter_press"),(0,n.kt)("td",{parentName:"tr",align:null},"Triggers when the Enter key is pressed after inputting data in the Numeric control.")))))}h.isMDXComponent=!0}}]);