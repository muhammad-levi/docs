"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3063],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(a),f=r,m=c["".concat(u,".").concat(f)]||c[f]||p[f]||o;return a?n.createElement(m,l(l({ref:t},s),{},{components:a})):n.createElement(m,l({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47848:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),l=["components"],i={title:"Add data values",sidebar_label:"\ud83d\udcdc Add data values",id:"DHIS2-DataValues-API",keywords:["library","job","expression","dhis2","dataValue","field","fields"]},u=void 0,d={unversionedId:"jobs/auto/DHIS2-DataValues-API",id:"jobs/auto/DHIS2-DataValues-API",title:"Add data values",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/DHIS2-DataValues-API.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/DHIS2-DataValues-API",permalink:"/fr/library/jobs/auto/DHIS2-DataValues-API",tags:[],version:"current",frontMatter:{title:"Add data values",sidebar_label:"\ud83d\udcdc Add data values",id:"DHIS2-DataValues-API",keywords:["library","job","expression","dhis2","dataValue","field","fields"]},sidebar:"library",previous:{title:"0 - Get TEI data",permalink:"/fr/library/jobs/auto/0-Get-TEI-data-2021-06-02"},next:{title:"Add DHIS2 Data Value Sets",permalink:"/fr/library/jobs/auto/Add-DHIS2-Data-Value-Sets-2016-03-28"}},s=[{value:"Metadata",id:"metadata",children:[],level:2},{value:"Key Functions",id:"key-functions",children:[],level:2},{value:"Expression",id:"expression",children:[],level:2}],p={toc:s};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udcdc ",(0,o.kt)("em",null,"This job is an official example from OpenFn.")),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Add data values"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-dhis2"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-dhis2"},(0,o.kt)("inlineCode",{parentName:"a"},"latest"))),(0,o.kt)("li",{parentName:"ul"},"Created date unknown"),(0,o.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"100")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// ----\n// Add data to data value sets in DHIS2 using a generic JSON message, submitted\n// by Taylor Downs @ OpenFn.\n// ---\n\ndataValueSet(\n  fields(\n    field('dataSet', 'pBOMPrpg1QX'),\n    field('orgUnit', 'DiszpKrYNg8'),\n    field('period', '201401'),\n    field('completeData', dataValue('form.date')),\n    field('dataValues', function (state) {\n      return [\n        dataElement('qrur9Dvnyt5', dataValue('form.prop_a')(state)),\n        dataElement('oZg33kd9taw', dataValue('form.prop_b')(state)),\n        dataElement('msodh3rEMJa', dataValue('form.prop_c')(state)),\n      ];\n    })\n  )\n);\n\n")))}c.isMDXComponent=!0}}]);