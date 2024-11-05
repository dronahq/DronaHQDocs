"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[56500],{25385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(67294);var o=n(3905),r=n(86291);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={sidebar_position:1,title:"Google Sheets"},d=void 0,u={unversionedId:"reference/connectors/google-sheets",id:"reference/connectors/google-sheets",title:"Google Sheets",description:"Google Sheets and DronaHQ integration is an easy and assured go-to solution to build user interfaces over the structured data storage that is the power of Google sheets.",source:"@site/docs/reference/connectors/google-sheets.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/google-sheets",permalink:"/reference/connectors/google-sheets",draft:!1,tags:[],version:"current",lastUpdatedAt:1728631793,formattedLastUpdatedAt:"Oct 11, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Google Sheets"},sidebar:"docSidebar",previous:{title:"Google Cloud Storage",permalink:"/reference/connectors/google-cloud-storage"},next:{title:"GraphQL",permalink:"/reference/connectors/graphql"}},p={},c=[{value:"Configuring API Connector in DronaHQ",id:"configuring-api-connector-in-dronahq",level:2},{value:"Supported API endpoints",id:"supported-api-endpoints",level:2},{value:"Using Google Sheets Connector",id:"using-google-sheets-connector",level:2},{value:"Get all rows",id:"get-all-rows",level:3},{value:"Get Single Row",id:"get-single-row",level:3},{value:"Clearing multiple rows",id:"clearing-multiple-rows",level:3},{value:"Add Rows",id:"add-rows",level:3},{value:"Update Multiple Rows",id:"update-multiple-rows",level:3},{value:"Locating Spreadsheet ID",id:"locating-spreadsheet-id",level:2},{value:"1. Open the Google Sheets Spreadsheet and View the URL",id:"1-open-the-google-sheets-spreadsheet-and-view-the-url",level:4},{value:"2. Locate the Unique Spreadsheet ID Within the URL",id:"2-locate-the-unique-spreadsheet-id-within-the-url",level:4},{value:"3. Highlight and Copy the Spreadsheet ID from the URL",id:"3-highlight-and-copy-the-spreadsheet-id-from-the-url",level:4},{value:"4. Use the Copied Spreadsheet ID for Your Required Purpose",id:"4-use-the-copied-spreadsheet-id-for-your-required-purpose",level:4}],h={toc:c},g="wrapper";function m(e){var{components:t}=e,n=l(e,["components"]);return(0,o.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){a(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Google Sheets and DronaHQ integration is an easy and assured go-to solution to build user interfaces over the structured data storage that is the power of Google sheets."),(0,o.kt)("h2",{id:"configuring-api-connector-in-dronahq"},"Configuring API Connector in DronaHQ"),(0,o.kt)("p",null,"Add a ",(0,o.kt)("inlineCode",{parentName:"p"},"Account name"),". Then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Save"),", it will open a pop-up window asking you to sign-in into your Google account. Continue with the steps and give access to DronaHQ to connect with your Google for its Sheets ID and information."),(0,o.kt)("figure",null,(0,o.kt)(r.Z,{src:"/img/reference/connectors/googlesheet/signin.png",alt:"Sign-in to your Google account",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Sign-in to your Google account"))),(0,o.kt)("p",null,"After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the ",(0,o.kt)("inlineCode",{parentName:"p"},"connected accounts")," list. You can find this option from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector -> Manage Account")," section. This centralized location allows you to conveniently monitor and manage your connected accounts."),(0,o.kt)("h2",{id:"supported-api-endpoints"},"Supported API endpoints"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Action"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetAllRowsV2"),(0,o.kt)("td",{parentName:"tr",align:null},"Retrieve all rows from a specific sheet in a Google Sheets document.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FindRowsV2"),(0,o.kt)("td",{parentName:"tr",align:null},"Search and retrieve rows from a specific sheet based on specified criteria.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetSheetDetails"),(0,o.kt)("td",{parentName:"tr",align:null},"Retrieve details and properties of a specific sheet.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CreateSheet"),(0,o.kt)("td",{parentName:"tr",align:null},"Create a new sheet within a Google Sheets document.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetAllRows"),(0,o.kt)("td",{parentName:"tr",align:null},"Retrieve all rows from a specific sheet in a Google Sheets document.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AddRows"),(0,o.kt)("td",{parentName:"tr",align:null},"Add new rows to a specific sheet in a Google Sheets document.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Find Rows"),(0,o.kt)("td",{parentName:"tr",align:null},"Search and retrieve rows from a specific sheet based on specified criteria.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UpdateRow"),(0,o.kt)("td",{parentName:"tr",align:null},"Update the content of a specific row in a Google Sheets document.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Clear Row"),(0,o.kt)("td",{parentName:"tr",align:null},"Clear the content of a specific row in a Google Sheets document.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Find a Row"),(0,o.kt)("td",{parentName:"tr",align:null},"Search and retrieve rows from a specific sheet based on specified criteria.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AddMultipleRows"),(0,o.kt)("td",{parentName:"tr",align:null},"Add multiple rows to a specific sheet in a Google Sheets document.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetSingleRow"),(0,o.kt)("td",{parentName:"tr",align:null},"Retrieve a single row from a specific sheet based on row number.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ClearMultipleRows"),(0,o.kt)("td",{parentName:"tr",align:null},"Clear content from multiple rows in a Google Sheets document.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UpdateMultipleRows"),(0,o.kt)("td",{parentName:"tr",align:null},"Update content in multiple rows within a Google Sheets document.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GetAllSheets"),(0,o.kt)("td",{parentName:"tr",align:null},"Deprecated. Get a list of all sheets within a Google Sheets document.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FindDriveFiles"),(0,o.kt)("td",{parentName:"tr",align:null},"Deprecated. Search and retrieve Google Drive files related to Google Sheets.")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It is important to remember that when you are updating any row and you do not want to update some of the columns then in that case you should Use Keywords as ",(0,o.kt)("inlineCode",{parentName:"p"},"{{NULL}}"),". This ensures that the column is not overwritten. The original value is retained. Only the column/s with specified inputs are updated.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You can query several columns at a time (A:AZ). Once you configure a connector on DronaHQ and you add Column to your\nGoogle Sheet, then your existing configured Google Sheet connector will have to be updated/refreshed in order to\nreflect the new column added in your Google Sheet. ")))),(0,o.kt)("h2",{id:"using-google-sheets-connector"},"Using Google Sheets Connector"),(0,o.kt)("h3",{id:"get-all-rows"},"Get all rows"),(0,o.kt)("p",null,"To fetch all rows matching criteria you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAllRows")," connector. To configure fields you can provide the\ndynamic values using the ",(0,o.kt)("inlineCode",{parentName:"p"},"keywords"),". You can add ",(0,o.kt)("inlineCode",{parentName:"p"},"variables")," to return a response value to this connector. There are\nseveral Output values returned which can be used as required."),(0,o.kt)("p",null,"In this example shown below, will first fetch all the rows matching the Search Value which is a dynamic value provided using the keywords."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use variables to fetch the data from column ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," for the searched rows. You can see here that we have also used the Row number as well as a return value. These Row number values can be used in other use cases or scenarios like updating rows, deleting rows based on certain conditions, and so on."),(0,o.kt)("figure",null,(0,o.kt)(r.Z,{src:"/img/reference/connectors/googlesheet/getall1.jpeg",alt:"Configuring fields to do multiple row clearing.",mdxType:"Thumbnail"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"While using ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll Rows")," in Google Sheets the response had fixed keys values.A and values.B and so on. DronaHQ has introduced a new enhanced feature Use ",(0,o.kt)("inlineCode",{parentName:"p"},"Header Rows")," option that replaces the fixed keys with headings in your sheets.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For the ",(0,o.kt)("inlineCode",{parentName:"p"},"GetAll Rows")," option, you provide the required inputs, and view the result with fixed keys ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"C"),"."))),(0,o.kt)("figure",null,(0,o.kt)(r.Z,{src:"/img/reference/connectors/googlesheet/getall2.png",alt:"Configuring fields to do multiple row clearing.",mdxType:"Thumbnail"})),(0,o.kt)("p",null,"In the above example we can view fixed keys ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"C")," whereas the headings of the google sheets action-name, type and so on are viewed as rows."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Now change the Use Header Row in Response to ",(0,o.kt)("inlineCode",{parentName:"li"},"True/Yes"),". Click Refresh Response you will be able to view this screen.")),(0,o.kt)("figure",null,(0,o.kt)(r.Z,{src:"/img/reference/connectors/googlesheet/getall3.png",alt:"Configuring fields to do multiple row clearing.",mdxType:"Thumbnail"})),(0,o.kt)("h3",{id:"get-single-row"},"Get Single Row"),(0,o.kt)("p",null,"To fetch the row details of a specific row number provided by the user can be done by using the GetSingleRow subcategory\nof the Google Sheet API connector. You just have to select the subcategory and provide the sheet details such as the\nspreadsheet name and sheet ID along with the row number. These details will be used to fetch the row details of a specific row number from a certain spreadsheet."),(0,o.kt)("figure",null,(0,o.kt)(r.Z,{src:"/img/reference/connectors/googlesheet/getsingle.png",alt:"Configuring fields to do multiple row clearing.",mdxType:"Thumbnail"})),(0,o.kt)("p",null,"You can add this connector in the data bind section or action of any control. Select the columns to bind in the control as keys. We will be using table grid control to view the data received by the API subcategory."),(0,o.kt)("figure",null,(0,o.kt)(r.Z,{src:"/img/reference/connectors/googlesheet/table.png",alt:"Configuring fields to do multiple row clearing.",mdxType:"Thumbnail"})),(0,o.kt)("h3",{id:"clearing-multiple-rows"},"Clearing multiple rows"),(0,o.kt)("p",null,"The Clear multiple rows option comes to help when you want to clear multiple rows to Google Sheets. You can use data from tablegrid control for instance to clear data to your google sheet."),(0,o.kt)("p",null,"Pass an array of rows\u2019 numbers in the method along with the spreadsheet name and its sheet name."),(0,o.kt)("figure",null,(0,o.kt)(r.Z,{src:"/img/reference/connectors/googlesheet/clearmulti.jpeg",alt:"Configuring fields to do multiple row clearing.",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Configuring fields to do multiple row clearing."))),(0,o.kt)("h3",{id:"add-rows"},"Add Rows"),(0,o.kt)("p",null,"To add rows to your Google Sheets, you can use the AddRows connector. To configure fields, you can provide dynamic values using keywords. Several output values are returned, which can be used as required."),(0,o.kt)("p",null,"In the example shown below, rows are added to the specified range in the Google Sheets."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Ensure that the range matches exactly with the one present in your Google Sheets column names. This is crucial for the data to be appended correctly. ")),(0,o.kt)("p",null,"Here\u2019s the process and the response you can expect:"),(0,o.kt)("p",null,"For more details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append"},"Google Sheets API documentation"),"."),(0,o.kt)("figure",null,(0,o.kt)(r.Z,{src:"/img/reference/connectors/googlesheet/addrows.jpeg",alt:"Configuring fields to add rows.",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Configuring fields to add rows."))),(0,o.kt)("h3",{id:"update-multiple-rows"},"Update Multiple Rows"),(0,o.kt)("p",null,"The Update Multiple Rows option is designed for updating several rows simultaneously in Google Sheets. For instance, you can utilize data from the table grid control to insert information in your Google Sheet."),(0,o.kt)("figure",null,(0,o.kt)(r.Z,{src:"/img/reference/connectors/googlesheet/updaterows.jpeg",alt:"Configuring fields to Update multiple rows.",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Configuring fields to Update multiple rows."))),(0,o.kt)("p",null,"As shown in the image above, you can provide multiple data entries for different row numbers. The start row number is considered, and the number of rows updated corresponds to the size of the array. "),(0,o.kt)("p",null,"If you wish to update a row but retain certain column values, use NULL as a keyword. This prevents those columns from being overwritten, ensuring the original values remain intact. Only the columns with specified inputs will be updated.\nYou can read more about updating multiple rows using Table Grid from this ",(0,o.kt)("a",{parentName:"p",href:"/building-apps-guides/update-multiplerows-google-sheet"},"guide"),"."),(0,o.kt)("h2",{id:"locating-spreadsheet-id"},"Locating Spreadsheet ID"),(0,o.kt)("p",null,"A Google Sheets spreadsheet ID is a unique identifier used by Google Sheets to distinguish each spreadsheet. This ID is part of the URL of the spreadsheet when you open it in your web browser."),(0,o.kt)("p",null,"\u200dFor example, in the URL:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/23ASDS1A2B3CWEM4N5O6P7Q8R9S0T1U2V/edit"},"https://docs.google.com/spreadsheets/d/23ASDS1A2B3CWEM4N5O6P7Q8R9S0T1U2V/edit"))),(0,o.kt)("p",null,"the spreadsheet ID is the string of characters between /d/ and /edit, which in this case is:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"23ASDS1A2B3CWEM4N5O6P7Q8R9S0T1U2V")),(0,o.kt)("p",null,"This ID is used in various Google Sheets API requests to specify which spreadsheet you want to access or modify."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Follow the steps below to find your spreadsheet ID in Google Sheets:")),(0,o.kt)("h4",{id:"1-open-the-google-sheets-spreadsheet-and-view-the-url"},"1. Open the Google Sheets Spreadsheet and View the URL"),(0,o.kt)("p",null,"Open your Google Sheets spreadsheet and identify the browser\u2019s address bar where the URL of the spreadsheet is displayed."),(0,o.kt)("figure",null,(0,o.kt)(r.Z,{src:"/img/reference/connectors/googlesheet/google-sheet-id-1.png",alt:"Locate Spreadsheet URL",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Locate Spreadsheet URL"))),(0,o.kt)("h4",{id:"2-locate-the-unique-spreadsheet-id-within-the-url"},"2. Locate the Unique Spreadsheet ID Within the URL"),(0,o.kt)("p",null,'Find the spreadsheet ID in the URL. It is the long sequence of characters located between "/d/" and "/edit".'),(0,o.kt)("figure",null,(0,o.kt)(r.Z,{src:"/img/reference/connectors/googlesheet/google-sheet-id-2.png",alt:"Locate Spreadsheet ID",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Locate Spreadsheet ID"))),(0,o.kt)("h4",{id:"3-highlight-and-copy-the-spreadsheet-id-from-the-url"},"3. Highlight and Copy the Spreadsheet ID from the URL"),(0,o.kt)("p",null,"Highlight and copy the ID portion from the URL. Use shortcuts like Ctrl+C (Windows) or Cmd+C (Mac) to copy."),(0,o.kt)("figure",null,(0,o.kt)(r.Z,{src:"/img/reference/connectors/googlesheet/google-sheet-id-3.png",alt:"Copy Spreadsheet ID",mdxType:"Thumbnail"}),(0,o.kt)("figcaption",{align:"center"},(0,o.kt)("i",null,"Copy Spreadsheet ID"))),(0,o.kt)("h4",{id:"4-use-the-copied-spreadsheet-id-for-your-required-purpose"},"4. Use the Copied Spreadsheet ID for Your Required Purpose"),(0,o.kt)("p",null,"With the spreadsheet ID copied, you can now use it for various purposes, such as accessing the spreadsheet through the Google Sheets API on DronaHQ."))}m.isMDXComponent=!0}}]);