"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7842],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(b,i(i({ref:t},l),{},{components:n})):a.createElement(b,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81521:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i={title:"Tableau"},s=void 0,c={unversionedId:"apps/tableau",id:"apps/tableau",isDocsHomePage:!1,title:"Tableau",description:"(Work in progress)",source:"@site/docs/apps/tableau.md",sourceDirName:"apps",slug:"/apps/tableau",permalink:"/documentation/apps/tableau",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/tableau.md",tags:[],version:"current",frontMatter:{title:"Tableau"},sidebar:"docs",previous:{title:"SurveyCTO",permalink:"/documentation/apps/survey-cto"},next:{title:"FAQs",permalink:"/documentation/faqs"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Integration Use Cases",id:"integration-use-cases",children:[]}],l={toc:u};function p(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"(Work in progress)"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.tableau.com/"},"Tableau")," is a visual analytics platform that helps\npeople use data to solve problems."),(0,o.kt)("p",null,'Tableau Desktop does not have a built-in database, rather it connects to\ndifferent data sources (files, databases, etc). After connecting to a data\nsource, Tableau can "extract" that data into a Tableau Data Extract file that is\nboth compressed and represented in a columnar store format.'),(0,o.kt)("p",null,"A list of the data sources that you can connect to Tableau from can be found\nhere: ",(0,o.kt)("a",{parentName:"p",href:"https://www.tableau.com/products/techspecs"},"https://www.tableau.com/products/techspecs")),(0,o.kt)("p",null,"OpenFn has experience setting up databases structured in a way that Tableau can\npull from."),(0,o.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,o.kt)("p",null,"An iNGO uses CommCare, Kobo Toolbox and Survey CTO for different maternal health\nprojects in several different geographies. This iNGO would like to use a\nbusiness intelligence tool, like Tableau, to create data visualisations for it's\nprojects' key indicators. To accomplish this, the iNGO uses OpenFn to take the\nsurvey data from CommCare, Kobo Toolbox and Survey CTO and then create a\nstructured database from it using MySQL. Once the structured database is\nestablished, OpenFn assists the iNGO with connecting this data to Tableau."),(0,o.kt)("p",null,"Refer to the diagram below for a visualization of the data flow cited in the\nabove use case."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tableau Data Flow Visualization",src:n(44387).Z})))}p.isMDXComponent=!0},44387:function(e,t,n){t.Z=n.p+"assets/images/survey_db_tableau-fd5bc5832da679ed66badac6a7130303.png"}}]);