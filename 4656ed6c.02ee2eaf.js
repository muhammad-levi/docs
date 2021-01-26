(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{145:function(e,r,t){"use strict";t.d(r,"a",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},p=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return t?o.a.createElement(b,c(c({ref:r},l),{},{components:t})):o.a.createElement(b,c({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},95:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(7),a=(t(0),t(145)),i={title:"Exit Codes & Errors"},c={unversionedId:"jobs/errors",id:"jobs/errors",isDocsHomePage:!1,title:"Exit Codes & Errors",description:"Standard Exit Codes",source:"@site/docs/jobs/errors.md",slug:"/jobs/errors",permalink:"/documentation/jobs/errors",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/errors.md",version:"current",sidebar:"docs",previous:{title:"Using multiple operations",permalink:"/documentation/jobs/multiple-operations"},next:{title:"Frequently Asked Questions",permalink:"/documentation/faqs"}},s=[{value:"Standard Exit Codes",id:"standard-exit-codes",children:[{value:"0: Success",id:"0-success",children:[]},{value:"1: Error",id:"1-error",children:[]},{value:"2: Timeout",id:"2-timeout",children:[]},{value:"10: Core Error",id:"10-core-error",children:[]}]},{value:"Special Exit Codes (Platform)",id:"special-exit-codes-platform",children:[{value:"3: Failed to start",id:"3-failed-to-start",children:[]},{value:"4: The NodeVM is unresponsive",id:"4-the-nodevm-is-unresponsive",children:[]},{value:"5: Elixir/ErlangVM Error",id:"5-elixirerlangvm-error",children:[]}]},{value:"A thought on errors",id:"a-thought-on-errors",children:[]}],l={toc:s};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.a)("h2",{id:"standard-exit-codes"},"Standard Exit Codes"),Object(a.a)("h3",{id:"0-success"},"0: Success"),Object(a.a)("p",null,"Exit code ",Object(a.a)("inlineCode",{parentName:"p"},"0")," is a success (run succeeded, e.g. a destination system responded\nwith a ",Object(a.a)("inlineCode",{parentName:"p"},"200"),")"),Object(a.a)("h3",{id:"1-error"},"1: Error"),Object(a.a)("p",null,"Exit code ",Object(a.a)("inlineCode",{parentName:"p"},"1")," is a normally-handled error (run failed normally, e.g. a\ndestination system responded with a ",Object(a.a)("inlineCode",{parentName:"p"},"4XX"),", ",Object(a.a)("inlineCode",{parentName:"p"},"5XX"),", or some specialized\n",Object(a.a)("inlineCode",{parentName:"p"},"RequiredFieldMissing")," error.)"),Object(a.a)("h3",{id:"2-timeout"},"2: Timeout"),Object(a.a)("p",null,"Exit code ",Object(a.a)("inlineCode",{parentName:"p"},"2")," means that your run timed out. It exceeded the timeout you set for\nyour job, or if you're using the hosted platform on a non-enterprise plan, it\nexceeded ",Object(a.a)("inlineCode",{parentName:"p"},"100")," seconds."),Object(a.a)("h3",{id:"10-core-error"},"10: Core Error"),Object(a.a)("p",null,"Exit code ",Object(a.a)("inlineCode",{parentName:"p"},"10")," means there was an error in ",Object(a.a)("inlineCode",{parentName:"p"},"@openfn/core/cli.js execute"),". It's\npossible that you job can't be run how it's written, but that various validation\nchecks failed to warn you earlier."),Object(a.a)("h2",{id:"special-exit-codes-platform"},"Special Exit Codes (Platform)"),Object(a.a)("p",null,"The OpenFn platform controls the execution of all of your jobs via the ErlangVM.\nThe following exit codes are applied at the level of this controlling VM, rather\nthan down inside your run's NodeVM."),Object(a.a)("h3",{id:"3-failed-to-start"},"3: Failed to start"),Object(a.a)("p",null,"Exit code ",Object(a.a)("inlineCode",{parentName:"p"},"3")," means the run could not be started due to an Erlang error (could\nrelate to network traffic, but very rare as an error ",Object(a.a)("em",{parentName:"p"},"before")," the run is started\nwill be retried from Redis with an exponential backoff for a very long time)"),Object(a.a)("h3",{id:"4-the-nodevm-is-unresponsive"},"4: The NodeVM is unresponsive"),Object(a.a)("p",null,"Exit code ",Object(a.a)("inlineCode",{parentName:"p"},"4")," means that the NodeVM running your job became unresponsive. It\nattempted to exit after the timeout but couldn't, so we shut down the process\nfrom the controlling ErlangVM."),Object(a.a)("h3",{id:"5-elixirerlangvm-error"},"5: Elixir/ErlangVM Error"),Object(a.a)("p",null,"Exit code ",Object(a.a)("inlineCode",{parentName:"p"},"5")," means we encountered an unexpected error during the execution of\nyour job which could only be caught by the controlling ErlangVM. Errors like\nthis are very rare and trigger an internal audit by the OpenFN engineering team."),Object(a.a)("h2",{id:"a-thought-on-errors"},"A thought on errors"),Object(a.a)("p",null,"Errors are your friends. The most important thing you can do when encountering\nan error in any step of a data integration project is to ",Object(a.a)("em",{parentName:"p"},"read")," what's on the\nscreen. While this may sound obvious, it's very easy to see a big block of\ntechnical language and switch off... often, there are simple business reasons\nthat a run is failing and they can be identified from the error messages\ndisplayed by @openfn/core."))}d.isMDXComponent=!0}}]);