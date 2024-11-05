"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[99911],{22882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});n(67294);var a=n(3905),i=n(86291);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={sidebar_position:1,title:"Implementing Cursor-Based Pagination in Connector Library"},p=void 0,u={unversionedId:"building-apps-guides/connector-lib-cursor-pagination",id:"building-apps-guides/connector-lib-cursor-pagination",title:"Implementing Cursor-Based Pagination in Connector Library",description:"When dealing with extensive data, loading everything at once can lead to performance bottlenecks. This is where pagination comes into play, and more specifically, cursor-based pagination, which ensures smooth and efficient data retrieval. In this blog, we'll explore how to implement cursor-based pagination on an Airtable connector using DronaHQ.",source:"@site/docs/building-apps-guides/connector-lib-cursor-pagination.md",sourceDirName:"building-apps-guides",slug:"/building-apps-guides/connector-lib-cursor-pagination",permalink:"/building-apps-guides/connector-lib-cursor-pagination",draft:!1,tags:[],version:"current",lastUpdatedAt:1717359067,formattedLastUpdatedAt:"Jun 2, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Implementing Cursor-Based Pagination in Connector Library"},sidebar:"docSidebar",previous:{title:"Guides",permalink:"/category/guides"},next:{title:"Create and Download Excel from JSON data",permalink:"/building-apps-guides/create-download-excel-from-json"}},c={},d=[{value:"Setting Up the Airtable Connector in DronaHQ",id:"setting-up-the-airtable-connector-in-dronahq",level:2},{value:"Configure Airtable Connector",id:"configure-airtable-connector",level:4},{value:"Implement Pagination in DronaHQ UI",id:"implement-pagination-in-dronahq-ui",level:2}],g={toc:d},b="wrapper";function m(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(b,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When dealing with extensive data, loading everything at once can lead to performance bottlenecks. This is where pagination comes into play, and more specifically, cursor-based pagination, which ensures smooth and efficient data retrieval. In this blog, we'll explore how to implement cursor-based pagination on an Airtable connector using DronaHQ."),(0,a.kt)("h2",{id:"setting-up-the-airtable-connector-in-dronahq"},"Setting Up the Airtable Connector in DronaHQ"),(0,a.kt)("p",null,"DronaHQ\u2019s Connector Library provides integration with various data sources, including Airtable. Here\u2019s a step-by-step guide to set up and configure cursor-based pagination for your Airtable connector."),(0,a.kt)("h4",{id:"configure-airtable-connector"},"Configure Airtable Connector"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open DronaHQ and go to the Connector Library section.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Choose Airtable as your data source and select the ",(0,a.kt)("inlineCode",{parentName:"p"},"FindRows")," action to fetch rows from your Airtable table.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Setup Endpoint and Parameters: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Endpoint: GET ",(0,a.kt)("a",{parentName:"li",href:"https://api.airtable.com/v0/%7BbaseId%7D/%7BtableIdOrName%7D"},"https://api.airtable.com/v0/{baseId}/{tableIdOrName}")),(0,a.kt)("li",{parentName:"ul"},"Select Base: Choose your Airtable base (e.g., app7nHbLVx2L1ETmn)."),(0,a.kt)("li",{parentName:"ul"},"Select Table: Choose your Airtable table (e.g., Emp Details or tblQw7k6RMPtIUGqP)."),(0,a.kt)("li",{parentName:"ul"},"Page Size: Set to 10 (you can adjust this number as needed, must be \u2264 100)."),(0,a.kt)("li",{parentName:"ul"},"Max Records: Use a variable or a fixed value to set the maximum number of records to retrieve."),(0,a.kt)("li",{parentName:"ul"},"Offset: This will be dynamically updated during pagination (initially set to 0).",(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/building-apps-guides/cursor-pagination/variable.jpeg",alt:"Variable",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Variable")))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable Cursor-Based Pagination\nIn cursor based pagination, your API response should have a key which points to the next page offset. It might also have a has more data key which denotes if there is more data to come or not. (It needs to have TRUE/FALSE or 0/1 as values) Do enable the below toggle in case your API supports cursor based pagination."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Offset Key: Typically, Airtable uses offset in its response to indicate the next page's starting point. Set this key accordingly."),(0,a.kt)("li",{parentName:"ul"},"Has More Key: Optionally, if your API response includes a key indicating whether more data is available, configure this key. For Airtable, the absence of the offset key in the response signifies the last page.",(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/building-apps-guides/cursor-pagination/cursor.jpeg",alt:"Cursor Pagination Toggle",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Cursor Pagination Toggle"))))))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Click Test & Save to verify the configuration. Ensure that data is being fetched correctly with the pagination settings.")),(0,a.kt)("h2",{id:"implement-pagination-in-dronahq-ui"},"Implement Pagination in DronaHQ UI"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Drag and drop a Table Grid component onto your DronaHQ app screen."),(0,a.kt)("li",{parentName:"ol"},"Connect the Table Grid to the Airtable connector you configured."),(0,a.kt)("li",{parentName:"ol"},"Set Pagination Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Page Size: Bind to the page size variable you set in the connector."),(0,a.kt)("li",{parentName:"ul"},"Offset: Ensure it uses the dynamic offset value updated during pagination (e.g., tablegrid1.PROPERTIES.OFFSET).")),(0,a.kt)("p",null,"Example API Configuration"),(0,a.kt)("p",null,"Here's a sample configuration for your Airtable connector with cursor-based pagination enabled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "endpoint": "GET https://api.airtable.com/v0/app7nHbLVx2L1ETmn/tblQw7k6RMPtIUGqP",\n  "headers": {\n    "Authorization": "Bearer YOUR_API_KEY"\n  },\n  "params": {\n    "pageSize": 10,\n    "maxRecords": "username",\n    "offset": "tablegrid1.PROPERTIES.OFFSET",\n    "view": "username",\n    "sort": "username",\n    "filterByFormula": "username",\n    "columnToSearch": "username",\n    "valueToSearchFor": "username"\n  }\n}\n')),(0,a.kt)("p",null,"By implementing cursor-based pagination, you can efficiently manage and navigate through large datasets, ensuring a smooth user experience and optimized performance. DronaHQ makes it easy to set up and configure this powerful feature, allowing you to build robust applications that can handle extensive data seamlessly."))}m.isMDXComponent=!0}}]);