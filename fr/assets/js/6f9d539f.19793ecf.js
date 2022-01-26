"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8783],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5072:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Designing a job"},l=void 0,u={unversionedId:"jobs/job-design-intro",id:"jobs/job-design-intro",title:"Designing a job",description:"A job defines the specific series of tasks or database actions to be performed when a triggering message is received (even-based) or a pre-scheduled (and recurring) time is reached. It's the series of instructions for handling the data coming from a source system and to be sent to the destination system, or in other words, mapping data elements from one system to the other.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/jobs/job-design-intro.md",sourceDirName:"jobs",slug:"/jobs/job-design-intro",permalink:"/fr/documentation/jobs/job-design-intro",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/job-design-intro.md",tags:[],version:"current",frontMatter:{title:"Designing a job"},sidebar:"docs",previous:{title:"Introduction aux Jobs",permalink:"/fr/documentation/build/jobs"},next:{title:"Un examen plus approfondi des jobs",permalink:"/fr/documentation/jobs/understanding"}},p=[],d={toc:p};function c(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A job defines the specific series of tasks or database actions to be performed when a triggering message is received (even-based) or a pre-scheduled (and recurring) time is reached. It's the series of instructions for handling the data coming from a source system and to be sent to the destination system, or in other words, mapping data elements from one system to the other."),(0,o.kt)("p",null,"Designing a job really just means clearly defining the \u201crules\u201d for data element mapping. We'll walk through the main steps using Kobo Toolbox as an example source system and a Postgres database as destination but check out the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/design/design-quickstart/"},"integration design")," page for more details on data flow diagrams and mappings."),(0,o.kt)("p",null,"Step 1: Map your data flows"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define your input(s). What data collection forms are used to collect data? How many forms? Are there different form versions?"),(0,o.kt)("li",{parentName:"ol"},"Define your output(s). Where should the data be stored? In what format? What are your analysis requirements?")),(0,o.kt)("p",null,"Step 2: Map your data elements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Export the metadata of your form (input) & destination DB (output)."),(0,o.kt)("li",{parentName:"ol"},"Paste the metadata into an Excel spreadsheet to create a mapping sheet:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sample mapping sheet",src:n(64086).Z})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Map data elements & define rules for data cleaning and transformation a. How should the data collected be translated into your destination system\u2019s data model?\xa0 b. Does your destination system have data input & validation requirements?")),(0,o.kt)("p",null,"Step 3. Define your operations: insert, update, upsert..."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Find out or create the unique identifiers you will use to insert and update data (form ID, answer ID, or, case or patient ID etc.)."),(0,o.kt)("li",{parentName:"ol"},"Determine operations: e.g. insert, update, upsert, upsertMany"),(0,o.kt)("li",{parentName:"ol"},"Check the adaptor for helper functions. a. Example from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/language-postgresql"},"language-postgresql"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"insert(...)"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"insertMany(...)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"update(...)"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"updateMany(...)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upsert(...)"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"upsertMany(...)")," \xa0\u2192 update if record exists or insert if it doesn\u2019t; references an external Id b. Example from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/language-dhis2"},"language-dhis2")," using Tracked Entity Instances (TEI)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"updateTEI(...)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upsertTEI(...)"))))),(0,o.kt)("p",null,"Example upsert job:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"upsert('mainDataTable', 'AnswerId', {\n\xa0 AnswerId: dataValue('\\_id'), //external Id for upsert\n\xa0\xa0column: dataValue('firstQuestion)'),\n\xa0\xa0LastUpdate: new Date().toISOString(),\n\xa0\xa0Participant: dataValue('participant'),\n\xa0\xa0Surveyor: dataValue('surveyor'),\n\xa0\xa0...\n});\n")))}c.isMDXComponent=!0},64086:function(e,t,n){t.Z=n.p+"assets/images/data-element-mapping-53702f0218d1a7a89f82f5b8006ff82e.png"}}]);