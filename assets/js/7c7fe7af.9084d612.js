"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1561],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return n?l.createElement(v,i(i({ref:t},c),{},{components:n})):l.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(7294),a=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(7462),a=n(7294),r=n(6010),i=n(2389),o=n(7392),u=n(7094),s=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:i,block:p,defaultValue:m,values:v,groupId:h,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:b.map((e=>{let{props:{value:t,label:n,attributes:l}}=e;return{value:t,label:n,attributes:l}})),y=(0,o.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:T}=(0,u.U)(),[C,E]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=h){const e=w[h];null!=e&&e!==C&&g.some((t=>t.value===e))&&E(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),l=g[n].value;l!==C&&(N(t),E(l),null!=h&&T(h,String(l)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var l;const t=x.indexOf(e.currentTarget)+1;n=null!=(l=x[t])?l:x[0];break}case"ArrowLeft":{var a;const t=x.indexOf(e.currentTarget)-1;n=null!=(a=x[t])?a:x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},f)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:j,onFocus:O,onClick:O},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(b.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,i.Z)();return a.createElement(p,(0,l.Z)({key:String(t)},e))}},2626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var l=n(7462),a=(n(7294),n(3905)),r=n(5488),i=n(5162);const o={sidebar_position:100},u="Client Helper",s={unversionedId:"getting-started/client-helper",id:"version-1.x/getting-started/client-helper",title:"Client Helper",description:"The Twitch4J Client Helper aims to bundle some common code used by library users to prevent everyone from reinventing the wheel ;)",source:"@site/versioned_docs/version-1.x/getting-started/client-helper.mdx",sourceDirName:"getting-started",slug:"/getting-started/client-helper",permalink:"/getting-started/client-helper",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/getting-started/client-helper.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"version-1.x-docs",previous:{title:"Proxy Support",permalink:"/getting-started/proxy"},next:{title:"Chat",permalink:"/chat/"}},c={},d=[{value:"Default Credential",id:"default-credential",level:2},{value:"Register for Stream GoLive / GoOffline / GameChange / TitleChange Events",id:"register-for-stream-golive--gooffline--gamechange--titlechange-events",level:2},{value:"Register for Follow Event",id:"register-for-follow-event",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client-helper"},"Client Helper"),(0,a.kt)("p",null,"The Twitch4J Client Helper aims to bundle some common code used by library users to prevent everyone from reinventing the wheel ;)"),(0,a.kt)("p",null,"Current Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Event: StreamGoLiveEvent / StreamGoOffflineEvent / StreamChangeGameEvent / StreamChangeTitleEvent"),(0,a.kt)("li",{parentName:"ul"},"Event: FollowEvent")),(0,a.kt)("p",null,"Those methods require the ",(0,a.kt)("inlineCode",{parentName:"p"},"Helix Module"),", so enable it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TwitchClientBuilder"),"."),(0,a.kt)("h2",{id:"default-credential"},"Default Credential"),(0,a.kt)("p",null,"When using the client helper, you will need to specify a default credential (any) that gets used for all requests for increased ratelimits, this is mandatory!"),(0,a.kt)(r.default,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'TwitchClient twitchClient = TwitchClientBuilder.builder()\n    .withDefaultAuthToken(new OAuth2Credential("twitch", "oauthtokenhere"))\n    .build();\n'))),(0,a.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val twitchClient = TwitchClientBuilder.builder()\n    .withDefaultAuthToken(OAuth2Credential("twitch", "oauthtokenhere"))\n    .build();\n'))),(0,a.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'def twitchClient = TwitchClientBuilder.builder()\n    .withDefaultAuthToken(new OAuth2Credential("twitch", "oauthtokenhere"))\n    .build();\n')))),(0,a.kt)("h2",{id:"register-for-stream-golive--gooffline--gamechange--titlechange-events"},"Register for Stream GoLive / GoOffline / GameChange / TitleChange Events"),(0,a.kt)(r.default,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'twitchClient.getClientHelper().enableStreamEventListener("twitch4j");\n'))),(0,a.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'twitchClient.clientHelper.enableStreamEventListener("twitch4j");\n'))),(0,a.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'twitchClient.clientHelper.enableStreamEventListener("twitch4j");\n')))),(0,a.kt)("h2",{id:"register-for-follow-event"},"Register for Follow Event"),(0,a.kt)(r.default,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'twitchClient.getClientHelper().enableFollowEventListener("twitch4j");\n'))),(0,a.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'twitchClient.clientHelper.enableFollowEventListener("twitch4j");\n'))),(0,a.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'twitchClient.clientHelper.enableFollowEventListener("twitch4j");\n')))))}m.isMDXComponent=!0}}]);