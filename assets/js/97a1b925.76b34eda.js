"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[73160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||p;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},47947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const p={},l="Vue \u5e38\u7528\u7684\u4fee\u9970\u7b26",o={unversionedId:"\u9762\u8bd5\u62bc\u9898/Vue 2 \u62bc\u9898/Vue\u5e38\u7528\u7684\u4fee\u9970\u7b26",id:"\u9762\u8bd5\u62bc\u9898/Vue 2 \u62bc\u9898/Vue\u5e38\u7528\u7684\u4fee\u9970\u7b26",title:"Vue \u5e38\u7528\u7684\u4fee\u9970\u7b26",description:"\u4e8b\u4ef6\u4fee\u9970\u7b26",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/Vue 2 \u62bc\u9898/Vue\u5e38\u7528\u7684\u4fee\u9970\u7b26.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/Vue 2 \u62bc\u9898",slug:"/\u9762\u8bd5\u62bc\u9898/Vue 2 \u62bc\u9898/Vue\u5e38\u7528\u7684\u4fee\u9970\u7b26",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/Vue 2 \u62bc\u9898/Vue\u5e38\u7528\u7684\u4fee\u9970\u7b26",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/Vue 2 \u62bc\u9898/Vue\u5e38\u7528\u7684\u4fee\u9970\u7b26.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vue \u4e2d watch \u5bf9\u8c61\u5185\u5c5e\u6027\u7684\u65b9\u6cd5",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/Vue 2 \u62bc\u9898/Vue\u4e2dwatch\u5bf9\u8c61\u5185\u5c5e\u6027\u7684\u65b9\u6cd5"},next:{title:"Vue \u6570\u636e\u6301\u4e45\u5316",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/Vue 2 \u62bc\u9898/Vue\u6570\u636e\u6301\u4e45\u5316"}},i={},u=[{value:"\u4e8b\u4ef6\u4fee\u9970\u7b26",id:"\u4e8b\u4ef6\u4fee\u9970\u7b26",level:2},{value:"\u8868\u5355\u4fee\u9970\u7b26",id:"\u8868\u5355\u4fee\u9970\u7b26",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"vue-\u5e38\u7528\u7684\u4fee\u9970\u7b26"},"Vue \u5e38\u7528\u7684\u4fee\u9970\u7b26"),(0,a.kt)("h2",{id:"\u4e8b\u4ef6\u4fee\u9970\u7b26"},"\u4e8b\u4ef6\u4fee\u9970\u7b26"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},".stop"),":\u8c03\u7528 event.stopPropagation()\uff0c\u7981\u6b62\u4e8b\u4ef6\u5192\u6ce1\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-JS"},'<div @click="shout(2)">\n<button @click.stop="shout(1)">ok</button>\n</div>\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},".prevent "),":\u8c03\u7528 event.preventDefault()\uff0c\u963b\u6b62\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-JS"},'<form v-on:submit.prevent="onSubmit"></form>\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},".native"),":\u76d1\u542c\u7ec4\u4ef6\u6839\u5143\u7d20\u7684\u539f\u751f\u4e8b\u4ef6\u3002\n\u6ce8\u610f\uff1a \u5982\u679c\u662f\u5728\u81ea\u5df1\u5c01\u88c5\u7684\u7ec4\u4ef6\u6216\u8005\u662f\u4f7f\u7528\u4e00\u4e9b\u7b2c\u4e09\u65b9\u7684 UI \u5e93\u65f6\uff0c\u4f1a\u53d1\u73b0\u5e76\u4e0d\u8d77\u6548\u679c\uff0c\u8fd9\u65f6\u5c31\u9700\u8981\u7528`\xb7.native \u4fee\u9970\u7b26\u4e86\uff0c\u5982\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//\u4f7f\u7528\u793a\u4f8b\uff1a\n<el-input\n  v-model="inputName"\n  placeholder="\u641c\u7d22\u4f60\u7684\u6587\u4ef6"\n  @keyup.enter.native="searchFile(params)"\n>\n</el-input>\n')))),(0,a.kt)("h2",{id:"\u8868\u5355\u4fee\u9970\u7b26"},"\u8868\u5355\u4fee\u9970\u7b26"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},".lazy - \u53d6\u4ee3 input \u76d1\u542c change \u4e8b\u4ef6"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-JS"},'<input type="text" v-model.lazy="value">\n<p>{{value}}</p>\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},".number - \u8f93\u5165\u5b57\u7b26\u4e32\u8f6c\u4e3a\u6570\u5b57"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-JS"},'<input v-model.number="age" type="number">\n'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},".trim - \u8f93\u5165\u9996\u5c3e\u7a7a\u683c\u8fc7\u6ee4"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-JS"},'<input type="text" v-model.trim="value">\n')))))}m.isMDXComponent=!0}}]);