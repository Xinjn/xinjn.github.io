"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[63377],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),i=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(k,l(l({ref:t},s),{},{components:n})):o.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var o=n(87462),a=(n(67294),n(3905));const r={},l="\u8c08\u8c08 useCallback",c={unversionedId:"\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/memo/\u8c08\u8c08 useCallback",id:"\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/memo/\u8c08\u8c08 useCallback",title:"\u8c08\u8c08 useCallback",description:"\u662f\u4ec0\u4e48",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/memo/\u8c08\u8c08 useCallback.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/memo",slug:"/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/memo/\u8c08\u8c08 useCallback",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/memo/\u8c08\u8c08 useCallback",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/memo/\u8c08\u8c08 useCallback.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8c08\u8c08 memo",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/memo/\u8c08\u8c08 memo"},next:{title:"\u8c08\u8c08 useMemo",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/React \u62bc\u9898/\u91cd\u590d\u6e32\u67d3/memo/\u8c08\u8c08 useMemo"}},u={},i=[{value:"\u662f\u4ec0\u4e48",id:"\u662f\u4ec0\u4e48",level:2},{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",level:2},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",level:2}],s={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8c08\u8c08-usecallback"},"\u8c08\u8c08 useCallback"),(0,a.kt)("h2",{id:"\u662f\u4ec0\u4e48"},"\u662f\u4ec0\u4e48"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"const memoized = useCallback(\n  () => {\n    doSomething(a, b);\n  },\n  [a, b],\n);\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u4e00\u4e2a memoized \u56de\u8c03\u51fd\u6570\uff0c\u5f53\u5b50\u7ec4\u4ef6\u4e2d\u63a5\u53d7\u4e86\u7236\u7ec4\u4ef6\u4f20\u9012\u7684\u51fd\u6570\u65b9\u6cd5\uff08memoize\uff09\u65f6\uff0c\u5229\u7528 useCallback \u5305\u88f9\u8df3\u8fc7\u4e0d\u5fc5\u8981\u7684\u66f4\u65b0\uff0c\u63d0\u9ad8\u7ec4\u4ef6\u6027\u80fd\u3002"),(0,a.kt)("li",{parentName:"ol"},"useCallback(fn, deps) \u76f8\u5f53\u4e8e useMemo(() => fn, deps)\u3002")),(0,a.kt)("h2",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/brave-greider-pfw6j2"},"\u9884\u89c8\u5730\u5740")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"import React, { useState, useCallback } from 'react';\nimport Button from './Button';\n\nexport default function App() {\n  const [count1, setCount1] = useState(0);\n  const [count2, setCount2] = useState(0);\n\n  const handleClickButton1 = () => {\n    setCount1(count1 + 1);\n  };\n    // \u91cd\u70b9\uff01\uff01\n  const handleClickButton2 = useCallback(() => {\n    setCount2(count2 + 1);\n  }, [count2]);\n\n  return (\n    <div>\n      <div>\n        <Button onClickButton={handleClickButton1}>Button1</Button>\n      </div>\n      <div>\n        <Button onClickButton={handleClickButton2}>Button2</Button>\n      </div>\n    </div>\n  );\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"// Button.jsx\nimport React from 'react';\n\nconst Button = ({ onClickButton, children }) => {\n  return (\n    <>\n      <button onClick={onClickButton}>{children}</button>\n      <span>{Math.random()}</span>\n    </>\n  );\n};\n\nexport default React.memo(Button);\n")),(0,a.kt)("p",null,"\u70b9\u51fb Button2 \u9020\u6210 Button1 \u6e32\u67d3\u7684\u539f\u56e0\uff1a"),(0,a.kt)("p",null,"\u4e0a\u9762\u7684 Button \u7ec4\u4ef6\u90fd\u9700\u8981\u4e00\u4e2a onClickButton \u7684 props \uff0c\u5c3d\u7ba1\u7ec4\u4ef6\u5185\u90e8\u6709\u7528 React.memo \u6765\u505a\u4f18\u5316\uff0c\u4f46\u662f\u6211\u4eec\u58f0\u660e\u7684 handleClickButton1 \u662f\u76f4\u63a5\u5b9a\u4e49\u4e86\u4e00\u4e2a\u51fd\u6570\uff0c\u8fd9\u4e5f\u5c31\u5bfc\u81f4\u53ea\u8981\u662f\u7236\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u5c31\u4f1a\u5bfc\u81f4\u8fd9\u91cc\u58f0\u660e\u51fa\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\uff0c\u65b0\u7684\u51fd\u6570\u548c\u65e7\u7684\u51fd\u6570\u5c3d\u7ba1\u957f\u7684\u4e00\u6837\uff0c\u4f46\u662f\u4f9d\u65e7\u662f\u4e24\u4e2a\u4e0d\u540c\u7684\u5bf9\u8c61\uff0cReact.memo \u5bf9\u6bd4\u540e\u53d1\u73b0\u5bf9\u8c61 props \u6539\u53d8\uff0c\u5c31\u91cd\u65b0\u6e32\u67d3\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"const handleClickButton2 = useCallback(() => {\n  setCount2(count2 + 1);\n}, [count2]);\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u6211\u4eec\u7684\u65b9\u6cd5\u4f7f\u7528 useCallback \u5305\u88c5\u4e86\u4e00\u5c42\uff0c\u5e76\u4e14\u540e\u9762\u8fd8\u4f20\u5165\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"[count2]")," \u53d8\u91cf\uff0c\u8fd9\u91cc useCallback \u5c31\u4f1a\u6839\u636e count2 \u662f\u5426\u53d1\u751f\u53d8\u5316\uff0c\u4ece\u800c\u51b3\u5b9a\u662f\u5426\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\uff0c\u51fd\u6570\u5185\u90e8\u4f5c\u7528\u57df\u4e5f\u968f\u4e4b\u66f4\u65b0\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u6211\u4eec\u7684\u8fd9\u4e2a\u65b9\u6cd5\u53ea\u4f9d\u8d56\u4e86 count2 \u8fd9\u4e2a\u53d8\u91cf\uff0c\u800c\u4e14 count2 \u53ea\u5728\u70b9\u51fb Button2 \u540e\u624d\u4f1a\u66f4\u65b0 handleClickButton2\uff0c\u6240\u4ee5\u5c31\u5bfc\u81f4\u4e86\u6211\u4eec\u70b9\u51fb Button1 \u4e0d\u91cd\u65b0\u6e32\u67d3 Button2 \u7684\u5185\u5bb9\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/interesting-jackson-knjbro"},"\u9884\u89c8\u5730\u5740")),(0,a.kt)("p",null,"\u7236\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},'import { useCallback, useState } from "react";\nimport { Child } from "./child";\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n  const [name, setName] = useState("\u5c0f\u660e");\n  const increment = () => setCount(count + 1);\n\n  const onClick = useCallback((name) => {\n    setName(name);\n  }, []);\n\n  return (\n    <div>\n      <button onClick={increment}>\u70b9\u51fb\u6b21\u6570\uff1a{count}</button>\n      <Child name={name} onClick={onClick} />\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"\u5b50\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},'import React, { memo } from "react";\n\nexport const Child = memo((props) => {\n  const { name, onClick } = props;\n  console.log("\u6e32\u67d3\u4e86", name, onClick);\n  return (\n    <>\n      <div>\u5b50\u7ec4\u4ef6</div>\n      <button onClick={() => onClick("\u5c0f\u7ea2")}>\u6539\u53d8 name \u503c</button>\n    </>\n  );\n});\n')))}p.isMDXComponent=!0}}]);