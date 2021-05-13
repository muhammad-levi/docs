(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3702],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=r,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},52826:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"F3. Link Payment to Havanao Transactions with salesforce",sidebar_label:"F3. Link Payment to Havanao Transactions",id:"F3. Link Payment to Havanao Transactions-2018-12-14",keywords:["library","job","expression","salesforce","alterState","field","fields","upsert"]},s={unversionedId:"jobs/auto/F3. Link Payment to Havanao Transactions-2018-12-14",id:"jobs/auto/F3. Link Payment to Havanao Transactions-2018-12-14",isDocsHomePage:!1,title:"F3. Link Payment to Havanao Transactions with salesforce",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/F3. Link Payment to Havanao Transactions-2018-12-14.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/F3. Link Payment to Havanao Transactions-2018-12-14",permalink:"/library/jobs/auto/F3. Link Payment to Havanao Transactions-2018-12-14",version:"current",sidebar_label:"F3. Link Payment to Havanao Transactions",frontMatter:{title:"F3. Link Payment to Havanao Transactions with salesforce",sidebar_label:"F3. Link Payment to Havanao Transactions",id:"F3. Link Payment to Havanao Transactions-2018-12-14",keywords:["library","job","expression","salesforce","alterState","field","fields","upsert"]},sidebar:"library",previous:{title:"F1. Validate Contract Payment in Salesforce with salesforce",permalink:"/library/jobs/auto/F1. Validate Contract Payment in Salesforce-2018-12-14"},next:{title:"F5. Finalize Payment Status in Salesforce, Fetch Customer Data with salesforce",permalink:"/library/jobs/auto/F5. Finalize Payment Status in Salesforce, Fetch Customer Data-2018-12-14"}},l=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: F3. Link Payment to Havanao Transactions"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("inlineCode",{parentName:"li"},"@openfn/language-salesforce")),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("inlineCode",{parentName:"li"},"v1.3.2")),(0,o.kt)("li",{parentName:"ul"},"Created over 2 years ago"),(0,o.kt)("li",{parentName:"ul"},"Updated over 2 years ago")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  console.log(state);\n  return state;\n});\n\nupsert('Payment__c', 'EE_Payment_ID__c', fields(\n  field('EE_Payment_ID__c', state.paymentId),\n  field('Payment_status__c', state.data.body.transactionStatus)\n));\n")))}u.isMDXComponent=!0}}]);