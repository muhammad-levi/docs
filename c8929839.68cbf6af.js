(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(170)),i={title:"Adaptors"},p={unversionedId:"build/adaptors",id:"build/adaptors",isDocsHomePage:!1,title:"Adaptors",description:"An adaptor is an open-source module that provides the necessary operations that",source:"@site/docs/build/adaptors.md",slug:"/build/adaptors",permalink:"/documentation/build/adaptors",editUrl:"https://github.com/openfn/docs/edit/main/docs/build/adaptors.md",version:"current",sidebar:"docs",previous:{title:"Devtools",permalink:"/documentation/deploy/devtools"},next:{title:"Planning for Deployment",permalink:"/documentation/deploy/options"}},c=[{value:"Where to find them?",id:"where-to-find-them",children:[{value:"On GitHub",id:"on-github",children:[]},{value:"On openfn.org",id:"on-openfnorg",children:[]},{value:"On npm",id:"on-npm",children:[]}]},{value:"Developing an adaptor",id:"developing-an-adaptor",children:[{value:"Extending an adaptor",id:"extending-an-adaptor",children:[]},{value:"Developing a new adaptor",id:"developing-a-new-adaptor",children:[]}]}],l={toc:c};function d(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An adaptor is an open-source module that provides the necessary operations that\nhelp communicate with a specific external system. We often refer to them as\n",Object(o.b)("inlineCode",{parentName:"p"},"language-packages"),". In the following, we might use the two terms\ninterchangeably."),Object(o.b)("h2",{id:"where-to-find-them"},"Where to find them?"),Object(o.b)("h3",{id:"on-github"},"On GitHub"),Object(o.b)("p",null,"The developed adaptors can be found in GitHub under ",Object(o.b)("inlineCode",{parentName:"p"},"https://github.com/openfn"),",\nstarting with the prefix ",Object(o.b)("inlineCode",{parentName:"p"},"language-XXXX"),". Some examples are:\n",Object(o.b)("inlineCode",{parentName:"p"},"language-http (https://github.com/OpenFn/language-http)"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"language-postgresql (https://github.com/OpenFn/language-postgresql)"),"."),Object(o.b)("h3",{id:"on-openfnorg"},"On openfn.org"),Object(o.b)("p",null,'When creating or editing a job, you can choose the adaptor to run the job. This\nway you "import" the needed operations. Simply open the dropdown list of\nadaptors, and click on one.\n',Object(o.b)("img",{alt:"Adaptors list in job editor",src:n(536).default})),Object(o.b)("h3",{id:"on-npm"},"On npm"),Object(o.b)("p",null,"Some of our language-packages are also available in\n",Object(o.b)("inlineCode",{parentName:"p"},"npmjs (https://www.npmjs.com/search?q=%40openfn)"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Adaptors list in npm",src:n(537).default})),Object(o.b)("h2",{id:"developing-an-adaptor"},"Developing an adaptor"),Object(o.b)("p",null,"You can develop a new adaptor from scratch or extend an existing one."),Object(o.b)("h3",{id:"extending-an-adaptor"},"Extending an adaptor"),Object(o.b)("p",null,"Extending an adaptor equals adding one or multiple new operations. The new\noperations can be added inside the ",Object(o.b)("inlineCode",{parentName:"p"},"src/Adaptor.js")," file of the adaptor."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Adaptor.js",src:n(538).default})),Object(o.b)("h3",{id:"developing-a-new-adaptor"},"Developing a new adaptor"),Object(o.b)("p",null,"Developing a new Adaptor a a language package can be done by cloning the\ntemplate available in this Url: ",Object(o.b)("inlineCode",{parentName:"p"},"https://github.com/OpenFn/adaptor")," via the\n",Object(o.b)("inlineCode",{parentName:"p"},"USE THIS TEMPLATE")," button over on Github."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Use this template button",src:n(539).default})),Object(o.b)("h4",{id:"default-operation"},"Default operation"),Object(o.b)("p",null,"This template contains a default ",Object(o.b)("inlineCode",{parentName:"p"},"create")," operation that can be customized\naccording to the objectives of the new language-package."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export function create(path, params, callback) {\n  return state => {\n    // expand references for the data argument with state\n    // do the work\n    // return state\n  };\n}\n")))}d.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=d(n),b=a,f=s["".concat(i,".").concat(b)]||s[b]||u[b]||o;return n?r.a.createElement(f,p(p({ref:t},l),{},{components:n})):r.a.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},536:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/adaptor_choice_openfn-260fd32158cdf4cfc226b686dc236e5c.png"},537:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/adaptor_npm-2141b2789fbf572fb682e67a828e768f.png"},538:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/srcfolder-bd57de51f966882631050addf1a8506e.png"},539:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/usethistemplate-aede212d4072939e4ed47bc6b0e95e1b.png"}}]);