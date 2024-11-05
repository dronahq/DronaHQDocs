"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[23832],{53858:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});a(67294);var o=a(3905),n=a(86291);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={sidebar_position:1,title:"Google Sheet - Multiple Row update"},u=void 0,d={unversionedId:"building-apps-guides/update-multiplerows-google-sheet",id:"building-apps-guides/update-multiplerows-google-sheet",title:"Google Sheet - Multiple Row update",description:"In this guide, we will cover how to update multiple rows in a Google Sheet using DronaHQ, particularly when some fields remain unchanged or are set to null. We will go through the steps to connect Google Sheets, enable multi-row edits in a TableGrid control, write JavaScript code for the update action.",source:"@site/docs/building-apps-guides/update-multiplerows-google-sheet.md",sourceDirName:"building-apps-guides",slug:"/building-apps-guides/update-multiplerows-google-sheet",permalink:"/building-apps-guides/update-multiplerows-google-sheet",draft:!1,tags:[],version:"current",lastUpdatedAt:1728631793,formattedLastUpdatedAt:"Oct 11, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Google Sheet - Multiple Row update"},sidebar:"docSidebar",previous:{title:"REST API Security with JWT Token Authentication",permalink:"/building-apps-guides/rest-api-jwt-auth"},next:{title:"WebSocket Integration Using DronaHQ",permalink:"/building-apps-guides/websocket-dronahq"}},p={},c=[{value:"1: Connect Google Sheet to TableGrid via DataQuery",id:"1-connect-google-sheet-to-tablegrid-via-dataquery",level:2},{value:"2: Enable Editable Columns Property for TableGrid",id:"2-enable-editable-columns-property-for-tablegrid",level:2},{value:"3: Preparing data to send to Google Sheet - using JavaScript",id:"3-preparing-data-to-send-to-google-sheet---using-javascript",level:2},{value:"JS CODE",id:"js-code",level:4},{value:"CODE EXPLANATION",id:"code-explanation",level:4},{value:"4:  Map JavaScript Output to Google Sheets Update Action",id:"4--map-javascript-output-to-google-sheets-update-action",level:2},{value:"5: Refresh TableGrid Control",id:"5-refresh-tablegrid-control",level:2},{value:"Preview",id:"preview",level:2},{value:"Action Flow -",id:"action-flow--",level:4},{value:"Data before Update Request -",id:"data-before-update-request--",level:4},{value:"Performing Update Request -",id:"performing-update-request--",level:4},{value:"data after Update Request -",id:"data-after-update-request--",level:4}],g={toc:c},h="wrapper";function m(e){var{components:t}=e,a=r(e,["components"]);return(0,o.kt)(h,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),o.forEach((function(t){i(e,t,a[t])}))}return e}({},g,a),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this guide, we will cover how to update multiple rows in a Google Sheet using DronaHQ, particularly when some fields remain unchanged or are set to null. We will go through the steps to connect Google Sheets, enable multi-row edits in a TableGrid control, write JavaScript code for the update action."),(0,o.kt)("h2",{id:"1-connect-google-sheet-to-tablegrid-via-dataquery"},"1: Connect Google Sheet to TableGrid via DataQuery"),(0,o.kt)("p",null,"To begin, you need to connect the Google Sheet to your TableGrid control in DronaHQ using a DataQuery. This will allow you to pull data directly from Google Sheets into the TableGrid, making it editable within the app."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In your DronaHQ app, add a TableGrid control."),(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("inlineCode",{parentName:"li"},"Bind Data")," section, choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Quick Select > Connector Library > Google Sheets > GetAllRows"),"."),(0,o.kt)("li",{parentName:"ol"},"Map the fields (columns) from your Google Sheet to the TableGrid so that you can display and update them later.")),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/google-sheet-multiupdaterows/google-sheet-multiupdaterows-getallrows.jpeg",alt:"Get All rows from google sheet into the table grid.",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Get All rows from google sheet into the table grid."))),(0,o.kt)("h2",{id:"2-enable-editable-columns-property-for-tablegrid"},"2: Enable Editable Columns Property for TableGrid"),(0,o.kt)("p",null,"Select the TableGrid control and navigate to its properties.\nSelect the columns which you want to make editable, which will allow users to edit more than one row at a time.\nYou can check out the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.dronahq.com/building-apps-guides/building-interactive-tables/#editable-table-columns"},"Building Interactive table")," article to know about editable columns in table grid control."),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/google-sheet-multiupdaterows/google-sheet-multiupdaterows-edit.jpeg",alt:"Make Columns Editable.",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Make Columns Editable."))),(0,o.kt)("h2",{id:"3-preparing-data-to-send-to-google-sheet---using-javascript"},"3: Preparing data to send to Google Sheet - using JavaScript"),(0,o.kt)("p",null,"So for scenarios where some fields in your dataset may need to be left blank or filled with null. We will cover the entire setup, including using JavaScript to manipulate the data and update the Google Sheets rows effectively. "),(0,o.kt)("p",null,"Suppose our response after fetching data from Google Sheet, looks somethings like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\n[\n    {\n        "cust_ID": "1",\n        "cust_name": "Izaiah Bradford",\n        "cust_email": "iza@gmail.com",\n        "active_user": "1",\n        "RowNumber": 2\n    },\n    {\n        "cust_ID": "2",\n        "cust_name": "Alia Parks",\n        "cust_email": "alia@yahoo.com",\n        "active_user": "1",\n        "RowNumber": 3\n    }\n    // More data...\n]\n\n')),(0,o.kt)("p",null,"Now, we need to prepare JS Code which return array of edited values for each column and null in case of no change.\nYou want to update these rows in Google Sheets starting from ",(0,o.kt)("strong",{parentName:"p"},"row 2"),", but you only want to update specific fields while leaving others as ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),". For example, you might want to update only the ",(0,o.kt)("inlineCode",{parentName:"p"},"cust_name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cust_email"),", while keeping other fields as they are or null."),(0,o.kt)("p",null,"Now in the action flow, we need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"JS Code action block"),", for a simple transformation of the edited data from a tablegrid control. "),(0,o.kt)("h4",{id:"js-code"},"JS CODE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const startRow = 2;\n\n// Find the maximum RowNumber in the data\n    const maxRow = Math.max(...data.map(item => item.RowNumber));\n // Create a function to initialize arrays with null\n    const initArray = () => Array(maxRow - startRow + 1).fill(null);\n// Initialize arrays for each field\n    const cust_IDs = initArray();\n    const cust_names = initArray();\n    const cust_emails = initArray();\n    const active_users = initArray();\n\n    // Fill the arrays based on RowNumber\n    data.forEach(item => {\n        const index = item.RowNumber - startRow;\n        if (index >= 0) {\n            cust_IDs[index] = item.cust_ID;\n            cust_names[index] = item.cust_name;\n            cust_emails[index] = item.cust_email;\n            active_users[index] = item.active_user;\n        }\n    });\n\noutput = {\n        cust_IDs: cust_IDs,\n        cust_names: cust_names,\n        cust_emails: cust_emails,\n        active_users: active_users\n    };\n\n")),(0,o.kt)("h4",{id:"code-explanation"},"CODE EXPLANATION"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start Row Setup: ",(0,o.kt)("inlineCode",{parentName:"p"},"startRow = 2")," indicates the row where data processing starts.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find Maximum Row Number: The code determines the highest ",(0,o.kt)("inlineCode",{parentName:"p"},"RowNumber")," to know how many rows need handling.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Initialize Null Arrays: Arrays for customer data (IDs, names, emails, active status) are created, filled with ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", and sized based on the number of rows between ",(0,o.kt)("inlineCode",{parentName:"p"},"startRow")," and the max row.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Populate Arrays: The data is looped through, and for each row, the corresponding array position is filled with data if the row falls within the valid range, otherwise leaving ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Return the Result: The filled arrays are returned, where any missing rows are represented by ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," values."))),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/reference/connectors/googlesheet/null.jpeg",alt:"JavaScript code to transform the data in the action flow.",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"JavaScript code to transform the data in the action flow."))),(0,o.kt)("h2",{id:"4--map-javascript-output-to-google-sheets-update-action"},"4:  Map JavaScript Output to Google Sheets Update Action"),(0,o.kt)("p",null,"Now we can add the Google Sheet connector in the actionflow and send the output of the JavaScript Action block to the Google Sheets update query along with the other details. Here\u2019s how the variables would be mapped in DronaHQ:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cust_ID: {{edited.cust_IDs}}")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cust_name: {{edited.cust_names}}")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cust_email: {{edited.cust_emails}}")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"active_user: {{edited.active_users}}")),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/reference/connectors/googlesheet/nulledit.jpeg",alt:"Setting up the Google Sheet connector library action block.",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Setting up the Google Sheet connector library action block."))),(0,o.kt)("h2",{id:"5-refresh-tablegrid-control"},"5: Refresh TableGrid Control"),(0,o.kt)("p",null,"Once the data is updated in Google Sheets, you should refresh the TableGrid control to display the updated data in your app."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.dronahq.com/reference/actionflow-blocks/reset-control-data/"},(0,o.kt)("inlineCode",{parentName:"a"},"Reset Control Data"))," Action block to refresh and fetch the latest data from the Google Sheet."),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/google-sheet-multiupdaterows/google-sheet-multiupdaterows-refresh.jpeg",alt:"Make Columns Editable.",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Make Columns Editable."))),(0,o.kt)("h2",{id:"preview"},"Preview"),(0,o.kt)("h4",{id:"action-flow--"},"Action Flow -"),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/google-sheet-multiupdaterows/google-sheet-multiupdaterows-flow.jpeg",alt:"Make Columns Editable.",mdxType:"Thumbnail"})),(0,o.kt)("h4",{id:"data-before-update-request--"},"Data before Update Request -"),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/google-sheet-multiupdaterows/before.jpeg",alt:"Make Columns Editable.",mdxType:"Thumbnail"})),(0,o.kt)("h4",{id:"performing-update-request--"},"Performing Update Request -"),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/google-sheet-multiupdaterows/change.jpeg",alt:"Make Columns Editable.",mdxType:"Thumbnail"})),(0,o.kt)("h4",{id:"data-after-update-request--"},"data after Update Request -"),(0,o.kt)("figure",null,(0,o.kt)(n.Z,{src:"/img/building-apps-guides/google-sheet-multiupdaterows/after.jpeg",alt:"Make Columns Editable.",mdxType:"Thumbnail"})))}m.isMDXComponent=!0}}]);