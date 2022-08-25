"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[44495],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),y=a,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||o;return t?n.createElement(f,c(c({ref:r},p),{},{components:t})):n.createElement(f,c({ref:r},p))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36263:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={},c="[splice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)",i={unversionedId:"\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/splice",id:"\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/splice",title:"[splice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)",description:"Try it",source:"@site/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/splice.md",sourceDirName:"\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5",slug:"/\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/splice",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/splice",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/splice.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/sort"},next:{title:"[sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u6570\u636e\u7c7b\u578b/\u57fa\u672c\u7c7b\u578b/Array/\u65b9\u6cd5/toLocaleString"}},l={},s=[{value:"Try it",id:"try-it",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2}],p={toc:s};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"splice"},(0,a.kt)("a",{parentName:"h1",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"},"splice()")),(0,a.kt)("h2",{id:"try-it"},"Try it"),(0,a.kt)("p",null,"splice() \u65b9\u6cd5\u901a\u8fc7\u5220\u9664\u6216\u66ff\u6362\u73b0\u6709\u5143\u7d20\u6216\u8005\u539f\u5730\u6dfb\u52a0\u65b0\u7684\u5143\u7d20\u6765\u4fee\u6539\u6570\u7ec4\uff0c\u5e76\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u88ab\u4fee\u6539\u7684\u5185\u5bb9\u3002\u6b64\u65b9\u6cd5\u4f1a\u6539\u53d8\u539f\u6570\u7ec4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const months = ["Jan", "March", "April", "June"];\nmonths.splice(1, 0, "Feb");\n// inserts at index 1\nconsole.log(months);\n// expected output: Array ["Jan", "Feb", "March", "April", "June"]\n\nmonths.splice(4, 1, "May");\n// replaces 1 element at index 4\nconsole.log(months);\n// expected output: Array ["Jan", "Feb", "March", "April", "May"]\n')),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("p",null,"\u7531\u88ab\u5220\u9664\u7684\u5143\u7d20\u7ec4\u6210\u7684\u4e00\u4e2a\u6570\u7ec4\u3002\u5982\u679c\u53ea\u5220\u9664\u4e86\u4e00\u4e2a\u5143\u7d20\uff0c\u5219\u8fd4\u56de\u53ea\u5305\u542b\u4e00\u4e2a\u5143\u7d20\u7684\u6570\u7ec4\u3002\u5982\u679c\u6ca1\u6709\u5220\u9664\u5143\u7d20\uff0c\u5219\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002"))}u.isMDXComponent=!0}}]);