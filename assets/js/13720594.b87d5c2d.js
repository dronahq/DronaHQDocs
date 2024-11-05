"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[28488],{68302:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>g});a(67294);var n=a(3905),r=a(86291);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const s={sidebar_position:1,title:"Image"},p=void 0,d={unversionedId:"reference/controls/image",id:"reference/controls/image",title:"Image",description:"The Image control serves the purpose of showcasing images within a microapp. As a Media control, it is solely dedicated to viewing and displaying images, devoid of any involvement in submission tasks.",source:"@site/docs/reference/controls/image.md",sourceDirName:"reference/controls",slug:"/reference/controls/image",permalink:"/reference/controls/image",draft:!1,tags:[],version:"current",lastUpdatedAt:1692183919,formattedLastUpdatedAt:"Aug 16, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Image"},sidebar:"docSidebar",previous:{title:"Image Slider",permalink:"/reference/controls/image-slider"},next:{title:"Image Choice",permalink:"/reference/controls/imagechoice"}},m={},g=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Using a URL",id:"using-a-url",level:3},{value:"Using Base64",id:"using-base64",level:3},{value:"Properties",id:"properties",level:2},{value:"Control Outputs",id:"control-outputs",level:2}],c={toc:g},u="wrapper";function h(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(u,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Image control serves the purpose of showcasing images within a microapp. As a Media control, it is solely dedicated to viewing and displaying images, devoid of any involvement in submission tasks."),(0,n.kt)("figure",null,(0,n.kt)(r.Z,{src:"/img/reference/controls/image/preview.jpeg",alt:"Image",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Image"))),(0,n.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,n.kt)("p",null,"The Image control offers different methods to bind data for displaying images. You can provide a URL to fetch images from various sources or use Base64 strings to directly include image data. Below are the two options:"),(0,n.kt)("h3",{id:"using-a-url"},"Using a URL"),(0,n.kt)("p",null,"You can provide a URL to the Image control, which can be sourced from a sheet, a connector row, or provided directly as a Static URL. Ensure the URLs are accessible and correctly formatted."),(0,n.kt)("p",null,"Example using Static URLs:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'[\n  {\n    "url": "https://images.app.goo.gl/xTQ3rKywnaEQKmhSA"\n  }\n]\n')),(0,n.kt)("h3",{id:"using-base64"},"Using Base64"),(0,n.kt)("p",null,"The Image control supports Base64 strings. You can directly include the image data in Base64 format using the syntax ",(0,n.kt)("inlineCode",{parentName:"p"},"data:image/<type>;base64,")," where ",(0,n.kt)("inlineCode",{parentName:"p"},"<type>")," corresponds to the image file format (e.g., 'png', 'jpeg', 'gif', etc.)."),(0,n.kt)("p",null,"Example using Base64:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAWUlEQVR4Xu3OMQEAAAABIP6PzgpvUZhf7A3VQYAJkEAFLw/fuhjCDAAAAAAOvdsEwAAAFDQaUOQIBAAAAAPmGpRvAAAAAElFTkSuQmCC\n")),(0,n.kt)("p",null,"Ensure the Base64 string corresponds to the correct image format specified."),(0,n.kt)("p",null,"By utilizing these options, you can effectively bind data to the Image control and display images from various sources in your microapp."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Select Image"),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to pick an image from the Gallery or upload it from a source location.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Image caching"),(0,n.kt)("td",{parentName:"tr",align:null},"Enables image caching to improve loading speed by storing the image in cache for future use.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Magnify"),(0,n.kt)("td",{parentName:"tr",align:null},"Toggles the magnify feature, adding an eye icon to the image control for zooming in and out.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Image URL"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the URL of the image to be displayed in the control.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Border")," "),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Padding"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the space between the image and the border as a number of pixels to the top, bottom, left, and right.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Margin"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the space outside the padding as a number of pixels to the top, bottom, left, and right.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Width"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the width of the margin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Style"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the style of the margin, such as none, solid, dashed, or dotted.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Color"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the color of the margins.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Radius"),(0,n.kt)("td",{parentName:"tr",align:null},"Provides rounded corners to the image. You can specify the value for top-left, top-right, bottom-left, and bottom-right corners accordingly.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Style")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Image Width"),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the width of the image in the container, either in pixels or as a percentage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Image Max Width"),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the maximum width of the image in the container, either in pixels or as a percentage.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max Height (px)"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the maximum height of the image in pixels.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Alignment"),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to choose the alignment of the image as left, right, or center.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Fill Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Defines how the image appears on the screen: Cover (scaled up) or Contain (scaled down).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Container Height"),(0,n.kt)("td",{parentName:"tr",align:null},"Allows you to set the height of the image container. If no value is entered, it adjusts to the image.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Container Width"),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the width of the image container.")))),(0,n.kt)("h2",{id:"control-outputs"},"Control Outputs"),(0,n.kt)("p",null,"The outputs from the Image control, represented by the placeholder ",(0,n.kt)("inlineCode",{parentName:"p"},"{{image.[property_name]}}"),", can be referenced in other controls, data queries, or JavaScript functions using the control's unique name."))}h.isMDXComponent=!0}}]);