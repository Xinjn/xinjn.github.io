"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[71495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},l="167. \u4e24\u6570\u4e4b\u548c II - \u8f93\u5165\u6709\u5e8f\u6570\u7ec4",i={unversionedId:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u54c8\u5e0c/\u4e24\u6570\u4e4b\u548c II - \u8f93\u5165\u6709\u5e8f\u6570\u7ec4",id:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u54c8\u5e0c/\u4e24\u6570\u4e4b\u548c II - \u8f93\u5165\u6709\u5e8f\u6570\u7ec4",title:"167. \u4e24\u6570\u4e4b\u548c II - \u8f93\u5165\u6709\u5e8f\u6570\u7ec4",description:"\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 1 \u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4 \xa0numbers \uff0c\u8be5\u6570\u7ec4\u5df2\u6309 \u975e\u9012\u51cf\u987a\u5e8f\u6392\u5217 \xa0 \uff0c\u8bf7\u4f60\u4ece\u6570\u7ec4\u4e2d\u627e\u51fa\u6ee1\u8db3\u76f8\u52a0\u4e4b\u548c\u7b49\u4e8e\u76ee\u6807\u6570 \xa0target \u7684\u4e24\u4e2a\u6570\u3002\u5982\u679c\u8bbe\u8fd9\u4e24\u4e2a\u6570\u5206\u522b\u662f numbers[index1] \u548c numbers[index2] \uff0c\u5219 1 <= index1 < index2 <= numbers.length \u3002",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/0.\u6570\u7ec4/\u54c8\u5e0c/167. \u4e24\u6570\u4e4b\u548c II - \u8f93\u5165\u6709\u5e8f\u6570\u7ec4.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/0.\u6570\u7ec4/\u54c8\u5e0c",slug:"/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u54c8\u5e0c/\u4e24\u6570\u4e4b\u548c II - \u8f93\u5165\u6709\u5e8f\u6570\u7ec4",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u54c8\u5e0c/\u4e24\u6570\u4e4b\u548c II - \u8f93\u5165\u6709\u5e8f\u6570\u7ec4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/0.\u6570\u7ec4/\u54c8\u5e0c/167. \u4e24\u6570\u4e4b\u548c II - \u8f93\u5165\u6709\u5e8f\u6570\u7ec4.md",tags:[],version:"current",sidebarPosition:167,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"146. LRU \u7f13\u5b58",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u54c8\u5e0c/LRU \u7f13\u5b58"},next:{title:"349. \u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u54c8\u5e0c/\u4e24\u4e2a\u6570\u7ec4\u7684\u4ea4\u96c6"}},u={},p=[{value:"\u7b54\u6848",id:"\u7b54\u6848",level:2},{value:"\u54c8\u5e0c\u8868",id:"\u54c8\u5e0c\u8868",level:3},{value:"\u53cc\u6307\u9488",id:"\u53cc\u6307\u9488",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"167-\u4e24\u6570\u4e4b\u548c-ii---\u8f93\u5165\u6709\u5e8f\u6570\u7ec4"},"167. \u4e24\u6570\u4e4b\u548c II - \u8f93\u5165\u6709\u5e8f\u6570\u7ec4"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u4e0b\u6807\u4ece 1 \u5f00\u59cb\u7684\u6574\u6570\u6570\u7ec4 \xa0numbers \uff0c\u8be5\u6570\u7ec4\u5df2\u6309 \u975e\u9012\u51cf\u987a\u5e8f\u6392\u5217 \xa0 \uff0c\u8bf7\u4f60\u4ece\u6570\u7ec4\u4e2d\u627e\u51fa\u6ee1\u8db3\u76f8\u52a0\u4e4b\u548c\u7b49\u4e8e\u76ee\u6807\u6570 \xa0target \u7684\u4e24\u4e2a\u6570\u3002\u5982\u679c\u8bbe\u8fd9\u4e24\u4e2a\u6570\u5206\u522b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers[index1]")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"numbers[index2]")," \uff0c\u5219 1 <= index1 < index2 <= numbers.length \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1anumbers = [2,7,11,15], target = 9\n\u8f93\u51fa\uff1a[1,2]\n\u89e3\u91ca\uff1a2 \u4e0e 7 \u4e4b\u548c\u7b49\u4e8e\u76ee\u6807\u6570 9 \u3002\u56e0\u6b64 index1 = 1, index2 = 2 \u3002\u8fd4\u56de [1, 2] \u3002\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1anumbers = [2,3,4], target = 6\n\u8f93\u51fa\uff1a[1,3]\n\u89e3\u91ca\uff1a2 \u4e0e 4 \u4e4b\u548c\u7b49\u4e8e\u76ee\u6807\u6570 6 \u3002\u56e0\u6b64 index1 = 1, index2 = 3 \u3002\u8fd4\u56de [1, 3] \u3002\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1anumbers = [-1,0], target = -1\n\u8f93\u51fa\uff1a[1,2]\n\u89e3\u91ca\uff1a-1 \u4e0e 0 \u4e4b\u548c\u7b49\u4e8e\u76ee\u6807\u6570 -1 \u3002\u56e0\u6b64 index1 = 1, index2 = 2 \u3002\u8fd4\u56de [1, 2] \u3002\n")),(0,a.kt)("h2",{id:"\u7b54\u6848"},"\u7b54\u6848"),(0,a.kt)("p",null,"\u601d\u8def\uff1a\u901a\u8fc7 Map \u8fdb\u884c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9632\u5fa1\u6027"),(0,a.kt)("li",{parentName:"ol"},"\u58f0\u660e map \u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ol"},"\u904d\u5386\u6570\u7ec4\uff0c\u8ba1\u7b97\u5dee\u503c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u5b58\u5728\u5219\u5b58\u5165 map"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u5728\u5219",(0,a.kt)("inlineCode",{parentName:"li"},"[\u4e0b\u6807]"))))),(0,a.kt)("h3",{id:"\u54c8\u5e0c\u8868"},"\u54c8\u5e0c\u8868"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"const twoSum = function (nums, target) {\n  // \u6570\u7ec4\u548c\u6570\u5b57\u76f4\u63a5\u8fd4\u56de\n  if (Object.prototype.toString.call(nums) !== '[object Array]' || typeof target !== 'number') {\n    return;\n  }\n\n  const map = new Map()\n\n  for (let i = 0; i < nums.length; i++) {\n      const result = target - nums[i];\n      if (map.has(result)) {\n        return [map.get(result)+1, i+1]\n      }\n      map.set(nums[i], i)\n  }\n};\n")),(0,a.kt)("h3",{id:"\u53cc\u6307\u9488"},"\u53cc\u6307\u9488"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"const twoSum = function (nums, target) {\n  if (Object.prototype.toString.call(nums) !== '[object Array]' || typeof target !== 'number') return;\n\n  let low = 0;\n      high = nums.length - 1;\n  while (low < high) {\n    let sum = nums[low] + nums[high];\n    if (sum < target) {\n      low ++\n    } else if (sum > target) {\n      high --\n    } else {\n      return [low+1, high+1]\n    }\n  }\n};\n")))}c.isMDXComponent=!0}}]);