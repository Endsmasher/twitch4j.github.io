"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5166],{5162:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});var a=t(7294),l=t(6010);const r="tabItem_Ymn6";function s(e){let{children:n,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,s),hidden:t},n)}},5488:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var a=t(7462),l=t(7294),r=t(6010),s=t(2389),i=t(7392),o=t(7094),d=t(2466);const u="tabList__CuJ",v="tabItem_LNqP";function p(e){var n,t;const{lazy:s,block:p,defaultValue:m,values:c,groupId:h,className:g}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=c?c:k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,i.l)(y,((e,n)=>e.value===n.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(n=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:E,setTabGroupChoices:N}=(0,o.U)(),[w,T]=(0,l.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:H}=(0,d.o5)();if(null!=h){const e=E[h];null!=e&&e!==w&&y.some((n=>n.value===e))&&T(e)}const M=e=>{const n=e.currentTarget,t=C.indexOf(n),a=y[t].value;a!==w&&(H(n),T(a),null!=h&&N(h,String(a)))},x=e=>{var n;let t=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":{var a;const n=C.indexOf(e.currentTarget)+1;t=null!=(a=C[n])?a:C[0];break}case"ArrowLeft":{var l;const n=C.indexOf(e.currentTarget)-1;t=null!=(l=C[n])?l:C[C.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},g)},y.map((e=>{let{value:n,label:t,attributes:s}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>C.push(e),onKeyDown:x,onClick:M},s,{className:(0,r.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),s?(0,l.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,s.Z)();return l.createElement(p,(0,a.Z)({key:String(n)},e))}},9185:function(e,n,t){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const l=a(t(7294)),r=a(t(5488)),s=a(t(5162)),i=a(t(814));function o(e,n,t){return void 0!==t?e+":"+n+":"+t:e+":"+n}n.default=function(e){let n=void 0!==e.title?" - "+e.title:"",t=function(e){const n=void 0!==e.scope?e.scope:"implementation";let t="dependencies {\n";return t=0==(void 0!==e.bom&&e.bom)?t+"    "+n+" '"+o(e.group,e.name,e.version)+"'\n":t+"    "+n+" platform('"+o(e.group,e.name,e.version)+"')\n",t+="}",t}(e),a=function(e){const n=void 0!==e.scope?e.scope:"implementation";let t="dependencies {\n";return t=0==(void 0!==e.bom&&e.bom)?t+"    "+n+'("'+o(e.group,e.name,e.version)+'")\n':t+"    "+n+'(platform("'+o(e.group,e.name,e.version)+'"))\n',t+="}",t}(e),d=function(e){let n="";return 0==(void 0!==e.bom&&e.bom)?(n+="<dependency>\n",n=n+"    <groupId>"+e.group+"</groupId>\n",n=n+"    <artifactId>"+e.name+"</artifactId>\n",void 0!==e.version&&(n=n+"    <version>"+e.version+"</version>\n"),n+="</dependency>\n"):(n+="<dependencyManagement>\n",n+="    <dependencies>\n",n+="        <dependency>\n",n=n+"            <groupId>"+e.group+"</groupId>\n",n=n+"            <artifactId>"+e.name+"</artifactId>\n",void 0!==e.version&&(n=n+"            <version>"+e.version+"</version>\n"),n+="            <type>pom</type>\n",n+="            <scope>import</scope>\n",n+="        </dependency>\n",n+="    </dependencies>\n",n+="</dependencyManagement>\n"),n}(e);return l.default.createElement(l.default.Fragment,null,l.default.createElement(r.default,{groupId:"dependency"},l.default.createElement(s.default,{value:"gradle-groovy",label:l.default.createElement(l.default.Fragment,null,"Gradle")},l.default.createElement(i.default,{language:"groovy",title:"build.gradle"+n},t)),l.default.createElement(s.default,{value:"gradle-kotlin",label:l.default.createElement(l.default.Fragment,null,"Gradle - Kotlin DSL")},l.default.createElement(i.default,{language:"kotlin",title:"build.gradle.kts"+n},a)),l.default.createElement(s.default,{value:"maven",label:l.default.createElement(l.default.Fragment,null,"Maven")},l.default.createElement(i.default,{language:"xml",title:"pom.xml"+n},d))))}},4563:function(e,n,t){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.JavaDependency=void 0;const l=a(t(9185));n.JavaDependency=l.default},7554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=t(7462),l=(t(7294),t(3905)),r=t(4563),s=t(5488),i=t(5162);const o={sidebar_position:200},d="Events",u={unversionedId:"events/index",id:"version-1.x/events/index",title:"Events",description:"Twitch4J uses Events4J to dispatch events and handle them, you can also build your own event handler to handle them however you like.",source:"@site/versioned_docs/version-1.x/events/index.mdx",sourceDirName:"events",slug:"/events/",permalink:"/events/",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/events/index.mdx",tags:[],version:"1.x",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1663012508,formattedLastUpdatedAt:"Sep 12, 2022",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"version-1.x-docs",previous:{title:"Topic - Whispers",permalink:"/pubsub/topic-whispers"},next:{title:"EventHandler - Simple",permalink:"/events/eventhandler-simple"}},v={},p=[{value:"Publish Event",id:"publish-event",level:2},{value:"Handle / Process Events",id:"handle--process-events",level:2},{value:"Switch the default event handler",id:"switch-the-default-event-handler",level:5},{value:"Register your event listeners in a generic way",id:"register-your-event-listeners-in-a-generic-way",level:5},{value:"Simple Handler",id:"simple-handler",level:3},{value:"Lambda / Consumer Example",id:"lambda--consumer-example",level:6},{value:"Annotation Example",id:"annotation-example",level:6},{value:"Cheat Sheet",id:"cheat-sheet",level:6},{value:"Reactor Handler",id:"reactor-handler",level:3},{value:"Cheat Sheet",id:"cheat-sheet-1",level:6},{value:"Spring Handler",id:"spring-handler",level:3},{value:"Event Catalog",id:"event-catalog",level:2}],m={toc:p};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"events"},"Events"),(0,l.kt)("p",null,"Twitch4J uses ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/PhilippHeuer/events4j"},"Events4J")," to dispatch events and handle them, you can also build your own event handler to handle them however you like.\nYou can use those events to build chat bots or similar tools."),(0,l.kt)("h2",{id:"publish-event"},"Publish Event"),(0,l.kt)("p",null,"Publish a event that should be processed somewhere:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The event object needs to implement the IEvent interface."),(0,l.kt)("li",{parentName:"ul"},"The event will be passed to all registered handlers.")),(0,l.kt)(s.default,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"eventManager.publish(object);\n"))),(0,l.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"eventManager.publish(`object`)\n"))),(0,l.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"eventManager.publish(object)\n")))),(0,l.kt)("h2",{id:"handle--process-events"},"Handle / Process Events"),(0,l.kt)("p",null,"Twitch4J uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"SimpleHandler")," by default which works on all platforms."),(0,l.kt)("p",null,"Handlers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"SimpleHandler"),(0,l.kt)("li",{parentName:"ul"},"ReactorHandler"),(0,l.kt)("li",{parentName:"ul"},"SpringHandler")),(0,l.kt)("p",null,"You can register listeners directly on the eventManager, the call is forwarded and registered on the current ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultEventHandler")," set in the eventManager instance."),(0,l.kt)("h5",{id:"switch-the-default-event-handler"},"Switch the default event handler"),(0,l.kt)("p",null,"If you want all your events to be processed by a specific eventHandler, then check out the following pages on all available eventHandlers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./eventhandler-simple"},"SimpleEventHandler (Default)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./eventhandler-reactor"},"ReactorEventHandler"))),(0,l.kt)("h5",{id:"register-your-event-listeners-in-a-generic-way"},"Register your event listeners in a generic way"),(0,l.kt)("p",null,"Only the consumers registered with ",(0,l.kt)("inlineCode",{parentName:"p"},"eventManager.onEvent")," will use the ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultEventHandler"),"."),(0,l.kt)(s.default,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// register handler\nIDisposable handlerReg = twitchClient.getEventManager().onEvent(ChannelMessageEvent.class, event -> {\n    System.out.println "[" + event.getChannel().getName() + "]["+event.getPermissions().toString()+"] " + event.getUser().getName() + ": " + event.getMessage());\n});\n\n// cancel handler (don\'t call the method for new events of the required type anymore)\nhandlerReg.dispose();\n'))),(0,l.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// register handler\nval handlerReg = twitchClient.eventManager.onEvent(ChannelMessageEvent::class.java) { event ->\n    println("[${event.channel.name}][${event.permissions}] ${event.user.name}: ${event.message}")\n}\n\n// cancel handler (don\'t call the method for new events of the required type anymore)\nhandlerReg.dispose()\n'))),(0,l.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'// register handler\ndef handlerReg = twitchClient.eventManager.onEvent(ChannelMessageEvent) { event ->\n    System.out.println "[${event.channel.name}][${event.permissions}] ${event.user.name}: ${event.message}"\n}\n\n// cancel handler (don\'t call the method for new events of the required type anymore)\nhandlerReg.dispose()\n')))),(0,l.kt)("p",null,"This is the recommended method to register listeners, as you can switch between the different EventHandlers by chaning a single line of code."),(0,l.kt)("h3",{id:"simple-handler"},"Simple Handler"),(0,l.kt)("p",null,"The default event handler can register ",(0,l.kt)("inlineCode",{parentName:"p"},"handlers")," with annotations or provide lambdas as consumers."),(0,l.kt)("h6",{id:"lambda--consumer-example"},"Lambda / Consumer Example"),(0,l.kt)(s.default,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// register handler\nIDisposable handlerReg = twitchClient.getEventManager().getEventHandler(SimpleEventHandler.class).onEvent(ChannelMessageEvent.class, event -> {\n    System.out.println("[" + event.getChannel().getName() + "]["+event.getPermissions().toString()+"] " + event.getUser().getName() + ": " + event.getMessage());\n});\n\n// cancel handler (don\'t call the method for new events of the required type anymore)\nhandlerReg.dispose();\n'))),(0,l.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// register handler\nval handlerReg = twitchClient.eventManager.getEventHandler(SimpleEventHandler::class.java).onEvent(ChannelMessageEvent::class.java) { event -> \n    println("[${event.channel.name}][${event.permissions}] ${event.user.name}: ${event.message}")\n}\n\n// cancel handler (don\'t call the method for new events of the required type anymore)\nhandlerReg.dispose()\n'))),(0,l.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'// register handler\ndef handlerReg = twitchClient.eventManager.getEventHandler(SimpleEventHandler).onEvent ChannelMessageEvent, { event -> \n    System.out.println "[${event.channel.name}][${event.permissions}] ${event.user.name}: ${event.message} "\n}\n\n// cancel handler (don\'t call the method for new events of the required type anymore)\nhandlerReg.dispose()\n')))),(0,l.kt)("h6",{id:"annotation-example"},"Annotation Example"),(0,l.kt)(s.default,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class MyEventHandler {\n\n    // the type of the 1st argument is relevant, you can pick any method name you want\n    @EventSubscriber\n    public void printChannelMessage(ChannelMessageEvent event) {\n        System.out.println("[" + event.getChannel().getName() + "]["+event.getPermissions().toString()+"] " + event.getUser().getName() + ": " + event.getMessage());\n    }\n\n}\n\n// register your handler class\nMyEventHandler myEventHandler = new MyEventHandler();\neventManager.getEventHandler(SimpleEventHandler.class).registerListener(myEventHandler);\n'))),(0,l.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyEventHandler {\n\n    // the type of the 1st argument is relevant, you can pick any method name you want\n    @EventSubscriber\n    fun printChannelMessage(ChannelMessageEvent event) {\n        println("[${event.channel.name}][${event.permissions}] ${event.user.name}: ${event.message}")\n    }\n\n}\n\n// register your handler class\nval myEventHandler = MyEventHandler();\neventManager.getEventHandler(SimpleEventHandler::class.java).registerListener(myEventHandler);\n'))),(0,l.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'class MyEventHandler {\n\n    // the type of the 1st argument is relevant, you can pick any method name you want\n    @EventSubscriber\n    def printChannelMessage(ChannelMessageEvent event) {\n        System.out.println "[${event.channel.name}][${event.permissions}] ${event.user.name}: ${event.message}"\n    }\n\n}\n\n// register your handler class\ndef myEventHandler = new MyEventHandler();\neventManager.getEventHandler(SimpleEventHandler).registerListener(myEventHandler);\n')))),(0,l.kt)("h6",{id:"cheat-sheet"},"Cheat Sheet"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Handler Execution"),(0,l.kt)("td",{parentName:"tr",align:null},"sync")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Android"),(0,l.kt)("td",{parentName:"tr",align:null},"compatible")))),(0,l.kt)("h3",{id:"reactor-handler"},"Reactor Handler"),(0,l.kt)("p",null,"If desired you can also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactorHandler")," to use reactive streams to process events (keep in mind that this will not work with android).\nTo enable reactor add the ",(0,l.kt)("inlineCode",{parentName:"p"},"ReactorHandler")," dependency, it will be discovered and registered automatically."),(0,l.kt)(r.JavaDependency,{group:"com.github.philippheuer.events4j",name:"events4j-handler-reactor",version:"0.11.0",scope:"implementation",mdxType:"JavaDependency"}),(0,l.kt)(s.default,{groupId:"code",mdxType:"Tabs"},(0,l.kt)(i.default,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// register handler\nDisposable handlerReg = twitchClient.getEventManager().getEventHandler(ReactorEventHandler.class).onEvent(ChannelMessageEvent.class, event -> {\n    System.out.println("[" + event.getChannel().getName() + "]["+event.getPermissions().toString()+"] " + event.getUser().getName() + ": " + event.getMessage());\n});\n\n// cancel handler (don\'t call the method for new events of the required type anymore)\nhandlerReg.dispose();\n'))),(0,l.kt)(i.default,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'// register handler\nval handlerReg = twitchClient.eventManager.getEventHandler(ReactorEventHandler::class.java).onEvent(ChannelMessageEvent::class.java) { event ->\n    println("[${event.channel.name}]${event.permissions}] ${event.user.name}: ${event.message}")\n}\n\n// cancel handler (don\'t call the method for new events of the required type anymore)\nhandlerReg.dispose();\n'))),(0,l.kt)(i.default,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'// register handler\ndef handlerReg = twitchClient.eventManager.getEventHandler(ReactorEventHandler).onEvent ChannelMessageEvent, { event ->\n    System.out.println "[${event.channel.name}]${event.permissions}] ${event.user.name}: ${event.message}"\n}\n\n// cancel handler (don\'t call the method for new events of the required type anymore)\nhandlerReg.dispose();\n')))),(0,l.kt)("h6",{id:"cheat-sheet-1"},"Cheat Sheet"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Handler Execution"),(0,l.kt)("td",{parentName:"tr",align:null},"async")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Android"),(0,l.kt)("td",{parentName:"tr",align:null},"incompatible")))),(0,l.kt)("h3",{id:"spring-handler"},"Spring Handler"),(0,l.kt)("p",null,"If desired you can also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"SpringHandler")," to handle all events as Spring Application Events.\nTo enable reactor add the ",(0,l.kt)("inlineCode",{parentName:"p"},"SpringHandler")," dependency, it will be discovered and registered automatically."),(0,l.kt)(r.JavaDependency,{group:"com.github.philippheuer.events4j",name:"events4j-handler-spring",version:"0.11.0",scope:"implementation",mdxType:"JavaDependency"}),(0,l.kt)("h2",{id:"event-catalog"},"Event Catalog"),(0,l.kt)("p",null,"This will become a list of all available events."),(0,l.kt)("p",null,"Channel:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./channel-message-event"},"ChannelMessageEvent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./channel-change-game-event"},"ChannelChangeGameEvent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./channel-change-title-event"},"ChannelChangeTitleEvent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./channel-go-live-event"},"ChannelGoLiveEvent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./channel-go-offline-event"},"ChannelGoOfflineEvent"))),(0,l.kt)("p",null,"User:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./private-message-event"},"PrivateMessageEvent"))),(0,l.kt)("p",null,"Generic:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"./irc-message-event"},"IRCMessageEvent"))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"And many more, this is a very incomplete list")))}c.isMDXComponent=!0}}]);