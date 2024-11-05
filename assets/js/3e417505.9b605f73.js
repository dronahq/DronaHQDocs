"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[69117],{67405:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(31984);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l=e=>{var{to:t}=e,n=o(e,["to"]);return r.createElement(a.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({to:`${t}`},n))}},18707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>h});n(67294);var r=n(3905),a=n(67405),i=n(86291);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={sidebar_position:1,title:"Shell Script"},p=void 0,u={unversionedId:"reference/connectors/shell-script",id:"reference/connectors/shell-script",title:"Shell Script",description:"The Shell Script connector enables you to execute a list of shell commands on a remote server such as AWS, Azure,",source:"@site/docs/reference/connectors/shell-script.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/shell-script",permalink:"/reference/connectors/shell-script",draft:!1,tags:[],version:"current",lastUpdatedAt:1725364795,formattedLastUpdatedAt:"Sep 3, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Shell Script"},sidebar:"docSidebar",previous:{title:"SFTP and FTP",permalink:"/reference/connectors/sftp-ftp"},next:{title:"Shopify",permalink:"/reference/connectors/shopify"}},d={},h=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring Connector in DronaHQ",id:"configuring-connector-in-dronahq",level:2},{value:"General",id:"general",level:4},{value:"Admin",id:"admin",level:4},{value:"Adding Queries to the Connector",id:"adding-queries-to-the-connector",level:2},{value:"Supported Query Operations",id:"supported-query-operations",level:2},{value:"Using Shell Script Connector",id:"using-shell-script-connector",level:2},{value:"Data Bind using Data Query",id:"data-bind-using-data-query",level:3},{value:"Read/Display Data Query for Shell Script Connector:",id:"readdisplay-data-query-for-shell-script-connector",level:4}],m={toc:h},y="wrapper";function f(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(y,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Shell Script connector enables you to execute a list of shell commands on a remote server such as AWS, Azure,\nDroplet, and more by establishing an SSH connection."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SSH Key Requirement: The Shell Script connector operates using an SSH Key. Therefore, it is essential to have an SSH\nkey associated with your DronaHQ account. If you are unfamiliar with SSH keys and their management, you can learn\nmore about them ",(0,r.kt)("a",{parentName:"p",href:"/connecting-via-ssh-keys/"},"here"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Server Configuration: The server you intend to connect to must have the public key generated by DronaHQ (known as the\nSSH Key) saved within its configuration. This step is crucial for enabling successful connections from the DronaHQ\nenvironment to the server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SSH Public Key Storage: To facilitate the connection, the SSH public key generated by DronaHQ must be stored on the\nremote cloud server. Typically, this involves placing the SSH public key in the authorized SSH key file located at\n",(0,r.kt)("inlineCode",{parentName:"p"},"/home/username/.ssh/authorized-keys")," on the remote server."))),(0,r.kt)("h2",{id:"configuring-connector-in-dronahq"},"Configuring Connector in DronaHQ"),(0,r.kt)("p",null,"Configure your database category using the provided details. Validate connection with ",(0,r.kt)("inlineCode",{parentName:"p"},"Test connection")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Save"),"\nsettings for secure database setup."),(0,r.kt)("h4",{id:"general"},"General"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Host Domain or IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Port number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Database Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Database name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Username")))),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{src:"/img/reference/connectors/shellscript/details.png",alt:"Shell Script with Sample details.",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Shell Script with Sample details."))),(0,r.kt)("h4",{id:"admin"},"Admin"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Advanced Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection Options"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSH Keys"),(0,r.kt)("td",{parentName:"tr",align:null},"Ensure you have SSH keys available in your DronaHQ account for secure connections. The server you want to connect to must have the DronaHQ-generated public key/SSH Key saved in it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(a.Z,{to:"/datasource-concepts/whitelisting-dronahq-ip/",mdxType:"VersionedLink"}," Whitelist IP ")),(0,r.kt)("td",{parentName:"tr",align:null},"Enhance security by restricting database access to specific whitelisted IP addresses.")))),(0,r.kt)("h2",{id:"adding-queries-to-the-connector"},"Adding Queries to the Connector"),(0,r.kt)("p",null,"Once you have successfully configured the connector, you will find it listed among your Custom Database connectors."),(0,r.kt)("p",null,"While the server can execute various actions through shell scripts on the backend, utilizing the terminal for these\nactions can be intricate. To simplify this process and provide a more user-friendly experience, you have the option to\nleverage a platform that enables smoother action execution."),(0,r.kt)("p",null,"By clicking the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add query")," option, which becomes available after your connection is established, you can conveniently\ndefine specific actions to perform on the server."),(0,r.kt)("figure",null,(0,r.kt)(i.Z,{src:"/img/reference/connectors/shellscript/query.png",alt:"Shell Script with Sample details.",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Shell Script with Sample details."))),(0,r.kt)("h2",{id:"supported-query-operations"},"Supported Query Operations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operations"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shell Command"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute custom shell commands directly, facilitating a wide range of server-side operations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Script Execution"),(0,r.kt)("td",{parentName:"tr",align:null},"Run pre-defined shell scripts or shell script files to accomplish specific tasks or workflows.")))),(0,r.kt)("h2",{id:"using-shell-script-connector"},"Using Shell Script Connector"),(0,r.kt)("h3",{id:"data-bind-using-data-query"},"Data Bind using Data Query"),(0,r.kt)("h4",{id:"readdisplay-data-query-for-shell-script-connector"},"Read/Display Data Query for Shell Script Connector:"),(0,r.kt)("p",null,'Begin by crafting a shell script command to extract data using the Shell Script Connector. For example, consider a\nscenario where you want to retrieve data based on the username "a". The shell script command is:'),(0,r.kt)("p",null,"Shell script command used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'grep "a" /path/to/datafile.txt\n')),(0,r.kt)("p",null,"Command explanation:"),(0,r.kt)("p",null,"This shell script command uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"grep"),' utility to search for lines containing the username "a" in the specified data\nfile.'),(0,r.kt)("p",null,"Integrate the fetched data into your application's interface."),(0,r.kt)("p",null,"a. Access the Controls section and introduce the appropriate control for displaying the data."),(0,r.kt)("p",null,"b. Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Bind Options -> Quick Select -> Connector Library."),"."),(0,r.kt)("p",null,"c. Opt for the Shell Script connector and choose the command that aligns with your data retrieval goals."),(0,r.kt)("p",null,'By following these steps, you can seamlessly execute the shell script command and retrieve data based on the username\n"a" using the Shell Script Connector, enhancing your application\'s functionality and user experience.'))}f.isMDXComponent=!0}}]);