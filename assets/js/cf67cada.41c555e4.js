"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[70731],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},i=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),k=p(t),d=o,m=k["".concat(u,".").concat(d)]||k[d]||s[d]||c;return t?n.createElement(m,l(l({ref:r},i),{},{components:t})):n.createElement(m,l({ref:r},i))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,l=new Array(c);l[0]=k;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<c;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},71846:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const c={},l="[Docker run \u547d\u4ee4](https://www.runoob.com/docker/docker-run-command.html)",a={unversionedId:"\u540e\u7aef/\u8fd0\u7ef4\u90e8\u7f72/Docker/Docker \u547d\u4ee4/Docker run \u547d\u4ee4",id:"\u540e\u7aef/\u8fd0\u7ef4\u90e8\u7f72/Docker/Docker \u547d\u4ee4/Docker run \u547d\u4ee4",title:"[Docker run \u547d\u4ee4](https://www.runoob.com/docker/docker-run-command.html)",description:"docker run \uff1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bb9\u5668\u5e76\u8fd0\u884c\u4e00\u4e2a\u547d\u4ee4",source:"@site/docs/\u540e\u7aef/\u8fd0\u7ef4\u90e8\u7f72/Docker/Docker \u547d\u4ee4/Docker run \u547d\u4ee4.md",sourceDirName:"\u540e\u7aef/\u8fd0\u7ef4\u90e8\u7f72/Docker/Docker \u547d\u4ee4",slug:"/\u540e\u7aef/\u8fd0\u7ef4\u90e8\u7f72/Docker/Docker \u547d\u4ee4/Docker run \u547d\u4ee4",permalink:"/docs/\u540e\u7aef/\u8fd0\u7ef4\u90e8\u7f72/Docker/Docker \u547d\u4ee4/Docker run \u547d\u4ee4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u540e\u7aef/\u8fd0\u7ef4\u90e8\u7f72/Docker/Docker \u547d\u4ee4/Docker run \u547d\u4ee4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Docker logs \u547d\u4ee4](https://www.runoob.com/docker/docker-logs-command.html)",permalink:"/docs/\u540e\u7aef/\u8fd0\u7ef4\u90e8\u7f72/Docker/Docker \u547d\u4ee4/Docker logs \u547d\u4ee4"},next:{title:"[Docker start/stop/restart \u547d\u4ee4](https://www.runoob.com/docker/docker-start-stop-restart-command.html)",permalink:"/docs/\u540e\u7aef/\u8fd0\u7ef4\u90e8\u7f72/Docker/Docker \u547d\u4ee4/Docker start stop restart \u547d\u4ee4"}},u={},p=[{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"OPTIONS",id:"options",level:3}],i={toc:p};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-run-\u547d\u4ee4"},(0,o.kt)("a",{parentName:"h1",href:"https://www.runoob.com/docker/docker-run-command.html"},"Docker run \u547d\u4ee4")),(0,o.kt)("p",null,"docker run \uff1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bb9\u5668\u5e76\u8fd0\u884c\u4e00\u4e2a\u547d\u4ee4"),(0,o.kt)("h2",{id:"\u8bed\u6cd5"},"\u8bed\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run [OPTIONS] IMAGE [COMMAND] [ARG...]\n")),(0,o.kt)("h3",{id:"options"},"OPTIONS"),(0,o.kt)("p",null,"-a stdin: \u6307\u5b9a\u6807\u51c6\u8f93\u5165\u8f93\u51fa\u5185\u5bb9\u7c7b\u578b\uff0c\u53ef\u9009 STDIN/STDOUT/STDERR \u4e09\u9879\uff1b"),(0,o.kt)("p",null,"-d: \u540e\u53f0\u8fd0\u884c\u5bb9\u5668\uff0c\u5e76\u8fd4\u56de\u5bb9\u5668 ID\uff1b"),(0,o.kt)("p",null,"-i: \u4ee5\u4ea4\u4e92\u6a21\u5f0f\u8fd0\u884c\u5bb9\u5668\uff0c\u901a\u5e38\u4e0e -t \u540c\u65f6\u4f7f\u7528\uff1b"),(0,o.kt)("p",null,"-P: \u968f\u673a\u7aef\u53e3\u6620\u5c04\uff0c\u5bb9\u5668\u5185\u90e8\u7aef\u53e3\u968f\u673a\u6620\u5c04\u5230\u4e3b\u673a\u7684\u7aef\u53e3"),(0,o.kt)("p",null,"-p: \u6307\u5b9a\u7aef\u53e3\u6620\u5c04\uff0c\u683c\u5f0f\u4e3a\uff1a\u4e3b\u673a(\u5bbf\u4e3b)\u7aef\u53e3:\u5bb9\u5668\u7aef\u53e3"),(0,o.kt)("p",null,"-t: \u4e3a\u5bb9\u5668\u91cd\u65b0\u5206\u914d\u4e00\u4e2a\u4f2a\u8f93\u5165\u7ec8\u7aef\uff0c\u901a\u5e38\u4e0e -i \u540c\u65f6\u4f7f\u7528\uff1b"),(0,o.kt)("p",null,'--name="nginx-lb": \u4e3a\u5bb9\u5668\u6307\u5b9a\u4e00\u4e2a\u540d\u79f0\uff1b'),(0,o.kt)("p",null,"--dns 8.8.8.8: \u6307\u5b9a\u5bb9\u5668\u4f7f\u7528\u7684 DNS \u670d\u52a1\u5668\uff0c\u9ed8\u8ba4\u548c\u5bbf\u4e3b\u4e00\u81f4\uff1b"),(0,o.kt)("p",null,"--dns-search example.com: \u6307\u5b9a\u5bb9\u5668 DNS \u641c\u7d22\u57df\u540d\uff0c\u9ed8\u8ba4\u548c\u5bbf\u4e3b\u4e00\u81f4\uff1b"),(0,o.kt)("p",null,'-h "mars": \u6307\u5b9a\u5bb9\u5668\u7684 hostname\uff1b'),(0,o.kt)("p",null,'-e username="ritchie": \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff1b'),(0,o.kt)("p",null,"--env-file=[]: \u4ece\u6307\u5b9a\u6587\u4ef6\u8bfb\u5165\u73af\u5883\u53d8\u91cf\uff1b"),(0,o.kt)("p",null,'--cpuset="0-2" or --cpuset="0,1,2": \u7ed1\u5b9a\u5bb9\u5668\u5230\u6307\u5b9a CPU \u8fd0\u884c\uff1b'),(0,o.kt)("p",null,"-m :\u8bbe\u7f6e\u5bb9\u5668\u4f7f\u7528\u5185\u5b58\u6700\u5927\u503c\uff1b"),(0,o.kt)("p",null,'--net="bridge": \u6307\u5b9a\u5bb9\u5668\u7684\u7f51\u7edc\u8fde\u63a5\u7c7b\u578b\uff0c\u652f\u6301 bridge/host/none/container: \u56db\u79cd\u7c7b\u578b\uff1b'),(0,o.kt)("p",null,"--link=[]: \u6dfb\u52a0\u94fe\u63a5\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668\uff1b"),(0,o.kt)("p",null,"--expose=[]: \u5f00\u653e\u4e00\u4e2a\u7aef\u53e3\u6216\u4e00\u7ec4\u7aef\u53e3\uff1b"),(0,o.kt)("p",null,"--volume , -v: \u7ed1\u5b9a\u4e00\u4e2a\u5377"))}s.isMDXComponent=!0}}]);