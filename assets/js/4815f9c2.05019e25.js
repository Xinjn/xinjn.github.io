"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[82666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,c(c({ref:t},s),{},{components:r})):n.createElement(f,c({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14994:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={},c=void 0,p={unversionedId:"\u6846\u67b6/\u524d\u53f0/React/ReactDOM.createPortal/\u63d2\u69fd\u4f20\u503c",id:"\u6846\u67b6/\u524d\u53f0/React/ReactDOM.createPortal/\u63d2\u69fd\u4f20\u503c",title:"\u63d2\u69fd\u4f20\u503c",description:"\u94fe\u63a5",source:"@site/docs/\u6846\u67b6/\u524d\u53f0/React/ReactDOM.createPortal/\u63d2\u69fd\u4f20\u503c.md",sourceDirName:"\u6846\u67b6/\u524d\u53f0/React/ReactDOM.createPortal",slug:"/\u6846\u67b6/\u524d\u53f0/React/ReactDOM.createPortal/\u63d2\u69fd\u4f20\u503c",permalink:"/docs/\u6846\u67b6/\u524d\u53f0/React/ReactDOM.createPortal/\u63d2\u69fd\u4f20\u503c",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6846\u67b6/\u524d\u53f0/React/ReactDOM.createPortal/\u63d2\u69fd\u4f20\u503c.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[PropTypes](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html)",permalink:"/docs/\u6846\u67b6/\u524d\u53f0/React/PropTypes/"},next:{title:"README",permalink:"/docs/\u6846\u67b6/\u524d\u53f0/React/ReactRouter/"}},l={},i=[{value:"\u94fe\u63a5",id:"\u94fe\u63a5",level:2}],s={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\n\n//\u7236\u7ec4\u4ef6\uff08\u63d2\u69fd\u5c55\u793a\u5b50\u7ec4\u4ef6=>cloneElement\u4f20\u9012\u6570\u636e\uff09\nconst Wrap = (props) => {\n  console.log(props);\n  return <div>{React.cloneElement(props.children, { name: 1 })}</div>;\n};\n\n//\u5b50\u7ec4\u4ef6\nconst Cpn = (props) => {\n  console.log(props);\n  return <div>Cpn:{props.name}</div>;\n};\n\n//Layout\u6e32\u67d3\u7ec4\u4ef6\nfunction Layout() {\n  return (\n    <div className="App">\n      <Wrap>\n        <Cpn />\n      </Wrap>\n    </div>\n  );\n}\n\nexport default Layout;\n')),(0,a.kt)("h2",{id:"\u94fe\u63a5"},"\u94fe\u63a5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u6587\u7ae0\uff1a"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/c9316/article/details/108006328"},"react\u2014\u2014\u5982\u4f55\u5b9e\u73b0\u63d2\u69fd\u4f20\u9012\u6570\u636e\uff1f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://segmentfault.com/q/1010000011403882"},"react \u80fd\u4e0d\u80fd\u901a\u8fc7this.props.children\u4f20\u503c\u8fdb\u53bb\uff1f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904036827676686"},"React\u4e4b\u4e0d\u7b80\u5355\u7684Children")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/heartsdance/article/details/119737426"},"React\u7ed9children\u4f20props")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/94607846"},"\u5728 React \u7ec4\u4ef6\u4e2d\u5982\u4f55\u5411 props.children \u4f20\u9012\u6570\u636e?")))))}u.isMDXComponent=!0}}]);