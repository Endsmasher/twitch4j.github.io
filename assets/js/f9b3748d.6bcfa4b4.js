"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8893],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var n=r(7462),a=r(7294),l=r(6010),o=r(2389),i=r(7392),s=r(7094),u=r(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,r;const{lazy:o,block:d,defaultValue:m,values:f,groupId:h,className:g}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),w=(0,i.l)(v,((e,t)=>e.value===t.value));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(r=b.find((e=>e.props.default)))?void 0:r.props.value)?t:b[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[x,T]=(0,a.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==x&&v.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,r=O.indexOf(t),n=v[r].value;n!==x&&(E(t),T(n),null!=h&&N(h,String(n)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=O.indexOf(e.currentTarget)+1;r=null!=(n=O[t])?n:O[0];break}case"ArrowLeft":{var a;const t=O.indexOf(e.currentTarget)-1;r=null!=(a=O[t])?a:O[O.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},g)},v.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:P,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},6464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),l=r(5488),o=r(5162);const i={sidebar_position:61},s="Users - Get Follows",u={unversionedId:"rest-helix/users-followers",id:"version-1.x/rest-helix/users-followers",title:"Users - Get Follows",description:"Description",source:"@site/versioned_docs/version-1.x/rest-helix/users-followers.mdx",sourceDirName:"rest-helix",slug:"/rest-helix/users-followers",permalink:"/rest-helix/users-followers",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/rest-helix/users-followers.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:61,frontMatter:{sidebar_position:61},sidebar:"version-1.x-docs",previous:{title:"Users - Get",permalink:"/rest-helix/users-get"},next:{title:"Users - Update",permalink:"/rest-helix/users-update"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2},{value:"print followers",id:"print-followers",level:3}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"users---get-follows"},"Users - Get Follows"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Gets information on follow relationships between two Twitch users. Information returned is sorted in order, most recent follow first. This can return information like \u201cwho is lirik following,\u201d \u201cwho is following lirik,\u201d or \u201cis user X following user Y.\u201d"),(0,a.kt)("p",null,"The response has a JSON payload with a data field containing an array of follow relationship elements and a pagination field containing information required to query for more follow information."),(0,a.kt)("h2",{id:"method-definition"},"Method Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RequestLine("GET /users/follows?from_id={from_id}&to_id={to_id}&after={after}&first={first}")\n@Headers("Authorization: Bearer {token}")\nHystrixCommand<FollowList> getFollowers(\n        @Param("token") String authToken,\n    @Param("from_id") String fromId,\n    @Param("to_id") String toId,\n    @Param("after") String after,\n    @Param("first") Integer limit\n);\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Required Parameters")),(0,a.kt)("p",null,"None"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Optional Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authToken"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"right"},"User Auth Token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"from_id"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"right"},"User ID. The request returns information about users who are being followed by the from_id user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"to_id"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"right"},"User ID. The request returns information about users who are following the to_id user.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"after"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"right"},"Cursor for forward pagination: tells the server where to start fetching the next set of results, in a multi-page response. The cursor value specified here is from the pagination response field of a prior query.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,a.kt)("td",{parentName:"tr",align:"right"},"Maximum number of objects to return. Maximum: 100. Default: 20.")))),(0,a.kt)("h2",{id:"code-snippets"},"Code-Snippets"),(0,a.kt)("h3",{id:"print-followers"},"print followers"),(0,a.kt)(l.default,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(o.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'FollowList resultList = twitchClient.getHelix().getFollowers(OAuth2.getAccessToken(), "149223493", null, null, 100).execute();\n\nresultList.getFollows().forEach(follow -> {\n    System.out.println(follow.getFromName() + " is following " + follow.getToName());\n});\n'))),(0,a.kt)(o.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val resultList = twitchClient.helix.getFollowers(OAuth2.accessToken, "149223493", null, null, 100).execute()\n\nresultList.follows.each { follow ->\n    println("${follow.fromName} is following ${follow.toName}")\n}\n'))),(0,a.kt)(o.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'def resultList = twitchClient.helix.getFollowers(OAuth2.accessToken, "149223493", null, null, 100).execute()\n\nresultList.follows.each { follow ->\n    System.out.println "${follow.fromName} is following ${follow.toName}"\n}\n')))))}m.isMDXComponent=!0}}]);