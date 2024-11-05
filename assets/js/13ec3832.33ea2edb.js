"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[278],{64822:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>d,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905),r=n(86291);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const d={sidebar_position:1,title:"JSON Editor"},s=void 0,p={unversionedId:"reference/controls/json-editor",id:"reference/controls/json-editor",title:"JSON Editor",description:"The JSON Editor control allows you to visualize and manipulate JSON text or files from a specified source.",source:"@site/docs/reference/controls/json-editor.md",sourceDirName:"reference/controls",slug:"/reference/controls/json-editor",permalink:"/reference/controls/json-editor",draft:!1,tags:[],version:"current",lastUpdatedAt:1692255300,formattedLastUpdatedAt:"Aug 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"JSON Editor"},sidebar:"docSidebar",previous:{title:"Input Label",permalink:"/reference/controls/input-label"},next:{title:"JSON Viewer",permalink:"/reference/controls/json-viewer"}},u={},c=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Static Data Option",id:"static-data-option",level:3},{value:"Dynamic Data Option",id:"dynamic-data-option",level:3},{value:"Properties",id:"properties",level:2},{value:"Control Outputs",id:"control-outputs",level:2}],m={toc:c},h="wrapper";function g(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)(h,i(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){o(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The JSON Editor control allows you to visualize and manipulate JSON text or files from a specified source."),(0,a.kt)("p",null,"The JSON Editor is particularly useful when you need to inspect and modify JSON data from files, such as in applications designed for online courses. It enables users to examine predefined sample code or code they are experimenting with independently."),(0,a.kt)("figure",null,(0,a.kt)(r.Z,{src:"/img/reference/controls/json-editor/preview.jpeg",alt:"JSON viewer",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"JSON viewer"))),(0,a.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,a.kt)("p",null,"The JSON Editor control accepts JSON data to display in a structured format. There are different ways in which you can bind data to the JSON Editor control."),(0,a.kt)("h3",{id:"static-data-option"},"Static Data Option"),(0,a.kt)("p",null,"To display static JSON data in the JSON Editor control, you can use the Bind Data option. The Bind Data option must be specified as valid JSON data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "John Doe",\n    "age": 30,\n    "email": "john.doe@example.com"\n  },\n  {\n    "name": "Jane Smith",\n    "age": 25,\n    "email": "jane.smith@example.com"\n  },\n  {\n    "name": "Michael Johnson",\n    "age": 40,\n    "email": "michael.johnson@example.com"\n  }\n]\n')),(0,a.kt)("h3",{id:"dynamic-data-option"},"Dynamic Data Option"),(0,a.kt)("p",null,"In this example, we have a JSON Editor Control that displays information about different products in an online store. The data is fetched from a database in JSON format and includes details such as product name, category, price, and availability."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set up a Data Query:\nFirst, make sure you have a data query configured to fetch the product information from your database. The query might look like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT product_name, category, price, availability FROM products\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Configure the JSON Editor Control:\nIn the JSON Editor control, navigate to the Bind Data Options section and select ",(0,a.kt)("inlineCode",{parentName:"li"},"Quick Select -> Data Queries -> yourDataQueryName"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{{yourDataQueryName}}\n")),(0,a.kt)("p",null,"By selecting the data query you've set up (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"yourDataQueryName"),"), the JSON Editor control will automatically fetch the product information from your database and display it in a structured format. Users can view the product names, categories, prices, and availability in an organized manner."),(0,a.kt)("p",null,"With this JSON Editor Control, online store administrators and customers can easily view and modify real-time product information, making informed decisions about purchases and product management."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Line number"),(0,a.kt)("td",{parentName:"tr",align:null},"Toggle this switch ON to display line numbers in the JSON editor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Error gutter"),(0,a.kt)("td",{parentName:"tr",align:null},"Toggle this switch ON to display the error gutter for easy error identification in the JSON editor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Line wrap"),(0,a.kt)("td",{parentName:"tr",align:null},"Toggle this switch ON to enable wrapping of lines within the JSON editor's size.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fold option"),(0,a.kt)("td",{parentName:"tr",align:null},"Set how the data appears for the object, either expanded or collapsed. By default, it is set to Expand.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Font"),(0,a.kt)("td",{parentName:"tr",align:null},"Customize the JSON data or text by adjusting text size, weight (Light, Normal, Bold, Extra Bold, X Extra Bold), alignment (Left, Center, Right, Justified), and color of the label.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Debounce Time (In ms)"),(0,a.kt)("td",{parentName:"tr",align:null},"This is the delay in milliseconds between events. You can add the debounce time to control the frequency when the action triggers on a change in value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Height (Auto)"),(0,a.kt)("td",{parentName:"tr",align:null},"This is used to specify whether the height of the JSON Editor would be automatically set as per the data. You can toggle to switch on or off to specify the Auto Height setting.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Height"),(0,a.kt)("td",{parentName:"tr",align:null},"In case you toggle the switch off the Auto property, then the Height property would be enabled where you can provide the height accordingly in pixels or as a percentage of vw or vh (viewport width or viewport height).")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Theme")),(0,a.kt)("p",null,"You can set the colors for the JSON Editor to beautify the text area. You can customize the appearance by setting colors for the Background, Default text, Key, String type data, Numeric data, Boolean data, Brackets, Gutter area, and Line Numbers."),(0,a.kt)("h2",{id:"control-outputs"},"Control Outputs"),(0,a.kt)("p",null,"The outputs from the JSON Editor control, represented by the placeholder ",(0,a.kt)("inlineCode",{parentName:"p"},"{{jsoneditor}}"),", can be referenced in other controls, data queries, or JavaScript functions using the control's unique name."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jsoneditor"),(0,a.kt)("td",{parentName:"tr",align:null},"Represents the JSON data entered or edited by the user using the JSON Editor control.")))))}g.isMDXComponent=!0}}]);