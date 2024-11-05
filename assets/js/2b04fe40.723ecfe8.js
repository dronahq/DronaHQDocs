"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[58545],{22236:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});a(67294);var n=a(3905);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const l={sidebar_position:96},i="Update DronaHQ version",d={unversionedId:"self-hosted-deployment/update-dronahq-to-latest",id:"self-hosted-deployment/update-dronahq-to-latest",title:"Update DronaHQ version",description:"While updating DronaHQ, users might need downtime. Its a good practice to always notify users about downtimes and newly installed updates. Also create backup of your instance and databases regularly before update. DronaHQ provide incremental updates for database. it should be performed in sequence. If you wish to downgrade your installation, you do not need to downgrade database.",source:"@site/docs/self-hosted-deployment/update-dronahq-to-latest.md",sourceDirName:"self-hosted-deployment",slug:"/self-hosted-deployment/update-dronahq-to-latest",permalink:"/self-hosted-deployment/update-dronahq-to-latest",draft:!1,tags:[],version:"current",lastUpdatedAt:1727788443,formattedLastUpdatedAt:"Oct 1, 2024",sidebarPosition:96,frontMatter:{sidebar_position:96},sidebar:"docSidebar",previous:{title:"Horizontal Scaling",permalink:"/self-hosted-deployment/horizontal-scaling"},next:{title:"Configure DocumentDB",permalink:"/self-hosted-deployment/configure-documentdb-storage"}},p={},u=[{value:"1. Notify users about downtime",id:"1-notify-users-about-downtime",level:3},{value:"2. Create a backup",id:"2-create-a-backup",level:3},{value:"3. Choose DronaHQ version",id:"3-choose-dronahq-version",level:3},{value:"4. Download database updates for target version.",id:"4-download-database-updates-for-target-version",level:3},{value:"5. Apply updates on your database",id:"5-apply-updates-on-your-database",level:3},{value:"a. Apply updates on containerized database",id:"a-apply-updates-on-containerized-database",level:5},{value:"b. Apply updates on external database",id:"b-apply-updates-on-external-database",level:5},{value:"6. Update DronaHQ version in service file.",id:"6-update-dronahq-version-in-service-file",level:3},{value:"a. For Docker installation",id:"a-for-docker-installation",level:5},{value:"b. For Kubernetes cluster installation",id:"b-for-kubernetes-cluster-installation",level:5},{value:"7. Restart DronaHQ service",id:"7-restart-dronahq-service",level:3},{value:"a. Restart Docker installation",id:"a-restart-docker-installation",level:5},{value:"b. Restart Kubernetes installation",id:"b-restart-kubernetes-installation",level:5},{value:"8. Clear cache from your content delivery partner",id:"8-clear-cache-from-your-content-delivery-partner",level:3}],c={toc:u},h="wrapper";function f(e){var{components:t}=e,a=s(e,["components"]);return(0,n.kt)(h,r(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){o(e,t,a[t])}))}return e}({},c,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"update-dronahq-version"},"Update DronaHQ version"),(0,n.kt)("p",null,"While updating DronaHQ, users might need downtime. Its a good practice to always notify users about downtimes and newly installed updates. Also create backup of your instance and databases regularly before update. DronaHQ provide incremental updates for database. it should be performed in sequence. If you wish to downgrade your installation, you do not need to downgrade database."),(0,n.kt)("h3",{id:"1-notify-users-about-downtime"},"1. Notify users about downtime"),(0,n.kt)("p",null,"Its always helpful to send announcements before performing any activity slightly before you start downtime."),(0,n.kt)("h3",{id:"2-create-a-backup"},"2. Create a backup"),(0,n.kt)("p",null,"Create backup of your server instance before upgrading so that you can restore them if needed."),(0,n.kt)("p",null,"If you are using any cloud service like AWS, GCP, Azure, the cloud provider might have a convenient way to backup and restore state of your instance."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Backup your MySQL and Mongo database. If you have setup your databases with a managed service like AWS, they provide a managed way to take periodic backup of your databases. You can also take snapshots of your database to restore is faster in case of any failure.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Also, take backup of your environment variables specific to your installation and store in safe place."))),(0,n.kt)("h3",{id:"3-choose-dronahq-version"},"3. Choose DronaHQ version"),(0,n.kt)("p",null,"Check ",(0,n.kt)("a",{parentName:"p",href:"https://docs.dronahq.com/selfhosted-stable/"},"Stable Releases")," page to see available DronaHQ updates and its changelogs. always read changelogs between your current version and the version you are upgrading to. It may also include notification and instructions for managing deprecated features."),(0,n.kt)("p",null,"It is highly recommended for you to frequently check updates and always be on latest version."),(0,n.kt)("h3",{id:"4-download-database-updates-for-target-version"},"4. Download database updates for target version."),(0,n.kt)("p",null,"Following is a interactive shell script, which will help you download the database updates for the upgrade version you choose."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://license.dronahq.com/self-hosted/master/get-database-updates.sh)"\n')),(0,n.kt)("p",null,"Above line will download an update file with name ",(0,n.kt)("inlineCode",{parentName:"p"},"update.sql")," in your working directory."),(0,n.kt)("h3",{id:"5-apply-updates-on-your-database"},"5. Apply updates on your database"),(0,n.kt)("h5",{id:"a-apply-updates-on-containerized-database"},"a. Apply updates on containerized database"),(0,n.kt)("p",null,"Run following command to apply updates on  containerized database."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker exec -i dronahq-self-hosted-mysqldb /usr/bin/mysql -u root --password=<% root password %> <%db name%> < update.sql\n")),(0,n.kt)("h5",{id:"b-apply-updates-on-external-database"},"b. Apply updates on external database"),(0,n.kt)("p",null,"Run following command to apply updates on  external database."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql --host=<% host %> --port=<% port %> --user=<% username %> --password=<% password %> <%db name%> < update.sql\n")),(0,n.kt)("h3",{id:"6-update-dronahq-version-in-service-file"},"6. Update DronaHQ version in service file."),(0,n.kt)("h5",{id:"a-for-docker-installation"},"a. For Docker installation"),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml"),", change the image tag to indicate the version of DronaHQ to install. The following example specifies the image tag to install version ",(0,n.kt)("inlineCode",{parentName:"p"},"2.2.8"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"services:\n...\n  webapp:\n    image: dronahq/self-hosted:2.2.8\n...\n")),(0,n.kt)("h5",{id:"b-for-kubernetes-cluster-installation"},"b. For Kubernetes cluster installation"),(0,n.kt)("p",null,"In ",(0,n.kt)("inlineCode",{parentName:"p"},"dronahq-webapp.yaml"),", change the image tag to indicate the version of DronaHQ to install. The following example specifies the image tag to install version ",(0,n.kt)("inlineCode",{parentName:"p"},"2.2.8"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"...\nspec:\n  template:\n    spec:\n      containers:\n        - image: dronahq/self-hosted:2.2.8\n...\n")),(0,n.kt)("h3",{id:"7-restart-dronahq-service"},"7. Restart DronaHQ service"),(0,n.kt)("p",null,"Restart is mandatory for new updates to take effect."),(0,n.kt)("h5",{id:"a-restart-docker-installation"},"a. Restart Docker installation"),(0,n.kt)("p",null,"Restart DronaHQ docker container with following command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo docker-compose up -d webapp\n")),(0,n.kt)("h5",{id:"b-restart-kubernetes-installation"},"b. Restart Kubernetes installation"),(0,n.kt)("p",null,"Apply modified manifest file with following command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo kubectl apply -f dronahq-webapp.yaml\n")),(0,n.kt)("h3",{id:"8-clear-cache-from-your-content-delivery-partner"},"8. Clear cache from your content delivery partner"),(0,n.kt)("p",null,"If you are using a CDN - Content Delivery Network, you should know that it also caches content (pages/ scripts/ images/ videos) in servers that are located closer to the users than the origin servers. "),(0,n.kt)("p",null,"This way, when a request is made on a website that is using a content delivery network, the CDN will deliver it faster, as the server storing the cached content will be situated closer to the user making the request. However, this content needs to be flushed after updating DronaHQ so that users will get the latest updated files. This cached content can be removed, by clearing/purging/flushing the CDN cache."),(0,n.kt)("p",null,"For ",(0,n.kt)("strong",{parentName:"p"},"Cloudflare")," : You can refer ",(0,n.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/cache/how-to/purge-cache/"},"this article")," on clearing cache."),(0,n.kt)("p",null,"Depending on your content delivery partner, you may refer to their respective configuration for clearing cache."))}f.isMDXComponent=!0}}]);