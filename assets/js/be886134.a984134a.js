"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9481],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),v=r,m=p["".concat(s,".").concat(v)]||p[v]||d[v]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,n;const{lazy:o,block:p,defaultValue:v,values:m,groupId:h,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===v?v:null!=(t=null!=v?v:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:T}=(0,s.U)(),[E,j]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=h){const e=w[h];null!=e&&e!==E&&g.some((t=>t.value===e))&&j(e)}const N=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==E&&(O(t),j(a),null!=h&&T(h,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;n=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},b)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:D,onClick:N},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function v(e){const t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},9442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={sidebar_position:202},s="EventHandler - Reactor",u={unversionedId:"events/eventhandler-reactor",id:"version-1.x/events/eventhandler-reactor",title:"EventHandler - Reactor",description:"Description",source:"@site/versioned_docs/version-1.x/events/eventhandler-reactor.mdx",sourceDirName:"events",slug:"/events/eventhandler-reactor",permalink:"/events/eventhandler-reactor",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/events/eventhandler-reactor.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:202,frontMatter:{sidebar_position:202},sidebar:"version-1.x-docs",previous:{title:"EventHandler - Simple",permalink:"/events/eventhandler-simple"},next:{title:"IRC Message Event",permalink:"/events/irc-message-event"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Set as default in Twitch4J and for eventManager.onEvent",id:"set-as-default-in-twitch4j-and-for-eventmanageronevent",level:2}],p={toc:d};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"eventhandler---reactor"},"EventHandler - Reactor"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ReactorEventHandler will process all events asynchronous in a threadpool with at least 4 threads."),(0,r.kt)("p",null,"Check out the following class if you want to customize the parameters used when building a ReactorEventHandler instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/PhilippHeuer/events4j/blob/master/handler-reactor/src/main/java/com/github/philippheuer/events4j/reactor/ReactorEventHandler.java"},"ReactorEventHandler.java"))),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)(l.default,{groupId:"dependency",mdxType:"Tabs"},(0,r.kt)(o.default,{value:"gradle-groovy",label:"Gradle - Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation group: 'com.github.philippheuer.events4j', name: 'events4j-handler-reactor', version: '0.9.8'\n}\n"))),(0,r.kt)(o.default,{value:"gradle-kotlin",label:"Gradle - Kotlin DSL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation(group = "com.github.philippheuer.events4j", name = "events4j-handler-reactor", version = "0.9.8")\n}\n'))),(0,r.kt)(o.default,{value:"maven",label:"Maven",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>com.github.philippheuer.events4j</groupId>\n        <artifactId>events4j-handler-reactor</artifactId>\n        <version>0.9.8</version>\n    </dependency>\n</dependencies>\n")))),(0,r.kt)("h2",{id:"set-as-default-in-twitch4j-and-for-eventmanageronevent"},"Set as default in Twitch4J and for eventManager.onEvent"),(0,r.kt)(l.default,{groupId:"code",mdxType:"Tabs"},(0,r.kt)(o.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"TwitchClient twitchClient = TwitchClientBuilder.builder()\n    .withDefaultEventHandler(ReactorEventHandler.class)\n    .build();\n"))),(0,r.kt)(o.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val twitchClient = TwitchClientBuilder.builder()\n    .withDefaultEventHandler(ReactorEventHandler::class.java)\n    .build();\n"))),(0,r.kt)(o.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"def twitchClient = TwitchClientBuilder.builder()\n    .withDefaultEventHandler(ReactorEventHandler)\n    .build();\n")))))}v.isMDXComponent=!0}}]);