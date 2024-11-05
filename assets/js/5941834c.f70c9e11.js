"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[45034],{37327:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>u});a(67294);var n=a(3905),r=a(86291);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const d={sidebar_position:2,title:"Connecting Databases"},s=void 0,m={unversionedId:"dashboard-dronahq/working-with-data/connecting-databases",id:"dashboard-dronahq/working-with-data/connecting-databases",title:"Connecting Databases",description:"The DronaHQ Dashboard offers support for a wide range of databases. If you have the SQLAlchemy URI connection string for a database, you can easily connect it to the DronaHQ Dashboard. Additionally, if you possess an archived database file (e.g., ZIP), you can directly import it to the dashboard.",source:"@site/docs/dashboard-dronahq/working-with-data/connecting-databases.md",sourceDirName:"dashboard-dronahq/working-with-data",slug:"/dashboard-dronahq/working-with-data/connecting-databases",permalink:"/dashboard-dronahq/working-with-data/connecting-databases",draft:!1,tags:[],version:"current",lastUpdatedAt:1723461710,formattedLastUpdatedAt:"Aug 12, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Connecting Databases"},sidebar:"docSidebar",previous:{title:"Overview",permalink:"/dashboard-dronahq/working-with-data/exploring-datas"},next:{title:"Adding Chart to Dataset",permalink:"/dashboard-dronahq/working-with-data/creating-charts"}},p={},u=[{value:"Database Connection Walkthrough",id:"database-connection-walkthrough",level:2},{value:"Apache Druid",id:"apache-druid",level:3},{value:"Apache Hive",id:"apache-hive",level:3},{value:"Apache Spark SQL",id:"apache-spark-sql",level:3},{value:"Aurora MySQL (Data API)",id:"aurora-mysql-data-api",level:3},{value:"Using Dynamic Form",id:"using-dynamic-form",level:4},{value:"Aurora PostgreSQL (Data API)",id:"aurora-postgresql-data-api",level:3},{value:"Using Dynamic Form",id:"using-dynamic-form-1",level:4},{value:"Google Sheets",id:"google-sheets",level:3},{value:"MySQL",id:"mysql",level:3},{value:"Using Dynamic Form",id:"using-dynamic-form-2",level:4},{value:"PostgreSQL",id:"postgresql",level:3},{value:"Using Dynamic Form",id:"using-dynamic-form-3",level:4},{value:"Presto",id:"presto",level:3},{value:"Shillelagh",id:"shillelagh",level:3},{value:"SQLite",id:"sqlite",level:3},{value:"Trino",id:"trino",level:3},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"SQL Labs",id:"sql-labs",level:3},{value:"Performance",id:"performance",level:3},{value:"Security",id:"security",level:3},{value:"Other",id:"other",level:3},{value:"Import &amp; Export a Database",id:"import--export-a-database",level:2},{value:"Import a Database",id:"import-a-database",level:3},{value:"Export a Database",id:"export-a-database",level:3}],h={toc:u},c="wrapper";function k(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)(c,i(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){l(t,e,a[e])}))}return t}({},h,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The DronaHQ Dashboard offers support for a wide range of databases. If you have the SQLAlchemy URI connection string for a database, you can easily connect it to the DronaHQ Dashboard. Additionally, if you possess an archived database file (e.g., ZIP), you can directly import it to the dashboard."),(0,n.kt)("p",null,"Some databases might require additional configuration details for connection. For instance, Google Sheets requires authentication via JSON, while Trino necessitates warehouse parameters."),(0,n.kt)("p",null,"This document provides detailed instructions on how to connect various types of databases to the DronaHQ Dashboard."),(0,n.kt)("h2",{id:"database-connection-walkthrough"},"Database Connection Walkthrough"),(0,n.kt)("p",null,"To connect a database, start by selecting ",(0,n.kt)("inlineCode",{parentName:"p"},"+ Database")," on the DronaHQ Dashboard. Then, in the Connect a Database window, choose the database you want to connect to from the Supported Databases field."),(0,n.kt)("figure",null,(0,n.kt)(r.Z,{src:"/img/dhq-dashboard/working-with-data/connect-database/databaselist.jpeg",alt:"List of DB",mdxType:"Thumbnail"})),(0,n.kt)("h3",{id:"apache-druid"},"Apache Druid"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache Druid. Pick a name to help you identify this database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQLAlchemy URI"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"engine+driver://user:password@host:port/dbname[?key=value&key=value...]")," Refer to the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/13/core/engines.html"},"SQLAlchemy docs")," for more information on structuring your URI.")))),(0,n.kt)("h3",{id:"apache-hive"},"Apache Hive"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache Hive. Pick a name to help you identify this database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQLAlchemy URI"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"engine+driver://user:password@host:port/dbname[?key=value&key=value...]")," Refer to the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/13/core/engines.html"},"SQLAlchemy docs")," for more information on structuring your URI.")))),(0,n.kt)("h3",{id:"apache-spark-sql"},"Apache Spark SQL"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Apache Spark SQL. Pick a name to help you identify this database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQLAlchemy URI"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"engine+driver://user:password@host:port/dbname[?key=value&key=value...]")," Refer to the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/13/core/engines.html"},"SQLAlchemy docs")," for more information on structuring your URI.")))),(0,n.kt)("h3",{id:"aurora-mysql-data-api"},"Aurora MySQL (Data API)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Aurora MySQL (Data API). Pick a name to help you identify this database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQLAlchemy URI"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"mysql+auroradataapi://{aws_access_id}:{aws_secret_access_key}@/{database_name}?aurora_cluster_arn={aurora_cluster_arn}&secret_arn={secret_arn}&region_name={region_name}")," Refer to the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/13/core/engines.html"},"SQLAlchemy docs")," for more information on structuring your URI.")))),(0,n.kt)("h4",{id:"using-dynamic-form"},"Using Dynamic Form"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host"),(0,n.kt)("td",{parentName:"tr",align:null},"The hostname or IP address of the database server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port"),(0,n.kt)("td",{parentName:"tr",align:null},"The port number on which the database server is listening.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Database name"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the database you are trying to connect to.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"The username for authenticating with the database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password"),(0,n.kt)("td",{parentName:"tr",align:null},"The password for authenticating with the database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Pick a nickname for how the database will display in dashboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Additional Parameters"),(0,n.kt)("td",{parentName:"tr",align:null},"Any additional custom parameters required for the connection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSL"),(0,n.kt)("td",{parentName:"tr",align:null},"Toggle for SSL configuration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSH Tunnel"),(0,n.kt)("td",{parentName:"tr",align:null},"Toggle for SSH tunnel configuration.")))),(0,n.kt)("h3",{id:"aurora-postgresql-data-api"},"Aurora PostgreSQL (Data API)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Aurora PostgreSQL (Data API). Pick a name to help you identify this database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQLAlchemy URI"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"postgresql+auroradataapi://{aws_access_id}:{aws_secret_access_key}@/{database_name}?aurora_cluster_arn={aurora_cluster_arn}&secret_arn={secret_arn}&region_name={region_name}")," Refer to the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/13/core/engines.html"},"SQLAlchemy docs")," for more information on structuring your URI.")))),(0,n.kt)("h4",{id:"using-dynamic-form-1"},"Using Dynamic Form"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host"),(0,n.kt)("td",{parentName:"tr",align:null},"The hostname or IP address of the database server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port"),(0,n.kt)("td",{parentName:"tr",align:null},"The port number on which the database server is listening.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Database name"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the database you are trying to connect to.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"The username for authenticating with the database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password"),(0,n.kt)("td",{parentName:"tr",align:null},"The password for authenticating with the database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Pick a nickname for how the database will display in dashboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Additional Parameters"),(0,n.kt)("td",{parentName:"tr",align:null},"Any additional custom parameters required for the connection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSL"),(0,n.kt)("td",{parentName:"tr",align:null},"Toggle for SSL configuration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSH Tunnel"),(0,n.kt)("td",{parentName:"tr",align:null},"Toggle for SSH tunnel configuration.")))),(0,n.kt)("h3",{id:"google-sheets"},"Google Sheets"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Google Sheets. Pick a nickname for how the database will display in dashboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Type of Google Sheets allowed"),(0,n.kt)("td",{parentName:"tr",align:null},"Connect Google Sheets as tables to this database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Google Sheet Name and URL"),(0,n.kt)("td",{parentName:"tr",align:null},"Enter a name for this sheet. Paste the shareable Google Sheet URL here.")))),(0,n.kt)("h3",{id:"mysql"},"MySQL"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"MySQL. Pick a name to help you identify this database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQLAlchemy URI"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"dialect+driver://username:password@host:port/database")," Refer to the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/13/core/engines.html"},"SQLAlchemy docs")," for more information on structuring your URI.")))),(0,n.kt)("h4",{id:"using-dynamic-form-2"},"Using Dynamic Form"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host"),(0,n.kt)("td",{parentName:"tr",align:null},"The hostname or IP address of the database server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port"),(0,n.kt)("td",{parentName:"tr",align:null},"The port number on which the database server is listening.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Database name"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the database you are trying to connect to.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"The username for authenticating with the database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password"),(0,n.kt)("td",{parentName:"tr",align:null},"The password for authenticating with the database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Pick a nickname for how the database will display in dashboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Additional Parameters"),(0,n.kt)("td",{parentName:"tr",align:null},"Any additional custom parameters required for the connection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSL"),(0,n.kt)("td",{parentName:"tr",align:null},"Toggle for SSL configuration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSH Tunnel"),(0,n.kt)("td",{parentName:"tr",align:null},"Toggle for SSH tunnel configuration.")))),(0,n.kt)("h3",{id:"postgresql"},"PostgreSQL"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"PostgreSQL. Pick a name to help you identify this database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQLAlchemy URI"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"dialect+driver://username:password@host:port/database")," Refer to the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/13/core/engines.html"},"SQLAlchemy docs")," for more information on structuring your URI.")))),(0,n.kt)("h4",{id:"using-dynamic-form-3"},"Using Dynamic Form"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host"),(0,n.kt)("td",{parentName:"tr",align:null},"The hostname or IP address of the database server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port"),(0,n.kt)("td",{parentName:"tr",align:null},"The port number on which the database server is listening.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Database name"),(0,n.kt)("td",{parentName:"tr",align:null},"The name of the database you are trying to connect to.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"The username for authenticating with the database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password"),(0,n.kt)("td",{parentName:"tr",align:null},"The password for authenticating with the database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Pick a nickname for how the database will display in dashboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Additional Parameters"),(0,n.kt)("td",{parentName:"tr",align:null},"Any additional custom parameters required for the connection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSL"),(0,n.kt)("td",{parentName:"tr",align:null},"Toggle for SSL configuration.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSH Tunnel"),(0,n.kt)("td",{parentName:"tr",align:null},"Toggle for SSH tunnel configuration.")))),(0,n.kt)("h3",{id:"presto"},"Presto"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Presto. Pick a name to help you identify this database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQLAlchemy URI"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"engine+driver://user:password@host:port/dbname[?key=value&key=value...]")," Refer to the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/13/core/engines.html"},"SQLAlchemy docs")," for more information on structuring your URI.")))),(0,n.kt)("h3",{id:"shillelagh"},"Shillelagh"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Shillelagh. Pick a name to help you identify this database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQLAlchemy URI"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"shillelagh://")," Refer to the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/13/core/engines.html"},"SQLAlchemy docs")," for more information on structuring your URI.")))),(0,n.kt)("h3",{id:"sqlite"},"SQLite"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"SQLite. Pick a name to help you identify this database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQLAlchemy URI"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"engine+driver://user:password@host:port/dbname[?key=value&key=value...]")," Refer to the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/13/core/engines.html"},"SQLAlchemy docs")," for more information on structuring your URI.")))),(0,n.kt)("h3",{id:"trino"},"Trino"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Trino. Pick a name to help you identify this database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SQLAlchemy URI"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"engine+driver://user:password@host:port/dbname[?key=value&key=value...]")," Refer to the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.sqlalchemy.org/en/13/core/engines.html"},"SQLAlchemy docs")," for more information on structuring your URI.")))),(0,n.kt)("h2",{id:"advanced-configuration"},"Advanced Configuration"),(0,n.kt)("figure",null,(0,n.kt)(r.Z,{src:"/img/dhq-dashboard/working-with-data/connect-database/dbadv.jpeg",alt:"List of DB",mdxType:"Thumbnail"})),(0,n.kt)("h3",{id:"sql-labs"},"SQL Labs"),(0,n.kt)("p",null,"SQL Labs allows you to adjust how the database interacts with SQL Lab, providing fine control over SQL operations and user interactions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Expose Database in SQL Lab: Enable or disable the database's visibility in SQL Lab."),(0,n.kt)("li",{parentName:"ul"},"Allow CREATE TABLE AS: Permit the creation of new tables using the CREATE TABLE AS statement."),(0,n.kt)("li",{parentName:"ul"},"Allow CREATE VIEW AS: Permit the creation of new views using the CREATE VIEW AS statement."),(0,n.kt)("li",{parentName:"ul"},"Allow DML: Enable Data Manipulation Language (DML) operations like INSERT, UPDATE, DELETE."),(0,n.kt)("li",{parentName:"ul"},"Enable Query Cost Estimation: Allow estimation of query costs before execution."),(0,n.kt)("li",{parentName:"ul"},"Allow This Database to be Explored: Permit users to explore the database."),(0,n.kt)("li",{parentName:"ul"},"Disable SQL Lab Data Preview Queries: Prevent data preview queries in SQL Lab to improve performance."),(0,n.kt)("li",{parentName:"ul"},"Enable Row Expansion in Schemas: Allow expansion of rows in schemas for detailed views.")),(0,n.kt)("h3",{id:"performance"},"Performance"),(0,n.kt)("p",null,"Performance settings ensure optimal database interaction and response times:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Chart Cache Timeout: Define the caching timeout duration for charts in seconds. A timeout of 0 indicates the cache never expires, while -1 bypasses the cache entirely. If undefined, it defaults to the global timeout."),(0,n.kt)("li",{parentName:"ul"},"Schema Cache Timeout: Set the metadata caching timeout for schemas in seconds. Leaving it unset means the cache never expires."),(0,n.kt)("li",{parentName:"ul"},"Table Cache Timeout: Define the metadata caching timeout for tables in seconds. If unset, the cache never expires."),(0,n.kt)("li",{parentName:"ul"},"Asynchronous Query Execution: Enable asynchronous execution of queries to enhance performance."),(0,n.kt)("li",{parentName:"ul"},"Cancel Query on Window Unload Event: Automatically cancel queries when the browser window is closed.")),(0,n.kt)("h3",{id:"security"},"Security"),(0,n.kt)("p",null,"Security settings add extra layers of connection information and control:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Secure Extra: Provide additional connection configuration as a JSON string. This is particularly useful for systems like Hive, Presto, and BigQuery, which do not conform to the standard username:password syntax."),(0,n.kt)("li",{parentName:"ul"},"Root Certificate: Enter CA_BUNDLE contents to validate HTTPS requests. This option is available for certain database engines."),(0,n.kt)("li",{parentName:"ul"},"Impersonate Logged-In User: Allow impersonation of the logged-in user for specific databases like Presto, Trino, Drill, Hive, and Google Sheets."),(0,n.kt)("li",{parentName:"ul"},"Allow File Uploads to Database: Enable the ability to upload files directly to the database.")),(0,n.kt)("h3",{id:"other"},"Other"),(0,n.kt)("p",null,"Additional settings provide further customization options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Metadata Parameters: Configure the ",(0,n.kt)("inlineCode",{parentName:"li"},"metadata_params")," object, which gets unpacked into the ",(0,n.kt)("inlineCode",{parentName:"li"},"sqlalchemy.MetaData")," call."),(0,n.kt)("li",{parentName:"ul"},"Engine Parameters: Set the ",(0,n.kt)("inlineCode",{parentName:"li"},"engine_params")," object, which is unpacked into the ",(0,n.kt)("inlineCode",{parentName:"li"},"sqlalchemy.create_engine")," call."),(0,n.kt)("li",{parentName:"ul"},"Version: Specify the database version number. This is important for databases like Presto for query cost estimation and Dremio for syntax changes.")),(0,n.kt)("h2",{id:"import--export-a-database"},"Import & Export a Database"),(0,n.kt)("h3",{id:"import-a-database"},"Import a Database"),(0,n.kt)("p",null,"If you have an archived database connection file (e.g., ZIP), then you can import it directly to DronaHQ Dashboard. The steps are similar to adding a database, just in place of selecting a database you have to select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Import Datbase from File")," option and it will open a window to upload files from your system."),(0,n.kt)("div",{style:{position:"relative",paddingBottom:"calc(46.33333333333333% + 41px)",height:0}},(0,n.kt)("iframe",{src:"https://demo.arcade.software/aXryhiWVu230agFCGAyH?embed",title:"Theme Creation",frameborder:"0",loading:"lazy",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,n.kt)("br",null),(0,n.kt)("admonition",{title:"Overwrite Warning",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you are importing a file for a database that already exists, you will be prompted to confirm the process by entering the word ",(0,n.kt)("inlineCode",{parentName:"p"},"overwrite")," before selecting Connect."),(0,n.kt)("figure",null,(0,n.kt)(r.Z,{src:"/img/dhq-dashboard/working-with-data/connect-database/import-caution.jpeg",alt:"List of DB",mdxType:"Thumbnail"}))),(0,n.kt)("h3",{id:"export-a-database"},"Export a Database"),(0,n.kt)("p",null,"Go to the list of connectors already connected in dashboard and select the export option to export the particular database in an archived database connection file (e.g., ZIP)."),(0,n.kt)("div",{style:{position:"relative",paddingBottom:"calc(46.33333333333333% + 41px)",height:0}},(0,n.kt)("iframe",{src:"https://demo.arcade.software/Hth0twbIFI82Lt4YpFwt?embed",title:"Theme Creation",frameborder:"0",loading:"lazy",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,n.kt)("br",null))}k.isMDXComponent=!0}}]);