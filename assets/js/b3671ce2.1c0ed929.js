"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[72254],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=o(r),m=a,g=b["".concat(l,".").concat(m)]||b[m]||s[m]||c;return r?n.createElement(g,p(p({ref:t},u),{},{components:r})):n.createElement(g,p({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,p=new Array(c);p[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var o=2;o<c;o++)p[o]=r[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const c={},p=void 0,i={unversionedId:"\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/extract-text-webpack-plugin",id:"\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/extract-text-webpack-plugin",title:"extract-text-webpack-plugin",description:"extract-text-webpack-plugin",source:"@site/docs/\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/extract-text-webpack-plugin.md",sourceDirName:"\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin",slug:"/\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/extract-text-webpack-plugin",permalink:"/docs/\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/extract-text-webpack-plugin",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/extract-text-webpack-plugin.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Plugins](https://webpack.docschina.org/configuration/plugins/)",permalink:"/docs/\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/Plugins"},next:{title:"mini-css-extract-plugin",permalink:"/docs/\u5de5\u7a0b\u5316/\u6253\u5305\u6784\u5efa/Webpack/plugin/mini-css-extract-plugin"}},l={},o=[{value:"extract-text-webpack-plugin",id:"extract-text-webpack-plugin",level:2},{value:"FAQ",id:"faq",level:2}],u={toc:o};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"extract-text-webpack-plugin"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/webpack-contrib/extract-text-webpack-plugin"},"extract-text-webpack-plugin")),(0,a.kt)("p",null,"ExtractTextPlugin \u9700\u8981\u4f7f\u7528\u7248\u672c 2\uff0c\u624d\u80fd\u5728 webpack 2 \u4e0b\u6b63\u5e38\u8fd0\u884c \u3002"),(0,a.kt)("p",null,"\u65b0\u7248\u63d2\u4ef6:",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/mini-css-extract-plugin"},"https://github.com/webpack-contrib/mini-css-extract-plugin")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://segmentfault.com/q/1010000012774599"},"ExtractTextPlugin \u6253\u5305 css \u65f6\u62a5\u9519\uff01")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/umijs/babel-plugin-import/issues/301"},"\u6309\u9700\u52a0\u8f7d less \u6ca1\u95ee\u9898\uff0c\u4f46\u662f\u4f7f\u7528 extract-text-webpack-plugin \u5c31\u62a5\u9519\u4e86")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cxyzjd.com/article/u010086122/115056912"},"extract-text-webpack-plugin\uff1aTypeError: Cannot set property \u2018index\u2018 of undefined \u89e3\u51b3\u529e\u6cd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://codeantenna.com/a/kuZJNkQJQP"},"webpack \u5206\u79bb css html,\u3010\u5df2\u89e3\u51b3\u3011ReactJS \u4e2d Webpack \u6253\u5305\u65f6\u5206\u79bb css"))))}s.isMDXComponent=!0}}]);