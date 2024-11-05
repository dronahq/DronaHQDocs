"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[73317],{61245:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>c});a(67294);var n=a(3905),r=a(86291);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const p={sidebar_position:1,title:"Range Picker"},d=void 0,u={unversionedId:"reference/controls/range-picker",id:"reference/controls/range-picker",title:"Range Picker",description:"The Range Picker control is used to define and select a range of values, providing users with a customizable range selection interface. It allows binding to two options - Min Value and Max Value in a numerical data format.",source:"@site/docs/reference/controls/range-picker.md",sourceDirName:"reference/controls",slug:"/reference/controls/range-picker",permalink:"/reference/controls/range-picker",draft:!1,tags:[],version:"current",lastUpdatedAt:1698907326,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Range Picker"},sidebar:"docSidebar",previous:{title:"Radio",permalink:"/reference/controls/radio"},next:{title:"Rating",permalink:"/reference/controls/rating"}},s={},c=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Static Data Option",id:"static-data-option",level:3},{value:"Min_Value",id:"min_value",level:4},{value:"Max_Value",id:"max_value",level:4},{value:"Properties",id:"properties",level:2},{value:"Range Properties",id:"range-properties",level:3},{value:"Value Properties",id:"value-properties",level:3},{value:"Slider Properties",id:"slider-properties",level:3},{value:"Control Outputs",id:"control-outputs",level:2},{value:"Events",id:"events",level:2}],m={toc:c},k="wrapper";function g(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)(k,i(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Range Picker control is used to define and select a range of values, providing users with a customizable range selection interface. It allows binding to two options - Min Value and Max Value in a numerical data format."),(0,n.kt)("figure",null,(0,n.kt)(r.Z,{src:"/img/reference/controls/range-picker/preview.png",alt:"Range Picker Control",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Range Picker Control"))),(0,n.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,n.kt)("p",null,"Range Picker control accepts number format to display data. There are two different numericdata options: Min Value and Max Value."),(0,n.kt)("h3",{id:"static-data-option"},"Static Data Option"),(0,n.kt)("p",null,"Utilize the Bind Data option to set predefined minimum and maximum values for the range. For instance:"),(0,n.kt)("h4",{id:"min_value"},"Min_Value"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"\n   50\n\n")),(0,n.kt)("h4",{id:"max_value"},"Max_Value"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"\n   500\n\n")),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Range"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the minimum and maximum range values.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Min"),(0,n.kt)("td",{parentName:"tr",align:null},"Defines the minimum value allowed within the range.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max"),(0,n.kt)("td",{parentName:"tr",align:null},"Defines the maximum value allowed within the range.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Step"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the increment/decrement value for the range.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Min Value"),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the default minimum value within the range.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max Value"),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the default maximum value within the range.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Disable Handle"),(0,n.kt)("td",{parentName:"tr",align:null},"Enables or disables the range handle to control selection.")))),(0,n.kt)("h3",{id:"range-properties"},"Range Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Min Range"),(0,n.kt)("td",{parentName:"tr",align:null},"Sets font size, weight, and color for the Min range text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max Range"),(0,n.kt)("td",{parentName:"tr",align:null},"Sets font size, weight, and color for the Max range text.")))),(0,n.kt)("h3",{id:"value-properties"},"Value Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Min value"),(0,n.kt)("td",{parentName:"tr",align:null},"Sets font size, weight, and color for the selected Min value text.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max value"),(0,n.kt)("td",{parentName:"tr",align:null},"Sets font size, weight, and color for the selected Max value text.")))),(0,n.kt)("h3",{id:"slider-properties"},"Slider Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Slider"),(0,n.kt)("td",{parentName:"tr",align:null},"Customizes the Slider bar properties.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Height"),(0,n.kt)("td",{parentName:"tr",align:null},"Defines the height of the Slider Bar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Filled color"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the color of the bar indicating the range.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Border radius"),(0,n.kt)("td",{parentName:"tr",align:null},"Determines the border's radius for the bar.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Empty Color"),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the color filled up in the slider outside the range.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Slider Handle"),(0,n.kt)("td",{parentName:"tr",align:null},"Customizes the Slider Handles: Size, Border Radius, and Color.")))),(0,n.kt)("h2",{id:"control-outputs"},"Control Outputs"),(0,n.kt)("p",null,"The outputs from the Range Picker control, represented by the placeholders ",(0,n.kt)("inlineCode",{parentName:"p"},"{{rangepicker.Min_Value}}")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"{{rangepicker.Max_Value}}"),", can be referenced in other controls, data queries, or JavaScript functions using the control's unique name."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Output"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Min Value"),(0,n.kt)("td",{parentName:"tr",align:null},"Represents the selected minimum value in the Range Picker control.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max Value"),(0,n.kt)("td",{parentName:"tr",align:null},"Represents the selected maximum value in the Range Picker control.")))),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"value_change"),(0,n.kt)("td",{parentName:"tr",align:null},"Occurs when there is a modification in the Range picker control's value. To control the frequency or speed of the change event, you can utilize the ",(0,n.kt)("inlineCode",{parentName:"td"},"debounce")," property associated with the control.")))))}g.isMDXComponent=!0}}]);