"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[86630],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):f(f({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||a;return t?n.createElement(m,f(f({ref:r},p),{},{components:t})):n.createElement(m,f({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,f=new Array(a);f[0]=u;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,f[1]=c;for(var l=2;l<a;l++)f[l]=t[l];return n.createElement.apply(null,f)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49720:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>f,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={},f="\u8c08\u8c08 forwardRef",c={unversionedId:"\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u8f6c\u53d1 Refs/\u8c08\u8c08 forwardRef",id:"\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u8f6c\u53d1 Refs/\u8c08\u8c08 forwardRef",title:"\u8c08\u8c08 forwardRef",description:"\u662f\u4ec0\u4e48",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u8f6c\u53d1 Refs/\u8c08\u8c08 forwardRef.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u8f6c\u53d1 Refs",slug:"/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u8f6c\u53d1 Refs/\u8c08\u8c08 forwardRef",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u8f6c\u53d1 Refs/\u8c08\u8c08 forwardRef",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u8f6c\u53d1 Refs/\u8c08\u8c08 forwardRef.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8c08\u8c08 Refs",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u8f6c\u53d1 Refs/\u8c08\u8c08 Refs"},next:{title:"PurComponent \u539f\u7406",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/PurComponent/PurComponent \u539f\u7406"}},i={},l=[{value:"\u662f\u4ec0\u4e48",id:"\u662f\u4ec0\u4e48",level:2},{value:"\u600e\u4e48\u7528",id:"\u600e\u4e48\u7528",level:2},{value:"\u89e3\u51b3\u4e86\u4ec0\u4e48",id:"\u89e3\u51b3\u4e86\u4ec0\u4e48",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],p={toc:l};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8c08\u8c08-forwardref"},"\u8c08\u8c08 forwardRef"),(0,o.kt)("h2",{id:"\u662f\u4ec0\u4e48"},"\u662f\u4ec0\u4e48"),(0,o.kt)("p",null,"forwardRef \u4e3a\u9ad8\u9636\u7ec4\u4ef6 \uff0c\u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4f20\u5165\u4e00\u4e2a\u51fd\u6570\u6765\u64cd\u4f5c DOM"),(0,o.kt)("h2",{id:"\u600e\u4e48\u7528"},"\u600e\u4e48\u7528"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/gifted-monad-gmhy95?file=/src/App.js"},"\u9884\u89c8\u5730\u5740")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JS"},'import React, { forwardRef, useRef } from "react";\n\n// \u5b50\u7ec4\u4ef6 \u65e0forwardRef \uff1a\u62a5\u9519\uff0c\u63a5\u53d7\u4e0d\u5230ref\n// const Profile = (props, ref) => {\n//   return <h2>Profile</h2>;\n// };\n\n// \u5b50\u7ec4\u4ef6 \u6709forwardRef\nconst Profile = forwardRef(function (props, ref) {\n  return <h2 ref={ref}>Profile</h2>;\n});\n\n// \u7236\u7ec4\u4ef6\nconst App = () => {\n  const profileRef = useRef();\n\n  const printRef = () => {\n    console.log(profileRef.current);\n  };\n\n  return (\n    <div>\n      <Profile name={"lsh"} ref={profileRef} />\n      <button onClick={printRef}>\u70b9\u51fb</button>\n    </div>\n  );\n};\n\nexport default App;\n')),(0,o.kt)("h2",{id:"\u89e3\u51b3\u4e86\u4ec0\u4e48"},"\u89e3\u51b3\u4e86\u4ec0\u4e48"),(0,o.kt)("p",null,"\u56e0\u4e3a\u6211\u4eec\u4e4b\u524d\u64cd\u4f5c dom\uff0c\u5b50\u7ec4\u4ef6\u82e5\u4e3a\u51fd\u6570\u5f0f\u7ec4\u4ef6\u662f\u4e0d\u884c\u7684\uff0c\u56e0\u4e3a\u5b83\u6ca1\u6709\u5b9e\u4f8b\uff0c\u7528\u8fd9\u4e2a\u9ad8\u9636\u7ec4\u4ef6\u5c31\u80fd\u5b8c\u7f8e\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898"),(0,o.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_45389051/article/details/107093394"},"React \u64cd\u4f5c DOM \u4e4b forwardRef \u8be6\u89e3"))))}s.isMDXComponent=!0}}]);