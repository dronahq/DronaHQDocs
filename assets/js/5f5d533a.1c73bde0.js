"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[71553],{15250:(e,a,t)=>{t.d(a,{Z:()=>r});const r={"changelog-main":"changelog-main_KRBc","changelog-card":"changelog-card_YhCW","left-changelogcard":"left-changelogcard_DZK0","br-right":"br-right_gAhF",stickycard:"stickycard_WzQc",after:"after_SY3s","right-changelogcard":"right-changelogcard_FXSC","date-tag-container":"date-tag-container_nHZb",embed:"embed_hj2f","embed-video":"embed-video_VDfy","embed-iframe":"embed-iframe_XMND","embed-image":"embed-image_PKzO","card-descriptions":"card-descriptions_A6rN","changelog-category-item":"changelog-category-item_cU4B","changelogcard-title":"changelogcard-title_qRHx","changelogcard-heading":"changelogcard-heading_x7yS","tags-container":"tags-container_i_jW","changelogcard-date":"changelogcard-date_IQwh","changelogcard-tag":"changelogcard-tag_FdLs","alert-card":"alert-card_dr1X",green:"green_QnCv","alert-card-title":"alert-card-title_D6cc",yellow:"yellow_pnyK",orange:"orange_qt33",red:"red_iTgv",purple:"purple_Uk0L",blue:"blue_pnmQ","alert-card-header":"alert-card-header_Zx3c","alert-card-icon":"alert-card-icon_OdTH","alert-card-descriptions":"alert-card-descriptions_vQXI","alert-card-points":"alert-card-points_TQbH","coming-soon":"coming-soon_AqoD",title:"title_yYAG","redirect-doc":"redirect-doc_oVhd",header:"header_SDyu",description:"description_OIDv","product-tag":"product-tag_ODh6","coming-soon-content":"coming-soon-content_pClH",fadeIn:"fadeIn_RCbl",homeLink:"homeLink_oAan",pointer:"pointer_wysq"}},81825:(e,a,t)=>{t.d(a,{Z:()=>n});var r=t(67294),c=t(15250);const n=()=>r.createElement("div",{className:"container margin-vert--xl"},r.createElement("div",{className:"row"},r.createElement("div",{className:c.Z["coming-soon-content"]},r.createElement("img",{src:"../icons/empty.svg",style:{width:"60%",height:"auto"},alt:"404"}),r.createElement("div",null,r.createElement("h1",null,r.createElement("div",null,"Great things Coming Soon")),r.createElement("div",null,r.createElement("p",null,"Our team is working on it.")),r.createElement("div",{className:c.Z.homeLink},r.createElement("a",{href:"/"},"DronaHQ Docs Home"))))))},89971:(e,a,t)=>{t.d(a,{Z:()=>y});var r=t(67294),c=t(45697),n=t.n(c),l=t(15250);const s=({tags:e,isDarkTheme:a=!1})=>r.createElement("div",{className:`${l.Z["tags-container"]} tags-container`},e.map(((e,a)=>{return r.createElement("div",{key:a,className:`${l.Z["changelogcard-tag"]} hq-tags border small green d-flex align-center pointer justify-center mt-2`},(t=e).charAt(0).toUpperCase()+t.slice(1));var t})));s.propTypes={tags:n().arrayOf(n().string).isRequired,isDarkTheme:n().bool};const i=s,d=({timestamp:e,tags:a,isDarkTheme:t=!1})=>{const c=new Date(e).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"});return r.createElement("div",{className:`${l.Z["left-changelogcard"]} ${l.Z["br-right"]} left-changelogcard pt-4 ${t?l.Z["dark-mode"]:""}`},r.createElement("div",{className:`${l.Z.stickycard} stickycard  ${l.Z.after}`},r.createElement("div",{className:`${l.Z["changelogcard-date"]} changelogcard-date hq-modal-title`},c),r.createElement(i,{tags:a})))};d.propTypes={timestamp:n().number.isRequired,tags:n().arrayOf(n().string).isRequired,isDarkTheme:n().bool};const o=d,m=({card:e,type:a,isDarkTheme:t})=>{let c=e.class||"blue",n=`${l.Z["alert-card"]} ${l.Z[c]} alert-card mb-3`;switch(e.icon=e.icon||"cloud-hover.svg",e.type){case"added":n=`${l.Z["alert-card"]} ${l.Z.green} alert-card mb-3`,e.icon="added.svg";break;case"improved":n=`${l.Z["alert-card"]} ${l.Z.yellow} alert-card mb-3`,e.icon="improved.svg";break;case"deprecated":n=`${l.Z["alert-card"]} ${l.Z.orange} alert-card mb-3`,e.icon="deprecated.svg";break;case"removed":n=`${l.Z["alert-card"]} ${l.Z.red} alert-card mb-3`,e.icon="removed.svg";break;case"fixed":n=`${l.Z["alert-card"]} ${l.Z.purple} alert-card mb-3`,e.icon="fixed.svg";break;case"security":n=`${l.Z["alert-card"]} ${l.Z.blue} alert-card mb-3`,e.icon="security.svg";break;default:n=`${l.Z["alert-card"]} ${l.Z[c]} || 'blue' alert-card mb-3`}return r.createElement("div",{className:n},r.createElement("div",{className:`${l.Z["alert-card-header"]} alert-card-header mb-1`},r.createElement("img",{src:`../icons/${e.icon}`,className:`${l.Z["alert-card-icon"]}`,alt:e.title}),r.createElement("div",{className:`${l.Z["alert-card-title"]} alert-card-title ml-2`},e.title)),r.createElement("div",{className:`${l.Z["alert-card-descriptions"]} alert-card-descriptions`},e.descriptions&&e.descriptions.map(((e,a)=>{return c=a,/<[a-z][\s\S]*>/i.test(t=e)?r.createElement("div",{key:c,dangerouslySetInnerHTML:{__html:t}}):r.createElement("div",{key:c},t);var t,c})),e.points&&r.createElement("ul",{className:l.Z["alert-card-points"]},e.points.map(((e,a)=>((e,a)=>/<[a-z][\s\S]*>/i.test(e)?r.createElement("li",{key:a,dangerouslySetInnerHTML:{__html:e}}):r.createElement("li",{key:a},e))(e,a))))))};m.propTypes={card:n().shape({icon:n().string,title:n().string,type:n().string,class:n().string,descriptions:n().arrayOf(n().string),points:n().arrayOf(n().string)}).isRequired,type:n().string,isDarkTheme:n().bool};const g=m,h=({title:e,heading:a,descriptions:t,cards:c,timestamp:n,tags:s,type:d,isDarkTheme:o=!1})=>{const m=new Date(n).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"});let h="id"+n;return r.createElement("div",{className:`${l.Z["right-changelogcard"]} right-changelogcard mb-5 pt-4 ${o?l.Z["dark-mode"]:""}`,id:h},e&&r.createElement("div",{className:`${l.Z["changelogcard-title"]} changelogcard-title mb-2`},r.createElement("a",{href:`#${h}`},e)),a&&r.createElement("div",{className:`${l.Z["changelogcard-heading"]} changelogcard-heading `},a),r.createElement("div",{className:`d-flex ${l.Z["date-tag-container"]}`},r.createElement("div",{className:`${l.Z["changelogcard-date"]} changelogcard-date hq-modal-title`},m),r.createElement(i,{tags:s})),t&&r.createElement("div",{className:`${l.Z["card-descriptions"]} card-descriptions mt-4`},t&&Array.isArray(t)?t.map(((e,a)=>r.createElement("div",{key:a,className:`${l.Z["changelog-category"]} changelog-category`},r.createElement("ul",{className:l.Z["changelog-category-list"]},Array.isArray(e)?e.map(((e,a)=>r.createElement("li",{key:a,className:l.Z["changelog-category-item"]},/<[a-z][\s\S]*>/i.test(e)?r.createElement("span",{dangerouslySetInnerHTML:{__html:e}}):r.createElement("span",null,e)))):r.createElement("li",{className:l.Z["changelog-category-item"]},/<[a-z][\s\S]*>/i.test(e)?r.createElement("span",{dangerouslySetInnerHTML:{__html:e}}):r.createElement("span",null,e)))))):t?r.createElement("div",{className:`${l.Z["changelog-category"]} changelog-category`},r.createElement("ul",{className:l.Z["changelog-category-list"]},r.createElement("li",{className:l.Z["changelog-category-item"]},/<[a-z][\s\S]*>/i.test(t)?r.createElement("span",{dangerouslySetInnerHTML:{__html:t}}):r.createElement("span",null,t)))):null),c&&r.createElement("div",{className:`${l.Z["cards-alert"]} cards-alert mt-2`},c&&Array.isArray(c)?c.map(((e,a)=>r.createElement(g,{key:a,card:e,isDarkTheme:o,type:d}))):null))};h.propTypes={version:n().string,title:n().string,descriptions:n().oneOfType([n().string,n().arrayOf(n().oneOfType([n().string,n().arrayOf(n().string)]))]),cards:n().arrayOf(n().object),type:n().string,isDarkTheme:n().bool};const p=h,u=({timestamp:e,tags:a,heading:t,title:c,descriptions:n,cards:s,isDarkTheme:i=!1})=>r.createElement("div",{className:`${l.Z["changelog-card"]} changelog-card ${i?l.Z["dark-mode"]:""}`},r.createElement(o,{timestamp:e,tags:a,isDarkTheme:i}),r.createElement(p,{title:c,heading:t,descriptions:n,cards:s,timestamp:e,tags:a,isDarkTheme:i}));u.propTypes={timestamp:n().number.isRequired,tags:n().arrayOf(n().string).isRequired,heading:n().string,title:n().string,description:n().arrayOf(n().array),cards:n().arrayOf(n().object),type:n().string,isDarkTheme:n().bool};const y=u},82492:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d});var r=t(67294),c=t(26302),n=t(8241),l=t(89971),s=t(81825),i=t(15250);const d=()=>{const{isDarkTheme:e}=(0,n.Z)(),[a,t]=(0,r.useState)([]),[d,o]=(0,r.useState)(!1),[m,g]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{fetch("/files/selfhosted-stable.json").then((e=>{if(!e.ok)throw new Error("File not found or other fetch error");return e.text()})).then((e=>{if(""!==e.trim()){const a=JSON.parse(e).filter((e=>e.tags&&e.tags.includes("Self-Hosted")));if(Array.isArray(a)){const e=a.sort(((e,a)=>a.timestamp-e.timestamp));t(e)}else console.error("Invalid data structure. Expected an array.")}else console.error("Fetched data is empty.");o(!0)})).catch((e=>{console.error("Error fetching data:",e),g(!0)}))}),[]),(0,r.useEffect)((()=>{const e=document.querySelector(".changelog-main"),a=()=>{const a=document.querySelector("html").getAttribute("data-theme");e&&a&&e.setAttribute("data-theme",a)},t=new MutationObserver(a);return t.observe(document.querySelector("html"),{attributes:!0}),a(),()=>{t.disconnect()}}),[]),r.createElement(c.Z,{title:"Changelog"},r.createElement("div",{className:`${i.Z["changelog-main"]} changelog-main m-left-right-auto nocode `,"data-theme":e?"dark":""},r.createElement("div",{className:`${i.Z["mx-auto"]} mx-auto ${i.Z["changelog-comp-div"]} changelog-comp-div`},m?r.createElement(s.Z,null):d?a.length>0?r.createElement(r.Fragment,null,r.createElement("div",{className:`${i.Z.header}`},r.createElement("h1",{className:`${i.Z.title}`},"Changelog"),r.createElement("div",{className:"d-flex align-center f-wrap"},r.createElement("div",{className:`${i.Z.description}`},"Keep up with the latest changes to "),r.createElement("div",{className:`${i.Z["product-tag"]} hq-tags border green d-flex align-center pointer justify-center`},"Self-Hosted (Stable)"))),a.map(((a,t)=>r.createElement(l.Z,{key:`${a.timestamp}_${t}`,timestamp:a.timestamp,tags:a.tags,heading:a.heading,title:a.title,embed:a.embed,descriptions:a.descriptions,cards:a.cards,isDarkTheme:e})))):r.createElement(s.Z,null):r.createElement("div",null))))}}}]);