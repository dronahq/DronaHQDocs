"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[23263],{17137:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});i(67294);var n=i(3905);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}const s={sidebar_position:203,hide_table_of_contents:!1},r="Sample Guidelines",u={unversionedId:"sample_guidelines",id:"sample_guidelines",title:"Sample Guidelines",description:'- Try to make each section within a page self-sufficient. i.e. avoid structuring all pages as step-by-step guides unless it really is the intent. This ensures that we can refer to sections externally (from other docs pages, Console, etc.) and expect that the user will be able to follow the section without being lost on the context that was set in earlier sections of the page. Adding statements such as "As we have described in the above section ..." might help to set up the needed context.',source:"@site/wiki/sample_guidelines.md",sourceDirName:".",slug:"/sample_guidelines",permalink:"/wiki/sample_guidelines",draft:!1,tags:[],version:"current",lastUpdatedAt:1697692915,formattedLastUpdatedAt:"Oct 19, 2023",sidebarPosition:203,frontMatter:{sidebar_position:203,hide_table_of_contents:!1},sidebar:"wiki",previous:{title:"Sample Usage",permalink:"/wiki/sample"},next:{title:"Tutorial - Basics",permalink:"/wiki/category/tutorial---basics"}},c={},p=[{value:"Semantics",id:"semantics",level:2},{value:"Bullet Lists",id:"bullet-lists",level:2},{value:"Image",id:"image",level:2}],d={toc:p},m="wrapper";function h(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)(m,l(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){a(e,t,i[t])}))}return e}({},d,i),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sample-guidelines"},"Sample Guidelines"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Try to make each section within a page self-sufficient. i.e. avoid structuring all pages as step-by-step guides unless it really is the intent. This ensures that we can refer to sections externally (from other docs pages, Console, etc.) and expect that the user will be able to follow the section without being lost on the context that was set in earlier sections of the page. Adding statements such as "As we have described in the above section ..." might help to set up the needed context.'),(0,n.kt)("li",{parentName:"ul"},"Try to include a TL;DR block for feature documentation at the top of the doc to summarise it as much as possible.")),(0,n.kt)("h2",{id:"semantics"},"Semantics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"code block")," for highlighting ",(0,n.kt)("inlineCode",{parentName:"li"},"actions"),", important ",(0,n.kt)("inlineCode",{parentName:"li"},"keywords"),", eg - Go to ",(0,n.kt)("inlineCode",{parentName:"li"},"Menu -> Settings"),", we want this ",(0,n.kt)("inlineCode",{parentName:"li"},"order ID")," to be dynamic or create new ",(0,n.kt)("inlineCode",{parentName:"li"},"table name")," using this query - ",(0,n.kt)("inlineCode",{parentName:"li"},"CREATE TABLE TABLE_Name (col1 type, col2 type)")),(0,n.kt)("li",{parentName:"ul"},"Don't use Italics except Image captions."),(0,n.kt)("li",{parentName:"ul"},"Only Headings and Table Headers will be bold."),(0,n.kt)("li",{parentName:"ul"},"Don't use Linebreak ",(0,n.kt)("inlineCode",{parentName:"li"},"<hr />"),"."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"->")," for providing path in this format only and should be always inside codeblock.")),(0,n.kt)("h2",{id:"bullet-lists"},"Bullet Lists"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Don't use bullet points for one point."),(0,n.kt)("li",{parentName:"ul"},"Make sure that content which belongs under a bullet point is actually indented under that bullet point in markdown."),(0,n.kt)("li",{parentName:"ul"},"Use a period at the end of bullet lists which are a sentence, like this."),(0,n.kt)("li",{parentName:"ul"},"Bullet points should not have a blank line between each point.")),(0,n.kt)("h2",{id:"image"},"Image"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use width property when you don't want image to display full width."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"Image")," component to use image instead of img tag for displaying images without clickable."),(0,n.kt)("li",{parentName:"ul"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"Thumbnail")," component to use image instead which you want to make it clickable."),(0,n.kt)("li",{parentName:"ul"},"For Images belonging to same group, Create a ",(0,n.kt)("inlineCode",{parentName:"li"},"Group Specific Folder")," inside ",(0,n.kt)("inlineCode",{parentName:"li"},"static/img/")," folder and place images inside that.")))}h.isMDXComponent=!0}}]);