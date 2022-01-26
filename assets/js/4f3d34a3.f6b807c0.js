"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2915],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,b=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15472:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Power BI"},c=void 0,p={unversionedId:"apps/powerbi",id:"apps/powerbi",title:"Power BI",description:"(Work in progress)",source:"@site/docs/apps/powerbi.md",sourceDirName:"apps",slug:"/apps/powerbi",permalink:"/documentation/apps/powerbi",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/powerbi.md",tags:[],version:"current",frontMatter:{title:"Power BI"},sidebar:"docs",previous:{title:"Ona.io",permalink:"/documentation/apps/ona"},next:{title:"Primero",permalink:"/documentation/apps/primero"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Integration Use Cases",id:"integration-use-cases",children:[],level:2}],l={toc:u};function f(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"(Work in progress)"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://powerbi.microsoft.com/en-us/"},"Power BI")," is a business analytics service by Microsoft. It provides interactive\nvisualizations and business intelligence capabilities with an interface simple\nenough for end users to create their own reports and dashboards."),(0,a.kt)("p",null,"Note that Power BI does not have a built-in database, rather it connects to many\ndifferent data sources (files, databases, etc). For a full list of available data sources, see\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/power-bi/connect-data/power-bi-data-sources"},"Power BI data sources"),"."),(0,a.kt)("p",null,"OpenFn has experience setting up databases structured in a way that Power BI can\npull from."),(0,a.kt)("h2",{id:"integration-use-cases"},"Integration Use Cases"),(0,a.kt)("p",null,"An iNGO uses CommCare, Kobo Toolbox and Survey CTO for different maternal health\nprojects in several different geographies. This iNGO would like to use a\nbusiness intelligence tool, like Power BI, to create data visualisations for it's\nprojects' key indicators. To accomplish this, the iNGO uses OpenFn to take the\nsurvey data from CommCare, Kobo Toolbox and Survey CTO and then create a\nstructured database from it using MySQL. Once the structured database is\nestablished, OpenFn assists the iNGO with connecting this data to Power BI."),(0,a.kt)("p",null,"Refer to the diagram below for a visualization of the data flow cited in the\nabove use case."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tableau Data Flow Visualization",src:n(84013).Z})))}f.isMDXComponent=!0},84013:function(e,t,n){t.Z=n.p+"assets/images/survey_db_powerbi-450b87361ecb103bba3d58ace03eaf59.png"}}]);