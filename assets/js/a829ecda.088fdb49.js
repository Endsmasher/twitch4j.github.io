"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=l,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(7294),l=n(6010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(a,i),hidden:n},t)}},5488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(7462),l=n(7294),a=n(6010),i=n(2389),o=n(7392),u=n(7094),s=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:i,block:p,defaultValue:m,values:b,groupId:g,className:f}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==w&&!h.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,u.U)(),[O,x]=(0,l.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=g){const e=k[g];null!=e&&e!==O&&h.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==O&&(C(t),x(r),null!=g&&T(g,String(r)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=E.indexOf(e.currentTarget)+1;n=null!=(r=E[t])?r:E[0];break}case"ArrowLeft":{var l;const t=E.indexOf(e.currentTarget)-1;n=null!=(l=E[t])?l:E[E.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,a.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":p},f)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:N,onFocus:j,onClick:j},i,{className:(0,a.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,i.Z)();return l.createElement(p,(0,r.Z)({key:String(t)},e))}},329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),l=(n(7294),n(3905)),a=n(5488),i=n(5162);const o={sidebar_position:5},u="Client Builder",s={unversionedId:"getting-started/client-builder",id:"version-1.x/getting-started/client-builder",title:"Client Builder",description:"All Features",source:"@site/versioned_docs/version-1.x/getting-started/client-builder.mdx",sourceDirName:"getting-started",slug:"/getting-started/client-builder",permalink:"/getting-started/client-builder",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/getting-started/client-builder.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-1.x-docs",previous:{title:"Installation",permalink:"/getting-started/installation"},next:{title:"Support",permalink:"/getting-started/support"}},c={},d=[{value:"All Features",id:"all-features",level:2},{value:"Logging",id:"logging",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"client-builder"},"Client Builder"),(0,l.kt)("h2",{id:"all-features"},"All Features"),(0,l.kt)("p",null,"Initialize the Twitch4J Client and specify which modules you want to use:"),(0,l.kt)(a.default,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"TwitchClient twitchClient = TwitchClientBuilder.builder()\n            .withEnableHelix(true)\n            .build();\n"))),(0,l.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val twitchClient = TwitchClientBuilder.builder()\n            .withEnableHelix(true)\n            .build()\n"))),(0,l.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"def twitchClient = TwitchClientBuilder.builder()\n            .withEnableHelix(true)\n            .build()\n")))),(0,l.kt)("h2",{id:"logging"},"Logging"),(0,l.kt)("p",null,"Please check out ",(0,l.kt)("a",{parentName:"p",href:"./logging"},"Logging")," on how to set up logging."))}m.isMDXComponent=!0}}]);