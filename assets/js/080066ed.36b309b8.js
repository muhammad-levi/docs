"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5889],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48085:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=n(83117),r=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Generic Data Sources",sidebar_label:"Generic Sources"},c=void 0,l={unversionedId:"source-apps",id:"source-apps",title:"Generic Data Sources",description:"Standard webhook configuration",source:"@site/docs/source-apps.md",sourceDirName:".",slug:"/source-apps",permalink:"/documentation/source-apps",editUrl:"https://github.com/openfn/docs/edit/main/docs/source-apps.md",tags:[],version:"current",frontMatter:{title:"Generic Data Sources",sidebar_label:"Generic Sources"},sidebar:"docs",previous:{title:"Your Inbox",permalink:"/documentation/build/inbox"},next:{title:"Devtools",permalink:"/documentation/devtools/home"}},u=[{value:"Standard webhook configuration",id:"standard-webhook-configuration",children:[],level:2},{value:"How webhooks enable real time integration",id:"how-webhooks-enable-real-time-integration",children:[],level:2},{value:"Providing a UI for your webhook?",id:"providing-a-ui-for-your-webhook",children:[],level:2},{value:"When to send?",id:"when-to-send",children:[],level:2},{value:"What to send?",id:"what-to-send",children:[],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"standard-webhook-configuration"},"Standard webhook configuration"),(0,a.kt)("p",null,"This section describes how to enable push notifications from selected source\napplications or how to configure pull jobs to fetch data from those sources. If\nyou don't see yours in the alphabetical list below feel free to add it with a\npull request."),(0,a.kt)("p",null,"Every OpenFn project has a unique ",(0,a.kt)("strong",{parentName:"p"},"Inbox URL")," address that can be used as an\nendpoint for any JSON webhook. To set up a data source, configure that source to\nmake a POST over HTTPS to your Inbox URL. See ",(0,a.kt)("a",{parentName:"p",href:"/documentation/build/inbox"},"Your Inbox"),"."),(0,a.kt)("p",null,'To connect an application with standard JSON webhooks, copy your inbox URL from\nthe "Inbox" page or your "Project Settings" screen and use it as the destination\nURL on your source application. Unless you have specifically configured it on\nthe "Access & Security" page, no authentication is required.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"N.B.: This is by no means an exhaustive list."))," It is merely a list of\ncommon sources that external contributors have added. Remember that anything\nwith a REST api or a JSON-based notification service can be used with OpenFn."),(0,a.kt)("h2",{id:"how-webhooks-enable-real-time-integration"},"How webhooks enable real time integration"),(0,a.kt)("p",null,"Webhooks services (sometimes called \u201cREST Services\u201d) are services that your\nusers can configure on your application which make posts to other REST\nendpoints. The most common example we\u2019ll come across is a form, submission, or\ncase forwarding service that will send a copy of a submission to an external\nAPI."),(0,a.kt)("h2",{id:"providing-a-ui-for-your-webhook"},"Providing a UI for your webhook?"),(0,a.kt)("p",null,"This is likely the most end-user interactive part of your API, and you\u2019ll\nprobably want a feature in your user-interface that allows them to turn on and\noff these various services. See the below example from Kobo Toolbox (left) and\nCommCare (right)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kobo_to_commcare",src:n(73574).Z})),(0,a.kt)("h2",{id:"when-to-send"},"When to send?"),(0,a.kt)("p",null,"Consider whether to set up watches or triggers at the DB level (this seems like\noverkill but is provided by some databases relatively inexpensively) or at\nseveral key interfaces in your application. What types of\nupdates/submissions/changes in your application might other applications need to\nbe notified of in real time? A new submission is the most common, but updates to\na \u201ccase\u201d, changes to UAM, or any other events could be valuable."),(0,a.kt)("h2",{id:"what-to-send"},"What to send?"),(0,a.kt)("p",null,"The whole resource, please. This anticipates our thoughts on sector-wide data\nstandards slightly, but (within reason) it makes sense to expose everything your\nend-user will need to run the next step in their logic. Some interfaces allow\nthe user to control which fields (and even which related resources) are sent in\na given payload, but often the default is to send everything and let them pick\nand choose what they want to use."))}d.isMDXComponent=!0},73574:function(e,t,n){t.Z=n.p+"assets/images/webhooks1-3e958a7135bf652f131e99266bd47c59.png"}}]);