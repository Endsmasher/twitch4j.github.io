"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(7462),a=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:b,groupId:v,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,o.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[E,T]=(0,a.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==E&&g.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=O.indexOf(t),r=g[n].value;r!==E&&(x(t),T(r),null!=v&&N(v,String(r)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{var r;const t=O.indexOf(e.currentTarget)+1;n=null!=(r=O[t])?r:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},h)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>O.push(e),onKeyDown:C,onClick:j},l,{className:(0,i.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},7627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),i=n(5488),l=n(5162);const o={sidebar_position:50},s="Topic - Friendship Events",u={unversionedId:"pubsub/topic-friendship-events",id:"version-1.x/pubsub/topic-friendship-events",title:"Topic - Friendship Events",description:"Description",source:"@site/versioned_docs/version-1.x/pubsub/topic-friendship-events.mdx",sourceDirName:"pubsub",slug:"/pubsub/topic-friendship-events",permalink:"/pubsub/topic-friendship-events",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/pubsub/topic-friendship-events.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"version-1.x-docs",previous:{title:"Topic - Following Events",permalink:"/pubsub/topic-following-events"},next:{title:"Topic - Hype Train Events",permalink:"/pubsub/topic-hype-train-events"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"topic---friendship-events"},"Topic - Friendship Events"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This topic can be used to monitor changes to the friendship state of a specified user with others."),(0,a.kt)("p",null,"Possible friendship changes include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Requested"),(0,a.kt)("li",{parentName:"ul"},"Rejected"),(0,a.kt)("li",{parentName:"ul"},"Accepted"),(0,a.kt)("li",{parentName:"ul"},"Removed"),(0,a.kt)("li",{parentName:"ul"},"and self variants (i.e. when this account itself is responsible for the change rather than the other entity)")),(0,a.kt)("p",null,"With all undocumented topics, use at your own risk."),(0,a.kt)("h2",{id:"method-definition"},"Method Definition"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"credential"),(0,a.kt)("td",{parentName:"tr",align:"center"},"OAuth2Credential"),(0,a.kt)("td",{parentName:"tr",align:"right"},"User Auth Token for the target user id, with the scope ",(0,a.kt)("inlineCode",{parentName:"td"},"user_friends_read"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userId"),(0,a.kt)("td",{parentName:"tr",align:"center"},"String"),(0,a.kt)("td",{parentName:"tr",align:"right"},"Target User Id")))),(0,a.kt)("h2",{id:"code-snippets"},"Code-Snippets"),(0,a.kt)("p",null,"Subscribe to friendship events for user twitch4j and register a listener that prints all messages to console"),(0,a.kt)(i.default,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(l.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'twitchClient.getPubSub().listenForFriendshipEvents(credential, "149223493");\n\ntwitchClient.getEventManager().onEvent(FriendshipEvent.class, System.out::println);\n'))),(0,a.kt)(l.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'twitchClient.pubSub.listenForFriendshipEvents(credential, "149223493");\n\ntwitchClient.eventManager.onEvent(FriendshipEvent::class.java, System.out::println)\n'))),(0,a.kt)(l.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'twitchClient.pubSub.listenForFriendshipEvents(credential, "149223493");\n\ntwitchClient.eventManager.onEvent(FriendshipEvent, System.out::println)\n')))))}m.isMDXComponent=!0}}]);