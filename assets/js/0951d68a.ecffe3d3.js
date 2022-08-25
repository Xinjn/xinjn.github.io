"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[57150],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(a),d=r,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},57255:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,u={unversionedId:"\u524d\u7aef\u57fa\u7840/HTML/Audio\u6807\u7b7e/QuickStart",id:"\u524d\u7aef\u57fa\u7840/HTML/Audio\u6807\u7b7e/QuickStart",title:"QuickStart",description:"\u53c2\u8003",source:"@site/docs/\u524d\u7aef\u57fa\u7840/HTML/Audio\u6807\u7b7e/QuickStart.md",sourceDirName:"\u524d\u7aef\u57fa\u7840/HTML/Audio\u6807\u7b7e",slug:"/\u524d\u7aef\u57fa\u7840/HTML/Audio\u6807\u7b7e/QuickStart",permalink:"/docs/\u524d\u7aef\u57fa\u7840/HTML/Audio\u6807\u7b7e/QuickStart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef\u57fa\u7840/HTML/Audio\u6807\u7b7e/QuickStart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Audio\u4e8b\u4ef6",permalink:"/docs/\u524d\u7aef\u57fa\u7840/HTML/Audio\u6807\u7b7e/Audio\u4e8b\u4ef6"},next:{title:"[CanvasRenderingContext2D.drawImage()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/drawImage)",permalink:"/docs/\u524d\u7aef\u57fa\u7840/HTML/Canvas/drawImage()/"}},s={},l=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:l};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>audio\u58f0\u97f3\u63a7\u5236</title>\n    <script type="text/javascript">\n      //\u6ce8\u610f\u67d0\u4e9b\u6d4f\u89c8\u5668\u6709\u6743\u9650\u65e0\u6cd5\u81ea\u52a8\u64ad\u653e\n      //\u58f0\u97f3\u63a7\u5236\n      var my_audio = {\n        obj: null,\n        is_auto_play: false,\n        is_loop: false,\n        set: function (a) {\n          var self = this;\n          self.obj = new Audio(a.url);\n          if (a.auto) {\n            self.is_auto_play = true;\n            self.play();\n          }\n          if (a.loop) {\n            self.is_loop = true;\n          }\n        },\n        play: function () {\n          var self = this;\n          self.obj.play();\n          if (self.is_loop) {\n            self.obj.onended = function () {\n              self.play();\n            };\n          }\n        },\n        pause: function () {\n          var self = this;\n          self.obj.pause();\n        },\n        stop: function () {\n          var self = this;\n          self.obj.pause();\n          self.obj.currentTime = 0.0;\n        },\n        muted: function () {\n          var self = this;\n          self.obj.muted ? (self.obj.muted = false) : (self.obj.muted = true);\n        },\n        volume_add: function () {\n          var self = this;\n          self.obj.volume = self.obj.volume + 0.1;\n        },\n        volume_minus: function () {\n          var self = this;\n          self.obj.volume = self.obj.volume - 0.1;\n        },\n        init: function (a) {\n          var c = function (s) {\n            var r = {};\n            for (var k in s) {\n              r[k] = typeof s[k] === "object" ? c(s[k]) : s[k];\n            }\n            return r;\n          };\n          var self = c(my_audio);\n          self.set(a);\n          return self;\n        },\n      };\n\n      var audio_bg = my_audio.init({ url: "video/bg.mp3", auto: true });\n      var audio_gift = my_audio.init({ url: "video/gift.mp3", loop: true });\n      var audio_bomb = my_audio.init({ url: "video/bomb.mp3" });\n    <\/script>\n  </head>\n\n  <body>\n    <br /><br /><br /><br /><br />\n    <a href="javascript:audio_bg.play();">\u64ad\u653e\u80cc\u666f</a>\n    <a href="javascript:audio_bg.pause();">\u6682\u505c\u80cc\u666f</a>\n    <a href="javascript:audio_bg.stop();">\u505c\u6b62\u80cc\u666f</a>\n    <a href="javascript:audio_bg.muted();">\u9759\u97f3\u80cc\u666f</a>\n    <a href="javascript:audio_bg.volume_add();">\u589e\u52a0\u80cc\u666f\u97f3</a>\n    <a href="javascript:audio_bg.volume_minus();">\u51cf\u5c11\u80cc\u666f\u97f3</a>\n    <br /><br /><br /><br /><br />\n    <a href="javascript:audio_gift.play();">\u64ad\u653egift</a>\n    <a href="javascript:audio_gift.pause();">\u6682\u505cgift</a>\n    <a href="javascript:audio_gift.stop();">\u505c\u6b62gift</a>\n    <a href="javascript:audio_gift.muted();">\u9759\u97f3gift</a>\n    <a href="javascript:audio_gift.volume_add();">\u589e\u52a0gift\u97f3</a>\n    <a href="javascript:audio_gift.volume_minus();">\u51cf\u5c11gift\u97f3</a>\n    <br /><br /><br /><br /><br />\n    <a href="javascript:audio_bomb.play();">\u64ad\u653ebomb</a>\n    <a href="javascript:audio_bomb.pause();">\u6682\u505cbomb</a>\n    <a href="javascript:audio_bomb.stop();">\u505c\u6b62bomb</a>\n    <a href="javascript:audio_bomb.muted();">\u9759\u97f3bomb</a>\n    <a href="javascript:audio_bomb.volume_add();">\u589e\u52a0bomb\u97f3</a>\n    <a href="javascript:audio_bomb.volume_minus();">\u51cf\u5c11bomb\u97f3</a>\n  </body>\n</html>\n')),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bbsmax.com/A/mo5k2wvJwR/"},"audio \u57fa\u672c\u529f\u80fd\u5b9e\u73b0\uff08audio \u505c\u6b62\u64ad\u653e,audio \u5982\u4f55\u9759\u97f3,audio \u97f3\u91cf\u63a7\u5236\u7b49\uff09")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_40187450/article/details/118366889"},"react \u4e2d\u6dfb\u52a0\u80cc\u666f\u97f3\u4e50")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.coder.work/article/948387"},"\u5728 React.js \u4e2d\u64ad\u653e\u58f0\u97f3"))))}f.isMDXComponent=!0}}]);