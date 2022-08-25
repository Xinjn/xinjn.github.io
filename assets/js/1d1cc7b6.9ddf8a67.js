"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[52096],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="56. \u6709\u91cd\u590d\u9879\u6570\u5b57\u7684\u5168\u6392\u5217",c={unversionedId:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u5b57\u7b26\u4e32/\u6709\u91cd\u590d\u9879\u6570\u5b57\u7684\u5168\u6392\u5217",id:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u5b57\u7b26\u4e32/\u6709\u91cd\u590d\u9879\u6570\u5b57\u7684\u5168\u6392\u5217",title:"56. \u6709\u91cd\u590d\u9879\u6570\u5b57\u7684\u5168\u6392\u5217",description:"\u7ed9\u51fa\u4e00\u7ec4\u53ef\u80fd\u5305\u542b\u91cd\u590d\u9879\u7684\u6570\u5b57\uff0c\u8fd4\u56de\u8be5\u7ec4\u6570\u5b57\u7684\u6240\u6709\u6392\u5217\u3002\u7ed3\u679c\u4ee5\u5b57\u5178\u5e8f\u5347\u5e8f\u6392\u5217\u3002",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/1.\u5b57\u7b26\u4e32/56. \u6709\u91cd\u590d\u9879\u6570\u5b57\u7684\u5168\u6392\u5217.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/1.\u5b57\u7b26\u4e32",slug:"/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u5b57\u7b26\u4e32/\u6709\u91cd\u590d\u9879\u6570\u5b57\u7684\u5168\u6392\u5217",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u5b57\u7b26\u4e32/\u6709\u91cd\u590d\u9879\u6570\u5b57\u7684\u5168\u6392\u5217",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/1.\u5b57\u7b26\u4e32/56. \u6709\u91cd\u590d\u9879\u6570\u5b57\u7684\u5168\u6392\u5217.md",tags:[],version:"current",sidebarPosition:56,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"55. \u6ca1\u6709\u91cd\u590d\u9879\u6570\u5b57\u7684\u5168\u6392\u5217(38. \u5b57\u7b26\u4e32\u7684\u6392\u5217)",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u5b57\u7b26\u4e32/\u6ca1\u6709\u91cd\u590d\u9879\u6570\u5b57\u7684\u5168\u6392\u5217"},next:{title:"58 - II. \u5de6\u65cb\u8f6c\u5b57\u7b26\u4e32",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u5b57\u7b26\u4e32/II. \u5de6\u65cb\u8f6c\u5b57\u7b26\u4e32"}},u={},l=[{value:"\u7b54\u6848",id:"\u7b54\u6848",level:2}],s={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"56-\u6709\u91cd\u590d\u9879\u6570\u5b57\u7684\u5168\u6392\u5217"},"56. \u6709\u91cd\u590d\u9879\u6570\u5b57\u7684\u5168\u6392\u5217"),(0,o.kt)("p",null,"\u7ed9\u51fa\u4e00\u7ec4\u53ef\u80fd\u5305\u542b\u91cd\u590d\u9879\u7684\u6570\u5b57\uff0c\u8fd4\u56de\u8be5\u7ec4\u6570\u5b57\u7684\u6240\u6709\u6392\u5217\u3002\u7ed3\u679c\u4ee5\u5b57\u5178\u5e8f\u5347\u5e8f\u6392\u5217\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1a\n[1,1,2]\n\u8fd4\u56de\u503c\uff1a\n[[1,1,2],[1,2,1],[2,1,1]]\n")),(0,o.kt)("h2",{id:"\u7b54\u6848"},"\u7b54\u6848"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JS"},"var permute = function(nums) {\n  let res = [];\n  let used = [] // \u6807\u8bb0\u4f7f\u2f64\uff1a\u786e\u5b9a\u552f\u4e00\u6027\n\n  function backTrace(path) { // path\u6392\u5217\u7684\u6570\u7ec4\n    if(path.length === nums.length) return res.push(path.slice()); // \u6570\u7ec4\n\n    // \u904d\u5386\u6240\u6709\u5143\u7d20\u9009\u53d6\u4e00\u4e2a\u52a0\u5165\n    for (let i = 0; i < nums.length; i++) {\n      //\u5f53\u524d\u7684\u5143\u7d20num[i]\u4e0e\u540c\u2f00\u5c42\u7684\u524d\u2f00\u4e2a\u5143\u7d20num[i-1]\u76f8\u540c\u4e14num[i-1]\u5df2\u7ecf\u2f64\u8fc7\u4e86\n      if( i >0 && nums[i] == nums[i-1] && !used[i-1] ){continue}\n      //\u5982\u679c\u8be5\u5143\u7d20\u672a\u88ab\u4f7f\u7528\n      if(!used[i]){\n        path.push(nums[i]);\n        used[i] = true // \u6807\u8bb0\u4e3a\u4f7f\u2f64\u8fc7\n        backTrace(path);\n        path.pop(); // \u56de\u6eaf\n        used[i] = false\n      }\n        console.log(used)\n    }\n  }\n\n  backTrace([]);\n\n  return res;\n};\n\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var str = [1, 1, 2]\nconsole.log(permute(str))\n")))}p.isMDXComponent=!0}}]);