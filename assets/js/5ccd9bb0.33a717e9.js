"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return r?a.createElement(g,l(l({ref:t},d),{},{components:r})):a.createElement(g,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var a=r(7294),n=r(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,l),hidden:r},t)}},5488:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var a=r(7462),n=r(7294),i=r(6010),l=r(2389),o=r(7392),s=r(7094),p=r(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var t,r;const{lazy:l,block:c,defaultValue:m,values:g,groupId:f,className:h}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:b.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),v=(0,o.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(r=b.find((e=>e.props.default)))?void 0:r.props.value)?t:b[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[x,T]=(0,n.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:_}=(0,p.o5)();if(null!=f){const e=N[f];null!=e&&e!==x&&k.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,r=C.indexOf(t),a=k[r].value;a!==x&&(_(t),T(a),null!=f&&w(f,String(a)))},D=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;r=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var n;const t=C.indexOf(e.currentTarget)-1;r=null!=(n=C[t])?n:C[C.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},h)},k.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:D,onFocus:O,onClick:O},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=r?r:t)}))),l?(0,n.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return n.createElement(c,(0,a.Z)({key:String(t)},e))}},27:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=r(7462),n=(r(7294),r(3905)),i=r(5488),l=r(5162);const o={sidebar_position:31},s="Clips - Get",p={unversionedId:"rest-helix/clips-get",id:"version-1.x/rest-helix/clips-get",title:"Clips - Get",description:"Description",source:"@site/versioned_docs/version-1.x/rest-helix/clips-get.mdx",sourceDirName:"rest-helix",slug:"/rest-helix/clips-get",permalink:"/rest-helix/clips-get",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/rest-helix/clips-get.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"version-1.x-docs",previous:{title:"Clips - Create",permalink:"/rest-helix/clips-create"},next:{title:"Games - Get",permalink:"/rest-helix/games-get"}},d={},u=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2},{value:"print clip id&#39;s",id:"print-clip-ids",level:3}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"clips---get"},"Clips - Get"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Gets clip information by clip ID (one or more), broadcaster ID (one only), or game ID (one only)."),(0,n.kt)("p",null,"The response has a JSON payload with a ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," field containing an array of clip information elements and a ",(0,n.kt)("inlineCode",{parentName:"p"},"pagination")," field containing information required to query for more streams."),(0,n.kt)("h2",{id:"method-definition"},"Method Definition"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'@RequestLine("GET /clips?broadcaster_id={broadcaster_id}&game_id={game_id}&id={id}&after={after}&before={before}&first={first}&started_at={started_at}&ended_at={ended_at}")\n@Headers("Authorization: Bearer {token}")\nHystrixCommand<ClipList> getClips(\n    @Param("token") String authToken,\n    @Param("broadcaster_id") Long broadcasterId,\n    @Param("game_id") String gameId,\n    @Param("id") String id,\n    @Param("after") String after,\n    @Param("before") String before,\n    @Param("first") Integer limit,\n    @Param("started_at") Date startedAt,\n    @Param("ended_at") Date endedAt\n);\n')),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Required Parameters (one of)")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"broadcaster_id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"ID of the broadcaster for whom clips are returned. The number of clips returned is determined by the ",(0,n.kt)("inlineCode",{parentName:"td"},"first")," query-string parameter (default: 20). Results are ordered by view count.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"game_id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"ID of the game for which clips are returned. The number of clips returned is determined by the ",(0,n.kt)("inlineCode",{parentName:"td"},"first")," query-string parameter (default: 20). Results are ordered by view count.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"ID of the clip being queried. Limit: 100.")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Optional Parameters")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"authToken"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"User Auth Token")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"after"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Cursor for forward pagination: tells the server where to start fetching the next set of results, in a multi-page response. This applies only to queries specifying broadcaster_id or game_id. The cursor value specified here is from the pagination response field of a prior query.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"before"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Cursor for backward pagination: tells the server where to start fetching the next set of results, in a multi-page response. This applies only to queries specifying broadcaster_id or game_id. The cursor value specified here is from the pagination response field of a prior query.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"first"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Maximum number of objects to return. Maximum: 100. Default: 20.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"started_at"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Starting date/time for returned clips, in RFC3339 format. (Note that the seconds value is ignored.) If this is specified, ended_at also should be specified; otherwise, the ended_at date/time will be 1 week after the started_at value.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ended_at"),(0,n.kt)("td",{parentName:"tr",align:"center"},"string"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Ending date/time for returned clips, in RFC3339 format. (Note that the seconds value is ignored.) If this is specified, started_at also must be specified; otherwise, the time period is ignored.")))),(0,n.kt)("h2",{id:"code-snippets"},"Code-Snippets"),(0,n.kt)("h3",{id:"print-clip-ids"},"print clip id's"),(0,n.kt)(i.default,{groupId:"code",mdxType:"Tabs"},(0,n.kt)(l.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'ClipList clipList = twitchClient.getHelix().getClips(null, "488552", null, null, null, null, null, null).execute();\nclipList.getData().forEach(clip -> {\n    System.out.println("Found Clip: " + clip.getId());\n});\n'))),(0,n.kt)(l.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'val clipList = twitchClient.helix.getClips(null, "488552", null, null, null, null, null, null).execute();\nclipList.`data`.forEach { clip ->\n    println("Found Clip: ${clip.id}")\n}\n'))),(0,n.kt)(l.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},'def clipList = twitchClient.helix.getClips(null, "488552", null, null, null, null, null, null).execute();\nclipList.data.each { clip ->\n    System.out.println "Found Clip: ${clip.id}"\n}\n')))))}m.isMDXComponent=!0}}]);