"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8650],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return p}});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=d(a),p=o,f=h["".concat(l,".").concat(p)]||h[p]||c[p]||r;return a?n.createElement(f,i(i({ref:e},u),{},{components:a})):n.createElement(f,i({ref:e},u))}));function p(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},56542:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return h}});var n=a(83117),o=a(80102),r=(a(67294),a(3905)),i=["components"],s={sidebar_label:"Glossary for Data Integration",title:"A glossary for data integration"},l=void 0,d={unversionedId:"getting-started/foundation",id:"getting-started/foundation",isDocsHomePage:!1,title:"A glossary for data integration",description:"Now that we've got a basic understanding of what an integration is, it's important to establish some of the foundational concepts we need to press forward. This doesn't mean you can't use OpenFn if you don't know what any of these words mean prior to reading our documentation, but it does mean that some of the most important tasks along the OpenFn journey will assume at least a basic understanding of each of these terms, which is why this page is here. In some cases, we also link to further reading if you really want a better understanding of some part of your data integration picture.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/foundation.md",sourceDirName:"getting-started",slug:"/getting-started/foundation",permalink:"/fr/documentation/getting-started/foundation",editUrl:"https://github.com/openfn/docs/edit/main/docs/getting-started/foundation.md",tags:[],version:"current",frontMatter:{sidebar_label:"Glossary for Data Integration",title:"A glossary for data integration"},sidebar:"docs",previous:{title:"So, what is an integration? \ud83e\udd14",permalink:"/fr/documentation/getting-started/so-you-want-to-integrate"},next:{title:"OpenFn Overview",permalink:"/fr/documentation/getting-started/overview"}},u=[{value:"API",id:"api",children:[],level:2},{value:"API Protocol",id:"api-protocol",children:[],level:2},{value:"Database",id:"database",children:[],level:2},{value:"Data source",id:"data-source",children:[],level:2},{value:"Data system",id:"data-system",children:[],level:2},{value:"Encryption",id:"encryption",children:[],level:2},{value:"File system",id:"file-system",children:[],level:2},{value:"ETL",id:"etl",children:[],level:2},{value:"Integration platform",id:"integration-platform",children:[{value:"iPaaS",id:"ipaas",children:[],level:3}],level:2},{value:"Metadata",id:"metadata",children:[],level:2},{value:"Push, pull, and streaming",id:"push-pull-and-streaming",children:[],level:2},{value:"Webhook",id:"webhook",children:[],level:2},{value:"Structured and unstructured data",id:"structured-and-unstructured-data",children:[],level:2},{value:"Writeback",id:"writeback",children:[],level:2}],c={toc:u};function h(t){var e=t.components,a=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that we've got a basic understanding of what an integration is, it's important to establish some of the foundational concepts we need to press forward. This doesn't mean you can't use OpenFn if you don't know what any of these words mean prior to reading our documentation, but it does mean that some of the most important tasks along the OpenFn journey will assume at least a basic understanding of each of these terms, which is why this page is here. In some cases, we also link to further reading if you really want a better understanding of some part of your data integration picture."),(0,r.kt)("p",null,"Note: This glossary is meant to be OpenFn-agnostic. The rest of the docs help you to get a picture of the parts of OpenFn, what we call them, and why, but this glossary is really meant as a prerequisite to all those other things to aid users with no experience in this area."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,'API is short for "application programming interface," and it\'s the part of some software ',(0,r.kt)("b",null,"application")," that has chosen to make itself visible (",(0,r.kt)("b",null,"interface"),") to users outside the application itself. And it's doing that in a ",(0,r.kt)("b",null,"programmatic")," way, in a way that allows developers of other applications or data systems to use it the same way each time."),(0,r.kt)("h2",{id:"api-protocol"},"API Protocol"),(0,r.kt)("p",null,"There's no hard and fast rule about how an API gets developed, but over time, standards have emerged to make it more straightforward for a new user to interact with Platform X's API, by trying to ensure most applications use one of a few different formats. That's what an API protocol is. A few of the big names here are REST, SOAP, JSON, and GraphQL. Rather than reinvent the wheel, ",(0,r.kt)("a",{parentName:"p",href:"https://frontend-digest.com/beginners-guide-to-apis-protocols-and-data-formats-f80cf7f30425%5D"},"here's a good primer on how protocols differ, their data formats, and why that all matters.")),(0,r.kt)("h2",{id:"database"},"Database"),(0,r.kt)("p",null,"Any organized collection of data can probably be safely called a database. If it's got a structure with which to reference all the stuff it's storing, and the \"stuff\" is data, then it's a database."),(0,r.kt)("h2",{id:"data-source"},"Data source"),(0,r.kt)("p",null,"A data source is an application, database, or table that provides data to some other platform. Nothing is ",(0,r.kt)("i",null,"always")," a data source. For example, Google Sheets can be a data source, but it can also pull from data sources (individual CSV uploads or manual user data entry). We just call it a source when it's doing the job of sourcing data to some other place. Data sources are the starting point, temporally, for any integration."),(0,r.kt)("h2",{id:"data-system"},"Data system"),(0,r.kt)("p",null,"Sometimes folks get confused about the distinction between a database, a data source, an application, and a data system. A data ",(0,r.kt)("i",null,"system")," is a more complex collection of these other things, usually one that allows a user to more easily interact with all of the data they should have access to. The data system often serves as an entry point to the myriad databases, applications, tables, etc. that a user would otherwise have to go 12 different places to find."),(0,r.kt)("h2",{id:"encryption"},"Encryption"),(0,r.kt)("p",null,"In this day and age, security is everything. Encryption is the process of taking something that is readable to anyone and making it only readable to people we want to read it. OpenFn ensures your data is encrypted every step of the way while it's in our platform. ",(0,r.kt)("a",{parentName:"p",href:"https://ssd.eff.org/en/node/36"},"For more on different kinds of encryption, you can look here.")),(0,r.kt)("h2",{id:"file-system"},"File system"),(0,r.kt)("p",null,"A file system is to files what a data system is to data. It structures your files in a way that makes it easy for you to retrieve them in a standardized way (think of your home file system with its file paths on your home computer). File systems can exist in other contexts too, and sometimes you need to access them to retrieve a file (a Word doc, CSV, plain text file, etc. might all be relevant depending on your use case). The only real difference between file systems and data systems or databases is the kind of information stored, data vs. files."),(0,r.kt)("h2",{id:"etl"},"ETL"),(0,r.kt)("p",null,"ETL stands for extract, transform, and load. These are often thought of as the three constituent parts of a data integration. First, we extract (push of pull data from a data source). Then, we transform (make any changes to the data to make it acceptable to the destination system or application). Then, we load (send it to the destination)."),(0,r.kt)("h2",{id:"integration-platform"},"Integration platform"),(0,r.kt)("p",null,"An integration platform (e.g., OpenFn) is an application (or set of applications) that help organizations set up, run, and maintain/manage the integrations between all of their various systems."),(0,r.kt)("h3",{id:"ipaas"},"iPaaS"),(0,r.kt)("p",null,'You may also see the acronym "iPaaS". This stands for integration platform as a service and is a type of "software as a service" (or "SaaS"). SaaS is a software purchasing model in which software is paid for only as it is used (often month-to-month), rather than purchased up front or given away for free.'),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"This is data that tells us about our data. In a table, for example, that's the name of the columns, the number of rows, etc. Metadata is often brought up in conversations about privacy\u2014e.g., regulators might want to ensure that ",(0,r.kt)("em",{parentName:"p"},"only metadata")," is moved from Ministry A to Ministry B, as opposed to personally identifiable information (PII) about individuals themselves."),(0,r.kt)("h2",{id:"push-pull-and-streaming"},"Push, pull, and streaming"),(0,r.kt)("i",null,"Pushing")," is when a triggering action in the data source causes it to send data to the destination. ",(0,r.kt)("i",null,"Pulling")," is the opposite, where the destination system requests the data from the source based on some triggering action, rather than waiting for the source to send it on its own. ",(0,r.kt)("i",null,"Streaming")," is a bit different, and it's when a data source is essentially ",(0,r.kt)("i",null,"constantly")," sending data to a destination system.",(0,r.kt)("h2",{id:"webhook"},"Webhook"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/documentation/source-apps#standard-webhook-configuration"},"webhook")," (also called a web callback or HTTP push API \u2014 thanks ",(0,r.kt)("a",{parentName:"p",href:"https://sendgrid.com/blog/whats-webhook/"},"SendGrid"),"!) is a feature of an application that allows ",(0,r.kt)("i",null,"pushing"),'. It\'s often configured to notify some external URL when an event occurs. A system administrator might create a "webhook" which notifies an integration platform whenever some event occurs so that the iPaaS can start executing some complex workflow.'),(0,r.kt)("h2",{id:"structured-and-unstructured-data"},"Structured and unstructured data"),(0,r.kt)("p",null,"Structured data is data that has metadata. Unstructured data has very little metadata (though probably still has things like time of creation, update, etc.). Without metadata about the format of the data, unstructured data is more difficult to interact with programmatically. We need different sorts of rules when doing ETL on unstructured data to do it well, whereas structured data is an easier starting point because we know what to expect from a column with a name, data type, field size, and so on."),(0,r.kt)("h2",{id:"writeback"},"Writeback"),(0,r.kt)("p",null,"Refers to a destination system making a change in a data source. When my destination application receives information from a data source and wants to do something back to the source in response, that's writeback."))}h.isMDXComponent=!0}}]);