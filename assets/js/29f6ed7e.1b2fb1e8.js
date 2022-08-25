"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[89351],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),m=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(n),s=a,k=d["".concat(i,".").concat(s)]||d[s]||u[s]||l;return n?r.createElement(k,p(p({ref:t},c),{},{components:n})):r.createElement(k,p({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={},p=void 0,o={unversionedId:"\u524d\u7aef\u57fa\u7840/Javascript/DOM/Element\u5143\u7d20/\u6539\u53d8\u5143\u7d20",id:"\u524d\u7aef\u57fa\u7840/Javascript/DOM/Element\u5143\u7d20/\u6539\u53d8\u5143\u7d20",title:"\u6539\u53d8\u5143\u7d20",description:"HTML DOM \u5141\u8bb8 JavaScript \u6539\u53d8 HTML \u5143\u7d20\u7684\u5185\u5bb9\u3002",source:"@site/docs/\u524d\u7aef\u57fa\u7840/Javascript/DOM/Element\u5143\u7d20/\u6539\u53d8\u5143\u7d20.md",sourceDirName:"\u524d\u7aef\u57fa\u7840/Javascript/DOM/Element\u5143\u7d20",slug:"/\u524d\u7aef\u57fa\u7840/Javascript/DOM/Element\u5143\u7d20/\u6539\u53d8\u5143\u7d20",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/DOM/Element\u5143\u7d20/\u6539\u53d8\u5143\u7d20",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef\u57fa\u7840/Javascript/DOM/Element\u5143\u7d20/\u6539\u53d8\u5143\u7d20.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6539\u53d8CSS",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/DOM/Element\u5143\u7d20/\u6539\u53d8CSS"},next:{title:"\u67e5\u627e\u5143\u7d20",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/DOM/Element\u5143\u7d20/\u67e5\u627e\u5143\u7d20"}},i={},m=[{value:"\u6539\u53d8 HTML \u8f93\u51fa\u6d41",id:"\u6539\u53d8-html-\u8f93\u51fa\u6d41",level:3},{value:"\u6539\u53d8 HTML \u5185\u5bb9",id:"\u6539\u53d8-html-\u5185\u5bb9",level:3},{value:"\u6539\u53d8 HTML \u5c5e\u6027",id:"\u6539\u53d8-html-\u5c5e\u6027",level:3}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"HTML DOM \u5141\u8bb8 JavaScript \u6539\u53d8 HTML \u5143\u7d20\u7684\u5185\u5bb9\u3002"),(0,a.kt)("h3",{id:"\u6539\u53d8-html-\u8f93\u51fa\u6d41"},"\u6539\u53d8 HTML \u8f93\u51fa\u6d41"),(0,a.kt)("p",null,"JavaScript \u80fd\u591f\u521b\u5efa\u52a8\u6001\u7684 HTML \u5185\u5bb9\uff1a\uff08\u6539\u53d8\u65f6\u95f4\uff09"),(0,a.kt)("p",null,"\u5728 JavaScript \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"document.write() "),"\u53ef\u7528\u4e8e\u76f4\u63a5\u5411 HTML \u8f93\u51fa\u6d41\u5199\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<!DOCTYPE html>\n<html>\n<body>\n\n<script>\ndocument.write(Date());\n<\/script>\n\n</body>\n</html>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.runoob.com/try/try.php?filename=trydhtml_date"},"https://www.runoob.com/try/try.php?filename=trydhtml_date"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7edd\u5bf9\u4e0d\u8981\u5728\u6587\u6863(DOM)\u52a0\u8f7d\u5b8c\u6210\u4e4b\u540e\u4f7f\u7528 document.write()\u3002\u8fd9\u4f1a\u8986\u76d6\u8be5\u6587\u6863\u3002")),(0,a.kt)("h3",{id:"\u6539\u53d8-html-\u5185\u5bb9"},"\u6539\u53d8 HTML \u5185\u5bb9"),(0,a.kt)("p",null,"\u4fee\u6539 HTML \u5185\u5bb9\u7684\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 innerHTML \u5c5e\u6027\u3002\n\u5982\u9700\u6539\u53d8 HTML \u5143\u7d20\u7684\u5185\u5bb9\uff0c\u8bf7\u4f7f\u7528\u8fd9\u4e2a\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"document.getElementById(id).innerHTML=\u65b0\u7684 HTML\n")),(0,a.kt)("p",null,"\u672c\u4f8b\u6539\u53d8\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"<p>"),"\u5143\u7d20\u7684\u5185\u5bb9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<html>\n<body>\n\n<p id="p1">Hello World!</p>\n\n<script>\ndocument.getElementById("p1").innerHTML="\u65b0\u6587\u672c!";\n<\/script>\n\n</body>\n</html>\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.runoob.com/try/try.php?filename=tryjs_change_innerhtml"},"https://www.runoob.com/try/try.php?filename=tryjs_change_innerhtml"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id="header">Old Header</h1>\n\n<script>\nvar element=document.getElementById("header");\nelement.innerHTML="\u65b0\u6807\u9898";\n<\/script>\n\n</body>\n</html>\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u4f8b\u6539\u53d8\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"<h1> "),"\u5143\u7d20\u7684\u5185\u5bb9\n",(0,a.kt)("a",{parentName:"p",href:"https://www.runoob.com/try/try.php?filename=trydhtml_dom_innertext"},"https://www.runoob.com/try/try.php?filename=trydhtml_dom_innertext"))),(0,a.kt)("p",null,"\u5b9e\u4f8b\u8bb2\u89e3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'\u4e0a\u9762\u7684 HTML \u6587\u6863\u542b\u6709 id="header" \u7684 ',(0,a.kt)("inlineCode",{parentName:"li"},"<h1>")," \u5143\u7d20"),(0,a.kt)("li",{parentName:"ul"},'\u6211\u4eec\u4f7f\u7528 HTML DOM \u6765\u83b7\u5f97 id="header" \u7684\u5143\u7d20'),(0,a.kt)("li",{parentName:"ul"},"JavaScript \u66f4\u6539\u6b64\u5143\u7d20\u7684\u5185\u5bb9 (innerHTML)")),(0,a.kt)("h3",{id:"\u6539\u53d8-html-\u5c5e\u6027"},"\u6539\u53d8 HTML \u5c5e\u6027"),(0,a.kt)("p",null,"\u5982\u9700\u6539\u53d8 HTML \u5143\u7d20\u7684\u5c5e\u6027\uff0c\u8bf7\u4f7f\u7528\u8fd9\u4e2a\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"document.getElementById(id).attribute=\u65b0\u5c5e\u6027\u503c\n")),(0,a.kt)("p",null,"\u672c\u4f8b\u6539\u53d8\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"<img> "),"\u5143\u7d20\u7684 src \u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n<body>\n\n<img id="image" src="smiley.gif">\n\n<script>\ndocument.getElementById("image").src="landscape.jpg";\n<\/script>\n\n</body>\n</html>\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.runoob.com/try/try.php?filename=trydhtml_dom_image"},"https://www.runoob.com/try/try.php?filename=trydhtml_dom_image"))),(0,a.kt)("p",null,"\u5b9e\u4f8b\u8bb2\u89e3\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'\u4e0a\u9762\u7684 HTML \u6587\u6863\u542b\u6709 id="image" \u7684',(0,a.kt)("inlineCode",{parentName:"li"},"<img>"),"\u5143\u7d20"),(0,a.kt)("li",{parentName:"ul"},'\u6211\u4eec\u4f7f\u7528 HTML DOM \u6765\u83b7\u5f97 id="image" \u7684\u5143\u7d20'),(0,a.kt)("li",{parentName:"ul"},'JavaScript \u66f4\u6539\u6b64\u5143\u7d20\u7684\u5c5e\u6027\uff08\u628a "smiley.gif" \u6539\u4e3a "landscape.jpg"\uff09')))}u.isMDXComponent=!0}}]);