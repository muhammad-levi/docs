(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(143)),o={},s={unversionedId:"dhis2",id:"dhis2",isDocsHomePage:!1,title:"dhis2",description:"DHIS2",source:"@site/docs/dhis2.md",slug:"/dhis2",permalink:"/documentation/dhis2",editUrl:"https://github.com/openfn/docs/edit/master/docs/dhis2.md",version:"current"},c=[{value:"Overview",id:"overview",children:[{value:"Integration Use Cases",id:"integration-use-cases",children:[]},{value:"Further Reading:",id:"further-reading",children:[]}]},{value:"Integration Options",id:"integration-options",children:[]},{value:"OpenFn Adaptor",id:"openfn-adaptor",children:[]},{value:"Integration Examples",id:"integration-examples",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"dhis2"},"DHIS2"),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"The District Health Information Software 2\n(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.dhis2.org/about"}),"DHIS2"),")] is an open source, web-based health\nmanagement information system (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https:/some.useful.info"}),"HMIS"),") platform."),Object(i.b)("p",null,"Today, DHIS2 is the world's largest HMIS platform, in use by 73 low and\nmiddle-income countries. Approximately 2.4 billion people live in countries\nwhere DHIS2 is used. Including NGO-based programs, DHIS2 is in use in more than\n100 countries."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://some.useful.info"}),"core DHIS2")," software development is managed by\nthe Health Information Systems Program (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://some.useful.info"}),"HISP"),") at the\nUniversity of Oslo (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://some.useful.info"}),"UiO"),")."),Object(i.b)("p",null,"HISP is a global network comprised of 13 in-country and regional organizations,\nproviding day-in, day-out direct support to government ministries and local\nimplementers of DHIS2."),Object(i.b)("p",null,"DHIS2 exposes its data and service method integration pipeline through a\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://some.useful.info"}),"RESTful")," Web Application Programing\nIneterface(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://some.useful.info"}),"API"),"). The\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://some.useful.info"}),"DHIS2 Web API")," is a component which makes it possible\nfor external systems to access and manipulate data stored in an instance of\nDHIS 2. More precisely, it provides a programmatic interface to a wide range of\nexposed data and service methods for applications such as third-party software\nclients, web portals and internal DHIS 2 modules."),Object(i.b)("h3",{id:"integration-use-cases"},"Integration Use Cases"),Object(i.b)("p",null,"DHIS2 has been expanding its reach into many health systems. Starting from its\nfamiliar grounds of aggregate data sets for routine data it has included patient\nrelated data and then data in the areas of HR, finance, logistics and laboratory\nmanagement."),Object(i.b)("p",null,"For several years now, DHIS2 has grown its data management activities\norganically, allowing the actual usage to lead to sometimes unforeseen\nsolutions. However, there are also limits to where leveraging DHIS2 seems\nuseful. In the following sections, special systems will be described."),Object(i.b)("h4",{id:"example-user-stories"},"Example user stories"),Object(i.b)("p",null,"1 Logistics Management(LMIS)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"LMIS is an area where a multitude of parallel, overlapping or competing\nsoftware solutions can be found in a single country"),Object(i.b)("li",{parentName:"ul"},"Although a basic LMIS configuration based on aggregate data can take you very\nfar, in some cases a transactional LMIS is necessary if you need to track such\ndetailed operations as returns, transfer between facilities, barcode reading,\nbatch and expiry managemen"),Object(i.b)("li",{parentName:"ul"},"In such a situation...")),Object(i.b)("p",null,"2 Data Sharing for Health and Nutrition, Water Sanitation and Hygiene Projects"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Case management sytsems such as CommCare are widely preffered in collecting\ncase data(or patient level data) due to its dominance in the sector and easy\nof adoption. In such scenarios, ...")),Object(i.b)("p",null,"3 DHIS2 Instance Synchronization"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Different DHIS2 instances in a given organisation or government ministry may\nbe deployed on separate servers which places the need for synchronization in\nboth metadata and data values. DHIS2 provides API endpoints to enable which\nenable organisations to automate the synchronization process of data/metadata\nacross a cluster of DHIS2 servers.")),Object(i.b)("h3",{id:"further-reading"},"Further Reading:"),Object(i.b)("p",null,"1 ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.dhis2.org/2.22/en/developer/html/ch01.html"}),"DHIS2 Web API")),Object(i.b)("p",null,"2\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.dhis2.org/2.28/en/implementer/html/integration.html#:~:text=DHIS2%20is%20often%20used%20as,on%20stocks%20and%20human%20resources."}),"DHIS2 Integration Concepts")),Object(i.b)("p",null,"3\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.dhis2.org/master/en/implementer/html/different-dhis2-integration-scenarios.html"}),"DHIS2 Integration Scenarios")),Object(i.b)("p",null,"4\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.childhealthtaskforce.org/sites/default/files/2019-01/Interoperable%20DHIS2-LMIS%20in%20Senegal%2C%20Tanzania%2C%20and%20Ghana%20%28HISP%20Team%20at%20UIO-2017%29.pdf"}),"Interoperable DHIS2-LMIS in Senegal, Tanzania and Ghana")),Object(i.b)("p",null,"5\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://crvsgateway.info/file/17042/3010https://crvsgateway.info/file/17042/3010"}),"CRVS Fellowship report SmartVA and DHIS2 integration in Sri Lanka")),Object(i.b)("h2",{id:"integration-options"},"Integration Options"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Data integration via DHIS2 Web API..")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Metadata integration via DHIS2 Web API..."))),Object(i.b)("h2",{id:"openfn-adaptor"},"OpenFn Adaptor"),Object(i.b)("p",null,"About & link to ",Object(i.b)("inlineCode",{parentName:"p"},"language-dhis2")),Object(i.b)("h2",{id:"integration-examples"},"Integration Examples"),Object(i.b)("p",null,"Links to sample jobs/ code snippets"))}p.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);