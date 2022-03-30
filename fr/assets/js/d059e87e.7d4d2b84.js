"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3549],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return d}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(p,".").concat(d)]||f[d]||c[d]||o;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75720:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var t=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],l={title:"Create Person in OpenMRS",sidebar_label:"Create Person in OpenMRS",id:"Create-Person-in-OpenMRS-2016-02-12",keywords:["library","job","expression","openmrs","dataValue","field","fields"]},p=void 0,s={unversionedId:"jobs/auto/Create-Person-in-OpenMRS-2016-02-12",id:"jobs/auto/Create-Person-in-OpenMRS-2016-02-12",title:"Create Person in OpenMRS",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Create-Person-in-OpenMRS-2016-02-12",permalink:"/fr/library/jobs/auto/Create-Person-in-OpenMRS-2016-02-12",tags:[],version:"current",frontMatter:{title:"Create Person in OpenMRS",sidebar_label:"Create Person in OpenMRS",id:"Create-Person-in-OpenMRS-2016-02-12",keywords:["library","job","expression","openmrs","dataValue","field","fields"]},sidebar:"library",previous:{title:"Create Patient in OpenMRS",permalink:"/fr/library/jobs/auto/Create-Patient-in-OpenMRS-2019-10-24"},next:{title:"Upsert to mBrana",permalink:"/fr/library/jobs/auto/Upsert-to-mBrana-2021-05-11"}},u=[{value:"Metadata",id:"metadata",children:[],level:2},{value:"Key Functions",id:"key-functions",children:[],level:2},{value:"Expression",id:"expression",children:[],level:2}],c={toc:u};function f(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Create Person in OpenMRS"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openmrs"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-openmrs"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-openmrs/releases/tag/v0.0.2"},(0,o.kt)("inlineCode",{parentName:"a"},"v0.0.2"))),(0,o.kt)("li",{parentName:"ul"},"Created about 6 years ago"),(0,o.kt)("li",{parentName:"ul"},"Updated 10 months ago"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"0")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'person(\n  fields(\n    field("gender", "M"),\n    field("names", function(state) {\n      return [{\n        "givenName": dataValue("form.first_name")(state),\n        "familyName": "Sports_Music_Field_Day"\n      }]\n    })\n  )\n)\n')))}f.isMDXComponent=!0}}]);