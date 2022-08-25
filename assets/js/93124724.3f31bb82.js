"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[88065],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=i(t),m=o,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(k,l(l({ref:n},s),{},{components:t})):r.createElement(k,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25186:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=t(87462),o=(t(67294),t(3905));const a={},l=void 0,c={unversionedId:"\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6\u901a\u4fe1/\u7236\u5b50\u901a\u4fe1",id:"\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6\u901a\u4fe1/\u7236\u5b50\u901a\u4fe1",title:"\u7236\u5b50\u901a\u4fe1",description:"\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4f20\u503c",source:"@site/docs/\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6\u901a\u4fe1/\u7236\u5b50\u901a\u4fe1.md",sourceDirName:"\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6\u901a\u4fe1",slug:"/\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6\u901a\u4fe1/\u7236\u5b50\u901a\u4fe1",permalink:"/docs/\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6\u901a\u4fe1/\u7236\u5b50\u901a\u4fe1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6\u901a\u4fe1/\u7236\u5b50\u901a\u4fe1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5144\u5f1f\u901a\u4fe1",permalink:"/docs/\u6846\u67b6/\u524d\u53f0/React/\u7ec4\u4ef6\u901a\u4fe1/\u5144\u5f1f\u901a\u4fe1"},next:{title:"create-react-app",permalink:"/docs/\u6846\u67b6/\u524d\u53f0/React/\u811a\u624b\u67b6/create-react-app/"}},p={},i=[{value:"\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4f20\u503c",id:"\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4f20\u503c",level:2},{value:"\u3010Props\u3011\u53cc\u5411\u7ed1\u5b9a",id:"props\u53cc\u5411\u7ed1\u5b9a",level:3},{value:"\u3010<code>ref</code>\u3011\uff08\u7236\u4f20\u5b50\uff09",id:"ref\u7236\u4f20\u5b50",level:3},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:5},{value:"\u94fe\u63a5",id:"\u94fe\u63a5",level:2}],s={toc:i};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4f20\u503c"},"\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4f20\u503c"),(0,o.kt)("h3",{id:"props\u53cc\u5411\u7ed1\u5b9a"},"\u3010Props\u3011\u53cc\u5411\u7ed1\u5b9a"),(0,o.kt)("p",null,"\u8fd9\u662f\u6700\u5e38\u89c1\u7684react\u7ec4\u4ef6\u4e4b\u95f4\u4f20\u9012\u4fe1\u606f\u7684\u65b9\u6cd5\u4e86\u5427\uff0c\u7236\u7ec4\u4ef6\u901a\u8fc7props\u628a\u6570\u636e\u4f20\u7ed9\u5b50\u7ec4\u4ef6\uff0c\u5b50\u7ec4\u4ef6\u901a\u8fc7this.props\u53bb\u4f7f\u7528\u76f8\u5e94\u7684\u6570\u636e"),(0,o.kt)("p",null,"\u7236\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'class App extends React.Component{\n  render(){\n    return(\n      <div>\n        <Children name="\u7236\u5411\u5b50"/>\n      </div>\n    )\n  }\n}\n')),(0,o.kt)("p",null,"\u5b50\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Children extends Component{\n  constructor(props){\n    super(props);\n  }\n  render(){\n    return(\n      <div>\u8fd9\u662f\uff1a{this.props.name}</div> \n    )\n  }\n}\n")),(0,o.kt)("h3",{id:"ref\u7236\u4f20\u5b50"},"\u3010",(0,o.kt)("inlineCode",{parentName:"h3"},"ref"),"\u3011\uff08\u7236\u4f20\u5b50\uff09"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"\u7236\u7ec4\u4ef6\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"ref"),"\u5c5e\u6027\u5bf9\u5b50\u7ec4\u4ef6\u505a\u6807\u8bb0\uff0c\u83b7\u53d6\u5230\u5b50\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"li"},"dom"),"\u5143\u7d20\uff0c\u53ef\u4ee5\u8c03\u7528\u5b50\u7ec4\u4ef6\u7684\u65b9\u6cd5\uff0c\u4f20\u9012\u6570\u636e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728 React \u6700\u65b0\u7684\u7248\u672c\u4e2d\uff0c\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"ref "),"\uff0c\u9700\u8981\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"React.createRef() "),"\u65b9\u6cd5\u751f\u6210\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"ref")))),(0,o.kt)("h5",{id:"\u6848\u4f8b"},"\u6848\u4f8b"),(0,o.kt)("p",null,"A\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import React, {createRef} from 'react'\nimport B from './B'\n//\u7236\u7ec4\u4ef6\nconst A = () => {\n  const childComp = createRef()\n  const clickHandle = () => {\n    childComp.current.childClickHandle(\"beijing\")\n  }\n\n  return (\n    <div>\n      <h2>A\u7ec4\u4ef6</h2>\n        <button onClick={()=>clickHandle()}>\u6309\u94ae</button>\n \n        <B ref={childComp}></B>\n      </div>\n    )\n}\n\nexport default A\n")),(0,o.kt)("p",null,"B\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"import React, { Component } from 'react'\n\n//\u5b50\u7ec4\u4ef6\nexport default  class B extends Component{\n  state={\n    name:\"admin\"\n  }\n  childClickHandle=(city)=>{\n    this.setState({\n      address:city\n    })\n  }\n\n  render(){\n    return (\n      <>\n        <h2>B\u7ec4\u4ef6</h2>\n         <div>name:{this.state.name},address:{this.state.address}</div>\n      </>\n     \n    )\n  }\n}\n\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"\u6302\u5230\u7ec4\u4ef6(class\u58f0\u660e\u7684\u7ec4\u4ef6)\u4e0a\u7684 ref \u8868\u793a\u5bf9\u7ec4\u4ef6\u5b9e\u4f8b\u7684\u5f15\u7528\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u5728\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0a\u4f7f\u7528 ref \u5c5e\u6027\uff0c\u56e0\u4e3a\u5b83\u4eec\u6ca1\u6709\u5b9e\u4f8b\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u6302\u8f7d\u5230dom\u5143\u7d20\u4e0a\u65f6\u8868\u793a\u5177\u4f53\u7684dom\u5143\u7d20\u8282\u70b9\u3002")),(0,o.kt)("h2",{parentName:"blockquote",id:"\u5b50\u7ec4\u4ef6\u5411\u7236\u7ec4\u4ef6\u4f20\u503c\u56de\u8c03\u51fd\u6570"},"\u5b50\u7ec4\u4ef6\u5411\u7236\u7ec4\u4ef6\u4f20\u503c\uff08\u56de\u8c03\u51fd\u6570\uff09"),(0,o.kt)("p",{parentName:"blockquote"},"\u7236\u7ec4\u4ef6"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class Father extends Component{\n  constructor(props){\n    super(props)\n    this.state = {\n      bgcolor:'pink'\n    }\n  }\n  bgChange(color){\n    this.setState({\n      bgcolor:color\n    })\n  }\n  render(props){\n    <div style={{background:this.state.bgcolor}}>\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  <Children \n    bgcolor={this.state.bgcolor}                   // \u7ed9\u5b50\u7ec4\u4ef6\u4f20\u9012\u7684\u503c color\n    changeColor={(color)=>{this.bgChange(color)}}  // changeColor \u5b50\u7ec4\u4ef6\u7684\u53c2\u6570=color \u5f53\u505a\u5f62\u53c2\n  /> \n                    \n</div>\n")),(0,o.kt)("p",null,"  }\n}"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5b50\u7ec4\u4ef6\n```js\nclass Children extends Component{\n  constructor(props){\n    super(props);\n  }\n  handerClick(){\n    this.props.changeColor('skyblue') // \u6267\u884c\u7236\u7ec4\u4ef6\u7684changeColor \u5e76\u4f20\u53c2 \u5fc5\u987b\u548c\u7236\u7ec4\u4ef6\u4e2d\u7684\u51fd\u6570\u4e00\u6a21\u4e00\u6837\n  }\n  render(){\n    return(\n      <div>\n        \n        <div> \n          \u7236\u7ec4\u4ef6\u7684\u80cc\u666f\u8272{this.props.bgcolor} // \u5b50\u7ec4\u4ef6\u63a5\u6536\u7236\u7ec4\u4ef6\u4f20\u8fc7\u6765\u7684\u503c bgcolor\n        </div> \n        <button \n          onClick={(e)=>{this.handerClick(e)}} // \u5b50\u7ec4\u4ef6\u6267\u884c\u51fd\u6570\n        >\n          \u6539\u53d8\u7236\u7ec4\u4ef6\u80cc\u666f\n        </button> \n      </div>\n    )\n  }\n}\n")),(0,o.kt)("h2",{id:"\u94fe\u63a5"},"\u94fe\u63a5"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5f15\u7528\u5730\u5740\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000021921627"},"react \u4e2d\u7236\u4f20\u5b50\uff0c\u5b50\u4f20\u7236\uff0c\u4ee5\u53ca\u5144\u5f1f\u7ec4\u4ef6\u4f20\u53c2\u95ee\u9898"))))}u.isMDXComponent=!0}}]);