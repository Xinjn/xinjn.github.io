"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[27920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,s(s({ref:t},i),{},{components:n})):a.createElement(f,s({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},s=void 0,p={unversionedId:"\u524d\u7aef\u57fa\u7840/Javascript/\u8bf7\u6c42/Ajax \u6559\u7a0b/\u8bf7\u6c42\u6570\u636e/XHR",id:"\u524d\u7aef\u57fa\u7840/Javascript/\u8bf7\u6c42/Ajax \u6559\u7a0b/\u8bf7\u6c42\u6570\u636e/XHR",title:"XHR",description:"\u8bf7\u6c42",source:"@site/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u8bf7\u6c42/Ajax \u6559\u7a0b/\u8bf7\u6c42\u6570\u636e/XHR.md",sourceDirName:"\u524d\u7aef\u57fa\u7840/Javascript/\u8bf7\u6c42/Ajax \u6559\u7a0b/\u8bf7\u6c42\u6570\u636e",slug:"/\u524d\u7aef\u57fa\u7840/Javascript/\u8bf7\u6c42/Ajax \u6559\u7a0b/\u8bf7\u6c42\u6570\u636e/XHR",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u8bf7\u6c42/Ajax \u6559\u7a0b/\u8bf7\u6c42\u6570\u636e/XHR",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u8bf7\u6c42/Ajax \u6559\u7a0b/\u8bf7\u6c42\u6570\u636e/XHR.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u8bf7\u6c42/Ajax \u6559\u7a0b/"},next:{title:"jsonp",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/\u8bf7\u6c42/Ajax \u6559\u7a0b/\u8bf7\u6c42\u6570\u636e/jsonp"}},c={},l=[{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:2},{value:"get\u8bf7\u6c42:",id:"get\u8bf7\u6c42",level:3},{value:"post\u8bf7\u6c42:",id:"post\u8bf7\u6c42",level:3},{value:"\u8bf7\u6c42\u65b9\u6cd5\u5c01\u88c5",id:"\u8bf7\u6c42\u65b9\u6cd5\u5c01\u88c5",level:3},{value:"\u94fe\u63a5",id:"\u94fe\u63a5",level:2}],i={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf7\u6c42"},"\u8bf7\u6c42"),(0,r.kt)("h3",{id:"get\u8bf7\u6c42"},"get\u8bf7\u6c42:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//\u6b65\u9aa4\u4e00:\u521b\u5efa\u5f02\u6b65\u5bf9\u8c61\nvar ajax = new XMLHttpRequest();\n//\u6b65\u9aa4\u4e8c:\u8bbe\u7f6e\u8bf7\u6c42\u7684url\u53c2\u6570,\u53c2\u6570\u4e00\u662f\u8bf7\u6c42\u7684\u7c7b\u578b,\u53c2\u6570\u4e8c\u662f\u8bf7\u6c42\u7684url,\u53ef\u4ee5\u5e26\u53c2\u6570,\u52a8\u6001\u7684\u4f20\u9012\u53c2\u6570starName\u5230\u670d\u52a1\u7aef\najax.open('get','getStar.php?starName='+name);\n//\u6b65\u9aa4\u4e09:\u53d1\u9001\u8bf7\u6c42\najax.send();\n//\u6b65\u9aa4\u56db:\u6ce8\u518c\u4e8b\u4ef6 onreadystatechange \u72b6\u6001\u6539\u53d8\u5c31\u4f1a\u8c03\u7528\najax.onreadystatechange = function () {   if (ajax.readyState==4 &&ajax.status==200) {\n    //\u6b65\u9aa4\u4e94 \u5982\u679c\u80fd\u591f\u8fdb\u5230\u8fd9\u4e2a\u5224\u65ad \u8bf4\u660e \u6570\u636e \u5b8c\u7f8e\u7684\u56de\u6765\u4e86,\u5e76\u4e14\u8bf7\u6c42\u7684\u9875\u9762\u662f\u5b58\u5728\u7684\u3000\u3000\u3000\u3000console.log(ajax.responseText);//\u8f93\u5165\u76f8\u5e94\u7684\u5185\u5bb9\n  \u3000\u3000}\n}\n")),(0,r.kt)("h3",{id:"post\u8bf7\u6c42"},"post\u8bf7\u6c42:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//\u521b\u5efa\u5f02\u6b65\u5bf9\u8c61  \nvar xhr = new XMLHttpRequest();\n//\u8bbe\u7f6e\u8bf7\u6c42\u7684\u7c7b\u578b\u53caurl\n//post\u8bf7\u6c42\u4e00\u5b9a\u8981\u6dfb\u52a0\u8bf7\u6c42\u5934\u624d\u884c\u4e0d\u7136\u4f1a\u62a5\u9519\nxhr.setRequestHeader(\"Content-type\",\"application/x-www-form-urlencoded\");\n xhr.open('post', '02.post.php' );\n//\u53d1\u9001\u8bf7\u6c42\nxhr.send('name=fox&age=18');\nxhr.onreadystatechange = function () {\n    // \u8fd9\u6b65\u4e3a\u5224\u65ad\u670d\u52a1\u5668\u662f\u5426\u6b63\u786e\u54cd\u5e94\n  if (xhr.readyState == 4 && xhr.status == 200) {\n    console.log(xhr.responseText);\n  } \n};\n")),(0,r.kt)("h3",{id:"\u8bf7\u6c42\u65b9\u6cd5\u5c01\u88c5"},"\u8bf7\u6c42\u65b9\u6cd5\u5c01\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function ajax_method(url,data,method,success) {\n    // \u5f02\u6b65\u5bf9\u8c61\n    var ajax = new XMLHttpRequest();\n\n    // get \u8ddfpost  \u9700\u8981\u5206\u522b\u5199\u4e0d\u540c\u7684\u4ee3\u7801\n    if (method=='get') {\n        // get\u8bf7\u6c42\n        if (data) {\n            // \u5982\u679c\u6709\u503c\n            url+='?';\n            url+=data;\n        }else{\n\n        }\n        // \u8bbe\u7f6e \u65b9\u6cd5 \u4ee5\u53ca url\n        ajax.open(method,url);\n\n        // send\u5373\u53ef\n        ajax.send();\n    }else{\n        // post\u8bf7\u6c42\n        // post\u8bf7\u6c42 url \u662f\u4e0d\u9700\u8981\u6539\u53d8\n        ajax.open(method,url);\n\n        // \u9700\u8981\u8bbe\u7f6e\u8bf7\u6c42\u62a5\u6587\n        ajax.setRequestHeader(\"Content-type\",\"application/x-www-form-urlencoded\");\n\n        // \u5224\u65addata send\u53d1\u9001\u6570\u636e\n        if (data) {\n            // \u5982\u679c\u6709\u503c \u4ecesend\u53d1\u9001\n            ajax.send(data);\n        }else{\n            // \u6728\u6709\u503c \u76f4\u63a5\u53d1\u9001\u5373\u53ef\n            ajax.send();\n        }\n    }\n\n    // \u6ce8\u518c\u4e8b\u4ef6\n    ajax.onreadystatechange = function () {\n        // \u5728\u4e8b\u4ef6\u4e2d \u83b7\u53d6\u6570\u636e \u5e76\u4fee\u6539\u754c\u9762\u663e\u793a\n        if (ajax.readyState==4&&ajax.status==200) {\n            // console.log(ajax.responseText);\n\n            // \u5c06 \u6570\u636e \u8ba9 \u5916\u9762\u53ef\u4ee5\u4f7f\u7528\n            // return ajax.responseText;\n\n            // \u5f53 onreadystatechange \u8c03\u7528\u65f6 \u8bf4\u660e \u6570\u636e\u56de\u6765\u4e86\n            // ajax.responseText;\n\n            // \u5982\u679c\u8bf4 \u5916\u9762\u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a function \u4f5c\u4e3a\u53c2\u6570 success\n            success(ajax.responseText);\n        }\n    }\n\n}\n")),(0,r.kt)("h2",{id:"\u94fe\u63a5"},"\u94fe\u63a5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/cythia/p/6978323.html"},"\u539f\u751fjs\u7684ajax\u8bf7\u6c42"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/41409204"},"xmlhttprequest \u5982\u4f55\u53d1\u8de8\u57df\u8bf7\u6c42\uff1f"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000022115085"},"XMLHttpRequest--\x3e\u8de8\u57df\u9650\u5236\u548cXSS--\x3e\u4ee3\u7406"))))}u.isMDXComponent=!0}}]);