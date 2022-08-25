"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[14323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,o(o({ref:t},i),{},{components:n})):r.createElement(f,o({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},o="83. \u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20",c={unversionedId:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20",id:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20",title:"83. \u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20",description:"\u7ed9\u5b9a\u4e00\u4e2a\u5df2\u6392\u5e8f\u7684\u94fe\u8868\u7684\u5934 head \uff0c \u5220\u9664\u6240\u6709\u91cd\u590d\u7684\u5143\u7d20\uff0c\u4f7f\u6bcf\u4e2a\u5143\u7d20\u53ea\u51fa\u73b0\u4e00\u6b21 \u3002\u8fd4\u56de \u5df2\u6392\u5e8f\u7684\u94fe\u8868 \u3002",source:"@site/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/4.\u94fe\u8868/\u5220\u9664\u8282\u70b9/83. \u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20.md",sourceDirName:"\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/4.\u94fe\u8868/\u5220\u9664\u8282\u70b9",slug:"/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/4.\u94fe\u8868/\u5220\u9664\u8282\u70b9/83. \u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20.md",tags:[],version:"current",sidebarPosition:83,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"82. \u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20 II",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u5220\u9664\u8282\u70b9/\u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20 II"},next:{title:"\u53cd\u8f6c\u94fe\u8868 II",permalink:"/docs/\u9762\u8bd5\u62bc\u9898/\u7b97\u6cd5\u62bc\u9898/LeetCode/\u94fe\u8868/\u53cd\u8f6c\u94fe\u8868/\u53cd\u8f6c\u94fe\u8868 II"}},u={},p=[{value:"\u7b54\u6848",id:"\u7b54\u6848",level:2}],i={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"83-\u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20"},"83. \u5220\u9664\u6392\u5e8f\u94fe\u8868\u4e2d\u7684\u91cd\u590d\u5143\u7d20"),(0,a.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u5df2\u6392\u5e8f\u7684\u94fe\u8868\u7684\u5934 head \uff0c \u5220\u9664\u6240\u6709\u91cd\u590d\u7684\u5143\u7d20\uff0c\u4f7f\u6bcf\u4e2a\u5143\u7d20\u53ea\u51fa\u73b0\u4e00\u6b21 \u3002\u8fd4\u56de \u5df2\u6392\u5e8f\u7684\u94fe\u8868 \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 1\uff1a"),"\n",(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/01/04/list1.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1ahead = [1,1,2]\n\u8f93\u51fa\uff1a[1,2]\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b 2\uff1a"),"\n",(0,a.kt)("img",{parentName:"p",src:"https://assets.leetcode.com/uploads/2021/01/04/list2.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"\u8f93\u5165\uff1ahead = [1,1,2,3,3]\n\u8f93\u51fa\uff1a[1,2,3]\n")),(0,a.kt)("h2",{id:"\u7b54\u6848"},"\u7b54\u6848"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"const head = {\n  'val':1,\n  'next':{\n    'val':2,\n    'next':{\n      'val':2,\n      'next':undefined\n    }\n  }\n}\n")),(0,a.kt)("p",null,"\u601d\u8def\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9632\u5fa1\u6027"),(0,a.kt)("li",{parentName:"ol"},"\u5f53\u524d\u8282\u70b9\u4e0e\u4e0b\u8282\u70b9\u7684 val \u5bf9\u6bd4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u76f8\u540c\uff1acur.next = cur.next.next"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u76f8\u540c\uff1acur = cur.next")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"var deleteDuplicates = function(head) {\n    if (!head) { return head }\n\n    let cur = head;\n    while (cur.next) {\n        if (cur.val === cur.next.val) {\n            cur.next = cur.next.next;\n        } else {\n            cur = cur.next;\n        }\n    }\n    return head;\n};\ndeleteDuplicates(head)\n\n")))}s.isMDXComponent=!0}}]);