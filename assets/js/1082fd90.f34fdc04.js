"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[673],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=f(n),p=i,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var f=2;f<o;f++)a[f]=n[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3369:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return f},toc:function(){return d}});var r=n(3117),i=n(102),o=(n(7294),n(3905)),a=["components"],l={title:"Recipe: diff your detekt config with the default one",published:!0,permalink:"howto-diff-config.html",summary:"This guide shows how to create an additional Gradle task which generates the default detekt config.",tags:["guides"]},c=void 0,f={permalink:"/blog/2020/09/27/additional-diff-config-task",editUrl:"https://github.com/detekt/detekt/edit/main/website/blog/2020-09-27-additional-diff-config-task.md",source:"@site/blog/2020-09-27-additional-diff-config-task.md",title:"Recipe: diff your detekt config with the default one",description:"detekt's ./gradlew detektGenerateConfig task copies the default configuration file to the location",date:"2020-09-27T00:00:00.000Z",formattedDate:"September 27, 2020",tags:[{label:"guides",permalink:"/blog/tags/guides"}],readingTime:.88,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Recipe: diff your detekt config with the default one",published:!0,permalink:"howto-diff-config.html",summary:"This guide shows how to create an additional Gradle task which generates the default detekt config.",tags:["guides"]},nextItem:{title:"Howto: make detekt silent",permalink:"/blog/2019/08/14/custom-console-reports"}},s={authorsImageUrls:[]},d=[],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"detekt's ",(0,o.kt)("inlineCode",{parentName:"p"},"./gradlew detektGenerateConfig")," task copies the default configuration file to the location\nspecified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kt"},"detekt {\n  ...\n  config = files(...)\n  ...\n}\n")),(0,o.kt)("p",null,"When the file on this location already exists, your configuration won't be overwritten, and the task is a noop."),(0,o.kt)("p",null,"When we release a new version, some users like to generate the default one to compare changed properties.\nThis can be done by running the detekt cli with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--generate-config --config [/new/location]")," flags.\nWhen already using Gradle, we can write a custom task and share this procedure with the team:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kt"},'import io.gitlab.arturbosch.detekt.DetektGenerateConfigTask\n\nval createDetektConfigForDiff by tasks.registering(DetektGenerateConfigTask::class) {\n    description = "Generate newest default detekt config"\n    config.setFrom(buildDir.resolve("detekt-diff.yaml"))\n\n    doFirst {\n      // optionally delete the old config diff file first \n    }\n}\n')),(0,o.kt)("p",null,"The last step involves calling your favorite diff tool (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"diff detekt-diff.yaml my_config.yaml"),") or using an online service like ",(0,o.kt)("inlineCode",{parentName:"p"},"http://incaseofstairs.com/jsdiff/"),"."),(0,o.kt)("p",null,"Likewise we can diff the default config of detekt version X with the default config of detekt version X-1. This will tell us which properties are new in version X."))}p.isMDXComponent=!0}}]);