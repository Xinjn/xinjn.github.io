"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[65209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},l="\u8de8\u57df",s={unversionedId:"\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/\u8de8\u57df/\u8de8\u57df",id:"\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/\u8de8\u57df/\u8de8\u57df",title:"\u8de8\u57df",description:"CORS",source:"@site/docs/\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/\u8de8\u57df/\u8de8\u57df.md",sourceDirName:"\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/\u8de8\u57df",slug:"/\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/\u8de8\u57df/",permalink:"/docs/\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/\u8de8\u57df/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/\u8de8\u57df/\u8de8\u57df.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs/\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/\u6a21\u5757/vm\u6a21\u5757/"},next:{title:"\\_\\_dirname \u548c ./ \u7684\u533a\u522b",permalink:"/docs/\u540e\u7aef/\u670d\u52a1\u7aef/Nodejs/\u8def\u5f84/"}},i={},c=[{value:"CORS",id:"cors",level:2},{value:"\u539f\u751f\u8bbe\u7f6e\u54cd\u5e94\u5934",id:"\u539f\u751f\u8bbe\u7f6e\u54cd\u5e94\u5934",level:3},{value:"\u6846\u67b6 \u8bbe\u7f6e\u54cd\u5e94\u5934",id:"\u6846\u67b6-\u8bbe\u7f6e\u54cd\u5e94\u5934",level:3},{value:"\u6846\u67b6 \u4f7f\u7528\u7b2c\u4e09\u65b9 cors \u5305",id:"\u6846\u67b6-\u4f7f\u7528\u7b2c\u4e09\u65b9-cors-\u5305",level:3},{value:"JSNOP",id:"jsnop",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8de8\u57df"},"\u8de8\u57df"),(0,a.kt)("h2",{id:"cors"},"CORS"),(0,a.kt)("p",null,"\u539f\u7406\uff1a\u670d\u52a1\u7aef\u8bbe\u7f6e\u54cd\u5e94\u5934\u5373\u53ef"),(0,a.kt)("h3",{id:"\u539f\u751f\u8bbe\u7f6e\u54cd\u5e94\u5934"},"\u539f\u751f\u8bbe\u7f6e\u54cd\u5e94\u5934"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},'// \u539f\u751f\nres.setHeader("Access-Control-Allow-Origin", "*");\n')),(0,a.kt)("h3",{id:"\u6846\u67b6-\u8bbe\u7f6e\u54cd\u5e94\u5934"},"\u6846\u67b6 \u8bbe\u7f6e\u54cd\u5e94\u5934"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},'app.all("/*", function(req, res, next) {\n    // \u8de8\u57df\u5904\u7406\n    res.header("Access-Control-Allow-Origin", "*");\n    res.header("Access-Control-Allow-Headers", "X-Requested-With");\n    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");\n    res.header("X-Powered-By", \' 3.2.1\');\n    res.header("Content-Type", "application/json;charset=utf-8");\n    next(); // \u6267\u884c\u4e0b\u4e00\u4e2a\u8def\u7531\n})\n')),(0,a.kt)("h3",{id:"\u6846\u67b6-\u4f7f\u7528\u7b2c\u4e09\u65b9-cors-\u5305"},"\u6846\u67b6 \u4f7f\u7528\u7b2c\u4e09\u65b9 cors \u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"const cors = require('cors');\n//\u5c06cors\u6302\u8f7d\napp.use(cors())\n")),(0,a.kt)("h2",{id:"jsnop"},"JSNOP"),(0,a.kt)("p",null,"\u524d\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"}," // \u5c01\u88c5jsonp\u51fd\u6570\nfunction jsonp(options) {\n    // \u52a8\u6001\u8bbe\u7f6escript\u6807\u7b7e\n    var script = document.createElement('script');\n    // \u901a\u8fc7\u5730\u5740\u4f20\u503c\n    script.src =options.url;\n    // \u6dfb\u52a0\u5230body\u4e2d\n    document.body.appendChild(script);\n    //  \u5f53script\u6807\u7b7e\u52a0\u8f7d\u5b8c\u6210\u4e4b\u540e\uff0c\u5220\u9664\u8fd9\u4e2ascript\u6807\u7b7e\n    script.onload = function () {\n        document.body.removeChild(this);\n    }\n}\n\n//\u8c03\u7528\njsonp({\n        url:'http://localhost:3001/better?callback=fn',\n})\n")),(0,a.kt)("p",null,"\u670d\u52a1\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},'// \u5904\u7406 POST \u8bf7\u6c42\uff08POST\u3001DELETE...\uff09\ngetPostData(req).then((postData) => {\n    // req \u6dfb\u52a0 body \u5b57\u6bb5\u5e76\u8d4b\u4e88 postData \u6570\u636e\n    req.body = postData;\n    // \u4e0b\u9762\u6240\u6709\u63a5\u53e3\u90fd\u53ef\u4ee5\u83b7\u53d6\u5230 postData \u6570\u636e\n\n    // \u5904\u7406 timeline \u8def\u7531\n    const timelineData = handleTimelineRouter(req, res);\n\n    if (timelineData) {\n        timelineData.then((data) => {\n        // \u89e3\u51b3\u6d4f\u89c8\u5668 jsonp \u8bf7\u6c42\n        if (req.query && req.query.callback) {\n            var str = req.query.callback + "(" + JSON.stringify(data) + ")";\n            res.end(str);\n        } else {\n            //\u666e\u901a\u7684json\n            res.end(JSON.stringify(data));\n        }\n        });\n        return;\n    }\n    // \u672a\u547d\u4e2d\u8def\u6709\uff0c\u8fd4\u56de 404\n    res.writeHead(404, { "Content-Type": "text/plain" });\n    res.write("404 Not Found\\n");\n    res.end();\n});\n')),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_54555146/article/details/123881125"},"nodejs \u4e2d\u89e3\u51b3\u8de8\u57df\u95ee\u9898")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_52622178/article/details/123858797"},"NodeJs\u2014\u2014\u5b9e\u73b0\u8de8\u57df\u65b9\u6cd5\u603b\u7ed3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_29589357/article/details/119225825"},"\u670d\u52a1\u5668\u7aef\u652f\u6301 jsonp,\u7528 nodejs \u5b9e\u73b0 json \u548c jsonp \u670d\u52a1\u7684\u65b9\u6cd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/webSnow/p/15424432.html"},"Web \u670d\u52a1 API \u8de8\u57df\u7684 Cross-Origin Read Blocking (CORB) blocked cross-origin response \u62a5\u9519\u4e24\u79cd\u89e3\u51b3\u65b9\u6848"))))}d.isMDXComponent=!0}}]);