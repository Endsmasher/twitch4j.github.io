"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||v[d]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",v="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:p,defaultValue:d,values:m,groupId:h,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:E}=(0,s.U)(),[x,T]=(0,r.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=h){const e=w[h];null!=e&&e!==x&&g.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==x&&(C(t),T(a),null!=h&&E(h,String(a)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;n=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},f)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:N,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},8383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>v});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={sidebar_position:210},s="Channel - Go Live Event",c={unversionedId:"events/channel-go-live-event",id:"version-1.x/events/channel-go-live-event",title:"Channel - Go Live Event",description:"Description",source:"@site/versioned_docs/version-1.x/events/channel-go-live-event.mdx",sourceDirName:"events",slug:"/events/channel-go-live-event",permalink:"/events/channel-go-live-event",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/events/channel-go-live-event.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:210,frontMatter:{sidebar_position:210},sidebar:"version-1.x-docs",previous:{title:"Channel - Change Title Event",permalink:"/events/channel-change-title-event"},next:{title:"Channel - Go Offline Event",permalink:"/events/channel-go-offline-event"}},u={},v=[{value:"Description",id:"description",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1",id:"example-1",level:3}],p={toc:v};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"channel---go-live-event"},"Channel - Go Live Event"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ChannelGoLiveEvent is triggered when a monitored channel goes live."),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"Requires the specific channels to be registered with the TwitchClient Helper. See ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/client-helper"},"TwitchClientHelper")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"example-1"},"Example 1"),(0,r.kt)(l.default,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'eventManager.onEvent(ChannelGoLiveEvent.class, event -> {\n    System.out.println("[" + event.getChannel().getName() + "] went live with title " + event.getTitle() + " on game " + event.getGameId() + "!");\n});\n'))),(0,r.kt)(o.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'eventManager.onEvent(ChannelGoLiveEvent::class.java) { event ->\n    println("[${event.channel.name}] went live with title ${event.title} on game ${event.gameId}!");\n}\n'))),(0,r.kt)(o.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'eventManager.onEvent(ChannelGoLiveEvent) { event ->\n    System.out.println "[${event.channel.name}] went live with title ${event.title} on game ${event.gameId}!"\n}\n')))))}d.isMDXComponent=!0}}]);