"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,n;const{lazy:l,block:p,defaultValue:m,values:h,groupId:v,className:f}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:x}=(0,s.U)(),[T,w]=(0,a.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=v){const e=N[v];null!=e&&e!==T&&g.some((t=>t.value===e))&&w(e)}const C=e=>{const t=e.currentTarget,n=S.indexOf(t),r=g[n].value;r!==T&&(O(t),w(r),null!=v&&x(v,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=S.indexOf(e.currentTarget)+1;n=null!=(r=S[t])?r:S[0];break}case"ArrowLeft":{var a;const t=S.indexOf(e.currentTarget)-1;n=null!=(a=S[t])?a:S[S.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},f)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>S.push(e),onKeyDown:E,onFocus:C,onClick:C},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},25:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_position:20},s="Entitlements - Redeem Code",u={unversionedId:"rest-helix/entitlements-redeem-codes",id:"version-1.x/rest-helix/entitlements-redeem-codes",title:"Entitlements - Redeem Code",description:"Description",source:"@site/versioned_docs/version-1.x/rest-helix/entitlements-redeem-codes.mdx",sourceDirName:"rest-helix",slug:"/rest-helix/entitlements-redeem-codes",permalink:"/rest-helix/entitlements-redeem-codes",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/rest-helix/entitlements-redeem-codes.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"version-1.x-docs",previous:{title:"Entitlements - Get Code Status",permalink:"/rest-helix/entitlements-codes"},next:{title:"Clips - Create",permalink:"/rest-helix/clips-create"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Method Definition",id:"method-definition",level:2},{value:"Code-Snippets",id:"code-snippets",level:2},{value:"redeem code and print status",id:"redeem-code-and-print-status",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entitlements---redeem-code"},"Entitlements - Redeem Code"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Redeems one or more provided codes to the authenticated Twitch user."),(0,a.kt)("h2",{id:"method-definition"},"Method Definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@RequestLine("POST /entitlements/codes?code={code}&user_id={user_id}")\n@Headers("Authorization: Bearer {token}")\nHystrixCommand<CodeStatusList> redeemCode(\n    @Param("token") String authToken,\n    @Param("code") List<String> code,\n    @Param("user_id") Integer userId\n);\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Required Parameters")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authToken"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"right"},"App Access Token")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"code"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"right"},"The code to redeem to the authenticated user\u2019s account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"userId"),(0,a.kt)("td",{parentName:"tr",align:"center"},"integer"),(0,a.kt)("td",{parentName:"tr",align:"right"},"Represents a numeric Twitch user ID")))),(0,a.kt)("h2",{id:"code-snippets"},"Code-Snippets"),(0,a.kt)("h3",{id:"redeem-code-and-print-status"},"redeem code and print status"),(0,a.kt)(o.default,{groupId:"code",mdxType:"Tabs"},(0,a.kt)(l.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'CodeStatusList codeStatusList = twitchClient.getHelix().redeemCode(authToken, Arrays.asList("KUHXV-4GXYP-AKAKK"), 156900877).execute();\ncodeStatusList.getStatuses().forEach(codeStatus -> {\n    System.out.println(codeStatus.getCode() + " " + codeStatus.getStatus());\n});\n'))),(0,a.kt)(l.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val codeStatusList = twitchClient.helix.redeemCode(authToken, listOf("KUHXV-4GXYP-AKAKK"), 156900877).execute()\ncodeStatusList.statuses.forEach { codeStatus ->\n    println("${codeStatus.code} ${codeStatus.status}")\n}\n'))),(0,a.kt)(l.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},'def codeStatusList = twitchClient.helix.redeemCode(authToken, ["KUHXV-4GXYP-AKAKK"], 156900877).execute()\ncodeStatusList.statuses.each { codeStatus ->\n    System.out.println("${codeStatus.code} ${codeStatus.status}")\n}\n')))))}m.isMDXComponent=!0}}]);