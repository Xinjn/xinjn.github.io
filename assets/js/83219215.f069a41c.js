"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[15330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,i={unversionedId:"\u4f9d\u8d56\u5305/jQuery/react",id:"\u4f9d\u8d56\u5305/jQuery/react",title:"react",description:"\u5b89\u88c5",source:"@site/docs/\u4f9d\u8d56\u5305/jQuery/react.md",sourceDirName:"\u4f9d\u8d56\u5305/jQuery",slug:"/\u4f9d\u8d56\u5305/jQuery/react",permalink:"/docs/\u4f9d\u8d56\u5305/jQuery/react",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u4f9d\u8d56\u5305/jQuery/react.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"jQuery \u8fc7\u6ee4",permalink:"/docs/\u4f9d\u8d56\u5305/jQuery/jQuery \u904d\u5386/jQuery \u8fc7\u6ee4"},next:{title:"postcss-pxtorem",permalink:"/docs/\u4f9d\u8d56\u5305/postcss-pxtorem/"}},l={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5f15\u5165",id:"\u5f15\u5165",level:2}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install jquery --save\n")),(0,o.kt)("h2",{id:"\u5f15\u5165"},"\u5f15\u5165"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, { Component } from 'react'\nimport $ from 'jquery'\nexport default class Test extends Component {\n  componentDidMount(){    \n      console.log('$(\".test\").text()',$(\".test\").text())\n  }\n  render() {    \n  return (      \n      <div className=\"test\">\n        jQuery      \n     </div>\n    )\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://ss.html.cn/upload/image/490/690/856/1575447108114254.png-600",alt:null})))}s.isMDXComponent=!0}}]);