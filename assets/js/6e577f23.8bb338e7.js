"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[96566],{1114:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>m});n(67294);var r=n(3905),a=n(86291);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const d={sidebar_position:1,title:"Timeline"},s=void 0,p={unversionedId:"reference/controls/timeline",id:"reference/controls/timeline",title:"Timeline",description:"Timeline control consists of a vertical list, to display events along with date and time. It is a custom control for displaying list data in a timeline.",source:"@site/docs/reference/controls/timeline.md",sourceDirName:"reference/controls",slug:"/reference/controls/timeline",permalink:"/reference/controls/timeline",draft:!1,tags:[],version:"current",lastUpdatedAt:1692183919,formattedLastUpdatedAt:"Aug 16, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Timeline"},sidebar:"docSidebar",previous:{title:"Time Picker",permalink:"/reference/controls/time-picker"},next:{title:"Timer",permalink:"/reference/controls/timer"}},c={},m=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Static Data Option",id:"static-data-option",level:3},{value:"Properties",id:"properties",level:2}],u={toc:m},f="wrapper";function g(t){var{components:e}=t,n=l(t,["components"]);return(0,r.kt)(f,o(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){i(t,e,n[e])}))}return t}({},u,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Timeline control consists of a vertical list, to display events along with date and time. It is a custom control for displaying list data in a timeline."),(0,r.kt)("p",null,"It supports HTML rendering of entries, event grouping, and group sorting."),(0,r.kt)("figure",null,(0,r.kt)(a.Z,{src:"/img/reference/controls/timeline/preview.png",alt:"Timeline",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Timeline"))),(0,r.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,r.kt)("p",null,"Timeline control accepts array of objects in JSON format to display data. There are different ways in which you can bind data to the Timeline control."),(0,r.kt)("h3",{id:"static-data-option"},"Static Data Option"),(0,r.kt)("p",null,"To display static options in the Timeline control, you can use the Bind Data option. The Bind Data option must be specified as an array of objects. The JSON array must have ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," attributes. The date provided can have date and time as well in UNIX format. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'[\n    {\n        "Date":1622795662000,\n        "Event":"Account Updated"\n    },\n    {\n        "Date":1622885640003,\n        "Event":"Account Updated"\n    },\n    {\n        "Date":162278464200,\n        "Event":"Account Created"\n    },\n    {\n        "Date":1622885742000,\n        "Event":"Renewal Plan Initiated"\n    },\n    {\n        "Date":162278564200,\n        "Event":"Details Updated"\n    }\n]\n')),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Grouped"),(0,r.kt)("td",{parentName:"tr",align:null},"Toggle option to group the timeline or list of events based on provided dates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Order"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the order of the timeline (ascending or descending) based on the dates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Line color"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the color of the timeline's line (visual attribute).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Columns to evaluate"),(0,r.kt)("td",{parentName:"tr",align:null},"Dropdown to select data from the database for connecting with the date and data column of the timeline.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Title"),(0,r.kt)("td",{parentName:"tr",align:null},"Customize font size, font-weight, and font color for the timeline title.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Body"),(0,r.kt)("td",{parentName:"tr",align:null},"Customize font size, font-weight, and font color for the timeline's body content.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date/ Time Fonts"),(0,r.kt)("td",{parentName:"tr",align:null},"Customize font size, font-weight, and font color for the date and time in the timeline.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date Time Properties"),(0,r.kt)("td",{parentName:"tr",align:null},"Options for date format, time format, and submit format.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom format toggle"),(0,r.kt)("td",{parentName:"tr",align:null},"Toggle button to provide custom formats for date and time display.")))))}g.isMDXComponent=!0}}]);