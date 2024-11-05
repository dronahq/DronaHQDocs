"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[25697],{94247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905),r=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={sidebar_position:1,title:"JSON Viewer"},c=void 0,p={unversionedId:"reference/controls/json-viewer",id:"reference/controls/json-viewer",title:"JSON Viewer",description:"The JSON viewer control allows you to visualize JSON text or files sourced from a specified location.",source:"@site/docs/reference/controls/json-viewer.md",sourceDirName:"reference/controls",slug:"/reference/controls/json-viewer",permalink:"/reference/controls/json-viewer",draft:!1,tags:[],version:"current",lastUpdatedAt:1692255300,formattedLastUpdatedAt:"Aug 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"JSON Viewer"},sidebar:"docSidebar",previous:{title:"JSON Editor",permalink:"/reference/controls/json-editor"},next:{title:"Kanban",permalink:"/reference/controls/kanban"}},d={},u=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Static Data Option",id:"static-data-option",level:3},{value:"Dynamic Data Option",id:"dynamic-data-option",level:3},{value:"Properties",id:"properties",level:2}],m={toc:u},h="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The JSON viewer control allows you to visualize JSON text or files sourced from a specified location."),(0,a.kt)("p",null,"The JSON viewer is particularly valuable when you need to inspect JSON data from files, such as in applications designed for online courses. It enables users to examine predefined sample code or code they are experimenting with independently."),(0,a.kt)("figure",null,(0,a.kt)(r.Z,{src:"/img/reference/controls/json-viewer/preview.jpg",alt:"JSON viewer",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"JSON viewer"))),(0,a.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,a.kt)("p",null,"JSON Viewer control accepts JSON data to display in a structured format. There are different ways in which you can bind data to the JSON Viewer control."),(0,a.kt)("h3",{id:"static-data-option"},"Static Data Option"),(0,a.kt)("p",null,"To display static JSON data in the JSON Viewer control, you can use the Bind Data option. The Bind Data option must be specified as valid JSON data."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    "name": "John Doe",\n    "age": 30,\n    "email": "john.doe@example.com"\n  },\n  {\n    "name": "Jane Smith",\n    "age": 25,\n    "email": "jane.smith@example.com"\n  },\n  {\n    "name": "Michael Johnson",\n    "age": 40,\n    "email": "michael.johnson@example.com"\n  }\n]\n')),(0,a.kt)("h3",{id:"dynamic-data-option"},"Dynamic Data Option"),(0,a.kt)("p",null,"In this example, we have a JSON Viewer Control that displays information about different products in an online store. The data is fetched from a database in JSON format and includes details such as product name, category, price, and availability."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set up a Data Query:\nFirst, make sure you have a data query configured to fetch the product information from your database. The query might look like this:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SELECT product_name, category, price, availability FROM products\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Configure the JSON Viewer Control:\nIn the JSON Viewer control, navigate to the Bind Data Options section and select ",(0,a.kt)("inlineCode",{parentName:"li"},"Quick Select -> Data Queries -> yourDataQueryName."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{{yourDataQueryName}}\n")),(0,a.kt)("p",null,"By selecting the data query you've set up (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"yourDataQueryName"),"), the JSON Viewer control will automatically fetch the product information from your database and display it in a structured format. Users can view the product names, categories, prices, and availability in an organized manner."),(0,a.kt)("p",null,"With this JSON Viewer Control, online store administrators and customers can easily view and analyze real-time product information, making informed decisions about purchases and product management."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Line number"),(0,a.kt)("td",{parentName:"tr",align:null},"Toggle this switch ON to display line numbers in the JSON viewer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Error gutter"),(0,a.kt)("td",{parentName:"tr",align:null},"Toggle this switch ON to display the error gutter for easy error identification in the JSON viewer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Line wrap"),(0,a.kt)("td",{parentName:"tr",align:null},"Toggle this switch ON to enable wrapping of lines within the JSON viewer's size.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fold option"),(0,a.kt)("td",{parentName:"tr",align:null},"Set how the data appears for the object, either expanded or collapsed. By default, it is set to Expand.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Font"),(0,a.kt)("td",{parentName:"tr",align:null},"Customize the JSON data or text by adjusting text size, weight (Light, Normal, Bold, Extra Bold, X Extra Bold), alignment (Left, Center, Right, Justified), and color of the label.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Theme")),(0,a.kt)("p",null,"You can set the colors for the JSON Viewer to beautify the text area. You can set the color of the Background, Default text color, Key, String type data, Numeric data, Boolean data, Brackets, Gutter area and the Line Number. You can customize the appearance by setting these color for the respective options."))}f.isMDXComponent=!0}}]);