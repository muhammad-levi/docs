(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{126:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return s})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(8),a=(r(0),r(268)),i={},s={unversionedId:"jobs/send-mail-in-mailgun",id:"jobs/send-mail-in-mailgun",isDocsHomePage:!1,title:"send-mail-in-mailgun",description:"`js",source:"@site/library/jobs/send-mail-in-mailgun.md",sourceDirName:"jobs",slug:"/jobs/send-mail-in-mailgun",permalink:"/library/jobs/send-mail-in-mailgun",version:"current",frontMatter:{},sidebar:"library",previous:{title:"promise-all-nested-requests",permalink:"/library/jobs/promise-all-nested-requests"},next:{title:"send-sms-from-salesforce-workflow",permalink:"/library/jobs/send-sms-from-salesforce-workflow"}},c=[],l={toc:c};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"send(\n  fields(\n    field('from', 'you@domain.com'),\n    field('to', dataValue('form.submission.respondantEmail')),\n    field('subject', 'Thanks for completing our survey.'),\n    field('text', 'Your message goes here.')\n  )\n);\n")))}u.isMDXComponent=!0},268:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return d}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=t,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return r?o.a.createElement(d,s(s({ref:n},l),{},{components:r})):o.a.createElement(d,s({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);