"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(n),d=a,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),i=n(7392),c=n(7094),s=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function g(e){var t,n;const{lazy:l,block:g,defaultValue:d,values:m,groupId:f,className:b}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:x}=(0,c.U)(),[O,N]=(0,a.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=f){const e=w[f];null!=e&&e!==O&&h.some((t=>t.value===e))&&N(e)}const S=e=>{const t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==O&&(E(t),N(r),null!=f&&x(f,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=T.indexOf(e.currentTarget)+1;n=null!=(r=T[t])?r:T[0];break}case"ArrowLeft":{var a;const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":g},b)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:P,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,l.Z)();return a.createElement(g,(0,r.Z)({key:String(t)},e))}},9366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_position:20},c="Logging",s={unversionedId:"getting-started/logging",id:"version-1.x/getting-started/logging",title:"Logging",description:"You can use any logging framework of your choice with Twitch4J, but you have to add at least one so that logging works correctly.",source:"@site/versioned_docs/version-1.x/getting-started/logging.mdx",sourceDirName:"getting-started",slug:"/getting-started/logging",permalink:"/getting-started/logging",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/getting-started/logging.mdx",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"version-1.x-docs",previous:{title:"Support",permalink:"/getting-started/support"},next:{title:"Proxy Support",permalink:"/getting-started/proxy"}},u={},p=[{value:"Library: Logback",id:"library-logback",level:2}],g={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"logging"},"Logging"),(0,a.kt)("p",null,"You can use any logging framework of your choice with ",(0,a.kt)("em",{parentName:"p"},"Twitch4J"),", but you have to add at least one so that logging works correctly. "),(0,a.kt)("p",null,"If you do not ad at least one, you will see the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},'SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".\nSLF4J: Defaulting to no-operation (NOP) logger implementation\nSLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.\n')),(0,a.kt)("p",null,"Here are a few examples on how to add a logging library of your choice:"),(0,a.kt)("h2",{id:"library-logback"},"Library: Logback"),(0,a.kt)(o.default,{groupId:"dependency",mdxType:"Tabs"},(0,a.kt)(l.default,{value:"gradle-groovy",label:"Gradle - Groovy",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation group: 'ch.qos.logback', name: 'logback-classic', version: '1.2.10'\n}\n"))),(0,a.kt)(l.default,{value:"gradle-kotlin",label:"Gradle - Kotlin DSL",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation(group = "ch.qos.logback", name = "logback-classic", version = "1.2.10")\n}\n'))),(0,a.kt)(l.default,{value:"maven",label:"Maven",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>ch.qos.logback</groupId>\n        <artifactId>logback-classic</artifactId>\n        <version>1.2.10</version>\n    </dependency>\n</dependencies>\n")))),(0,a.kt)("p",null,"And place a configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"logback.xml")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources"),". This is the place you can use to configure logging:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n\n<configuration scan="true">\n    \x3c!-- Configure Twitch4J logger level --\x3e\n    <logger name="com.github.twitch4j" level="INFO"/>\n\n    \x3c!-- Appender Configuration [Console] --\x3e\n    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">\n        <encoder>\n            <pattern>%d{HH:mm:ss.SSS} [%thread] %highlight([%-5level]) %logger{25} - %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    \x3c!-- Appender Configuration [File] --\x3e\n    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">\n        <encoder>\n            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>\n        </encoder>\n        <file>client.log</file>\n        <rollingPolicy class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy">\n            <fileNamePattern>client.%i.log</fileNamePattern>\n        </rollingPolicy>\n        <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">\n            <MaxFileSize>10MB</MaxFileSize>\n        </triggeringPolicy>\n    </appender>\n\n    \x3c!-- Appender Output Configuration --\x3e\n    <root level="info">\n        <appender-ref ref="CONSOLE"/>\n    </root>\n</configuration>\n')),(0,a.kt)("p",null,"This sample only logs to the console, you can change the appender-ref from ",(0,a.kt)("inlineCode",{parentName:"p"},"CONSOLE")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"FILE")," to use file-based logging with rotation - refer to the logback documentation for further customization options."))}d.isMDXComponent=!0}}]);