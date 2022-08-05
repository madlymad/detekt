"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[7495],{3905:function(e,t,A){A.d(t,{Zo:function(){return m},kt:function(){return c}});var n=A(7294);function i(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function r(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function a(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?r(Object(A),!0).forEach((function(t){i(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function o(e,t){if(null==e)return{};var A,n,i=function(e,t){if(null==e)return{};var A,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)A=r[n],t.indexOf(A)>=0||(i[A]=e[A]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)A=r[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(i[A]=e[A])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),A=t;return e&&(A="function"==typeof e?e(t):a(a({},t),e)),A},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var A=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(A),c=i,h=p["".concat(l,".").concat(c)]||p[c]||u[c]||r;return A?n.createElement(h,a(a({ref:t},m),{},{components:A})):n.createElement(h,a({ref:t},m))}));function c(e,t){var A=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=A.length,a=new Array(r);a[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<r;s++)a[s]=A[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,A)}p.displayName="MDXCreateElement"},4708:function(e,t,A){A.r(t),A.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=A(3117),i=A(102),r=(A(7294),A(3905)),a=["components"],o={title:"Calling it One Zero",published:!0,permalink:"calling-it-one-zero.html",summary:"So we finally made it. One zero.",tags:["news"]},l=void 0,s={permalink:"/blog/2019/08/04/calling-it-one-zero",editUrl:"https://github.com/detekt/detekt/edit/main/website/blog/2019-08-04-calling-it-one-zero.md",source:"@site/blog/2019-08-04-calling-it-one-zero.md",title:"Calling it One Zero",description:"Today we are announcing the 1.0 release of detekt, a static code analysis tool for Kotlin.",date:"2019-08-04T00:00:00.000Z",formattedDate:"August 4, 2019",tags:[{label:"news",permalink:"/blog/tags/news"}],readingTime:2.395,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Calling it One Zero",published:!0,permalink:"calling-it-one-zero.html",summary:"So we finally made it. One zero.",tags:["news"]},prevItem:{title:"Howto: make detekt silent",permalink:"/blog/2019/08/14/custom-console-reports"},nextItem:{title:"Howto: using snapshot releases of detekt",permalink:"/blog/2019/06/29/using-detekt-snapshots"}},m={authorsImageUrls:[]},u=[],p={toc:u};function c(e){var t=e.components,o=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Today we are announcing the ",(0,r.kt)("strong",{parentName:"p"},"1.0")," release of detekt, a static code analysis tool for Kotlin.\nIt operates on the abstract syntax tree provided by the Kotlin compiler and finds common\nprogramming flaws like unused or too complex constructs. Think of it as ",(0,r.kt)("em",{parentName:"p"},"pmd")," or ",(0,r.kt)("em",{parentName:"p"},"checkstyle")," but for Kotlin."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.0")," offers the following features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code smell analysis for your Kotlin projects"),(0,r.kt)("li",{parentName:"ul"},"Complexity reports based on lines of code, cyclomatic complexity and amount of code smells"),(0,r.kt)("li",{parentName:"ul"},"Highly configurable rule sets"),(0,r.kt)("li",{parentName:"ul"},"Suppression of findings with Kotlin's ",(0,r.kt)("inlineCode",{parentName:"li"},"@Suppress")," and Java's ",(0,r.kt)("inlineCode",{parentName:"li"},"@SuppressWarnings")," annotations"),(0,r.kt)("li",{parentName:"ul"},"Specification of quality gates which will break your build "),(0,r.kt)("li",{parentName:"ul"},"Code Smell baseline for legacy projects"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#with-gradle"},"Gradle plugin")," for code analysis via Gradle builds"),(0,r.kt)("li",{parentName:"ul"},"Gradle tasks to use local ",(0,r.kt)("inlineCode",{parentName:"li"},"IntelliJ")," distribution for formatting and inspecting Kotlin code"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/arturbosch/sonar-kotlin"},"SonarQube integration")),(0,r.kt)("li",{parentName:"ul"},"Extensibility by enabling incorporation of personal rule sets, ",(0,r.kt)("inlineCode",{parentName:"li"},"FileProcessListener's")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"OutputReport's")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/detekt/detekt-intellij-plugin"},"IntelliJ integration")),(0,r.kt)("li",{parentName:"ul"},"Unofficial ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ozsie/detekt-maven-plugin"},"Maven plugin")," by ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Ozsie"},"Ozsie"))),(0,r.kt)("p",null,"Here are some metrics describing detekt's lifespan so far:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"lifespan",src:A(8659).Z,width:"816",height:"323"})),(0,r.kt)("p",null,"detekt is almost ",(0,r.kt)("strong",{parentName:"p"},"3")," years old already!",(0,r.kt)("br",{parentName:"p"}),"\n","As GitHub tells us the project is pretty active.",(0,r.kt)("br",{parentName:"p"}),"\n","You may argue that in 2018 it was more active looking at the number of commits, however that year\nwe also changed our merge strategy from merge-with-rebase to squash-and-merge.\nThat said, it is much harder to achieve these high commit numbers now ;)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"numbers",src:A(4672).Z,width:"1082",height:"76"})),(0,r.kt)("p",null,"There are ",(0,r.kt)("strong",{parentName:"p"},"2516")," commits, ",(0,r.kt)("strong",{parentName:"p"},"52")," releases on GitHub and a total ",(0,r.kt)("strong",{parentName:"p"},"93")," contributors at the time of writing.\n",(0,r.kt)("strong",{parentName:"p"},"20")," out of the 93 authors contributed once or more in the last three months."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"numbers",src:A(737).Z,width:"1160",height:"516"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"~780k")," downloads in the last ",(0,r.kt)("strong",{parentName:"p"},"30 days")," is a pretty high number... three months ago it was around ",(0,r.kt)("strong",{parentName:"p"},"500k"),".\nWeekends clearly stand out. That's when the CI has to rest ;)."),(0,r.kt)("p",null,"This does however not mean one download equals one user. There are like eight detekt modules each with a jar and pom which needs to be downloaded.\nAs most of the downloads are bound to be CI, it is hard to calculate the actual number of detekt users."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"numbers",src:A(6776).Z,width:"1151",height:"533"})),(0,r.kt)("p",null,'What I also noticed is the high number of "early adopters" in the Kotlin world (or just detekt).'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RC09 was released in Sep 2018"),(0,r.kt)("li",{parentName:"ul"},"RC10 was released in Nov 2018"),(0,r.kt)("li",{parentName:"ul"},"RC11 was released in Nov 2018"),(0,r.kt)("li",{parentName:"ul"},"RC12 was released in Dec 2018"),(0,r.kt)("li",{parentName:"ul"},"RC14 was released in Feb 2019"),(0,r.kt)("li",{parentName:"ul"},"RC15 was released in Jun 2019"),(0,r.kt)("li",{parentName:"ul"},"RC16 was released in Jun 2019")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"65%")," of users are on a version published in 2019. But we clearly lost some users in the older versions due to breaking changes in RC13 and RC15.\nWe are excited to see how many users will jump on the 1.x.x release train and how these numbers will look like."),(0,r.kt)("p",null,"Last but not least here is a worldmap of where detekt users are coming from."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"numbers",src:A(7781).Z,width:"1166",height:"644"})),(0,r.kt)("p",null,"References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://bintray.com/arturbosch/code-analysis/detekt#statistics"},"https://bintray.com/arturbosch/code-analysis/detekt#statistics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/detekt/detekt/graphs/contributors"},"https://github.com/detekt/detekt/graphs/contributors"))))}c.isMDXComponent=!0},8659:function(e,t,A){t.Z=A.p+"assets/images/1-lifespan-b89210c1bdb421987179e6da2646ff37.png"},4672:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDoAAABMCAIAAAADe0AhAAAAA3NCSVQICAjb4U/gAAAgAElEQVR4Xu2dCXxNx9vHxR5LiH1fIkHsu8QeS5WoWFu0Wtp/7dVa2qpqq4qiammLUpXa910oRTSUxJLY9z0hrUqChAjC+7sZ7+lxzpnrXiTnRn63+ei5c+bMec53njszzzPPzHF69OhROn5IgARIgARIgARIgARIgARIwPEIpHc8kSgRCZAACZAACZAACZAACZAACVgI0FyhHpAACZAACZAACZAACZAACTgoAZorDloxFIsESIAESIAESIAESIAESIDmCnWABEiABEiABEiABEiABEjAQQnQXHHQiqFYJEACJEACJEACJEACJEACNFeoAyRAAiRAAiRAAiRAAiRAAg5KgOaKg1YMxSIBEiABEiABEiABEiABEqC5Qh0gARIgARIgARIgARIgARJwUAI0Vxy0YigWCZAACZAACZAACZAACZAAzRXqAAmQAAmQAAmQAAmQAAmQgIMSyGgo163Y23G379y7f9/wLBNJgAQyZ8p47/4DciABEtAQyJo1y927CcRCAiRAAiRAArYTyJwpU47s2VxyZje8xMBcSbJVbufL64oLcLHhZUwkARIgARIgARIgARIgARIggeckICZIrkfFoBxDi8UgGEzYKjBUaKs8J31eTgIkQAIkQAIkQAIkQAIkYIWAMDowUwIbxDCbgbnCEBdDUkwkARIgARIgARIgARIgARJIJgIyG8TAXIEEnFdJpmpgsSRAAiRAAiRAAiRAAiRAAhoCVqwPY3OFBEmABEiABEiABEiABEiABEjAdAI0V0yvAgpAAiRAAiRAAiRAAiRAAiRgTIDmijEXppIACZAACZAACZAACZAACZhOgOaK6VVAAUiABEiABEiABEiABEiABIwJ0Fwx5sJUEiABEiABEiABEiABEiAB0wnQXDG9CigACZAACZAACZAACZAACZCAMQGaK8ZcmEoCJEACJEACJEACJEACJGA6AZorplcBBSABEiABEiABEiABEiABEjAmQHPFmAtTSYAESIAESIAESIAESIAETCdAc8X0KqAAJEACJEACJEACJEACJEACxgRorhhzYSoJkAAJkECqJhAffzd4f9iUGXMOHT2Rqh+EwpMACZBAGieQ0dznj7gaGbzvIP6NuPJ3saKF8rq6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"},737:function(e,t,A){t.Z=A.p+"assets/images/3-bintray-absolute-924adc575a374ccf834da3e88b3fc7ec.png"},6776:function(e,t,A){t.Z=A.p+"assets/images/4-bintray-percent-46d42d5abfba0157bd16dc6f6077e3c0.png"},7781:function(e,t,A){t.Z=A.p+"assets/images/5-bintray-world-b0ef653e07203593d6fec23013825ec8.png"}}]);