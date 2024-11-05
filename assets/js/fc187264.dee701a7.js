"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[52517],{1499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905),o=n(86291);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={sidebar_position:1,title:"Autogenerate Forms and CRUD"},u=void 0,s={unversionedId:"building-apps-concepts/autogenerate-forms-and-crud",id:"building-apps-concepts/autogenerate-forms-and-crud",title:"Autogenerate Forms and CRUD",description:"Within DronaHQ Cloud, you'll find a robust tool that swiftly generates CRUD operations within an existing database, facilitating subcategory creation and a range of database functions like viewing, inserting, deleting, and updating data. Additionally, the Autogenerate Form feature expedites the creation of user-friendly forms, enhancing efficiency. Accessible on a fresh screen in DronaHQ Cloud, this function accelerates form development within the platform.",source:"@site/docs/building-apps-concepts/autogenerate-forms-and-crud.md",sourceDirName:"building-apps-concepts",slug:"/building-apps-concepts/autogenerate-forms-and-crud",permalink:"/building-apps-concepts/autogenerate-forms-and-crud",draft:!1,tags:[],version:"current",lastUpdatedAt:1704262921,formattedLastUpdatedAt:"Jan 3, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Autogenerate Forms and CRUD"},sidebar:"docSidebar",previous:{title:"Asset manager",permalink:"/building-apps-concepts/asset-manager"},next:{title:"Configuring Themes",permalink:"/building-apps-concepts/configuring-themes"}},d={},p=[{value:"Autogenerate Form",id:"autogenerate-form",level:2},{value:"Form generation with Connector",id:"form-generation-with-connector",level:3},{value:"Create Action automatically on submit",id:"create-action-automatically-on-submit",level:4},{value:"Form generation with Sheets",id:"form-generation-with-sheets",level:3},{value:"Form generation with Control",id:"form-generation-with-control",level:3},{value:"Form generation with Raw JSON/CSV",id:"form-generation-with-raw-jsoncsv",level:3},{value:"Autogenerate CRUD",id:"autogenerate-crud",level:2},{value:"View operation",id:"view-operation",level:3},{value:"Insert operation",id:"insert-operation",level:3},{value:"Update operation",id:"update-operation",level:3},{value:"Delete operation",id:"delete-operation",level:3}],h={toc:p},m="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(m,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Within DronaHQ Cloud, you'll find a robust tool that swiftly generates CRUD operations within an existing database, facilitating subcategory creation and a range of database functions like viewing, inserting, deleting, and updating data. Additionally, the Autogenerate Form feature expedites the creation of user-friendly forms, enhancing efficiency. Accessible on a fresh screen in DronaHQ Cloud, this function accelerates form development within the platform."),(0,a.kt)("h2",{id:"autogenerate-form"},"Autogenerate Form"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Autogenerate Form")," enables us to build user-friendly forms faster and more effectively. In the DronaHQ Cloud, you\nhave the option of ",(0,a.kt)("inlineCode",{parentName:"p"},"Autogenerate Form")," on the fresh screen page to generate forms."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/form.png",alt:"Auto form",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Auto generation Form"))),(0,a.kt)("p",null,"On click of Autogenerated Form option, you will be provided with some straight forward ways to auto-generate your form."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connectors"),(0,a.kt)("li",{parentName:"ul"},"Sheets"),(0,a.kt)("li",{parentName:"ul"},"Control"),(0,a.kt)("li",{parentName:"ul"},"Raw JSON"),(0,a.kt)("li",{parentName:"ul"},"Upload CSV")),(0,a.kt)("p",null,"These options to create forms are basically to identify which type of controls are required as per your data to create a\nform. For instance, if your provided data is a number then it will detect numeric control for the data in the control.\nThis makes the work easy and quick."),(0,a.kt)("p",null,"The default mapping of different data types to various controls can be seen in the below table."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Control"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"int, integer, smallint, tinyint, mediumint, bigint, float, decimal, dec, numeric, longint, double, bit, number, binary_float, binary_double, double precision, real, money, smallmoney, dec, double precision, fixed, smallserial, serial, bigserial, binary varying, varbinary, enum, set, long, raw, long raw"),(0,a.kt)("td",{parentName:"tr",align:null},"Numeric control")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"varchar, tinytext, text, mediumtext, longtext, varchar2, char, nvarchar2, nvarchar2, long, raw, long raw, character varying, character, bytea, blob, mediumblob, tinyblob, clob, nclob, bfile, rowid, urowid, longblob"),(0,a.kt)("td",{parentName:"tr",align:null},"Text control")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"bool, boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Toggle control")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"json, Object"),(0,a.kt)("td",{parentName:"tr",align:null},"JSON Editor control")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Array"),(0,a.kt)("td",{parentName:"tr",align:null},"Single select, multi select")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Text control with URL configuration")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Email"),(0,a.kt)("td",{parentName:"tr",align:null},"Text control with Email configuration")))),(0,a.kt)("admonition",{title:"NOTE ",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For any other data type which is not present in the table, will have ",(0,a.kt)("inlineCode",{parentName:"p"},"Text control")," as the default mapped\ncontrol for the form. ")),(0,a.kt)("h3",{id:"form-generation-with-connector"},"Form generation with Connector"),(0,a.kt)("p",null,"The first method we have for auto generation of form is with using connectors. On your screen, you will have a dropdown\nof connectors to choose from. Select the connector of your choice, after that It will show another dropdown to select\nthe table from."),(0,a.kt)("p",null,"After selecting of the connector and table, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next"),". It will showcase all the fields available in the data as\n",(0,a.kt)("inlineCode",{parentName:"p"},"column name")," with their data types as ",(0,a.kt)("inlineCode",{parentName:"p"},"detected type"),"."),(0,a.kt)("p",null,"The DronaHQ Cloud tries to map the right controls considering the data that has been connected. In case you select any\nof the dropdown/radio/checkbox/select kinds of controls, you would have to configure the options for binding data after\nthe form is created."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/form-connector.jpeg",alt:"Using connector",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Using connector"))),(0,a.kt)("p",null,"You will see that each of the columns has an autogenerated label name as well as a suitable type of control."),(0,a.kt)("p",null,"You can now further change the ",(0,a.kt)("inlineCode",{parentName:"p"},"label name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"type of control.")," Also, you can set the form fields as required fields\nfor input values in the form, this will make it a mandatory property to fill on that control."),(0,a.kt)("p",null,"Once you have configured the columns and controls of the form, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next"),"."),(0,a.kt)("p",null,"It will ask for summary details such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Form Title/Header, form button text,")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Description of the form"),". This data\nwill help the user to recognize the form and its use case in your microapp."),(0,a.kt)("h4",{id:"create-action-automatically-on-submit"},"Create Action automatically on submit"),(0,a.kt)("p",null,"There is an additional feature that is available for only ",(0,a.kt)("inlineCode",{parentName:"p"},"SQL connectors"),". If you are using a SQL connector to generate\nyour form then you will have a toggle button to add action on the submit button of your form."),(0,a.kt)("p",null,"The chosen action will automatically add a subcategory/API under the configured SQL connector with respective to the\naction. In this way you don\u2019t have to exclusively add a subcategory/API to your connector to perform the action on your\nSQL database."),(0,a.kt)("p",null,"The action on submit button of form can be of two types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Update:")," This will automatically add a subcategory with SQL syntax to update your database along with adding it in\nthe action flow of the form button. Just select the unique identifier from the form\u2019s columns which is to be used as\nfilter condition.")),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/update-action.png",alt:"Adding update action",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Adding update action"))),(0,a.kt)("p",null,"You can check that the action has been added to the submit button in the action flow."),(0,a.kt)("p",null,"Also, a new subcategory to update data is added under the configured SQL connector."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Insert:")," This will automatically add a subcategory with SQL syntax to insert new data to your database along with\nusing it in the action flow of the form button.")),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/insert-action.png",alt:"Insert Action",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Insert Action"))),(0,a.kt)("p",null,"You can check that the action has been added to the submit button in the action flow."),(0,a.kt)("p",null,"Also, a new subcategory to insert data is added under the configured SQL connector."),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Form"),". Your form is generated and ready to use."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/generated-form.png",alt:"Generated Form",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Generated Form"))),(0,a.kt)("h3",{id:"form-generation-with-sheets"},"Form generation with Sheets"),(0,a.kt)("p",null,"In the DronaHQ Cloud we can generate forms using sheets too. To generate a form using sheets, you just have to make sure\nthat the sheet is uploaded or available in the DronaHQ Cloud account\u2019s database, then simply select ",(0,a.kt)("inlineCode",{parentName:"p"},"Sheets")," from the\noptions. It will detect all the values and their data type as columns and type of control then provide you the\n",(0,a.kt)("inlineCode",{parentName:"p"},"configure columns/controls")," section on click of ",(0,a.kt)("inlineCode",{parentName:"p"},"Next"),"."),(0,a.kt)("p",null,"The DronaHQ Cloud tries to map the proper controls considering the data that has been connected. In case you select any\nof the dropdown/radio/checkbox/select kinds of controls, you would have to configure the options for binding data after\nthe form is created."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/sheets.png",alt:"Generate from Sheets",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Generate from Sheets"))),(0,a.kt)("p",null,"You will see that each of the columns has an autogenerated label name as well as a suitable type of control."),(0,a.kt)("p",null,"You can now further change the ",(0,a.kt)("inlineCode",{parentName:"p"},"label name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"type of control.")," Also, you can set the form fields as required fields\nfor input values in the form."),(0,a.kt)("p",null,"Once you have configured the columns and controls of the form, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next"),"."),(0,a.kt)("p",null,"It will ask for summary details such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Form Title/Header, form button text,")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Description of the form"),". This data\nwill help the user to recognize the form and its use case in your microapp."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/porp.png",alt:"Details",mdxType:"Thumbnail"})),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Form"),". Your form is generated and ready to use."),(0,a.kt)("h3",{id:"form-generation-with-control"},"Form generation with Control"),(0,a.kt)("p",null,"The process of auto generation of form using control is very simple, provided the condition that the control should\nreturn a JSON value and the control should be present in that particular microapp."),(0,a.kt)("p",null,"On the screen, you have to select the control consisting of the JSON data from the dropdown."),(0,a.kt)("p",null,"Once you select the control, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Next,")," it will showcase all the fields available in the data as ",(0,a.kt)("inlineCode",{parentName:"p"},"column name")," with\ntheir data types as ",(0,a.kt)("inlineCode",{parentName:"p"},"detected type"),"."),(0,a.kt)("p",null,"The DronaHQ tries to map the right controls considering the data that has been connected. In case you select any of the\ndropdown/radio/checkbox/select kinds of controls, you would have to configure the options for binding data after the\nform is created."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/form-control.png",alt:"Generation from Control",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Generation from Control"))),(0,a.kt)("p",null,"You will see that each of the columns has an autogenerated label name as well as a suitable type of control."),(0,a.kt)("h3",{id:"form-generation-with-raw-jsoncsv"},"Form generation with Raw JSON/CSV"),(0,a.kt)("p",null,"Next, we have to generate a form by providing raw JSON data or by uploading CSV file."),(0,a.kt)("p",null,"To generate form with raw JSON data simply copy your JSON data and paste it into the given area. It will detect all the\nvalues and their data type as columns and type of control then provide you the ",(0,a.kt)("inlineCode",{parentName:"p"},"configure columns/controls")," section on\nclick of ",(0,a.kt)("inlineCode",{parentName:"p"},"Next"),"."),(0,a.kt)("p",null,"The DronaHQ tries to map the proper controls considering the data that has been connected. In case you select any of the\ndropdown/radio/checkbox/select kinds of controls, you would have to configure the options for binding data after the\nform is created."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/form-json.png",alt:"Generate from JSON",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Generate from JSON"))),(0,a.kt)("p",null,"You will see that each of the columns has an autogenerated label name as well as a suitable type of control."),(0,a.kt)("p",null,"Now for the form generation with CSV upload, in this method you have to upload a CSV file with data in it, then it will\nprocess the uploaded file, and just like in other methods of auto generation of form it will detect all the values and\ntheir data type as columns and type of control then provide you the ",(0,a.kt)("inlineCode",{parentName:"p"},"configure columns/controls")," section on click of\n",(0,a.kt)("inlineCode",{parentName:"p"},"Next"),"."),(0,a.kt)("p",null,"The DronaHQ tries to map the proper controls considering the data that has been connected. In case you select any of the\ndropdown/radio/checkbox/select kinds of controls, you would have to configure the options for binding data after the\nform is created."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/view.png",alt:"View Operation",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"View Operation"))),(0,a.kt)("p",null,"You will see that each of the columns has an autogenerated label name as well as a suitable type of control."),(0,a.kt)("h2",{id:"autogenerate-crud"},"Autogenerate CRUD"),(0,a.kt)("p",null,"In the builder view, we can use the feature of ",(0,a.kt)("inlineCode",{parentName:"p"},"autogenerate CRUD")," functionality with an existing database. Users can build subcategories and perform various functionalities in the connected database, such as viewing, inserting, deleting, and updating the data.  "),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/crud.png",alt:"Autogenerate CRUD",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Autogenerate CRUD"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"It is available only for SQL databases.")),(0,a.kt)("p",null,"The auto-generate CRUD feature extends its utility to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"table")," on the builder screen also with ",(0,a.kt)("inlineCode",{parentName:"p"},"applied actions")," on it; to perform the CRUD operations. This makes the whole procedure much easy and faster."),(0,a.kt)("p",null,"This option will generate an editable table control where you can view, add, update and delete rows from the selected SQL DB. You can choose individual operations that you want to allow and accordingly we will generate the table grid control with the right data and queries. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Autogenerate CRUD")," option. It will open up a side window, with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Select Connector")," dropdown. Select the database you want to perform the CRUD operation.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After selecting database it will ask to select the ",(0,a.kt)("inlineCode",{parentName:"p"},"table."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Next, you will have various operations listed right below to choose from. You can select one more operation at a time. By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," operation will be chosen and it can\u2019t be unselected."))),(0,a.kt)("h3",{id:"view-operation"},"View operation"),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," operation selected, you will have to next select the columns which all users will be able to view in the table grid control."),(0,a.kt)("p",null,"You can check the ",(0,a.kt)("inlineCode",{parentName:"p"},"Select All")," option from the top row to select all the columns and make it available to view in the table grid control."),(0,a.kt)("p",null,"For the view operation we also have a column of ",(0,a.kt)("inlineCode",{parentName:"p"},"Detailed-View,")," if you select it, it would display the whole row of data as a detailed view. Also, the detailed view option in the table grid gets toggled on."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/view.png",alt:"View Operation",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"View Operation"))),(0,a.kt)("h3",{id:"insert-operation"},"Insert operation"),(0,a.kt)("p",null,"   Now, let\u2019s look into the ",(0,a.kt)("inlineCode",{parentName:"p"},"Insert")," operation. Once you select the insert option, the whole column of the ",(0,a.kt)("inlineCode",{parentName:"p"},"insert")," will be available to choose from. You can check ",(0,a.kt)("inlineCode",{parentName:"p"},"Select All")," to make every column available to insert from the user in the database or you can check only those columns which you want to insert from the user side."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/insert.png",alt:"Insert Operation",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Insert Operation"))),(0,a.kt)("h3",{id:"update-operation"},"Update operation"),(0,a.kt)("p",null,"When you select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Update")," operation, an additional dropdown is provided to select a unique identifier from the database table. This identifier is used to make reference as the primary key in the table to make successful updates."),(0,a.kt)("p",null,"Select a column that you want to make a unique identifier for the update operation. Once you select the update option, the whole column of the ",(0,a.kt)("inlineCode",{parentName:"p"},"update")," will be available to choose from. You can check ",(0,a.kt)("inlineCode",{parentName:"p"},"Select All")," to make every column available to update data from the user in the database or you can check only those columns which you want to make changes from the user side."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/update.png",alt:"Update Operation",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Update Operation"))),(0,a.kt)("h3",{id:"delete-operation"},"Delete operation"),(0,a.kt)("p",null,"   At last, we have the ",(0,a.kt)("inlineCode",{parentName:"p"},"Delete")," operation. On selection of the delete operation, similar to the update operation an additional dropdown will be provided to select a unique identifier from the database table. This identifier is used to make reference as the primary key in the table to make successful deletes."),(0,a.kt)("p",null,"   Select a column that you want to make a unique identifier for the delete operation."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/building-apps-concepts/autogenerate-crud-form/delete.png",alt:"Delete Operation",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Delete Operation"))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"After selecting the operations and columns, click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Generate CRUD"),".")))}f.isMDXComponent=!0}}]);