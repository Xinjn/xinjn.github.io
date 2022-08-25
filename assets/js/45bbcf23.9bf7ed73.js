"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[41113],{3905:(n,t,e)=>{e.d(t,{Zo:()=>c,kt:()=>g});var i=e(67294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,i,o=function(n,t){if(null==n)return{};var e,i,o={},r=Object.keys(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var a=i.createContext({}),u=function(n){var t=i.useContext(a),e=t;return n&&(e="function"==typeof n?n(t):s(s({},t),n)),e},c=function(n){var t=u(n.components);return i.createElement(a.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(n,t){var e=n.components,o=n.mdxType,r=n.originalType,a=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),d=u(e),g=o,h=d["".concat(a,".").concat(g)]||d[g]||p[g]||r;return e?i.createElement(h,s(s({ref:t},c),{},{components:e})):i.createElement(h,s({ref:t},c))}));function g(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var r=e.length,s=new Array(r);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=n,l.mdxType="string"==typeof n?n:o,s[1]=l;for(var u=2;u<r;u++)s[u]=e[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,e)}d.displayName="MDXCreateElement"},15199:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=e(87462),o=(e(67294),e(3905));const r={},s=void 0,l={unversionedId:"\u524d\u7aef\u57fa\u7840/Javascript/UI\u7ec4\u4ef6/UI\u8d70\u67e5/PC\u7aef",id:"\u524d\u7aef\u57fa\u7840/Javascript/UI\u7ec4\u4ef6/UI\u8d70\u67e5/PC\u7aef",title:"PC\u7aef",description:"UIPanel\u63d2\u4ef6",source:"@site/docs/\u524d\u7aef\u57fa\u7840/Javascript/UI\u7ec4\u4ef6/UI\u8d70\u67e5/PC\u7aef.md",sourceDirName:"\u524d\u7aef\u57fa\u7840/Javascript/UI\u7ec4\u4ef6/UI\u8d70\u67e5",slug:"/\u524d\u7aef\u57fa\u7840/Javascript/UI\u7ec4\u4ef6/UI\u8d70\u67e5/PC\u7aef",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/UI\u7ec4\u4ef6/UI\u8d70\u67e5/PC\u7aef",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef\u57fa\u7840/Javascript/UI\u7ec4\u4ef6/UI\u8d70\u67e5/PC\u7aef.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/UI\u7ec4\u4ef6/UI\u8d70\u67e5/"},next:{title:"\u79fb\u52a8\u7aef",permalink:"/docs/\u524d\u7aef\u57fa\u7840/Javascript/UI\u7ec4\u4ef6/UI\u8d70\u67e5/\u79fb\u52a8\u7aef"}},a={},u=[{value:"UIPanel\u63d2\u4ef6",id:"uipanel\u63d2\u4ef6",level:2}],c={toc:u};function p(n){let{components:t,...e}=n;return(0,o.kt)("wrapper",(0,i.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"uipanel\u63d2\u4ef6"},"UIPanel\u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\n/* eslint-disable linebreak-style */\n/* eslint-disable consistent-this */\n/* eslint-disable func-names */\n/* eslint-disable func-style */\n/* eslint-disable no-use-before-define */\nimport defaultImg from '../assets/index.png';\n\n// \u5224\u65ad\u8bbe\u5907\u5e73\u53f0\nfunction isMobile() {\n    if (window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {\n        return true; // \u79fb\u52a8\u7aef\n    } else {\n        return false; // PC\u7aef\n    }\n}\n\n// \u521d\u59cb\u503c\nconst cutImages = [\n    defaultImg\n];\n\n//\u56fe\u7247\u53c2\u6570\n// const cutImages = [\"https://x0.ifengimg.com/ucms/2021_49/F441C2D918FB19FCCAC1CC48F94AFBC692731AE1_size6132_w1920_h6822.png\"]\n\n// UI\u8d70\u67e5\u5de5\u5177\nexport default function UiPlug(cutImages) {\n    this.root = document.querySelector('body');\n    // \u83b7\u53d6\u6839fontsize\n    this.rootFZ = document.documentElement.style.fontSize\n        ? document.documentElement.style.fontSize.replace('px', '')\n        : 37.5;\n\n    // \u521d\u59cb\u503c\n    this.show = false; // \u662f\u5426\u663e\u793a\u8499\u5c42\n    this.currentImg = 0; // \u5f53\u524d\u56fe\u7247\u7d22\u5f15\n    this.curPer = 0.6; // \u5f53\u524d\u900f\u660e\u5ea6\n    this.cutImages = cutImages || []; // \u56fe\u7247\u96c6\n    this.imgFixed = false; // \u662f\u5426\u56fa\u5b9a\u56fe\u7247\u4f4d\u7f6e\n    this.scrollTogther = false; // \u662f\u5426\u4e00\u8d77\u6eda\u52a8\n\n    // \u65b9\u6cd5\uff1a\u521b\u5efaui-div\u6807\u7b7e\u5e76\u6307\u5b9a\u7c7b\u578b\n    this.createEle = function (ele, cls) {\n        const resEle = document.createElement(ele || 'ui-div');\n\n        if (cls) {\n            resEle.classList.add(cls);\n        }\n\n        return resEle;\n    };\n\n    // \uff08ui\uff09\u5bb9\u5668\n    this.initUiplug = function () {\n        this.uiPlug_root = null;\n        if (document.querySelector('#UIPlug_root')) {\n            this.uiPlug_root = document.querySelector('#UIPlug_root');\n        } else {\n            this.uiPlug_root = this.createEle('ui-div', 'UIPlug_root');\n            this.root.appendChild(this.uiPlug_root);\n            this.uiPlug_root.id = 'UIPlug_root';\n        }\n\n        // \u521d\u59cb\u5316\u6309\u94ae\n        this.ui_plg_btn = this.createEle('ui-div');\n        this.ui_plg_btn.classList.add('ui_plg_btn');\n        this.ui_plg_btn.innerHTML = '<ui-div class=\"ui\">UI</ui-div><ui-div class=\"close\"></ui-div>';\n        this.uiPlug_root.appendChild(this.ui_plg_btn);\n\n        // \u521d\u59cb\u5316\u56fe\u7247\u8499\u5c42\n        this.img = this.createEle('img');\n        this.img.src = this.cutImages[this.currentImg]; // \u521d\u59cb\u5316\u56fe\u7247\u4e3a\u7b2c\u4e00\u5f20\n\n        // \u8bbe\u7f6e\u56fe\u7247\u6837\u5f0f\n        this.img.setAttribute('id', 'ui_img');\n        // \u5e73\u53f0\u5224\u65ad\n        if (isMobile()) {\n            this.img.style.width = '100%';\n        } else {\n            this.img.style.width = '1920px';\n        }\n        this.img.style.opacity = this.curPer;\n        this.img.style.position = 'absolute';\n        this.img.style.top = 0;\n        this.img.style.zIndex = 9999;\n        this.img.style.pointerEvents = 'none';\n        this.root.appendChild(this.img);\n\n        // \u81ea\u9002\u5e94\u8ba1\u7b97\u56fe\u7247\u4f4d\u7f6e\n        const _this = this;\n\n        function imgSelf() {\n            console.log(1);\n            // \u83b7\u53d6\u5c4f\u5e55\u5bbd\u5ea61920 A\n            const clientWidth = parseInt(_this.img.style.width, 10);\n            // \u83b7\u53d6\u6b63\u6587\u5bbd\u5ea6 B\n            const bodyWidth = document.body.scrollWidth;\n            // \u8ba1\u7b97\u56fe\u7247\u79fb\u52a8\u7684\u4f4d\u79fb C\n            const imgLeft = clientWidth - bodyWidth;\n\n            _this.img.style.left = `-${imgLeft}px`;\n        }\n        // \u76d1\u542c\u5c4f\u5e55\u53d8\u6362\n\n        window.addEventListener('resize', init);\n        // \u5b9a\u4e49\u51fd\u6570\n\n        function init() {\n            imgSelf();\n        }\n\n        // \u521d\u59cb\u5316\u529f\u80fd\u6a21\u5757\n        this.ui_model = this.createEle('ui-div', 'ui_model');\n        this.uiPlug_root.appendChild(this.ui_model);\n        // \u4e0a\u4f20\u6309\u94ae\n        this.upload = this.createEle('ui-div', 'ui_upload');\n        this.upload.innerHTML = `<span>+</span>\n                                    <span>\u4e0a\u4f20</span>\n                                    <input type=\"file\" style=\"display: none\" accept=\"image/*\"/>\n                                    `;\n\n        this.ui_model.appendChild(this.upload);\n        // \u4e0d\u900f\u660e\u5ea6\u6309\u94ae\n        this.alpha = this.createEle('ui-div', 'ui_alpha');\n        this.alpha.innerHTML = '<input type=\"text\" value=\"60\"/><span>\u900f</span>';\n        this.ui_model.appendChild(this.alpha);\n        // \u9501\u5b9a\u6309\u94ae\n        this.lock = this.createEle('ui-div', 'ui_lock');\n        this.lock.innerHTML = '<input type=\"checkbox\" checked/><span>\u9501\u5b9a</span>';\n        this.ui_model.appendChild(this.lock);\n        // \u8ddf\u968f\u6309\u94ae\n        this.flow = this.createEle('ui-div', 'ui_flow');\n        this.flow.innerHTML = '<input type=\"checkbox\"/><span>\u8ddf\u968f</span>';\n        this.ui_model.appendChild(this.flow);\n        // \u4e0a\u9875\u4e0b\u9875\n        this.page = this.createEle('ui-div', 'ui_page');\n        this.page.innerHTML = `\n                                <div class=\"ui_add\">+</div>\n                                <div class=\"ui_sub\">-</div>\n                                `;\n        this.ui_model.appendChild(this.page);\n        // \u9875\u6570\n        this.imgNum = this.createEle('ui-div', 'ui_imgNum');\n        this.imgNum.innerHTML = `<span>1/${this.cutImages.length}</span>`;\n        this.ui_model.appendChild(this.imgNum);\n\n        // \u7ed1\u5b9a\u4e8b\u4ef6\n        this.switchPlug(); // \u6309\u94ae\u903b\u8f91\n        this.uploadPlug(); // \u4e0a\u4f20\u903b\u8f91\n        this.alphaPlug(); // \u4e0d\u900f\u660e\u5ea6\u903b\u8f91\n        this.lockPlug(); // \u9501\u5b9a\u903b\u8f91\n        this.flowPlug(); // \u8ddf\u968f\u903b\u8f91\n        this.pagePlug(); // \u4e0a\u4e0b\u9875\u903b\u8f91\n\n        this.img.style.display = 'none';\n    };\n\n    // \uff08\u903b\u8f91\uff09\u6309\u94ae\n    this.switchPlug = function (params) {\n        const _this = this;\n\n        const uiBtn = document.querySelector('.UIPlug_root .ui_plg_btn .ui');\n        const closeBtn = document.querySelector('.UIPlug_root .ui_plg_btn .close');\n\n        // \u76d1\u542c\u70b9\u51fb\u4e8b\u4ef6\n        uiBtn.addEventListener('click', (e) => {\n            if (_this.show) {\n                _this.img.style.display = 'none';\n                _this.show = false;\n            } else {\n                _this.img.style.display = 'block';\n                _this.show = true;\n            }\n        });\n\n        // \u4e0d\u5c55\u793a\u6309\u94ae\n        closeBtn.addEventListener('click', (e) => {\n            _this.uiPlug_root.parentElement.removeChild(_this.uiPlug_root);\n            _this.img.parentElement.removeChild(_this.img);\n        });\n    };\n\n    // (\u903b\u8f91) \u4e0a\u4f20\n    this.uploadPlug = function () {\n        const _this = this;\n        // \u83b7\u53d6\u5143\u7d20\n        const uploadBtn = document.querySelector('.UIPlug_root .ui_upload');\n        const input = document.querySelector('.UIPlug_root .ui_upload input');\n        const num = document.querySelector('.UIPlug_root .ui_imgNum');\n\n        // \u4e8b\u4ef6\u76d1\u542c\n        uploadBtn.addEventListener('click', (e) => {\n            input.click();\n        });\n        input.addEventListener('change', (e) => {\n            const file = e.target.files[0];\n            const reader = new FileReader();\n\n            reader.readAsDataURL(file);\n            reader.onload = function (e) { // \u6210\u529f\u8bfb\u53d6\u6587\u4ef6\n                _this.cutImages.push(e.target.result);\n            };\n\n            num.innerHTML = `${_this.currentImg + 1}/${this.cutImages.length + 1}`;\n        });\n    };\n\n    // (\u903b\u8f91) \u8bbe\u7f6ealpha\n    this.alphaPlug = function () {\n        const _this = this;\n        const alphaInput = document.querySelector('.UIPlug_root .ui_alpha input');\n\n        alphaInput.addEventListener('change', (e) => {\n            const value = e.target.value;\n\n            console.log(value);\n            _this.img.style.opacity = value * 0.01;\n            console.log(_this.img.style.opacity);\n        });\n\n    };\n\n    // (\u903b\u8f91) \u8bbe\u7f6elock\n    this.lockPlug = function () {\n        const _this = this;\n        const lockInput = document.querySelector('.UIPlug_root .ui_lock input');\n\n        lockInput.addEventListener('click', (e) => {\n            const value = e.target.checked;\n\n            if (!value) { // \u56fa\u5b9a\n                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;\n\n                _this.img.style.position = 'fixed';\n                _this.img.style.top = `${-scrollTop}px`;\n\n                _this.imgFixed = true;\n            } else {\n                _this.img.style.position = 'absolute';\n                _this.img.style.top = 0;\n\n                _this.imgFixed = false;\n            }\n        });\n    };\n\n    // (\u903b\u8f91) \u8bbe\u7f6e\u8ddf\u968f\n    this.flowPlug = function () {\n        const _this = this;\n        const flowInput = document.querySelector('.UIPlug_root .ui_flow input');\n\n        // \u91cd\u65b0\u8bbe\u7f6e\u56fe\u7247\u8ddf\u968f\n        flowInput.addEventListener('click', (e) => {\n            const value = e.target.checked;\n            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;\n            const img_y = _this.img.getBoundingClientRect().y;\n\n            if (value) { // \u8ddf\u968f\n                _this.img.style.position = 'absolute';\n                _this.img.style.top = `${scrollTop + img_y}px`;\n\n                _this.scrollTogther = true;\n            } else {\n                _this.img.style.position = 'fixed';\n                _this.img.style.top = `${img_y}px`;\n                _this.scrollTogther = false;\n            }\n        });\n    };\n\n    // (\u903b\u8f91) \u8bbe\u7f6e\u4e0a\u4e0b\u9875\n    this.pagePlug = function () {\n        const _this = this;\n\n        const addBtn = document.querySelector('.UIPlug_root .ui_page .ui_add');\n        const subBtn = document.querySelector('.UIPlug_root .ui_page .ui_sub');\n        const num = document.querySelector('.UIPlug_root .ui_imgNum');\n\n        // \u4e0a\u4e00\u9875\n        addBtn.addEventListener('click', () => {\n            change(true);\n        });\n        // \u4e0b\u4e00\u9875\n        subBtn.addEventListener('click', () => {\n            change(false);\n        });\n\n        function change(add) {\n            const imgsLength = _this.cutImages.length;\n\n            if (add && _this.currentImg + 1 < imgsLength) { // +1\n                _this.currentImg += 1;\n                if (_this.imgFixed) {\n                    this.lockPlug();\n                }\n            } else if (add === false && _this.currentImg + 1 > 1) { // -1\n                _this.currentImg -= 1;\n                if (_this.imgFixed) {\n                    this.lockPlug();\n                }\n            }\n\n            _this.img.src = _this.cutImages[_this.currentImg];\n            num.innerHTML = `${_this.currentImg + 1}/${imgsLength}`;\n        }\n\n    };\n\n    // \u521d\u59cb\u5316\u5bb9\u5668\n    this.initUiplug();\n}\n\n// \u5224\u65addocument\u662f\u5426\u89e3\u6790\u5b8c\u6210(\u4e8c\u9009\u4e00)\ndocument.onreadystatechange = function () {\n    if (document.readyState === 'interactive') { // interactive\u53ef\u4ea4\u4e92:\u6587\u6863\u5df2\u88ab\u89e3\u6790\uff0cDOM\u5143\u7d20\u53ef\u4ee5\u88ab\u8bbf\u95ee\u3002\n        new UiPlug(cutImages);\n    }\n};\n\n// \u5224\u65addocument\u662f\u5426\u89e3\u6790\u5b8c\u6210(\u4e8c\u9009\u4e00)\n// if (document.readyState === 'interactive') { // interactive\u53ef\u4ea4\u4e92:\u6587\u6863\u5df2\u88ab\u89e3\u6790\uff0cDOM\u5143\u7d20\u53ef\u4ee5\u88ab\u8bbf\u95ee\u3002\n//     new UiPlug(cutImages);\n// }\n\n// style\u6807\u7b7e\nconst style = document.createElement('style');\n\nstyle.type = 'text/css';\nstyle.innerHTML =\n    `\n    .ui-div { \n        display: block; \n    }\n    \n    .UIPlug_root .ui_plg_btn {\n        box-sizing: border-box;\n        position: fixed;\n        right: 0;\n        top: 60%;\n        background: linear-gradient(135deg, rgba(112, 112, 119, 0.3) 0%, rgba(71, 72, 78, 0.2) 100%);\n        width: 55px;\n        height: 55px;\n        border-radius: 50% 0 0 50%;\n        border: 1px solid #eee;\n        padding: 10px 0 10px 10px;\n        display: flex;\n        align-items: center;\n        z-index: 10000;\n    } \n    \n    .UIPlug_root .ui { \n        font-family: PingFang-SC-Bold,PingFang-SC, PingFangSC-Regular;\n        background: #eee;\n        width: 30px;\n        height:30px;\n        border-radius: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 20px;\n        font-weight: bold;\n        color: rgba(112, 112, 119, .3);\n        cursor:pointer;\n    }\n    \n    .UIPlug_root .close { \n        width: 5px;\n        height:5px;\n        margin-left: 4px;\n        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWBJREFUSA2tlrFugzAURbHXqF2Av0kz02RvNz6Jj2CM1G5Nu1VK+RtgZIXciwCZxMYvoZYcLPx8jmM/O1FZlv0GQdBEUfSepmmD9uqS5/mmqqojQBuNj6brukNZlid2rKUP8G8w92RrzhyNM+purYRwMgB/IRPsN4VGMHZQwo44jvf3LpeL0QvWSlxwcifBo5Il+I3gXokPbhVIJRK4U+CTSOGLApeE75mKeIgybrbJHHxdzNlqrYu2bRmyRRWls1dAGiV1Xf8ATjBLgbOSSM4KrwpRGWbex+KbiMYwyBtpLBFnXwzLtJVeK4sCAz5uaBKGYQLRGVV0dzn3wAKf7qelPohnxSowAUqpP9yKr9cbasaA6MyoG4E50AUfp2jGuiQzgTnAB5dKJsEjcImkF6yB+yTqP+BLEo0D84GAnXTNR5jtyUzjzy36+nOCfxafGuBn1JMtFW0Q37tRAuYXYp8uZZ10O09mdfEAAAAASUVORK5CYII=) no-repeat center; background-size: cover;\n    }\n        \n    .UIPlug_root .ui_model { \n        box-sizing: border-box;\n        position: fixed;\n        // right: -48px;\n        right: 0;\n        top: 70%;\n        background: linear-gradient(135deg, rgba(112, 112, 119, 0.3) 0%, rgba(71, 72, 78, 0.2) 100%);\n        border-radius: 15px 0px 0px 15px;\n        border: 1px solid #eee;\n        padding: 10px 5px 10px 10px;\n        z-index: 10000;\n        transition:all .5s;\n    }\n    // .UIPlug_root .ui_model:hover { \n    //     right: 0;\n    //     transition:all .5s;\n    //     padding: 10px 10px 10px 10px;\n    // }\n    \n    .UIPlug_root .ui_upload {\n        display: flex;\n        justify-content: space-between;\n        cursor:pointer;\n        margin-bottom:8px;\n    }\n    .UIPlug_root .ui_upload span:nth-child(1) {\n        background: #FFFFFF;\n        border: 1px solid #DCDEE2;\n        box-sizing: border-box;\n        border-radius: 2px;\n        width: 13px;\n        height: 13px;\n        line-height:10px;\n        color: #C8C8CA;\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 11px;\n        text-align:center;\n    }\n    \n            \n    .UIPlug_root .ui_upload span:nth-child(2){\n        white-space:nowrap;\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 11px;\n        line-height: 13px;\n        color: #EEEEEE;\n    }\n    \n                        \n    \n    .UIPlug_root .ui_alpha {\n        display:flex\n        margin-top:8px;\n        cursor:pointer;\n    }\n                    \n                    \n                    \n    .UIPlug_root .ui_alpha input {\n        width: 30px;\n        height: 20px;\n        line-hight:20px;\n        text-align:center;\n        background: #FFFFFF;\n        border: 1px solid #DCDEE2;\n        box-sizing: border-box;\n        border-radius: 2px;\n        // margin-right:2px;\n    }\n                            \n        \n                    \n    .UIPlug_root .ui_alpha span {\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 11px;\n        line-height: 13px;\n        text-align: center;\n        color: #EEEEEE;\n    }\n    \n                \n                    \n    .UIPlug_root .ui_lock {\n        display: flex;\n        margin-top:8px;\n        cursor:pointer;\n    }\n    \n    \n    \n    .UIPlug_root .ui_lock input{\n        border: 1px solid red;\n        margin:0;\n        width: 13px;\n        height: 13px;\n        background: #FFFFFF;\n        border: 1px solid #DCDEE2;\n        box-sizing: border-box;\n        border-radius: 2px;\n        margin-right:5px;\n    }\n    \n            \n    \n    .UIPlug_root .ui_lock span {\n        white-space:nowrap;\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 11px;\n        line-height: 13px;\n        color: #EEEEEE;\n    }\n    \n    \n    \n    .UIPlug_root .ui_flow {\n        display: flex;\n        margin-top:8px;\n        cursor:pointer;\n    }\n    \n    \n    \n    .UIPlug_root .ui_flow input{\n        border: 1px solid red;\n        margin:0;\n        width: 13px;\n        height: 13px;\n        background: #FFFFFF;\n        border: 1px solid #DCDEE2;\n        box-sizing: border-box;\n        border-radius: 2px;\n        margin-right:5px;\n    }\n    \n    \n    \n    .UIPlug_root .ui_flow span {\n        white-space:nowrap;\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 11px;\n        line-height: 13px;\n        color: #EEEEEE;\n    }\n                            \n                    \n    \n    .UIPlug_root .ui_page {\n        width: 40px;\n        height: 18px;\n        background: #EEEEEE;\n        border-radius: 10px;\n        display:flex;\n        justify-content:space-around;\n        align-items: center;\n        margin-top:8px;\n        cursor:pointer;\n    }\n    \n    \n    \n    .UIPlug_root .ui_page .ui_add{\n        width: 14px;\n        height: 14px;\n        background: #FFFFFF;\n        border-radius: 10px;\n        line-height:14px;\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 11px;\n        display: flex;\n        align-items: center;\n        text-align: center;\n        color: #C8C8CA;\n        justify-content:center;\n        cursor:pointer;\n    }\n    \n    \n    \n    .UIPlug_root .ui_page .ui_sub{\n        width: 14px;\n        height: 14px;\n        background: #FFFFFF;\n        border-radius: 10px;\n        line-height:14px;\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 11px;\n        display: flex;\n        align-items: center;\n        text-align: center;\n        color: #C8C8CA;\n        justify-content:center;\n        cursor:pointer;\n    }\n    \n    \n    \n    .UIPlug_root .ui_imgNum {\n        display:inline-block;\n        width: 35px;\n        font-family: Roboto;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 11px;\n        // line-height: 13px;\n        text-align:center;\n        color: #EEEEEE;\n        margin-top:8px;\n    }\n                            \n    \n    .UIPlug_root .sliderBar {\n                border:1px solid black;\n                height: 0.266667rem;\n                width: 40%;\n                position: fixed;\n                bottom: 4rem;\n                right: 20px;\n                border-radius: 0.133333rem;\n                background: rgba(224, 224, 224, .9);\n                z-index: 10001;\n            }\n    \n    .UIPlug_root .sliderBtn {\n                width: 25px;\n                height: 25px;\n                border-radius: 50%;\n                background: #169fe6;\n                position: absolute;\n                left: 50%;\n                top: 50%;\n                margin-top: -12.5px;\n                cursor:pointer;\n                box-shadow: 0 0 0.133333rem -1px rgba(0, 0, 0, .2);\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                color: #fff;\n            }\n    \n    .UIPlug_root .changeImgs { \n                border:1px solid red;\n                position: fixed;\n                bottom: 30px;\n                right: 20px;\n                z-index: 10000;\n                // width: 100px;\n                // height: 50px;\n                // display:flex;\n            }\n    \n    .UIPlug_root .changeImgs .btn {\n                border:1px solid green;\n                font-size: 0.3rem;\n                // width: 20px;\n                // height: 0.8rem;\n                float: left;\n                background: #ccc;\n                text-align: center;\n                line-height: 20px;\n                box-sizing: border-box;\n            }\n    \n    .UIPlug_root .changeImgs .btn.num { background: none; }\n    \n    \n            .UIPlug_root .changeImgs .btn.btn_fixed { \n                border:1px solid blue;\n                margin-right: 0.8rem;\n                position: relative;\n            }\n    \n    \n            .UIPlug_root .changeImgs .btn.btn_st { \n                // width: 2.4rem;\n                // display: none;\n                position:absolute;\n                top:30px;\n                left:0;\n                white-space:nowrap;\n                border-radius: 10px;\n            }\n    `;\n\ndocument.getElementsByTagName('head').item(0)\n    .appendChild(style); \n")))}p.isMDXComponent=!0}}]);