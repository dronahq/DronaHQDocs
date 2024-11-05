"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[36733],{52013:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(86010),o=r(65319),i=r(53964),c=r(87275),s=r(31984),l=r(92210),u=r(70676);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){return n.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const d={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function p(){const e=(0,u.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(s.Z,{"aria-label":(0,l.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(m,{className:d.breadcrumbHomeIcon})))}const f={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function O({children:e,href:t,isLast:r}){const a="breadcrumbs__link";return r?n.createElement("span",{className:a,itemProp:"name"},e):t?n.createElement(s.Z,{className:a,href:t,itemProp:"item"},n.createElement("span",{itemProp:"name"},e)):n.createElement("span",{className:a},e)}function g({children:e,active:t,index:r,addMicrodata:o}){return n.createElement("li",v(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"}),{className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})}),e,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function y(){const e=(0,i.s1)(),t=(0,c.Ns)();return e?n.createElement("nav",{className:(0,a.Z)(o.k.docs.docBreadcrumbs,f.breadcrumbsContainer),"aria-label":(0,l.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(p,null),e.map(((t,r)=>{const a=r===e.length-1;return n.createElement(g,{key:r,active:a,index:r,addMicrodata:!!t.href},n.createElement(O,{href:t.href,isLast:a},t.label))})))):null}},9393:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(92210),o=r(454);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e){const{previous:t,next:r}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(o.Z,s(c({},t),{subLabel:n.createElement(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),r&&n.createElement(o.Z,s(c({},r),{subLabel:n.createElement(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},22378:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010),o=r(92210),i=r(65319),c=r(27391);function s({className:e}){const t=(0,c.E)();return t.badge?n.createElement("span",{className:(0,a.Z)(e,i.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}},2085:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),a=r(86010),o=r(8241),i=r(31984),c=r(92210),s=r(55995),l=r(65319),u=r(39085),b=r(27391);const m={unreleased:function({siteTitle:e,versionMetadata:t}){return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:n.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function d(e){const t=m[e.versionMetadata.banner];return n.createElement(t,e)}function p({versionLabel:e,to:t,onClick:r}){return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:t,onClick:r},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f({className:e,versionMetadata:t}){const{siteConfig:{title:r}}=(0,o.Z)(),{pluginId:i}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:c}=(0,u.J)(i),{latestDocSuggestion:b,latestVersionSuggestion:m}=(0,s.Jo)(i),f=null!=b?b:(h=m).docs.find((e=>e.id===h.mainDocId));var h;return n.createElement("div",{className:(0,a.Z)(e,l.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(d,{siteTitle:r,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:m.label,to:f.path,onClick:()=>c(m.name)})))}function h({className:e}){const t=(0,b.E)();return t.banner?n.createElement(f,{className:e,versionMetadata:t}):null}},24999:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(67294),a=r(86010),o=r(92210),i=r(86016),c=r(31984);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function d(e){var{as:t,id:r}=e,l=m(e,["as","id"]);const{navbar:{hideOnScroll:d}}=(0,i.L)();if("h1"===t||!r)return n.createElement(t,b(u({},l),{id:void 0}));const p=(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof l.children?l.children:r});return n.createElement(t,b(u({},l),{className:(0,a.Z)("anchor",d?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,l.className),id:r}),l.children,n.createElement(c.Z,{className:"hash-link",to:`#${r}`,"aria-label":p,title:p},"\u200b"))}}}]);