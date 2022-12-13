"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6887],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=l,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(7294),l=r(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,i),hidden:r},t)}},5488:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(7462),l=r(7294),a=r(6010),i=r(2389),o=r(7392),u=r(7094),s=r(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r;const{lazy:i,block:p,defaultValue:m,values:b,groupId:g,className:f}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,o.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)?t:v[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,u.U)(),[O,x]=(0,l.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=g){const e=k[g];null!=e&&e!==O&&h.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,r=E.indexOf(t),n=h[r].value;n!==O&&(C(t),x(n),null!=g&&T(g,String(n)))},N=e=>{var t;let r=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;r=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var l;const t=E.indexOf(e.currentTarget)-1;r=null!=(l=E[t])?l:E[E.length-1];break}}null==(t=r)||t.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},f)},h.map((e=>{let{value:t,label:r,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:N,onClick:j},i,{className:(0,a.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),i?(0,l.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return l.createElement(p,(0,n.Z)({key:String(t)},e))}},329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),l=(r(7294),r(3905)),a=r(5488),i=r(5162);const o={sidebar_position:5},u="Client Builder",s={unversionedId:"getting-started/client-builder",id:"version-1.x/getting-started/client-builder",title:"Client Builder",description:"All Features",source:"@site/versioned_docs/version-1.x/getting-started/client-builder.mdx",sourceDirName:"getting-started",slug:"/getting-started/client-builder",permalink:"/getting-started/client-builder",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/getting-started/client-builder.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-1.x-docs",previous:{title:"Installation",permalink:"/getting-started/installation"},next:{title:"Support",permalink:"/getting-started/support"}},c={},d=[{value:"All Features",id:"all-features",level:2},{value:"Logging",id:"logging",level:2}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"client-builder"},"Client Builder"),(0,l.kt)("h2",{id:"all-features"},"All Features"),(0,l.kt)("p",null,"Initialize the Twitch4J Client and specify which modules you want to use:"),(0,l.kt)(a.default,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"TwitchClient twitchClient = TwitchClientBuilder.builder()\n            .withEnableHelix(true)\n            .build();\n"))),(0,l.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val twitchClient = TwitchClientBuilder.builder()\n            .withEnableHelix(true)\n            .build()\n"))),(0,l.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"def twitchClient = TwitchClientBuilder.builder()\n            .withEnableHelix(true)\n            .build()\n")))),(0,l.kt)("h2",{id:"logging"},"Logging"),(0,l.kt)("p",null,"Please check out ",(0,l.kt)("a",{parentName:"p",href:"./logging"},"Logging")," on how to set up logging."))}m.isMDXComponent=!0}}]);