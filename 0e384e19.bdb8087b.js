(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return f}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(t),b=o,f=l["".concat(c,".").concat(b)]||l[b]||m[b]||a;return t?r.a.createElement(f,i(i({ref:n},p),{},{components:t})):r.a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return s}));var o=t(3),r=t(7),a=(t(0),t(143)),c={title:"We \u2764\ufe0f documentation.",sidebar_label:"Introduction",slug:"/"},i={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"We \u2764\ufe0f documentation.",description:"OpenFn.org and OpenFn/Core Documentation",source:"@site/docs/intro.md",slug:"/",permalink:"/documentation/",editUrl:"https://github.com/openfn/docs/edit/master/docs/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Quick-start",permalink:"/documentation/quick-start"}},u=[{value:"OpenFn.org and OpenFn/Core Documentation",id:"openfnorg-and-openfncore-documentation",children:[]},{value:"The OpenFn Community on Discourse",id:"the-openfn-community-on-discourse",children:[]}],p={toc:u};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"openfnorg-and-openfncore-documentation"},"OpenFn.org and OpenFn/Core Documentation"),Object(a.b)("p",null,"This documentation is for ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.openfn.org"}),"OpenFn.org"),", and is primarily\nintended to help users of the site. Technical documentation for OpenFn's\nopen-source integration tools and language-packs can be found in their\nrespective repositories at ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/openfn"}),"Github.com/OpenFn"),"."),Object(a.b)("p",null,"Check out the tabs at the top of the page. They'll take you to documentation\nabout ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/documentation/platform"}),"the Platform"),", ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/documentation/jobs/core"}),"job writing")," (for both hosted\nand locally-deployed/open-source version of OpenFn), and connecting\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/documentation/source-apps"}),"source applications")," so you can publish data to OpenFn in real\ntime."),Object(a.b)("p",null,"If you want a new feature or find a bug, please\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/openfn/docs/issues"}),"submit an issue"),". If you find an issue\nwith the documentation or want to share your custom functions, you can make\nthose changes yourself and\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/OpenFn/docs/compare"}),"submit a pull request"),"!"),Object(a.b)("p",null,"If you have any questions, please don't hesitate to email\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"mailto:admin@openfn.org"}),"admin@openfn.org"),"."),Object(a.b)("h2",{id:"the-openfn-community-on-discourse"},"The OpenFn Community on Discourse"),Object(a.b)("p",null,"Please make sure to check out\n",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://community.openfn.org"}),"community.openfn.org")," if you've got questions\nthat aren't answered here."))}s.isMDXComponent=!0}}]);