"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[81704],{31574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});a(67294);var n=a(3905);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={sidebar_position:95,title:"Horizontal Scaling"},s=void 0,p={unversionedId:"self-hosted-deployment/horizontal-scaling",id:"self-hosted-deployment/horizontal-scaling",title:"Horizontal Scaling",description:"Prerequisites",source:"@site/docs/self-hosted-deployment/horizontal-scaling.md",sourceDirName:"self-hosted-deployment",slug:"/self-hosted-deployment/horizontal-scaling",permalink:"/self-hosted-deployment/horizontal-scaling",draft:!1,tags:[],version:"current",lastUpdatedAt:1704262921,formattedLastUpdatedAt:"Jan 3, 2024",sidebarPosition:95,frontMatter:{sidebar_position:95,title:"Horizontal Scaling"},sidebar:"docSidebar",previous:{title:"Configure SSL and CA Certificates",permalink:"/self-hosted-deployment/configure-ssl-and-ca-certificates"},next:{title:"Update DronaHQ version",permalink:"/self-hosted-deployment/update-dronahq-to-latest"}},m={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installing Self-Hosted DronaHQ",id:"installing-self-hosted-dronahq",level:2},{value:"Scaling DronaHQ Installation",id:"scaling-dronahq-installation",level:2}],d={toc:u},c="wrapper";function k(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)(c,o(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){r(e,t,a[t])}))}return e}({},d,a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Linux Virtual Machine"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ubuntu 20.04 or higher"),(0,n.kt)("li",{parentName:"ul"},"2 vCPUs"),(0,n.kt)("li",{parentName:"ul"},"Minimum 8 GiB of Memory"),(0,n.kt)("li",{parentName:"ul"},"Minimum 60 GiB of Storage"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Networking Requirements for Initial Setup:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"80 (http): for connecting to the server from the browser"),(0,n.kt)("li",{parentName:"ul"},"443 (https): for connecting to the server from the browser"),(0,n.kt)("li",{parentName:"ul"},"22 (SSH): To allow SSH access into your instance for configuration"),(0,n.kt)("li",{parentName:"ul"},"8080 (DronaHQ): Default port for DronaHQ")))),(0,n.kt)("h2",{id:"installing-self-hosted-dronahq"},"Installing Self-Hosted DronaHQ"),(0,n.kt)("p",null,"Follow the documentation for installing DronaHQ self-hosted. ",(0,n.kt)("a",{parentName:"p",href:"/self-hosted-deployment/deployment-options/local-machine"},"Click here")),(0,n.kt)("p",null,"The installation process initializes MySQL and MongoDB as Docker containers."),(0,n.kt)("h2",{id:"scaling-dronahq-installation"},"Scaling DronaHQ Installation"),(0,n.kt)("p",null,"To scale DronaHQ Self-Hosted, you'll need to set up a managed remote database for MySQL and MongoDB. Additionally, configure an AWS S3 bucket for storing files and other resources used by DronaHQ Self-Hosted."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Requirements"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MySQL RDS"),(0,n.kt)("li",{parentName:"ul"},"MongoDB RDS"),(0,n.kt)("li",{parentName:"ul"},"AWS S3 bucket"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Migrate MySQL from Docker Container to RDS"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Login to the self-hosted server"),(0,n.kt)("li",{parentName:"ul"},"Take a backup of the database using the following commands:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"cd ~/dronahq/self-hosted\n\nsudo docker exec -i dronahq-self-hosted-mysqldb /usr/bin/mysqldump -u root --password=<%password%> --databases dhq_audit_log db5x --add-drop-database --triggers --events --routines --single-transaction > mysqldump.sql\n\necho \"SET GLOBAL log_bin_trust_function_creators = 1;\" | cat - mysqldump.sql > /tmp/out && mv /tmp/out mysqldump.sql\n\nsed -i 's/DEFINER=[^ |\\]//g' mysqldump.sql\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Restore MySQL dump on RDS with the following command:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"sudo docker exec -i dronahq-self-hosted-mysqldb /usr/bin/mysql --host=<% remote host %> --port=<% port %> --user=<% remote %> --password=<% remote password %> < mysqldump.sql\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Migrate MongoDB from Docker Container to RDS"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Login to the self-hosted server"),(0,n.kt)("li",{parentName:"ul"},"Take a backup of the database using the following commands:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"cd ~/dronahq/self-hosted\n\nsudo docker exec -i dronahq-self-hosted-mongodb /usr/bin/mongodump --username root --password <% password %> --authenticationDatabase admin --db db5x_studio --out /mongodbdump\n\nsudo docker cp dronahq-self-hosted-mongodb:/mongodbdump ~/mongodbdump\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Restore MongoDB dump on RDS with the following command:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"sudo docker exec -i dronahq-self-hosted-mongodb /usr/bin/mongorestore --host=<% remote host %> --port=<% remote port %> -u <% username %> -p <% password %> --db db5x_studio /mongodbdump/db5x_studio --authenticationDatabase admin\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create AWS S3 Bucket and Generate Credentials"),(0,n.kt)("p",{parentName:"li"},"Prepare AWS S3 credentials for use with DronaHQ Self-Hosted. You'll need the following information about your AWS S3 bucket:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Access Key ID"),(0,n.kt)("li",{parentName:"ul"},"Secret Access Key"),(0,n.kt)("li",{parentName:"ul"},"Bucket Name"),(0,n.kt)("li",{parentName:"ul"},"Bucket Region"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure Credentials in dronahq.env File"),(0,n.kt)("p",{parentName:"li"},"Update the following variables in the environment file:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_MYSQL_HOST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_MYSQL_USER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_MYSQL_PASSWORD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_MYSQL_DATABASE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_MYSQL_PORT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_AUDIT_LOG_MYSQL_DATABASE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_MONGODB_HOST")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_MONGODB_USER")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_MONGODB_PASSWORD")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_MONGODB_DATABASE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_MONGODB_PORT")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"FILE_UPLOAD_TYPE= \u201daws\u201d")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_AWS_REGION")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_AWS_ACCESS_KEY_ID")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_AWS_SECRET_ACCESS_KEY")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"DHQ_AWS_BUCKET_NAME")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restart Docker Container"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"cd ~/dronahq/self-hosted\n\nsudo docker-compose restart webapp\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Scaling DronaHQ Self-Hosted"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Run multiple containers of dronahq-self-hosted-webapp with the same configuration, or multiple instances of your Ubuntu instance."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Utilize Load Balancer for Traffic Management"),(0,n.kt)("p",{parentName:"li"},"Use a load balancer to manage traffic between multiple containers/instances."))))}k.isMDXComponent=!0}}]);