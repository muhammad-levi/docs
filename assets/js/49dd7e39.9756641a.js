"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1065],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,d=c["".concat(s,".").concat(u)]||c[u]||l[u]||o;return n?a.createElement(d,i(i({ref:t},h),{},{components:n})):a.createElement(d,i({ref:t},h))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},92479:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return h},default:function(){return c}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],p={title:"Instant OpenHIE"},s=void 0,m={unversionedId:"instant-openhie",id:"instant-openhie",title:"Instant OpenHIE",description:"Overview",source:"@site/docs/instant-openhie.md",sourceDirName:".",slug:"/instant-openhie",permalink:"/documentation/instant-openhie",editUrl:"https://github.com/openfn/docs/edit/main/docs/instant-openhie.md",tags:[],version:"current",frontMatter:{title:"Instant OpenHIE"},sidebar:"docs",previous:{title:"Microservice",permalink:"/documentation/microservice/home"},next:{title:"DIY",permalink:"/documentation/deploy/diy"}},h=[{value:"Overview",id:"overview",children:[],level:2},{value:"Use Cases for the Prototype Implementation",id:"use-cases-for-the-prototype-implementation",children:[{value:"User stories",id:"user-stories",children:[],level:3}],level:2},{value:"Implementation Design",id:"implementation-design",children:[],level:2},{value:"Explore the Implementation",id:"explore-the-implementation",children:[],level:2},{value:"About the Implementation Setup",id:"about-the-implementation-setup",children:[{value:"Processes",id:"processes",children:[],level:3},{value:"Project Configuration Steps",id:"project-configuration-steps",children:[],level:3}],level:2},{value:"Job writing notes",id:"job-writing-notes",children:[],level:2},{value:"System Deployment Steps",id:"system-deployment-steps",children:[],level:2}],l={toc:h};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In partnership with ",(0,o.kt)("a",{parentName:"p",href:"https://digitalsquare.org/"},"Digital Square")," and ",(0,o.kt)("em",{parentName:"p"},"FCDO COVIDaction"),",\n",(0,o.kt)("strong",{parentName:"p"},"OpenFn has been investing in its open source integration toolkit")," to provide\nrobust integration solutions that can connect ",(0,o.kt)("em",{parentName:"p"},"any digital health system")," and be\nrapidly implemented on any server, in any country, by any organization."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/documentation/microservice/home/"},"OpenFn/microservice"))," is a fully ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant\nOpenHIE")," compliant component which can be used to drive\nworkflow, achieve compliance with standards, and integrate components of the\n",(0,o.kt)("a",{parentName:"p",href:"https://openhim.readthedocs.io/en/latest/implementations/openhie.html"},"OpenHIE stack"),"."),(0,o.kt)("p",null,"We seek to enhance the value of the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," project by\ndeveloping a package that will include ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," as an integration\npathway for connecting with the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE architecture"),"."),(0,o.kt)("p",null,"This package aims to enhance the value of ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," by\nproviding another option for robust information processing, integration, and\nbusiness process (workflow) automation. When deploying ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant\nOpenHIE"),", implementers now have the option to include\n",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," as a component."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," may also be used as a workflow engine to automate complex\nbusiness logic alongside ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://openhim.readthedocs.io/en/latest/implementations/openhie.html"},"OpenHIE\nstack"),". Individual ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"jobs")," in ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn"),", sometimes\nmany in a single microservice deployment, may be used as ",(0,o.kt)("em",{parentName:"p"},"\u201cmediators\u201d")," (",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"see\nOpenHIE library of existing mediators"),") to quickly transform and map\ndata to the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE architecture"),"."),(0,o.kt)("p",null,"To demonstrate a real-world use case for how ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," might be\nimplemented in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE architecture"),", we met with\nseveral community members to identify key use cases for a reference prototype\nimplementation."),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo"},"demo repo here"),"."),(0,o.kt)("h2",{id:"use-cases-for-the-prototype-implementation"},"Use Cases for the Prototype Implementation"),(0,o.kt)("p",null,"We\u2019ve seen that the most common integration use case is that health service\ndelivery providers, especially large community health worker (\u201cCHW\u201d)\ninterventions, need to integrate their data and programming into national\neHealth architectures."),(0,o.kt)("h3",{id:"user-stories"},"User stories"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"As a community health implementer, I want to integrate my CommCare case\nmanagement application used by CHWs with the national patient registry, so\nthat I can develop a shared health record and automate reporting\npipelines.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"As a health services provider, I want to integrate my existing application\nwith the national HIS, but I want to apply the FHIR standard to my data\ncollected before sharing to adhere to compliance and reporting\nrequirements.")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We therefore decided to build an integration solution that demonstrates how\nexisting ",(0,o.kt)("strong",{parentName:"li"},"CHW")," applications can be integrated with the national health\ninfrastructure and leverage a simple job on ",(0,o.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn")," as a\n",(0,o.kt)("a",{parentName:"li",href:"http://openhim.org/mediator-library/"},"mediator")," to apply the ",(0,o.kt)("a",{parentName:"li",href:"https://fhir.org/"},"FHIR data standard")," and other data\nmanipulation needed to integrate with ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),".")),(0,o.kt)("h2",{id:"implementation-design"},"Implementation Design"),(0,o.kt)("p",null,"In sum, the prototype sends patient case registration data from mobile data\ncollection apps (",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"KoboToolbox"),") to\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice"),". ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," then transforms the\ndata and ensures that it adheres to the ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"patient")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"encounter")," data standards, before sending it onwards to a ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR\nchannel")," in the ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),". ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," is used as a\n","_","\u201cchannel\u201d","_"," here for the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE architecture")," to\nvalidate requests and forward them onto other systems in the ",(0,o.kt)("strong",{parentName:"p"},"national eHealth\narchitecture"),". In this case, we forward the case data onwards to register the\npatients in a ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR")," server."),(0,o.kt)("p",null,"This implementation design was determined to be the highest value/most in-demand\nbecause it leverages the core functionality of ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," (providing a\nreverse proxy and generating an audit trail) without requiring integrators to\nbuild a new ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"mediator\u2014a")," process that is more complex than\nconfiguring a ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"job")," within an ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"OpenFn project"),"."),(0,o.kt)("p",null,"This prototype includes the following components:"),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," instance can be spun up which contains\n",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),", ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),", and a single\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," deployment (a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," file, exported from ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn/platform"),") with\n2 different ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"jobs"),". When data is forwarded to\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," from two distinct form submissions on\n",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo"),", it is processed and creates ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR"),"\npatient resources via ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," and ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),". We\u2019ve opted\nfor a single ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," \u201cproject\u201d with two\nslightly different ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"jobs")," and ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/triggers/"},"triggers")," to highlight the\nversatility of ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"OpenFn projects"),"."),(0,o.kt)("h2",{id:"explore-the-implementation"},"Explore the Implementation"),(0,o.kt)("p",null,"Currently, there are two different ways to explore this demo. The first (the\nmore traditional ",(0,o.kt)("em",{parentName:"p"},"\u201cInstant\u201d")," way) is by ",(0,o.kt)("strong",{parentName:"p"},"cloning the OpenFn/instant-demo\nrepo"),". Once inside, users type ",(0,o.kt)("em",{parentName:"p"},"\u201cyarn setup\u201d")," to get everything up and running.\nRunning ",(0,o.kt)("em",{parentName:"p"},"\u201cyarn test\u201d")," will then demonstrate the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo"),"/",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," to ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," to ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," to\n",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," flows."),(0,o.kt)("p",null,"They can explore the various ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"jobs"),", sample payloads, endpoints, and post\ndata to the various endpoints using either the data forwarding settings in\n",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo")," or via ",(0,o.kt)("a",{parentName:"p",href:"https://curl.se/"},"CURL")," (or their HTTP request\nagent of choice.)"),(0,o.kt)("p",null,"Once running, users can see how standard ",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo"),"\nsubmissions are transformed by the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," to\nadhere to the ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," specifications for ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"patients")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"encounters"),", and then that those subsequent resources are created\non the ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR")," server, via a channel on the ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),"."),(0,o.kt)("p",null,"The second (slightly less conventional way) to explore the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo"},"demo"),",\nis via ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org"),". Since ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"OpenFn projects")," can be run in\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"microservice")," or on the ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"hosted platform"),", we\u2019ve\nprovided a project instance at ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org")," that allows users to explore\nthe configuration required to incorporate ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," in an ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant\nOpenHIE")," project. There are three ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/projects/p5pqx3/jobs"},"jobs")," which can\nbe accessed with a ",(0,o.kt)("strong",{parentName:"p"},"demo user")," with ",(0,o.kt)("em",{parentName:"p"},"username: ",(0,o.kt)("a",{parentName:"em",href:"mailto:demo@openfn.org"},"demo@openfn.org"))," and\n",(0,o.kt)("em",{parentName:"p"},"password:guest123"),"."),(0,o.kt)("p",null,"The three jobs will show:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How a ",(0,o.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare")," submission is transformed and sent to ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI\nFHIR"),";"),(0,o.kt)("li",{parentName:"ul"},"How a ",(0,o.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"Kobo")," submission is transformed and sent to ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI\nFHIR"),";"),(0,o.kt)("li",{parentName:"ul"},"And what the final resources that would be sent to ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR")," look\nlike.")),(0,o.kt)("p",null,"It\u2019s our hope that this will provide a valuable entry-point for ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant\nOpenHIE")," configuration with\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservices"),"."),(0,o.kt)("h2",{id:"about-the-implementation-setup"},"About the Implementation Setup"),(0,o.kt)("h3",{id:"processes"},"Processes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We met with ",(0,o.kt)("a",{parentName:"p",href:"https://ohie.org/tag/community/"},"OpenHIE community members")," to understand use cases,\nand with ",(0,o.kt)("a",{parentName:"p",href:"https://www.jembi.org/"},"Jembi Health Systems")," to learn about ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant\nOpenHIE")," packages, specifications, and compliance\nrequirements.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Identified sample data sources (real ",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo"),"\ncase registration forms - see here) that we could use to send data to the\n",(0,o.kt)("strong",{parentName:"p"},"national eHealth architecture"),". Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/fixtures/commcare_sample.json"},"sample submission payload from\nCommCare")," Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/fixtures/koboCaseRegistration.json"},"sample submission payload from\nKobo"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reviewed ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR-HL7")," documentation to determine data standard\nrequirements for patient data and encounter data. See ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"FHIR patient\nspec")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"FHIR encounter spec"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Evaluated ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," vs. ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," capabilities to determine\nhow to use. Determined that using an ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM channel")," will leverage\nthe core audit trail functionality from ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),", but not require us\nto build a ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"new mediator"),"."))),(0,o.kt)("h3",{id:"project-configuration-steps"},"Project Configuration Steps"),(0,o.kt)("p",null,"There are two ways to set up a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," to run as a\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"microservice"),". The first is to use the ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org\nplatform"),", and the second way is to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),"."),(0,o.kt)("p",null,"These two methods are detailed below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Configure a project using the OpenFn.org platform")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This option allows organisations to leverage ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org"),"\u2019s\nbuilt-in features for easy ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"project")," setup, ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"job writing"),"\nand source code management.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," file generated from this project setup will\nthen be used as the base structure for the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn\nMicroservice"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The steps to setup the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice")," project\nusing the ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org platform")," are as below:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"A. Add ",(0,o.kt)("a",{parentName:"strong",href:"/documentation/build/credentials/"},"credentials")," to the project which will be used to connect\nthe OpenFn Microservice to OpenHIM.")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is also an opportunity to add ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/credentials/"},"credentials")," which ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn\nMicroservice")," may use to connect to source systems\n(such as ",(0,o.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare")," or ",(0,o.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"KoBotoolbox"),") .")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"B. Add ",(0,o.kt)("a",{parentName:"strong",href:"/documentation/build/triggers/"},"triggers")," to the project which will be used by the ",(0,o.kt)("a",{parentName:"strong",href:"/documentation/microservice/home/"},"OpenFn\nMicroservice")," to match payloads from source systems to\n",(0,o.kt)("a",{parentName:"strong",href:"/documentation/build/jobs/"},"OpenFn Microservice Jobs"),".")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Note that the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"Microservice")," is configured to run a\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"job")," based on the shape of the incoming payload.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For example, a ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/triggers/"},"trigger")," may be configured to match payloads, from\n",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare"),", which contain the\n",(0,o.kt)("inlineCode",{parentName:"p"},'{"@name": "Register New Patient"}')," message in their message body.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A given ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"job")," will then match against this message, and will be\ninvoked by the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice")," to (a) create a\npayload in the ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR standard")," containing an ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"Encounter\nResource")," and (b) send the ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"FHIR Standard"),"\nPayload to ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," with instructions to load it to ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI\nFHIR"),"."))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"C. Export the ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," file using the Export Wizard of\nthe ",(0,o.kt)("a",{parentName:"strong",href:"https://openfn.org/"},"OpenFn.org"))),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"generated YAML")," file will then be used by the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn\nMicroservice")," to execute the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/"},"jobs")," for the\nmatching payloads."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Configure a project using the ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"))),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This option allows organisations to configure the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"project")," and\nhost ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"job expression")," source files, for ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"OpenFn Microservice\nprojects"),", without using the ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn platform"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"With this option, it is recommended that organisations use source\nversioning tools and platforms such as ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"github")," to manage the\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"project")," and ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"job expression")," source code/files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To configure the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice project")," using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),", create a local folder or github repository to\nhost your project configuration files. Inside this folder, one would then\nperform the following actions:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a credential.json file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add credentials as shown in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml#L165-L167"},"sample credential here"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"job expressions"),". In this case, one would create the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"CommCare-to-OpenHIM")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"Kobo-to-OpenHIM"),"\nexpressions as shown in the demo expressions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"here"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"OpenFn CLI")," to configure the rest of the project. The\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"CLI")," will assemble the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," file from\nthe different artifacts as provided. See detailed steps in the\ndocumentation site ",(0,o.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The last step of the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"CLI")," prompts will allow one to export\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"Project YAML file"),", which will then be used by the\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice")," to execute the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"jobs")," for\nmatching payloads."))))))),(0,o.kt)("h2",{id:"job-writing-notes"},"Job writing notes"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," provides two ways of writing jobs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/jobs/job-studio/"},"OpenFn.org\u2019s Job Studio")," as detailed in the documentation\nsite ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/"},"here"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"With this option, if editing an existing ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"Job Expression"),", one\nwould be expected to use ",(0,o.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn.org Project Export service")," to\nre-generate the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"Project YAML")," file for the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn\nMicroservice"),"."))),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This option also allows organisations to write ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"job expressions"),"\nwithout using the ",(0,o.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn\u2019s hosted service"),". See detailed\ndocumentation ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/devtools"},"here")),(0,o.kt)("li",{parentName:"ul"},"With this option, if editing an existing ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"Job Expression"),", one\nwould be expected to run the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/devtools/home/#configure-an-openfn-project"},"OpenFn CLI"),", to re-generate the\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"Project YAML file")," for the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn\nMicroservice"),".")))),(0,o.kt)("h2",{id:"system-deployment-steps"},"System Deployment Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn")," provides an automated deployment script that allows system admins to\nsetup and run the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),"."),(0,o.kt)("li",{parentName:"ul"},"For example, to run the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"Instant-demo Microservice"),", the\nfollowing steps are recommended:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Clone the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"OpenFn/instant-demo repo")),(0,o.kt)("li",{parentName:"ul"},"Overwrite the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml"},"sample \u201cproject.yaml\u201d")," file with your newly\ngenerated ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml file"),", or use the existing ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"YAML\nfile")," to deploy the demo project. Run the setup command as\ndescribed in the documentation ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"here")),(0,o.kt)("li",{parentName:"ul"},"Verify the system is working by ",(0,o.kt)("a",{parentName:"li",href:"https://curl.se/"},"curling")," data (or submitting forms on\n",(0,o.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare"),"/",(0,o.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"Kobo"),") matching their ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/triggers/"},"triggers")," to\nthe ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"microservice")," endpoint ",(0,o.kt)("inlineCode",{parentName:"li"},"(localhost:4001/inbox)")," and\nchecking to see that resources are created in ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),"."),(0,o.kt)("li",{parentName:"ul"},"Note how the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/test.js"},"test.js file")," handles this verification with the\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml"},"sample project.yaml"))))))}c.isMDXComponent=!0}}]);