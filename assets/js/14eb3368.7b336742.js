"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[9817],{20183:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var i=n(67294),a=n(89712),l=n(53964),r=n(70676),c=n(86010),o=n(31984),s=n(47785),d=n(92210);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u({href:e,children:t}){return i.createElement(o.Z,{href:e,className:(0,c.Z)("card padding--lg",m.cardContainer)},t)}function g({href:e,icon:t,title:n,description:a}){return i.createElement(u,{href:e},i.createElement("h2",{className:(0,c.Z)("text--truncate",m.cardTitle),title:n},t," ",n),a&&i.createElement("p",{className:(0,c.Z)("text--truncate",m.cardDescription),title:a},a))}function v({item:e}){const t=(0,l.Wl)(e);return t?i.createElement(g,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function p({item:e}){const t=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const a=(0,l.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var r;return i.createElement(g,{href:e.href,icon:t,title:e.label,description:null!==(r=e.description)&&void 0!==r?r:null==a?void 0:a.description})}function E({item:e}){switch(e.type){case"link":return i.createElement(p,{item:e});case"category":return i.createElement(v,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function h({className:e}){const t=(0,l.jA)();return i.createElement(f,{items:t.items,className:e})}function f(e){const{items:t,className:n}=e;if(!t)return i.createElement(h,e);const a=(0,l.MN)(t);return i.createElement("section",{className:(0,c.Z)("row",n)},a.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(E,{item:e})))))}var b=n(9393),_=n(2085),k=n(22378),x=n(52013),N=n(24999);const y={generatedIndexPage:"generatedIndexPage_jE6W",list:"list_XVd1",title:"title__lw4"};var Z=n(16550);function w({categoryGeneratedIndex:e}){return i.createElement(a.d,{title:e.title,description:e.description,keywords:e.keywords,image:(0,r.Z)(e.image)})}function A({categoryGeneratedIndex:e}){const t=(0,l.jA)();return i.createElement("div",{className:y.generatedIndexPage},i.createElement(_.Z,null),i.createElement(x.Z,null),i.createElement(k.Z,null),i.createElement("header",null,i.createElement(N.Z,{as:"h1",className:y.title},e.title),e.description&&i.createElement("p",null,e.description)),i.createElement("article",{className:"margin-top--lg"},i.createElement(f,{items:t.items,className:y.list})),i.createElement("footer",{className:"margin-top--lg"},i.createElement(b.Z,{previous:e.navigation.previous,next:e.navigation.next})))}function I(e){var t,n,a;let l=null==e||null===(a=e.categoryGeneratedIndex)||void 0===a||null===(n=a.navigation)||void 0===n||null===(t=n.next)||void 0===t?void 0:t.permalink;return l?i.createElement(Z.l_,{to:(0,r.Z)(l)}):i.createElement(i.Fragment,null,i.createElement(w,e),i.createElement(A,e))}},454:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(67294),a=n(86010),l=n(31984),r=n(30950);function c(e){const{permalink:t,title:n,subLabel:c,isNext:o}=e;let s=t,d=n;return i.createElement(r.Z,{fallback:i.createElement("div",null,"Loading...")},(()=>{let e=document.querySelector(`[headerlink="${s}"]`);try{let n=null==e?void 0:e.previousElementSibling;var t;if(s.startsWith("/_heading_"))s=o?null==e||null===(t=e.nextElementSibling)||void 0===t?void 0:t.getAttribute("headerlink"):null==n?void 0:n.getAttribute("headerlink"),d=o?d:null==n?void 0:n.getAttribute("headertext");else if(!o&&(null==e?void 0:e.classList.contains("theme-doc-sidebar-item-category"))){let e=!(null==n?void 0:n.classList.contains("sidebar_heading")),t=null==n?void 0:n.previousElementSibling;s=e?null==n?void 0:n.getAttribute("headerlink"):null==t?void 0:t.getAttribute("headerlink"),d=e?null==n?void 0:n.getAttribute("headertext"):null==t?void 0:t.getAttribute("headertext")}}catch(n){}return i.createElement(l.Z,{className:(0,a.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:s},c&&i.createElement("div",{className:"pagination-nav__sublabel"},c),i.createElement("div",{className:"pagination-nav__label"},d))}))}}}]);