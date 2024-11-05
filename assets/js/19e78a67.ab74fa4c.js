"use strict";(self.webpackChunkdronahq_docs=self.webpackChunkdronahq_docs||[]).push([[71832],{62274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});r(67294);var n=r(3905);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"PR Review Checklist",sidebar_position:40},l="PR Review Checklist",u={unversionedId:"checklist",id:"checklist",title:"PR Review Checklist",description:"TL;DR",source:"@site/wiki/checklist.mdx",sourceDirName:".",slug:"/checklist",permalink:"/wiki/checklist",draft:!1,tags:[],version:"current",lastUpdatedAt:1691053192,formattedLastUpdatedAt:"Aug 3, 2023",sidebarPosition:40,frontMatter:{sidebar_label:"PR Review Checklist",sidebar_position:40},sidebar:"wiki",previous:{title:"Contributing to Docs",permalink:"/wiki/contributions"},next:{title:"Docusaurus MDX Guide",permalink:"/wiki/category/docusaurus-mdx-guide"}},c={},p=[{value:"TL;DR",id:"tldr",level:2},{value:"Our process",id:"our-process",level:2},{value:"Pass one: grammar school",id:"pass-one-grammar-school",level:3},{value:"Pass two: infrastructure",id:"pass-two-infrastructure",level:3},{value:"Pass three: structural integrity",id:"pass-three-structural-integrity",level:3}],k={toc:p},d="wrapper";function h(e){var{components:t}=e,r=s(e,["components"]);return(0,n.kt)(d,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({},k,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pr-review-checklist"},"PR Review Checklist"),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,"In a hurry? We get it. Here's a quick checklist to help you get your PR merged faster:"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check for spelling or grammatical errors."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check that ",(0,n.kt)("inlineCode",{parentName:"li"},"<h1>")," is title case."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check that ",(0,n.kt)("inlineCode",{parentName:"li"},"<h2>"),"s and below are sentence case."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check that Hasura features (e.g., Console ",(0,n.kt)("inlineCode",{parentName:"li"},"||")," Actions) are title case."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check for broken internal links."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check for broken external links."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check for broken images."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check for broken (questionably rendered) code snippets.")),(0,n.kt)("h2",{id:"our-process"},"Our process"),(0,n.kt)("p",null,'Everybody is different, and we all review PRs in our way. However, there are some common elements we examine and\nquestions we ask ourselves when reviewing a PR. Our goal in providing this document is to give you a "docs-reviewer"\nlens through which to look. In the long run, taking a quick parse through your contribution while thinking about these\nsteps and questions will ensure we can approve your docs changes and merge your PR swiftly. ',(0,n.kt)("strong",{parentName:"p"},"We hold a strict standard\nbecause we want to ensure our users can quickly find what they need, understand it because it's well-written, and get\nback to building with Hasura")," \ud83d\ude80"),(0,n.kt)("h3",{id:"pass-one-grammar-school"},"Pass one: grammar school"),(0,n.kt)("p",null,"As we're reading through a PR for the first time and trying to gather context, most of us focus on easy wins. While\nwe're formulating a structure and trying to get a better idea of the document you've created, we're also trying to pick\nout quick typos like the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Misspelled words"),(0,n.kt)("li",{parentName:"ul"},"Missing punctuation"),(0,n.kt)("li",{parentName:"ul"},"Extra or missing whitespaces"),(0,n.kt)("li",{parentName:"ul"},"Sentence structure / syntax")),(0,n.kt)("p",null,"When we see these, we'll generally offer suggestions you can commit directly from GitHub. However, we should note that\nreviews filled with errors like these take longer to review (and are less fun)."),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We hope to introduce a simple linter that examines spelling as part of our CI pipeline on any PRs that include docs\ncontributions.")),(0,n.kt)("h3",{id:"pass-two-infrastructure"},"Pass two: infrastructure"),(0,n.kt)("p",null,"Next, we'll typically do an infrastructure test (i.e., does everything ",(0,n.kt)("em",{parentName:"p"},"work"),"?). If you followed the guidelines in our\n",(0,n.kt)("a",{parentName:"p",href:"/wiki/category/style/"},"style guide"),", you're probably okay. However, we'll also do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check new internal links and ensure they're\n",(0,n.kt)("a",{parentName:"li",href:"/wiki/docusaurus-mdx-guide/page-structure#references--links"},"root-relative file paths")),(0,n.kt)("li",{parentName:"ul"},"Check external links and ensure they're not returning ",(0,n.kt)("inlineCode",{parentName:"li"},"404")),(0,n.kt)("li",{parentName:"ul"},"Double-check headings are ",(0,n.kt)("a",{parentName:"li",href:"/wiki/style/headings"},"correctly cased")),(0,n.kt)("li",{parentName:"ul"},"Look for Hasura features (like Hasura Console, Metadata, Migrations) and ensure they're proper cases"),(0,n.kt)("li",{parentName:"ul"},"Look for opportunities to cross-link to other pages in docs")),(0,n.kt)("h3",{id:"pass-three-structural-integrity"},"Pass three: structural integrity"),(0,n.kt)("p",null,"Finally, we can focus on the total product: the docs themselves. We ask ourselves a few questions as we're judging the\ncontribution (yes, we're judgy and, in fact, judged everything you wrote and probably have strong opinions at this point\n\ud83d\ude05). The central theme around which we target all these questions is UX:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How will a user interpret this new section / page?"),(0,n.kt)("li",{parentName:"ul"},"If a user starts at the beginning of the page, will they understand the new contribution?"),(0,n.kt)("li",{parentName:"ul"},"If a user arrives from another page, and the new contribution is a nested section of an existing page, will they have\nenough context to understand the value of the contribution?")),(0,n.kt)("p",null,"If we can answer these questions with a resounding \"yes,\" we'll approve the PR and merge it. If not, we'll ask you to\nmake some changes or we'll push a commit that we've reworked and ask for your to look over it."))}h.isMDXComponent=!0}}]);