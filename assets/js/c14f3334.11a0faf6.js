"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[53891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},39021:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="\u7aef\u5916",c={unversionedId:"\u516c\u53f8/\u51e4\u51f0\u7f51/\u7edf\u8ba1\u57cb\u70b9/\u7aef\u5916",id:"\u516c\u53f8/\u51e4\u51f0\u7f51/\u7edf\u8ba1\u57cb\u70b9/\u7aef\u5916",title:"\u7aef\u5916",description:"package.json",source:"@site/docs/\u516c\u53f8/\u51e4\u51f0\u7f51/\u7edf\u8ba1\u57cb\u70b9/\u7aef\u5916.md",sourceDirName:"\u516c\u53f8/\u51e4\u51f0\u7f51/\u7edf\u8ba1\u57cb\u70b9",slug:"/\u516c\u53f8/\u51e4\u51f0\u7f51/\u7edf\u8ba1\u57cb\u70b9/\u7aef\u5916",permalink:"/docs/\u516c\u53f8/\u51e4\u51f0\u7f51/\u7edf\u8ba1\u57cb\u70b9/\u7aef\u5916",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u516c\u53f8/\u51e4\u51f0\u7f51/\u7edf\u8ba1\u57cb\u70b9/\u7aef\u5916.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7aef\u5185",permalink:"/docs/\u516c\u53f8/\u51e4\u51f0\u7f51/\u7edf\u8ba1\u57cb\u70b9/\u7aef\u5185"},next:{title:"\u4ecb\u7ecd",permalink:"/docs/\u516c\u53f8/\u51e4\u51f0\u7f51/\u7f51\u7ad9\u5f00\u53d1\u5e73\u53f0/whale/web-pages-content/\u4ecb\u7ecd"}},p={},s=[],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7aef\u5916"},"\u7aef\u5916"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"package.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'    "@ifeng/mobile_statistics": "^1.0.11",\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Header"),"\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { pageStatistics } from "@ifeng/mobile_statistics";\n\nconst statistics = () => {\n  pageStatistics({\n    environment: "h5",\n    behavior: "page",\n    id: "",\n    type: "",\n  });\n};\n')))}u.isMDXComponent=!0}}]);