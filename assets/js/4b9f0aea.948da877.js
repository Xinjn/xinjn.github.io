"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[50496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,p(p({ref:t},s),{},{components:n})):r.createElement(f,p({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={},p="React \u91cd\u590d\u6e32\u67d3",c={unversionedId:"\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/shouldComponentUpdate/React \u91cd\u590d\u6e32\u67d3",id:"\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/shouldComponentUpdate/React \u91cd\u590d\u6e32\u67d3",title:"React \u91cd\u590d\u6e32\u67d3",description:"React \u4ec0\u4e48\u65f6\u5019\u9020\u6210\u91cd\u590d\u6e32\u67d3\uff1f",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/shouldComponentUpdate/React \u91cd\u590d\u6e32\u67d3.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/shouldComponentUpdate",slug:"/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/shouldComponentUpdate/React \u91cd\u590d\u6e32\u67d3",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/shouldComponentUpdate/React \u91cd\u590d\u6e32\u67d3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/shouldComponentUpdate/React \u91cd\u590d\u6e32\u67d3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8c08\u8c08 useMemo",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/memo/\u8c08\u8c08 useMemo"},next:{title:"\u8c08\u8c08 shouldComponentUpdate",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/shouldComponentUpdate/\u8c08\u8c08 shouldComponentUpdate"}},l={},i=[{value:"React \u4ec0\u4e48\u65f6\u5019\u9020\u6210\u91cd\u590d\u6e32\u67d3\uff1f",id:"react-\u4ec0\u4e48\u65f6\u5019\u9020\u6210\u91cd\u590d\u6e32\u67d3",level:2},{value:"React \u4e3a\u4ec0\u4e48\u4f1a\u91cd\u590d\u6e32\u67d3\uff1f",id:"react-\u4e3a\u4ec0\u4e48\u4f1a\u91cd\u590d\u6e32\u67d3",level:2}],s={toc:i};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-\u91cd\u590d\u6e32\u67d3"},"React \u91cd\u590d\u6e32\u67d3"),(0,o.kt)("h2",{id:"react-\u4ec0\u4e48\u65f6\u5019\u9020\u6210\u91cd\u590d\u6e32\u67d3"},"React \u4ec0\u4e48\u65f6\u5019\u9020\u6210\u91cd\u590d\u6e32\u67d3\uff1f"),(0,o.kt)("p",null,"\u5f53 React \u4e2d\u4e00\u4e2a\u7ec4\u4ef6\u8fdb\u884c\u66f4\u65b0\u65f6\uff0c\u5b83\u7684\u6240\u6709\u5b50\u7ec4\u4ef6\u90fd\u4f1a\u8fdb\u884c\u91cd\u65b0\u6e32\u67d3\uff0c\u5373\u4fbf\u5b50\u7ec4\u4ef6\u7684 props \u5e76\u672a\u53d1\u751f\u4efb\u4f55\u6539\u53d8\u3002"),(0,o.kt)("h2",{id:"react-\u4e3a\u4ec0\u4e48\u4f1a\u91cd\u590d\u6e32\u67d3"},"React \u4e3a\u4ec0\u4e48\u4f1a\u91cd\u590d\u6e32\u67d3\uff1f"),(0,o.kt)("p",null,"\u7b54\u6848\uff1a\u7531\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"\u9ed8\u8ba4\u6e32\u67d3\u884c\u4e3a\u7684\u95ee\u9898")),(0,o.kt)("p",null,"\u5728 React Component \u7684\u751f\u547d\u5468\u671f\u4e2d\uff0c\u6709\u4e00\u4e2a shouldComponentUpdate \u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u9ed8\u8ba4\u8fd4\u56de\u503c\u662f true\u3002"),(0,o.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u5c31\u7b97\u6ca1\u6709\u6539\u53d8\u7ec4\u4ef6\u7684 props \u6216\u8005 state\uff0c\u4e5f\u4f1a\u5bfc\u81f4\u7ec4\u4ef6\u7684\u91cd\u7ed8\u3002\u8fd9\u5c31\u7ecf\u5e38\u5bfc\u81f4\u7ec4\u4ef6\u56e0\u4e3a\u4e0d\u76f8\u5173\u6570\u636e\u7684\u6539\u53d8\u5bfc\u81f4\u91cd\u7ed8\uff0c\u8fd9\u6781\u5927\u7684\u964d\u4f4e\u4e86 React \u7684\u6e32\u67d3\u6548\u7387\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u4efb\u4f55 options \u7684\u53d8\u5316\uff0c\u751a\u81f3\u662f\u5176\u4ed6\u6570\u636e\u7684\u53d8\u5316\u90fd\u53ef\u80fd\u5bfc\u81f4\u6240\u6709 cell \u7684\u91cd\u7ed8\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JS"},"//Table Component\n{this.props.items.map(i =>\n    <Cell data={i} option={this.props.options[i]} />\n)}\n")),(0,o.kt)("p",null,"\u91cd\u5199 shouldComponentUpdate\n\u4e3a\u4e86\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Cell \u4e2d\u91cd\u5199 shouldComponentUpdate \u65b9\u6cd5\uff0c\u53ea\u5728 option \u53d1\u751f\u6539\u53d8\u65f6\u8fdb\u884c\u91cd\u7ed8\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JS"},"class Cell extends React.Component {\n  shouldComponentUpdate(nextProps, nextState) {\n    if (this.props.option === nextProps.option) {\n      return false;\n    } else {\n      return true;\n    }\n  }\n}\n")),(0,o.kt)("p",null,"\u8fd9\u6837\u6bcf\u4e2a Cell \u53ea\u6709\u5728\u5173\u8054 option \u53d1\u751f\u53d8\u5316\u65f6\u8fdb\u884c\u91cd\u7ed8\u3002"))}u.isMDXComponent=!0}}]);