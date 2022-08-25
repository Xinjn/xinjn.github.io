"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[27396],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67229:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={},i="[matrix](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix)",l={unversionedId:"\u524d\u7aef\u57fa\u7840/CSS/\u52a8\u753b/matrix/matrix",id:"\u524d\u7aef\u57fa\u7840/CSS/\u52a8\u753b/matrix/matrix",title:"[matrix](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix)",description:"CSS \u51fd\u6570 matrix() \u6307\u5b9a\u4e86\u4e00\u4e2a\u7531\u6307\u5b9a\u7684 6 \u4e2a\u503c\u7ec4\u6210\u7684 2D \u53d8\u6362\u77e9\u9635\u3002\u8fd9\u79cd\u77e9\u9635\u7684\u5e38\u91cf\u503c\u662f\u9690\u542b\u7684\uff0c\u800c\u4e0d\u662f\u7531\u53c2\u6570\u4f20\u9012\u7684\uff1b\u5176\u4ed6\u7684\u53c2\u6570\u662f\u4ee5\u5217\u4f18\u5148\u7684\u987a\u5e8f\u63cf\u8ff0\u7684\u3002",source:"@site/docs/\u524d\u7aef\u57fa\u7840/CSS/\u52a8\u753b/matrix/matrix.md",sourceDirName:"\u524d\u7aef\u57fa\u7840/CSS/\u52a8\u753b/matrix",slug:"/\u524d\u7aef\u57fa\u7840/CSS/\u52a8\u753b/matrix/",permalink:"/docs/\u524d\u7aef\u57fa\u7840/CSS/\u52a8\u753b/matrix/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef\u57fa\u7840/CSS/\u52a8\u753b/matrix/matrix.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[animation-fill-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode)",permalink:"/docs/\u524d\u7aef\u57fa\u7840/CSS/\u52a8\u753b/animation/animation-fill-mode"},next:{title:"[transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)",permalink:"/docs/\u524d\u7aef\u57fa\u7840/CSS/\u52a8\u753b/transform/"}},c={},m=[{value:"\u53c2\u6570\u503c",id:"\u53c2\u6570\u503c",level:2},{value:"Try it",id:"try-it",level:2}],p={toc:m};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"matrix"},(0,a.kt)("a",{parentName:"h1",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix"},"matrix")),(0,a.kt)("p",null,"CSS \u51fd\u6570 matrix() \u6307\u5b9a\u4e86\u4e00\u4e2a\u7531\u6307\u5b9a\u7684 6 \u4e2a\u503c\u7ec4\u6210\u7684 2D \u53d8\u6362\u77e9\u9635\u3002\u8fd9\u79cd\u77e9\u9635\u7684\u5e38\u91cf\u503c\u662f\u9690\u542b\u7684\uff0c\u800c\u4e0d\u662f\u7531\u53c2\u6570\u4f20\u9012\u7684\uff1b\u5176\u4ed6\u7684\u53c2\u6570\u662f\u4ee5\u5217\u4f18\u5148\u7684\u987a\u5e8f\u63cf\u8ff0\u7684\u3002"),(0,a.kt)("p",null,"matrix(a, b, c, d, tx, ty) \u662f matrix3d(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1) \u7684\u7b80\u5199\u3002"),(0,a.kt)("h2",{id:"\u53c2\u6570\u503c"},"\u53c2\u6570\u503c"),(0,a.kt)("p",null,"a b c d\n\u63cf\u8ff0\u7ebf\u6027\u53d8\u6362\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"<number> ")),(0,a.kt)("p",null,"tx ty\n\u63cf\u8ff0\u5982\u4f55\u5e94\u7528\u8fd9\u4e2a\u53d8\u6362\u7684",(0,a.kt)("inlineCode",{parentName:"p"}," <number>")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"matrix(a, b, c, d, tx, ty);\n\n// \u8fd9\u4e9b\u503c\u8868\u793a\u4ee5\u4e0b\u51fd\u6570\uff1a\n\nmatrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY());\n")),(0,a.kt)("h2",{id:"try-it"},"Try it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div>Normal</div>\n<div class="changed">Changed</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"div {\n  width: 80px;\n  height: 80px;\n  background-color: skyblue;\n}\n\n.changed {\n  transform: matrix(1, 2, -1, 1, 80, 80);\n  background-color: pink;\n}\n")))}s.isMDXComponent=!0}}]);