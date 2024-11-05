"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[58067],{27821:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>c});i(67294);var a=i(3905),r=i(86291);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function o(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}const s={sidebar_position:1,title:"Upload Files"},u=void 0,p={unversionedId:"file-storage/data-queries/uploadfile",id:"file-storage/data-queries/uploadfile",title:"Upload Files",description:"DronaHQ File Storage provides a convenient way to manage file uploads within your applications, enabling interaction with Amazon S3 buckets. There is a dedicated query in the File Storage library of UploadFile to configure the file upload functionality in DronaHQ.",source:"@site/docs/file-storage/data-queries/uploadfile.md",sourceDirName:"file-storage/data-queries",slug:"/file-storage/data-queries/uploadfile",permalink:"/file-storage/data-queries/uploadfile",draft:!1,tags:[],version:"current",lastUpdatedAt:1722951437,formattedLastUpdatedAt:"Aug 6, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Upload Files"},sidebar:"docSidebar",previous:{title:"List Objects",permalink:"/file-storage/data-queries/listobject"},next:{title:"Configuring AWS S3",permalink:"/file-storage/Configure-aws-s3"}},d={},c=[{value:"Uploading Files with DronaHQ File Storage",id:"uploading-files-with-dronahq-file-storage",level:2},{value:"Structuring the Query",id:"structuring-the-query",level:2},{value:"Configuration Details",id:"configuration-details",level:3}],f={toc:c},g="wrapper";function h(e){var{components:t}=e,i=o(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),a.forEach((function(t){n(e,t,i[t])}))}return e}({},f,i),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"DronaHQ File Storage provides a convenient way to manage file uploads within your applications, enabling interaction with Amazon S3 buckets. There is a dedicated query in the File Storage library of ",(0,a.kt)("inlineCode",{parentName:"p"},"UploadFile")," to configure the file upload functionality in DronaHQ."),(0,a.kt)("h2",{id:"uploading-files-with-dronahq-file-storage"},"Uploading Files with DronaHQ File Storage"),(0,a.kt)("p",null,"DronaHQ File Storage provides a convenient way to manage file uploads within your applications, enabling seamless interaction with Amazon S3 buckets. Follow the steps below to configure the file upload functionality using the UploadFiles feature in DronaHQ."),(0,a.kt)("h2",{id:"structuring-the-query"},"Structuring the Query"),(0,a.kt)("p",null,"This query, requires a destination and location of uploaded file to work. This is quite simple, start by providing a name and opt the option when the query should run. Then configure the details"),(0,a.kt)("figure",null,(0,a.kt)(r.Z,{src:"/img/file-storage/queries/uploadfile.jpeg",alt:"UploadFile Query",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"UploadFile Query"))),(0,a.kt)("h3",{id:"configuration-details"},"Configuration Details"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Folder"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the folder path within your S3 bucket where the uploaded files will be stored.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Key"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide the file name or file names for upload. Use placeholders to dynamically set the file path based on user-specific data.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Files"),(0,a.kt)("td",{parentName:"tr",align:null},"Select your file control for this field. Enable multi-file upload by using the appropriate control.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ContentType"),(0,a.kt)("td",{parentName:"tr",align:null},"Optionally specify the content type of the files being uploaded. If left blank, it will be automatically detected based on the file's extension.")))),(0,a.kt)("p",null,"You can follow the ",(0,a.kt)("a",{parentName:"p",href:"/file-storage/use-file-storage-upload/#configuring-data-variables-for-uploading-files-in-dronahq-file-storage"},"steps")," to implement UploadFile query in your app."),(0,a.kt)("div",{style:{position:"relative",paddingBottom:"calc(46.33333333333333% + 41px)",height:0}},(0,a.kt)("iframe",{src:"https://demo.arcade.software/JosMZkibNLTakmTsw5T1?embed",title:"DronaHQ Database - Access & Activation flow",frameBorder:"0",loading:"lazy",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"},webkitallowfullscreen:!0,mozallowfullscreen:!0})))}h.isMDXComponent=!0}}]);