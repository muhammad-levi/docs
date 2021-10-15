"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[910],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22604:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"0 - Get TEI data",sidebar_label:"0 - Get TEI data",id:"0-Get-TEI-data-2021-06-02",keywords:["library","job","expression","dhis2","alterState","dataValue","getData"]},s=void 0,u={unversionedId:"jobs/auto/0-Get-TEI-data-2021-06-02",id:"jobs/auto/0-Get-TEI-data-2021-06-02",isDocsHomePage:!1,title:"0 - Get TEI data",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/0-Get-TEI-data-2021-06-02.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/0-Get-TEI-data-2021-06-02",permalink:"/fr/library/jobs/auto/0-Get-TEI-data-2021-06-02",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"0 - Get TEI data",sidebar_label:"0 - Get TEI data",id:"0-Get-TEI-data-2021-06-02",keywords:["library","job","expression","dhis2","alterState","dataValue","getData"]},sidebar:"library",previous:{title:"Update Person in CommCare V2",permalink:"/fr/library/jobs/auto/Update-Person-in-CommCare-V2-2019-10-04"},next:{title:"\ud83d\udcdc Add data values",permalink:"/fr/library/jobs/auto/DHIS2-DataValues-API"}},c=[{value:"Metadata",id:"metadata",children:[],level:2},{value:"Key Functions",id:"key-functions",children:[],level:2},{value:"Expression",id:"expression",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: 0 - Get TEI data"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2/releases/tag/v2.0.4"},(0,o.kt)("inlineCode",{parentName:"a"},"v2.0.4"))),(0,o.kt)("li",{parentName:"ul"},"Created 5 months ago"),(0,o.kt)("li",{parentName:"ul"},"Updated 4 months ago"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"18")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getData")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: get all TEIs with vaccination state 'NOT YET REQUESTED' via save filter from Austin.\n\n\n// NOTE: if we can get a webhook with the desired info, let's drop this job!\n\ngetData('trackedEntityInstances', {\n  fields: '*',\n  ou: 'V5XvX1wr1kF', // traningland?\n  program: 'EZkN8vYZwjR', //\n  trackedEntityInstance: dataValue('id'), // the value from the post\n});\n\nalterState(state => {\n  console.log('The response from DHIS2', state.data);\n  console.log('Only pass necessary data to the DIVOC job.');\n  const necessary = state.data.trackedEntityInstances[0];\n  console.log(necessary);\n  return { ...state, data: necessary };\n});\n\n")))}d.isMDXComponent=!0}}]);