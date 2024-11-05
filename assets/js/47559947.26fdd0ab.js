"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[47958],{15343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});n(67294);var a=n(3905),i=n(86291);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={sidebar_position:1,title:"Connector queries"},u="Connector queries",c={unversionedId:"binding-data/data-queries/connector-queries",id:"binding-data/data-queries/connector-queries",title:"Connector queries",description:"DronaHQ enables your controls to interact with various data sources by using data queries. With DronaHQ, you can seamlessly query most databases and APIs.",source:"@site/docs/binding-data/data-queries/connector-queries.md",sourceDirName:"binding-data/data-queries",slug:"/binding-data/data-queries/connector-queries",permalink:"/binding-data/data-queries/connector-queries",draft:!1,tags:[],version:"current",lastUpdatedAt:1720087754,formattedLastUpdatedAt:"Jul 4, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Connector queries"},sidebar:"docSidebar",previous:{title:"Connector library",permalink:"/binding-data/data-queries/connector-library"},next:{title:"Custom JS",permalink:"/binding-data/data-queries/custom-js"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sections in connector query",id:"sections-in-connector-query",level:2},{value:"Query editor",id:"query-editor",level:3},{value:"Schema",id:"schema",level:3},{value:"Test values",id:"test-values",level:3},{value:"Response",id:"response",level:3},{value:"Failure conditions",id:"failure-conditions",level:3},{value:"Transform",id:"transform",level:3}],h={toc:p},y="wrapper";function m(e){var{components:t}=e,n=s(e,["components"]);return(0,a.kt)(y,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connector-queries"},"Connector queries"),(0,a.kt)("p",null,"DronaHQ enables your controls to interact with various data sources by using data queries. With DronaHQ, you can seamlessly query most databases and APIs."),(0,a.kt)("p",null,"Lets say you can set your Tablegrid's data to be ",(0,a.kt)("inlineCode",{parentName:"p"},"{{data_query1.data}}")," where your data query is selecting data from an SQL, and the Tablegrid will then display data from data_query1. Also you can run a data query on click of a Button to trigger a specific action, such as {{update_data}}, which can initiate an API POST request."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/data-queries/connector-query.png",alt:"Connector Query",width:"100%",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Connector Query"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To start using direct connector queries in your app builder, you need a connector in place already. It could be a Database or an API connector. Once the connector is in place, you can query into it with a choice of editors depending on what type of a connector is configured. "),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/data-queries/existing-connector.png",alt:"Existing connector",width:"100%",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Configured connectors' list"))),(0,a.kt)("admonition",{title:"Querying into an API",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We also consider adding an API endpoint as a data query. The prerequisite being that the connector category needs to be already configured.")),(0,a.kt)("h2",{id:"sections-in-connector-query"},"Sections in connector query"),(0,a.kt)("p",null,"While you want to write a connector query which will be eventually referenced in any of the controls like a Tablegrid, you need to start off navigating to ",(0,a.kt)("inlineCode",{parentName:"p"},"Data queries -> New -> Connector query"),". Please note that you need not have the query already added in the library, you can create these queries on the fly.\nAll the queries added will be available to edit or access only in that particular app and will not be available at the account level. "),(0,a.kt)("p",null,"While adding the connector query you will see the following sections"),(0,a.kt)("h3",{id:"query-editor"},"Query editor"),(0,a.kt)("p",null,"Depending on which connector you choose, the appropriate query editor will be initialized for the best experience of writing the query. In this example we have an SQL editor since the connector selected is a MySQL type of a connector. Similarly for graphQL, No SQL, REST APIS, Firebase etc. will have their own unique editors. An example of writing a query in the SQL editor is as below with a dynamic variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM products WHERE id = {{dropdown}}\n")),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/data-queries/query-editor.png",alt:"Query Editor",width:"100%",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Query Editor"))),(0,a.kt)("h3",{id:"schema"},"Schema"),(0,a.kt)("p",null,"While building your queries the schema of your tables (in case of SQL) comes handy. This section provides with a blueprint of the whole schema or the database down to the column type. "),(0,a.kt)("admonition",{title:"Empty schema",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"There are times when some type of data sources don't allow fetching of schemas or the added credentials don't have the privilege of fetching schemas. In this case the section will be empty.")),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/data-queries/database-schema.png",alt:"Database schema",width:"100%",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Database schemas"))),(0,a.kt)("h3",{id:"test-values"},"Test values"),(0,a.kt)("p",null,"When you have dynamic variables in your query like ",(0,a.kt)("inlineCode",{parentName:"p"},"{{dropdown}}")," you might want to change the values in it and test the query to check your responses. This is the reason the test values can be modified to try out different cases with your query. In this example you can see the test value of the dropdown is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"Folder")," and the query is built with the same value. "),(0,a.kt)("admonition",{title:"Test values",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This section comes in handy even while configuring the failure conditions for different scenarios and/or users and simulate. ")),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/data-queries/test-values.png",alt:"Test values",width:"100%",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Test values"))),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("p",null,"You will see the response of your query in this section when you test. You can toggle between viewing tabular data or JSON type of data depending on the format of the response data. In this case since we had an SQL SELECT query, we had an array of object type of data which we can view in tabular as well as json format. "),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/data-queries/tabular-response.png",alt:"Tabular response data",width:"100%",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Response in tabular format"))),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/data-queries/json-response.png",alt:"JSON response data",width:"100%",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Response data in JSON format"))),(0,a.kt)("h3",{id:"failure-conditions"},"Failure conditions"),(0,a.kt)("p",null,"There are times when there would be non 2XX responses from an API with specific conditions (e.g. 403 forbidden response) and you might want to handle the same with custom response messages to the user. You can configure ",(0,a.kt)("inlineCode",{parentName:"p"},"Failure conditions")," in this case. "),(0,a.kt)("p",null,"You have the following keywords available to build your failure conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OUTPUT")," - Output json keys"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ERROR")," - Error keys"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"STATUSCODE")," - HTTP status code received from the target connector"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"STATUSMESSAGE")," - HTTP status message received from the target connector")),(0,a.kt)("p",null,"Typical example would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{{STATUSCODE == 403}}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{{OUTPUT[0].id == null}}\n")),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/data-queries/failure-condition.png",alt:"Failure condition",width:"100%",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Example: Failure condition"))),(0,a.kt)("h3",{id:"transform"},"Transform"),(0,a.kt)("p",null,"This sections is exactly same as the one in the ",(0,a.kt)("a",{parentName:"p",href:"/binding-data/data-queries/connector-library/#transform-response"},"connector library.")),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/data-queries/transform-section.png",alt:"Transform response",width:"100%",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Transform response section"))))}m.isMDXComponent=!0}}]);