"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3497],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83189:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],l={title:"Google Summer of Code"},p=void 0,s={unversionedId:"gsoc",id:"gsoc",title:"Google Summer of Code",description:"Overview",source:"@site/docs/gsoc.md",sourceDirName:".",slug:"/gsoc",permalink:"/documentation/gsoc",editUrl:"https://github.com/openfn/docs/edit/main/docs/gsoc.md",tags:[],version:"current",frontMatter:{title:"Google Summer of Code"},sidebar:"docs",previous:{title:"Building Compliant APIs",permalink:"/documentation/for-devs"},next:{title:"Writing Docs",permalink:"/documentation/writing-docs"}},c=[{value:"Overview",id:"overview",children:[],level:2},{value:"Mentors",id:"mentors",children:[],level:2},{value:"Project Ideas",id:"project-ideas",children:[{value:"OpenFn/microservice Extension",id:"openfnmicroservice-extension",children:[],level:3},{value:"OpenFn/engine Extension",id:"openfnengine-extension",children:[],level:3},{value:"OpenFn/core Metrics",id:"openfncore-metrics",children:[],level:3},{value:"Adaptors 2.0",id:"adaptors-20",children:[],level:3}],level:2}],d={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"OpenFn provides data integration, automation, and interoperability tools that\nare used to scale the world's most promising health and humanitarian\ninterventions. UNICEF, the World Health Organization, the IRC, and the Wildlife\nConservation Society are just a few of the many organizations that drive\nefficiency via OpenFn software. With an open-core model, we've got hosted and\nlocally-deployed solutions in 40+ countries, and this summer you'll get the\nchance to work on leading-edge ETL tools built in Elixir/Erlang, and NodeJs. If\nlearning about APIs, data transformation, and middleware/automation layers\nexcites you, OpenFn is the place to be."),(0,a.kt)("h2",{id:"mentors"},"Mentors"),(0,a.kt)("p",null,"This summer, you'll get the chance to work with some of the core team at OpenFn,\nincluding ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/team#chaiwa"},"Chaiwa Berian"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/team#mamadou"},"Mamadou Ciss\xe9"),",\n",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/team#stuart"},"Stu Corbishley"),", and\n",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/team#taylor"},"Taylor Downs"),". They're based in Zambia,\nSenegal, South Africa, and the United Kingdom, respectively. Between them,\nthey've got almost 50 years of experience working in software and... a PhD in\nComputer Science. (Hey thanks, Mamadou \ud83d\ude09.)"),(0,a.kt)("h2",{id:"project-ideas"},"Project Ideas"),(0,a.kt)("h3",{id:"openfnmicroservice-extension"},"OpenFn/microservice Extension"),(0,a.kt)("p",null,"OpenFn projects (see ",(0,a.kt)("a",{parentName:"p",href:"portability"},(0,a.kt)("inlineCode",{parentName:"a"},"project.yaml")),") can be deployed on the\nplatform ",(0,a.kt)("em",{parentName:"p"},"or")," on microservice, a Phoenix web application. This summer, GSOC\ninterns will have the opportunity to build out the front-end for this community\nsupported web app."),(0,a.kt)("p",null,"Difficulty level: ",(0,a.kt)("inlineCode",{parentName:"p"},"medium")),(0,a.kt)("p",null,"You'll be working in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},(0,a.kt)("inlineCode",{parentName:"a"},"Docker")),",\n",(0,a.kt)("a",{parentName:"p",href:"https://www.phoenixframework.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Phoenix")),",\n",(0,a.kt)("a",{parentName:"p",href:"https://elixir-lang.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Elixir"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.erlang.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Erlang")),"."),(0,a.kt)("h3",{id:"openfnengine-extension"},"OpenFn/engine Extension"),(0,a.kt)("p",null,"Engine is part of the common FOSS toolkit that is used both by ",(0,a.kt)("inlineCode",{parentName:"p"},"microservice"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"platform"),". It's the software which is responsible for actually executing\ncalls to ",(0,a.kt)("inlineCode",{parentName:"p"},"OpenFn/core")," and doing neat things like streaming logs back to the\nrequester. If you're keen on really understanding how Elixir and Erlang work,\ngetting your hands dirty with OTP apps, engine is where you want to be working\nthis summer."),(0,a.kt)("p",null,"Difficulty level: ",(0,a.kt)("inlineCode",{parentName:"p"},"high")),(0,a.kt)("p",null,"You'll be working in ",(0,a.kt)("a",{parentName:"p",href:"https://elixir-lang.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Elixir"))," and\n",(0,a.kt)("a",{parentName:"p",href:"https://www.erlang.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Erlang")),"."),(0,a.kt)("h3",{id:"openfncore-metrics"},"OpenFn/core Metrics"),(0,a.kt)("p",null,"At the bottom of it all, whether we're providing secure patient data transfer\nservices for ministries of health or making child protection case referrals for\nUNICEF, OpenFn relies on spinning up NodeVMs, executing code inside those VMs\nsafely, and then shutting the down. Welcome to the core."),(0,a.kt)("p",null,"This summer you could have the chance to dig into that ",(0,a.kt)("em",{parentName:"p"},"sandboxed-VM-in-a-VM"),'\nmagic, learn loads about NodeJs, and provide end-users with better metrics on\nexactly what kinds of compute they\'re using to "get the job done".'),(0,a.kt)("p",null,"Difficulty level: ",(0,a.kt)("inlineCode",{parentName:"p"},"medium")),(0,a.kt)("p",null,"You'll be working in ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.dev/learn"},(0,a.kt)("inlineCode",{parentName:"a"},"NodeJs"))," and\n",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Typescript")),"."),(0,a.kt)("h3",{id:"adaptors-20"},"Adaptors 2.0"),(0,a.kt)("p",null,"Adaptors are the API wrappers that allow OpenFn users to quickly and easily work\nwith the most common APIs in international development. They provide an\ninterface for connecting to DHIS2, ODK, CommCare, OpenMRS, etc., etc."),(0,a.kt)("p",null,"They're NodeJs modules, but in order to make the adaptor development and ",(0,a.kt)("em",{parentName:"p"},"use"),"\nprocess better, we want to bring them into the future with Typescript. Adaptors\nshould tell you how to use them while you use them."),(0,a.kt)("p",null,"Check out this thread on\n",(0,a.kt)("a",{parentName:"p",href:"https://community.openfn.org/t/discussion-regarding-adapter-2-0-project"},"community.openfn.org"),"\nfor more information."),(0,a.kt)("p",null,"Difficulty level: ",(0,a.kt)("inlineCode",{parentName:"p"},"medium")),(0,a.kt)("p",null,"You'll be working in ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.dev/learn"},(0,a.kt)("inlineCode",{parentName:"a"},"NodeJs"))," and\n",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,a.kt)("inlineCode",{parentName:"a"},"Typescript")),"."))}u.isMDXComponent=!0}}]);