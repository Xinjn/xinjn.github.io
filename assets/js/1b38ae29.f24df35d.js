"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[14532],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,d=c["".concat(u,".").concat(f)]||c[f]||p[f]||l;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},80465:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},i="16. \u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",o={unversionedId:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u5bf9\u649e\u6307\u9488/\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",id:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u5bf9\u649e\u6307\u9488/\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",title:"16. \u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",description:"\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a n \u7684\u6574\u6570\u6570\u7ec4 \xa0nums\xa0 \u548c \u4e00\u4e2a\u76ee\u6807\u503c \xa0target\u3002\u8bf7\u4f60\u4ece nums \u4e2d\u9009\u51fa\u4e09\u4e2a\u6574\u6570\uff0c\u4f7f\u5b83\u4eec\u7684\u548c\u4e0e \xa0target\xa0 \u6700\u63a5\u8fd1\u3002",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/0.\u6570\u7ec4/\u5bf9\u649e\u6307\u9488/16. \u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/0.\u6570\u7ec4/\u5bf9\u649e\u6307\u9488",slug:"/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u5bf9\u649e\u6307\u9488/\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u5bf9\u649e\u6307\u9488/\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/0.\u6570\u7ec4/\u5bf9\u649e\u6307\u9488/16. \u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"15. \u4e09\u6570\u4e4b\u548c",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u5bf9\u649e\u6307\u9488/\u4e09\u6570\u4e4b\u548c"},next:{title:"34. \u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u548c\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u6570\u7ec4/\u5bf9\u649e\u6307\u9488/\u5728\u6392\u5e8f\u6570\u7ec4\u4e2d\u67e5\u627e\u5143\u7d20\u7684\u7b2c\u4e00\u4e2a\u548c\u6700\u540e\u4e00\u4e2a\u4f4d\u7f6e"}},u={},s=[{value:"\u7b54\u6848",id:"\u7b54\u6848",level:2}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"16-\u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c"},"16. \u6700\u63a5\u8fd1\u7684\u4e09\u6570\u4e4b\u548c"),(0,a.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u957f\u5ea6\u4e3a n \u7684\u6574\u6570\u6570\u7ec4 \xa0nums\xa0 \u548c \u4e00\u4e2a\u76ee\u6807\u503c \xa0target\u3002\u8bf7\u4f60\u4ece nums \u4e2d\u9009\u51fa\u4e09\u4e2a\u6574\u6570\uff0c\u4f7f\u5b83\u4eec\u7684\u548c\u4e0e \xa0target\xa0 \u6700\u63a5\u8fd1\u3002"),(0,a.kt)("p",null,"\u8fd4\u56de\u8fd9\u4e09\u4e2a\u6570\u7684\u548c\u3002"),(0,a.kt)("p",null,"\u5047\u5b9a\u6bcf\u7ec4\u8f93\u5165\u53ea\u5b58\u5728\u6070\u597d\u4e00\u4e2a\u89e3\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1anums = [-1,2,1,-4], target = 1\n\u8f93\u51fa\uff1a2\n\u89e3\u91ca\uff1a\u4e0e target \u6700\u63a5\u8fd1\u7684\u548c\u662f 2 (-1 + 2 + 1 = 2) \u3002\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1anums = [0,0,0], target = 1\n\u8f93\u51fa\uff1a0\n")),(0,a.kt)("h2",{id:"\u7b54\u6848"},"\u7b54\u6848"),(0,a.kt)("p",null,"\u57fa\u4e8e\u4e09\u6570\u4e4b\u548c"),(0,a.kt)("p",null,"\u601d\u8def\uff1awhile \u914d\u5408 for \u6bd4\u8f83\u591a\u4e2a\u6570\u7684\u503c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9632\u5fa1\u6027\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"if(!nums || nums.length <3)return []")),(0,a.kt)("li",{parentName:"ol"},"\u6392\u5e8f"),(0,a.kt)("li",{parentName:"ol"},"\u58f0\u660e\u4e09\u6570\u4e4b\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"sum")," \u548c \u6700\u5c0f\u503c ",(0,a.kt)("inlineCode",{parentName:"li"},"let min = Infinity")),(0,a.kt)("li",{parentName:"ol"},"for \u4ece 0 \u5411\u540e\u904d\u5386",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53bb\u91cd\uff1a\u82e5\u5f53\u524d\u8fd9\u4e00\u9879\u548c\u4e0a\u4e00\u9879\u76f8\u7b49\u5219\u8df3\u8fc7"),(0,a.kt)("li",{parentName:"ul"},"\u58f0\u660e\u5bf9\u649e\u6307\u9488\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"left = i+1 / right")),(0,a.kt)("li",{parentName:"ul"},"while \u5faa\u73af\u6761\u4ef6\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"while(left < right)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8ba1\u7b97 ",(0,a.kt)("inlineCode",{parentName:"li"},"sum = nums[i] + nums[left] + nums[right]")),(0,a.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u6700\u5c0f\u503c\uff1a",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (Math.abs(sum - target) < Math.abs(min - target)) {\n  min = sum\n}\n"))),(0,a.kt)("li",{parentName:"ul"},"sum \u6bd4\u8f83 target",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c0f\u4e8e:left ++ / \u5927\u4e8e:right --"),(0,a.kt)("li",{parentName:"ul"},"\u76f8\u7b49: \u76f4\u63a5\u8fd4\u56de sum")))))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"const threeSumClosest = (nums, target) => {\n  if(!nums || nums.length <3)return []\n  // \u6392\u5e8f\n  nums = nums.sort((a,b)=>a-b)\n\n  // \u4e09\u6570\u4e4b\u548c\n  let sum = 0\n  // \u7ed3\u679c\u6570\u7ec4\n  //   let result = []\n  // \u521d\u59cb\u5316\u4e00\u4e2a\u6700\u5c0f\u503c\n  let min = Infinity;\n\n  // \u5bf9\u649e\u6307\u9488\n  for(let i=0;i<nums.length;i++){\n    // \u53bb\u91cd\uff1a\u82e5\u5f53\u524d\u8fd9\u4e00\u9879\u548c\u4e0a\u4e00\u9879\u76f8\u7b49\u5219\u8df3\u8fc7\n    if(nums[i] === nums[i-1])continue\n\n    let left = i+1\n    let right = nums.length-1\n\n    while(left < right){\n      sum = nums[i] + nums[left] + nums[right]\n\n      // \u5982\u679c\u5f53\u524d\u548c\u66f4\u63a5\u8fd1\uff0c\u66f4\u65b0\u6700\u5c0f\u503c\n      if (Math.abs(sum - target) < Math.abs(min - target)) {\n        min = sum;\n      }\n\n      if(sum > target){ // \u5927\u4e8e\n        right --\n      }else if(sum < target){ // \u5c0f\u4e8e\n        left ++\n      }else{ // \u76f8\u7b49\n        return sum\n      }\n    }\n  }\n  return min\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var nums = [-1, 2, 1, -4]\nvar target = 1\nconsole.log(threeSumClosest(nums, target))\n")))}p.isMDXComponent=!0}}]);