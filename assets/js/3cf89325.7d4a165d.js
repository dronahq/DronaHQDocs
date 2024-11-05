"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[46266],{37126:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>p});t(67294);var i=t(3905),o=t(86291);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const c={sidebar_position:1},u="Configuring failure conditions",s={unversionedId:"datasource-concepts/configuring-failure-conditions",id:"datasource-concepts/configuring-failure-conditions",title:"Configuring failure conditions",description:"While configuring Rest API/GraphQL Api/Database Query, there might be scenario where you want your connector response to execute failure flow instead of success flow on certain conditions, in such cases, you can define failure conditions.",source:"@site/docs/datasource-concepts/configuring-failure-conditions.md",sourceDirName:"datasource-concepts",slug:"/datasource-concepts/configuring-failure-conditions",permalink:"/datasource-concepts/configuring-failure-conditions",draft:!1,tags:[],version:"current",lastUpdatedAt:1701973196,formattedLastUpdatedAt:"Dec 7, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"AWS Role to assume",permalink:"/datasource-concepts/aws-role-to-assume"},next:{title:"Connect Datasource on Local Machine",permalink:"/datasource-concepts/connect-from-local-machine"}},d={},p=[{value:"Configuring Failure Conditions",id:"configuring-failure-conditions-1",level:2},{value:"Using Failure conditions in BIND Data to Control",id:"using-failure-conditions-in-bind-data-to-control",level:2},{value:"Using Failure conditions in Action flow",id:"using-failure-conditions-in-action-flow",level:2}],m={toc:p},f="wrapper";function g(e){var{components:n}=e,t=l(e,["components"]);return(0,i.kt)(f,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},i=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),i.forEach((function(n){a(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-failure-conditions"},"Configuring failure conditions"),(0,i.kt)("p",null,"While configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"Rest API/GraphQL Api/Database Query"),", there might be scenario where you want your connector response to execute failure flow instead of success flow on certain conditions, in such cases, you can define ",(0,i.kt)("inlineCode",{parentName:"p"},"failure conditions"),"."),(0,i.kt)("p",null,"Failure conditions can be located under ",(0,i.kt)("inlineCode",{parentName:"p"},"Connectors -> ADD API/ADD QUERY -> Response -> FAILURE CONDITION")),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/connecting-datasource/concepts/failure_condition_default.png",alt:"Failure Condition",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Failure Condition"))),(0,i.kt)("p",null,"It consists of three parts -"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Keyword"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Failure Condition"),(0,i.kt)("td",{parentName:"tr",align:null},"It accepts the inline js code within ",(0,i.kt)("inlineCode",{parentName:"td"},"{{}}")," and should output either ",(0,i.kt)("inlineCode",{parentName:"td"},"true/false"),". For eg - ",(0,i.kt)("inlineCode",{parentName:"td"},"{{OUTPUT.RESP == 1}}")),(0,i.kt)("td",{parentName:"tr",align:"center"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Failure Message"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom failure message that can be displayed to your end user"),(0,i.kt)("td",{parentName:"tr",align:"center"},"FAILURE_MESSAGE")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Failure/Error code"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom Error Code that you can define to identify the failure condition.  For eg - ",(0,i.kt)("inlineCode",{parentName:"td"},"LICENSE_ERR"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"NOT_FOUND"),". No space or special characters are allowed except underscore."),(0,i.kt)("td",{parentName:"tr",align:"center"},"FAILURE_CODE")))),(0,i.kt)("admonition",{title:"PLEASE NOTE",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"You can define multiple failure conditions based on your use case."),(0,i.kt)("li",{parentName:"ul"},"Above Keywords you can use in ",(0,i.kt)("inlineCode",{parentName:"li"},"Error")," leg of above connector added in ",(0,i.kt)("inlineCode",{parentName:"li"},"Action Flow")))),(0,i.kt)("h2",{id:"configuring-failure-conditions-1"},"Configuring Failure Conditions"),(0,i.kt)("p",null,"Failure Conditions can be configured for any Api/Query, you have have added."),(0,i.kt)("p",null,"Let's add a failure condition to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Database Query")," -"),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/connecting-datasource/concepts/failure_condition_configured.png",alt:"Failure Condition for No Customer Found",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Failure Condition for No Customer Found"))),(0,i.kt)("p",null,"In the above condition, if the given email is not present in the database then we will return a custom error code ",(0,i.kt)("inlineCode",{parentName:"p"},"NO_DATA")," along with custom error message."),(0,i.kt)("p",null,"Now, lets use this query in our app. "),(0,i.kt)("h2",{id:"using-failure-conditions-in-bind-data-to-control"},"Using Failure conditions in BIND Data to Control"),(0,i.kt)("p",null,"Let's have two text input control named - ",(0,i.kt)("inlineCode",{parentName:"p"},"customeremail")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"customername")," for entering Customer Email and Customer Full name respectively. So, when we enter an email in ",(0,i.kt)("inlineCode",{parentName:"p"},"customeremail")," control, we want our query to get executed and get us Customer Full Name that gets populated in ",(0,i.kt)("inlineCode",{parentName:"p"},"customername")," control."),(0,i.kt)("p",null," For Data bind option for ",(0,i.kt)("inlineCode",{parentName:"p"},"customername")," control, we have a data query using ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector Lirary -> Customer -> GetCustomerByEmail")," and assign ",(0,i.kt)("inlineCode",{parentName:"p"},"customeremail")," as input to ",(0,i.kt)("inlineCode",{parentName:"p"},"Email")," dynamic variable for this query."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/connecting-datasource/concepts/failure_condition_data_query_customer_name.png",alt:"Data Query for Customer Email Control",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Data Query for Customer Email Control"))),(0,i.kt)("p",null,"Now, when there is no Customer info for given email id then your custom failure message will be visible to end user of your app."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/connecting-datasource/concepts/failure_condition_bind_data_error.png",alt:"No Customer Data Found",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"No Customer Data Found"))),(0,i.kt)("p",null,"Here, in case of success scenario, no error message is visible and Customer data is displayed."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/connecting-datasource/concepts/failure_condition_bind_data_success.png",alt:"Customer Data Found",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Customer Data Found"))),(0,i.kt)("h2",{id:"using-failure-conditions-in-action-flow"},"Using Failure conditions in Action flow"),(0,i.kt)("p",null,"We can utilize the same query for calling it in action flow which gets triggered on, ",(0,i.kt)("inlineCode",{parentName:"p"},"button_click")," event of a button control."),(0,i.kt)("p",null,"Let's have one text input control named - ",(0,i.kt)("inlineCode",{parentName:"p"},"customeremail")," and one button control named - ",(0,i.kt)("inlineCode",{parentName:"p"},"getcustomername"),".\nNow, on ",(0,i.kt)("inlineCode",{parentName:"p"},"button_click")," event of this button, we will call ",(0,i.kt)("inlineCode",{parentName:"p"},"Customers -> GetCustomerByEmail")," Query with ",(0,i.kt)("inlineCode",{parentName:"p"},"customeremail")," as input parameter. We then show ",(0,i.kt)("inlineCode",{parentName:"p"},"Customer Name")," retrieved from the above query response in a ",(0,i.kt)("inlineCode",{parentName:"p"},"customername")," Text Input control in case of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Success")," response. In case of an ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," response we will show a failure message using a ",(0,i.kt)("inlineCode",{parentName:"p"},"Toast")," action. Error leg will either be called for non ",(0,i.kt)("inlineCode",{parentName:"p"},"2xx Status Code")," response or based on ",(0,i.kt)("inlineCode",{parentName:"p"},"Failure Conditions")," specified for this query. In this case, failure condition will get called when it returns empty value if given email id is not present in the Database."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/connecting-datasource/concepts/failure_condition_action_connector.png",alt:"GetCustomerByEmail Query in Actionflow",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"GetCustomerByEmail Query in Actionflow"))),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"Error_Message")," is output variable that will be configured in failure scenario and ",(0,i.kt)("inlineCode",{parentName:"p"},"Name")," is the output variable that will be configured in success scenario for set ",(0,i.kt)("inlineCode",{parentName:"p"},"customername")," control's value."),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/connecting-datasource/concepts/failure_condition_action_flow.png",alt:"Actionflow of button_click event",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Actionflow of button_click event"))),(0,i.kt)("p",null,"Success flow showing Customer Name in ",(0,i.kt)("inlineCode",{parentName:"p"},"customername")," control -"),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/connecting-datasource/concepts/failure_condition_action_flow_success.png",alt:"Set Control on Query Success",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Set Control on Query Success"))),(0,i.kt)("p",null,"Error flow showing ",(0,i.kt)("inlineCode",{parentName:"p"},"Failure message")," when  No customer is found for given ",(0,i.kt)("inlineCode",{parentName:"p"},"email id"),"  -"),(0,i.kt)("figure",null,(0,i.kt)(o.Z,{src:"/img/connecting-datasource/concepts/failure_condition_action_flow_error.png",alt:"Error Message on Query Failure Condition",mdxType:"Thumbnail"}),(0,i.kt)("figcaption",{align:"center"},(0,i.kt)("i",null,"Error Message on Query Failure Condition"))),(0,i.kt)("admonition",{title:"PLEASE NOTE",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"FAILURE_MESSAGE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"FAILURE_CODE")," are the two keywords that you can use in output variables when failure conditions is met and Error Leg is executed for Connector Action block.")))}g.isMDXComponent=!0}}]);