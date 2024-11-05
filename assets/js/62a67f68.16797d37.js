"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[58072],{67405:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(31984);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l=e=>{var{to:t}=e,n=o(e,["to"]);return a.createElement(r.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){i(e,t,n[t])}))}return e}({to:`${t}`},n))}},91478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>m});n(67294);var a=n(3905),r=n(67405),i=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={sidebar_position:1,title:"Amazon Athena"},u=void 0,d={unversionedId:"reference/connectors/amazon-athena",id:"reference/connectors/amazon-athena",title:"Amazon Athena",description:"Amazon Athena: Query data in Amazon S3 using SQL. Serverless and cost-effective, it delivers quick insights from diverse",source:"@site/docs/reference/connectors/amazon-athena.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/amazon-athena",permalink:"/reference/connectors/amazon-athena",draft:!1,tags:[],version:"current",lastUpdatedAt:1722488535,formattedLastUpdatedAt:"Aug 1, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Amazon Athena"},sidebar:"docSidebar",previous:{title:"Airtable",permalink:"/reference/connectors/airtable"},next:{title:"Amazon DocumentDB",permalink:"/reference/connectors/amazon-documentdb"}},p={},m=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring Connector in DronaHQ",id:"configuring-connector-in-dronahq",level:2},{value:"Get AWS Credentials",id:"get-aws-credentials",level:3},{value:"General",id:"general",level:4},{value:"Admin",id:"admin",level:4},{value:"Adding Database Queries",id:"adding-database-queries",level:2},{value:"Supported Query Operations",id:"supported-query-operations",level:2},{value:"Using Amazon Athena Connector",id:"using-amazon-athena-connector",level:2},{value:"Data Bind using Data Query",id:"data-bind-using-data-query",level:3},{value:"Read/Display Data Query for Amazon Athena:",id:"readdisplay-data-query-for-amazon-athena",level:4}],h={toc:m},k="wrapper";function g(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Amazon Athena: Query data in Amazon S3 using SQL. Serverless and cost-effective, it delivers quick insights from diverse\ndatasets without data transformations, ideal for ad-hoc analysis and business intelligence."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Authentication Requirements: To establish a connection with your Amazon Athena instance, you will need specific\nauthentication credentials. You have the option to use either of the following authentication methods:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AWS Identity and Access Management (IAM) user credentials."),(0,a.kt)("li",{parentName:"ul"},"AWS access key and secret key."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connection Details:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Amazon Athena query execution endpoint (usually ",(0,a.kt)("inlineCode",{parentName:"li"},"athena.{region}.amazonaws.com"),")."),(0,a.kt)("li",{parentName:"ul"},"The designated AWS region where your Amazon Athena instance is located."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Permissions and Access Control:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ensure that the IAM user or role being used for authentication has appropriate permissions to access Amazon Athena\nand the required data sources."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Setting Permissions: Before using Amazon Athena, the administrator needs to configure permissions and access\nsettings:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Amazon S3 Locations: Set permissions for Amazon S3 locations where the underlying data for queries is stored. More\ninformation on setting up IAM permissions for Amazon S3 can be found in the\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html"},"Amazon Simple Storage Service Developer Guide"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"AWS Glue Data Catalog: Configure permissions for metadata and resources stored in the AWS Glue Data Catalog. This\nincludes databases and tables, as well as additional actions for encrypted metadata. For detailed steps, refer to\nthe articles on\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/create-an-iam-role-s3-crawler-cli.html"},"Setting Up IAM Permissions for AWS Glue"),"\nand\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html"},"Setting Up Encryption in AWS Glue"),"\nin the AWS Glue Developer Guide."))))),(0,a.kt)("h2",{id:"configuring-connector-in-dronahq"},"Configuring Connector in DronaHQ"),(0,a.kt)("p",null,"Configure your database category using the provided details. Validate connection with ",(0,a.kt)("inlineCode",{parentName:"p"},"Test connection")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Save"),"\nsettings for secure database setup."),(0,a.kt)("h3",{id:"get-aws-credentials"},"Get AWS Credentials"),(0,a.kt)("p",null,"To connect to Amazon Athena, you'll need AWS Access and Secret Keys. If you have existing keys, you can use them.\nOtherwise, follow these steps to create new keys:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to AWS Management Console."),(0,a.kt)("li",{parentName:"ol"},"Click your account name and select ",(0,a.kt)("inlineCode",{parentName:"li"},"My Security Credentials."))),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access Keys")," section, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create New Access Key")," and provide a name (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"athena"),"). You can attach the\nrecommended ",(0,a.kt)("inlineCode",{parentName:"p"},"AthenaFullAccess")," policy."),(0,a.kt)("p",null,"Remember to securely store the provided AWS Access Key ID and AWS Secret Access Key and avoid sharing them openly. These\nkeys are essential for authorized access to Amazon Athena."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/amazon-athena/account-creds.jpeg",alt:"Account Credentials",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Account Credentials"))),(0,a.kt)("h4",{id:"general"},"General"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AWS Region"),(0,a.kt)("td",{parentName:"tr",align:null},"Please enter the AWS region where your resources are")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"located, such as 'us-east-1' or 'eu-west-2'.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"S3 Output Location"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the S3 output location in the format: s3://bucket/folder")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Data Source"),(0,a.kt)("td",{parentName:"tr",align:null},"Please enter the data source.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AWS Access Key"),(0,a.kt)("td",{parentName:"tr",align:null},"Please enter the AWS access key.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AWS Secret Key"),(0,a.kt)("td",{parentName:"tr",align:null},"Please enter the AWS secret key.")))),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/amazon-athena/details.jpeg",alt:"Amazon Athena with Sample details.",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Amazon Athena with Sample details."))),(0,a.kt)("h4",{id:"admin"},"Admin"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Advanced Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Connection Options"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"key")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"value")," connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(r.Z,{to:"/datasource-concepts/whitelisting-dronahq-ip/",mdxType:"VersionedLink"}," Whitelist IP ")),(0,a.kt)("td",{parentName:"tr",align:null},"Enhance security by restricting database access to specific whitelisted IP addresses.")))),(0,a.kt)("h2",{id:"adding-database-queries"},"Adding Database Queries"),(0,a.kt)("p",null,"After configuring the connector, access it in your Connector Library."),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add query")," once the connection is established. Create queries, run them, and view responses."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/amazon-athena/query.png",alt:"Write Queries",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Write Queries"))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to\ncontrols/actions for runtime use. ")),(0,a.kt)("p",null,"Saved queries appear under your connector in Connector Library."),(0,a.kt)("h2",{id:"supported-query-operations"},"Supported Query Operations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operations"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Raw SQL Query"),(0,a.kt)("td",{parentName:"tr",align:null},"Execute various SQL operations directly, e.g., ",(0,a.kt)("inlineCode",{parentName:"td"},"SELECT * FROM TableName;"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stored Procedure Call"),(0,a.kt)("td",{parentName:"tr",align:null},"Call stored procedures, e.g., ",(0,a.kt)("inlineCode",{parentName:"td"},"EXEC usp_GetInfo;")," to perform specific tasks or retrieve data from the database.")))),(0,a.kt)("h2",{id:"using-amazon-athena-connector"},"Using Amazon Athena Connector"),(0,a.kt)("h3",{id:"data-bind-using-data-query"},"Data Bind using Data Query"),(0,a.kt)("h4",{id:"readdisplay-data-query-for-amazon-athena"},"Read/Display Data Query for Amazon Athena:"),(0,a.kt)("p",null,"Begin by constructing an SQL query to extract data from your Amazon Athena database. For example, let's consider a\nscenario where you want to retrieve all data from the ",(0,a.kt)("inlineCode",{parentName:"p"},"AwsCatalog.logs")," table. The SQL query is:"),(0,a.kt)("p",null,"Query used:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM AwsCatalog.logs;\n")),(0,a.kt)("p",null,"Query explanation:"),(0,a.kt)("p",null,"This SQL query retrieves all rows and columns from the ",(0,a.kt)("inlineCode",{parentName:"p"},"AwsCatalog.logs")," table within the Amazon Athena database."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/connectors/amazon-athena/query.png",alt:"Query example for retrieving data from Amazon Athena.",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Query example for retrieving data from Amazon Athena."))),(0,a.kt)("p",null,"Integrate the fetched data into your application's interface."),(0,a.kt)("p",null,"a. Access the Controls section and introduce the Table grid control."),(0,a.kt)("p",null,"b. Navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Data Bind Options -> Quick Select -> Connector Library"),"."),(0,a.kt)("p",null,"c. Opt for the Amazon Athena connector and choose the query that aligns with your data presentation goals."))}g.isMDXComponent=!0}}]);