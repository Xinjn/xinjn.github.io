"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[91317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},l="128. \u6700\u957f\u8fde\u7eed\u5e8f\u5217",u={unversionedId:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u67e5\u627e/\u6700\u957f\u8fde\u7eed\u5e8f\u5217",id:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u67e5\u627e/\u6700\u957f\u8fde\u7eed\u5e8f\u5217",title:"128. \u6700\u957f\u8fde\u7eed\u5e8f\u5217",description:"\u7ed9\u5b9a\u4e00\u4e2a\u672a\u6392\u5e8f\u7684\u6574\u6570\u6570\u7ec4 nums \uff0c\u627e\u51fa\u6570\u5b57\u8fde\u7eed\u7684\u6700\u957f\u5e8f\u5217\uff08\u4e0d\u8981\u6c42\u5e8f\u5217\u5143\u7d20\u5728\u539f\u6570\u7ec4\u4e2d\u8fde\u7eed\uff09\u7684\u957f\u5ea6\u3002",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/0.\u6570\u7ec4/\u67e5\u627e/128. \u6700\u957f\u8fde\u7eed\u5e8f\u5217.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/0.\u6570\u7ec4/\u67e5\u627e",slug:"/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u67e5\u627e/\u6700\u957f\u8fde\u7eed\u5e8f\u5217",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u67e5\u627e/\u6700\u957f\u8fde\u7eed\u5e8f\u5217",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/0.\u6570\u7ec4/\u67e5\u627e/128. \u6700\u957f\u8fde\u7eed\u5e8f\u5217.md",tags:[],version:"current",sidebarPosition:128,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"076. \u6570\u7ec4\u4e2d\u7684\u7b2c k \u5927\u7684\u6570\u5b57",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u67e5\u627e/\u6570\u7ec4\u4e2d\u7684\u7b2c k \u5927\u7684\u6570\u5b57"},next:{title:"56. \u5408\u5e76\u533a\u95f4",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u6dfb\u52a0/\u5408\u5e76\u533a\u95f4"}},i={},c=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:2},{value:"\u7b54\u6848",id:"\u7b54\u6848",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"128-\u6700\u957f\u8fde\u7eed\u5e8f\u5217"},"128. \u6700\u957f\u8fde\u7eed\u5e8f\u5217"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u672a\u6392\u5e8f\u7684\u6574\u6570\u6570\u7ec4 nums \uff0c\u627e\u51fa\u6570\u5b57\u8fde\u7eed\u7684\u6700\u957f\u5e8f\u5217\uff08\u4e0d\u8981\u6c42\u5e8f\u5217\u5143\u7d20\u5728\u539f\u6570\u7ec4\u4e2d\u8fde\u7eed\uff09\u7684\u957f\u5ea6\u3002"),(0,a.kt)("p",null,"\u8bf7\u4f60\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a \xa0O(n) \u7684\u7b97\u6cd5\u89e3\u51b3\u6b64\u95ee\u9898\u3002"),(0,a.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1anums = [100,4,200,1,3,2]\n\u8f93\u51fa\uff1a4\n\u89e3\u91ca\uff1a\u6700\u957f\u6570\u5b57\u8fde\u7eed\u5e8f\u5217\u662f [1, 2, 3, 4]\u3002\u5b83\u7684\u957f\u5ea6\u4e3a 4\u3002\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1anums = [0,3,7,2,5,8,4,6,0,1]\n\u8f93\u51fa\uff1a9\n")),(0,a.kt)("h2",{id:"\u7b54\u6848"},"\u7b54\u6848"),(0,a.kt)("p",null,"\u601d\u8def\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9632\u5fa1\u6027\uff1a\u5c0f\u4e8e\u7b49\u4e8e 0 \u8fd4\u56de 0"),(0,a.kt)("li",{parentName:"ol"},"\u5148\u6392\u5e8f"),(0,a.kt)("li",{parentName:"ol"},"\u58f0\u660e\u6700\u5927\u503c max \u548c count=1 \u8ba1\u6570\u5668"),(0,a.kt)("li",{parentName:"ol"},"for \u4ece 1 \u5411\u524d\u6bd4\u8f83",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5224\u65ad\u662f\u5426\u4e3a\u8fde\u7eed\u9879",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7b26\u5408 count++"),(0,a.kt)("li",{parentName:"ul"},"\u76f8\u7b49\u8df3\u51fa\u5faa\u73af continue"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u7b26\u5408 \u6bd4\u8f83\u5f53\u524d\u6700\u5927\u503c\uff0ccount \u91cd\u7f6e\u4e3a 1"))))),(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u6700\u5927\u503c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"/**\n * @param {number[]} nums\n * @return {number}\n */\nvar longestConsecutive = function(nums) {\n  if(nums.length <= 0) return 0\n\n  // \u6392\u5e8f\n  const numSort = nums.sort((a,b)=>a-b)\n  let max = 0 // \u8bb0\u5f55\u6700\u5927\u503c\uff08\u6700\u957f\u8fde\u7eed\u9879\uff09\n  let count = 1\n\n  for (let i = 1; i < nums.length; i++) {\n    if(nums[i] === nums[i-1]+1){ // \u4e0b\u4e00\u9879\u4e3a\u8fde\u7eed\u9879\uff1anums[i]\u5f53\u524d \u3001nums[i-1]+1\u4e0a\u4e00\u9879\u8fde\u7eed\u9879\n      count++\n    }else if(nums[i] === nums[i-1]){ // \u4e0b\u4e00\u9879\u7b49\u4e8e\u5f53\u524d\u9879\uff1a\u8df3\u51fa\u5faa\u73af\n      continue\n    }else{ // \u4e0b\u4e00\u9879\u4e0d\u662f\u8fde\u7eed\u9879\n      // \u8bb0\u5f55\u6700\u5927\u503c\uff08\u6700\u957f\u8fde\u7eed\u9879\uff09\uff0c\u6ce8\u610f\u8981\u4e0e\u4e4b\u524d\u7684\u5bf9\u6bd4\n        max = Math.max(max,count)\n        count = 1\n    }\n  }\n  // \u8bb0\u5f55\u6700\u5927\u503c\uff08\u6700\u957f\u8fde\u7eed\u9879\uff09\uff0c\u6ce8\u610f\u8981\u4e0e\u4e4b\u524d\u7684\u5bf9\u6bd4\n  return Math.max(max,count)\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"var nums = [100,4,200,1,3,2]\n\nlongestConsecutive(nums)\n")))}s.isMDXComponent=!0}}]);