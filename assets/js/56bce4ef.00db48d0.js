"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[87985],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=l,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(87462),l=(t(67294),t(3905));const a={},o=void 0,c={unversionedId:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u67e5\u627e\u94fe\u8868/\u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9",id:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u67e5\u627e\u94fe\u8868/\u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9",title:"\u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9",description:"52. \u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9\uff08160. \u76f8\u4ea4\u94fe\u8868\uff09",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/4.\u94fe\u8868/\u67e5\u627e\u94fe\u8868/52. \u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/4.\u94fe\u8868/\u67e5\u627e\u94fe\u8868",slug:"/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u67e5\u627e\u94fe\u8868/\u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u67e5\u627e\u94fe\u8868/\u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/4.\u94fe\u8868/\u67e5\u627e\u94fe\u8868/52. \u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ece\u5c3e\u5230\u5934\u6253\u5370\u94fe\u8868",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u67e5\u627e\u94fe\u8868/\u4ece\u5c3e\u5230\u5934\u6253\u5370\u94fe\u8868"},next:{title:"876. \u94fe\u8868\u7684\u4e2d\u95f4\u8282\u70b9",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u67e5\u627e\u94fe\u8868/\u94fe\u8868\u7684\u4e2d\u95f4\u8282\u70b9"}},i={},u=[{value:"52. \u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9\uff08160. \u76f8\u4ea4\u94fe\u8868\uff09",id:"52-\u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9160-\u76f8\u4ea4\u94fe\u8868",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"52-\u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9160-\u76f8\u4ea4\u94fe\u8868"},"52. \u4e24\u4e2a\u94fe\u8868\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9\uff08160. \u76f8\u4ea4\u94fe\u8868\uff09"),(0,l.kt)("p",null,"\u8f93\u5165\u4e24\u4e2a\u94fe\u8868\uff0c\u627e\u51fa\u5b83\u4eec\u7684\u7b2c\u4e00\u4e2a\u516c\u5171\u8282\u70b9\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_statement.png",alt:null}),"\n\u5728\u8282\u70b9 c1 \u5f00\u59cb\u76f8\u4ea4\u3002"),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/14/160_example_1.png",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1aintersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3\n\u8f93\u51fa\uff1aReference of the node with value = 8\n\u8f93\u5165\u89e3\u91ca\uff1a\u76f8\u4ea4\u8282\u70b9\u7684\u503c\u4e3a 8 \uff08\u6ce8\u610f\uff0c\u5982\u679c\u4e24\u4e2a\u5217\u8868\u76f8\u4ea4\u5219\u4e0d\u80fd\u4e3a 0\uff09\u3002\u4ece\u5404\u81ea\u7684\u8868\u5934\u5f00\u59cb\u7b97\u8d77\uff0c\u94fe\u8868 A \u4e3a [4,1,8,4,5]\uff0c\u94fe\u8868 B \u4e3a [5,0,1,8,4,5]\u3002\u5728 A \u4e2d\uff0c\u76f8\u4ea4\u8282\u70b9\u524d\u6709 2 \u4e2a\u8282\u70b9\uff1b\u5728 B \u4e2d\uff0c\u76f8\u4ea4\u8282\u70b9\u524d\u6709 3 \u4e2a\u8282\u70b9\u3002\n")),(0,l.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"const list1 = {\n  'val':4,\n  'next':{\n    'val':1,\n    'next':{\n      'val':8,\n      'next':{\n        'val':4,\n        'next':{\n          'val':5,\n          'next':undefined\n        }\n      }\n    }\n  }\n}\n\nconst list2 = {\n  'val':5,\n  'next':{\n    'val':0,\n    'next':{\n      'val':8,\n      'next':{\n        'val':9,\n        'next':{\n          'val':5,\n          'next':undefined\n        }\n      }\n    }\n  }\n}\n")),(0,l.kt)("p",null,"\u601d\u8def\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u58f0\u660e\u6570\u7ec4\u5b58\u653e\u94fe\u8868 1 \u8282\u70b9"),(0,l.kt)("li",{parentName:"ol"},"\u58f0\u660e\u8ba1\u6570\u5668"),(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u8ba1\u6570\u5668\u67e5\u770b\u94fe\u8868 2 \u4e2d\u7684\u503c\u5b58\u5728\u94fe\u8868 1 \u7684\u503c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-JS"},"var getIntersectionNode = function(list1, list2) {\n\n  const arr = []\n\n  // \u6570\u7ec4\u50a8\u5b58\u94fe\u88681\n  let current = list1;\n\n  while (current) {\n    arr.push(current)\n    current = current.next;\n  }\n  arr.push(current)\n\n  let count = 0\n  current = list2;\n\n  // \u904d\u5386\u94fe\u88682\u662f\u5426\u5b58\u5728\n  while (current) {\n    if (arr[count].val === current.val) {\n      return current;\n    }\n    count++\n    current = current.next;\n  }\n\n  // \u4e0d\u5b58\u5728\u8fd4\u56de null\n  return null;\n};\n\nconsole.log(getIntersectionNode(list1,list2))\n")))}p.isMDXComponent=!0}}]);