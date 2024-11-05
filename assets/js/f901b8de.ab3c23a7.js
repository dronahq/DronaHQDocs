"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[67639],{31570:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});o(67294);var r=o(3905),n=o(86291);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const s={sidebar_position:1},l="Global query library",u={unversionedId:"datasource-concepts/global-query-library",id:"datasource-concepts/global-query-library",title:"Global query library",description:"DronaHQ offers comprehensive support for numerous third-party services, which can be seamlessly integrated as data sources and utilized as resources within your app. With a broad spectrum of data source integrations, DronaHQ enables you to effortlessly connect to nearly any database or API.",source:"@site/docs/datasource-concepts/global-query-library.md",sourceDirName:"datasource-concepts",slug:"/datasource-concepts/global-query-library",permalink:"/datasource-concepts/global-query-library",draft:!1,tags:[],version:"current",lastUpdatedAt:1692255300,formattedLastUpdatedAt:"Aug 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Dynamic Database Configurations",permalink:"/datasource-concepts/dynamic-credentials"},next:{title:"Importing from openAPI 3.0 specs",permalink:"/datasource-concepts/importing-from-openapi"}},d={},p=[{value:"Connector library",id:"connector-library",level:2},{value:"Create new data source",id:"create-new-data-source",level:2},{value:"Connector option",id:"connector-option",level:3},{value:"Import from JSON",id:"import-from-json",level:3},{value:"Import from AWS",id:"import-from-aws",level:3}],g={toc:p},m="wrapper";function f(e){var{components:t}=e,o=c(e,["components"]);return(0,r.kt)(m,i(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){a(e,t,o[t])}))}return e}({},g,o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"global-query-library"},"Global query library"),(0,r.kt)("p",null,"DronaHQ offers comprehensive support for numerous third-party services, which can be seamlessly integrated as data sources and utilized as resources within your app. With a broad spectrum of data source integrations, DronaHQ enables you to effortlessly connect to nearly any database or API."),(0,r.kt)("figure",null,(0,r.kt)(n.Z,{src:"/img/connecting-datasource/concepts/global-query-library/create-data-source-sidebar.png",alt:"Create a new data source",width:"70%",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Create a new data source"))),(0,r.kt)("admonition",{title:"Create and use across multiple apps",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To create and utilize the same data source across multiple apps, you have two options. You can either create the data source through the connector listing page on the DronaHQ dashboard or use the connectors tab inside the DronaHQ app.")),(0,r.kt)("h2",{id:"connector-library"},"Connector library"),(0,r.kt)("p",null,"You can access all the data sources created within your account by navigating to the \"Connector\" option located on the left side of the DronaHQ dashboard. You can add sub queries to the data sources by clicking on the 'Add API' option. Additionally, you'll find more options represented by three dots (...) which allow you to perform various actions, including editing the configured resources, deleting and renaming data sources, setting permissions for users or groups, exporting data source, and adding resources for different data environments."),(0,r.kt)("figure",null,(0,r.kt)(n.Z,{src:"/img/connecting-datasource/concepts/global-query-library/connector-listing.png",alt:"Data source section",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Data source section"))),(0,r.kt)("h2",{id:"create-new-data-source"},"Create new data source"),(0,r.kt)("p",null,"To create a new data source, click on the '+ Connector' option at the top right corner and select the appropriate creation method. The available methods include 'Connector,' which opens a tray displaying various supported Databases and API data source integrations by DronaHQ. Alternatively, you can add a new data source by importing a JSON file from another DronaHQ account using the 'Import from JSON' option. Additionally, you have the option to import data sources stored in AWS by selecting the 'Import from AWS' option. "),(0,r.kt)("figure",null,(0,r.kt)(n.Z,{src:"/img/connecting-datasource/concepts/global-query-library/create-new-data-source.png",alt:"Create data source options",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Create data source options"))),(0,r.kt)("h3",{id:"connector-option"},"Connector option"),(0,r.kt)("p",null,"Choose the desired data source from the integration list, and proceed to configure it by adding the necessary resources/credentials. Afterward, perform a test to ensure everything is working correctly, and once verified, save the configuration."),(0,r.kt)("figure",null,(0,r.kt)(n.Z,{src:"/img/connecting-datasource/concepts/global-query-library/rest-api-configuration.png",alt:"REST API configuration",width:"70%",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"REST API configuration"))),(0,r.kt)("h3",{id:"import-from-json"},"Import from JSON"),(0,r.kt)("p",null,'To begin, upload a valid connector JSON file from your local machine, and then click on "Continue." Keep in mind that sensitive fields like passwords cannot be imported since they are not stored in the exported connector JSON file. Therefore, you will need to configure these sensitive fields before proceeding with testing and saving the connector.'),(0,r.kt)("figure",null,(0,r.kt)(n.Z,{src:"/img/connecting-datasource/concepts/global-query-library/import-connector-json-file.png",alt:"Import connector json file",width:"70%",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Import connector json file"))),(0,r.kt)("h3",{id:"import-from-aws"},"Import from AWS"),(0,r.kt)("p",null,"AWS Import simplifies the process of populating credentials from Amazon RDS into the DronaHQ data source automatically. Supported DB Engines include MySQL, PostgreSQL, Microsoft SQL Server, and MariaDB. To import, just choose the desired DB Engine, AWS region, and database name. Then, click the import button, which will automatically populate essential details such as port number, hostname, username, etc. After that, you can proceed to test the connector, and upon successful connection, save it."),(0,r.kt)("figure",null,(0,r.kt)(n.Z,{src:"/img/connecting-datasource/concepts/global-query-library/aws-import.png",alt:"Import connector json file",width:"70%",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"AWS Import"))))}f.isMDXComponent=!0}}]);