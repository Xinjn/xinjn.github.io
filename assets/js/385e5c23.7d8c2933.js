"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[38955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?o.createElement(k,a(a({ref:t},p),{},{components:n})):o.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const l={},a="Node.js \u7684 EventLoop \u662f\u4ec0\u4e48\uff1f",i={unversionedId:"\u9762\u8bd5\u62bc\u9898/Node.js \u62bc\u9898/Node.js \u7684 EventLoop \u662f\u4ec0\u4e48\uff1f",id:"\u9762\u8bd5\u62bc\u9898/Node.js \u62bc\u9898/Node.js \u7684 EventLoop \u662f\u4ec0\u4e48\uff1f",title:"Node.js \u7684 EventLoop \u662f\u4ec0\u4e48\uff1f",description:"\u80cc\u666f\u77e5\u8bc6",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/Node.js \u62bc\u9898/Node.js \u7684 EventLoop \u662f\u4ec0\u4e48\uff1f.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/Node.js \u62bc\u9898",slug:"/\u9762\u8bd5\u62bc\u9898/Node.js \u62bc\u9898/Node.js \u7684 EventLoop \u662f\u4ec0\u4e48\uff1f",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/Node.js \u62bc\u9898/Node.js \u7684 EventLoop \u662f\u4ec0\u4e48\uff1f",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/Node.js \u62bc\u9898/Node.js \u7684 EventLoop \u662f\u4ec0\u4e48\uff1f.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5199\u4e00\u4e2a\u7b80\u5355\u7684 Koa",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/Node.js \u62bc\u9898/koa/\u5199\u4e00\u4e2a\u7b80\u5355\u7684 Koa"},next:{title:"nodejs \u4e2d Fork \u662f\u4ec0\u4e48\uff1f",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/Node.js \u62bc\u9898/Nodejs\u4e2dFork\u662f\u4ec0\u4e48\uff1f"}},s={},c=[{value:"\u80cc\u666f\u77e5\u8bc6",id:"\u80cc\u666f\u77e5\u8bc6",level:2},{value:"nextTick",id:"nexttick",level:2},{value:"Promise",id:"promise",level:2},{value:"async / await",id:"async--await",level:2},{value:"\u9762\u8bd5\u9898 1\uff1a",id:"\u9762\u8bd5\u9898-1",level:2},{value:"\u9762\u8bd5\u9898 2\uff1a",id:"\u9762\u8bd5\u9898-2",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nodejs-\u7684-eventloop-\u662f\u4ec0\u4e48"},"Node.js \u7684 EventLoop \u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("h2",{id:"\u80cc\u666f\u77e5\u8bc6"},"\u80cc\u666f\u77e5\u8bc6"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903582538399752"},"Event Loop\u3001\u8ba1\u65f6\u5668\u3001nextTick - \u6398\u91d1")),(0,r.kt)("p",null,"Node.js \u5c06\u5404\u79cd\u51fd\u6570\uff08\u4e5f\u53eb\u4efb\u52a1\u6216\u56de\u8c03\uff09\u5206\u6210\u81f3\u5c11 6 \u7c7b\uff0c\u6309\u5148\u540e\u987a\u5e8f\u8c03\u7528\uff0c\u56e0\u6b64\u5c06\u65f6\u95f4\u5206\u4e3a\u516d\u4e2a\u9636\u6bb5\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"timer \u9636\u6bb5\uff08setTimeout\uff09")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"I/O callbacks \u8be5\u9636\u6bb5\u4e0d\u7528\u7ba1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"idle,prepare \u8be5\u9636\u6bb5\u4e0d\u7528\u7ba1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"poll \u8f6e\u8be2\u9636\u6bb5\uff0c\u505c\u7559\u65f6\u95f4\u6700\u957f\uff0c\u53ef\u4ee5\u968f\u65f6\u79bb\u5f00")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"check \u9636\u6bb5\uff0c\u4e3b\u8981\u5904\u7406 setImmediate \u4efb\u52a1")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"close callback \u8be5\u9636\u6bb5\u4e0d\u7528\u7ba1"))),(0,r.kt)("p",null,"Node.js \u4f1a\u4e0d\u505c\u7684\u4ece 1 ~ 6 \u5faa\u73af\u5904\u7406\u5404\u79cd\u4e8b\u4ef6\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u53eb\u505a\u4e8b\u4ef6\u5faa\u73af\uff08Event Loop\uff09\u3002"),(0,r.kt)("h2",{id:"nexttick"},"nextTick"),(0,r.kt)("p",null,"process.nextTick(fn) \u7684 fn \u4f1a\u5728\u4ec0\u4e48\u65f6\u5019\u6267\u884c\u5462\uff1f"),(0,r.kt)("p",null,"\u5728 Node.js 11 \u4e4b\u524d\uff0c\u4f1a\u5728\u6bcf\u4e2a\u9636\u6bb5\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u672b\u5c3e\u96c6\u4e2d"),"\u6267\u884c\uff08\u4fd7\u79f0\u961f\u5c3e\u6267\u884c\uff09\u3002"),(0,r.kt)("p",null,"\u5728 Node.js 11 \u4e4b\u540e\uff0c\u4f1a\u5728\u6bcf\u4e2a\u9636\u6bb5\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u4efb\u52a1\u95f4\u9699"),"\u6267\u884c\uff08\u4fd7\u79f0\u63d2\u961f\u6267\u884c\uff09\u3002"),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u8ddf Node.js 11 \u4e4b\u540e\u7684\u60c5\u51b5\u7c7b\u4f3c\u3002\u53ef\u4ee5\u7528 window.queueMicrotask \u6a21\u62df nextTick\u3002"),(0,r.kt)("h2",{id:"promise"},"Promise"),(0,r.kt)("p",null,"Promise.resolve(1).then(fn) \u7684 fn \u4f1a\u5728\u4ec0\u4e48\u65f6\u5019\u6267\u884c\uff1f"),(0,r.kt)("p",null,"\u8fd9\u8981\u770b Promise \u6e90\u7801\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff0c\u4e00\u822c\u90fd\u662f\u7528 process.nextTick(fn) \u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u76f4\u63a5\u53c2\u8003 nextTick\u3002"),(0,r.kt)("h2",{id:"async--await"},"async / await"),(0,r.kt)("p",null,"\u8fd9\u662f Promise \u7684\u8bed\u6cd5\u7cd6\uff0c\u6240\u4ee5\u76f4\u63a5\u8f6c\u4e3a Promise \u5199\u6cd5\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"\u9762\u8bd5\u9898-1"},"\u9762\u8bd5\u9898 1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JS"},"setTimeout(() => {\n  console.log('setTimeout')\n})\n\nsetImmediate(() => {\n  console.log('setImmediate')\n})\n// \u5728 Node.js \u8fd0\u884c\u4f1a\u8f93\u51fa\u4ec0\u4e48\uff1f\n// A setT setIm\n// B setIm setT\n// C \u51fa\u9519\n// D A \u6216 B\n// \u5728\u6d4f\u89c8\u5668\u6267\u884c\u4f1a\u600e\u6837\uff1f\n\n//A \u6216 B\n")),(0,r.kt)("h2",{id:"\u9762\u8bd5\u9898-2"},"\u9762\u8bd5\u9898 2\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JS"},"async function async1(){\n    console.log('1')\n    async2().then(()=>{\n      console.log('2')\n    })\n\n}\nasync function async2(){\n    console.log('3')\n}\nconsole.log('4')\nsetTimeout(function(){\n    console.log('5')\n},0)\nasync1();\nnew Promise(function(resolve){\n    console.log('6')\n    resolve();\n}).then(function(){\n    console.log('7')\n})\nconsole.log('8')\n")),(0,r.kt)("p",null,"\u5fae\u4efb\u52a1\u961f\u5217\uff08\u95f4\u9699\u63d2\u961f\uff09\uff1aasync2#then\u3001promise#then"),(0,r.kt)("p",null,"\u5b8f\u4efb\u52a1\u5bf9\u5217\uff08\u6700\u540e\u6267\u884c\uff09\uff1asetTimeout"),(0,r.kt)("p",null,"\u6700\u7ec8\u6267\u884c\uff1a4 1 3 6 8 \u540e\u9762\u4e3a\u5f02\u6b65\u961f\u5217 2\uff08async2#then\uff09 7\uff08omise#then\uff09 5\uff08setTimeout\uff09"))}u.isMDXComponent=!0}}]);