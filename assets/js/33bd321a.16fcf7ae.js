"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[77012],{67405:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(31984);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l=e=>{var{to:t}=e,n=o(e,["to"]);return r.createElement(a.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({to:`${t}`},n))}},73066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>g});n(67294);var r=n(3905),a=n(67405),i=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={sidebar_position:1,title:"BigQuery"},u=void 0,d={unversionedId:"reference/connectors/bigquery",id:"reference/connectors/bigquery",title:"BigQuery",description:"BigQuery is a fully managed data warehouse by Google Cloud that allows you to analyze massive datasets using SQL-like",source:"@site/docs/reference/connectors/bigquery.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/bigquery",permalink:"/reference/connectors/bigquery",draft:!1,tags:[],version:"current",lastUpdatedAt:1722853446,formattedLastUpdatedAt:"Aug 5, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"BigQuery"},sidebar:"docSidebar",previous:{title:"AWS S3",permalink:"/reference/connectors/aws-s3"},next:{title:"Bitly",permalink:"/reference/connectors/bitly"}},p={},g=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring Connector in DronaHQ",id:"configuring-connector-in-dronahq",level:2},{value:"General",id:"general",level:4},{value:"Admin",id:"admin",level:4},{value:"Adding Database Queries",id:"adding-database-queries",level:2},{value:"Using BigQuery Connector",id:"using-bigquery-connector",level:2},{value:"Data Bind using Data Query",id:"data-bind-using-data-query",level:3},{value:"Read/Display Data Query for BigQuery:",id:"readdisplay-data-query-for-bigquery",level:4}],y={toc:g},f="wrapper";function m(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(f,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"BigQuery is a fully managed data warehouse by Google Cloud that allows you to analyze massive datasets using SQL-like\nqueries. It's designed for speed and scalability, enabling organizations to process and gain insights from large volumes\nof data quickly and efficiently."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"To establish a connection with Google BigQuery as a connector, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Google Cloud Account: Ensure you have a valid Google Cloud Platform (GCP) account with the necessary permissions for\nBigQuery access.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Google Cloud Credentials: Obtain Google Cloud Credentials for authentication. For Service Account Authentication and\nthe private key, refer to this detailed article\n",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/docs/authentication/client-libraries#creating_a_service_account"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Service Account Creation: Create a Service Account within ",(0,r.kt)("inlineCode",{parentName:"p"},"Google Cloud Storage > APIs and Services > Credentials"),".\nIf not created, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Service Account")," and provide account details, description, and access permissions to projects\nand users."))),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{src:"/img/reference/connectors/bigquery/serviceacc.jpeg",alt:"Service Account",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Service Account"))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Generate JSON Key: From the created Service Account, generate a JSON Key. Provide necessary details and permissions,\nand download the JSON file. Keep it accessible for configuring the connector.")),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{src:"/img/reference/connectors/bigquery/json.jpeg",alt:"JSON Key",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"JSON Key"))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Connector Configuration: Configure the BigQuery connector using the obtained Google Cloud Credentials. Set the\nnecessary authentication method and use the downloaded JSON Key for private key authentication.")),(0,r.kt)("h2",{id:"configuring-connector-in-dronahq"},"Configuring Connector in DronaHQ"),(0,r.kt)("p",null,"Configure your database category using the provided details. Validate connection with ",(0,r.kt)("inlineCode",{parentName:"p"},"Test connection")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Save"),"\nsettings for secure database setup."),(0,r.kt)("h4",{id:"general"},"General"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Private Key"),(0,r.kt)("td",{parentName:"tr",align:null},"If using a Service Account key, provide the JSON key file obtained during Service Account creation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Region Qualifier"),(0,r.kt)("td",{parentName:"tr",align:null},"Mention the region to specify the geographic location where the data resides.")))),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{src:"/img/reference/connectors/bigquery/details.jpeg",alt:"BigQuery with Sample details.",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"BigQuery with Sample details."))),(0,r.kt)("h4",{id:"admin"},"Admin"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Advanced Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection Options"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(a.Z,{to:"/datasource-concepts/whitelisting-dronahq-ip/",mdxType:"VersionedLink"}," Whitelist IP ")),(0,r.kt)("td",{parentName:"tr",align:null},"Enhance security by restricting database access to specific whitelisted IP addresses.")))),(0,r.kt)("h2",{id:"adding-database-queries"},"Adding Database Queries"),(0,r.kt)("p",null,"After configuring the connector, access it in your Connector Library."),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add query")," once the connection is established. Create queries, run them, and view responses."),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{src:"/img/reference/connectors/bigquery/query.png",alt:"Write Queries",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Write Queries"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to\ncontrols/actions for runtime use. ")),(0,r.kt)("p",null,"Saved queries appear under your connector in Connector Library."),(0,r.kt)("h2",{id:"using-bigquery-connector"},"Using BigQuery Connector"),(0,r.kt)("h3",{id:"data-bind-using-data-query"},"Data Bind using Data Query"),(0,r.kt)("h4",{id:"readdisplay-data-query-for-bigquery"},"Read/Display Data Query for BigQuery:"),(0,r.kt)("p",null,"Start by crafting an SQL query to extract data from your Google BigQuery database. Consider a scenario where you want to\nretrieve names from the ",(0,r.kt)("inlineCode",{parentName:"p"},"bigquery-public-data.usa_names.usa_1910_2013")," table for the state 'TX', limiting the results to\n100 rows. The SQL query is:"),(0,r.kt)("p",null,"Query used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name FROM bigquery-public-data.usa_names.usa_1910_2013 WHERE state = 'TX' LIMIT 100;\n")),(0,r.kt)("p",null,"Query explanation:"),(0,r.kt)("p",null,"This SQL query retrieves names from the ",(0,r.kt)("inlineCode",{parentName:"p"},"bigquery-public-data.usa_names.usa_1910_2013")," table where the state is 'TX'.\nThe results are limited to 100 rows."),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{src:"/img/reference/connectors/bigquery/query.png",alt:"Query example for retrieving data from Google BigQuery.",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Query example for retrieving data from Google BigQuery."))),(0,r.kt)("p",null,"Integrate the fetched data into your application's interface."),(0,r.kt)("p",null,"a. Access the Controls section and introduce the Table grid control."),(0,r.kt)("p",null,"b. Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Bind Options ->  Quick Select -> Connector Library"),"."),(0,r.kt)("p",null,"c. Opt for the BigQuery connector and choose the query that aligns with your data presentation goals."),(0,r.kt)("p",null,"By following these steps, you can seamlessly retrieve and display data from the\n",(0,r.kt)("inlineCode",{parentName:"p"},"bigquery-public-data.usa_names.usa_1910_2013")," table using the BigQuery Connector. The data is filtered and limited\nbased on your specified criteria, enhancing your application's functionality and user experience."))}m.isMDXComponent=!0}}]);