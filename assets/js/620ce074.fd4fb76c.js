"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5feb\u6162\u6307\u9488/\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c k \u4e2a\u7ed3\u70b9",id:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5feb\u6162\u6307\u9488/\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c k \u4e2a\u7ed3\u70b9",title:"\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c k \u4e2a\u7ed3\u70b9",description:"021. \u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c k \u4e2a\u7ed3\u70b9",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/4.\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5feb\u6162\u6307\u9488/021. \u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c k \u4e2a\u7ed3\u70b9.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/4.\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5feb\u6162\u6307\u9488",slug:"/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5feb\u6162\u6307\u9488/\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c k \u4e2a\u7ed3\u70b9",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5feb\u6162\u6307\u9488/\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c k \u4e2a\u7ed3\u70b9",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/4.\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5feb\u6162\u6307\u9488/021. \u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c k \u4e2a\u7ed3\u70b9.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5220\u9664\u94fe\u8868\u7684\u8282\u70b9",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5feb\u6162\u6307\u9488/\u5220\u9664\u94fe\u8868\u7684\u8282\u70b9"},next:{title:"2095. \u5220\u9664\u94fe\u8868\u7684\u4e2d\u95f4\u8282\u70b9",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5feb\u6162\u6307\u9488/\u5220\u9664\u94fe\u8868\u7684\u4e2d\u95f4\u8282\u70b9"}},p={},s=[{value:"021. \u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c k \u4e2a\u7ed3\u70b9",id:"021-\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c-k-\u4e2a\u7ed3\u70b9",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"021-\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c-k-\u4e2a\u7ed3\u70b9"},"021. \u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c k \u4e2a\u7ed3\u70b9"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u94fe\u8868\uff0c\u5220\u9664\u94fe\u8868\u7684\u5012\u6570\u7b2c k \u4e2a\u7ed3\u70b9\uff0c\u5e76\u4e14\u8fd4\u56de\u94fe\u8868\u7684\u5934\u7ed3\u70b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1ahead = [1,2,3,4,5], k = 2\n\u8f93\u51fa\uff1a[1,2,3,5]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1ahead = [1], k = 1\n\u8f93\u51fa\uff1a[]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 3:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1ahead = [1,2], k = 1\n\u8f93\u51fa\uff1a[1]\n")),(0,a.kt)("h2",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("p",null,"\u601d\u8def\uff1a\u5feb\u6162\u6307\u9488"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u865a\u62df\u5934\u8282\u70b9 dummyNode"),(0,a.kt)("li",{parentName:"ol"},"\u58f0\u660e\u5feb\u6162\u6307\u9488",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"slow"),(0,a.kt)("li",{parentName:"ul"},"fast"))),(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e k \u9012\u51cf \u901a\u8fc7\u5feb\u6307\u9488\u622a\u53d6 \u94fe\u8868\u540e\u90e8\u5206",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"while \u904d\u5386",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ec8\u6b62\u6761\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"while(k-- <0)")))))),(0,a.kt)("li",{parentName:"ol"},"\u540c\u65f6\u904d\u5386\u5feb\u6162\u6307\u9488\uff0c\u5f53\u5feb\u6307\u9488\u7ed3\u675f\uff0c\u5219\u6162\u6307\u9488\u4e3a\u6700\u7ec8\u5012\u6570\u4f4d\u7f6e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"while \u5faa\u73af\u539f\u94fe\u8868",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ec8\u6b62\u6761\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"li"},"while(fast && fast.next)")),(0,a.kt)("li",{parentName:"ul"},"slow \u4e3a\u539f\u94fe\u8868\u5bf9\u5e94\u7684\u8282\u70b9 \u4e0a\u8282\u70b9",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"while (fast && fast.next) {\n  fast = fast.next\n  slow = slow.next\n}\n"))))))),(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u8282\u70b9\uff1a\u8ba9\u4e0a\u8282\u70b9\u7684\u7b49\u4e8e\u4e0b\u4e0b\u8282\u70b9"),(0,a.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u5220\u9664\u540e\u7684\u94fe\u8868\u7684\u5934\u8282\u70b9")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"const head = {\n  val: 1,\n  next: {\n    val: 2,\n    next: {\n      val: 3,\n      next: {\n        val: 4,\n        next: {\n          val: 5,\n          next: undefined\n        }\n      }\n    }\n  }\n}\n\nconst k = 2\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"class ListNode{\n  constructor(val,next){\n    this.val = val;\n    this.next = next;\n  }\n}\n\nvar removeNthFromEnd = function(head, k) {\n  let dummyNode = new ListNode(-1,head);\n\n  // \u58f0\u660e\u5feb\u6162\u6307\u9488\n  let fast = dummyNode\n  let slow = dummyNode\n\n  // \u83b7\u53d6\u6b63\u5e8f\u7684\u76ee\u6807\n  while (k-- > 0) {\n    fast = fast.next\n  }\n\n  // \u6839\u636e\u6b63\u5e8f\u83b7\u53d6\u53cd\u5e8f\u7684\u76ee\u6807\n  while(fast && fast.next){\n    fast = fast.next\n    slow = slow.next\n  }\n\n  // \u66ff\u6362\u8282\u70b9\n  slow.next = slow.next.next\n\n  return dummyNode.next\n};\n\nconsole.log(removeNthFromEnd(head, k))\n")))}c.isMDXComponent=!0}}]);