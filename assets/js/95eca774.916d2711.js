"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[99856],{67405:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(31984);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l=e=>{var{to:t}=e,n=o(e,["to"]);return a.createElement(r.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({to:`${t}`},n))}},72734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>u,toc:()=>m});n(67294);var a=n(3905),r=n(67405),i=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const d={sidebar_position:1,title:"Amazon Redshift"},c=void 0,u={unversionedId:"reference/connectors/amazon-redshift",id:"reference/connectors/amazon-redshift",title:"Amazon Redshift",description:"Amazon Redshift: AWS's managed data warehouse for fast, scalable data analysis. Utilizing SQL and parallel processing,",source:"@site/docs/reference/connectors/amazon-redshift.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/amazon-redshift",permalink:"/reference/connectors/amazon-redshift",draft:!1,tags:[],version:"current",lastUpdatedAt:17226e5,formattedLastUpdatedAt:"Aug 2, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Amazon Redshift"},sidebar:"docSidebar",previous:{title:"Amazon DocumentDB",permalink:"/reference/connectors/amazon-documentdb"},next:{title:"Asana",permalink:"/reference/connectors/asana"}},p={},m=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring Connector in DronaHQ",id:"configuring-connector-in-dronahq",level:2},{value:"General",id:"general",level:4},{value:"Admin",id:"admin",level:4},{value:"Adding Database Queries",id:"adding-database-queries",level:2},{value:"Supported Query Operations",id:"supported-query-operations",level:2},{value:"Using Amazon Redshift Connector",id:"using-amazon-redshift-connector",level:2},{value:"Data Bind using Data Query",id:"data-bind-using-data-query",level:3},{value:"Read/Display Data Query for Amazon Redshift:",id:"readdisplay-data-query-for-amazon-redshift",level:4},{value:"Using in Actionflow Blocks",id:"using-in-actionflow-blocks",level:3},{value:"Insert Data Query:",id:"insert-data-query",level:4}],f={toc:m},k="wrapper";function g(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Amazon Redshift: AWS's managed data warehouse for fast, scalable data analysis. Utilizing SQL and parallel processing,\nit efficiently stores and queries large datasets, making it a reliable choice for generating valuable insights and\ninformed decisions."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Authentication Requirements: To establish a connection with your Amazon Redshift instance, you will need specific\nauthentication credentials. You have the option to use either of the following authentication methods:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Amazon Redshift database username and password."),(0,a.kt)("li",{parentName:"ul"},"IAM user credentials (AWS Identity and Access Management)."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connection Details:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Endpoint (hostname) of your Amazon Redshift cluster."),(0,a.kt)("li",{parentName:"ul"},"Port number for database communication (usually 5439)."),(0,a.kt)("li",{parentName:"ul"},"Database name within the Amazon Redshift cluster."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Network Configuration:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Configure your network settings to allow access from DronaHQ's IP addresses to your Amazon Redshift cluster. This\nensures secure and authorized communication.")))),(0,a.kt)("p",null,"By ensuring these prerequisites are met, you can seamlessly integrate Amazon Redshift with DronaHQ, enabling effective\ndata management and utilization while maintaining the required security measures."),(0,a.kt)("h2",{id:"configuring-connector-in-dronahq"},"Configuring Connector in DronaHQ"),(0,a.kt)("p",null,"Configure your database category using the provided details. Validate connection with ",(0,a.kt)("inlineCode",{parentName:"p"},"Test connection")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Save"),"\nsettings for secure database setup."),(0,a.kt)("h4",{id:"general"},"General"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the Host Domain or IP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the Port number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Database Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the Database name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Username"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the Username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Password"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the Password")))),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/amazon-redshift/details.jpeg",alt:"Amazon Redshift with Sample details.",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Amazon Redshift with Sample details."))),(0,a.kt)("h4",{id:"admin"},"Admin"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Advanced Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Connection Options"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"key")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"value")," connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use Dynamic Database Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Dynamically determine the host for the database connection.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use Dynamic Database Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the database name dynamically, allowing easy switching between databases.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(r.Z,{to:"/datasource-concepts/dynamic-credentials/#configure-dynamic-credentials",mdxType:"VersionedLink"}," Use Dynamic Database Credentials ")),(0,a.kt)("td",{parentName:"tr",align:null},"Enable dynamic database credentials for secure and convenient management.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(r.Z,{to:"/datasource-concepts/whitelisting-dronahq-ip/",mdxType:"VersionedLink"}," Whitelist IP ")),(0,a.kt)("td",{parentName:"tr",align:null},"Enhance security by restricting database access to specific whitelisted IP addresses.")))),(0,a.kt)("h2",{id:"adding-database-queries"},"Adding Database Queries"),(0,a.kt)("p",null,"After configuring the connector, access it in your Connector Library."),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add query")," once the connection is established. Create queries, run them, and view responses."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/amazon-redshift/query.png",alt:"Write Queries",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Write Queries"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to\ncontrols/actions for runtime use. ")),(0,a.kt)("p",null,"Saved queries appear under your connector in Connector Library."),(0,a.kt)("h2",{id:"supported-query-operations"},"Supported Query Operations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operations"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Raw SQL Query"),(0,a.kt)("td",{parentName:"tr",align:null},"Execute various SQL operations directly, e.g., ",(0,a.kt)("inlineCode",{parentName:"td"},"SELECT * FROM TableName;"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stored Procedure Call"),(0,a.kt)("td",{parentName:"tr",align:null},"Call stored procedures, e.g., ",(0,a.kt)("inlineCode",{parentName:"td"},"EXEC usp_GetInfo;")," to perform specific tasks or retrieve data from the database.")))),(0,a.kt)("h2",{id:"using-amazon-redshift-connector"},"Using Amazon Redshift Connector"),(0,a.kt)("h3",{id:"data-bind-using-data-query"},"Data Bind using Data Query"),(0,a.kt)("h4",{id:"readdisplay-data-query-for-amazon-redshift"},"Read/Display Data Query for Amazon Redshift:"),(0,a.kt)("p",null,"Start by crafting an SQL query to extract data from your Amazon Redshift database. Consider a scenario where you want to\nretrieve data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," table, ordering it by ",(0,a.kt)("inlineCode",{parentName:"p"},"catid")," in ascending order, and applying pagination. The SQL\nquery is:"),(0,a.kt)("p",null,"Query used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM category ORDER BY catid ASC LIMIT {{limit}} OFFSET {{Offset}};\n")),(0,a.kt)("p",null,"Query explanation:"),(0,a.kt)("p",null,"This SQL query retrieves all rows and columns from the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," table. It orders the results by ",(0,a.kt)("inlineCode",{parentName:"p"},"catid")," in ascending\norder. The pagination is achieved using the ",(0,a.kt)("inlineCode",{parentName:"p"},"LIMIT")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"OFFSET")," clauses, with dynamic variables ",(0,a.kt)("inlineCode",{parentName:"p"},"{{limit}}")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"{{Offset}}"),"."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/amazon-redshift/queryexample.png",alt:"Query example with dynamic variables for ordering and pagination.",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Query example with dynamic variables for ordering and pagination."))),(0,a.kt)("p",null,"Integrate the fetched data into your application's interface."),(0,a.kt)("p",null,"a. Access the Controls section and introduce the Table grid control."),(0,a.kt)("p",null,"b. Navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Data Bind Options -> Quick Select -> Connector Library"),"."),(0,a.kt)("p",null,"c. Opt for the Amazon Redshift connector and choose the query that aligns with your data presentation goals."),(0,a.kt)("p",null,"By following these steps, you can seamlessly retrieve and display data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," table using the Amazon\nRedshift Connector. The data is ordered and paginated based on your specified criteria, enhancing your application's\nfunctionality and user experience."),(0,a.kt)("h3",{id:"using-in-actionflow-blocks"},"Using in Actionflow Blocks"),(0,a.kt)("h4",{id:"insert-data-query"},"Insert Data Query:"),(0,a.kt)("p",null,"To add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," to your Amazon Redshift database, follow these steps:"),(0,a.kt)("p",null,"Query used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO category (catid, catgroup, catname, catdesc)\nVALUES ({{catid}}, 'Sports', 'NHL', '{{CatDescription}}');\n")),(0,a.kt)("p",null,"Query explanation:"),(0,a.kt)("p",null,"This query performs an insert action on the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," table, using dynamic values for the ",(0,a.kt)("inlineCode",{parentName:"p"},"catid")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CatDescription"),"\nfields."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/amazon-redshift/query.png",alt:"Write Queries",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Write Queries"))),(0,a.kt)("p",null,"After saving your query after successful configuration testing."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In your application's user interface, create an action-triggering element, such as a button.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build the action flow:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Capture necessary data from user inputs (e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"catid")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"CatDescription"),")."),(0,a.kt)("li",{parentName:"ul"},"Initiate a server-side action that includes the insert data query from your Amazon Redshift connector."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure controls:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Link the form controls capturing user input to the corresponding variables in the Insert query."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Upon button click, execute the action flow.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The query will add a new record to the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," table using the provided dynamic values."))),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/amazon-redshift/button_click_redshift.png",alt:"Button Click Actionflow in Amazon Redshift",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Button Click Actionflow in Amazon Redshift"))),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/amazon-redshift/dynamic_values.jpeg",alt:"Configuring Dynamic Values",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Configuring Dynamic Values"))))}g.isMDXComponent=!0}}]);