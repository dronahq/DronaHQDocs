"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[92271],{9780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>d,metadata:()=>u,toc:()=>h});n(67294);var r=n(3905),o=n(31984);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const d={sidebar_position:10},s="List Tables",u={unversionedId:"docusaurus-mdx-guide/list-tables",id:"docusaurus-mdx-guide/list-tables",title:"List Tables",description:"Tables are the only complex stuff in markdown.",source:"@site/wiki/docusaurus-mdx-guide/list-tables.mdx",sourceDirName:"docusaurus-mdx-guide",slug:"/docusaurus-mdx-guide/list-tables",permalink:"/wiki/docusaurus-mdx-guide/list-tables",draft:!1,tags:[],version:"current",lastUpdatedAt:1691053192,formattedLastUpdatedAt:"Aug 3, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"wiki",previous:{title:"Thumbnail",permalink:"/wiki/docusaurus-mdx-guide/thumbnail"},next:{title:"Admonitions",permalink:"/wiki/docusaurus-mdx-guide/admonitions"}},c={},h=[{value:"Docusaurus - MDX",id:"docusaurus---mdx",level:2},{value:"With code blocks",id:"with-code-blocks",level:2}],k={toc:h},p="wrapper";function m(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(p,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"list-tables"},"List Tables"),(0,r.kt)("p",null,"Tables are the only complex stuff in markdown."),(0,r.kt)("h2",{id:"docusaurus---mdx"},"Docusaurus - MDX"),(0,r.kt)("p",null,"If the table consists of simple text and no complex UI and no column width control. This can be plain markdown syntax as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"| Field             | Description                                                                                                                                                                                                                                                                                                                                                                              |\n| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n| Region            | The region of the datacenter where your New Relic account stores its data. [Read more about regions on New Relic docs.](https://docs.newrelic.com/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers)                                                                                                                                                      |\n| API Key           | API keys are unique to your organization. An API key is required by the New Relic API to submit metrics and events to New Relic. You can get the API key from [here](https://one.newrelic.com/launcher/api-keys-ui.api-keys-launcher) if you are in New Relic US region and [here](https://one.eu.newrelic.com/launcher/api-keys-ui.api-keys-launcher) if you're in New Relic EU region. |\n| Host              | The name of the originating host of the log and metrics.                                                                                                                                                                                                                                                                                                                                 |\n| Custom Attributes | Custom Attributes associated with your logs and metrics. A default source tag `hasura-cloud-metrics` is added to all exported logs and metrics. Attributes `project_id` and `project_name` are added to all exported metrics.                                                                                                                                                            |\n| Service Name      | The name of the application or service generating the log events.                                                                                                                                                                                                                                                                                                                        |\n")),(0,r.kt)("p",null,"Unfortunately, ",(0,r.kt)("inlineCode",{parentName:"p"},"markdown")," doesn't have straightforward syntax to control the width and had to rely on html for this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"{4,5}","{4,5}":!0},'<table>\n  <thead>\n    <tr>\n      <th width="20%">Field</th>\n      <th width="40%">Description</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Region</td>\n      <td>The region of the datacenter where your New Relic account stores its data. <Link to="https://docs.newrelic.com/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers">Read more about regions on New Relic docs.</Link></td>\n    </tr>\n    <tr>\n      <td>API Key</td>\n      <td>API keys are unique to your organization. An API key is required by the New Relic API to submit metrics and events to New Relic. You can get the API key from <Link to="https://one.newrelic.com/launcher/api-keys-ui.api-keys-launcher">here</Link> if you are in New Relic US region and <Link to="https://one.eu.newrelic.com/launcher/api-keys-ui.api-keys-launcher">here</Link> if you\'re in New Relic EU region.</td>\n    </tr>\n    <tr>\n      <td>Host</td>\n      <td>The name of the originating host of the log and metrics.</td>\n    </tr>\n    <tr>\n      <td>Custom Attributes</td>\n      <td>Custom Attributes associated with your logs and metrics. A default source tag <code>hasura-cloud-metrics</code> is added to all exported logs and metrics. Attributes <code>project_id</code> and <code>project_name</code> are added to all exported metrics.</td>\n    </tr>\n    <tr>\n      <td>Service Name</td>\n      <td>The name of the application or service generating the log events.</td>\n    </tr>\n  </tbody>\n</table>\n')),(0,r.kt)("admonition",{title:"Few things to note:",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If a table cell is mixed with text and markdown elements (",(0,r.kt)("inlineCode",{parentName:"p"},"code highlighters"),", ",(0,r.kt)("a",{parentName:"p",href:"/wiki/docusaurus-mdx-guide/links"},"links"),"\netc., Please prefer ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," syntax over markdown as markdown won't be parsed correctly."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Usage of <Link> for `[link](https://...)` --\x3e\n<tr>\n  <td>Region</td>\n  // highlight-next-line\n  <td>The ... data. <Link to="https://docs.newrelic.com/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers">Read ... docs.</Link></td>\n</tr>\n\n\x3c!-- Usage of <code> for `code` --\x3e\n<tr>\n  <td>Custom Attributes</td>\n  // highlight-next-line\n  <td>Custom ... tag <code>hasura-cloud-metrics</code> is ... Attributes <code>project_id</code> and <code>project_name</code> are ... metrics.</td>\n</tr>\n'))),(0,r.kt)("p",null,"Which would render like this"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"20%"},"Field"),(0,r.kt)("th",{width:"40%"},"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Region"),(0,r.kt)("td",null,"The region of the datacenter where your New Relic account stores its data."," ",(0,r.kt)(o.Z,{to:"https://docs.newrelic.com/docs/using-new-relic/welcome-new-relic/get-started/our-eu-us-region-data-centers",mdxType:"Link"},"Read more about regions on New Relic docs."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"API Key"),(0,r.kt)("td",null,"API keys are unique to your organization. An API key is required by the New Relic API to submit metrics and events to New Relic. You can get the API key from"," ",(0,r.kt)(o.Z,{to:"https://one.newrelic.com/launcher/api-keys-ui.api-keys-launcher",mdxType:"Link"},"here")," if you are in New Relic US region and ",(0,r.kt)(o.Z,{to:"https://one.eu.newrelic.com/launcher/api-keys-ui.api-keys-launcher",mdxType:"Link"},"here")," if you're in New Relic EU region.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Host"),(0,r.kt)("td",null,"The name of the originating host of the log and metrics.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Custom Attributes"),(0,r.kt)("td",null,"Custom Attributes associated with your logs and metrics. A default source tag ",(0,r.kt)("code",null,"hasura-cloud-metrics")," ","is added to all exported logs and metrics. Attributes ",(0,r.kt)("code",null,"project_id")," and ",(0,r.kt)("code",null,"project_name")," are added to all exported metrics.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Service Name"),(0,r.kt)("td",null,"The name of the application or service generating the log events.")))),(0,r.kt)("h2",{id:"with-code-blocks"},"With code blocks"),(0,r.kt)("p",null,"When a table cell is just a codeblock, the normal triple tick syntax works fine. But, please do leave an intentional empty line before and after the code block.\nAlso, start the code block and respective cell (",(0,r.kt)("inlineCode",{parentName:"p"},"td/th"),") at the very beginning of line (no empty tabs/spaces at start)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<table>\n  <thead>\n    <tr>\n      <th width="20%">Field</th>\n      <th width="40%">Query</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>query</code></td>\n      <td>```graphql query MyQuery { ... } ```</td>\n    </tr>\n  </tbody>\n</table>\n')),(0,r.kt)("p",null,"Do one better and ignore the indentation altogether for all tags in table. This might be bit of not so eye-friendly to read, but works.\nPlease do not that this is required only when there is a cell involving code block."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"20%"},"Field"),(0,r.kt)("th",{width:"40%"},"Query"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"query")),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"  query MyQuery {\n    ...\n  }\n")))))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},":widths:")," can be added as ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," attribute to ",(0,r.kt)("inlineCode",{parentName:"p"},"html")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"th"),". And the ",(0,r.kt)("inlineCode",{parentName:"p"},":header-rows:")," determines the number of\nheader rows to be considered for ",(0,r.kt)("inlineCode",{parentName:"p"},"<thead>"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:"{2-8}","{2-8}":!0},'<table>\n  <thead>\n    <tr>\n      <th width="10%">Status code</th>\n      <th width="10%">Description</th>\n      <th width="30%">Response Structure</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td><code>200</code></td>\n      <td>Success</td>\n      <td>``` Request Specific ```</td>\n    </tr>\n    <tr>\n      <td><code>400</code></td>\n      <td>Bad Request</td>\n      <td>```haskell { "path" : String, "error" : String } ```</td>\n    </tr>\n    <tr>\n      <td><code>401</code></td>\n      <td>Unauthorized</td>\n      <td>```haskell { "error" : String } ```</td>\n    </tr>\n    <tr>\n      <td><code>500</code></td>\n      <td>Internal server error</td>\n      <td>```haskell { "error" : String } ```</td>\n    </tr>\n  </tbody>\n</table>\n')),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{width:"10%"},"Status code"),(0,r.kt)("th",{width:"10%"},"Description"),(0,r.kt)("th",{width:"30%"},"Response Structure"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"200")),(0,r.kt)("td",null,"Success"),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Request Specific\n")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"400")),(0,r.kt)("td",null,"Bad Request"),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'{\n    "path"  : String,\n    "error" : String\n}\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"401")),(0,r.kt)("td",null,"Unauthorized"),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'{\n    "error" : String\n}\n')))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"500")),(0,r.kt)("td",null,"Internal server error"),(0,r.kt)("td",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'{\n    "error" : String\n}\n')))))))}m.isMDXComponent=!0}}]);