"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[94331],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,u=function(e,n){if(null==e)return{};var t,r,u={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var c=r.createContext({}),o=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=o(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,u=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=o(t),f=u,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function f(e,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:u,i[1]=l;for(var o=2;o<a;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=t(87462),u=(t(67294),t(3905));const a={},i="622. \u8bbe\u8ba1\u5faa\u73af\u961f\u5217",l={unversionedId:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u961f\u5217/\u8bbe\u8ba1\u5faa\u73af\u961f\u5217",id:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u961f\u5217/\u8bbe\u8ba1\u5faa\u73af\u961f\u5217",title:"622. \u8bbe\u8ba1\u5faa\u73af\u961f\u5217",description:"\u8bbe\u8ba1\u4f60\u7684\u5faa\u73af\u961f\u5217\u5b9e\u73b0\u3002 \u5faa\u73af\u961f\u5217\u662f\u4e00\u79cd\u7ebf\u6027\u6570\u636e\u7ed3\u6784\uff0c\u5176\u64cd\u4f5c\u8868\u73b0\u57fa\u4e8e FIFO\uff08\u5148\u8fdb\u5148\u51fa\uff09\u539f\u5219\u5e76\u4e14\u961f\u5c3e\u88ab\u8fde\u63a5\u5728\u961f\u9996\u4e4b\u540e\u4ee5\u5f62\u6210\u4e00\u4e2a\u5faa\u73af\u3002\u5b83\u4e5f\u88ab\u79f0\u4e3a\u201c\u73af\u5f62\u7f13\u51b2\u5668\u201d\u3002",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/2.\u961f\u5217/622. \u8bbe\u8ba1\u5faa\u73af\u961f\u5217.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/2.\u961f\u5217",slug:"/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u961f\u5217/\u8bbe\u8ba1\u5faa\u73af\u961f\u5217",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u961f\u5217/\u8bbe\u8ba1\u5faa\u73af\u961f\u5217",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/2.\u961f\u5217/622. \u8bbe\u8ba1\u5faa\u73af\u961f\u5217.md",tags:[],version:"current",sidebarPosition:622,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"225. \u7528\u961f\u5217\u5b9e\u73b0\u6808",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u961f\u5217/\u7528\u961f\u5217\u5b9e\u73b0\u6808"},next:{title:"1670. \u8bbe\u8ba1\u524d\u4e2d\u540e\u961f\u5217",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u961f\u5217/\u8bbe\u8ba1\u524d\u4e2d\u540e\u961f\u5217"}},c={},o=[{value:"\u5faa\u73af\u94fe\u8868\u5b9e\u73b0\u5faa\u73af\u961f\u5217",id:"\u5faa\u73af\u94fe\u8868\u5b9e\u73b0\u5faa\u73af\u961f\u5217",level:2}],s={toc:o};function p(e){let{components:n,...t}=e;return(0,u.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"622-\u8bbe\u8ba1\u5faa\u73af\u961f\u5217"},"622. \u8bbe\u8ba1\u5faa\u73af\u961f\u5217"),(0,u.kt)("p",null,"\u8bbe\u8ba1\u4f60\u7684\u5faa\u73af\u961f\u5217\u5b9e\u73b0\u3002 \u5faa\u73af\u961f\u5217\u662f\u4e00\u79cd\u7ebf\u6027\u6570\u636e\u7ed3\u6784\uff0c\u5176\u64cd\u4f5c\u8868\u73b0\u57fa\u4e8e FIFO\uff08\u5148\u8fdb\u5148\u51fa\uff09\u539f\u5219\u5e76\u4e14\u961f\u5c3e\u88ab\u8fde\u63a5\u5728\u961f\u9996\u4e4b\u540e\u4ee5\u5f62\u6210\u4e00\u4e2a\u5faa\u73af\u3002\u5b83\u4e5f\u88ab\u79f0\u4e3a\u201c\u73af\u5f62\u7f13\u51b2\u5668\u201d\u3002"),(0,u.kt)("p",null,"\u5faa\u73af\u961f\u5217\u7684\u4e00\u4e2a\u597d\u5904\u662f\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u961f\u5217\u4e4b\u524d\u7528\u8fc7\u7684\u7a7a\u95f4\u3002\u5728\u4e00\u4e2a\u666e\u901a\u961f\u5217\u91cc\uff0c\u4e00\u65e6\u4e00\u4e2a\u961f\u5217\u6ee1\u4e86\uff0c\u6211\u4eec\u5c31\u4e0d\u80fd\u63d2\u5165\u4e0b\u4e00\u4e2a\u5143\u7d20\uff0c\u5373\u4f7f\u5728\u961f\u5217\u524d\u9762\u4ecd\u6709\u7a7a\u95f4\u3002\u4f46\u662f\u4f7f\u7528\u5faa\u73af\u961f\u5217\uff0c\u6211\u4eec\u80fd\u4f7f\u7528\u8fd9\u4e9b\u7a7a\u95f4\u53bb\u5b58\u50a8\u65b0\u7684\u503c\u3002"),(0,u.kt)("p",null,"\u4f60\u7684\u5b9e\u73b0\u5e94\u8be5\u652f\u6301\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"MyCircularQueue(k): \u6784\u9020\u5668\uff0c\u8bbe\u7f6e\u961f\u5217\u957f\u5ea6\u4e3a k \u3002"),(0,u.kt)("li",{parentName:"ul"},"Front: \u4ece\u961f\u9996\u83b7\u53d6\u5143\u7d20\u3002\u5982\u679c\u961f\u5217\u4e3a\u7a7a\uff0c\u8fd4\u56de -1 \u3002"),(0,u.kt)("li",{parentName:"ul"},"Rear: \u83b7\u53d6\u961f\u5c3e\u5143\u7d20\u3002\u5982\u679c\u961f\u5217\u4e3a\u7a7a\uff0c\u8fd4\u56de -1 \u3002"),(0,u.kt)("li",{parentName:"ul"},"enQueue(value): \u5411\u5faa\u73af\u961f\u5217\u63d2\u5165\u4e00\u4e2a\u5143\u7d20\u3002\u5982\u679c\u6210\u529f\u63d2\u5165\u5219\u8fd4\u56de\u771f\u3002"),(0,u.kt)("li",{parentName:"ul"},"deQueue(): \u4ece\u5faa\u73af\u961f\u5217\u4e2d\u5220\u9664\u4e00\u4e2a\u5143\u7d20\u3002\u5982\u679c\u6210\u529f\u5220\u9664\u5219\u8fd4\u56de\u771f\u3002"),(0,u.kt)("li",{parentName:"ul"},"isEmpty(): \u68c0\u67e5\u5faa\u73af\u961f\u5217\u662f\u5426\u4e3a\u7a7a\u3002"),(0,u.kt)("li",{parentName:"ul"},"isFull(): \u68c0\u67e5\u5faa\u73af\u961f\u5217\u662f\u5426\u5df2\u6ee1\u3002")),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"MyCircularQueue circularQueue = new MyCircularQueue(3); // \u8bbe\u7f6e\u957f\u5ea6\u4e3a 3\ncircularQueue.enQueue(1); \xa0// \u8fd4\u56de true\ncircularQueue.enQueue(2); \xa0// \u8fd4\u56de true\ncircularQueue.enQueue(3); \xa0// \u8fd4\u56de true\ncircularQueue.enQueue(4); \xa0// \u8fd4\u56de false\uff0c\u961f\u5217\u5df2\u6ee1\ncircularQueue.Rear(); \xa0// \u8fd4\u56de 3\ncircularQueue.isFull(); \xa0// \u8fd4\u56de true\ncircularQueue.deQueue(); \xa0// \u8fd4\u56de true\ncircularQueue.enQueue(4); \xa0// \u8fd4\u56de true\ncircularQueue.Rear(); \xa0// \u8fd4\u56de 4\n")),(0,u.kt)("h2",{id:"\u5faa\u73af\u94fe\u8868\u5b9e\u73b0\u5faa\u73af\u961f\u5217"},"\u5faa\u73af\u94fe\u8868\u5b9e\u73b0\u5faa\u73af\u961f\u5217"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-JS"},"class Node {\n  constructor(value, next) {\n    this.value = value;\n    this.next = next ?? null;\n  }\n}\n\n// \u521d\u59cb\u5316\n// k\u6700\u5927\u961f\u5217\u957f\u5ea6\nvar MyCircularQueue = function(k) {\n  this.capacity = k;\n  this.size = 0\n  this.head = null\n  this.tail = null\n};\n\n// \u5165\u961f\uff1a\u5c3e\u8282\u70b9\nMyCircularQueue.prototype.enQueue = function(value) {\n  if(this.size >= this.capacity)return false\n\n  if(!this.head){\n    const node = new Node(value)\n    this.head = node\n    this.tail = this.head\n  }else{\n    const node = new Node(value)\n    this.tail.next = node\n    this.tail = this.tail.next\n  }\n\n  this.size ++\n  return true\n};\n\n// \u51fa\u961f\uff1a\u9996\u8282\u70b9\nMyCircularQueue.prototype.deQueue = function() {\n  if(this.size ===0) return false\n\n  if(this.size === 1){\n    this.head = this.tail = null\n    this.size = 0\n    return true\n  }\n  // \u5f39\u51fa\u9996\u8282\u70b9\n  this.head = this.head.next\n  this.size --\n  return true\n};\n\n// \u9996\u8282\u70b9\u503c\nMyCircularQueue.prototype.Front = function() {\n  return this.head?.value ?? -1\n};\n\n// \u5c3e\u8282\u70b9\u503c\nMyCircularQueue.prototype.Rear = function() {\n  return this.tail?.value ?? -1\n};\n\n// \u662f\u5426\u4e3a\u7a7a\nMyCircularQueue.prototype.isEmpty = function() {\n  return this.head === null\n};\n\n// \u662f\u5426\u586b\u6ee1\nMyCircularQueue.prototype.isFull = function() {\n  return this.size === this.capacity\n};\n")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-JS"},"const circularQueue = new MyCircularQueue(3); // \u8bbe\u7f6e\u957f\u5ea6\u4e3a 3\ncircularQueue.enQueue(1); \xa0// \u8fd4\u56de true\ncircularQueue.enQueue(2); \xa0// \u8fd4\u56de true\ncircularQueue.enQueue(3); \xa0// \u8fd4\u56de true\n// circularQueue.enQueue(4); \xa0// \u8fd4\u56de false\uff0c\u961f\u5217\u5df2\u6ee1\n// circularQueue.Rear(); \xa0// \u8fd4\u56de 3\n// console.log(circularQueue.Front())\n// circularQueue.isFull(); \xa0// \u8fd4\u56de true\n// circularQueue.deQueue(); \xa0// \u8fd4\u56de true\n// circularQueue.enQueue(4); \xa0// \u8fd4\u56de true\n// circularQueue.Rear(); \xa0// \u8fd4\u56de 4\n\nconsole.log(circularQueue)\n")))}p.isMDXComponent=!0}}]);