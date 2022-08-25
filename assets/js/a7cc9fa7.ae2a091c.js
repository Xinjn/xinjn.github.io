"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[70887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||s[f]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},c=void 0,l={unversionedId:"\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6/cloneElement()/FAQ",id:"\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6/cloneElement()/FAQ",title:"FAQ",description:"cloneElement \u7ec4\u4ef6\u9700\u8981\u4f7f\u7528 Ref \u5c5e\u6027\uff0c\u51fd\u6570\u7ec4\u4ef6\u62a5\u9519",source:"@site/docs/\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6/cloneElement()/FAQ.md",sourceDirName:"\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6/cloneElement()",slug:"/\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6/cloneElement()/FAQ",permalink:"/docs/\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6/cloneElement()/FAQ",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6/cloneElement()/FAQ.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cloneElement()",permalink:"/docs/\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6/cloneElement()/"},next:{title:"Fragment\u7ec4\u4ef6",permalink:"/docs/\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6/Fragment\u7ec4\u4ef6"}},i={},p=[{value:"cloneElement \u7ec4\u4ef6\u9700\u8981\u4f7f\u7528 Ref \u5c5e\u6027\uff0c\u51fd\u6570\u7ec4\u4ef6\u62a5\u9519",id:"cloneelement-\u7ec4\u4ef6\u9700\u8981\u4f7f\u7528-ref-\u5c5e\u6027\u51fd\u6570\u7ec4\u4ef6\u62a5\u9519",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"cloneelement-\u7ec4\u4ef6\u9700\u8981\u4f7f\u7528-ref-\u5c5e\u6027\u51fd\u6570\u7ec4\u4ef6\u62a5\u9519"},"cloneElement \u7ec4\u4ef6\u9700\u8981\u4f7f\u7528 Ref \u5c5e\u6027\uff0c\u51fd\u6570\u7ec4\u4ef6\u62a5\u9519"),(0,o.kt)("p",null,"\u6848\u4f8b\uff1a\u788e\u7247\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u89e3\u51b3\u65b9\u6cd5\uff1a\n\u4f7f\u7528 class \u7ec4\u4ef6\uff0c\u6216\u8005\u4f7f\u7528\u9ad8\u9636 class \u7ec4\u4ef6\u51fd\u6570\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nclass ErrorBoundary extends React.PureComponent {\n    ...\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.icode9.com/content-1-557579.html"},"javascript-\u901a\u8fc7 React.cloneElement \u7ef4\u62a4\u7ec4\u4ef6\u5f15\u7528"))))}s.isMDXComponent=!0}}]);