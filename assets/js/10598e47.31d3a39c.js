"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[70616],{28443:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905),o=n(86291);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c={sidebar_position:1},l="Connector permissions",p={unversionedId:"datasource-concepts/connector-permissions",id:"datasource-concepts/connector-permissions",title:"Connector permissions",description:"DronaHQ enforces granular access control over the connector resources, allowing you to assign roles to specific users and groups. This feature is particularly valuable for limiting unauthorized modifications to the configured resources. Please refer to the table below for an overview of the different roles and their respective purposes.",source:"@site/docs/datasource-concepts/connector-permissions.md",sourceDirName:"datasource-concepts",slug:"/datasource-concepts/connector-permissions",permalink:"/datasource-concepts/connector-permissions",draft:!1,tags:[],version:"current",lastUpdatedAt:1701757970,formattedLastUpdatedAt:"Dec 5, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Connection Pooling for enhanced performance",permalink:"/datasource-concepts/connection-pooling"},next:{title:"Data Environments",permalink:"/datasource-concepts/data-environments"}},u={},d=[{value:"Setting permissions for a specific connector",id:"setting-permissions-for-a-specific-connector",level:2},{value:"Setting permissions for individual user and group",id:"setting-permissions-for-individual-user-and-group",level:2},{value:"Individual User",id:"individual-user",level:3},{value:"Group",id:"group",level:3}],m={toc:d},g="wrapper";function f(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connector-permissions"},"Connector permissions"),(0,r.kt)("p",null,"DronaHQ enforces granular access control over the connector resources, allowing you to assign roles to specific users and groups. This feature is particularly valuable for limiting unauthorized modifications to the configured resources. Please refer to the table below for an overview of the different roles and their respective purposes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Role"),(0,r.kt)("th",{parentName:"tr",align:null},"What it can do?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Owner"),(0,r.kt)("td",{parentName:"tr",align:null},"The creator of the connector holds the exclusive right to set up permissions for other users and groups. This role can edit or delete the connector and configure resources for various data environments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Editor"),(0,r.kt)("td",{parentName:"tr",align:null},"This role can edit the connector and configure resources for various data environments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use Only"),(0,r.kt)("td",{parentName:"tr",align:null},"This role can only view the connector; any modifications made to the resources cannot be saved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"This role has no access to the connector, and as a result, the connector is not visible to users with this role.")))),(0,r.kt)("h2",{id:"setting-permissions-for-a-specific-connector"},"Setting permissions for a specific connector"),(0,r.kt)("p",null,"To set up permissions for a connector, navigate to the connector listing page and click on the three dots (more options) for the desired connector. Then, select 'Edit permissions' to assign roles to users or groups."),(0,r.kt)("p",null,"When configuring individual or group permissions, the first entry is for 'All Creators.' This option sets default permissions for all creators. It's essential to keep in mind that permissions granted to individual users take precedence over any other permissions when assigning permissions to connectors. For example, if a user is given a 'Preview Only' role for an app, but 'All Creators' are granted an 'Editor' role, that individual user will end up with the permissions of the 'Preview Only' role. "),(0,r.kt)("p",null,"Permission hierarchy starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"Individual permission -> Group Permission -> All Creators permission -> Default permission")," representing the highest to lowest permission priority, i.e. if no individual permission is given then it will look for permissions in groups to which use is assigned to if not permission is set to groups then it will inherit all creators permission, if not other permission is configured then it will inherit the default permission."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Term"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User"),(0,r.kt)("td",{parentName:"tr",align:null},"Refers to each individual within the organization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Group"),(0,r.kt)("td",{parentName:"tr",align:null},"Refers to specific groups of people within the organization, such as Developers, Testers, and others.")))),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/connecting-datasource/concepts/connector-permissions/connector-library-permissions-user-list.png",alt:"Setting permissions for multiple users",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Setting permissions for multiple users"))),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/connecting-datasource/concepts/connector-permissions/connector-library-permissions-group-list.png",alt:"Setting permissions for multiple groups",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Setting permissions for multiple groups"))),(0,r.kt)("h2",{id:"setting-permissions-for-individual-user-and-group"},"Setting permissions for individual user and group"),(0,r.kt)("p",null,"To set connector permissions, access the user view by clicking on the 'Manage Users' option located to the left of the DronaHQ dashboard."),(0,r.kt)("h3",{id:"individual-user"},"Individual User"),(0,r.kt)("p",null,"To set permissions for an individual user, click on the three dots (more options), then select 'Edit Permissions'. After that, navigate to the connector tab and set permissions for each connector according to your requirements."),(0,r.kt)("admonition",{title:"Active User",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Editing connector permissions is only possible for active users.")),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/connecting-datasource/concepts/connector-permissions/user-view-edit-permission.png",alt:"User view screen",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"User view screen"))),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/connecting-datasource/concepts/connector-permissions/setting-connectors-permission-for-user.png",alt:"Setting user permissions for connectors",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Setting user permissions for connectors"))),(0,r.kt)("h3",{id:"group"},"Group"),(0,r.kt)("p",null,"To set permissions for a group, click on the 'Manage Groups' option located at the top, and then select 'Edit Permissions'. After that, navigate to the connector tab and set permissions for each connector according to your requirements."),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/connecting-datasource/concepts/connector-permissions/manage-group-option.png",alt:"Manage group option",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Manage group option"))),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/connecting-datasource/concepts/connector-permissions/setting-connectors-permission-for-group.png",alt:"Groups listing",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Groups listing"))),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/connecting-datasource/concepts/connector-permissions/editing-group-permission.png",alt:"Groups listing",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Editing Group Permission"))),(0,r.kt)("admonition",{title:"Inherited permission",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Permissions which are inherited are highlighted using blue checkboxes")))}f.isMDXComponent=!0}}]);