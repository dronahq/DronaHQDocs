"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[64965],{48679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(67294);var i=n(3905),a=n(86291);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={sidebar_position:1,title:"JSON Manipulation - Sorting and Filtering with JavaScript"},d=void 0,c={unversionedId:"building-apps-guides/json-sorting-filtering",id:"building-apps-guides/json-sorting-filtering",title:"JSON Manipulation - Sorting and Filtering with JavaScript",description:"JSON (JavaScript Object Notation) manipulation is a fundamental aspect of modern web development, essential for handling",source:"@site/docs/building-apps-guides/json-sorting-filtering.md",sourceDirName:"building-apps-guides",slug:"/building-apps-guides/json-sorting-filtering",permalink:"/building-apps-guides/json-sorting-filtering",draft:!1,tags:[],version:"current",lastUpdatedAt:1714136039,formattedLastUpdatedAt:"Apr 26, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"JSON Manipulation - Sorting and Filtering with JavaScript"},sidebar:"docSidebar",previous:{title:"Guide to SMTP Email Configuration with Popular Email Providers",permalink:"/building-apps-guides/guide-to-smtp-email-configuration-with-popular-email-providers"},next:{title:"Repeatable forms",permalink:"/building-apps-guides/repeatable-forms"}},p={},u=[{value:"Sorting JSON Data",id:"sorting-json-data",level:3},{value:"Code",id:"code",level:4},{value:"Explanation",id:"explanation",level:4},{value:"Sorted Data (ID as key attribute in descending order)",id:"sorted-data-id-as-key-attribute-in-descending-order",level:4},{value:"Filtering JSON Data",id:"filtering-json-data",level:3},{value:"Code",id:"code-1",level:4},{value:"Explanation",id:"explanation-1",level:4},{value:"Filtered data",id:"filtered-data",level:4}],m={toc:u},g="wrapper";function f(e){var{components:t}=e,n=s(e,["components"]);return(0,i.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"JSON (JavaScript Object Notation) manipulation is a fundamental aspect of modern web development, essential for handling\ndiverse data structures efficiently. This technical documentation will showcase two indispensable techniques for\nmanipulating JSON data in JavaScript: sorting and filtering. Whether you're working with API responses or managing\nuser-generated content, mastering these techniques will enhance your ability to process and present data effectively."),(0,i.kt)("p",null,"Before moving ahead let's see our raw response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    {\n    "result": {\n        "rows": [\n        {\n            "ID": 18,\n            "FirstName": "Tomasa",\n            "LastName": "Hermann",\n            "Address": "751 Koss Forest",\n            "Email": "tomasa.hermann41@example.com",\n            "Designation": "Intern"\n        },\n        {\n            "ID": 24,\n            "FirstName": "Cedrick",\n            "LastName": "Schmeler",\n            "Address": "695 Rau Passage",\n            "Email": "cedrick89@example.com",\n            "Designation": "Workspace Admin"\n        },\n        {\n            "ID": 36,\n            "FirstName": "Timmy",\n            "LastName": "Schamberger",\n            "Address": "24593 Bayer Oval",\n            "Email": "timmy_schamberger@example.com",\n            "Designation": "Workspace Manager"\n        },\n        {\n            "ID": 1,\n            "FirstName": "Carlie",\n            "LastName": "Schmeler",\n            "Address": "2375 Allen Flats",\n            "Email": "carlie43@example.com",\n            "Designation": "Automation Tester"\n        },\n        {\n            "ID": 2,\n            "FirstName": "Katrina",\n            "LastName": "Mosciski",\n            "Address": "2570 Toy Lights",\n            "Email": "katrina94@example.com",\n            "Designation": "Software Developer"\n        },\n        {\n            "ID": 3,\n            "FirstName": "Lurline",\n            "LastName": "Powlowski",\n            "Address": "551 Morar Expressway",\n            "Email": "lurline90@example.com",\n            "Designation": "Market Intern"\n        },\n        {\n            "ID": 11,\n            "FirstName": "Micah",\n            "LastName": "Mosciski",\n            "Address": "5184 Keely Trafficway",\n            "Email": "micah.mosciski65@example.com",\n            "Designation": "Intern"\n        }\n        ]\n    }\n    }\n')),(0,i.kt)("p",null,"In DronahQ, to transform response, we can write JS Code to perform sort and filtering operation on JSON data based on a key attribute."),(0,i.kt)("h3",{id:"sorting-json-data"},"Sorting JSON Data"),(0,i.kt)("p",null,"Sorting JSON data is a common requirement in web applications, often necessary for presenting information in a structured manner or facilitating further data processing. This section illustrates how to sort JSON data using custom JavaScript code."),(0,i.kt)("h4",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'function sortJSON(arr, key, asc=true) {\nreturn arr.sort((a, b) => {\n    let x = a[key];\n    let y = b[key];\n    if (asc) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }\n    else { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }\n});\n}\noutput = sortJSON(data.result.rows, "ID", false);\n')),(0,i.kt)("h4",{id:"explanation"},"Explanation"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"sortJSON")," function facilitates sorting of JSON data based on a specified key attribute, with support for both ascending and descending orders. Leveraging JavaScript's native sort method, it enables efficient organization of JSON datasets according to predefined criteria."),(0,i.kt)("h4",{id:"sorted-data-id-as-key-attribute-in-descending-order"},"Sorted Data (ID as key attribute in descending order)"),(0,i.kt)("figure",null,(0,i.kt)(a.Z,{src:"/img/building-apps-guides/json-sort-filter/json-sort-filter-sort.png",alt:"Sorted (Transformed) data",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Sorted (Transformed) data"))),(0,i.kt)("h3",{id:"filtering-json-data"},"Filtering JSON Data"),(0,i.kt)("p",null,"Filtering JSON data enables extraction of specific subsets of information, tailored to meet diverse requirements such as user preferences or data analysis tasks. This section demonstrates how to filter JSON data effectively using JavaScript."),(0,i.kt)("h4",{id:"code-1"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function filterDesignation(record) {\n    return record.Designation.includes('Intern');\n}\ndata = data.result.rows.filter(filterDesignation);\n")),(0,i.kt)("h4",{id:"explanation-1"},"Explanation"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"filterJSON")," function provides a robust mechanism for extracting relevant data from JSON arrays based on user-defined criteria. Employing JavaScript's filter method, it iterates through the dataset, selectively retaining items that satisfy the specified conditions, thereby facilitating targeted data retrieval."),(0,i.kt)("h4",{id:"filtered-data"},"Filtered data"),(0,i.kt)("figure",null,(0,i.kt)(a.Z,{src:"/img/building-apps-guides/json-sort-filter/json-sort-filter-filter.png",alt:"Filtered (Transformed) data",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Filtered (Transformed) data"))))}f.isMDXComponent=!0}}]);