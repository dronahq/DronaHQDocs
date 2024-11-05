"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[47405],{46857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>k,frontMatter:()=>o,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const o={sidebar_position:6},p="Create a Group",u={unversionedId:"reference/scim-2-rest-api/groups/create-groups",id:"reference/scim-2-rest-api/groups/create-groups",title:"Create a Group",description:"Create a new group, checking if the group already exists before adding.",source:"@site/docs/reference/scim-2-rest-api/groups/create-groups.md",sourceDirName:"reference/scim-2-rest-api/groups",slug:"/reference/scim-2-rest-api/groups/create-groups",permalink:"/reference/scim-2-rest-api/groups/create-groups",draft:!1,tags:[],version:"current",lastUpdatedAt:1692255300,formattedLastUpdatedAt:"Aug 17, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docSidebar",previous:{title:"List Groups",permalink:"/reference/scim-2-rest-api/groups/list-groups"},next:{title:"Retrieve a Group",permalink:"/reference/scim-2-rest-api/groups/get-group"}},i={},c=[{value:"Headers",id:"headers",level:4},{value:"Request Body",id:"request-body",level:4},{value:"Example cURL",id:"example-curl",level:4},{value:"Responses",id:"responses",level:4},{value:"Sample response",id:"sample-response",level:4}],d={toc:c},m="wrapper";function k(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)(m,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-group"},"Create a Group"),(0,n.kt)("p",null,"Create a new group, checking if the group already exists before adding."),(0,n.kt)("div",{class:"apidocs-header"},(0,n.kt)("div",{class:"method post"},"POST"),(0,n.kt)("div",{class:"endpoint"},"/api/scim/v2/Groups")),(0,n.kt)("h4",{id:"headers"},"Headers"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Key"),(0,n.kt)("th",null,"Value")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Accept"),(0,n.kt)("td",null,"application/json")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Authorization"),(0,n.kt)("td",null,"Bearer <API Token>")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"Content-Type"),(0,n.kt)("td",null,"application/json"))),(0,n.kt)("h4",{id:"request-body"},"Request Body"),(0,n.kt)("p",null,"The request body should contain the following parameters:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "displayName": "Group Name",\n    "members": [\n        {\n            "value": "user1@example.com",\n            "display": "User 1"\n        },\n        {\n            "value": "user2@example.com",\n            "display": "User 2"\n        }\n    ]\n}\n')),(0,n.kt)("h4",{id:"example-curl"},"Example cURL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'http://localhost:8080/api/scim/v2/Groups\' \\\n--header \'Accept: application/json\' \\\n--header \'Authorization: Bearer XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "displayName": "Developers",\n    "members": [\n        {\n            "value": 1,\n            "display": "user1@example.com"\n        },\n        {\n            "value": 2,\n            "display": "user2@example.com"\n        }\n    ]\n}\'\n')),(0,n.kt)("h4",{id:"responses"},"Responses"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Status Code"),(0,n.kt)("th",null,"Description"),(0,n.kt)("th",null,"Response")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"200"),(0,n.kt)("td",null,"Group created successfully"),(0,n.kt)("td",null,"application/json")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"400"),(0,n.kt)("td",null,"Invalid Request"),(0,n.kt)("td",null,"empty")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"401"),(0,n.kt)("td",null,"Unauthorized"),(0,n.kt)("td",null,"empty")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"500"),(0,n.kt)("td",null,"Internal Server Error"),(0,n.kt)("td",null,"empty"))),(0,n.kt)("h4",{id:"sample-response"},"Sample response"),(0,n.kt)("p",null,"200 : Group created successfully"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "123",\n    "displayName": "Developers",\n    "members": [\n        {\n            "value": 1,\n            "display": "user1@example.com"\n        },\n        {\n            "value": 2,\n            "display": "user2@example.com"\n        }\n    ],\n    "meta": {\n        "location": "http://localhost:8080/api/scim/v2/Groups/123",\n        "created": "2023-08-04T08:38:02.3732123Z"\n    }\n}\n')))}k.isMDXComponent=!0}}]);