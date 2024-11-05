"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[70134],{58479:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});o(67294);var t=o(3905);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})),e}function l(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const i={sidebar_position:1},s="Deploy on local Linux or MacOS machine",d={unversionedId:"self-hosted-deployment/deployment-options/local-machine",id:"self-hosted-deployment/deployment-options/local-machine",title:"Deploy on local Linux or MacOS machine",description:"DronaHQ Self Hosted supports local installation on your Linux based OS or MacOS using Docker.",source:"@site/docs/self-hosted-deployment/deployment-options/local-machine.md",sourceDirName:"self-hosted-deployment/deployment-options",slug:"/self-hosted-deployment/deployment-options/local-machine",permalink:"/self-hosted-deployment/deployment-options/local-machine",draft:!1,tags:[],version:"current",lastUpdatedAt:1721738712,formattedLastUpdatedAt:"Jul 23, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"Deployment options",permalink:"/category/deployment-options"},next:{title:"Deploy on Amazon Elastic Compute Cloud",permalink:"/self-hosted-deployment/deployment-options/aws-ec2"}},p={},c=[{value:"Prerequisite",id:"prerequisite",level:3},{value:"1. Download DronaHQ Self Hosted",id:"1-download-dronahq-self-hosted",level:3},{value:"a. Cloning Git repository",id:"a-cloning-git-repository",level:4},{value:"b. Download and extract compressed package from DronaHQ",id:"b-download-and-extract-compressed-package-from-dronahq",level:4},{value:"2. Change working directory",id:"2-change-working-directory",level:3},{value:"3. Update resources",id:"3-update-resources",level:3},{value:"4. Setup DronaHQ Environment",id:"4-setup-dronahq-environment",level:3},{value:"5. Update environment variables",id:"5-update-environment-variables",level:3},{value:"i. <code>LICENSE_KEY</code>",id:"i-license_key",level:4},{value:"ii. <code>BUILDER_URL</code>",id:"ii-builder_url",level:4},{value:"iii. Other environment variables",id:"iii-other-environment-variables",level:4},{value:"6. Restart DronaHQ",id:"6-restart-dronahq",level:3},{value:"7. Verify that containers are running",id:"7-verify-that-containers-are-running",level:3},{value:"Hurray !!! Now you have working self hosted DronaHQ.",id:"hurray--now-you-have-working-self-hosted-dronahq",level:4}],u={toc:c},m="wrapper";function h(e){var{components:n}=e,i=l(e,["components"]);return(0,t.kt)(m,r(function(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),t.forEach((function(n){a(e,n,o[n])}))}return e}({},u,i),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"deploy-on-local-linux-or-macos-machine"},"Deploy on local Linux or MacOS machine"),(0,t.kt)("p",null,"DronaHQ Self Hosted supports local installation on your Linux based OS or MacOS using ",(0,t.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),"."),(0,t.kt)("admonition",{title:"Attention",type:"info"},(0,t.kt)("p",{parentName:"admonition"},"We recommend you to deploy DronaHQ Self Hosted on cloud hosted virtual machines such as ",(0,t.kt)("a",{parentName:"p",href:"/self-hosted-deployment/deployment-options/aws-ec2"},"AWS EC2"),", ",(0,t.kt)("a",{parentName:"p",href:"/self-hosted-deployment/deployment-options/azure"},"Azure VM"),", or ",(0,t.kt)("a",{parentName:"p",href:"/self-hosted-deployment/deployment-options/gcp"},"GCP Compute Engine"),". Their hardware and operating systems are more standardized make it best fit for production use cases. If you are deploying DronaHQ on a physical machine then verify that your system is matching minimum criteria for network and storage ",(0,t.kt)("a",{parentName:"p",href:"/self-hosted-deployment/requirements"},"requirements"),".")),(0,t.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,t.kt)("p",null,"To deploy DronaHQ on your local machine you should have:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"DronaHQ Self Hosted license key. you can get your license key from ",(0,t.kt)("a",{parentName:"li",href:"https://studio.dronahq.com/selfhosted/login"},"Self Hosted Portal"),"."),(0,t.kt)("li",{parentName:"ul"},"Working installation of ",(0,t.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/"},"Docker Desktop"),".")),(0,t.kt)("h3",{id:"1-download-dronahq-self-hosted"},"1. Download DronaHQ Self Hosted"),(0,t.kt)("p",null,"There are two ways, you can download DronaHQ Self Hosted."),(0,t.kt)("h4",{id:"a-cloning-git-repository"},"a. Cloning Git repository"),(0,t.kt)("p",null,"Prevent Git from automatically converting line endings between CRLF and LF, ensuring consistent handling across different platforms."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global core.autocrlf false\n")),(0,t.kt)("p",null,"To clone from git repository, run following command."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/dronahq/self-hosted.git dronahq-self-hosted\n")),(0,t.kt)("p",null,"Above command will create new folder in your present working directory with name ",(0,t.kt)("inlineCode",{parentName:"p"},"dronahq-self-hosted"),"."),(0,t.kt)("h4",{id:"b-download-and-extract-compressed-package-from-dronahq"},"b. Download and extract compressed package from DronaHQ"),(0,t.kt)("p",null,"To download compressed package from DronaHQ, run following command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'curl -L -fsSL -o ./master.zip "https://license.dronahq.com/self-hosted/master.zip" && unzip master.zip && mv master dronahq-self-hosted\n')),(0,t.kt)("h3",{id:"2-change-working-directory"},"2. Change working directory"),(0,t.kt)("p",null,"We have to change working directory to ",(0,t.kt)("inlineCode",{parentName:"p"},"dronahq-self-hosted")," for playing with DronaHQ."),(0,t.kt)("p",null,"Use following command."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"cd dronahq-self-hosted\n")),(0,t.kt)("h3",{id:"3-update-resources"},"3. Update resources"),(0,t.kt)("p",null,"This is recommended step by DronaHQ. Updating your resources periodically will help you stay aligned with DronaHQ."),(0,t.kt)("p",null,"Run following command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://license.dronahq.com/self-hosted/master/update_resources.sh)"\n')),(0,t.kt)("h3",{id:"4-setup-dronahq-environment"},"4. Setup DronaHQ Environment"),(0,t.kt)("admonition",{title:"Warning",type:"caution"},(0,t.kt)("p",{parentName:"admonition"},"Running this script will clear your existing installation if you have any. It will setup completely new environment. It will create back of your current environment and storage directory with time stamp followed by file/folder name.")),(0,t.kt)("p",null,"To setup dronahq environment, you have to run ",(0,t.kt)("inlineCode",{parentName:"p"},"./dronahq_setup")," already present in your working directory."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"./dronahq_setup\n")),(0,t.kt)("h3",{id:"5-update-environment-variables"},"5. Update environment variables"),(0,t.kt)("p",null,"DronaHQ writes all configurable environment variables in file ",(0,t.kt)("inlineCode",{parentName:"p"},"dronahq.env"),". Please make sure you have all mandatory variables are in place."),(0,t.kt)("h4",{id:"i-license_key"},"i. ",(0,t.kt)("inlineCode",{parentName:"h4"},"LICENSE_KEY")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"LICENSE_KEY")," is one of the mandatory and essential environment variable. please verify that you have it in ",(0,t.kt)("inlineCode",{parentName:"p"},"dronahq.env"),".\nIf not you can add this variable. Following is the example of how this variable should look like in environment file."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"LICENSE_KEY='DRONAHQ-LICENSE-KEY'\n")),(0,t.kt)("p",null,"If you don't have DronaHQ license key for self hosted, you can ",(0,t.kt)("a",{parentName:"p",href:"https://www.dronahq.com/self-hosted-signup/"},"sign up")," for DronaHQ self hosted and get your license key by logging in to ",(0,t.kt)("a",{parentName:"p",href:"https://studio.dronahq.com/selfhosted/login"},"self-hosted portal"),"."),(0,t.kt)("h4",{id:"ii-builder_url"},"ii. ",(0,t.kt)("inlineCode",{parentName:"h4"},"BUILDER_URL")),(0,t.kt)("p",null,"This variable specifies how do yo want to access DronaHQ."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Protocol ","[ http/ https]"),(0,t.kt)("li",{parentName:"ul"},"Access domain ","[ Localhost/ IP address/ Domain Name]"," ")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Example 1"),". If you are using DronaHQ on local machine."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"BUILDER_URL='http://localhost'\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Example 2"),". If you have configured DronaHQ on server and want to use it with server's public IP address."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"# replace your ip address here\nBUILDER_URL='http://10.100.3.21'\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Example 3"),". If you have mapped your domain name to server's IP address."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"# replace your domain name\nBUILDER_URL='http://dronahq.example.com'\n")),(0,t.kt)("h4",{id:"iii-other-environment-variables"},"iii. Other environment variables"),(0,t.kt)("p",null,"You can also checkout other ",(0,t.kt)("a",{parentName:"p",href:"/self-hosted-deployment/environment-variables"},"Environment Variables"),", which can enable advance options for you to use DronaHQ Self Hosted."),(0,t.kt)("h3",{id:"6-restart-dronahq"},"6. Restart DronaHQ"),(0,t.kt)("p",null,"You can apply all new changes in configuration, and restart DronaHQ simply by running following command."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker-compose up -d\n")),(0,t.kt)("h3",{id:"7-verify-that-containers-are-running"},"7. Verify that containers are running"),(0,t.kt)("p",null,"You can use following command to check running docker containers."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker-compose ps\n")),(0,t.kt)("p",null,"It should look something like this"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"sudo docker-compose ps",src:o(14735).Z,title:"sudo docker-compose ps",width:"2064",height:"172"})),(0,t.kt)("h4",{id:"hurray--now-you-have-working-self-hosted-dronahq"},"Hurray !!! Now you have working self hosted DronaHQ."))}h.isMDXComponent=!0},14735:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/sudo-docker-compose-ps-206b6615f25a0d09b0951a56ea906b7c.png"}}]);