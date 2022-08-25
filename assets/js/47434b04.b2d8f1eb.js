"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[38288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,f=m["".concat(i,".").concat(b)]||m[b]||s[b]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},l="\u5bfc\u5165",c={unversionedId:"\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/HtmlWebpackPlugin/\u5bfc\u5165",id:"\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/HtmlWebpackPlugin/\u5bfc\u5165",title:"\u5bfc\u5165",description:"\u6269\u5c55\u7b26\u53f7\u5bfc\u5165",source:"@site/docs/\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/HtmlWebpackPlugin/\u5bfc\u5165.md",sourceDirName:"\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/HtmlWebpackPlugin",slug:"/\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/HtmlWebpackPlugin/\u5bfc\u5165",permalink:"/docs/\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/HtmlWebpackPlugin/\u5bfc\u5165",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/HtmlWebpackPlugin/\u5bfc\u5165.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin#options)",permalink:"/docs/\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/HtmlWebpackPlugin/"},next:{title:"[postcss](https://postcss.org/)",permalink:"/docs/\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/postcss/"}},i={},p=[{value:"\u6269\u5c55\u7b26\u53f7\u5bfc\u5165",id:"\u6269\u5c55\u7b26\u53f7\u5bfc\u5165",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5bfc\u5165"},"\u5bfc\u5165"),(0,a.kt)("h2",{id:"\u6269\u5c55\u7b26\u53f7\u5bfc\u5165"},"\u6269\u5c55\u7b26\u53f7\u5bfc\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n    let {\n        htmlPlugins, //\u6ce8\u610f\uff1afilename\u58f0\u660ehtml\u6587\u4ef6\u540d\u5fc5\u987b\u548ctemplate\u5b57\u6bb5\u4e0b\u6587\u4ef6\u540d\u4e00\u81f4\n    } = item;\n    return {\n        plugins: [\n            // html\u542f\u52a8\u670d\u52a1\n            ...htmlPlugins,\n        ]\n    }\n}\n")))}s.isMDXComponent=!0}}]);