"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[15796],{14797:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>p});a(67294);var n=a(3905),l=a(86291);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}const c={sidebar_position:1,title:"Format Data"},d=void 0,u={unversionedId:"building-apps-concepts/format-data",id:"building-apps-concepts/format-data",title:"Format Data",description:"For Connectors and when using the output of the Lookup formula, you would get different types of data from the respective sources. Typically, when presenting data in a Table grid control or any card control, you would prefer to make it visually appealing.",source:"@site/docs/building-apps-concepts/format-data.md",sourceDirName:"building-apps-concepts",slug:"/building-apps-concepts/format-data",permalink:"/building-apps-concepts/format-data",draft:!1,tags:[],version:"current",lastUpdatedAt:1697705514,formattedLastUpdatedAt:"Oct 19, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Format Data"},sidebar:"docSidebar",previous:{title:"Format Column Types",permalink:"/building-apps-concepts/format-column-data"},next:{title:"Localization",permalink:"/building-apps-concepts/localization"}},s={},p=[{value:"Conditional Formatting - Conditions",id:"conditional-formatting---conditions",level:2},{value:"Text",id:"text",level:2},{value:"Number and Decimal",id:"number-and-decimal",level:2},{value:"Format",id:"format",level:3},{value:"Prefix/Suffix",id:"prefixsuffix",level:3},{value:"Conditional formatting",id:"conditional-formatting",level:3},{value:"Toggle",id:"toggle",level:2},{value:"Styles",id:"styles",level:3},{value:"Single Select and Multi-Select",id:"single-select-and-multi-select",level:2},{value:"Percent",id:"percent",level:2},{value:"Limit",id:"limit",level:3},{value:"Rating",id:"rating",level:2},{value:"Style",id:"style",level:3}],m={toc:p},g="wrapper";function f(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)(g,r(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){i(t,e,a[e])}))}return t}({},m,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For Connectors and when using the output of the Lookup formula, you would get different types of data from the respective sources. Typically, when presenting data in a Table grid control or any card control, you would prefer to make it visually appealing."),(0,n.kt)("p",null,"You have the option of applying conditional formatting or data type-specific formatting in DronaHQ using the Format Data feature or property available for the table grid control, the detail view control, and the different card controls like compact card, single-user card, long card, and so on. The formatting options would differ based on the type of data. At times you may also apply formatting based on a condition. Now let's see the different types of formatting available."),(0,n.kt)("h2",{id:"conditional-formatting---conditions"},"Conditional Formatting - Conditions"),(0,n.kt)("p",null,"Typically conditional formatting involves providing the condition to check with the column data and then apply the selected formatting options."),(0,n.kt)("figure",null,(0,n.kt)(l.Z,{src:"/img/building-apps-concepts/format-data/conditional-formatting.png",alt:"Conditional Formatting Conditions",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Conditional Formatting Conditions"))),(0,n.kt)("p",null,"The conditions available are as follows:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Condition"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IsEmpty"),(0,n.kt)("td",{parentName:"tr",align:null},"Text, Date, Time, Datetime, Numeric, Decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell is empty or does not contain data, then apply a certain format.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IsNotEmpty"),(0,n.kt)("td",{parentName:"tr",align:null},"Text, Date, Time, Datetime, Numeric, Decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell is not empty or contains data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Equal"),(0,n.kt)("td",{parentName:"tr",align:null},"Text, Date, Time, Datetime, Numeric, Decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell value is exactly equal to a certain value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Not Equals"),(0,n.kt)("td",{parentName:"tr",align:null},"Text, Date, Time, Datetime, Numeric, Decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell value is not equal to a certain value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Contains"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell value contains a specified sequence of characters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Not Contains"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell value does not include a specified sequence of characters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Starts with"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell value begins with the specified sequence of characters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Does not start with"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell value does not begin with the specified sequence of characters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ends with"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell value ends with the specified sequence of characters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Does not end with"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell value does not end with the specified sequence of characters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,n.kt)("td",{parentName:"tr",align:null},"Text, Date, Time, Datetime, Numeric, Decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell value is more than a specified value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Less than"),(0,n.kt)("td",{parentName:"tr",align:null},"Text, Date, Time, Datetime, Numeric, Decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell value is smaller than a specified value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Greater than equal to"),(0,n.kt)("td",{parentName:"tr",align:null},"Text, Date, Time, Datetime, Numeric, Decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell value is more than or equal to a specified value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Less than equal to"),(0,n.kt)("td",{parentName:"tr",align:null},"Text, Date, Time, Datetime, Numeric, Decimal"),(0,n.kt)("td",{parentName:"tr",align:null},"If the cell value is smaller than or equal to a specified value.")))),(0,n.kt)("p",null,"You can use these conditions in the specific column. If the condition is true, the formatting is applied to that cell/column data, which could include options like bold, italics, underline, strikethrough, cell background color, text color, and icon color."),(0,n.kt)("h2",{id:"text"},"Text"),(0,n.kt)("p",null,"Text data types include conditional formatting based on filters/conditions applied to the respective data. The data of the column being formatted should be text or string type data."),(0,n.kt)("figure",null,(0,n.kt)(l.Z,{src:"/img/building-apps-concepts/format-data/text.png",alt:"Text Formatting Conditions",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Text Formatting Conditions"))),(0,n.kt)("h2",{id:"number-and-decimal"},"Number and Decimal"),(0,n.kt)("p",null,"For Numeric and Decimal data, you can add either of the following format types: Format, Prefix/Suffix, Conditional formatting."),(0,n.kt)("h3",{id:"format"},"Format"),(0,n.kt)("p",null,"Includes options to use the cell values as normal integers or use the Currency or Accounting format."),(0,n.kt)("figure",null,(0,n.kt)(l.Z,{src:"/img/building-apps-concepts/format-data/number.png",alt:"Number and Decimal Formatting",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Number and Decimal Formatting"))),(0,n.kt)("h3",{id:"prefixsuffix"},"Prefix/Suffix"),(0,n.kt)("p",null,"You can add a Prefix or a Suffix to your numeric values, such as a currency symbol or a percentage symbol."),(0,n.kt)("h3",{id:"conditional-formatting"},"Conditional formatting"),(0,n.kt)("p",null,"If you need to check each value based on a condition, like if the value is more than or equal to a certain amount, you can make use of conditional formatting."),(0,n.kt)("h2",{id:"toggle"},"Toggle"),(0,n.kt)("p",null,"When you have toggle switches to indicate data, like/dislike, star rating, toggle switch on or off, and so on, you can select styles such as a toggle switch, star, heart, like/dislike, checkmark, or flag."),(0,n.kt)("h3",{id:"styles"},"Styles"),(0,n.kt)("p",null,"You can provide different styles of toggle symbols and use different colors for them."),(0,n.kt)("figure",null,(0,n.kt)(l.Z,{src:"/img/building-apps-concepts/format-data/toggle-style.png",alt:"Toggle Styles",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Toggle Styles"))),(0,n.kt)("h2",{id:"single-select-and-multi-select"},"Single Select and Multi-Select"),(0,n.kt)("p",null,"Both single and multi-select have formatting to define options and add colors to categorize each type of option."),(0,n.kt)("figure",null,(0,n.kt)(l.Z,{src:"/img/building-apps-concepts/format-data/single-tag.png",alt:"Single Select and Multi-Select Tag",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Single Select and Multi-Select Tag"))),(0,n.kt)("h2",{id:"percent"},"Percent"),(0,n.kt)("p",null,"To format Percent type data, you can specify the limit between which the percentage amount would be formatted."),(0,n.kt)("h3",{id:"limit"},"Limit"),(0,n.kt)("p",null,"Specify the minimum and maximum limit values. You can enable a progress bar to display in the column if the value is within the specified range."),(0,n.kt)("figure",null,(0,n.kt)(l.Z,{src:"/img/building-apps-concepts/format-column-types/percent.jpeg",alt:"Import Formatting",mdxType:"Thumbnail"})),(0,n.kt)("h2",{id:"rating"},"Rating"),(0,n.kt)("p",null,"For Rating, you can add different styles to express the kind of rating you are indicating."),(0,n.kt)("h3",{id:"style"},"Style"),(0,n.kt)("p",null,"You can set icons like a star, heart shape, and set the color for each of the types, and also provide the maximum number of icons to provide the rating degree."),(0,n.kt)("figure",null,(0,n.kt)(l.Z,{src:"/img/building-apps-concepts/format-data/rating.png",alt:"Import Formatting",mdxType:"Thumbnail"})))}f.isMDXComponent=!0}}]);