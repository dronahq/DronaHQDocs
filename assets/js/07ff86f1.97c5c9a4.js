"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[91169],{2910:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});o(67294);var n=o(3905),r=o(86291);function l(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})),t}function i(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}const s={sidebar_position:1,title:"Customizing colors, fonts and loader"},p="Customizing colors, fonts and loader",c={unversionedId:"building-apps-concepts/customizing-colors-fonts-loader",id:"building-apps-concepts/customizing-colors-fonts-loader",title:"Customizing colors, fonts and loader",description:"There are times that the apps built on DronaHQ need to follow a style guide with your own corporate guidelines. You need to navigate to Settings -> Styling section in the app builder.",source:"@site/docs/building-apps-concepts/customizing-colors-fonts-loader.md",sourceDirName:"building-apps-concepts",slug:"/building-apps-concepts/customizing-colors-fonts-loader",permalink:"/building-apps-concepts/customizing-colors-fonts-loader",draft:!1,tags:[],version:"current",lastUpdatedAt:1697531405,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Customizing colors, fonts and loader"},sidebar:"docSidebar",previous:{title:"Configuring Themes",permalink:"/building-apps-concepts/configuring-themes"},next:{title:"Format Column Types",permalink:"/building-apps-concepts/format-column-data"}},u={},d=[{value:"Fonts",id:"fonts",level:2},{value:"Color Palette",id:"color-palette",level:2},{value:"App Loader",id:"app-loader",level:2}],f={toc:d},g="wrapper";function m(t){var{components:e}=t,o=i(t,["components"]);return(0,n.kt)(g,a(function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),n.forEach((function(e){l(t,e,o[e])}))}return t}({},f,o),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"customizing-colors-fonts-and-loader"},"Customizing colors, fonts and loader"),(0,n.kt)("p",null,"There are times that the apps built on DronaHQ need to follow a style guide with your own corporate guidelines. You need to navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings -> Styling")," section in the app builder.\nDronaHQ lets your customize the UI of your apps using the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fonts"),(0,n.kt)("li",{parentName:"ul"},"Color palette"),(0,n.kt)("li",{parentName:"ul"},"Loaders")),(0,n.kt)("h2",{id:"fonts"},"Fonts"),(0,n.kt)("p",null,"DronaHQ by default uses Montserrat font in all the apps built on DronaHQ. But you can customize the font of your choice and there are the following options to do it."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Upload custom font files")," - You only need to upload and install the font files which could be of type TrueType (.ttf), Web Open Font Format (.woff), Web Open Font Format 2 (.woff2) , OpenType format (.otf)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Use a google font")," - Select from the list of Google fonts in the dropdown and import.")),(0,n.kt)("admonition",{title:"All styles",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Whenever you choose a font, make sure that all the major styles like italic, bold and weights are available for the apps to work well.")),(0,n.kt)("figure",null,(0,n.kt)(r.Z,{src:"/img/building-apps-concepts/fonts-colors-loaders/custom-fonts.png",alt:"Custom fonts",width:"100%",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Custom fonts"))),(0,n.kt)("figure",null,(0,n.kt)(r.Z,{src:"/img/building-apps-concepts/fonts-colors-loaders/google-fonts.png",alt:"Google fonts",width:"100%",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Google fonts"))),(0,n.kt)("h2",{id:"color-palette"},"Color Palette"),(0,n.kt)("p",null,"At different places in the app builder of DronaHQ in the properties section of controls and screens, there are options to select the colors or themes. You can customize the palette available or change the default color theme across the app by customizing the palette. Imagine that you have used the color ",(0,n.kt)("inlineCode",{parentName:"p"},"calm")," from your palette across your app, you can change it once in the settings to reflect it across the app."),(0,n.kt)("figure",null,(0,n.kt)(r.Z,{src:"/img/building-apps-concepts/fonts-colors-loaders/color-palette.png",alt:"Color Palette",width:"100%",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Color Palette"))),(0,n.kt)("h2",{id:"app-loader"},"App Loader"),(0,n.kt)("p",null,"Whenever the app opens it shows a default loader of DronaHQ on your apps. You can customize it by adding your own loader in .svg format or change it from a list of defaults that DronaHQ provides. "),(0,n.kt)("figure",null,(0,n.kt)(r.Z,{src:"/img/building-apps-concepts/fonts-colors-loaders/app-loader.png",alt:"App loader",width:"100%",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"App loader"))))}m.isMDXComponent=!0}}]);