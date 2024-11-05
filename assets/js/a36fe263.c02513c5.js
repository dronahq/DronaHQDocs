"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[47391],{67405:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(31984);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l=e=>{var{to:t}=e,n=i(e,["to"]);return r.createElement(a.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({to:`${t}`},n))}},50785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>m});n(67294);var r=n(3905),a=n(67405),o=n(86291);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const d={sidebar_position:1,title:"SFTP and FTP"},p=void 0,s={unversionedId:"reference/connectors/sftp-ftp",id:"reference/connectors/sftp-ftp",title:"SFTP and FTP",description:"SFTP (SSH File Transfer Protocol) and FTP (File Transfer Protocol) are connectors provided by DronaHQ. SFTP ensures",source:"@site/docs/reference/connectors/sftp-ftp.md",sourceDirName:"reference/connectors",slug:"/reference/connectors/sftp-ftp",permalink:"/reference/connectors/sftp-ftp",draft:!1,tags:[],version:"current",lastUpdatedAt:1711462218,formattedLastUpdatedAt:"Mar 26, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"SFTP and FTP"},sidebar:"docSidebar",previous:{title:"Sequin",permalink:"/reference/connectors/sequin"},next:{title:"Shell Script",permalink:"/reference/connectors/shell-script"}},u={},m=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Configuring Connector in DronaHQ",id:"configuring-connector-in-dronahq",level:2},{value:"Protocol Type - SFTP configuration",id:"protocol-type---sftp-configuration",level:3},{value:"General",id:"general",level:4},{value:"Admin",id:"admin",level:4},{value:"Adding List Directory Queries to SFTP and FTP Connectors",id:"adding-list-directory-queries-to-sftp-and-ftp-connectors",level:2},{value:"Supported Actions",id:"supported-actions",level:4},{value:"Downloading file from the remote location",id:"downloading-file-from-the-remote-location",level:3}],f={toc:m},k="wrapper";function h(e){var{components:t}=e,n=c(e,["components"]);return(0,r.kt)(k,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SFTP (SSH File Transfer Protocol) and FTP (File Transfer Protocol) are connectors provided by DronaHQ. SFTP ensures\nsecure file transfer using encryption, while FTP is a standard protocol for transferring files between a client and a\nserver on a network."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Server Authentication: To use the SFTP or FTP connector provided by DronaHQ, you need valid authentication\ncredentials. Choose either of the following options:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Username and password for FTP authentication."),(0,r.kt)("li",{parentName:"ul"},"SSH key pair for SFTP authentication."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connection Details:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Server Hostname or IP address for communication."),(0,r.kt)("li",{parentName:"ul"},"Port number for connecting to the server (21 for FTP, 22 for SFTP)."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"File Locations: Familiarize yourself with the server's directory structure where you'll be performing file\noperations.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connection Mode: Understand whether the connection requires Active or Passive mode, especially for FTP connections."))),(0,r.kt)("h2",{id:"configuring-connector-in-dronahq"},"Configuring Connector in DronaHQ"),(0,r.kt)("p",null,"Configure your database category using the provided details. Validate connection with ",(0,r.kt)("inlineCode",{parentName:"p"},"Test connection")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Save"),"\nsettings for secure database setup."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Choose from SFTP and FTP, depending on it you will be asked to configure respective required fields. ")),(0,r.kt)("h3",{id:"protocol-type---sftp-configuration"},"Protocol Type - SFTP configuration"),(0,r.kt)("h4",{id:"general"},"General"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Protocol Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Select from ",(0,r.kt)("inlineCode",{parentName:"td"},"SFTP")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"FTP")," Protocol types")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Host Domain or IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Port number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"Select authentication method between ",(0,r.kt)("inlineCode",{parentName:"td"},"Username and Password")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Private key"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"Enter the Password")))),(0,r.kt)("admonition",{title:"NOTE ",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Authentication")," field is available for SFTP protocol type. ")),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/reference/connectors/sftpftp/details.png",alt:"SFTP protocol with Sample details.",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"SFTP protocol with Sample details."))),(0,r.kt)("h4",{id:"admin"},"Admin"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Advanced Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection Options"),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," connection options in database configuration refer to specific settings (keys) and their corresponding values that dictate how the application connects to the database")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSH Keys"),(0,r.kt)("td",{parentName:"tr",align:null},"Ensure you have SSH keys available in your DronaHQ account for secure connections. The server you want to connect to must have the DronaHQ-generated public key/SSH Key saved in it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(a.Z,{to:"/datasource-concepts/whitelisting-dronahq-ip/",mdxType:"VersionedLink"}," Whitelist IP ")),(0,r.kt)("td",{parentName:"tr",align:null},"Enhance security by restricting database access to specific whitelisted IP addresses.")))),(0,r.kt)("h2",{id:"adding-list-directory-queries-to-sftp-and-ftp-connectors"},"Adding List Directory Queries to SFTP and FTP Connectors"),(0,r.kt)("p",null,"After successfully configuring the SFTP and FTP connectors, you can utilize the List Directory action to manage your\nfile directories. Here's how you can create and handle list directory queries for these protocols:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Query Definition: Give your query a unique name to easily identify and manage it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Action Choice: Select the List Directory action from the available options. This action retrieves a list of files and\ndirectories within the specified path.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set Path: Provide the path for the directory you want to list. This could be an absolute path or a relative path from\nthe root directory of the connected server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the Query: Once you've configured the action and parameters, you can execute the query by clicking ",(0,r.kt)("inlineCode",{parentName:"p"},"Test Query"),"\nThe response will be displayed based on the provided parameters, allowing you to review the retrieved data or the\noutcome of the query."))),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/reference/connectors/awsDocDB/add-query.png",alt:"Add Query",mdxType:"Thumbnail"}),(0,r.kt)("figcaption",{align:"center"},(0,r.kt)("i",null,"Add Query"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Utilize double curly brackets for incorporating dynamic variables. Prior to saving, test with sample values.\nAssociate dynamic variables with controls/actions for real-time utilization. ")),(0,r.kt)("p",null,"Your saved queries will be visible beneath your connector within the Connector Library."),(0,r.kt)("h4",{id:"supported-actions"},"Supported Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"listdir"),(0,r.kt)("td",{parentName:"tr",align:null},"List files and directories within a specified path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deletefile"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete a file from the remote directory.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changemode"),(0,r.kt)("td",{parentName:"tr",align:null},"Change the permissions (mode) of a file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mkdir"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a new directory in the remote location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rmdir"),(0,r.kt)("td",{parentName:"tr",align:null},"Remove an empty directory from the remote location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exists"),(0,r.kt)("td",{parentName:"tr",align:null},"Check if a file or directory exists in the remote location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stats"),(0,r.kt)("td",{parentName:"tr",align:null},"Retrieve file or directory stats (size, timestamps, etc.).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rename"),(0,r.kt)("td",{parentName:"tr",align:null},"Rename a file or directory in the remote location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"downloadfile"),(0,r.kt)("td",{parentName:"tr",align:null},"Download a file from the remote location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uploadfile"),(0,r.kt)("td",{parentName:"tr",align:null},"Upload a local file to the remote location.")))),(0,r.kt)("h3",{id:"downloading-file-from-the-remote-location"},"Downloading file from the remote location"),(0,r.kt)("p",null,"Let us assume that we have a form where we specify the source path of file. Let us add an action button that triggers the action flow to download file."),(0,r.kt)("p",null,"On the ",(0,r.kt)("inlineCode",{parentName:"p"},"button_click")," event of the action button, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"Server-side action")," and choose configured SFTP connector and select query whose action is downloadfile. Turn Download as File toggle on and click on finish."),(0,r.kt)("figure",null,(0,r.kt)(o.Z,{src:"/img/reference/connectors/sftpftp/downloadasFileSFTP.png",alt:"Download as a File toggle in SFTP",mdxType:"Thumbnail"})))}h.isMDXComponent=!0}}]);