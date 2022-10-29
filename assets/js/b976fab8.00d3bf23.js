"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(7462),r=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:b,values:m,groupId:v,className:f}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===b?b:null!=(t=null!=b?b:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:E}=(0,s.U)(),[T,N]=(0,r.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==T&&g.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==T&&(O(t),N(a),null!=v&&E(v,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},f)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:x,onClick:S},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function b(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4827:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={sidebar_position:50},s="Topic - Sub Gift Events",u={unversionedId:"pubsub/topic-sub-gift-events",id:"version-1.x/pubsub/topic-sub-gift-events",title:"Topic - Sub Gift Events",description:"Description",source:"@site/versioned_docs/version-1.x/pubsub/topic-sub-gift-events.mdx",sourceDirName:"pubsub",slug:"/pubsub/topic-sub-gift-events",permalink:"/pubsub/topic-sub-gift-events",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/pubsub/topic-sub-gift-events.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"version-1.x-docs",previous:{title:"Topic - Raid Events",permalink:"/pubsub/topic-raid-events"},next:{title:"Topic - Subscribe Events",permalink:"/pubsub/topic-subscribe-events"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2}],d={toc:p};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"topic---sub-gift-events"},"Topic - Sub Gift Events"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This topic can be used to monitor sub gift activity in a specified channel."),(0,r.kt)("p",null,"Unlike the documented Channel Subscriptions topic (fires many events upon a multi-target gift), this allows one to know how many subs were gifted in a single event.\nThe documented analog to this topic is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"TwitchChat")," module."),(0,r.kt)("p",null,"With all undocumented topics, use at your own risk."),(0,r.kt)("h2",{id:"method-definition"},"Method Definition"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"credential"),(0,r.kt)("td",{parentName:"tr",align:"center"},"OAuth2Credential"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Auth Token (may not necessarily be required)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Target Channel Id")))),(0,r.kt)("h2",{id:"code-snippets"},"Code-Snippets"),(0,r.kt)("p",null,"Subscribe to all sub gift events in channel ",(0,r.kt)("inlineCode",{parentName:"p"},"twitch4j")," and register a listener that prints all messages to console"),(0,r.kt)(i.default,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(l.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'twitchClient.getPubSub().listenForChannelSubGiftsEvents(credential, "149223493");\n\ntwitchClient.getEventManager().onEvent(ChannelSubGiftEvent.class, System.out::println);\n'))),(0,r.kt)(l.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'twitchClient.pubSub.listenForChannelSubGiftsEvents(credential, "149223493")\n\ntwitchClient.eventManager.onEvent(ChannelSubGiftEvent::class.java, System.out::println)\n'))),(0,r.kt)(l.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'twitchClient.pubSub.listenForChannelSubGiftsEvents(credential, "149223493")\n\ntwitchClient.eventManager.onEvent(ChannelSubGiftEvent, System.out::println)\n')))))}b.isMDXComponent=!0}}]);