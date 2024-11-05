"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[65457],{17243:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});a(67294);var n=a(3905),i=a(86291);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}const s={sidebar_position:1,title:"Overview"},d=void 0,u={unversionedId:"dashboard-dronahq/working-with-data/exploring-datas",id:"dashboard-dronahq/working-with-data/exploring-datas",title:"Overview",description:"In this tutorial, we will explore what can be done with data in DronaHQ dashboards. We will cover every aspect, from loading data to building visualizations on the dataset. We will introduce key concepts in DronaHQ Dashboard by exploring a comprehensive dataset containing different Energy usage data from various buildings and their respective departments. This tutorial aims to familiarize you with the process of creating and analyzing data, building informative dashboards, and utilizing various visualization tools offered by DronaHQ.",source:"@site/docs/dashboard-dronahq/working-with-data/exploring-datas.md",sourceDirName:"dashboard-dronahq/working-with-data",slug:"/dashboard-dronahq/working-with-data/exploring-datas",permalink:"/dashboard-dronahq/working-with-data/exploring-datas",draft:!1,tags:[],version:"current",lastUpdatedAt:1724319750,formattedLastUpdatedAt:"Aug 22, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"docSidebar",previous:{title:"Working with Data",permalink:"/category/working-with-data"},next:{title:"Connecting Databases",permalink:"/dashboard-dronahq/working-with-data/connecting-databases"}},h={},p=[{value:"Creating and Managing Datasets",id:"creating-and-managing-datasets",level:2},{value:"Availing Data",id:"availing-data",level:3},{value:"Building the Dashboard",id:"building-the-dashboard",level:2},{value:"Using Layout Elements : Text",id:"using-layout-elements--text",level:3},{value:"Creating Charts for Dashboard",id:"creating-charts-for-dashboard",level:2},{value:"Pie Chart",id:"pie-chart",level:3},{value:"Tree Map",id:"tree-map",level:3},{value:"Publishing Stage Essentials",id:"publishing-stage-essentials",level:2},{value:"ADVANCED",id:"advanced",level:4}],c={toc:p},g="wrapper";function m(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(g,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this tutorial, we will explore what can be done with data in DronaHQ dashboards. We will cover every aspect, from loading data to building visualizations on the dataset. We will introduce key concepts in DronaHQ Dashboard by exploring a comprehensive dataset containing different Energy usage data from various buildings and their respective departments. This tutorial aims to familiarize you with the process of creating and analyzing data, building informative dashboards, and utilizing various visualization tools offered by DronaHQ."),(0,n.kt)("p",null,"The dataset we will use offers valuable insights into energy usage patterns and building characteristics across various sites. Specifically, the dataset provides insights into the following areas:"),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/dhq-dashboard/using-dashboard/exploring-data/overview.jpg",alt:"Complete Dashbaord",mdxType:"Thumbnail"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Analysis of electricity and natural gas usage across different sites, helping identify energy consumption trends."),(0,n.kt)("li",{parentName:"ul"},"Insights into the maximum energy demand periods, crucial for planning and managing energy resources."),(0,n.kt)("li",{parentName:"ul"},"A measure of energy efficiency that can be used to benchmark performance and identify high-energy-use sites for improvement."),(0,n.kt)("li",{parentName:"ul"},"Understanding of the distribution of electric utility providers across sites, which can influence energy sourcing strategies."),(0,n.kt)("li",{parentName:"ul"},"Data on the total use of solar energy across various sites, revealing the extent of renewable energy integration."),(0,n.kt)("li",{parentName:"ul"},"Analysis of how building types and sizes relate to energy usage, supporting more targeted energy efficiency measures.")),(0,n.kt)("h2",{id:"creating-and-managing-datasets"},"Creating and Managing Datasets"),(0,n.kt)("p",null,"The first step in building our dashboard is to create and manage datasets. To do this, navigate to the dashboards\nsection, click the ",(0,n.kt)("inlineCode",{parentName:"p"},"+ Dataset")," button.\nThis will allow you to import and organize the Energy consumption data. Once the data is available as a dataset, you can easily apply various analyses and create\nfeature-rich charts. After saving the dataset, all relevant metrics will be fetched and ready for use in different categorized tables and charts."),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/dhq-dashboard/using-dashboard/exploring-data/dataset.jpeg",alt:"Creating dataset for energy consumption data",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Creating dataset for energy consumption data"))),(0,n.kt)("h3",{id:"availing-data"},"Availing Data"),(0,n.kt)("p",null,"To create a dataset, you must first connect a database using a connector. Follow the ",(0,n.kt)("a",{parentName:"p",href:"/dashboard-dronahq/working-with-data/connecting-databases/"},"steps to configure a connector")," for your database. Additionally, there are other methods to avail data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dashboard-dronahq/working-with-data/upload-csv/#upload-csv"},"Uploading CSV"),": You can upload a CSV file directly. Simply provide a table name and select the appropriate schema to structure the data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dashboard-dronahq/working-with-data/upload-csv/#upload-columnar-file"},"Columnar to Database Configuration"),": This method involves configuring a columnar data format to fit into your database schema, optimizing for storage and query performance."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/dashboard-dronahq/working-with-data/upload-csv/#upload-excel-file"},"Excel to Database Configuration"),": Similar to CSV upload, this method allows you to upload Excel files. You will need to specify the table name and schema to ensure the data is correctly integrated into your database.")),(0,n.kt)("h2",{id:"building-the-dashboard"},"Building the Dashboard"),(0,n.kt)("p",null,"Once your dataset is ready, you can proceed to build the dashboard. Start by creating a new dashboard through\n",(0,n.kt)("inlineCode",{parentName:"p"},"+ > Dashboard"),". Initially, your dashboard will be blank, but don't worry\u2014we'll guide you through the process of\npopulating it with meaningful visualizations."),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/dhq-dashboard/using-dashboard/exploring-data/dashboard.jpeg",alt:"dashboard Builder",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Dashboard Builder"))),(0,n.kt)("p",null,"On the dashboard screen, you will find a button labeled ",(0,n.kt)("inlineCode",{parentName:"p"},"Create a New Chart"),". This feature enables you to generate new\ncharts and tables using the dataset. "),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/dhq-dashboard/using-dashboard/exploring-data/chart.jpeg",alt:"Chart selection with respective to dataset.",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Chart selection with respective to dataset."))),(0,n.kt)("p",null,"By leveraging DronaHQ's powerful visualization tools, you can create a variety of\ncharts, such as bar graphs, line charts, pie charts, and more, to effectively present your data."),(0,n.kt)("h3",{id:"using-layout-elements--text"},"Using Layout Elements : Text"),(0,n.kt)("p",null,"To make your dashboard more attractive and improve the user experience, consider incorporating layout elements such as\nTabs, Rows, Columns, Headers, and more."),(0,n.kt)("p",null,"These elements help organize your dashboard content, making it easier to\nnavigate and understand."),(0,n.kt)("p",null,"Follow these steps to use elements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigate to ",(0,n.kt)("inlineCode",{parentName:"li"},"Layout Elements"),"."),(0,n.kt)("li",{parentName:"ul"},"Within elements, drag and drop ",(0,n.kt)("inlineCode",{parentName:"li"},"Header")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Text")," elements onto the dashboard. Look for the blue lines indicating where the box will go."),(0,n.kt)("li",{parentName:"ul"},"Select the element to edit the text. Use Markdown format (see this Markdown Cheatsheet for more information)."),(0,n.kt)("li",{parentName:"ul"},"Toggle between Edit and Preview using the menu on top of the box."),(0,n.kt)("li",{parentName:"ul"},"To exit editing mode, select any other part of the dashboard. Remember to save your changes using Save changes.")),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/dhq-dashboard/using-dashboard/exploring-data/layout.jpeg",alt:"Layout Elements.",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Layout Elements."))),(0,n.kt)("h2",{id:"creating-charts-for-dashboard"},"Creating Charts for Dashboard"),(0,n.kt)("h3",{id:"pie-chart"},"Pie Chart"),(0,n.kt)("p",null,"To visualize peak Electricity Demand by Building Type, start by creating a pie chart using the ",(0,n.kt)("inlineCode",{parentName:"p"},"energy_consumption")," dataset. Begin by selecting the Pie Chart option in the chart creation section. In the Query section, you can define dimensions by choosing from saved dimensions, simple dimensions, or by writing custom SQL queries. For metrics, summation of the peak electric demand is required to represent the data accurately."),(0,n.kt)("p",null,"Now put these into as fields"),(0,n.kt)("p",null,"Here's the table based on the new query:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Column"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DIMENSIONS"),(0,n.kt)("td",{parentName:"tr",align:null},"Building_Type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"METRIC"),(0,n.kt)("td",{parentName:"tr",align:null},"SUM(Peak_Electric_Demand)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SORT BY METRIC"),(0,n.kt)("td",{parentName:"tr",align:null},"Toggle On")))),(0,n.kt)("p",null,"In the Customize section, you can configure various options to enhance your chart. Adjust the color scheme, set the percentage threshold, and decide whether to show the legend. "),(0,n.kt)("p",null,"Finally, you can modify the pie shape by adjusting the outer radius or converting it into a donut chart by setting the inner radius. These customizations will help you create a visually appealing and informative pie chart that clearly illustrates the distribution of electric demand across different buildings."),(0,n.kt)("div",{style:{position:"relative",paddingBottom:"calc(46.33333333333333% + 41px)",height:0}},(0,n.kt)("iframe",{src:"https://demo.arcade.software/RllNuCNN9c2Hd2ao0bYS?embed",title:"Theme Creation",frameborder:"0",loading:"lazy",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,n.kt)("br",null),(0,n.kt)("p",null,"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Create Chart"),". Then click ",(0,n.kt)("inlineCode",{parentName:"p"},"Add to dashboard"),". This chart will be added top dashboard. We are going to repeat this for every chart or table we create."),(0,n.kt)("h3",{id:"tree-map"},"Tree Map"),(0,n.kt)("p",null,"Let's create a Treemap chart to visualize the distribution of building areas across different departments using the ",(0,n.kt)("inlineCode",{parentName:"p"},"public.energy_consumption")," dataset. Start by selecting the Treemap chart option in the chart creation section. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dimensions: Set the ",(0,n.kt)("inlineCode",{parentName:"li"},"Department")," column as the primary dimension and ",(0,n.kt)("inlineCode",{parentName:"li"},"Building_Type")," as the secondary dimension to categorize the data."),(0,n.kt)("li",{parentName:"ul"},"Metric: Use ",(0,n.kt)("inlineCode",{parentName:"li"},"SUM(Building_Area)")," to aggregate the total area for each building type under the respective department."),(0,n.kt)("li",{parentName:"ul"},"Filters: Apply a filter where ",(0,n.kt)("inlineCode",{parentName:"li"},"Building_Area")," is not equal to 0 to ensure only valid building areas are included in the chart.")),(0,n.kt)("p",null,"In the Customize section, you can adjust the color scheme and other visual settings to enhance the chart's appearance."),(0,n.kt)("p",null,"Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Create Chart"),", and you'll generate a Treemap chart that clearly depicts the distribution of building areas across various departments and building types. This visual representation allows you to easily compare the sizes and distribution of different building types within each department."),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/dhq-dashboard/using-dashboard/exploring-data/treemap.jpeg",alt:"Tree Map setup",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Tree Map setup"))),(0,n.kt)("h2",{id:"publishing-stage-essentials"},"Publishing Stage Essentials"),(0,n.kt)("p",null,'Once you\'ve finished building your dashboard, click "Save" at the top. Your dashboard will resemble something like this:'),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/dhq-dashboard/using-dashboard/exploring-data/dashboardcomplete.jpeg",alt:"World Map setup",mdxType:"Thumbnail"})),(0,n.kt)("p",null,"Great job on creating your dashboard! Before publishing, let's review some essential steps. Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit")," and then ",(0,n.kt)("inlineCode",{parentName:"p"},"---"),", and select ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit Properties"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Section"),(0,n.kt)("th",{parentName:"tr",align:null},"Details"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Basic Information"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Name"),(0,n.kt)("td",{parentName:"tr",align:null},"Provide Name for your dashboard.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"URL Slug"),(0,n.kt)("td",{parentName:"tr",align:null},"A readable URL for your dashboard")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Access"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Owners"),(0,n.kt)("td",{parentName:"tr",align:null},"Owners are users who can modify the dashboard. Searchable by name or username.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Colors"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Color Scheme"),(0,n.kt)("td",{parentName:"tr",align:null},"Select a scheme")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Certification"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Certified By"),(0,n.kt)("td",{parentName:"tr",align:null},"Person or group that has certified this dashboard")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Certification Details"),(0,n.kt)("td",{parentName:"tr",align:null},"Any additional details to display in the certification tooltip")))),(0,n.kt)("h4",{id:"advanced"},"ADVANCED"),(0,n.kt)("p",null,"JSON Metadata"),(0,n.kt)("p",null,'This JSON object is generated dynamically when you click "Save" or "Overwrite" in the dashboard view. It\'s provided here for reference and for power users who may wish to modify specific parameters. Please DO NOT overwrite the "filter_scopes" key; use the "Set Filter Mapping" menu instead.'),(0,n.kt)("p",null,"Hit ",(0,n.kt)("inlineCode",{parentName:"p"},"Appy"),", now your Dashboard is ready to be published. Click ",(0,n.kt)("inlineCode",{parentName:"p"},"Save")," and then ",(0,n.kt)("inlineCode",{parentName:"p"},"Publish")," with provided release note and versioning."),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/dhq-dashboard/using-dashboard/exploring-data/publish.jpeg",alt:"World Map setup",mdxType:"Thumbnail"})))}m.isMDXComponent=!0}}]);