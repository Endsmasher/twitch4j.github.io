"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:10},a="Releases",s={unversionedId:"contribution/release",id:"version-1.x/contribution/release",title:"Releases",description:"The release process is fully automated using GitLab CI and gets triggered by git tag creation. There are no further actions required.",source:"@site/versioned_docs/version-1.x/contribution/release.md",sourceDirName:"contribution",slug:"/contribution/release",permalink:"/contribution/release",draft:!1,editUrl:"https://github.com/twitch4j/twitch4j.github.io/tree/master/docs/versioned_docs/version-1.x/contribution/release.md",tags:[],version:"1.x",lastUpdatedBy:"Philipp Heuer",lastUpdatedAt:1660511578,formattedLastUpdatedAt:"Aug 14, 2022",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"version-1.x-docs",previous:{title:"Pull Request",permalink:"/contribution/pull-request"},next:{title:"Code Documentation",permalink:"/contribution/code-documentation"}},l={},c=[{value:"Release Notes",id:"release-notes",level:2},{value:"Discord Announcements",id:"discord-announcements",level:3},{value:"GitHub Releases",id:"github-releases",level:3},{value:"Conventions",id:"conventions",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"releases"},"Releases"),(0,o.kt)("p",null,"The release process is fully automated using GitLab CI and gets triggered by git tag creation. There are no further actions required."),(0,o.kt)("h2",{id:"release-notes"},"Release Notes"),(0,o.kt)("p",null,"The releasenotes are generated using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EnvCLI/modular-pipeline"},"EnvCLI/Modular-Pipeline"),"."),(0,o.kt)("h3",{id:"discord-announcements"},"Discord Announcements"),(0,o.kt)("p",null,"The project contains a CI Variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"RELEASE_WEBHOOK_DISCORD")," which points to a discord webhook on the twitch4j announcements channel."),(0,o.kt)("h3",{id:"github-releases"},"GitHub Releases"),(0,o.kt)("p",null,"The project contains a GH_TOKEN thats used to create new GitHub Releases using the API, using the same changelog information as discord but with a different markup template."),(0,o.kt)("h2",{id:"conventions"},"Conventions"),(0,o.kt)("p",null,"To generate a human readable changelog, the commits have to follow the following naming convention:"),(0,o.kt)("p",null,'{{< col "12" "md-8" "xl-8" >}}\n| Commit Message | Changelog Category |\n|-------------:|:-----------------|\n| ',(0,o.kt)("inlineCode",{parentName:"p"},"feature:")," | Features |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"feat:")," | Features |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"fix:")," | Bug Fixes |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"bugfix:")," | Bug Fixes |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"perf:")," | Performance Improvements |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"refactor:")," | Code Refactoring |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"chore:")," | Internal |\n| ",(0,o.kt)("inlineCode",{parentName:"p"},"docs:")," | Documentation |\n{{</ col >}}"))}p.isMDXComponent=!0}}]);