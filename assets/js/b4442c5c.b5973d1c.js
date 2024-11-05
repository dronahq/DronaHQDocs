"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[11088],{25373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>u});t(67294);var i=t(3905),a=t(86291);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const l={sidebar_position:1,title:"Clarifai"},d=void 0,s={unversionedId:"reference/connectors/clarifai",id:"reference/connectors/clarifai",title:"Clarifai",description:"Clarifai Inc. is an artificial intelligence (AI) company that specializes in computer vision and uses machine learning and deep neural networks to identify and analyze images and videos.",source:"@site/docs/reference/connectors/clarifai.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/clarifai",permalink:"/reference/connectors/clarifai",draft:!1,tags:[],version:"current",lastUpdatedAt:1725263682,formattedLastUpdatedAt:"Sep 2, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Clarifai"},sidebar:"docSidebar",previous:{title:"Cassandra",permalink:"/reference/connectors/cassandra"},next:{title:"Clearbit",permalink:"/reference/connectors/clearbit"}},p={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring API Connector in DronaHQ",id:"configuring-api-connector-in-dronahq",level:2},{value:"Supported API endpoints",id:"supported-api-endpoints",level:2},{value:"Using Clarifai Connector",id:"using-clarifai-connector",level:2},{value:"Predicting image",id:"predicting-image",level:3}],f={toc:u},m="wrapper";function g(e){var{components:n}=e,t=c(e,["components"]);return(0,i.kt)(m,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){r(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Clarifai Inc. is an artificial intelligence (AI) company that specializes in computer vision and uses machine learning and deep neural networks to identify and analyze images and videos. "),(0,i.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create your account on ",(0,i.kt)("a",{parentName:"p",href:"https://clarifai.com/login?utm_source=clarifai&utm_medium=referral"},"Clarifai")," and create an application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the application go to ",(0,i.kt)("inlineCode",{parentName:"p"},"App Setting")," and copy the key of your application. This will be used to configure the connection of the Clarifai connector."))),(0,i.kt)("figure",null,(0,i.kt)(a.Z,{src:"/img/reference/connectors/clarifai/keys.png",alt:"AWS Lambda with configuration details.",mdxType:"Thumbnail"})),(0,i.kt)("h2",{id:"configuring-api-connector-in-dronahq"},"Configuring API Connector in DronaHQ"),(0,i.kt)("p",null,"Add a ",(0,i.kt)("inlineCode",{parentName:"p"},"Account name"),". Then add the ",(0,i.kt)("inlineCode",{parentName:"p"},"API key")," for the connector account. Once all details are added, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save"),". Your connector configuration is now done."),(0,i.kt)("figure",null,(0,i.kt)(a.Z,{src:"/img/reference/connectors/clarifai/details.png",alt:"Clarifai with configuration details.",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Clarifai with configuration details."))),(0,i.kt)("p",null,"After successfully configuring and saving the connector settings, you can easily access your newly connected account by navigating to the ",(0,i.kt)("inlineCode",{parentName:"p"},"connected accounts")," list. You can find this option from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector -> Manage Account")," section. This centralized location allows you to conveniently monitor and manage your connected accounts."),(0,i.kt)("h2",{id:"supported-api-endpoints"},"Supported API endpoints"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GetModels"),(0,i.kt)("td",{parentName:"tr",align:null},"Retrieve a list of available models for image and video predictions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PredictImage"),(0,i.kt)("td",{parentName:"tr",align:null},"Perform image prediction using a specific model and input image data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PredictVideo"),(0,i.kt)("td",{parentName:"tr",align:null},"Perform video prediction using a specific model and input video data.")))),(0,i.kt)("h2",{id:"using-clarifai-connector"},"Using Clarifai Connector"),(0,i.kt)("h3",{id:"predicting-image"},"Predicting image"),(0,i.kt)("p",null,"You can predict various features and attributes of objects present in an image URL by the means of different existing models of Clarifai used for image prediction."),(0,i.kt)("p",null,"Simply integrate the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector > Library")," action or the data-bind option of the Clarifai connector and select the ",(0,i.kt)("inlineCode",{parentName:"p"},"PredictImage")," endpoint. Provide the required details such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Model")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"image URL"),"."),(0,i.kt)("p",null,"We have selected ",(0,i.kt)("inlineCode",{parentName:"p"},"Image Recognition (General Image recognition) "),"as the model and used a cat image URL."),(0,i.kt)("figure",null,(0,i.kt)(a.Z,{src:"/img/reference/connectors/clarifai/predict.jpeg",alt:"Predicting Image",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Predicting Image"))),(0,i.kt)("p",null,"In this way, you can perform various analyses and predictions on image/video URLs using various models."))}g.isMDXComponent=!0}}]);