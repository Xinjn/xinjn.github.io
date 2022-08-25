"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[31882],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||c;return t?n.createElement(y,o(o({ref:r},p),{},{components:t})):n.createElement(y,o({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},83595:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const c={},o="[slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)",l={unversionedId:"\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/slice",id:"\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/slice",title:"[slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)",description:"Try it",source:"@site/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/slice.md",sourceDirName:"\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5",slug:"/\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/slice",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/slice",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/slice.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[reverse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/reverse"},next:{title:"[some()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/some"}},i={},s=[{value:"Try it",id:"try-it",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2}],p={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"slice"},(0,a.kt)("a",{parentName:"h1",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"},"slice()")),(0,a.kt)("h2",{id:"try-it"},"Try it"),(0,a.kt)("p",null,"slice() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\u5bf9\u8c61\uff0c\u8fd9\u4e00\u5bf9\u8c61\u662f\u4e00\u4e2a\u7531 begin \u548c end \u51b3\u5b9a\u7684\u539f\u6570\u7ec4\u7684\u6d45\u62f7\u8d1d\uff08\u5305\u62ec begin\uff0c\u4e0d\u5305\u62ec end\uff09\u3002\u539f\u59cb\u6570\u7ec4\u4e0d\u4f1a\u88ab\u6539\u53d8\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const animals = ["ant", "bison", "camel", "duck", "elephant"];\n\nconsole.log(animals.slice(2));\n// expected output: Array ["camel", "duck", "elephant"]\n\nconsole.log(animals.slice(2, 4));\n// expected output: Array ["camel", "duck"]\n\nconsole.log(animals.slice(1, 5));\n// expected output: Array ["bison", "camel", "duck", "elephant"]\n\nconsole.log(animals.slice(-2));\n// expected output: Array ["duck", "elephant"]\n\nconsole.log(animals.slice(2, -1));\n// expected output: Array ["camel", "duck"]\n\nconsole.log(animals.slice());\n// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]\n')),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("p",null,"\u4e00\u4e2a\u542b\u6709\u88ab\u63d0\u53d6\u5143\u7d20\u7684\u65b0\u6570\u7ec4\u3002"))}u.isMDXComponent=!0}}]);