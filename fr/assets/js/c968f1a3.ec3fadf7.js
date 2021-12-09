"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1061],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41508:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={layout:"post",title:"Our Servers or Yours: Thinking through deployment options",author:"Jed Goldstein",author_url:"https://github.com/jedbgold",author_image_url:"https://avatars.githubusercontent.com/jedbgold",tags:["how-to","tips"],featured:!0},c=void 0,l={permalink:"/fr/articles/2021/02/03/hosted-or-local-deployment",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-02-03-hosted-or-local-deployment.md",source:"@site/articles/2021-02-03-hosted-or-local-deployment.md",title:"Our Servers or Yours: Thinking through deployment options",description:"Zandile is a program manager at an iNGO and she needs to use CommCare, DHIS2,",date:"2021-02-03T00:00:00.000Z",formattedDate:"3 f\xe9vrier 2021",tags:[{label:"how-to",permalink:"/fr/articles/tags/how-to"},{label:"tips",permalink:"/fr/articles/tags/tips"}],readingTime:4.345,truncated:!0,authors:[{name:"Jed Goldstein",url:"https://github.com/jedbgold",imageURL:"https://avatars.githubusercontent.com/jedbgold"}],prevItem:{title:"Sync Like You Mean It: Thinking Through System \u201cSyncing\u201d Protocols",permalink:"/fr/articles/2021/02/17/syncing-options"},nextItem:{title:"Tracked entity instances in DHIS2",permalink:"/fr/articles/2020/12/09/upsert-in-dhis2"}},u={authorsImageUrls:[void 0]},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Zandile is a program manager at an iNGO and she needs to use CommCare, DHIS2,\nand OpenFn for an upcoming public health project. She understands that all three\npieces of software can be deployed locally, or accessed as SaaS (Software as a\nService)."),(0,a.kt)("p",null,"Essentially, Zandile needs to decide if she would like to run the software on\nsomeone else\u2019s servers (SaaS), or on her organization\u2019s own servers (deployed\nlocally). Before making a decision she outlines the basic, non-technical\nconsiderations for both options."))}f.isMDXComponent=!0}}]);