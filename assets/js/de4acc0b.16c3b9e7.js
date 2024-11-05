"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[36583],{87740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});n(67294);var a=n(3905),r=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={sidebar_position:61},c="Control Designer",d={unversionedId:"control-designer",id:"control-designer",title:"Control Designer",description:"At the core of the DronaHQ studio, controls play a pivotal role as they are the visible components that enable users to interact with the system. These controls are instrumental in tasks such as data visualization, user input, and event-based actions. However, there are instances where users may want to customize or build their own controls to achieve a more visually appealing and unique user interface. Understanding this requirement, we present the Control Designer feature, which empowers users to effortlessly create non-input controls without the need for coding skills. With Control Designer, users can easily design visually stunning and functional controls that enhance their overall user experience.",source:"@site/docs/control-designer.md",sourceDirName:".",slug:"/control-designer",permalink:"/control-designer",draft:!1,tags:[],version:"current",lastUpdatedAt:1701973196,formattedLastUpdatedAt:"Dec 7, 2023",sidebarPosition:61,frontMatter:{sidebar_position:61},sidebar:"docSidebar",previous:{title:"Connecting via SSH Keys",permalink:"/connecting-via-ssh-keys"},next:{title:"Custom Control IDE",permalink:"/category/custom-control-ide"}},u={},p=[{value:"Creating control using Designer",id:"creating-control-using-designer",level:2},{value:"Blocks",id:"blocks",level:3},{value:"Style Manager",id:"style-manager",level:3},{value:"Mapping Manager",id:"mapping-manager",level:3}],h={toc:p},g="wrapper";function m(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)(g,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},h,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"control-designer"},"Control Designer"),(0,a.kt)("p",null,"At the core of the DronaHQ studio, controls play a pivotal role as they are the visible components that enable users to interact with the system. These controls are instrumental in tasks such as data visualization, user input, and event-based actions. However, there are instances where users may want to customize or build their own controls to achieve a more visually appealing and unique user interface. Understanding this requirement, we present the Control Designer feature, which empowers users to effortlessly create non-input controls without the need for coding skills. With Control Designer, users can easily design visually stunning and functional controls that enhance their overall user experience."),(0,a.kt)("h2",{id:"creating-control-using-designer"},"Creating control using Designer"),(0,a.kt)("p",null,"To create Designer control within the DronaHQ platform, you will need to navigate to the Control Designer, to do that follow these simple steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Profile Menu")," located in the top-right corner of the screen."),(0,a.kt)("li",{parentName:"ul"},"From the dropdown menu, select ",(0,a.kt)("inlineCode",{parentName:"li"},"Extensions"),"."),(0,a.kt)("li",{parentName:"ul"},"Within the ",(0,a.kt)("inlineCode",{parentName:"li"},"Extensions")," section, navigate to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Control Designer"),"."),(0,a.kt)("li",{parentName:"ul"},"Once you click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Control Designer")," it will open Control Designer in new tab.")),(0,a.kt)("p",null,"Once you open the control designer you will see list off all controls that you created on designer, click on the first card with plus icon to create a new control. once you click on that card you will see a form with few input fields as visible in the image below."),(0,a.kt)("figure",null,(0,a.kt)(r.Z,{src:"/img/advanced-concepts/designer/add-new-control-designer.png",alt:"Add new Designer Control",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Add new Designer control"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Unique name: unique name of the control that should not conflict with other controls including the one's provided by the DronaHQ, and also should not contains special character and space."),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Fields"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Display name"),(0,a.kt)("td",{parentName:"tr",align:null},"This name is going to be visible to every place where controls are listed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Search tag"),(0,a.kt)("td",{parentName:"tr",align:null},"Search tag help you search the controls in builder control listing. You can provide multiple search tag seperated by ','")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"group"),(0,a.kt)("td",{parentName:"tr",align:null},"When you create control, group cannot not be modified. It specified the group in which your control will be visible.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Choose Icon"),(0,a.kt)("td",{parentName:"tr",align:null},"Icon of the control that will be visible on the builder control listing screen.")))))),(0,a.kt)("p",null,"once you field all the field you can press add and new control will be created and you will  be navigated to the control building canvas."),(0,a.kt)("figure",null,(0,a.kt)(r.Z,{src:"/img/advanced-concepts/designer/control-builder-canvas.png",alt:"Control builder canvas",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"control builder canvas"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Components"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Edit Components Meta"),(0,a.kt)("td",{parentName:"tr",align:null},"This will open a popup which will allow you to edit controls meta data which you defined at the time of creating the control as well as switch control between live and draft mode.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Controls"),(0,a.kt)("td",{parentName:"tr",align:null},"Opens the list of all controls list created on the designer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Resolution"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows you to configure how your controls will look on each devices sizes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Edit Code"),(0,a.kt)("td",{parentName:"tr",align:null},"Control UI generated in the canvas is converted automatically to a html and css code which can be edited using this option, editing code will affect the ui and vice versa.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Add new"),(0,a.kt)("td",{parentName:"tr",align:null},"Opens up the add new control modal.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Save"),(0,a.kt)("td",{parentName:"tr",align:null},"Saves the current control being edited.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Publish"),(0,a.kt)("td",{parentName:"tr",align:null},"Publishes the current control.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Style Manager"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows you the apply css styles to components of your controls.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mapping Manager"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows you to map which component is actionable and which can have its own formula box for dynamic data binding inside your control.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Layers Manager"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows you to navigate between components and see hierarchy of the components based on how they are placed inside canvas to create control.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Blocks"),(0,a.kt)("td",{parentName:"tr",align:null},"Blocks are the basic building block components using which user can create their desired ui for their controls.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"View Lines"),(0,a.kt)("td",{parentName:"tr",align:null},"Toggles the outline of the components on the canvas.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Preview"),(0,a.kt)("td",{parentName:"tr",align:null},"Preview The control ui created on the canvas.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fullscreen"),(0,a.kt)("td",{parentName:"tr",align:null},"Makes the editor in fullscreen mode.")))),(0,a.kt)("p",null,"Above table explains the basic layout the the control builder canvas. let us understand in detail about how control is created using blocks, how style manager helps us to style our control and how mapping mangers help us define how data will be binded to control and what action will be available."),(0,a.kt)("h3",{id:"blocks"},"Blocks"),(0,a.kt)("p",null,"Blocks are components that are used to create the ui of control they are mainly divided in two section:"),(0,a.kt)("figure",null,(0,a.kt)(r.Z,{src:"/img/advanced-concepts/designer/block-designer.png",alt:"Blocks",width:"150px",mdxType:"Thumbnail"})),"Layout section has components that allows you to give structure to your control they have predefined styles applied to them.",(0,a.kt)("p",null,"Basic section has components that are used to define content of your control like text block, image, button, they also have some styles pre-applied to them "),(0,a.kt)("h3",{id:"style-manager"},"Style Manager"),(0,a.kt)("p",null,"Style manager allows you to apply css styles to blocks components through and interactive ui interface as portrayed in the below image."),(0,a.kt)("figure",null,(0,a.kt)(r.Z,{src:"/img/advanced-concepts/designer/styles-designer.png",alt:"Blocks",width:"200px",mdxType:"Thumbnail"})),(0,a.kt)("p",null,"you will get almost all the css property available here and we have added few extra custom properties like State. State allows you to configure different ui states of your control and then change those state of your control in DronaHQ using rules for example you can create a custom info control which will have different states like warning, error, and info these states can be switched using rules on builder at runtime resulting id different ui in same control."),(0,a.kt)("h3",{id:"mapping-manager"},"Mapping Manager"),(0,a.kt)("p",null,"Mapping Manager allows you to configure you control's block components for data binding and Actions to trigger action flows in DronaHQ "),(0,a.kt)("figure",null,(0,a.kt)(r.Z,{src:"/img/advanced-concepts/designer/mapping-designer.png",alt:"Blocks",width:"200px",mdxType:"Thumbnail"})))}m.isMDXComponent=!0}}]);