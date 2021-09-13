"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8299],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32303:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a={title:"SurveyCTO"},c=void 0,u={unversionedId:"apps/survey-cto",id:"apps/survey-cto",isDocsHomePage:!1,title:"SurveyCTO",description:"Real-time (with webhooks)",source:"@site/docs/apps/survey-cto.md",sourceDirName:"apps",slug:"/apps/survey-cto",permalink:"/documentation/apps/survey-cto",editUrl:"https://github.com/openfn/docs/edit/main/docs/apps/survey-cto.md",tags:[],version:"current",frontMatter:{title:"SurveyCTO"},sidebar:"docs",previous:{title:"Salesforce",permalink:"/documentation/apps/salesforce"},next:{title:"Tableau",permalink:"/documentation/apps/tableau"}},l=[{value:"Real-time (with webhooks)",id:"real-time-with-webhooks",children:[]},{value:"Periodic",id:"periodic",children:[]}],s={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"real-time-with-webhooks"},"Real-time (with webhooks)"),(0,i.kt)("p",null,"SurveyCTO has a\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.surveycto.com/05-exporting-and-publishing-data/03-publishing-data-to-the-cloud/05.forms-to-webhooks.html"},"webhooks service"),"\nwhich allows you to publish data to your OpenFn inbox. Note that as submissions\ncome in to the server, SurveyCTO will automatically publish your selected fields\nto your chosen webhook but there will be a brief delay of up to ten minutes from\nthe time the submission occurs and the time SurveyCTO sends this data to OpenFn."),(0,i.kt)("p",null,"From SurveyCTO:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can get started by going to your server console's Export tab, scrolling\ndown to the Advanced: publishing form and dataset data to the cloud section,\nand clicking the ON/OFF toggle to ON if you haven't already enabled cloud\npublishing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To configure any one of your forms to publish via webhooks, click on the\nConfigure option for that form, and then click Add Webhook in the panel that\nappears."))),(0,i.kt)("h2",{id:"periodic"},"Periodic"),(0,i.kt)("p",null,"In order to fetch data from SurveyCTO periodically, you can use\n",(0,i.kt)("inlineCode",{parentName:"p"},"language-surveycto"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"fetchSubmissions(\n  'form_id', // the form id\n  'Sep 1, 2016 3:56:02 PM', // the initial \"after\" date\n  // after the first run, OpenFn will only fetch new submissions\n  'https://www.openfn.org/inbox/something-secret' // the inbox to post form data to.\n);\n")),(0,i.kt)("p",null,"Every time this job runs it will only fetch new data, by default."))}p.isMDXComponent=!0}}]);