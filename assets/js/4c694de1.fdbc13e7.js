"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[58560],{67405:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(31984);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o=e=>{var{to:t}=e,a=l(e,["to"]);return n.createElement(r.Z,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){i(e,t,a[t])}))}return e}({to:`${t}`},a))}},3385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>p,toc:()=>m});a(67294);var n=a(3905),r=a(67405),i=a(86291);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const u={sidebar_position:1,title:"Firebase"},c=void 0,p={unversionedId:"reference/connectors/firebase",id:"reference/connectors/firebase",title:"Firebase",description:"Firebase is a highly durable database that can scale automatically to handle your application\u2019s load. This article provides a comprehensive guide on how to configure and use Firebase services, including Firebase Auth (User Management), Firebase Realtime Database, and Firestore, using DronaHQ.",source:"@site/docs/reference/connectors/firebase.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/firebase",permalink:"/reference/connectors/firebase",draft:!1,tags:[],version:"current",lastUpdatedAt:1717527774,formattedLastUpdatedAt:"Jun 4, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Firebase"},sidebar:"docSidebar",previous:{title:"Elastic Search",permalink:"/reference/connectors/elastic-search"},next:{title:"Freshdesk",permalink:"/reference/connectors/freshdesk"}},d={},m=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring Connector in DronaHQ",id:"configuring-connector-in-dronahq",level:2},{value:"General",id:"general",level:4},{value:"Admin",id:"admin",level:4},{value:"Adding Queries for Firebase",id:"adding-queries-for-firebase",level:2},{value:"Using Firebase Connector",id:"using-firebase-connector",level:2},{value:"Service - Firestore",id:"service---firestore",level:3},{value:"Insert Document",id:"insert-document",level:4},{value:"Service - Firebase Auth (User Management)",id:"service---firebase-auth-user-management",level:3},{value:"Get User By Provider UID",id:"get-user-by-provider-uid",level:4},{value:"Update a User",id:"update-a-user",level:4},{value:"Service - Firebase Realtime Database",id:"service---firebase-realtime-database",level:3},{value:"Appending Data to a List",id:"appending-data-to-a-list",level:4}],k={toc:m},b="wrapper";function g(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(b,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){l(e,t,a[t])}))}return e}({},k,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Firebase is a highly durable database that can scale automatically to handle your application\u2019s load. This article provides a comprehensive guide on how to configure and use Firebase services, including Firebase Auth (User Management), Firebase Realtime Database, and Firestore, using DronaHQ."),(0,n.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Firebase Configuration Details: Obtain the necessary configuration details from the Firebase console. Navigate to\nyour Project settings and select the Service accounts tab. Click on the Firebase Admin SDK icon, and generate a new\nprivate key. This action will result in the download of a JSON file. Extract the Private key from the downloaded JSON\nfile, as you will need it for configuring the Firebase Connector."),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/reference/connectors/firebase-all/sdk.jpeg",alt:"Obtaining details from Firebase Console",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Obtaining details from Firebase Console")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Optionally, Google Cloud Platform Account Key: If preferred, you can create an account key from your Google Cloud\nPlatform (GCP) console. Follow these steps:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Select a project in your GCP console."),(0,n.kt)("li",{parentName:"ol"},'Click on "Create Service Account" and assign the role of "Firebase Admin."'),(0,n.kt)("li",{parentName:"ol"},"Opt for a JSON Key type and proceed to download the generated file. Ensure to keep this file accessible, as it\nwill be required for configuring the connector.")))),(0,n.kt)("h2",{id:"configuring-connector-in-dronahq"},"Configuring Connector in DronaHQ"),(0,n.kt)("p",null,"Configure your database category using the provided details. Validate connection with ",(0,n.kt)("inlineCode",{parentName:"p"},"Test connection")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Save"),"\nsettings for secure database setup."),(0,n.kt)("h4",{id:"general"},"General"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Firebase Database URL"),(0,n.kt)("td",{parentName:"tr",align:null},"Enter the URL of your Firebase Realtime Database, e.g., ",(0,n.kt)("inlineCode",{parentName:"td"},"https://your-project.firebaseio.com"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Private Key"),(0,n.kt)("td",{parentName:"tr",align:null},"Paste the contents of the Private Key obtained from the Firebase console or GCP console.")))),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/reference/connectors/firebase-all/firebase-details.jpeg",alt:"Firebase Configuration details",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Firebase Configuration details"))),(0,n.kt)("h4",{id:"admin"},"Admin"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Advanced Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Connection Options"),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("inlineCode",{parentName:"td"},"key")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"value")," connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)(r.Z,{to:"/datasource-concepts/whitelisting-dronahq-ip/",mdxType:"VersionedLink"}," Whitelist IP ")),(0,n.kt)("td",{parentName:"tr",align:null},"Enhance security by restricting database access to specific whitelisted IP addresses.")))),(0,n.kt)("h2",{id:"adding-queries-for-firebase"},"Adding Queries for Firebase"),(0,n.kt)("p",null,"Upon successful configuration of the Firebase connector, you gain the ability to handle\nuser-related operations, and you can adeptly manage data-related operations."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Define Query Name: Provide a unique name for your data management query. This name will serve as an identifier in your Connector Library for easy access and management.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Service: Select from the dropdown of list of services provided by the configured Firebase connector. The services available are: ",(0,n.kt)("inlineCode",{parentName:"p"},"firestore"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"firebase auth")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"firebase real time db"),"."),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/reference/connectors/firebase-all/firebase-service.jpeg",alt:"Firebase Auth",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Firebase Auth")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Action : Select the action you want to perform with respect to the selected service. Depending on the selected service, various actions are available to opt from while adding a query."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Action"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("b",null," Firestore ")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Query Firestore"),(0,n.kt)("td",{parentName:"tr",align:null},"Execute a query to retrieve documents from a Firestore collection based on specified criteria.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Insert Document"),(0,n.kt)("td",{parentName:"tr",align:null},"Insert a new document into a Firestore collection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Update Document"),(0,n.kt)("td",{parentName:"tr",align:null},"Update an existing document within a Firestore collection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Get Document by ID"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve a document from a Firestore collection by its unique identifier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Delete Document"),(0,n.kt)("td",{parentName:"tr",align:null},"Delete a document from a Firestore collection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Get Collections"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve a list of collections within a Firestore database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Query Collection Groups"),(0,n.kt)("td",{parentName:"tr",align:null},"Execute a query to retrieve documents from multiple collections that share the same ID.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("b",null," Firebase Auth ")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"List Users"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve a list of users from the Firebase Authentication system.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Get User by UID"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve a user by their unique identifier (UID).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Get User by Phone Number"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve a user by their associated phone number.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Get User by Email"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve a user by their associated email address.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Get User by Provider UID"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve a user by their unique identifier assigned by an authentication provider.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Create a User"),(0,n.kt)("td",{parentName:"tr",align:null},"Create a new user account in the Firebase Authentication system.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Update a User"),(0,n.kt)("td",{parentName:"tr",align:null},"Update an existing user's attributes or properties.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Delete a User"),(0,n.kt)("td",{parentName:"tr",align:null},"Delete a user account from the Firebase Authentication system.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("b",null," Firebase Realtime DB ")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Query Firebase data"),(0,n.kt)("td",{parentName:"tr",align:null},"Retrieve data from the Firebase Realtime Database based on specified criteria.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Set Data"),(0,n.kt)("td",{parentName:"tr",align:null},"Add or update data at a specific path within the Firebase Realtime Database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Update Data"),(0,n.kt)("td",{parentName:"tr",align:null},"Modify existing data at a specific path within the Firebase Realtime Database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Append data to the list"),(0,n.kt)("td",{parentName:"tr",align:null},"Add new data to an existing list at a specific path within the Firebase Realtime Database.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Delete data"),(0,n.kt)("td",{parentName:"tr",align:null},"Remove data from a specific path within the Firebase Realtime Database.")))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set Additional Parameters: Depending on your specific requirements, utilize optional parameters to refine the\nperforming query. Customize the query by implementing filters, sorting criteria, or other pertinent options.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Test and Execute: Prior to finalizing, conduct a test run to verify the query's functionality. Ensure that the\ndata appears correctly within the designated service in your Firebase connector."))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Use double curly brackets for dynamic variables. Test with sample values before saving. Link dynamic variables to\ncontrols/actions and more for runtime use. ")),(0,n.kt)("p",null,"Saved queries appear under your connector in Connector Library."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"You cannot edit the ",(0,n.kt)("inlineCode",{parentName:"p"},"service")," of a query, once the query is already tested and added.")),(0,n.kt)("h2",{id:"using-firebase-connector"},"Using Firebase Connector"),(0,n.kt)("h3",{id:"service---firestore"},"Service - Firestore"),(0,n.kt)("h4",{id:"insert-document"},"Insert Document"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Access Data Management Section or Control Action:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Begin by navigating to the data management section or the control action where you want to interact with your\nFirestore database."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select Firebase Firestore Connector:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Choose the Firebase Firestore Connector from your available options.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Opt for the "Insert Document" action to add new data to your Firestore collection.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Provide a Document ID if desired; otherwise, leave it blank for auto-generation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ensure that the data is in valid JSON format."),(0,n.kt)("figure",null,(0,n.kt)("img",{src:"/img/reference/connectors/firebase-all/fire-store-add-data.jpeg",alt:"Firestore Insert Document action"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Firestore Insert Document action")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configuration for Data Input:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Configure the action by providing the necessary data in a valid JSON format.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"This could involve collecting data from a form submission and adding it using the action."),(0,n.kt)("figure",null,(0,n.kt)("img",{src:"/img/reference/connectors/firebase-all/fire-store-form-example.jpeg",alt:"Firestore Form Example"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Firestore Form Example")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute the Action Flow:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Configure the Connector within the Action Flow or Server Side actions."),(0,n.kt)("li",{parentName:"ul"},"Link the action to a button click or relevant trigger."),(0,n.kt)("li",{parentName:"ul"},"When the form is submitted, the action flow triggers the Connector to save data to your Firestore collection."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirmation and Display:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"After the action is executed, use popup or toast actions to display relevant information, such as the created\ndocument ID."),(0,n.kt)("li",{parentName:"ul"},"You can also display the added data in a table grid or any other appropriate visualization.")))),(0,n.kt)("figure",null,(0,n.kt)("img",{src:"/img/reference/connectors/firebase-all/result.jpeg",alt:"Firestore Form Example"})),(0,n.kt)("h3",{id:"service---firebase-auth-user-management"},"Service - Firebase Auth (User Management)"),(0,n.kt)("h4",{id:"get-user-by-provider-uid"},"Get User By Provider UID"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Access Data Bind Section or Control Action:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Navigate to the data bind section of the control."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select Firebase Auth (User Management) Connector from ",(0,n.kt)("inlineCode",{parentName:"p"},"Data Bind Options -> Quick Select -> User Queries"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Choose Firebase Auth (User Management) Connector from the available options."),(0,n.kt)("li",{parentName:"ul"},'Opt for the "Get User By Provider UID" query to retrieve user details using the provider UID.'),(0,n.kt)("li",{parentName:"ul"},'Click on "Continue" to proceed.')))),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/reference/connectors/firebase-all/get-user-provider-uid.png",alt:"Get User By Provider UID query",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Get User By Provider UID query"))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Test and Finalize:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Execute the query by testing it with dynamic values for the provider UID."),(0,n.kt)("li",{parentName:"ul"},"Upon successful testing, finalize the configuration.")))),(0,n.kt)("p",null,"By adhering to these steps, you can seamlessly harness the capabilities of the Firebase Auth (User Management) Connector\nto retrieve user details based on the provider UID. This enhances your ability to work with user data effectively within\nyour application, providing an optimized user management experience."),(0,n.kt)("h4",{id:"update-a-user"},"Update a User"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Update a User")," action provides a method to modify attributes of an established Firebase Authentication user. This\naction requires the user's UID (unique identifier) along with an object containing the desired profile information or\nuser properties to update within the user account's data."),(0,n.kt)("p",null,"When updating user details by referencing their UID, you can dynamically provide all values, enabling users to\nconveniently pass the necessary details as parameters to the connector."),(0,n.kt)("p",null,"In the example below, we demonstrate updating the email address of a user through their UID."),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/reference/connectors/firebase-all/update-email.png",alt:"Updating a user's email address",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Updating a user's email address"))),(0,n.kt)("p",null,"To provide details to make the call, you can use various input controls and actions. Later with controls you can\nshowcase the end result of data after changes."),(0,n.kt)("p",null,"We'll be using input field to get the UID and emails to pass it as keyword parameters and display the final response in\nJSON viewer."),(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/reference/connectors/firebase-all/usecase.png",alt:"Updating a user's email address",mdxType:"Thumbnail"})),(0,n.kt)("h3",{id:"service---firebase-realtime-database"},"Service - Firebase Realtime Database"),(0,n.kt)("h4",{id:"appending-data-to-a-list"},"Appending Data to a List"),(0,n.kt)("p",null,"To append data to a list within the Firebase Realtime Database using the Firebase Realtime Database Connector, follow\nthese steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Access Data Bind Section or Control Action:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Navigate to the data bind section of the control."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select Firebase Realtime Database Connector from ",(0,n.kt)("inlineCode",{parentName:"p"},"Data Bind Options -> Quick Select -> Data Queries"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Choose Firebase Realtime Database Connector from the available options."),(0,n.kt)("li",{parentName:"ul"},'Select the "Append data to a list" action to add new data to an existing list.'),(0,n.kt)("li",{parentName:"ul"},'Click on "Continue" to proceed.',(0,n.kt)("figure",null,(0,n.kt)(i.Z,{src:"/img/reference/connectors/firebase-all/append.jpeg",alt:"Firebase Realtime Database with append query.",mdxType:"Thumbnail"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Firebase Realtime Database with append query.")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure Data Input:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Specify the Database Ref, which is the reference to the existing list where you want to append data."),(0,n.kt)("li",{parentName:"ul"},"Provide the values to append as dynamic values. This can include any type of data, arrays, or objects."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Integrate with Controls and Actions:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Integrate this query into your workflow by adding controls like a TextInput field for user input."),(0,n.kt)("li",{parentName:"ul"},"Create an action flow that triggers the Connector action to append data."),(0,n.kt)("li",{parentName:"ul"},"Configure the connector to pass the value from the TextInput control as input.")))),(0,n.kt)("figure",null,(0,n.kt)("img",{src:"/img/reference/connectors/firebase-all/append-data-workflow.jpeg",alt:"Append data workflow"}),(0,n.kt)("figcaption",{align:"center"},(0,n.kt)("i",null,"Append data workflow"))))}g.isMDXComponent=!0}}]);