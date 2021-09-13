"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6992],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return p}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),c=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(a),p=r,_=f["".concat(d,".").concat(p)]||f[p]||u[p]||o;return a?t.createElement(_,i(i({ref:n},s),{},{components:a})):t.createElement(_,i({ref:n},s))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},27677:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var t=a(87462),r=a(63366),o=(a(67294),a(3905)),i={title:"Using merge and each",sidebar_label:"\ud83d\udcdc Using merge and each",id:"bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",keywords:["library","job","expression","salesforce","create","dataPath","dataValue","each","field","fields","index","join","lastReferenceValue","merge","relationship"]},l=void 0,d={unversionedId:"jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",id:"jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",isDocsHomePage:!1,title:"Using merge and each",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",permalink:"/fr/library/jobs/auto/bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",tags:[],version:"current",frontMatter:{title:"Using merge and each",sidebar_label:"\ud83d\udcdc Using merge and each",id:"bring-formId-into-data-array-then-create-parent-and-children-in-salesforce",keywords:["library","job","expression","salesforce","create","dataPath","dataValue","each","field","fields","index","join","lastReferenceValue","merge","relationship"]},sidebar:"library",previous:{title:"Upsert User in Salesforce",permalink:"/fr/library/jobs/auto/Upsert-User-in-Salesforce-2021-04-16"},next:{title:"\ud83d\udcdc Using promises",permalink:"/fr/library/jobs/auto/complex-state-control"}},c=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],s={toc:c};function u(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ud83d\udcdc ",(0,o.kt)("em",null,"This job is an official example from OpenFn.")),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Name: Using merge and each"),(0,o.kt)("li",{parentName:"ul"},"Adaptor: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,o.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,o.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,o.kt)("inlineCode",{parentName:"a"},"latest"))),(0,o.kt)("li",{parentName:"ul"},"Created date unknown"),(0,o.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,o.kt)("li",{parentName:"ul"},"Score: ",(0,o.kt)("b",null,"100")," (an ",(0,o.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,o.kt)("h2",{id:"key-functions"},"Key Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dataPath"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"index"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"join"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lastReferenceValue"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"merge"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"relationship")),(0,o.kt)("h2",{id:"expression"},"Expression"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"each(\n  join('$.data.data[*]', '$.data.formId', 'formId'),\n  create(\n    'ODK_Submission__c',\n    fields(\n      //bridgetest sandbox record type, comment out when not in use\n      field('RecordTypeId', '012J00000005hlb'),\n      //prduction record type, comment out when not in use\n      //field(\"RecordType\", \"XXXXXXXXXXXXXXXX\"),\n      // or\n      //relationship(\"RecordType\", \"name\", dataValue(\"recort_type_name\")),\n      field('Record_Type_Name__c', dataValue('record_type_id')),\n      field('ODK_Form_Name__c', dataValue('formId')),\n      field('Site_School_ID_Number__c', dataValue('site')),\n      field('BT_Staff_ID__c', dataValue('recorded_by')),\n      field('Date__c', dataValue('today')),\n      field('Head_of_Household__c', dataValue('head_of_household')),\n      field(\n        'Head_of_Household_Gender__c',\n        dataValue('head_of_household_gender')\n      ),\n      field('Head_of_Household_age__c', dataValue('head_of_household_age')),\n      field('Light_Source__c', dataValue('light_source')),\n      field('communication__c', dataValue('communication')),\n      field('transport__c', dataValue('transport')),\n      field(\n        'number_of_children_in_household__c',\n        dataValue('number_of_children')\n      ),\n      field('school_visits__c', dataValue('school_visits')),\n      field('school_visit_reason__c', dataValue('school_visit_reason')),\n      field('Village__c', dataValue('village')),\n      field('ODK_Key__c', dataValue('*meta-instance-id*'))\n    )\n  )\n),\n  each(\n    merge(\n      dataPath('individual_na[*]'),\n      fields(\n        field('metaId', dataValue('*meta-instance-id*')),\n        field('parentId', lastReferenceValue('id')),\n        field('village', dataValue('$data.village'))\n      )\n    ),\n    create(\n      'ODK_Submission__c',\n      fields(\n        //bridgetest sandbox record type, comment out when not in use\n        field('RecordTypeId', '012J00000005hla'),\n        //prduction record type, comment out when not in use\n        //field(\"RecordType\", \"XXXXXXXXXXXXXXXX\"),\n        // or\n        //relationship(\"RecordType\", \"name\", dataValue(\"recort_type_name\")),\n        field('Related_ODK_Submission__c', dataValue('parentId')),\n        field('family_name__c', dataValue('given_name')),\n        field('school_coded__c', dataValue('school_coded')),\n        field('school_type__c', dataValue('school_type')),\n        field('gender__c', dataValue('gender')),\n        field('Pays_School_Fees__c', dataValue('school_fees_yes_no')),\n        field('in_primary_school__c', dataValue('in_primary_school')),\n        field('School_Fee_Amount__c', dataValue('school_fees')),\n        field('Age__c', dataValue('age')),\n        field('surname__c', dataValue('surname')),\n        field('out_of_school_reason__c', dataValue('out_of_school_reason')),\n        field('class_level__c', dataValue('class_level')),\n        field(\n          'other_out_of_school_reason__c',\n          dataValue('other_out_of_school_reason')\n        ),\n        field('Village__c', dataValue('village')),\n        // This is a concatenation, adding the unique child ID.\n        field('ODK_Key__c', function (state) {\n          return dataValue('metaId')(state).concat('(', index()(state), ')');\n        })\n      )\n    )\n  );\n\n")))}u.isMDXComponent=!0}}]);