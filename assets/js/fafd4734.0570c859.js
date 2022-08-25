"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1090],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>p});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function d(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):d(d({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,f=m["".concat(c,".").concat(p)]||m[p]||u[p]||o;return r?t.createElement(f,d(d({ref:n},l),{},{components:r})):t.createElement(f,d({ref:n},l))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,d=new Array(o);d[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,d[1]=i;for(var s=2;s<o;s++)d[s]=r[s];return t.createElement.apply(null,d)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42106:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const o={},d=void 0,i={unversionedId:"\u4f9d\u8d56\u5305/\u62d6\u62fd/react-dnd/QuickStart",id:"\u4f9d\u8d56\u5305/\u62d6\u62fd/react-dnd/QuickStart",title:"QuickStart",description:"Index",source:"@site/docs/\u4f9d\u8d56\u5305/\u62d6\u62fd/react-dnd/QuickStart.md",sourceDirName:"\u4f9d\u8d56\u5305/\u62d6\u62fd/react-dnd",slug:"/\u4f9d\u8d56\u5305/\u62d6\u62fd/react-dnd/QuickStart",permalink:"/docs/\u4f9d\u8d56\u5305/\u62d6\u62fd/react-dnd/QuickStart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u4f9d\u8d56\u5305/\u62d6\u62fd/react-dnd/QuickStart.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/\u4f9d\u8d56\u5305/\u62d6\u62fd/react-dnd/FAQ"},next:{title:"[reactDnd](https://github.com/react-dnd/react-dnd/)",permalink:"/docs/\u4f9d\u8d56\u5305/\u62d6\u62fd/react-dnd/reactDnd"}},c={},s=[{value:"Index",id:"index",level:2},{value:"Example",id:"example",level:2},{value:"Card",id:"card",level:2}],l={toc:s};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"index"},"Index"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import React, { useState, useCallback } from "react";\nimport styles from "./index.module.less";\nimport { errorBoundary } from "@utils/errorBoundary/index";\n// \u62d6\u62fd\nimport { DndProvider } from "react-dnd";\n// import { HTML5Backend } from "react-dnd-html5-backend"; // Html\nimport { TouchBackend } from "react-dnd-touch-backend"; // Native\nimport Example from "./example";\n\nconst Index = () => {\n  return (\n    <div>\n      <div className={styles.title}>\u62d6\u62fd\u7ec4\u4ef6</div>\n      <DndProvider backend={TouchBackend}>\n        <Example />\n      </DndProvider>\n    </div>\n  );\n};\n\nexport default errorBoundary(Index);\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import React, { useEffect, useState, useCallback } from "react";\nimport styles from "./index.module.less";\nimport { errorBoundary } from "@utils/errorBoundary/index";\nimport update from "immutability-helper";\nimport Card from "./card";\n\ninterface Item {\n  id: number;\n  text: string;\n}\n\nconst style = {\n  width: 400,\n};\n\nconst Example = () => {\n  const [cards, setCards] = useState([\n    {\n      id: 1,\n      text: "Write a cool JS library",\n    },\n    {\n      id: 2,\n      text: "Make it generic enough",\n    },\n    {\n      id: 3,\n      text: "Write README",\n    },\n    {\n      id: 4,\n      text: "Create some examples",\n    },\n    {\n      id: 5,\n      text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",\n    },\n    {\n      id: 6,\n      text: "???",\n    },\n    {\n      id: 7,\n      text: "PROFIT",\n    },\n  ]);\n\n  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {\n    setCards((prevCards: Item[]) =>\n      update(prevCards, {\n        $splice: [\n          [dragIndex, 1],\n          [hoverIndex, 0, prevCards[dragIndex] as Item],\n        ],\n      })\n    );\n  }, []);\n\n  const renderCard = useCallback(\n    (card: { id: number; text: string }, index: number) => {\n      return (\n        <Card\n          key={card.id}\n          index={index}\n          id={card.id}\n          text={card.text}\n          moveCard={moveCard}\n        />\n      );\n    },\n    []\n  );\n\n  return (\n    <div>\n      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>\n    </div>\n  );\n};\n\nexport default errorBoundary(Example);\n')),(0,a.kt)("h2",{id:"card"},"Card"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect, useState, useCallback,useRef } from 'react'\nimport styles from './index.module.less'\nimport { errorBoundary } from '@utils/errorBoundary/index'\nimport type { Identifier, XYCoord } from 'dnd-core'\nimport { useDrag, useDrop } from 'react-dnd'\n\n\nconst ItemTypes = {\n  CARD: 'card',\n}\n\ninterface CardProps {\n  id: any\n  text: string\n  index: number\n  moveCard: (dragIndex: number, hoverIndex: number) => void\n}\n\ninterface DragItem {\n  index: number\n  id: string\n  type: string\n}\n\nconst style = {\n  border: '1px dashed gray',\n  padding: '0.5rem 1rem',\n  marginBottom: '.5rem',\n  backgroundColor: 'white',\n  cursor: 'move',\n}\n\nconst Card = (props:CardProps) => {\n  const {id, text, index, moveCard } = props\n\n  const ref = useRef<HTMLDivElement>(null)\n\n\n  const [{ handlerId }, drop] = useDrop<DragItem,void,{ handlerId: Identifier | null }>(\n    {\n        accept: ItemTypes.CARD,\n        collect(monitor) {\n          return {\n            handlerId: monitor.getHandlerId(),\n          }\n        },\n          hover(item: DragItem, monitor) {\n            if (!ref.current) {\n              return\n            }\n            const dragIndex = item.index\n            const hoverIndex = index\n\n            //\u4e0d\u8981\u7528\u9879\u76ee\u672c\u8eab\u66ff\u6362\u9879\u76ee\n            if (dragIndex === hoverIndex) {\n              return\n            }\n\n            // \u786e\u5b9a\u5c4f\u5e55\u4e0a\u7684\u77e9\u5f62\n            const hoverBoundingRect = ref.current?.getBoundingClientRect()\n\n            // \u83b7\u53d6\u5782\u76f4\u4e2d\u95f4\n            const hoverMiddleY =\n              (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2\n\n            // \u786e\u5b9a\u9f20\u6807\u4f4d\u7f6e\n            const clientOffset = monitor.getClientOffset()\n\n            // \u5c06\u50cf\u7d20\u7f6e\u4e8e\u9876\u90e8\n            const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top\n\n            // \u4ec5\u5f53\u9f20\u6807\u8d8a\u8fc7\u9879\u76ee\u9ad8\u5ea6\u7684\u4e00\u534a\u65f6\u624d\u6267\u884c\u79fb\u52a8\n            // \u5411\u4e0b\u62d6\u52a8\u65f6\uff0c\u4ec5\u5728\u5149\u6807\u4f4e\u4e8e50%\u65f6\u79fb\u52a8\n            // \u5411\u4e0a\u62d6\u52a8\u65f6\uff0c\u4ec5\u5728\u5149\u6807\u9ad8\u4e8e50%\u65f6\u79fb\u52a8\n\n            // \u5411\u4e0b\u62d6\u52a8\n            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {\n              return\n            }\n\n            // \u5411\u4e0a\u62d6\u52a8\n            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {\n              return\n            }\n\n            // \u5b9e\u9645\u6267\u884c\u64cd\u4f5c\n            moveCard(dragIndex, hoverIndex)\n\n            // \u6ce8\u610f\uff1a\u6211\u4eec\u5728\u8fd9\u91cc\u4fee\u6539\u76d1\u63a7\u9879\uff01\n            // \u4e00\u822c\u6765\u8bf4\uff0c\u6700\u597d\u907f\u514d\u7a81\u53d8\n            // \u907f\u514d\u4e0d\u5fc5\u8981\u7684\u7d22\u5f15\u641c\u7d22\n            item.index = hoverIndex\n          },\n        })\n\n  const [{ isDragging }, drag] = useDrag({\n    type: ItemTypes.CARD,\n    item: () => {\n      return { id, index }\n    },\n    collect: (monitor: any) => ({\n      isDragging: monitor.isDragging(),\n    }),\n  })\n\n\n  // \u6267\u884c\u62d6\u62fd\n  drag(drop(ref))\n\n  const opacity = isDragging ? 0.5 : 1\n  return (\n    <div\n    style={{ ...style, opacity }}\n\n    data-handler-id={handlerId}\n    ref={ref}>\n      {text}\n    </div>\n  )\n}\n\nexport default errorBoundary(Card)\n")))}u.isMDXComponent=!0}}]);