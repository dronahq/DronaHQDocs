"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[73309],{11469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>p});a(67294);var r=a(3905),n=a(86291);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const s={sidebar_position:1,title:"SurrealDB"},u=void 0,d={unversionedId:"reference/connectors/surrealdb",id:"reference/connectors/surrealdb",title:"SurrealDB",description:"SurrealDB is a cutting-edge distributed NoSQL database system designed for optimal scalability, high availability, and fault tolerance in handling diverse data workloads.",source:"@site/docs/reference/connectors/surrealdb.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/surrealdb",permalink:"/reference/connectors/surrealdb",draft:!1,tags:[],version:"current",lastUpdatedAt:1704976968,formattedLastUpdatedAt:"Jan 11, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SurrealDB"},sidebar:"docSidebar",previous:{title:"Supabase Database",permalink:"/reference/connectors/supabase"},next:{title:"Trello",permalink:"/reference/connectors/trello"}},c={},p=[{value:"Configuring SurrealDB Connector",id:"configuring-surrealdb-connector",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Connector Setup in DronaHQ",id:"connector-setup-in-dronahq",level:3},{value:"General",id:"general",level:4},{value:"Advanced Settings",id:"advanced-settings",level:4},{value:"Managing Database Queries",id:"managing-database-queries",level:2},{value:"Supported Query Operations",id:"supported-query-operations",level:2},{value:"Utilizing SurrealDB Connector",id:"utilizing-surrealdb-connector",level:2},{value:"Data Binding via Data Query",id:"data-binding-via-data-query",level:3},{value:"Reading/Displaying Data Query for SurrealDB:",id:"readingdisplaying-data-query-for-surrealdb",level:4}],m={toc:p},b="wrapper";function g(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)(b,l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){i(e,t,a[t])}))}return e}({},m,a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SurrealDB is a cutting-edge distributed NoSQL database system designed for optimal scalability, high availability, and fault tolerance in handling diverse data workloads."),(0,r.kt)("h2",{id:"configuring-surrealdb-connector"},"Configuring SurrealDB Connector"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Authentication Credentials:\nGather required credentials for seamless connection to your SurrealDB instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connection Details:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Hostname of the SurrealDB database."),(0,r.kt)("li",{parentName:"ul"},"Port number for database access."),(0,r.kt)("li",{parentName:"ul"},"Database name within the SurrealDB host."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Firewall Rules:\nSet up necessary firewall configurations to allow DronaHQ (IP whitelist) access to your SurrealDB host."))),(0,r.kt)("p",null,"Ensure these prerequisites are met to enable a smooth integration of SurrealDB with DronaHQ, ensuring efficient data management."),(0,r.kt)("h3",{id:"connector-setup-in-dronahq"},"Connector Setup in DronaHQ"),(0,r.kt)("p",null,"Configure your SurrealDB database category using the provided connection details. Validate connection with ",(0,r.kt)("inlineCode",{parentName:"p"},"Test connection")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Save")," settings for secure database setup."),(0,r.kt)("h4",{id:"general"},"General"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Host Domain or IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Port number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Database name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Namespace"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Namespace for full data access for all databases under a specific namespace.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Password")))),(0,r.kt)("figure",null,(0,r.kt)(n.Z,{src:"/img/reference/connectors/surrealdb/details.jpeg",alt:"SurrealDB with Sample details.",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"SurrealDB with Sample details."))),(0,r.kt)("h4",{id:"advanced-settings"},"Advanced Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Advanced Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whitelisting DronaHQ IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Restrict database access to specific whitelisted IP addresses for enhanced security.")))),(0,r.kt)("h2",{id:"managing-database-queries"},"Managing Database Queries"),(0,r.kt)("p",null,"Once the SurrealDB connector is configured, access it in your Connector Library. Add queries, execute them, and view responses."),(0,r.kt)("figure",null,(0,r.kt)(n.Z,{src:"/img/reference/connectors/surrealdb/data-query.jpeg",alt:"Write Queries",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Write Queries"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use dynamic variables enclosed in double curly brackets. Test with sample values before saving. Link dynamic variables to controls/actions for runtime use.")),(0,r.kt)("p",null,"Saved queries will be listed under your connector in the Connector Library."),(0,r.kt)("h2",{id:"supported-query-operations"},"Supported Query Operations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operations"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raw SQL Query"),(0,r.kt)("td",{parentName:"tr",align:null},"Perform various operations like ",(0,r.kt)("inlineCode",{parentName:"td"},"select, insert, delete, update"),", and join operations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stored Procedure Call"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute stored procedures, e.g., ",(0,r.kt)("inlineCode",{parentName:"td"},"CALL getCustomerDetails;"))))),(0,r.kt)("h2",{id:"utilizing-surrealdb-connector"},"Utilizing SurrealDB Connector"),(0,r.kt)("h3",{id:"data-binding-via-data-query"},"Data Binding via Data Query"),(0,r.kt)("h4",{id:"readingdisplaying-data-query-for-surrealdb"},"Reading/Displaying Data Query for SurrealDB:"),(0,r.kt)("p",null,"Craft an SQL query to extract data from your SurrealDB database. For example, retrieve all records from a ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table:"),(0,r.kt)("p",null,"Query used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Customers;\n")),(0,r.kt)("p",null,"Query explanation:"),(0,r.kt)("p",null,"This SQL query retrieves all rows and columns from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table within the SurrealDB database."),(0,r.kt)("p",null,"Integrate the fetched data into your application's interface for enhanced functionality and user experience."))}g.isMDXComponent=!0}}]);