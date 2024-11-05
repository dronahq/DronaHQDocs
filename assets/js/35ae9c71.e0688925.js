"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[44602],{73085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(67294);var a=n(3905),i=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const l={sidebar_position:1,title:"Create Dynamic Text"},s=void 0,p={unversionedId:"reference/actionflow-blocks/create-dynamic-text",id:"reference/actionflow-blocks/create-dynamic-text",title:"Create Dynamic Text",description:"This Action block has been deprecated. Please use the 'Set Data Queries Values' action instead. You can read the documentation here.",source:"@site/docs/reference/actionflow-blocks/create-dynamic-text.md",sourceDirName:"reference/actionflow-blocks",slug:"/reference/actionflow-blocks/create-dynamic-text",permalink:"/reference/actionflow-blocks/create-dynamic-text",draft:!1,tags:[],version:"current",lastUpdatedAt:1726747754,formattedLastUpdatedAt:"Sep 19, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Create Dynamic Text"},sidebar:"docSidebar",previous:{title:"Copy to Clipboard",permalink:"/reference/actionflow-blocks/copy-to-clipboard"},next:{title:"Delay",permalink:"/reference/actionflow-blocks/delay"}},d={},u=[{value:"Configuring the Create Dynamic Text Action",id:"configuring-the-create-dynamic-text-action",level:2}],m={toc:u},y="wrapper";function f(e){var{components:t}=e,n=c(e,["components"]);return(0,a.kt)(y,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This Action block has been deprecated. Please use the 'Set Data Queries Values' action instead. You can read the documentation ",(0,a.kt)("a",{parentName:"p",href:"../set-data-queries-value"},"here"),".")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Dynamic Text")," action is a versatile tool within your DronaHQ application that allows you to generate text dynamically based on specific criteria. With this action, you can create both plain and rich text content, all driven by variables and data, making your application interactions more dynamic and engaging."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/actionflow-blocks/create-dynamic-text/create-dynamic-text.jpeg",alt:"Create Dynamic Text",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Create Dynamic Text"))),(0,a.kt)("h2",{id:"configuring-the-create-dynamic-text-action"},"Configuring the Create Dynamic Text Action"),(0,a.kt)("p",null,"To configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Dynamic Text")," action, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In your action flow, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Logic")," section.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Dynamic Text")," action to begin the configuration.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Type:")," Choose between ",(0,a.kt)("inlineCode",{parentName:"p"},"Plain Text")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Rich Text")," based on the type of content you want to generate. ",(0,a.kt)("inlineCode",{parentName:"p"},"Plain Text")," is suitable for simple text, while ",(0,a.kt)("inlineCode",{parentName:"p"},"Rich Text")," allows you to create more complex content with formatting and styling.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Text:")," In this field, you can enter the text that serves as the foundation for your dynamic content. What makes this action powerful is the ability to include variables enclosed in double curly braces, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"{{variableName}}"),". These variables can be used to dynamically insert values into the text, making it responsive to the specific context or data.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define any conditions or criteria under which the action should be executed, ensuring that dynamic text generation occurs at the right moments.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Assign a unique name to the action using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Action Name")," field for easy identification and management within your action flow.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Finish")," to complete the setup."))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Dynamic Text")," action empowers you to deliver personalized and context-aware content to your users. Whether you need to generate customized messages, tailored responses, or data-driven content, this action provides the flexibility you need."),(0,a.kt)("figure",null,(0,a.kt)(i.Z,{src:"/img/reference/actionflow-blocks/create-dynamic-text/fields.jpeg",alt:"Create Dynamic Text",mdxType:"Thumbnail"})),(0,a.kt)("p",null,"This action is a valuable addition to your toolkit, ensuring that your application's interactions are dynamic, engaging, and tailored to the unique needs of your users."))}f.isMDXComponent=!0}}]);