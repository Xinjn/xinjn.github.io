"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[23036],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>k});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(o),k=r,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||a;return o?n.createElement(d,i(i({ref:t},p),{},{components:o})):n.createElement(d,i({ref:t},p))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},33607:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={},i="[js-cookie](https://github.com/js-cookie/js-cookie#readme)",s={unversionedId:"\u4f9d\u8d56\u5305/cookie/js-cookie",id:"\u4f9d\u8d56\u5305/cookie/js-cookie",title:"[js-cookie](https://github.com/js-cookie/js-cookie#readme)",description:"readme)",source:"@site/docs/\u4f9d\u8d56\u5305/cookie/js-cookie.md",sourceDirName:"\u4f9d\u8d56\u5305/cookie",slug:"/\u4f9d\u8d56\u5305/cookie/js-cookie",permalink:"/docs/\u4f9d\u8d56\u5305/cookie/js-cookie",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u4f9d\u8d56\u5305/cookie/js-cookie.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[classnames](https://www.npmjs.com/package/classnames)",permalink:"/docs/\u4f9d\u8d56\u5305/classnames/"},next:{title:"README",permalink:"/docs/\u4f9d\u8d56\u5305/echart/"}},c={},l=[{value:"Install",id:"install",level:2},{value:"Quest Start",id:"quest-start",level:2},{value:"\u521b\u5efa",id:"\u521b\u5efa",level:3},{value:"\u53d6\u503c",id:"\u53d6\u503c",level:3},{value:"\u5220\u9664\u503c",id:"\u5220\u9664\u503c",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"js-cookie"},(0,r.kt)("a",{parentName:"h1",href:"https://github.com/js-cookie/js-cookie#readme"},"js-cookie")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"npm i js-cookie\n")),(0,r.kt)("h2",{id:"quest-start"},"Quest Start"),(0,r.kt)("h3",{id:"\u521b\u5efa"},"\u521b\u5efa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'//\u521b\u5efa\u7b80\u5355\u7684cookie\nCookies.set("name", "value");\n\n//\u521b\u5efa\u6709\u6548\u671f\u4e3a7\u5929\u7684cookie\nCookies.set("name", "value", { expires: 7 });\n\n//\u4e3a\u5f53\u524d\u9875\u521b\u5efa\u6709\u6548\u671f7\u5929\u7684cookie\nCookies.set("name", "value", { expires: 7, path: "" });\n')),(0,r.kt)("h3",{id:"\u53d6\u503c"},"\u53d6\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Cookies.get(\"name\"); // => 'value'\nCookies.get(\"nothing\"); // => undefined\n\n//\u83b7\u53d6\u6240\u6709cookie\nCookies.get(); // => { name: 'value' }\n")),(0,r.kt)("h3",{id:"\u5220\u9664\u503c"},"\u5220\u9664\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'Cookies.remove("name");\n\n//\u5982\u679c\u503c\u8bbe\u7f6e\u4e86\u8def\u5f84\uff0c\u90a3\u4e48\u4e0d\u80fd\u7528\u7b80\u5355\u7684delete\u65b9\u6cd5\u5220\u9664\u503c\uff0c\u9700\u8981\u5728delete\u65f6\u6307\u5b9a\u8def\u5f84\nCookies.set("name", "value", { path: "" });\nCookies.remove("name"); // \u5220\u9664\u5931\u8d25\nCookies.remove("name", { path: "" }); // \u5220\u9664\u6210\u529f\n//\u6ce8\u610f\uff0c\u5220\u9664\u4e0d\u5b58\u5728\u7684cookie\u4e0d\u4f1a\u62a5\u9519\u4e5f\u4e0d\u4f1a\u6709\u8fd4\u56de\n')),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_16828495/article/details/120783389"},"js-cookie \u7684\u57fa\u672c\u4f7f\u7528")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/4bc884b92339"},"\u6bcf\u5929\u4e00\u4e2a npm \u5305 \u4e4b js-cookie"))))}u.isMDXComponent=!0}}]);