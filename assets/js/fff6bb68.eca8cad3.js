"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[20338],{72997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>d,metadata:()=>c,toc:()=>u});a(67294);var o=a(3905),n=a(86291);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const d={sidebar_position:1,title:"Create and Download Excel from JSON data"},s=void 0,c={unversionedId:"building-apps-guides/create-download-excel-from-json",id:"building-apps-guides/create-download-excel-from-json",title:"Create and Download Excel from JSON data",description:"In DronahQ we can create an Excel file of xlsx format and download the same from the JSON data. This JSON data can be obtained through different means such as connecting Databases, APIs, sheets, and more.",source:"@site/docs/building-apps-guides/create-download-excel-from-json.md",sourceDirName:"building-apps-guides",slug:"/building-apps-guides/create-download-excel-from-json",permalink:"/building-apps-guides/create-download-excel-from-json",draft:!1,tags:[],version:"current",lastUpdatedAt:1724759326,formattedLastUpdatedAt:"Aug 27, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Create and Download Excel from JSON data"},sidebar:"docSidebar",previous:{title:"Implementing Cursor-Based Pagination in Connector Library",permalink:"/building-apps-guides/connector-lib-cursor-pagination"},next:{title:"In-App Date Calculation",permalink:"/building-apps-guides/date-calulation-inapp"}},p={},u=[{value:"Importing Library",id:"importing-library",level:3},{value:"Download multiple selected rows from the table",id:"download-multiple-selected-rows-from-the-table",level:2},{value:"Code",id:"code",level:4},{value:"Code explanation",id:"code-explanation",level:4},{value:"Download directly from the database using the data store",id:"download-directly-from-the-database-using-the-data-store",level:2},{value:"Download directly from the database",id:"download-directly-from-the-database",level:2}],m={toc:u},h="wrapper";function b(e){var{components:t}=e,a=r(e,["components"]);return(0,o.kt)(h,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),o.forEach((function(t){i(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In DronahQ we can create an Excel file of ",(0,o.kt)("inlineCode",{parentName:"p"},"xlsx")," format and download the same from the JSON data. This JSON data can be obtained through different means such as connecting Databases, APIs, sheets, and more."),(0,o.kt)("p",null,"To understand this, we will perform three use cases, where we will get the data in JSON format and create an Excel file from it, and then download it with a single click."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download multiple rows from the table."),(0,o.kt)("li",{parentName:"ol"},"Download directly from the database using the data store."),(0,o.kt)("li",{parentName:"ol"},"Download directly from the database.")),(0,o.kt)("admonition",{title:"TIP",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Knowledge of JavaScript is a plus. This will help to better understand creating objects and working with JavaScript libraries.")),(0,o.kt)("h3",{id:"importing-library"},"Importing Library"),(0,o.kt)("p",null,"Fir this we will utilize the SheetJs library, a powerful JavaScript tool tailored for Excel operations. With SheetJs, we can generate Excel workbooks and convert JSON data into downloadable ",(0,o.kt)("inlineCode",{parentName:"p"},"xlsx")," files."),(0,o.kt)("p",null,"To integrate this library into our workspace, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings > Custom Script")," within the studio environment."),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Library Import")," and paste the following file\nURL: ",(0,o.kt)("a",{parentName:"li",href:"https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.1/xlsx.full.min.js"},"https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.1/xlsx.full.min.js"),", then proceed with the import."),(0,o.kt)("li",{parentName:"ol"},"Once imported, save the script, and it will be readily accessible within the same window.")),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/excel-json/excel-json-library.png",alt:"Library Imported ",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Library Imported  "))),(0,o.kt)("p",null,"To know more about ",(0,o.kt)("a",{parentName:"p",href:"https://docs.dronahq.com/app-scripting-and-code/import-js-libraries/"},"importing JavaScript Libraries")," you can read our dedicated article."),(0,o.kt)("h2",{id:"download-multiple-selected-rows-from-the-table"},"Download multiple selected rows from the table"),(0,o.kt)("p",null,"First, we will get the data and then display it on our app in a table grid view. Then, will download multiple selected rows from the table in xlsx format."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure to make changes to the properties of the Table Grid Control. Under display check ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes(with multi-select)")," of Checkbox."),(0,o.kt)("li",{parentName:"ol"},"Bind data to Table Grid Control. "),(0,o.kt)("li",{parentName:"ol"},"Now, add a button which will be used to download the selected data from the table grid in xlsx format."),(0,o.kt)("li",{parentName:"ol"},"Configure the action flow for the button controls' event of ",(0,o.kt)("inlineCode",{parentName:"li"},"button_click"),"."),(0,o.kt)("li",{parentName:"ol"},"We need only ",(0,o.kt)("inlineCode",{parentName:"li"},"JS Code")," action block in the action flow. Add input parameters. These input parameters will be used to get the data from the selected row of the table and provide it with a variable name that can be accessed in our JavaScript code editor."),(0,o.kt)("li",{parentName:"ol"},"In the JavaScript code editor write a code using our imported SheetJs \u2013 xlsx min.js to convert JSON into xlsx worksheet and download it.")),(0,o.kt)("h4",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    let data = []; \n    for(let i = 0; i < ids.length; i++) { \n      data.push({ \n      id: ids[i], \n      name: names[i], \n      location: locations[i], \n      injuryType: injurytypes[i], \n      action: actions[i] \n    })  } \n    filename='reports.xlsx'; \n    var ws = XLSX.utils.json_to_sheet(data); \n    var wb = XLSX.utils.book_new(); \n    XLSX.utils.book_append_sheet(wb, ws, \"People\"); \n    XLSX.writeFile(wb,filename); \n")),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/excel-json/excel-json-js.jpeg",alt:"JS Code",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"JS Code "))),(0,o.kt)("h4",{id:"code-explanation"},"Code explanation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Initialization: Start with an empty object, "data," to store variables like ids, names, etc.'),(0,o.kt)("li",{parentName:"ul"},"Iteration: Loop through each set of arrays to handle multiple selected rows."),(0,o.kt)("li",{parentName:"ul"},'File Naming: Define a "filename" variable for the name and format of the exported file (e.g., "report.xlsx").'),(0,o.kt)("li",{parentName:"ul"},'Worksheet Creation: Utilize "json_to_sheet(data)" to create a worksheet object, organizing data from the table.'),(0,o.kt)("li",{parentName:"ul"},'Workbook Setup: Use "book_new()" to create an empty workbook; "book_append_sheet(wb, ws, \u201cPeople\u201d)" to add a worksheet.'),(0,o.kt)("li",{parentName:"ul"},'File Writing: Finally, "writeFile(wb, filename)" packages the data and saves the file, ensuring a smooth download.')),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"Test the script, a download pop will occur on the screen. It means it is working. Click on continue and finish.")),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/excel-json/excel-json-down1.png",alt:"downloaded",mdxType:"Thumbnail"})),(0,o.kt)("h2",{id:"download-directly-from-the-database-using-the-data-store"},"Download directly from the database using the data store"),(0,o.kt)("p",null,"In this use case, we will use Data Store to store the data from the connector and then a button that will download the whole data directly after converting it to xlsx file."),(0,o.kt)("p",null,"In a way it is quite similar to the previous method. In this scenario, instead of using a Table Grid we will now use the Data Store control and a button to trigger the action."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Bind the data to Data Store control.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an action flow, to the button control. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add JS Code action block and provide required JS code after selecting the input parameter as the Data Store value."),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/excel-json/excel-json-js2.png",alt:"JS Code",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"JS Code ")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Test the script, a download pop will occur on the screen. It means it is working. Click on continue and finish."))),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/excel-json/excel-json-down2.png",alt:"downloaded",mdxType:"Thumbnail"})),(0,o.kt)("h2",{id:"download-directly-from-the-database"},"Download directly from the database"),(0,o.kt)("p",null,"Now, let's see how we can download the data from the database directly without using any components such as table grid or data store. We will simply put up a button that will download all the details with a click."),(0,o.kt)("p",null,"This method is also similar to the previous ones. Instead of putting up a component to store or view the data. We can directly trigger a call to the data in an action flow and use JS code block to download the data."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start with adding a button."),(0,o.kt)("li",{parentName:"ol"},"Create an action flow, to the button control."),(0,o.kt)("li",{parentName:"ol"},"Add a Connector action of whichever database connector you want to use to call the data. Select or write the query to get the data."),(0,o.kt)("li",{parentName:"ol"},"After selecting connector, and query, test and save to create a variable for the output, so that the query's variable name can be used for referencing the data later on.",(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/excel-json/excel-json-var.png",alt:"Adding Variable",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Adding Variable ")))),(0,o.kt)("li",{parentName:"ol"},"Add a JS code block and add the output of the query as input parameters of this JS code block."),(0,o.kt)("li",{parentName:"ol"},"Write code to download data.",(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/excel-json/excel-json-js3.jpeg",alt:"JS Code",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"JS Code ")))),(0,o.kt)("li",{parentName:"ol"},"Test the script, a download pop will occur on the screen. It means it is working. Click on continue and finish.",(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/excel-json/excel-json-action.png",alt:"Action flow",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Action flow "))))),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/excel-json/excel-json-down3.png",alt:"downloaded",mdxType:"Thumbnail"})))}b.isMDXComponent=!0}}]);