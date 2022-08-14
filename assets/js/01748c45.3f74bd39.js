"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(7294),n=r(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:r},t)}},5488:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var a=r(7462),n=r(7294),l=r(6010),i=r(2389),s=r(7392),o=r(7094),u=r(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,r;const{lazy:i,block:m,defaultValue:d,values:f,groupId:g,className:h}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),y=(0,s.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(r=b.find((e=>e.props.default)))?void 0:r.props.value)?t:b[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:T}=(0,o.U)(),[w,x]=(0,n.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=g){const e=N[g];null!=e&&e!==w&&v.some((t=>t.value===e))&&x(e)}const D=e=>{const t=e.currentTarget,r=O.indexOf(t),a=v[r].value;a!==w&&(E(t),x(a),null!=g&&T(g,String(a)))},S=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;r=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var n;const t=O.indexOf(e.currentTarget)-1;r=null!=(n=O[t])?n:O[O.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},h)},v.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:S,onFocus:D,onClick:D},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),i?(0,n.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,i.Z)();return n.createElement(m,(0,a.Z)({key:String(t)},e))}},2436:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));r(5488),r(5162);const l={sidebar_position:54},i="StreamTags - Get All Stream Tags",s={unversionedId:"rest-helix/streamtags-all",id:"version-1.x/rest-helix/streamtags-all",title:"StreamTags - Get All Stream Tags",description:"Description",source:"@site/versioned_docs/version-1.x/rest-helix/streamtags-all.mdx",sourceDirName:"rest-helix",slug:"/rest-helix/streamtags-all",permalink:"/rest-helix/streamtags-all",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/rest-helix/streamtags-all.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:54,frontMatter:{sidebar_position:54},sidebar:"version-1.x-docs",previous:{title:"Streams - Get Markers",permalink:"/rest-helix/streams-markers-get"},next:{title:"StreamTags - Get Stream Tags",permalink:"/rest-helix/streamtags-stream"}},o={},u=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"streamtags---get-all-stream-tags"},"StreamTags - Get All Stream Tags"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Gets the list of all stream tags defined by Twitch, optionally filtered by tag ID(s)."),(0,n.kt)("p",null,"The response has a JSON payload with a data field containing an array of tag elements and a pagination field containing information required to query for more tags."),(0,n.kt)("h2",{id:"method-definition"},"Method Definition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@RequestLine("GET /tags/streams?after={after}&first={first}&tag_id={tag_id}")    \n@Headers("Authorization: Bearer {token}")\nHystrixCommand<StreamTagList> getAllStreamTags(\n        @Param("token") String authToken,\n        @Param("after") String after,\n        @Param("first") Integer limit,\n        @Param("tag_id") List<UUID> tagIds\n);\n')),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Required Parameters")),(0,n.kt)("p",null,"None"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Optional Parameters")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"authToken"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"User Auth Token")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"after"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Cursor for forward pagination: tells the server where to start fetching the next set of results, in a multi-page response. The cursor value specified here is from the pagination response field of a prior query.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Maximum number of objects to return. Maximum: 100. Default: 20.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tagIds"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"ID of a tag. Multiple IDs can be specified, separated by ampersands. If provided, only the specified tag(s) is(are) returned.")))),(0,n.kt)("h2",{id:"code-snippets"},"Code-Snippets"))}c.isMDXComponent=!0}}]);