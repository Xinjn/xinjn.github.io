"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[45096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),l=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),y=l(n),d=r,h=y["".concat(i,".").concat(d)]||y[d]||u[d]||s;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},94415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const s={},a="[async-hooks](https://www.nodeapp.cn/async_hooks.html#async_hooks_async_hooks)",c={unversionedId:"\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/async-hooks/async-hooks",id:"\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/async-hooks/async-hooks",title:"[async-hooks](https://www.nodeapp.cn/async_hooks.html#async_hooks_async_hooks)",description:"asynchooksasync_hooks)",source:"@site/docs/\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/async-hooks/async-hooks.md",sourceDirName:"\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/async-hooks",slug:"/\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/async-hooks/",permalink:"/docs/\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/async-hooks/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/async-hooks/async-hooks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"async \u51fd\u6570\u7684\u542b\u4e49\u548c\u7528\u6cd5",permalink:"/docs/\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/async \u51fd\u6570/async \u51fd\u6570\u7684\u542b\u4e49\u548c\u7528\u6cd5"},next:{title:"README",permalink:"/docs/\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/co \u51fd\u6570\u5e93/"}},i={},l=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"async-hooks"},(0,r.kt)("a",{parentName:"h1",href:"https://www.nodeapp.cn/async_hooks.html#async_hooks_async_hooks"},"async-hooks")),(0,r.kt)("p",null,"Async Hooks \u662f Node8 \u65b0\u51fa\u6765\u7684\u7279\u6027\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e9b API \u7528\u4e8e\u8ddf\u8e2a NodeJs \u4e2d\u7684\u5f02\u6b65\u8d44\u6e90\u7684\u751f\u547d\u5468\u671f\uff0c\u5c5e\u4e8e NodeJs \u5185\u7f6e\u6a21\u5757\uff0c\u53ef\u4ee5\u76f4\u63a5\u5f15\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let asycnHooks = require("async_hooks");\n')),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/zdplife/article/details/85217330"},"\u5b66\u4e60\u4f7f\u7528 NodeJs \u4e2d async-hooks \u6a21\u5757"))))}u.isMDXComponent=!0}}]);