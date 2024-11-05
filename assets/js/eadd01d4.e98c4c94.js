"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[53490],{50551:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l={tabItem:"tabItem_Ymn6"};function o({children:e,hidden:t,className:n}){return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,n),hidden:t},e)}},93070:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(67294),a=n(86010),l=n(6379),o=n(16550),i=n(47348),u=n(83928),c=n(76632);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e){return function(e){var t,n;return null!==(n=null===(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==n?n:[]}(e).map((({props:{value:e,label:t,attributes:n,default:r}})=>({value:e,label:t,attributes:n,default:r})))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b({value:e,tabValues:t}){return t.some((t=>t.value===e))}function f({queryString:e=!1,groupId:t}){const n=(0,o.k6)(),a=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),l=(0,i._X)(a),u=(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace(d(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({},n.location),{search:t.toString()}))}),[a,n]);return[l,u]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,i]=(0,r.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var n;const r=null!==(n=t.find((e=>e.default)))&&void 0!==n?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:n,groupId:a}),[d,p]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[n,a]=(0,c.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:a}),y=(()=>{const e=null!=u?u:d;return b({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),p(e)}),[s,p,l]),tabValues:l}}var g=n(30358);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function v(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function N({className:e,block:t,selectedValue:n,selectValue:o,tabValues:i}){const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),s=e=>{const t=e.currentTarget,r=u.indexOf(t),a=i[r].value;a!==n&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;var n;t=null!==(n=u[r])&&void 0!==n?n:u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;var r;t=null!==(r=u[n])&&void 0!==r?r:u[u.length-1];break}}null==t||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e)},i.map((({value:e,label:t,attributes:l})=>r.createElement("li",v(O({role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,key:e,ref:e=>u.push(e),onKeyDown:d,onClick:s},l),{className:(0,a.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":n===e})}),null!=t?t:e))))}function w({lazy:e,children:t,selectedValue:n}){const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function P(e){const t=y(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",k.tabList)},r.createElement(N,O({},e,t)),r.createElement(w,O({},e,t)))}function j(e){const t=(0,g.Z)();return r.createElement(P,O({key:String(t)},e))}},67405:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(31984);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i=e=>{var{to:t}=e,n=o(e,["to"]);return r.createElement(a.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({to:`${t}`},n))}},70987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>f});n(67294);var r=n(3905),a=n(67405),l=n(86291),o=n(93070),i=n(50551);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const d={sidebar_position:1,title:"Oracle"},p=void 0,m={unversionedId:"reference/connectors/oracle",id:"reference/connectors/oracle",title:"Oracle",description:"Oracle is an open-source object-relational database system that allows you to safely store and scale the different data",source:"@site/docs/reference/connectors/oracle.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/oracle",permalink:"/reference/connectors/oracle",draft:!1,tags:[],version:"current",lastUpdatedAt:1728290300,formattedLastUpdatedAt:"Oct 7, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Oracle"},sidebar:"docSidebar",previous:{title:"OpenAI",permalink:"/reference/connectors/openai"},next:{title:"PostgreSQL",permalink:"/reference/connectors/postgresql"}},b={},f=[{value:"Configuring Connector",id:"configuring-connector",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Connector Setup in DronaHQ",id:"connector-setup-in-dronahq",level:3},{value:"General",id:"general",level:4},{value:"Admin",id:"admin",level:4},{value:"Adding Database Queries",id:"adding-database-queries",level:2},{value:"Supported Query Operations",id:"supported-query-operations",level:2},{value:"Using Oracle Connector",id:"using-oracle-connector",level:2},{value:"Data Bind using Data Query",id:"data-bind-using-data-query",level:3},{value:"Read/Display Data Query for Oracle:",id:"readdisplay-data-query-for-oracle",level:4}],y={toc:f},g="wrapper";function k(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)(g,c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({},y,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Oracle is an open-source object-relational database system that allows you to safely store and scale the different data\nworkloads."),(0,r.kt)("h2",{id:"configuring-connector"},"Configuring Connector"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Authentication Credentials: Gather necessary credentials for connecting to your Oracle instance.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connection Details:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Hostname of the Oracle database."),(0,r.kt)("li",{parentName:"ul"},"Port number for database access."),(0,r.kt)("li",{parentName:"ul"},"Database name within the Oracle host."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Firewall Rules:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set up firewall settings to permit DronaHQ (IP whitelist) access to your Oracle host.")))),(0,r.kt)("p",null,"Ensure these prerequisites are met for a smooth Oracle integration with DronaHQ, enabling efficient data management."),(0,r.kt)("h3",{id:"connector-setup-in-dronahq"},"Connector Setup in DronaHQ"),(0,r.kt)("p",null,"Configure your database category using the provided details. Validate connection with ",(0,r.kt)("inlineCode",{parentName:"p"},"Test connection")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Save"),"\nsettings for secure database setup."),(0,r.kt)("h4",{id:"general"},"General"),(0,r.kt)("figure",null,(0,r.kt)(l.Z,{src:"/img/reference/connectors/oracle/details.png",alt:"Oracle with Sample details.",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Oracle with Sample details."))),(0,r.kt)(o.Z,{groupId:"configuration",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"version-1",label:"Version 1",mdxType:"TabItem"},(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host"),(0,r.kt)("td",{parentName:"tr",align:null},"Please enter the Host Domain or IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Please enter the Port number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Please enter the Database name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Please enter the Username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Please enter the Password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Treat Database Name as SID"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable this option to interpret the database name as the System Identifier (SID) for the connection.")))),(0,r.kt)("figure",null,(0,r.kt)(l.Z,{src:"/img/reference/connectors/oracle/version1.jpeg",alt:"Oracle with Sample details.",mdxType:"Thumbnail"}))),(0,r.kt)(i.Z,{value:"version-2",label:"Version 2",mdxType:"TabItem"},(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Please enter the Username.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Please enter the Password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection String"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the connection string in the format ",(0,r.kt)("inlineCode",{parentName:"td"},"mydbmachine.example.com:1984/orclpdb1"),".")))),(0,r.kt)("figure",null,(0,r.kt)(l.Z,{src:"/img/reference/connectors/oracle/version2.jpeg",alt:"Oracle with Sample details.",mdxType:"Thumbnail"})))),(0,r.kt)("h4",{id:"admin"},"Admin"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Advanced Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection Options"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," connection options in the database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use Dynamic Database Host"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamically determine the host for the database connection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use Dynamic Database Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the database name dynamically, allowing easy switching between databases.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(a.Z,{to:"/datasource-concepts/dynamic-credentials/#configure-dynamic-credentials",mdxType:"VersionedLink"}," Use Dynamic Database Credentials ")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable dynamic database credentials for secure and convenient management.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(a.Z,{to:"/datasource-concepts/ssl-configurations/",mdxType:"VersionedLink"}," Connect using SSL ")),(0,r.kt)("td",{parentName:"tr",align:null},"Securely access the database using an encrypted SSL connection, ensuring data integrity and confidentiality.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(a.Z,{to:"/datasource-concepts/whitelisting-dronahq-ip/",mdxType:"VersionedLink"}," Whitelist IP ")),(0,r.kt)("td",{parentName:"tr",align:null},"Enhance security by restricting database access to specific whitelisted IP addresses.")))),(0,r.kt)("h2",{id:"adding-database-queries"},"Adding Database Queries"),(0,r.kt)("p",null,"Once the connector is configured, access it in your Connector Library. Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add query")," after connection setup. Create\nqueries, run them, and view responses."),(0,r.kt)("figure",null,(0,r.kt)(l.Z,{src:"/img/reference/connectors/oracle/data-query.jpeg",alt:"Write Queries",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Write Queries"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to controls/actions for runtime use. ")),(0,r.kt)("p",null,"Saved queries appear under your connector in Connector Library."),(0,r.kt)("h2",{id:"supported-query-operations"},"Supported Query Operations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operations"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raw SQL Query"),(0,r.kt)("td",{parentName:"tr",align:null},"Various ",(0,r.kt)("inlineCode",{parentName:"td"},"select, insert, delete, update"),", join operations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stored Procedure Call"),(0,r.kt)("td",{parentName:"tr",align:null},"Call stored procedures e.g., ",(0,r.kt)("inlineCode",{parentName:"td"},"CALL getUserInfo;"))))),(0,r.kt)("h2",{id:"using-oracle-connector"},"Using Oracle Connector"),(0,r.kt)("h3",{id:"data-bind-using-data-query"},"Data Bind using Data Query"),(0,r.kt)("h4",{id:"readdisplay-data-query-for-oracle"},"Read/Display Data Query for Oracle:"),(0,r.kt)("p",null,"Begin by crafting an SQL query to extract data from your Oracle database. For instance, let's consider an example where\nyou want to retrieve all data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authors")," table. The SQL query is:"),(0,r.kt)("p",null,"Query used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM Authors;\n")),(0,r.kt)("p",null,"Query explanation:"),(0,r.kt)("p",null,"This SQL query retrieves all rows and columns from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authors")," table within the Oracle database."),(0,r.kt)("figure",null,(0,r.kt)(l.Z,{src:"/img/reference/connectors/oracle/getall.jpeg",alt:"Get all data query.",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Get all data query."))),(0,r.kt)("p",null,"Integrate the fetched data into your application's interface."),(0,r.kt)("p",null,"a. Access the Controls section and introduce the Table grid control."),(0,r.kt)("p",null,"b. Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Bind Options -> Quick Select -> Connector Library."),"."),(0,r.kt)("p",null,"c. Opt for the Oracle connector and choose the query that aligns with your data presentation goals."),(0,r.kt)("p",null,"By following these steps, you can seamlessly incorporate the retrieved data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authors")," table into your\napplication's interface, enhancing its functionality and user experience."))}k.isMDXComponent=!0}}]);