"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[73821],{11309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});n(67294);var r=n(3905),o=n(86291);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={sidebar_position:1,title:"Phone"},u=void 0,c={unversionedId:"reference/controls/phone",id:"reference/controls/phone",title:"Phone",description:"The Phone control is designed to receive phone numbers in a composite format, divided into two distinct fields. These fields can be stored in separate columns of a sheet, treating them as individual entities. The Phone control comprises two components - Country Code or Prefix and Phone number, providing unique accessibility for each part of the phone number.",source:"@site/docs/reference/controls/phone.md",sourceDirName:"reference/controls",slug:"/reference/controls/phone",permalink:"/reference/controls/phone",draft:!1,tags:[],version:"current",lastUpdatedAt:1697705514,formattedLastUpdatedAt:"Oct 19, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Phone"},sidebar:"docSidebar",previous:{title:"Panel",permalink:"/reference/controls/panel"},next:{title:"Prefix and Suffix",permalink:"/reference/controls/prefix-sufix"}},p={},d=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Country Code",id:"country-code",level:3},{value:"Phone Number",id:"phone-number",level:3},{value:"Properties",id:"properties",level:2},{value:"Control Outputs",id:"control-outputs",level:2},{value:"Events",id:"events",level:2}],h={toc:d},m="wrapper";function b(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Phone control is designed to receive phone numbers in a composite format, divided into two distinct fields. These fields can be stored in separate columns of a sheet, treating them as individual entities. The Phone control comprises two components - Country Code or Prefix and Phone number, providing unique accessibility for each part of the phone number."),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/reference/controls/phone/preview.png",alt:"Phone ",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Phone "))),(0,r.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,r.kt)("p",null,"The Phone control consists of two parts: the country code and the phone number. It accepts single inputs for both the country code and the phone number."),(0,r.kt)("h3",{id:"country-code"},"Country Code"),(0,r.kt)("p",null,"The Country Code field allows users to input their country code as a string, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"+1")," for the United States, ",(0,r.kt)("inlineCode",{parentName:"p"},"+44")," for the United Kingdom, etc."),(0,r.kt)("h3",{id:"phone-number"},"Phone Number"),(0,r.kt)("p",null,"The Phone Number field allows users to input their phone number as a number, e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"1234567890"),"."),(0,r.kt)("p",null,"Users can directly enter the country code and phone number in their respective fields without using an array. "),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Theme"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to choose the color of the text box. You can enter a custom hex code or use one of the available themes in the builder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Phone Placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"A prompt that gives a hint to the user about the expected input in the Phone field. It appears in the field and is overridden when the user types something into it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Country Placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a hint to the user about the intended input for the Country field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default Country"),(0,r.kt)("td",{parentName:"tr",align:null},"Lets you set a default country for the Country code field, which can be changed by the user later.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Debounce Time (In ms)"),(0,r.kt)("td",{parentName:"tr",align:null},"The delay in milliseconds between events, controlling the frequency of action triggers on value changes.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Show Barcode Scanner"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows you to enable or disable barcode scanning using the phone control.")))),(0,r.kt)("h2",{id:"control-outputs"},"Control Outputs"),(0,r.kt)("p",null,"The outputs from the Phone control, represented by the placeholder ",(0,r.kt)("inlineCode",{parentName:"p"},"{{phone}}"),", can be referenced in other controls, data queries, or JavaScript functions using the control's unique name."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the phone number available in the Phone control.")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value_change"),(0,r.kt)("td",{parentName:"tr",align:null},"Occurs when there is a modification in the Advance Map control's value. To control the frequency or speed of the change event, you can utilize the ",(0,r.kt)("inlineCode",{parentName:"td"},"debounce")," property associated with the control.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"focus_out"),(0,r.kt)("td",{parentName:"tr",align:null},"Occurs when the control loses focus, typically when the user clicks outside the control. It allows you to perform actions or handle specific behavior when the focus is no longer on the element.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enter_press"),(0,r.kt)("td",{parentName:"tr",align:null},"This event indicates the pressing of the Enter key when entering data into your Currency control.")))))}b.isMDXComponent=!0}}]);