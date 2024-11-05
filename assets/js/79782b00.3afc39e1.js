"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[82135],{91187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>u});n(67294);var a=n(3905),r=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={sidebar_position:1,title:"OpenAI"},p=void 0,d={unversionedId:"reference/connectors/openai",id:"reference/connectors/openai",title:"OpenAI",description:"OpenAI is a company that focuses on advanced AI research and development to provide crucial AI methods and benefits. The OpenAI API works virtually on any sort of functioning which requires understanding or generating natural commands, language, code, image, and more.",source:"@site/docs/reference/connectors/openai.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/openai",permalink:"/reference/connectors/openai",draft:!1,tags:[],version:"current",lastUpdatedAt:1697705514,formattedLastUpdatedAt:"Oct 19, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"OpenAI"},sidebar:"docSidebar",previous:{title:"OpenAI Advanced",permalink:"/reference/connectors/openai-advanced"},next:{title:"Oracle",permalink:"/reference/connectors/oracle"}},s={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring API Connector in DronaHQ",id:"configuring-api-connector-in-dronahq",level:2},{value:"Supported API endpoints",id:"supported-api-endpoints",level:2}],m={toc:u},g="wrapper";function f(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OpenAI is a company that focuses on advanced AI research and development to provide crucial AI methods and benefits. The OpenAI API works virtually on any sort of functioning which requires understanding or generating natural commands, language, code, image, and more."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"OpenAI API Key: Obtain an API key from OpenAI by signing up for an account and creating a new API key. This key is required to authenticate your requests when using the OpenAI Connector.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Environment Setup: Ensure you have a development environment capable of making HTTP requests to external APIs. This could involve using programming languages like Python, JavaScript, or any language that supports HTTP requests."))),(0,a.kt)("h2",{id:"configuring-api-connector-in-dronahq"},"Configuring API Connector in DronaHQ"),(0,a.kt)("p",null,"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"Account name"),". Then add the ",(0,a.kt)("inlineCode",{parentName:"p"},"API key")," for the connector account. Once all details are added, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Save"),". Your connector configuration is now done."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You should have an account on ",(0,a.kt)("a",{parentName:"p",href:"https://openai.com/"},"OpenAI")," to get the API \u2013 keys. You can fetch API keys from ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/account/api-keys"},"here"),".")),(0,a.kt)("figure",null,(0,a.kt)(r.Z,{src:"/img/reference/connectors/openai/details.png",alt:"OpenAI with configuration details.",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"OpenAI with configuration details."))),(0,a.kt)("p",null,"After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the ",(0,a.kt)("inlineCode",{parentName:"p"},"connected accounts")," list. You can find this option from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector -> Manage Account")," section. This centralized location allows you to conveniently monitor and manage your connected accounts."),(0,a.kt)("h2",{id:"supported-api-endpoints"},"Supported API endpoints"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Action"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GenerateText"),(0,a.kt)("td",{parentName:"tr",align:null},"Generate human-like text using the GPT-3 model by providing a prompt.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EditText"),(0,a.kt)("td",{parentName:"tr",align:null},"Edit and refine the generated text output to achieve the desired content.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GenerateImage"),(0,a.kt)("td",{parentName:"tr",align:null},"Generate images based on textual descriptions and prompts using the DALL-E model.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EditImage"),(0,a.kt)("td",{parentName:"tr",align:null},"Edit and modify the generated images to fine-tune their visual representation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GenerateImageVariations"),(0,a.kt)("td",{parentName:"tr",align:null},"Generate multiple variations of an image by altering the input descriptions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GenerateChatGPTResponse"),(0,a.kt)("td",{parentName:"tr",align:null},"Engage in interactive conversations with the GPT-3 model to generate dynamic chat responses.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GenerateCode"),(0,a.kt)("td",{parentName:"tr",align:null},"Generate code snippets or programming code by providing a description or prompt.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EditCode"),(0,a.kt)("td",{parentName:"tr",align:null},"Edit and refine the generated code output to match specific programming needs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TextModeration"),(0,a.kt)("td",{parentName:"tr",align:null},"Utilize OpenAI's moderation API to assess and moderate text content for inappropriate content.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TranscribeAudioToText"),(0,a.kt)("td",{parentName:"tr",align:null},"Transcribe spoken audio content into textual format using OpenAI's audio transcription.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GenerateTextEmbedding"),(0,a.kt)("td",{parentName:"tr",align:null},"Obtain text embeddings that capture the semantic meaning of text for various NLP applications.")))))}f.isMDXComponent=!0}}]);