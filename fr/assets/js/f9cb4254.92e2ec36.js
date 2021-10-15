"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4343],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),f=r,y=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79539:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],s={title:"Using findValue with an array of data",sidebar_label:"\ud83d\udcdc Using findValue with an array of data",id:"async-findValue",keywords:["library","job","expression","postgresql","alterState","findValue","upsertMany","async","await"]},l=void 0,u={unversionedId:"jobs/auto/async-findValue",id:"jobs/auto/async-findValue",isDocsHomePage:!1,title:"Using findValue with an array of data",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/async-findValue.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/async-findValue",permalink:"/fr/library/jobs/auto/async-findValue",tags:[],version:"current",frontMatter:{title:"Using findValue with an array of data",sidebar_label:"\ud83d\udcdc Using findValue with an array of data",id:"async-findValue",keywords:["library","job","expression","postgresql","alterState","findValue","upsertMany","async","await"]},sidebar:"library",previous:{title:"Upsert to mBrana",permalink:"/fr/library/jobs/auto/Upsert-to-mBrana-2021-05-11"},next:{title:"Get cases from Primero",permalink:"/fr/library/jobs/auto/Get-cases-from-Primero-2021-09-23"}},p=[{value:"Metadata",id:"metadata",children:[],level:2},{value:"Key Functions",id:"key-functions",children:[],level:2},{value:"Expression",id:"expression",children:[],level:2}],c={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udcdc ",(0,o.kt)("em",null,"This job is an official example from OpenFn.")),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Using findValue with an array of data"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-postgresql"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-postgresql"},(0,o.kt)("inlineCode",{parentName:"a"},"latest"))),(0,o.kt)("li",{parentName:"ul"},"Created date unknown"),(0,o.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"100")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"findValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"upsertMany"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"async"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"await")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'alterState(async state => {\n  const dataArray =\n    state.data.body.st_grass_repeat ||\n    state.data.body["plot_forest_area/st_grass_repeat"] ||\n    [];\n  const dataGrass = [];\n  const path = state.data.body.st_grass_repeat\n    ? "st_grass_repeat"\n    : "plot_forest_area/st_grass_repeat";\n\n  for (let data of uniqueGrass) {\n    dataGrass.push({\n      WCSPROGRAMS_TaxaID: await findValue({\n        uuid: "WCSPROGRAMS_TaxaID",\n        relation: "WCSPROGRAMS_Taxa",\n        where: {\n          ScientificName: `%${state.handleValue(\n            data["st_grass_repeat/grass_species"]\n          )}%`,\n        },\n        operator: { ScientificName: "like" },\n      })(state),\n      UnknownSpeciesImage: data[`${path}/noknown`],\n      GrassPercent: data[`${path}/grass_perc`],\n      GrassHeight: data[`${path}/grass_height`],\n      AnswerId: state.data.body._id,\n    });\n  }\n  return upsertMany(\n    "WCSPROGRAMS_VegetationGrass",\n    "WCSPROGRAMS_VegetationGrassCode",\n    () => dataGrass\n  )(state);\n});\n\n')))}d.isMDXComponent=!0}}]);