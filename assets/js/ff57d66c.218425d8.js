"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[85002],{95735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>d});t(67294);var i=t(3905),a=t(86291);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const c={sidebar_position:103},s="OpenAI Integration",p={unversionedId:"open-ai-integration",id:"open-ai-integration",title:"OpenAI Integration",description:"DronaHQ offers preconfigured OpenAI API connectors that enable users to seamlessly incorporate OpenAI's advanced artificial intelligence capabilities into their applications. These connectors are designed to simplify the integration process and are available in two versions:",source:"@site/docs/open-ai-integration.md",sourceDirName:".",slug:"/open-ai-integration",permalink:"/open-ai-integration",draft:!1,tags:[],version:"current",lastUpdatedAt:1706792611,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:103,frontMatter:{sidebar_position:103},sidebar:"docSidebar",previous:{title:"AI Assistant in DronaHQ",permalink:"/ai-assist"},next:{title:"Add-on: DronaHQ Automations",permalink:"/category/add-on-dronahq-automations"}},u={},d=[{value:"OpenAI Connector",id:"openai-connector",level:2},{value:"API list of OpenAI connector",id:"api-list-of-openai-connector",level:3},{value:"OpenAI Advance Connector",id:"openai-advance-connector",level:2},{value:"API list of OpenAI Advance connector",id:"api-list-of-openai-advance-connector",level:3},{value:"Configuring connector",id:"configuring-connector",level:2},{value:"Using connector",id:"using-connector",level:2}],m={toc:d},f="wrapper";function h(e){var{components:n}=e,t=l(e,["components"]);return(0,i.kt)(f,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){o(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"openai-integration"},"OpenAI Integration"),(0,i.kt)("p",null,"DronaHQ offers preconfigured ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenAI API")," connectors that enable users to seamlessly incorporate OpenAI's advanced artificial intelligence capabilities into their applications. These connectors are designed to simplify the integration process and are available in two versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#openai-connector"},"OpenAI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{href:"#openai-advance-connector"},"OpenAI Advanced"))),(0,i.kt)("p",null,"This guide will walk you through the setup and configuration process of these preconfigured OpenAI API connectors in DronaHQ. By following the instructions provided, you'll be able to quickly add an account for the connectors and start leveraging OpenAI's powerful AI capabilities within your applications."),(0,i.kt)("figure",null,(0,i.kt)(a.Z,{src:"/img/dronahq-ai/open-ai-integration/integrated-connector.png",alt:"Integrated OpenAI Connetors",width:"100%",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Integrated OpenAI Connectors"))),(0,i.kt)("h2",{id:"openai-connector"},"OpenAI Connector"),(0,i.kt)("p",null," This connector is ideal for users who want a hassle-free integration experience. It requires minimal configuration, and the parameters are conveniently renamed to user-friendly names. All the commonly used APIs are readily available in this connector for easy access."),(0,i.kt)("h3",{id:"api-list-of-openai-connector"},"API list of OpenAI connector"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GenerateText"),(0,i.kt)("li",{parentName:"ul"},"EditText"),(0,i.kt)("li",{parentName:"ul"},"GenerateImage"),(0,i.kt)("li",{parentName:"ul"},"EditImage"),(0,i.kt)("li",{parentName:"ul"},"GenerateImageVariation"),(0,i.kt)("li",{parentName:"ul"},"GenerateChatGPTResponse"),(0,i.kt)("li",{parentName:"ul"},"GenerateCode"),(0,i.kt)("li",{parentName:"ul"},"EditCode"),(0,i.kt)("li",{parentName:"ul"},"TextModeration"),(0,i.kt)("li",{parentName:"ul"},"TranscribeAudioText"),(0,i.kt)("li",{parentName:"ul"},"GenerateTextEmbeding")),(0,i.kt)("h2",{id:"openai-advance-connector"},"OpenAI Advance Connector"),(0,i.kt)("p",null,"The advanced connector is suited for users who require more extensive customization and want to utilize the full range of APIs provided by OpenAI. It offers complete configuration parameters for all available APIs, allowing for fine-tuning and advanced usage scenarios."),(0,i.kt)("h3",{id:"api-list-of-openai-advance-connector"},"API list of OpenAI Advance connector"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"GetModels"),(0,i.kt)("li",{parentName:"ul"},"CreateCompletion"),(0,i.kt)("li",{parentName:"ul"},"CreateChatCompletion"),(0,i.kt)("li",{parentName:"ul"},"CreateEdit"),(0,i.kt)("li",{parentName:"ul"},"CreateImage"),(0,i.kt)("li",{parentName:"ul"},"CreateImageEdit"),(0,i.kt)("li",{parentName:"ul"},"CreateImageVariation"),(0,i.kt)("li",{parentName:"ul"},"CreateEmbeddings"),(0,i.kt)("li",{parentName:"ul"},"CreateTranscription"),(0,i.kt)("li",{parentName:"ul"},"CreateTranslation"),(0,i.kt)("li",{parentName:"ul"},"ListFiles"),(0,i.kt)("li",{parentName:"ul"},"UploadFile"),(0,i.kt)("li",{parentName:"ul"},"DeleteFile"),(0,i.kt)("li",{parentName:"ul"},"RetrieveFile"),(0,i.kt)("li",{parentName:"ul"},"RetrieveFileContent"),(0,i.kt)("li",{parentName:"ul"},"CreateFineTune"),(0,i.kt)("li",{parentName:"ul"},"ListFineTunes"),(0,i.kt)("li",{parentName:"ul"},"RetrieveFineTune"),(0,i.kt)("li",{parentName:"ul"},"CancelFineTune"),(0,i.kt)("li",{parentName:"ul"},"ListFineTuneEvents"),(0,i.kt)("li",{parentName:"ul"},"DeleteFineTunedModel"),(0,i.kt)("li",{parentName:"ul"},"CreateModeration"),(0,i.kt)("li",{parentName:"ul"},"ListEngines")),(0,i.kt)("h2",{id:"configuring-connector"},"Configuring connector"),(0,i.kt)("p",null,"To use an integrated OpenAI connector you need to configure OpenAI Account which you will use later on while using these connectors, to configure account you need to follow the steps mentioned below"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Manage Account")," button as visible in the image above."),(0,i.kt)("li",{parentName:"ul"},"Once you click it will open the sidebar then click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Connect OpenAI")," button in the centre."),(0,i.kt)("li",{parentName:"ul"},"It will ask you for an account name and ",(0,i.kt)("inlineCode",{parentName:"li"},"OpenAI's API key"),", paste the necessary information in the fields."),(0,i.kt)("li",{parentName:"ul"},"Click on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Save")," Button, it will verify your data and if correct it will save your account information with the connector.")),(0,i.kt)("p",null,"You can add multiple accounts for the same connectors. You can follow the above steps to configure accounts for both ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenAI Connector")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OpenAI Advance Connector")),(0,i.kt)("h2",{id:"using-connector"},"Using connector"),(0,i.kt)("p",null,"There are numerous opportunities to leverage these connectors with a wide range of use cases, empowering you to develop sophisticated applications with minimal effort. These connectors can be employed in two main areas: ",(0,i.kt)("inlineCode",{parentName:"p"},"Data Queries and Action Flow"),"."),(0,i.kt)("p",null,"In the Data Queries section, you can utilize the connectors by using the Connector Library option. This enables you to connect various data sources, retrieve information, and perform data manipulations seamlessly."),(0,i.kt)("p",null,"Alternatively, you can incorporate the connectors within the Action Flow of your application using the Server Side Action block. This grants you the ability to leverage the connectors' capabilities and functionalities more dynamically and interactively. You can utilize these connectors to process data and orchestrate complex workflows that can be triggered on any user actions."),(0,i.kt)("p",null,"To delve deeper into the possibilities and benefits of employing AI-powered connectors, I recommend reading the comprehensive ",(0,i.kt)("a",{parentName:"p",href:"/reference/connectors/openai-advanced/#using-openai-advanced-connector"},"Use cases using AI")," article. This resource will provide you with valuable insights and real-world examples of how these connectors can be effectively harnessed to enhance your application's capabilities and deliver a superior user experience."),(0,i.kt)("admonition",{title:"Info",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"OpenAI imposes rate limits on its APIs to ensure fair usage and maintain system stability. The specific rate limits may vary depending on the API or model you are using. OpenAI provides detailed documentation and guidelines on rate limits for each specific API or model, which you should refer to for accurate and up-to-date information. Exceeding the rate limits can result in errors or temporary blocks on API access.")))}h.isMDXComponent=!0}}]);