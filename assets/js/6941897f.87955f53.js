"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[53104],{79452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905),a=n(86291);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={sidebar_position:1,title:"Select Bar"},c=void 0,p={unversionedId:"reference/controls/select-bar",id:"reference/controls/select-bar",title:"Select Bar",description:"The Select Bar control is a unique interface designed to facilitate selection from a list of items arranged in a bar format. It offers a visually appealing and user-friendly way to present a range of selectable items.",source:"@site/docs/reference/controls/select-bar.md",sourceDirName:"reference/controls",slug:"/reference/controls/select-bar",permalink:"/reference/controls/select-bar",draft:!1,tags:[],version:"current",lastUpdatedAt:1698995722,formattedLastUpdatedAt:"Nov 3, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Select Bar"},sidebar:"docSidebar",previous:{title:"Rich Text Viewer",permalink:"/reference/controls/rich-text-viewer"},next:{title:"Select",permalink:"/reference/controls/select"}},u={},d=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Binding Options Example",id:"binding-options-example",level:3},{value:"Selected Options - Data Binding",id:"selected-options---data-binding",level:3},{value:"Properties",id:"properties",level:2},{value:"Control Outputs",id:"control-outputs",level:2},{value:"Events",id:"events",level:2}],m={toc:d},f="wrapper";function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(f,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Select Bar control is a unique interface designed to facilitate selection from a list of items arranged in a bar format. It offers a visually appealing and user-friendly way to present a range of selectable items."),(0,r.kt)("figure",null,(0,r.kt)(a.Z,{src:"/img/reference/controls/select-bar/preview.jpeg",alt:"Select Bar Control",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Select Bar Control"))),(0,r.kt)("p",null,"Colored container indicates selection and if deselected the color is set back to the default. For example, a Select bar control can be used to let the user select all the required services by a customer."),(0,r.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,r.kt)("p",null,"The Select Bar control allows users to select one or more options from a list of choices. To populate the Select Bar control with data, you can use the Bind Data option, which accepts an array of strings in JSON format."),(0,r.kt)("h3",{id:"binding-options-example"},"Binding Options Example"),(0,r.kt)("p",null,'For example, if you want to create a Select Bar control with a list of items such as "Home," "Work," "Gym," and "Park," you can use the Bind Data option with an array of string values:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    "Home",\n    "Work",\n    "Gym",\n    "Park"\n]\n')),(0,r.kt)("h3",{id:"selected-options---data-binding"},"Selected Options - Data Binding"),(0,r.kt)("p",null,"To set the default selected options in the Select Bar control, use the Bind Data - Selected Option section with an array of string value(s). For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    "Work",\n    "Gym"\n]\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Ensure the selected options match the values within the provided data to appear correctly in the Select Bar control.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,"The Select Bar control offers various properties to customize its appearance and functionality:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Theme"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the color theme for the Select Bar.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Selection Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose between single or multiple item selection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bar Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Determine how the items should be displayed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Item Width"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the width of each item as a percentage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bottom Label"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure the text for the bottom label.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Left Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure the left text for the items.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Right Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure the right text for the items.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bottom Text"),(0,r.kt)("td",{parentName:"tr",align:null},"Customize the size, weight, and color for the bottom text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Color Configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"Define the color configuration for each options individually")))),(0,r.kt)("h2",{id:"control-outputs"},"Control Outputs"),(0,r.kt)("p",null,"The outputs from the Select Bar control, represented by the placeholder ",(0,r.kt)("inlineCode",{parentName:"p"},"{{select_bar}}"),", can be referenced in other controls, data queries, or JavaScript functions using the control's unique name."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"select_bar"),(0,r.kt)("td",{parentName:"tr",align:null},"Represents the user-selected values from the Select Bar control.")))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value_select"),(0,r.kt)("td",{parentName:"tr",align:null},"Occurs when there is a change in the value of the control, typically triggered by selecting another option or inputting a new value.")))))}h.isMDXComponent=!0}}]);