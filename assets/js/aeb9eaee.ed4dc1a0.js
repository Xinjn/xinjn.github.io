"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[79779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(r),g=o,d=f["".concat(i,".").concat(g)]||f[g]||u[g]||a;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},s="[\u9a8c\u8bc1 PostgreSQL]",c={unversionedId:"\u540e\u7aef/\u6570\u636e\u5e93/PostgreSQL \u6559\u7a0b/\u9a8c\u8bc1 PostgreSQL",id:"\u540e\u7aef/\u6570\u636e\u5e93/PostgreSQL \u6559\u7a0b/\u9a8c\u8bc1 PostgreSQL",title:"[\u9a8c\u8bc1 PostgreSQL]",description:"- \\l \u7528\u4e8e list databases\uff0c\u76ee\u524d\u6709\u4e00\u4e2a blog \u6570\u636e\u5e93",source:"@site/docs/\u540e\u7aef/\u6570\u636e\u5e93/PostgreSQL \u6559\u7a0b/\u9a8c\u8bc1 PostgreSQL.md",sourceDirName:"\u540e\u7aef/\u6570\u636e\u5e93/PostgreSQL \u6559\u7a0b",slug:"/\u540e\u7aef/\u6570\u636e\u5e93/PostgreSQL \u6559\u7a0b/\u9a8c\u8bc1 PostgreSQL",permalink:"/docs/\u540e\u7aef/\u6570\u636e\u5e93/PostgreSQL \u6559\u7a0b/\u9a8c\u8bc1 PostgreSQL",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u540e\u7aef/\u6570\u636e\u5e93/PostgreSQL \u6559\u7a0b/\u9a8c\u8bc1 PostgreSQL.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[PostgreSQL](https://www.postgresql.org/)",permalink:"/docs/\u540e\u7aef/\u6570\u636e\u5e93/PostgreSQL \u6559\u7a0b/PostgreSQL"},next:{title:"FAQ",permalink:"/docs/\u540e\u7aef/\u6570\u636e\u5e93/Redius \u6559\u7a0b/FAQ"}},i={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u9a8c\u8bc1-postgresql"},"[\u9a8c\u8bc1 PostgreSQL]"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\\l \u7528\u4e8e list databases\uff0c\u76ee\u524d\u6709\u4e00\u4e2a blog \u6570\u636e\u5e93"),(0,o.kt)("li",{parentName:"ul"},"\\c \u7528\u4e8e connect to a database"),(0,o.kt)("li",{parentName:"ul"},"\\dt \u7528\u4e8e display tables\uff0c\u76ee\u524d\u6211\u4eec\u6ca1\u6709 tables"),(0,o.kt)("li",{parentName:"ul"},"\\q \u7528\u4e8e\u9000\u51fa")))}u.isMDXComponent=!0}}]);