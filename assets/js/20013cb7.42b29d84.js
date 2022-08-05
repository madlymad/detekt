"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[1964],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,g=c["".concat(p,".").concat(h)]||c[h]||d[h]||s;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1558:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var o=n(3117),r=n(102),s=(n(7294),n(3905)),a=["components"],i={id:"snapshots",title:"Using Snapshots",keywords:["snapshot","releases"],summary:"This page explains how you can setup snapshots for your Detekt build to test the latest unreleased features.",sidebar_position:10},p=void 0,l={unversionedId:"introduction/snapshots",id:"introduction/snapshots",title:"Using Snapshots",description:"This page explains how you can use our latest snapshots to test upcoming unreleased features.",source:"@site/docs/introduction/snapshots.md",sourceDirName:"introduction",slug:"/introduction/snapshots",permalink:"/docs/introduction/snapshots",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/introduction/snapshots.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"snapshots",title:"Using Snapshots",keywords:["snapshot","releases"],summary:"This page explains how you can setup snapshots for your Detekt build to test the latest unreleased features.",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Extending detekt",permalink:"/docs/introduction/extensions"},next:{title:"Compatibility Table",permalink:"/docs/introduction/compatibility"}},u={},d=[{value:"Where to download snapshots",id:"where-to-download-snapshots",level:2},{value:"Gradle setup with Buildscript",id:"gradle-setup-with-buildscript",level:2},{value:"Gradle setup with Plugin block",id:"gradle-setup-with-plugin-block",level:2}],c={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This page explains how you can use our ",(0,s.kt)("strong",{parentName:"p"},"latest snapshots")," to test upcoming unreleased features."),(0,s.kt)("h2",{id:"where-to-download-snapshots"},"Where to download snapshots"),(0,s.kt)("p",null,"You can find the latest snapshot on ",(0,s.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/#view-repositories;snapshots~browsestorage~io/gitlab/arturbosch/detekt"},"sonatype"),". A new snapshot is published after every merge to ",(0,s.kt)("inlineCode",{parentName:"p"},"main")," from the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt/actions?query=workflow%3A%22Deploy+Snapshot%22"},"Deploy Snapshot")," Github Action workflow. "),(0,s.kt)("h2",{id:"gradle-setup-with-buildscript"},"Gradle setup with Buildscript"),(0,s.kt)("p",null,"If you're using Gradle with the ",(0,s.kt)("inlineCode",{parentName:"p"},"buildscript")," block, you should update your top level ",(0,s.kt)("inlineCode",{parentName:"p"},"build.gradle")," file with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-groovy"},'buildscript {\n  repositories {\n    maven {\n      url "https://oss.sonatype.org/content/repositories/snapshots/"\n    }\n  }\n  dependencies {\n    classpath "io.gitlab.arturbosch.detekt:detekt-gradle-plugin:main-SNAPSHOT"\n  }\n}\n\napply plugin: "io.gitlab.arturbosch.detekt"\n\nallprojects {\n  repositories {\n    maven {\n      url "https://oss.sonatype.org/content/repositories/snapshots/"\n    }\n  }\n}\n')),(0,s.kt)("p",null,"Make sure that you're adding the sonatype maven repository to both the ",(0,s.kt)("inlineCode",{parentName:"p"},"repositories{}")," block ",(0,s.kt)("strong",{parentName:"p"},"inside")," the ",(0,s.kt)("inlineCode",{parentName:"p"},"buildscript{}")," block and outside it."),(0,s.kt)("h2",{id:"gradle-setup-with-plugin-block"},"Gradle setup with Plugin block"),(0,s.kt)("p",null,"If you're using the ",(0,s.kt)("inlineCode",{parentName:"p"},"plugins{}")," block to apply detekt, you should update your ",(0,s.kt)("inlineCode",{parentName:"p"},"build.gradle")," file to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-groovy"},'plugins {\n  id("io.gitlab.arturbosch.detekt") version "main-SNAPSHOT"\n}\n\nallprojects {\n  repositories {\n    maven {\n      url "https://oss.sonatype.org/content/repositories/snapshots/"\n    }\n  }\n}\n')),(0,s.kt)("p",null,"Plus you need to update the ",(0,s.kt)("inlineCode",{parentName:"p"},"settings.gradle")," file as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-groovy"},'pluginManagement {\n    resolutionStrategy {\n        eachPlugin {\n            if (requested.id.id == "io.gitlab.arturbosch.detekt") {\n                useModule("io.gitlab.arturbosch.detekt:detekt-gradle-plugin:${requested.version}")\n            }\n        }\n    }\n    repositories {\n        // Your other repos here.\n        maven {\n            url = uri("https://oss.sonatype.org/content/repositories/snapshots/")\n        }\n    }\n}\n')),(0,s.kt)("p",null,"Please note that the extra ",(0,s.kt)("inlineCode",{parentName:"p"},"resolutionStrategy{}")," block is needed as we don't publish a Gradle Plugin marker for our snapshots."))}h.isMDXComponent=!0}}]);