"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[1139],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return t?o.createElement(g,a(a({ref:n},d),{},{components:t})):o.createElement(g,a({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=p;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,a[1]=r;for(var c=2;c<s;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},28252:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(87462),i=(t(67294),t(3905));const s={},a=void 0,r={unversionedId:"\u524d\u7aef\u57fa\u7840/DEMO/\u5217\u8868\u62d6\u62fd/Taro\u7248",id:"\u524d\u7aef\u57fa\u7840/DEMO/\u5217\u8868\u62d6\u62fd/Taro\u7248",title:"Taro\u7248",description:"\u4f7f\u7528 MovableArea\u4e0eMovableView",source:"@site/docs/\u524d\u7aef\u57fa\u7840/DEMO/\u5217\u8868\u62d6\u62fd/Taro\u7248.md",sourceDirName:"\u524d\u7aef\u57fa\u7840/DEMO/\u5217\u8868\u62d6\u62fd",slug:"/\u524d\u7aef\u57fa\u7840/DEMO/\u5217\u8868\u62d6\u62fd/Taro\u7248",permalink:"/docs/\u524d\u7aef\u57fa\u7840/DEMO/\u5217\u8868\u62d6\u62fd/Taro\u7248",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u524d\u7aef\u57fa\u7840/DEMO/\u5217\u8868\u62d6\u62fd/Taro\u7248.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9009\u62e9\u5668",permalink:"/docs/\u524d\u7aef\u57fa\u7840/CSS/\u9009\u62e9\u5668"},next:{title:"\u539f\u7406",permalink:"/docs/\u524d\u7aef\u57fa\u7840/DEMO/\u5217\u8868\u62d6\u62fd/\u539f\u7406"}},l={},c=[{value:"\u65b9\u6cd5\u4e8c\uff08\u63a8\u8350\uff09",id:"\u65b9\u6cd5\u4e8c\u63a8\u8350",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"FAQ",id:"faq",level:2}],d={toc:c};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"MovableArea"),"\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"MovableView")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useEffect, useState } from "react";\nimport { MovableArea, MovableView, View } from "@tarojs/components";\n\nexport default () => {\n  const [changeId, setChangeId] = useState();\n  const [initData, setInitData] = useState([]);\n  const [dragList, setDragList] = useState([]);\n\n  const initMove = () => {\n    const setY = (index) => {\n      let y = 0;\n      let _data = dragList.slice(0, index);\n      _data.forEach((item) => {\n        y += item.height;\n      });\n      y /= 2;\n      return y;\n    };\n    setInitData(\n      dragList.map((item, index) => {\n        if (index) {\n          item.y = setY(index);\n        } else {\n          item.y = 0;\n        }\n        return item;\n      })\n    );\n  };\n  useEffect(() => {\n    setDragList([\n      {\n        id: 0,\n        height: 100,\n        color: "red",\n        y: 0,\n      },\n      {\n        id: 1,\n        height: 50,\n        color: "pink",\n        y: 0,\n      },\n      {\n        id: 2,\n        height: 200,\n        color: "blue",\n        y: 0,\n      },\n      {\n        id: 3,\n        height: 300,\n        color: "gray",\n        y: 0,\n      },\n    ]);\n  }, []);\n\n  useEffect(() => {\n    let time = setTimeout(() => {\n      initMove();\n    }, 1000);\n    return () => {\n      clearTimeout(time);\n    };\n  }, [dragList]);\n\n  return (\n    <>\n      <MovableArea style="height: 600px; width:350px; background: #00bcd2;">\n        {initData.map((item) => {\n          return (\n            <MovableView\n              onChange={(e) => {\n                setChangeId(item.id);\n                setDragList(\n                  dragList\n                    .map((_item) => {\n                      if (_item.id == item.id) {\n                        _item.y = e.detail.y;\n                      }\n                      return _item;\n                    })\n                    .sort((a, b) => a.y - b.y)\n                );\n              }}\n              out-of-bounds\n              direction="vertical"\n              animation={false}\n              y={item.y}\n              style={{\n                width: "750rpx",\n                height: item.height + "rpx",\n                backgroundColor: item.color,\n                zIndex: item.id == changeId ? 2 : 1,\n              }}\n            >\n              <View>id: {item.id}</View>\n            </MovableView>\n          );\n        })}\n      </MovableArea>\n    </>\n  );\n};\n')),(0,i.kt)("h2",{id:"\u65b9\u6cd5\u4e8c\u63a8\u8350"},"\u65b9\u6cd5\u4e8c\uff08\u63a8\u8350\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useEffect, useState } from "react";\nimport Taro from "@tarojs/taro";\nimport {\n  View,\n  MovableArea,\n  MovableView,\n  Image,\n  Text,\n} from "@tarojs/components";\nimport styles from "./index.module.less";\n// Store\nimport { ListStore } from "../store";\nimport { useReachBottom } from "@tarojs/taro";\nimport { listDramas } from "@utils/request/opusmanage";\n\n// \u9879\u9ad8\u5ea6\nconst itemHeight = 100;\n// \u5047\u6570\u636e\u751f\u6210\u5668\nconst getItems = (count) =>\n  Array.from({ length: count }, (v, index) => index).map((index) => ({\n    id: `${index}`,\n    top: `${index * itemHeight}`,\n    left: 0,\n    content: `\u5185\u5bb9${index}`,\n  }));\n\n// \u91cd\u65b0\u6392\u5e8f\u7ed3\u679c\nconst reorder = (list, startIndex, endIndex) => {\n  const result = Array.from(list);\n  const [removed] = result.splice(startIndex, 1);\n  result.splice(endIndex, 0, removed);\n\n  return result;\n};\n\nexport default function opusFeed3(props) {\n  const { listId } = props;\n  // \u5217\u8868\u6570\u636e\n  const useListStore = ListStore.useContainer();\n  const { listStates, changeListStates } = useListStore;\n  // \u4f5c\u54c1\u5217\u8868\n  const { opusFeedList, pagination } = listStates;\n  // \u4e0b\u62c9\u52a0\u8f7d\n  const { current, pageSize, total } = pagination;\n  const [hasData, setHasData] = useState(true);\n  // \u5f00\u542f\u62d6\u62fd\n  const [isDrap, setIsDrap] = useState(false);\n  // \u8bbe\u7f6e\u5f53\u524d\u9009\u4e2dIndex\n  const [changeIndex, setChangeIndex] = useState(-1);\n  const [state, setState] = useState([]);\n  const [listHeight, setListHeight] = useState(0);\n\n  // fetch\n  useEffect(() => {\n    // setState(getItems(4))\n    const opusFeedList2 = opusFeedList;\n    // \u5217\u8868\u6392\u5e8f\n    opusFeedList2.forEach((item, index) => {\n      item.y = index * itemHeight;\n    });\n    setState([...opusFeedList2]);\n  }, [opusFeedList]);\n\n  // \u8ba1\u7b97\u5217\u8868\u603b\u9ad8\u5ea6\n  useEffect(() => {\n    const length = state.length;\n    const height = length * 100;\n    setListHeight(height);\n  }, [state]);\n\n  // \u957f\u6309\uff1a\u533a\u5206\u6ed1\u52a8\u548c\u62d6\u62fd\n  const onLongPress = (e, i) => {\n    console.log("longPress");\n    // \u8bbe\u7f6e\u5f53\u524d\u9879\n    setChangeIndex(i);\n    setIsDrap(true);\n  };\n\n  // \u8bb0\u5f55\u4e0a\u6b21\u7684\u4f4d\u7f6e\n  const onTouchStart = (e) => {\n    e.preventDefault();\n  };\n\n  // \u6dfb\u52a0\u9650\u5236\uff1a\u7531\u4e8e\u5feb\u901f\u9519\u62fd\u51fa\u5c4f\u5e55touchend\u540e\u4e0d\u89e6\u53d1\uff0c\u9700\u8981\u5f3a\u5236\u6253\u65ad\n  const onTouchMove = (e) => {};\n\n  // \u89e6\u6478\u7ed3\u675f\n  const onTouchEnd = (e, index) => {\n    console.log("onTouchEnd", "\u662f\u5426\u62d6\u62fd\uff1a", isDrap);\n\n    if (!isDrap) return;\n\n    const query = Taro.createSelectorQuery();\n    query.select(`.demoDOM_${index}`).boundingClientRect();\n    query.selectViewport().scrollOffset();\n    query.exec(function (res) {\n      const { top } = res[0];\n      const { scrollTop } = res[1];\n\n      console.log("\u5f53\u524d\u7d22\u5f15", index);\n      // \u52a8\u6001\u7d22\u5f15\n      let updateIndex = Math.round(top / 100);\n      console.log("updateIndex", updateIndex);\n      // \u79fb\u9664\u7d22\u5f15\uff08\u79fb\u9664\u5217\u8868\u6709\u51e0\u4e2a\u5143\u7d20\uff09\n      let outListIndex = Math.round(scrollTop / 100);\n      console.log("listOutIndex", outListIndex);\n      // \u8ba1\u7b97\uff1a\u79fb\u52a8\u5230\u76ee\u6807\u7d22\u5f15\n      const moveIndex = updateIndex + outListIndex - 1;\n      console.log("moveIndex", moveIndex);\n\n      // \u5f02\u6b65\u4fdd\u5e95\uff1a\u5f3a\u5236\u5f02\u6b65\u6267\u884c\n      if (moveIndex === index) {\n        console.log("\u4e0d\u66ff\u6362");\n\n        const state2 = JSON.parse(JSON.stringify(state));\n        const [removed] = state2.splice(index, 1);\n        setState([...state2]);\n\n        setTimeout(() => {\n          const state3 = JSON.parse(JSON.stringify(state));\n          state3.splice(index, 0, removed);\n          setState([...state]);\n        }, 10);\n      } else {\n        console.log("\u66ff\u6362");\n        // \u8282\u70b9\u66ff\u6362\n        let state2 = reorder(state, index, moveIndex);\n\n        // \u5217\u8868\u6392\u5e8f\n        state2.forEach((item, index) => {\n          item.y = index * itemHeight;\n        });\n\n        // \u6e32\u67d3\u603b\u72b6\u6001\u5217\u8868\n        changeListStates({ opusFeedList: [...state2] });\n      }\n    });\n\n    setIsDrap(false);\n    setChangeIndex(-1);\n  };\n\n  // \u4e0b\u62c9\u5237\u65b0\n  const loadMoreData = async () => {\n    if (pageSize * current < total) {\n      console.log("\u52a0\u8f7d\u66f4\u591a");\n\n      try {\n        const obj = {\n          pagination: {\n            pageSize: 10,\n            current: current,\n          },\n          query: {\n            listId,\n          },\n          sort: {\n            type: "asc",\n            key: "update_time",\n          },\n        };\n        const data = await listDramas({ obj });\n\n        if (data?.list.length > 0) {\n          data.list.forEach((item, index) => {\n            item["choose"] = false;\n            item["id"] = index;\n            item["height"] = itemHeight;\n            item["y"] = index * itemHeight;\n          });\n          // \u8bbe\u7f6e\u4e3a\u4e0b\u4e00\u9875\n          pagination.current = pagination.current + 1;\n\n          const opusFeedList2 = opusFeedList.concat(data.list);\n\n          // \u5217\u8868\u6392\u5e8f\n          opusFeedList2.forEach((item, index) => {\n            item.y = index * itemHeight;\n          });\n\n          changeListStates({\n            opusFeedList: opusFeedList2,\n            pagination: pagination,\n          });\n        }\n      } catch (error) {\n        console.log("error", error);\n      }\n    } else {\n      console.log("\u5230\u5e95");\n      if (opusFeedList.length === total) {\n        setHasData(false);\n      } else {\n        const num = total - opusFeedList.length;\n        console.log("num", num);\n\n        try {\n          const obj = {\n            pagination: {\n              pageSize: num,\n              current: current,\n            },\n            query: {\n              listId,\n            },\n            sort: {\n              type: "asc",\n              key: "update_time",\n            },\n          };\n\n          const data = await listDramas({ obj });\n\n          if (data?.list.length > 0) {\n            data.list.forEach((item, index) => {\n              item["choose"] = false;\n              item["id"] = index;\n              item["height"] = itemHeight;\n              item["y"] = index * itemHeight;\n            });\n            // \u8bbe\u7f6e\u4e3a\u4e0b\u4e00\u9875\n            pagination.current = pagination.current + 1;\n\n            const opusFeedList2 = opusFeedList.concat(data.list);\n            // \u5217\u8868\u6392\u5e8f\n            opusFeedList2.forEach((item, index) => {\n              item.y = index * itemHeight;\n            });\n\n            changeListStates({\n              opusFeedList: opusFeedList2,\n              pagination: pagination,\n            });\n          }\n        } catch (error) {\n          console.log("error", error);\n        }\n        setHasData(false);\n      }\n    }\n  };\n  // \u76d1\u542c\u6eda\u52a8\u5e95\u90e8\n  useReachBottom(() => {\n    if (!hasData) {\n      return false;\n    }\n    loadMoreData();\n  });\n\n  const handleToggleItem = (index) => {\n    const opusFeedList2 = opusFeedList;\n    opusFeedList2.forEach((item, i) => {\n      if (index === i) {\n        item.choose = !item.choose;\n      }\n    });\n\n    changeListStates({ opusFeedList: [...opusFeedList2] });\n  };\n\n  return (\n    <View className={styles.pageBody}>\n      <MovableArea\n        style={{\n          height: listHeight,\n          width: "100%",\n        }}\n        className={`${styles.moveArea}`}\n      >\n        {state.map((item, index) => {\n          return (\n            <MovableView\n              style={{\n                width: "100%",\n                height: item.height,\n                zIndex: index === changeIndex ? 2 : 1,\n                backgroundColor: index === changeIndex ? "#fff" : "",\n              }}\n              className={`${styles.moveView} demoDOM_${index} `}\n              key={`${item.dramaId}_${index}`} // \u5fc5\u987b\u552f\u4e00\uff1a\u968f\u673a\u503c\n              direction="vertical"\n              x={0}\n              y={item.y}\n              onLongPress={(e) => onLongPress(e, index)}\n              onTouchStart={(e) => onTouchStart(e)}\n              onTouchMove={onTouchMove}\n              onTouchEnd={(e) => onTouchEnd(e, index)}\n              animation={false}\n              disabled={!isDrap}\n            >\n              <View\n                onClick={() => handleToggleItem(index)}\n                className={styles.item}\n              >\n                <View className={`${styles.opusFeed} `}>\n                  <View\n                    className={`${styles.opusOption} ${\n                      item.choose ? styles.opusActive : ""\n                    }`}\n                  />\n                  <View\n                    className={`${styles.opusFeedRight}`}\n                    style={{\n                      borderBottom:\n                        index === changeIndex ? "" : "1px solid #E8E8E8",\n                    }}\n                  >\n                    <View className={styles.opusImgWrap}>\n                      <Image\n                        className={styles.opusImg}\n                        mode="aspectFill"\n                        src={JSON.parse(item?.coverImage)[0]}\n                      />\n                    </View>\n\n                    <View className={styles.opusTitle}>\n                      <Text className={styles.opusTitleText}>\n                        {item?.title}\n                      </Text>\n                    </View>\n                    <View className={`${styles.opusMenu} handler`} />\n                  </View>\n                </View>\n              </View>\n            </MovableView>\n          );\n        })}\n      </MovableArea>\n    </View>\n  );\n}\n')),(0,i.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/z1z2z345/article/details/122964150"},"\u4f7f\u7528 taro \u5b8c\u6210\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u62d6\u62fd\u6392\u5e8f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_30109365/article/details/113567291"},"taro \u5c0f\u7a0b\u5e8f\u62d6\u62fd\u6548\u679c\u6e90\u7801"))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/NervJS/taro/issues/6382"},"[Taro next] \u904d\u5386 MovableView\uff0c\u5220\u9664\u4e2d\u95f4\u67d0\u9879\uff0c\u8868\u73b0\u4e0d\u7b26\u9884\u671f")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.csdn.net/lunahaijiao/article/details/86576845"},"Taro \u5c0f\u7a0b\u5e8f\u62d6\u62fd\u6392\u5e8f"))))}u.isMDXComponent=!0}}]);