"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[1466],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),g=i,k=c["".concat(l,".").concat(g)]||c[g]||d[g]||o;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8362:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var n=r(3117),i=r(102),o=(r(7294),r(3905)),a=["components"],s={id:"reporting",title:"Reporting",keywords:["reporting"],summary:"This page describes each reporting format and explains how to leverage them.",sidebar_position:4},l=void 0,u={unversionedId:"introduction/reporting",id:"introduction/reporting",title:"Reporting",description:"Formats",source:"@site/docs/introduction/reporting.md",sourceDirName:"introduction",slug:"/introduction/reporting",permalink:"/docs/introduction/reporting",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/introduction/reporting.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"reporting",title:"Reporting",keywords:["reporting"],summary:"This page describes each reporting format and explains how to leverage them.",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Detekt Configuration File",permalink:"/docs/introduction/configurations"},next:{title:"Configuration for Compose",permalink:"/docs/introduction/compose"}},p={},d=[{value:"Formats",id:"formats",level:2},{value:"TXT",id:"txt",level:3},{value:"HTML",id:"html",level:3},{value:"XML",id:"xml",level:3},{value:"SARIF",id:"sarif",level:3},{value:"MD",id:"md",level:3},{value:"Severity",id:"severity",level:2},{value:"Relative path",id:"relative-path",level:2},{value:"Merging reports",id:"merging-reports",level:2},{value:"Groovy DSL",id:"groovy-dsl",level:3},{value:"Kotlin DSL",id:"kotlin-dsl",level:3},{value:"Integration with Github Code Scanning",id:"integration-with-github-code-scanning",level:2}],c={toc:d};function g(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"formats"},"Formats"),(0,o.kt)("p",null,"In addition to the CLI output, Detekt supports 4 different types of output reporting formats.\nYou can refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/gettingstarted/cli"},"CLI")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/gettingstarted/gradle"},"Gradle")," to find\nout how to configure these report formats."),(0,o.kt)("h3",{id:"txt"},"TXT"),(0,o.kt)("p",null,"Similar to the console output, each line of the txt output represents a finding and contains\nfinding signature to help edit ",(0,o.kt)("a",{parentName:"p",href:"/docs/gettingstarted/gradle"},"baseline files"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"EmptyFunctionBlock - [This empty block of code can be removed.] at /user/home/detekt/detekt-gradle-plugin/src/main/kotlin/io/gitlab/arturbosch/detekt/DetektPlugin.kt:14:42 - Signature=DetektPlugin.kt$DetektPlugin${ }\nNoUnusedImports - [Unused import] at /user/home/detekt/detekt-gradle-plugin/src/main/kotlin/io/gitlab/arturbosch/detekt/DetektPlugin.kt:9:1 - Signature=io.gitlab.arturbosch.detekt.DetektPlugin.kt:9\nNoUnusedImports - [Unused import] at /user/home/detekt/detekt-gradle-plugin/src/main/kotlin/io/gitlab/arturbosch/detekt/DetektPlugin.kt:10:1 - Signature=io.gitlab.arturbosch.detekt.DetektPlugin.kt:10\nNoConsecutiveBlankLines - [Needless blank line(s)] at /user/home/detekt/detekt-gradle-plugin/src/main/kotlin/io/gitlab/arturbosch/detekt/DetektPlugin.kt:86:1 - Signature=io.gitlab.arturbosch.detekt.DetektPlugin.kt:86\nUnusedPrivateMember - [Private function registerDetektJvmTasks is unused.] at /user/home/detekt/detekt-gradle-plugin/src/main/kotlin/io/gitlab/arturbosch/detekt/DetektPlugin.kt:17:5 - Signature=DetektPlugin.kt$DetektPlugin$private fun Project.registerDetektJvmTasks(extension: DetektExtension)\n")),(0,o.kt)("h3",{id:"html"},"HTML"),(0,o.kt)("p",null,"HTML is a human-readable format that can be open through browser. It includes different metrics\nand complexity reports of this run, in addition to the findings with detailed descriptions and\nreport. Check out the example: ",(0,o.kt)("img",{alt:"HTML report",src:r(6637).Z,width:"938",height:"859"})),(0,o.kt)("h3",{id:"xml"},"XML"),(0,o.kt)("p",null,"XML is a machine-readable format that can be integrated with CI tools. It is compatible with\n",(0,o.kt)("a",{parentName:"p",href:"https://checkstyle.sourceforge.io/"},"Checkstyle")," output."),(0,o.kt)("h3",{id:"sarif"},"SARIF"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://sarifweb.azurewebsites.net/"},"SARIF")," is a standard format for the output of\nstatic analysis tools. It is a JSON format with a defined\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.oasis-open.org/sarif/sarif/v2.0/csprd02/schemas/"},"schema"),". It is currently supported\nby GitHub Code Scanning, and we expect more consuming tools will adopt this format in the future."),(0,o.kt)("h3",{id:"md"},"MD"),(0,o.kt)("p",null,"Markdown is a lightweight markup language for creating formatted text using a plain-text editor.\nThe output structure looks similar to HTML format.\nAbout ",(0,o.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/#what-is-markdown-"},"markdown")," on GitHub."),(0,o.kt)("h2",{id:"severity"},"Severity"),(0,o.kt)("p",null,"For machine-readable format, it is possible to configure the severity of each finding to fit\nyour CI policy with respects to errors. You may specify the severity level in the config file\nfor rule, or ruleSets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"empty-blocks:\n  active: true\n  severity: error\n  EmptyCatchBlock:\n    active: true\n    severity: info\n")),(0,o.kt)("p",null,"The severity will be computed in the priority order:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Severity of the rule if exists"),(0,o.kt)("li",{parentName:"ul"},"Severity of the parent ruleset if exists"),(0,o.kt)("li",{parentName:"ul"},"Default severity: warning")),(0,o.kt)("h2",{id:"relative-path"},"Relative path"),(0,o.kt)("p",null,"In a shared codebase, it is often required to use relative path so that all developers and tooling\nhave a consistent view. This can be enabled by CLI option ",(0,o.kt)("inlineCode",{parentName:"p"},"--base-path")," or Gradle as the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},"detekt {\n    basePath = projectDir\n}\n")),(0,o.kt)("p",null,"Note that this option only affects file paths in those formats for machine consumers,\nnamely XML and SARIF."),(0,o.kt)("h2",{id:"merging-reports"},"Merging reports"),(0,o.kt)("p",null,"The machine-readable report formats support report merging.\nDetekt Gradle plugin is not opinionated in how merging is set up and respects each project's build logic, especially\nthe merging makes most sense in a multi-module project. In this spirit, only Gradle tasks are provided."),(0,o.kt)("p",null,"At the moment, merging XML and SARIF are supported. You can refer to the sample build script below and\nrun ",(0,o.kt)("inlineCode",{parentName:"p"},"./gradlew detekt reportMerge --continue")," to execute detekt tasks and merge the corresponding reports."),(0,o.kt)("h3",{id:"groovy-dsl"},"Groovy DSL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy"},'task reportMerge(type: io.gitlab.arturbosch.detekt.report.ReportMergeTask) {\n  output = project.layout.buildDirectory.file("reports/detekt/merge.xml") // or "reports/detekt/merge.sarif"\n}\n\nsubprojects {\n  detekt {\n    reports.xml.required.set(true)\n    // reports.sarif.required.set(true)\n  }\n\n  plugins.withType(io.gitlab.arturbosch.detekt.DetektPlugin) {\n    tasks.withType(io.gitlab.arturbosch.detekt.Detekt) { detektTask ->\n      finalizedBy(reportMerge)\n\n      reportMerge.configure { mergeTask ->\n        mergeTask.input.from(detektTask.xmlReportFile) // or detektTask.sarifReportFile\n      }\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"kotlin-dsl"},"Kotlin DSL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'val reportMerge by tasks.registering(io.gitlab.arturbosch.detekt.report.ReportMergeTask::class) { \n  output.set(rootProject.buildDir.resolve("reports/detekt/merge.xml")) // or "reports/detekt/merge.sarif"\n}\n\nsubprojects {\n  detekt {\n    reports.xml.required.set(true)\n    // reports.sarif.required.set(true)\n  }\n  \n  plugins.withType(io.gitlab.arturbosch.detekt.DetektPlugin::class) {\n    tasks.withType(io.gitlab.arturbosch.detekt.Detekt::class) detekt@{\n      finalizedBy(reportMerge)\n\n      reportMerge.configure {\n        input.from(this@detekt.xmlReportFile) // or .sarifReportFile\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"integration-with-github-code-scanning"},"Integration with Github Code Scanning"),(0,o.kt)("p",null,"If your repository is hosted on Github, you can enable SARIF output in your repository.\nYou can follow to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github"},"official documentation"),"."),(0,o.kt)("p",null,"You can follow the example below as a quick start:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"jobs:\n  without-type-resolution:\n    runs-on: ubuntu-latest\n    env:\n      GRADLE_OPTS: -Dorg.gradle.daemon=false\n    steps:\n      - name: Checkout Repo\n        uses: actions/checkout@v2\n\n      - name: Setup Java\n        uses: actions/setup-java@v1\n        with:\n          java-version: 11\n\n      - name: Run detekt\n        run: ./gradlew detekt\n\n      # Make sure we always run this upload task,\n      # because the previous step may fail if there are findings.\n      - name: Upload SARIF to Github using the upload-sarif action\n        uses: github/codeql-action/upload-sarif@v1\n        if: success() || failure()\n        with:\n          sarif_file: build/detekt.sarif\n")))}g.isMDXComponent=!0},6637:function(e,t,r){t.Z=r.p+"assets/images/html-42a530ca6e13fbd9df798bc6a8369bcd.png"}}]);