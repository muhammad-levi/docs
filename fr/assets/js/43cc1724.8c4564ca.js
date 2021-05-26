(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8276],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65961:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var o=n(22122),i=n(19756),r=(n(67294),n(3905)),a={title:"The Integration Toolkit"},s={unversionedId:"getting-started/integration-toolkit",id:"getting-started/integration-toolkit",isDocsHomePage:!1,title:"The Integration Toolkit",description:"OpenFn's free and open-source Integration Toolkit gives governments and NGOs around the world more flexibility and freedom to chose how they achieve success in interoperability projects.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/getting-started/integration-toolkit.md",sourceDirName:"getting-started",slug:"/getting-started/integration-toolkit",permalink:"/fr/documentation/getting-started/integration-toolkit",editUrl:"https://github.com/openfn/docs/edit/main/docs/getting-started/integration-toolkit.md",version:"current",frontMatter:{title:"The Integration Toolkit"},sidebar:"docs",previous:{title:"Project Walk-through",permalink:"/fr/documentation/build/example-build"},next:{title:"Introduction aux Jobs",permalink:"/fr/documentation/build/jobs"}},l=[{value:"Why OFG is driving the development of the Integration Toolkit",id:"why-ofg-is-driving-the-development-of-the-integration-toolkit",children:[]},{value:"What&#39;s in the Integration Toolkit",id:"whats-in-the-integration-toolkit",children:[]},{value:"Open Source Steering Committee (OSSC)",id:"open-source-steering-committee-ossc",children:[]}],p={toc:l};function c(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OpenFn's free and open-source Integration Toolkit gives governments and NGOs around the world more flexibility and freedom to chose how they achieve success in interoperability projects."),(0,r.kt)("p",null,"At the heart of the toolkit is the ",(0,r.kt)("inlineCode",{parentName:"p"},"project"),"\u2014a set of jobs, triggers, and credentials which allow organizations to flexibly define workflows and integrations across their systems."),(0,r.kt)("p",null,"Projects can be ported from the ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"microservice")," (the main deployment pathway for the Integration Toolkit) and back again (see below) but to really understand the toolkit you've got to first understand Open Function Group and ",(0,r.kt)("inlineCode",{parentName:"p"},"platform"),", the enterprise iPaaS."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Integration Toolkit",src:n(89504).Z})),(0,r.kt)("p",null,"Open Function Group has been building free and open source software (FOSS) for data integration projects in the health, humanitarian, and international development sectors since in 2014. Their software and services are now in use by governments, NGOs, and impact-first businesses in over 40 countries."),(0,r.kt)("p",null,"OFG's first integration platform was entirely FOSS, but they soon shifted to an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open-core_model"},'"open-core"'),' (think GitLab) in order to sustain their impact-focused integration work. Their main hosted offering, the OpenFn "platform", is ',(0,r.kt)("em",{parentName:"p"},"proprietary"),' but makes extensive use of the open-source integration toolkit; in fact, the "platform" may be thought of as an enterprise/hosted layer running on-top of the basic, open-source building blocks provided by the Integration Toolkit.'),(0,r.kt)("h3",{id:"why-ofg-is-driving-the-development-of-the-integration-toolkit"},"Why OFG is driving the development of the Integration Toolkit"),(0,r.kt)("p",null,"Our mission is to make health & humanitarian interventions more efficient & effective, and we see investment in the integration toolkit as strategic."),(0,r.kt)("p",null,"We'll strive to preserve the integration toolkit as a healthy and bona fide open source project and sustains its operations through business activities related to the toolkit and their other proprietary and/or service offerings until it grows legs of its own and is taken over by the broader community."),(0,r.kt)("p",null,"We have designed the tools in the toolkit to be useful as standalone pieces of software ",(0,r.kt)("em",{parentName:"p"},"and")," as modules, used by other applications. Because a substantial portion of OFG's revenue comes from contracts related to the platform, and because the platform relies on OpenFn/core, OpenFn/engine, and the OpenFn adaptors, we hope to ensure that OFG will always be incentivized to continue their investment in the integration toolkit."),(0,r.kt)("p",null,"In other words, we're attempting to ensure that as OFG grows, they will continue enhancing the open source integration toolkit regardless of whether or not additional funders and/or stakeholders contribute to the project."),(0,r.kt)("h2",{id:"whats-in-the-integration-toolkit"},"What's in the Integration Toolkit"),(0,r.kt)("p",null,'Separate from "the platform", the integration toolkit is the suite of applications and modules provided by OFG and the community which enable data integration, interoperability, and automation solutions via OpenFn-compliant jobs, triggers, and credentials. The key components of the toolkit are:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"OpenFn/docs"),(0,r.kt)("li",{parentName:"ol"},"OpenFn/core"),(0,r.kt)("li",{parentName:"ol"},"OpenFn/engine"),(0,r.kt)("li",{parentName:"ol"},"OpenFn/microservice"),(0,r.kt)("li",{parentName:"ol"},"OpenFn/devtools"),(0,r.kt)("li",{parentName:"ol"},"the OpenFn adaptors")),(0,r.kt)("h2",{id:"open-source-steering-committee-ossc"},"Open Source Steering Committee (OSSC)"),(0,r.kt)("p",null,"We've also initiated an Open Source Steering Committee (OSSC) to represent the OpenFn community of end users and implementers. It reviews and gives feedback on major roadmap decisions, new designs, specifications, features, and protocol changes."),(0,r.kt)("p",null,"The OSSC's membership and decision making process are defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://openfn.github.io/governance/OSSC.html"},"OSSC's internal governance policy")," if if you're interested in joining, we'd love to hear from you!"))}c.isMDXComponent=!0},89504:function(e,t,n){"use strict";t.Z=n.p+"assets/images/integration-toolkit-93202d4f9b1c426443a888aa65d904f1.png"}}]);