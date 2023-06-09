"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[4715],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8384:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return m}});var a=n(3117),i=n(102),l=(n(7294),n(3905)),o=["components"],r={title:"Complexity Rule Set",sidebar:"home_sidebar",keywords:["rules","complexity"],permalink:"complexity.html",toc:!0,folder:"documentation"},p=void 0,s={unversionedId:"rules/complexity",id:"rules/complexity",title:"Complexity Rule Set",description:"This rule set contains rules that report complex code.",source:"@site/docs/rules/complexity.md",sourceDirName:"rules",slug:"/rules/complexity",permalink:"/docs/next/rules/complexity",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/rules/complexity.md",tags:[],version:"current",frontMatter:{title:"Complexity Rule Set",sidebar:"home_sidebar",keywords:["rules","complexity"],permalink:"complexity.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Comments Rule Set",permalink:"/docs/next/rules/comments"},next:{title:"Coroutines Rule Set",permalink:"/docs/next/rules/coroutines"}},d={},m=[{value:"CognitiveComplexMethod",id:"cognitivecomplexmethod",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"ComplexCondition",id:"complexcondition",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"ComplexInterface",id:"complexinterface",level:3},{value:"Configuration options:",id:"configuration-options-2",level:4},{value:"CyclomaticComplexMethod",id:"cyclomaticcomplexmethod",level:3},{value:"Configuration options:",id:"configuration-options-3",level:4},{value:"LabeledExpression",id:"labeledexpression",level:3},{value:"Configuration options:",id:"configuration-options-4",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"LargeClass",id:"largeclass",level:3},{value:"Configuration options:",id:"configuration-options-5",level:4},{value:"LongMethod",id:"longmethod",level:3},{value:"Configuration options:",id:"configuration-options-6",level:4},{value:"LongParameterList",id:"longparameterlist",level:3},{value:"Configuration options:",id:"configuration-options-7",level:4},{value:"MethodOverloading",id:"methodoverloading",level:3},{value:"Configuration options:",id:"configuration-options-8",level:4},{value:"NamedArguments",id:"namedarguments",level:3},{value:"Configuration options:",id:"configuration-options-9",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4},{value:"NestedBlockDepth",id:"nestedblockdepth",level:3},{value:"Configuration options:",id:"configuration-options-10",level:4},{value:"NestedScopeFunctions",id:"nestedscopefunctions",level:3},{value:"Configuration options:",id:"configuration-options-11",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-3",level:4},{value:"Compliant Code:",id:"compliant-code-3",level:4},{value:"ReplaceSafeCallChainWithRun",id:"replacesafecallchainwithrun",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-4",level:4},{value:"Compliant Code:",id:"compliant-code-4",level:4},{value:"StringLiteralDuplication",id:"stringliteralduplication",level:3},{value:"Configuration options:",id:"configuration-options-12",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-5",level:4},{value:"Compliant Code:",id:"compliant-code-5",level:4},{value:"TooManyFunctions",id:"toomanyfunctions",level:3},{value:"Configuration options:",id:"configuration-options-13",level:4}],u={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This rule set contains rules that report complex code."),(0,l.kt)("h3",{id:"cognitivecomplexmethod"},"CognitiveComplexMethod"),(0,l.kt)("p",null,"Complex methods are hard to understand and read. It might not be obvious what side-effects a complex method has.\nPrefer splitting up complex methods into smaller methods that are in turn easier to understand.\nSmaller methods can also be named much clearer which leads to improved readability of the code."),(0,l.kt)("p",null,"This rule measures and restricts the complexity of the method through the ",(0,l.kt)("a",{parentName:"p",href:"https://www.sonarsource.com/docs/CognitiveComplexity.pdf"},"Cognitive Complexity metric of Sonasource"),".\nWhich improves McCabe's Cyclomatic Complexity (see ",(0,l.kt)("a",{parentName:"p",href:"/docs/rules/complexity#cyclomaticcomplexmethod"},"CyclomaticComplexMethod"),") considering the programmer's mental model."),(0,l.kt)("p",null,"Similar to cyclomatic complexity, it is a mathematical model that increases +1 complexity for flow control statements,\nbut increases additional complexity when the statements are deeply nested."),(0,l.kt)("p",null,"The statements that increase the complexity or the nesting level are as follows."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Complexity Increments")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"when"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"for"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"while"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"do while"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"catch"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"labeled break"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"labeled continue"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"labeled return"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"recursion call"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"&&"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"||")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Nesting Level Increments")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"when"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"for"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"while"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"do while"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"catch"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"nested function")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Additional Complexity Increments by Nesting Level")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"when"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"for"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"while"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"do while"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"catch"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,l.kt)("h4",{id:"configuration-options"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"threshold")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"15"),")"),(0,l.kt)("p",{parentName:"li"},"Cognitive Complexity number for a method."))),(0,l.kt)("h3",{id:"complexcondition"},"ComplexCondition"),(0,l.kt)("p",null,"Complex conditions make it hard to understand which cases lead to the condition being true or false. To improve\nreadability and understanding of complex conditions consider extracting them into well-named functions or variables\nand call those instead."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,l.kt)("h4",{id:"configuration-options-1"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"threshold")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,l.kt)("p",{parentName:"li"},"the number of conditions which will trigger the rule"))),(0,l.kt)("h4",{id:"noncompliant-code"},"Noncompliant Code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val str = "foo"\nval isFoo = if (str.startsWith("foo") && !str.endsWith("foo") && !str.endsWith("bar") && !str.endsWith("_")) {\n    // ...\n}\n')),(0,l.kt)("h4",{id:"compliant-code"},"Compliant Code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val str = "foo"\nval isFoo = if (str.startsWith("foo") && hasCorrectEnding()) {\n    // ...\n}\n\nfun hasCorrectEnding() = return !str.endsWith("foo") && !str.endsWith("bar") && !str.endsWith("_")\n')),(0,l.kt)("h3",{id:"complexinterface"},"ComplexInterface"),(0,l.kt)("p",null,"Complex interfaces which contain too many functions and/or properties indicate that this interface is handling too\nmany things at once. Interfaces should follow the single-responsibility principle to also encourage implementations\nof this interface to not handle too many things at once."),(0,l.kt)("p",null,"Large interfaces should be split into smaller interfaces which have a clear responsibility and are easier\nto understand and implement."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,l.kt)("h4",{id:"configuration-options-2"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"threshold")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"10"),")"),(0,l.kt)("p",{parentName:"li"},"the amount of definitions in an interface to trigger the rule")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"includeStaticDeclarations")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"whether static declarations should be included")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"includePrivateDeclarations")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"whether private declarations should be included")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreOverloaded")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"ignore overloaded methods - only count once"))),(0,l.kt)("h3",{id:"cyclomaticcomplexmethod"},"CyclomaticComplexMethod"),(0,l.kt)("p",null,"Complex methods are hard to understand and read. It might not be obvious what side-effects a complex method has.\nPrefer splitting up complex methods into smaller methods that are in turn easier to understand.\nSmaller methods can also be named much clearer which leads to improved readability of the code."),(0,l.kt)("p",null,"This rule uses McCabe's Cyclomatic Complexity (MCC) metric to measure the number of\nlinearly independent paths through a function's source code (",(0,l.kt)("a",{parentName:"p",href:"https://www.ndepend.com/docs/code-metrics#CC"},"https://www.ndepend.com/docs/code-metrics#CC"),").\nThe higher the number of independent paths, the more complex a method is.\nComplex methods use too many of the following statements.\nEach one of them adds one to the complexity count."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Conditional statements")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"if"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"else if"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"when")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Jump statements")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"continue"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"break")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Loops")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"for"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"while"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"do-while"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"forEach")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Operators")," ",(0,l.kt)("inlineCode",{parentName:"li"},"&&"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"||"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"?:")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Exceptions")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"catch"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"use")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scope Functions")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"let"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"run"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"apply"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"also")," ->\n",(0,l.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/scope-functions.html"},"Reference"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Aliases"),": ComplexMethod"),(0,l.kt)("h4",{id:"configuration-options-3"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"threshold")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"15"),")"),(0,l.kt)("p",{parentName:"li"},"McCabe's Cyclomatic Complexity (MCC) number for a method.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreSingleWhenExpression")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"Ignores a complex method if it only contains a single when expression.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreSimpleWhenEntries")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"Whether to ignore simple (braceless) when entries.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreNestingFunctions")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"Whether to ignore functions which are often used instead of an ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"for")," statement.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"nestingFunctions")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"['also', 'apply', 'forEach', 'isNotNull', 'ifNull', 'let', 'run', 'use', 'with']"),")"),(0,l.kt)("p",{parentName:"li"},"Comma separated list of function names which add complexity."))),(0,l.kt)("h3",{id:"labeledexpression"},"LabeledExpression"),(0,l.kt)("p",null,"This rule reports labeled expressions. Expressions with labels generally increase complexity and worsen the\nmaintainability of the code. Refactor the violating code to not use labels instead.\nLabeled expressions referencing an outer class with a label from an inner class are allowed, because there is no\nway to get the instance of an outer class from an inner class in Kotlin."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,l.kt)("h4",{id:"configuration-options-4"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoredLabels")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),")"),(0,l.kt)("p",{parentName:"li"},"allows to provide a list of label names which should be ignored by this rule"))),(0,l.kt)("h4",{id:"noncompliant-code-1"},"Noncompliant Code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val range = listOf<String>("foo", "bar")\nloop@ for (r in range) {\n    if (r == "bar") break@loop\n    println(r)\n}\n\nclass Outer {\n    inner class Inner {\n        fun f() {\n            val i = this@Inner // referencing itself, use `this instead\n        }\n    }\n}\n')),(0,l.kt)("h4",{id:"compliant-code-1"},"Compliant Code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val range = listOf<String>("foo", "bar")\nfor (r in range) {\n    if (r == "bar") break\n    println(r)\n}\n\nclass Outer {\n    inner class Inner {\n        fun f() {\n            val outer = this@Outer\n        }\n        fun Int.extend() {\n            val inner = this@Inner // this would reference Int and not Inner\n        }\n    }\n}\n')),(0,l.kt)("h3",{id:"largeclass"},"LargeClass"),(0,l.kt)("p",null,"This rule reports large classes. Classes should generally have one responsibility. Large classes can indicate that\nthe class does instead handle multiple responsibilities. Instead of doing many things at once prefer to\nsplit up large classes into smaller classes. These smaller classes are then easier to understand and handle less\nthings."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,l.kt)("h4",{id:"configuration-options-5"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"threshold")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"600"),")"),(0,l.kt)("p",{parentName:"li"},"the size of class required to trigger the rule"))),(0,l.kt)("h3",{id:"longmethod"},"LongMethod"),(0,l.kt)("p",null,"Methods should have one responsibility. Long methods can indicate that a method handles too many cases at once.\nPrefer smaller methods with clear names that describe their functionality clearly."),(0,l.kt)("p",null,"Extract parts of the functionality of long methods into separate, smaller methods."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,l.kt)("h4",{id:"configuration-options-6"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"allowedLines")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"60"),")"),(0,l.kt)("p",{parentName:"li"},"number of lines in a method that are allowed at maximum"))),(0,l.kt)("h3",{id:"longparameterlist"},"LongParameterList"),(0,l.kt)("p",null,"Reports functions and constructors which have more parameters than a certain threshold."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,l.kt)("h4",{id:"configuration-options-7"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("del",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"del"},"threshold"))," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"6"),")"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Deprecated"),": Use ",(0,l.kt)("inlineCode",{parentName:"p"},"functionThreshold")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"constructorThreshold")," instead"),(0,l.kt)("p",{parentName:"li"},"number of parameters required to trigger the rule")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"functionThreshold")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"6"),")"),(0,l.kt)("p",{parentName:"li"},"number of function parameters required to trigger the rule")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"constructorThreshold")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"7"),")"),(0,l.kt)("p",{parentName:"li"},"number of constructor parameters required to trigger the rule")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreDefaultParameters")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"ignore parameters that have a default value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreDataClasses")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,l.kt)("p",{parentName:"li"},"ignore long constructor parameters list for data classes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreAnnotatedParameter")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),")"),(0,l.kt)("p",{parentName:"li"},"ignore the annotated parameters for the count (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"fun foo(@Value bar: Int)")," would not be counted"))),(0,l.kt)("h3",{id:"methodoverloading"},"MethodOverloading"),(0,l.kt)("p",null,"This rule reports methods which are overloaded often.\nMethod overloading tightly couples these methods together which might make the code harder to understand."),(0,l.kt)("p",null,"Refactor these methods and try to use optional parameters instead to prevent some of the overloading."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,l.kt)("h4",{id:"configuration-options-8"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"threshold")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"6"),")"),(0,l.kt)("p",{parentName:"li"},"number of overloads which will trigger the rule"))),(0,l.kt)("h3",{id:"namedarguments"},"NamedArguments"),(0,l.kt)("p",null,"Reports function invocations which have more arguments than a certain threshold and are all not named. Calls with\ntoo many arguments are more difficult to understand so a named arguments help."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,l.kt)("h4",{id:"configuration-options-9"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"threshold")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"3"),")"),(0,l.kt)("p",{parentName:"li"},"number of arguments that triggers this inspection")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreArgumentsMatchingNames")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"ignores when argument values are the same as the parameter names"))),(0,l.kt)("h4",{id:"noncompliant-code-2"},"Noncompliant Code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun sum(a: Int, b: Int, c: Int, d: Int) {\n}\nsum(1, 2, 3, 4)\n")),(0,l.kt)("h4",{id:"compliant-code-2"},"Compliant Code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun sum(a: Int, b: Int, c: Int, d: Int) {\n}\nsum(a = 1, b = 2, c = 3, d = 4)\n")),(0,l.kt)("h3",{id:"nestedblockdepth"},"NestedBlockDepth"),(0,l.kt)("p",null,"This rule reports excessive nesting depth in functions. Excessively nested code becomes harder to read and increases\nits hidden complexity. It might become harder to understand edge-cases of the function."),(0,l.kt)("p",null,"Prefer extracting the nested code into well-named functions to make it easier to understand."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,l.kt)("h4",{id:"configuration-options-10"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"threshold")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,l.kt)("p",{parentName:"li"},"the nested depth required to trigger rule"))),(0,l.kt)("h3",{id:"nestedscopefunctions"},"NestedScopeFunctions"),(0,l.kt)("p",null,"Although the scope functions are a way of making the code more concise, avoid overusing them: it can decrease\nyour code readability and lead to errors. Avoid nesting scope functions and be careful when chaining them:\nit's easy to get confused about the current context object and the value of this or it."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/scope-functions.html"},"Reference")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,l.kt)("h4",{id:"configuration-options-11"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"threshold")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),")"),(0,l.kt)("p",{parentName:"li"},"Number of nested scope functions allowed.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"functions")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"['kotlin.apply', 'kotlin.run', 'kotlin.with', 'kotlin.let', 'kotlin.also']"),")"),(0,l.kt)("p",{parentName:"li"},"Set of scope function names which add complexity. Function names have to be fully qualified. For example 'kotlin.apply'."))),(0,l.kt)("h4",{id:"noncompliant-code-3"},"Noncompliant Code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Try to figure out, what changed, without knowing the details\nfirst.apply {\n    second.apply {\n        b = a\n        c = b\n    }\n}\n")),(0,l.kt)("h4",{id:"compliant-code-3"},"Compliant Code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// 'a' is a property of current class\n// 'b' is a property of class 'first'\n// 'c' is a property of class 'second'\nfirst.b = this.a\nsecond.c = first.b\n")),(0,l.kt)("h3",{id:"replacesafecallchainwithrun"},"ReplaceSafeCallChainWithRun"),(0,l.kt)("p",null,"Chains of safe calls on non-nullable types are redundant and can be removed by enclosing the redundant safe calls in\na ",(0,l.kt)("inlineCode",{parentName:"p"},"run {}")," block. This improves code coverage and reduces cyclomatic complexity as redundant null checks are removed."),(0,l.kt)("p",null,"This rule only checks from the end of a chain and works backwards, so it won't recommend inserting run blocks in the\nmiddle of a safe call chain as that is likely to make the code more difficult to understand."),(0,l.kt)("p",null,"The rule will check for every opportunity to replace a safe call when it sits at the end of a chain, even if there's\nonly one, as that will still improve code coverage and reduce cyclomatic complexity."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Requires Type Resolution")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 10min"),(0,l.kt)("h4",{id:"noncompliant-code-4"},"Noncompliant Code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val x = System.getenv()\n    ?.getValue("HOME")\n    ?.toLowerCase()\n    ?.split("/") ?: emptyList()\n')),(0,l.kt)("h4",{id:"compliant-code-4"},"Compliant Code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val x = getenv()?.run {\n    getValue("HOME")\n        .toLowerCase()\n        .split("/")\n} ?: emptyList()\n')),(0,l.kt)("h3",{id:"stringliteralduplication"},"StringLiteralDuplication"),(0,l.kt)("p",null,"This rule detects and reports duplicated String literals. Repeatedly typing out the same String literal across the\ncodebase makes it harder to change and maintain."),(0,l.kt)("p",null,"Instead, prefer extracting the String literal into a property or constant."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 5min"),(0,l.kt)("h4",{id:"configuration-options-12"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"threshold")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"3"),")"),(0,l.kt)("p",{parentName:"li"},"amount of duplications to trigger rule")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreAnnotation")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,l.kt)("p",{parentName:"li"},"if values in Annotations should be ignored")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"excludeStringsWithLessThan5Characters")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,l.kt)("p",{parentName:"li"},"if short strings should be excluded")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreStringsRegex")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"'$^'"),")"),(0,l.kt)("p",{parentName:"li"},"RegEx of Strings that should be ignored"))),(0,l.kt)("h4",{id:"noncompliant-code-5"},"Noncompliant Code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'class Foo {\n\n    val s1 = "lorem"\n    fun bar(s: String = "lorem") {\n        s1.equals("lorem")\n    }\n}\n')),(0,l.kt)("h4",{id:"compliant-code-5"},"Compliant Code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'class Foo {\n    val lorem = "lorem"\n    val s1 = lorem\n    fun bar(s: String = lorem) {\n        s1.equals(lorem)\n    }\n}\n')),(0,l.kt)("h3",{id:"toomanyfunctions"},"TooManyFunctions"),(0,l.kt)("p",null,"This rule reports files, classes, interfaces, objects and enums which contain too many functions.\nEach element can be configured with different thresholds."),(0,l.kt)("p",null,"Too many functions indicate a violation of the single responsibility principle. Prefer extracting functionality\nwhich clearly belongs together in separate parts of the code."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Debt"),": 20min"),(0,l.kt)("h4",{id:"configuration-options-13"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"thresholdInFiles")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"11"),")"),(0,l.kt)("p",{parentName:"li"},"threshold in files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"thresholdInClasses")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"11"),")"),(0,l.kt)("p",{parentName:"li"},"threshold in classes")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"thresholdInInterfaces")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"11"),")"),(0,l.kt)("p",{parentName:"li"},"threshold in interfaces")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"thresholdInObjects")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"11"),")"),(0,l.kt)("p",{parentName:"li"},"threshold in objects")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"thresholdInEnums")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"11"),")"),(0,l.kt)("p",{parentName:"li"},"threshold in enums")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreDeprecated")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"ignore deprecated functions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignorePrivate")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"ignore private functions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreOverridden")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"ignore overridden functions"))))}c.isMDXComponent=!0}}]);