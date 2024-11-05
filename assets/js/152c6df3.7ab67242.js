"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[75552],{52244:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>c});a(67294);var n=a(3905);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})),t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}const i={sidebar_position:1,title:"Configuring Themes"},s="Introduction",d={unversionedId:"building-apps-concepts/configuring-themes",id:"building-apps-concepts/configuring-themes",title:"Configuring Themes",description:"DronaHQ allows users to customize the appearance and style of their applications through theme configuration. Themes provide a way to control the visual aspects of the user interface, such as colors, fonts, scale and other design elements. This documentation will guide you through the process of configuring themes in DronaHQ.",source:"@site/docs/building-apps-concepts/configuring-themes.md",sourceDirName:"building-apps-concepts",slug:"/building-apps-concepts/configuring-themes",permalink:"/building-apps-concepts/configuring-themes",draft:!1,tags:[],version:"current",lastUpdatedAt:1723813566,formattedLastUpdatedAt:"Aug 16, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Configuring Themes"},sidebar:"docSidebar",previous:{title:"Autogenerate Forms and CRUD",permalink:"/building-apps-concepts/autogenerate-forms-and-crud"},next:{title:"Customizing colors, fonts and loader",permalink:"/building-apps-concepts/customizing-colors-fonts-loader"}},p={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Creating Themes",id:"creating-themes",level:3},{value:"Theme Configurations",id:"theme-configurations",level:2},{value:"Scale Value",id:"scale-value",level:3},{value:"Colors",id:"colors",level:3},{value:"Backgrounds",id:"backgrounds",level:4},{value:"Controls",id:"controls",level:4},{value:"Fonts",id:"fonts",level:4},{value:"Messages and Tags",id:"messages-and-tags",level:4},{value:"Palette",id:"palette",level:4},{value:"Typography",id:"typography",level:3},{value:"Control Text",id:"control-text",level:4},{value:"Content Text",id:"content-text",level:4},{value:"General",id:"general",level:3},{value:"Size",id:"size",level:4},{value:"Sizing Loader",id:"sizing-loader",level:4},{value:"Styling Fonts",id:"styling-fonts",level:4},{value:"Custom Theme",id:"custom-theme",level:4},{value:"Configurable Variables",id:"configurable-variables",level:5},{value:"Applying Themes",id:"applying-themes",level:2},{value:"Changing themes dynamically",id:"changing-themes-dynamically",level:2}],u={toc:c},m="wrapper";function g(t){var{components:e}=t,a=o(t,["components"]);return(0,n.kt)(m,l(function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),n.forEach((function(e){r(t,e,a[e])}))}return t}({},u,a),{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"DronaHQ allows users to customize the appearance and style of their applications through theme configuration. Themes provide a way to control the visual aspects of the user interface, such as colors, fonts, scale and other design elements. This documentation will guide you through the process of configuring themes in DronaHQ."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Configuring themes in the DronaHQ is a straightforward process. Utilizing our theme creator interface, users can generate an unlimited number of themes. The platform comes equipped with two predefined theme configurations: one for default DronaHQ light Small and another for default DronaHQ dark Small. Users have the flexibility to designate any custom themes they create as the default for either light or dark mode. Additionally, they can select a single theme to serve as the default for both dark and light modes. Themes marked as defaults will automatically be applied to any newly created applications."),(0,n.kt)("h3",{id:"creating-themes"},"Creating Themes"),(0,n.kt)("p",null," Below is a walk-through of creating themes: "),(0,n.kt)("div",{style:{position:"relative",paddingBottom:"calc(46.33333333333333% + 41px)",height:0}},(0,n.kt)("iframe",{src:"https://demo.arcade.software/SjFZuYRtHBe3oAbLLyZR?embed",title:"Theme Creation",frameborder:"0",loading:"lazy",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),"# Theme Configurations: Detailed Guide",(0,n.kt)("h2",{id:"theme-configurations"},"Theme Configurations"),(0,n.kt)("admonition",{title:"NOTE",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"All changes can be viewed as a preview on the left-hand side in real-time, except for Font and Loader settings for now.")),(0,n.kt)("h3",{id:"scale-value"},"Scale Value"),(0,n.kt)("p",null,"The scale value automatically adjusts the size of controls, fonts, spacing, padding, and other UI elements. Adjusting the scale can make the interface more compact or larger, depending on the user's needs."),(0,n.kt)("h3",{id:"colors"},"Colors"),(0,n.kt)("p",null,"Colors play a crucial role in defining the visual identity of the theme. The following table lists the configurable color properties."),(0,n.kt)("h4",{id:"backgrounds"},"Backgrounds"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Screen Background"),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the background color of the entire screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Container Background"),(0,n.kt)("td",{parentName:"tr",align:null},"Defines the background color of containers.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Control Background"),(0,n.kt)("td",{parentName:"tr",align:null},"Sets the background color for input controls and inputs.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Header Background"),(0,n.kt)("td",{parentName:"tr",align:null},"Defines the background color of screen headers.")))),(0,n.kt)("h4",{id:"controls"},"Controls"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Brand"),(0,n.kt)("td",{parentName:"tr",align:null},"Main theme color for controls, typically the brand color.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Selected Bg"),(0,n.kt)("td",{parentName:"tr",align:null},"Background color for selected controls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hover Bg"),(0,n.kt)("td",{parentName:"tr",align:null},"Background color for controls on hover (e.g., table grid).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Border"),(0,n.kt)("td",{parentName:"tr",align:null},"Color for borders within the application.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Scrollbar"),(0,n.kt)("td",{parentName:"tr",align:null},"Color of all scrollbar sliders in the application.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Control Header Bg"),(0,n.kt)("td",{parentName:"tr",align:null},"Background color for control headers (e.g., table grid headers).")))),(0,n.kt)("h4",{id:"fonts"},"Fonts"),(0,n.kt)("p",null,"Font colors are crucial for readability and aesthetic consistency. The following table details the configurable font properties."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Screen Header Font"),(0,n.kt)("td",{parentName:"tr",align:null},"Font color for screen headers, ensuring contrast with the header background.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Primary Font"),(0,n.kt)("td",{parentName:"tr",align:null},"Default font color, contrasting with background colors.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Secondary Font"),(0,n.kt)("td",{parentName:"tr",align:null},"Font color for subtext, contrasting with background colors.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Font on Brand Bg"),(0,n.kt)("td",{parentName:"tr",align:null},"Font color for text on brand-colored backgrounds.")))),(0,n.kt)("h4",{id:"messages-and-tags"},"Messages and Tags"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Success Bg"),(0,n.kt)("td",{parentName:"tr",align:null},"Background color for success notifications and controls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Success Action Font"),(0,n.kt)("td",{parentName:"tr",align:null},"Font color for success notifications and controls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Error Bg"),(0,n.kt)("td",{parentName:"tr",align:null},"Background color for error notifications and controls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Error Action Font"),(0,n.kt)("td",{parentName:"tr",align:null},"Font color for error notifications and controls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Warning Bg"),(0,n.kt)("td",{parentName:"tr",align:null},"Background color for warning notifications and controls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Warning Action Font"),(0,n.kt)("td",{parentName:"tr",align:null},"Font color for warning notifications and controls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Information Bg"),(0,n.kt)("td",{parentName:"tr",align:null},"Background color for informational notifications and controls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Information Action Font"),(0,n.kt)("td",{parentName:"tr",align:null},"Font color for informational notifications and controls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Note Bg"),(0,n.kt)("td",{parentName:"tr",align:null},"Background color for note notifications and controls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Note Action Font"),(0,n.kt)("td",{parentName:"tr",align:null},"Font color for note notifications and controls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Neutral Tag Bg"),(0,n.kt)("td",{parentName:"tr",align:null},"Background color for neutral tag notifications and controls.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Neutral Tag Action Font"),(0,n.kt)("td",{parentName:"tr",align:null},"Font color for neutral tag notifications and controls.")))),(0,n.kt)("h4",{id:"palette"},"Palette"),(0,n.kt)("p",null,"Additional colors can be configured and used as themes within the application."),(0,n.kt)("h3",{id:"typography"},"Typography"),(0,n.kt)("p",null,"Typography settings allow for customization of text sizes and spacing within the application."),(0,n.kt)("h4",{id:"control-text"},"Control Text"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Control Title"),(0,n.kt)("td",{parentName:"tr",align:null},"Font size for control labels, recommended in rem for scalability.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Control Description"),(0,n.kt)("td",{parentName:"tr",align:null},"Font size for control descriptions, recommended in rem for scalability.")))),(0,n.kt)("h4",{id:"content-text"},"Content Text"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Large"),(0,n.kt)("td",{parentName:"tr",align:null},"Font size for large text, recommended in rem for scalability.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Medium"),(0,n.kt)("td",{parentName:"tr",align:null},"Font size for medium text, recommended in rem for scalability.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Normal"),(0,n.kt)("td",{parentName:"tr",align:null},"Font size for normal text, recommended in rem for scalability.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Small Font"),(0,n.kt)("td",{parentName:"tr",align:null},"Font size for small text, recommended in rem for scalability.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Extra Small Font"),(0,n.kt)("td",{parentName:"tr",align:null},"Font size for extra small text, recommended in rem for scalability.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Letter Spacing"),(0,n.kt)("td",{parentName:"tr",align:null},"Spacing between letters.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Line Height"),(0,n.kt)("td",{parentName:"tr",align:null},"Height of lines in text.")))),(0,n.kt)("h3",{id:"general"},"General"),(0,n.kt)("p",null,"General settings include properties that affect the overall appearance and behavior of the application. This section is divided into three main categories: Size, Sizing Loader, and Styling Fonts."),(0,n.kt)("h4",{id:"size"},"Size"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Border"),(0,n.kt)("td",{parentName:"tr",align:null},"Size of the border around the application.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Border Radius"),(0,n.kt)("td",{parentName:"tr",align:null},"Radius of borders, unless explicitly specified otherwise.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Box Shadow"),(0,n.kt)("td",{parentName:"tr",align:null},"Default box shadow for application controls.")))),(0,n.kt)("h4",{id:"sizing-loader"},"Sizing Loader"),(0,n.kt)("p",null,"The Sizing Loader allows users to select and customize the loader animation used in the application."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Selected Loader"),(0,n.kt)("td",{parentName:"tr",align:null},"Displays the currently selected loader.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Available Loaders"),(0,n.kt)("td",{parentName:"tr",align:null},"List of available loaders to choose from.")))),(0,n.kt)("h4",{id:"styling-fonts"},"Styling Fonts"),(0,n.kt)("p",null,"Styling Fonts provides options for selecting and configuring fonts used in the application. This section is divided into two subsections: Google Fonts and Custom Fonts."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Google Fonts"),(0,n.kt)("p",{parentName:"li"},"Users can select from available Google Fonts and choose specific font weights."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Font-Family"),(0,n.kt)("td",{parentName:"tr",align:null},"Default font family for the application.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Add Fonts"),(0,n.kt)("td",{parentName:"tr",align:null},"Option to add fonts from Google Fonts.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Font Variants"),(0,n.kt)("td",{parentName:"tr",align:null},"Select font weights (e.g., 500, 600, 700)"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Custom Fonts"),(0,n.kt)("p",{parentName:"li"},"Users can upload their own custom fonts and save the configuration."),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Upload Fonts"),(0,n.kt)("td",{parentName:"tr",align:null},"Option to upload custom font files.")))))),(0,n.kt)("h4",{id:"custom-theme"},"Custom Theme"),(0,n.kt)("p",null,"Custom Theme is a flexible block within the application where users can provide their own theme configurations in JSON format. The custom themes are designed to allow users to easily adjust various CSS variables for styling their applications."),(0,n.kt)("p",null,"The custom theme should be provided in the following JSON format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "--css-var-font-size": "16px",\n  "--css-var-font-weight": "400",\n  "--css-var-font-color": "#333333",\n  "--css-var-bg-color": "#ffffff",\n  "--application-tag-font-color": "#666666",\n  "--application-tag-bg-color": "#f0f0f0"\n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Key:")," Represents the name of the CSS variable.",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("strong",{parentName:"p"},"Value:")," Represents the corresponding value for the CSS theme variable."),(0,n.kt)("h5",{id:"configurable-variables"},"Configurable Variables"),(0,n.kt)("p",null,"Each configurable variable will be visible in the properties section based on the suffix of the variable name:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-font-size:")," Appears under Font Size."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-font-weight:")," Appears under Font Weight."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-font-color:")," Appears under Font Color."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-bg-color:")," Appears under Background Color."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-tag-font-color")," and ",(0,n.kt)("strong",{parentName:"li"},"-tag-bg-color:")," These should have the same prefix to act as corresponding pairs (e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"--studio-tag-font-color")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"--studio-tag-bg-color"),"). This ensures that the tag font and background colors are applied consistently.")),(0,n.kt)("admonition",{title:"NOTE",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The variable names must start with ",(0,n.kt)("inlineCode",{parentName:"p"},"--"),".")),(0,n.kt)("p",null,"At the end, there is a button to save the custom font configuration after uploading fonts."),(0,n.kt)("h2",{id:"applying-themes"},"Applying Themes"),(0,n.kt)("p",null,"The themes generated in the DronaHQ are applicable within the application through the adjustment of the application's theme settings. Each application is equipped with its own theme configuration, providing users with the capability to manage the visual presentation of individual applications."),(0,n.kt)("p",null," Below is a walk-through of how to use themes: "),(0,n.kt)("div",{style:{position:"relative",paddingBottom:"calc(46.33333333333333% + 41px)",height:0}},(0,n.kt)("iframe",{src:"https://demo.arcade.software/JAQDxU3RPTsjFcAkq631?embed",title:"Builder Themes",frameborder:"0",loading:"lazy",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",colorScheme:"light"}})),(0,n.kt)("h2",{id:"changing-themes-dynamically"},"Changing themes dynamically"),(0,n.kt)("p",null,"The application allows dynamic modification of configured themes during runtime, even after the application has been published. This functionality is achieved through the utilization of the ",(0,n.kt)("inlineCode",{parentName:"p"},"set theme")," action within the action flow. Key elements such as KEYWORDS ",(0,n.kt)("inlineCode",{parentName:"p"},"AVAILABLETHEMES")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"STUDIOTHEMEMODE")," play a crucial role in this process. STUDIOTHEMEMODE provides information about the presently active theme, while AVAILABLETHEMES furnishes a comprehensive list of all available themes within the DronaHQ. This information can be leveraged to develop a user interface for theme selection. The ",(0,n.kt)("inlineCode",{parentName:"p"},"set theme")," action facilitates the seamless alteration of themes during runtime, enhancing the overall flexibility and adaptability of the application. Once the theme is selected it persists for the application. To understand in detail how it works you can read the ",(0,n.kt)("a",{parentName:"p",href:"/reference/actionflow-blocks/set-theme/"},"set theme article")))}g.isMDXComponent=!0}}]);