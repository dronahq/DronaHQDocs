"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[99888],{52165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>c});n(67294);var a=n(3905),r=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={sidebar_position:1,title:"Typeahead"},p=void 0,u={unversionedId:"reference/controls/typeahead",id:"reference/controls/typeahead",title:"Typeahead",description:"The Typeahead Control is useful for enhancing user experience and productivity by providing predictive suggestions or autocomplete functionality while entering text in input field. This intuitive control suggests potential matches as users type, making data entry more efficient and accurate.",source:"@site/docs/reference/controls/typeahead.md",sourceDirName:"reference/controls",slug:"/reference/controls/typeahead",permalink:"/reference/controls/typeahead",draft:!1,tags:[],version:"current",lastUpdatedAt:1692183919,formattedLastUpdatedAt:"Aug 16, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Typeahead"},sidebar:"docSidebar",previous:{title:"Toggle",permalink:"/reference/controls/toggle"},next:{title:"Value Picker",permalink:"/reference/controls/value-picker"}},d={},c=[{value:"Binding Data Options",id:"binding-data-options",level:2},{value:"Static Data Options",id:"static-data-options",level:3},{value:"Dynamic Data Options",id:"dynamic-data-options",level:3},{value:"Properties",id:"properties",level:2},{value:"Control Outputs",id:"control-outputs",level:2},{value:"Events",id:"events",level:2}],m={toc:c},h="wrapper";function y(e){var{components:t}=e,n=l(e,["components"]);return(0,a.kt)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Typeahead Control is useful for enhancing user experience and productivity by providing predictive suggestions or autocomplete functionality while entering text in input field. This intuitive control suggests potential matches as users type, making data entry more efficient and accurate."),(0,a.kt)("figure",null,(0,a.kt)(r.Z,{src:"/img/reference/controls/typeahead/control.png",alt:"typeahead control",mdxType:"Thumbnail"}),(0,a.kt)("figcaption",{align:"center"},(0,a.kt)("i",null,"Typeahead Control"))),(0,a.kt)("h2",{id:"binding-data-options"},"Binding Data Options"),(0,a.kt)("p",null,"Typeahead control accepts array of values to provide suggestions.\nThere are different ways in which you can bind data to the Typeahead control."),(0,a.kt)("h3",{id:"static-data-options"},"Static Data Options"),(0,a.kt)("p",null,"To display static options in a Typeahead control, you can use the Bind Data option."),(0,a.kt)("p",null,"The Bind Data option must be specified as an array of text values. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'  [ "Apple", "Banana", "Cherry", "Durian", "Grapes", "Kiwi", "Avocado" ]\n\n')),(0,a.kt)("h3",{id:"dynamic-data-options"},"Dynamic Data Options"),(0,a.kt)("p",null,"You can dynamically Bind options by fetching data from ",(0,a.kt)("inlineCode",{parentName:"p"},"Data queries"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Sheets")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom functions")," by binding the response to the Data Bind option. For example: "),(0,a.kt)("p",null,"Let's assume you aim to utilize a Typeahead control that enables you to select country from list of supported countries that your company cater to, from a database."),(0,a.kt)("p",null,"Make sure you have a data query named ",(0,a.kt)("inlineCode",{parentName:"p"},"getCountryNames")," that is already configured to fetch country names from your database. The SQL syntax for this query could be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT country FROM countries\n")),(0,a.kt)("p",null,"This query retrieves the country names from the ",(0,a.kt)("inlineCode",{parentName:"p"},"countries")," table in your database."),(0,a.kt)("p",null,"In the Typeahead control, Bind Data Options, select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Quick Select -> Data Queries -> getCountryNames")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{{getCountryNames}}\n")),(0,a.kt)("p",null,"By selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"getCountryNames")," data query, the Typeahead control will fetch the country names from your database and provide them as options for the user to select. This allows users to type and select a country name dynamically from the list of available options."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Theme"),(0,a.kt)("td",{parentName:"tr",align:null},"Allows you to select the color of the text box. You can enter a custom hex code or choose from available themes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Placeholder"),(0,a.kt)("td",{parentName:"tr",align:null},"Serves as a prompt or hint to guide user input. Replaced when the user starts typing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Debounce Time (In ms)"),(0,a.kt)("td",{parentName:"tr",align:null},"Introduces a delay in milliseconds between events to control the frequency of triggering actions on value change.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Suggest After (Characters)"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the minimum number of characters required before suggestions start appearing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Suggestion Limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Determines the maximum number of suggestions displayed at a time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Suggestion Tray Max Height"),(0,a.kt)("td",{parentName:"tr",align:null},"Sets the height of each menu/suggestion in the suggestion tray.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Highlight Color"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines the color of the typed text within the suggestions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Hover Color"),(0,a.kt)("td",{parentName:"tr",align:null},"Enables you to define a color highlight when hovering over the suggestions.")))),(0,a.kt)("h2",{id:"control-outputs"},"Control Outputs"),(0,a.kt)("p",null,"These outputs can be referenced in other controls, data queries, or JS functions using the control's unique name. For instance, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"typeahead.PROPERTIES.TYPEDTEXT")," to get the value of user inputted text where ",(0,a.kt)("inlineCode",{parentName:"p"},"typeahead")," is unique name of this control."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Output"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"typeahead"),(0,a.kt)("td",{parentName:"tr",align:null},"Provides user selected value from the given suggestion of typeahead control.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"typeahead.PROPERTIES.TYPEDTEXT"),(0,a.kt)("td",{parentName:"tr",align:null},"It will provide current inputted value by user. By utilizing the ",(0,a.kt)("inlineCode",{parentName:"td"},"TYPEDTEXT")," property, you can ensure that responses are provided in real-time, without any delay based on the debounce time interval.")))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Trigger"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"value_change"),(0,a.kt)("td",{parentName:"tr",align:null},"Occurs when there is a modification in the Typeahead control's value. To control the frequency or speed of the change event, you can utilize the ",(0,a.kt)("inlineCode",{parentName:"td"},"debounce")," property associated with the control.")))),(0,a.kt)("admonition",{title:"PLEASE NOTE",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Binding the ",(0,a.kt)("inlineCode",{parentName:"li"},"TYPEDTEXT")," property in another control/data query will trigger its data evaluation with every single\ncharacter entered in the Typeahead control, ensuring real-time updates. "))),(0,a.kt)("admonition",{title:"PLEASE NOTE",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In case, you are calling an api using ",(0,a.kt)("inlineCode",{parentName:"p"},"TYPEDTEXT")," property in the request parameters, it will unnecessary call your api multiple times. Instead, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"typeahead")," control reference, so your api will be called only when user selects options from suggestions and optimize your app.")))}y.isMDXComponent=!0}}]);