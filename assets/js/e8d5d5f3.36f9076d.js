"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[58745],{67405:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(31984);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l=e=>{var{to:t}=e,n=i(e,["to"]);return a.createElement(r.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({to:`${t}`},n))}},16985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>p,toc:()=>m});n(67294);var a=n(3905),r=n(67405),o=n(86291);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const d={sidebar_position:1,title:"PostgreSQL"},c=void 0,p={unversionedId:"reference/connectors/postgresql",id:"reference/connectors/postgresql",title:"PostgreSQL",description:"PostgreSQL stands as an open-source object-relational database system, providing a secure environment for storing and",source:"@site/docs/reference/connectors/postgresql.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/postgresql",permalink:"/reference/connectors/postgresql",draft:!1,tags:[],version:"current",lastUpdatedAt:1725364795,formattedLastUpdatedAt:"Sep 3, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PostgreSQL"},sidebar:"docSidebar",previous:{title:"Oracle",permalink:"/reference/connectors/oracle"},next:{title:"Proxy Crawl",permalink:"/reference/connectors/proxy-crawl"}},u={},m=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring Connector in DronaHQ",id:"configuring-connector-in-dronahq",level:2},{value:"General",id:"general",level:4},{value:"Admin",id:"admin",level:4},{value:"Adding Database Queries",id:"adding-database-queries",level:2},{value:"Supported Query Operations",id:"supported-query-operations",level:2},{value:"Using PostgreSQL Connector",id:"using-postgresql-connector",level:2},{value:"Data Bind using Data Query",id:"data-bind-using-data-query",level:3},{value:"Read/Display Data Query:",id:"readdisplay-data-query",level:4},{value:"Using in Actionflow blocks",id:"using-in-actionflow-blocks",level:3},{value:"Delete Data Query:",id:"delete-data-query",level:4}],g={toc:m},k="wrapper";function y(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"PostgreSQL stands as an open-source object-relational database system, providing a secure environment for storing and\nefficiently managing diverse data workloads."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Authentication Credentials to connect to your postgres instance. You will need either of the below two credentials\noption:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PostgreSQL database username and password."),(0,a.kt)("li",{parentName:"ul"},"AWS IAM authentication (for AWS-hosted PostgreSQL databases)."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connection Details:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Hostname of the PostgreSQL database."),(0,a.kt)("li",{parentName:"ul"},"Port number for database access."),(0,a.kt)("li",{parentName:"ul"},"Database name within the PostgreSQL host."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Firewall Rules:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Configure firewall settings to allow DronaHQ (IP whitelist) access to your PostgreSQL host.")))),(0,a.kt)("h2",{id:"configuring-connector-in-dronahq"},"Configuring Connector in DronaHQ"),(0,a.kt)("p",null,"Configure your database category by providing below details. Choose between ",(0,a.kt)("inlineCode",{parentName:"p"},"User and Password")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS IAM"),"\nAuthentication. Validate the connection with ",(0,a.kt)("inlineCode",{parentName:"p"},"Test connection")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Save")," settings for secure and efficient database\nsetup."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"DronaHQ can Auto fill crucial connection values like host, name, password, and more from the connector's\n",(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING"},"connection string")," or from a AWS IAM\ncredentials using ",(0,a.kt)("a",{parentName:"p",href:"/datasource-concepts/aws-import"},"AWS Import"),". ")),(0,a.kt)("h4",{id:"general"},"General"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the Host Domain or IP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the Port number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Database Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the Database name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Authentication Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose from User and Password or AWS IAM")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Username"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the Username")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Password"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the Password")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AWS Access Key"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the AWS Access Key of your database.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AWS Secret Key"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the AWS Secret Key of your database.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AWS Region"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the AWS Region of your database.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Role to assume (ARN)"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the role to be used while accessing API. Example - ",(0,a.kt)("inlineCode",{parentName:"td"},"arn:aws:iam::123456789012:role/RoleName"))))),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/reference/connectors/postgresql/details.png",alt:"PostgreSQL with Sample details.",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"PostgreSQL with Sample details."))),(0,a.kt)("h4",{id:"admin"},"Admin"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Advanced Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Connection Options"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"key")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"value")," connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use Dynamic Database Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Dynamically determine the host for the database connection.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use Dynamic Database Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Set the database name dynamically, allowing easy switching between databases.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(r.Z,{to:"/datasource-concepts/dynamic-credentials/#configure-dynamic-credentials",mdxType:"VersionedLink"}," Use Dynamic Database Credentials ")),(0,a.kt)("td",{parentName:"tr",align:null},"Enable dynamic database credentials for secure and convenient management.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(r.Z,{to:"/datasource-concepts/prepared-statements/",mdxType:"VersionedLink"}," Enable Converting Queries to Prepared Statement ")),(0,a.kt)("td",{parentName:"tr",align:null},"Opt for prepared statements to enhance database performance and security.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(r.Z,{to:"/datasource-concepts/ssl-configurations/",mdxType:"VersionedLink"}," Connect using SSL ")),(0,a.kt)("td",{parentName:"tr",align:null},"Securely access the database using an encrypted SSL connection, ensuring data integrity and confidentiality.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(r.Z,{to:"/datasource-concepts/ssh-tunneling/",mdxType:"VersionedLink"}," Enable SSH Tunneling ")),(0,a.kt)("td",{parentName:"tr",align:null},"Securely access the database through encrypted SSH tunneling.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(r.Z,{to:"/datasource-concepts/whitelisting-dronahq-ip/",mdxType:"VersionedLink"}," Whitelist IP ")),(0,a.kt)("td",{parentName:"tr",align:null},"Enhance security by restricting database access to specific whitelisted IP addresses.")))),(0,a.kt)("h2",{id:"adding-database-queries"},"Adding Database Queries"),(0,a.kt)("p",null,"After configuring the connector, access it in your Connector Library. To add queries, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add query")," once the\nconnection is ready. Create simple or complex queries, view tables and fields. Input Query name, run the query, and see\nresults in Response."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/reference/connectors/postgresql/data-query.jpeg",alt:"Write Queries",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Write Queries"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to\ncontrols/actions and more for runtime use. ")),(0,a.kt)("p",null,"Saved queries appear under your connector in Connector Library."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/reference/connectors/postgresql/queries.jpeg",alt:"Added Queries",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Added Queries"))),(0,a.kt)("h2",{id:"supported-query-operations"},"Supported Query Operations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operations"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Raw SQL Query"),(0,a.kt)("td",{parentName:"tr",align:null},"Various ",(0,a.kt)("inlineCode",{parentName:"td"},"select, insert, delete, update, join")," operations which are supported by PostgresSQL query. e.g. - ",(0,a.kt)("inlineCode",{parentName:"td"},"select * from UserInfo;"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stored Procedure Call"),(0,a.kt)("td",{parentName:"tr",align:null},"You can call store procedure similar to that we call from workbench. e.g. - ",(0,a.kt)("inlineCode",{parentName:"td"},"CALL getUserInfo;"))))),(0,a.kt)("h2",{id:"using-postgresql-connector"},"Using PostgreSQL Connector"),(0,a.kt)("h3",{id:"data-bind-using-data-query"},"Data Bind using Data Query"),(0,a.kt)("h4",{id:"readdisplay-data-query"},"Read/Display Data Query:"),(0,a.kt)("p",null,"After configuring the PostgreSQL connector, locate it in Connector Library. To retrieve data from the PostgreSQL\ndatabase, add a query to read the data."),(0,a.kt)("p",null,"Query used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from industry_role\n")),(0,a.kt)("p",null,"Query explanation:"),(0,a.kt)("p",null,"This query selects all details from the ",(0,a.kt)("inlineCode",{parentName:"p"},"industry_role")," schema's table, allowing you to display the data."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/reference/connectors/postgresql/get-data.png",alt:"Get Data Query",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Get Data Query"))),(0,a.kt)("p",null,"Place the Table grid control from the Controls section. Bind data by selecting the PostgreSQL connector from\n",(0,a.kt)("inlineCode",{parentName:"p"}," Data Bind Options -> Quick Select -> Connector Library.")," . Choose the relevant query for displaying data and bind the\npreferred columns."),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/reference/connectors/postgresql/display.png",alt:"Displaying data",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Displaying data"))),(0,a.kt)("h3",{id:"using-in-actionflow-blocks"},"Using in Actionflow blocks"),(0,a.kt)("h4",{id:"delete-data-query"},"Delete Data Query:"),(0,a.kt)("p",null,"For data deletion, create a query to remove details related to selected data."),(0,a.kt)("p",null,"Query used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE from industry_role WHERE id = {{id}};\n")),(0,a.kt)("p",null,"Query explanation:"),(0,a.kt)("p",null,"This query operates a delete action on the ",(0,a.kt)("inlineCode",{parentName:"p"},"industry_role")," table, targeting the user-selected ID (primary key) for\nremoval."),(0,a.kt)("p",null,"After saving your query after successful configuration testing."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the table grid's Actions, choose ",(0,a.kt)("inlineCode",{parentName:"p"},"delete_click"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Build the action flow:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Confirm task for user delete confirmation."),(0,a.kt)("li",{parentName:"ul"},"Server-side action with the delete data query."),(0,a.kt)("li",{parentName:"ul"},"Bind the id connector key to capture selected row's id."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access id using Use Keywords for smooth action flow."))),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/reference/connectors/postgresql/delete.png",alt:"Actionflow for deleting data",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Actionflow for deleting data"))))}y.isMDXComponent=!0}}]);