"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[52170],{95734:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>f});i(67294);var a=i(3905),o=i(86291);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function n(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}const s={sidebar_position:3,title:"Using File Storage"},p=void 0,c={unversionedId:"file-storage/use-file-storage-upload",id:"file-storage/use-file-storage-upload",title:"Using File Storage",description:"Using to Fetch and Show Data",source:"@site/docs/file-storage/use-file-storage-upload.md",sourceDirName:"file-storage",slug:"/file-storage/use-file-storage-upload",permalink:"/file-storage/use-file-storage-upload",draft:!1,tags:[],version:"current",lastUpdatedAt:17226e5,formattedLastUpdatedAt:"Aug 2, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Using File Storage"},sidebar:"docSidebar",previous:{title:"File Storage Management",permalink:"/file-storage/upload-files-on-storage"},next:{title:"File Strorage - Queries",permalink:"/category/file-strorage---queries"}},u={},f=[{value:"Using to Fetch and Show Data",id:"using-to-fetch-and-show-data",level:3},{value:"Configuring Data Variables for Uploading Files in DronaHQ File Storage",id:"configuring-data-variables-for-uploading-files-in-dronahq-file-storage",level:3}],d={toc:f},g="wrapper";function m(e){var{components:t}=e,i=n(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),a.forEach((function(t){r(e,t,i[t])}))}return e}({},d,i),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"using-to-fetch-and-show-data"},"Using to Fetch and Show Data"),(0,a.kt)("p",null,"Fetching and displaying data from File Storage involves a straightforward process of selecting files from various controls. For instance, suppose you have an image uploaded in File Storage. Here's how you can utilize it within an application:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Begin by adding an image control to your application interface."),(0,a.kt)("li",{parentName:"ol"},"Access the properties of the image control."),(0,a.kt)("li",{parentName:"ol"},"Within the properties, locate the option labeled ",(0,a.kt)("inlineCode",{parentName:"li"},"Select Image"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Select Image")," to open the File Storage interface."),(0,a.kt)("li",{parentName:"ol"},"Navigate through the File Storage to find the desired image file."),(0,a.kt)("li",{parentName:"ol"},"Select the file and confirm by clicking ",(0,a.kt)("inlineCode",{parentName:"li"},"Use"),".")),(0,a.kt)("figure",null,(0,a.kt)(o.Z,{src:"/img/file-storage/use-storge.jpeg",alt:"Select static files.",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Select static files."))),(0,a.kt)("h3",{id:"configuring-data-variables-for-uploading-files-in-dronahq-file-storage"},"Configuring Data Variables for Uploading Files in DronaHQ File Storage"),(0,a.kt)("p",null,"To integrate file upload functionality into your DronaHQ applications, follow these steps to configure data variables:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define Data Query: Specify a data query for File Storage, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"UploadFiles")," library.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill in Details:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Folder: Enter the folder where your file is located within the bucket.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Key: Provide a file name or file names for upload.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Files: Select your file control here. Multiple files can be uploaded. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"{{}}")," to select controls which will contain your file initially.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Content Type: Optionally specify the content type, otherwise, it will be detected automatically."))))),(0,a.kt)("p",null,"By completing these fields, you can effectively set up data variables for uploading files to DronaHQ File Storage within your applications."),(0,a.kt)("div",{style:{position:"relative",paddingBottom:"calc(46.33333333333333% + 41px)",height:0}},(0,a.kt)("iframe",{src:"https://demo.arcade.software/JosMZkibNLTakmTsw5T1?embed",title:"DronaHQ Database - Access & Activation flow",frameBorder:"0",loading:"lazy",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"},webkitallowfullscreen:!0,mozallowfullscreen:!0})))}m.isMDXComponent=!0}}]);