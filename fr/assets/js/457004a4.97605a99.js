"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8725],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return u}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var _=t.createContext({}),d=function(e){var n=t.useContext(_),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=d(e.components);return t.createElement(_.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,_=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,m=c["".concat(_,".").concat(u)]||c[u]||f[u]||i;return a?t.createElement(m,o(o({ref:n},s),{},{components:a})):t.createElement(m,o({ref:n},s))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var _ in n)hasOwnProperty.call(n,_)&&(l[_]=n[_]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4085:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return _},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var t=a(83117),r=a(80102),i=(a(67294),a(3905)),o=["components"],l={title:"Create Person in SF (Sandbox)",sidebar_label:"Create Person in SF (Sandbox)",id:"Create-Person-in-SF-Sandbox-2016-12-29",keywords:["library","job","expression","salesforce","create","dataValue","field","fields","relationship"]},_=void 0,d={unversionedId:"jobs/auto/Create-Person-in-SF-Sandbox-2016-12-29",id:"jobs/auto/Create-Person-in-SF-Sandbox-2016-12-29",isDocsHomePage:!1,title:"Create Person in SF (Sandbox)",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/Create-Person-in-SF-Sandbox-2016-12-29.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/Create-Person-in-SF-Sandbox-2016-12-29",permalink:"/fr/library/jobs/auto/Create-Person-in-SF-Sandbox-2016-12-29",tags:[],version:"current",frontMatter:{title:"Create Person in SF (Sandbox)",sidebar_label:"Create Person in SF (Sandbox)",id:"Create-Person-in-SF-Sandbox-2016-12-29",keywords:["library","job","expression","salesforce","create","dataValue","field","fields","relationship"]},sidebar:"library",previous:{title:"Create Person in SF",permalink:"/fr/library/jobs/auto/Create-Person-in-SF-2019-02-25"},next:{title:"\ud83d\udcdc Create SMS linked to contact",permalink:"/fr/library/jobs/auto/Create-SMS-Linked-to-Contact-in-SF"}},s=[{value:"Metadata",id:"metadata",children:[],level:2},{value:"Key Functions",id:"key-functions",children:[],level:2},{value:"Expression",id:"expression",children:[],level:2}],f={toc:s};function c(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: Create Person in SF (Sandbox)"),(0,i.kt)("li",{parentName:"ul"},"Adaptor: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,i.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,i.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v1.3.2"},(0,i.kt)("inlineCode",{parentName:"a"},"v1.3.2"))),(0,i.kt)("li",{parentName:"ul"},"Created almost 5 years ago"),(0,i.kt)("li",{parentName:"ul"},"Updated 5 months ago"),(0,i.kt)("li",{parentName:"ul"},"Score: ",(0,i.kt)("b",null,"0")," (an ",(0,i.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,i.kt)("h2",{id:"key-functions"},"Key Functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"relationship")),(0,i.kt)("h2",{id:"expression"},"Expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"create(\n  'Person__c',\n  fields(\n    field('Name', dataValue('$.form.Basic_Information.Person_Name')),\n    relationship('RecordType', 'Name', state => {\n      return dataValue('$.form.Basic_Information.Record_Type')(state)\n        .toString()\n        .replace(/_/g, ' ');\n    }),\n    /*relationship(\"Area__r\",\"CommCare_User_ID__c\",dataValue(\"form.area\")),\n  field(\"Active_in_HAWI__c\",state =>{\n    if(dataValue(\"$.form.Basic_Information.HAWI_Status\")(state)==\"Yes\"){\n      return(\"Yes\");\n    }\n  }),*/\n    field('HAWI_Registrant__c', state => {\n      if (dataValue('$.form.Basic_Information.HAWI_Status')(state) == 'Yes') {\n        return 'Yes';\n      }\n    }),\n    field('HAWI_Registrant__c', state => {\n      if (dataValue('$.form.Basic_Information.HAWI_Status')(state) == 'Yes') {\n        return 'Yes';\n      }\n    }),\n    field('Active_in_Thrive_Thru_5__c', state => {\n      if (\n        dataValue('$.form.Basic_Information.Record_Type')(state)\n          .toString()\n          .replace(/_/g, ' ') == 'Child' &&\n        dataValue('$.form.Basic_Information.TT5_Status')(state) == 'Yes'\n      ) {\n        return 'Yes';\n      }\n    }),\n    field('Thrive_Thru_5_Registrant__c', state => {\n      if (\n        dataValue('$.form.Basic_Information.Record_Type')(state)\n          .toString()\n          .replace(/_/g, ' ') == 'Child' &&\n        dataValue('$.form.Basic_Information.TT5_Status')(state) == 'Yes'\n      ) {\n        return 'Yes';\n      }\n    }),\n    field('Active_TT5_Mother__c', state => {\n      if (\n        dataValue('$.form.Basic_Information.Record_Type')(state)\n          .toString()\n          .replace(/_/g, ' ') == 'Female Adult' &&\n        dataValue('$.form.Basic_Information.TT5_Status')(state) == 'Yes'\n      ) {\n        return 'Yes';\n      }\n    }),\n    field('Enrollment_Date__c', state => {\n      if (dataValue('$.form.Basic_Information.TT5_Status')(state) == 'Yes') {\n        return dataValue('$.metadata.timeEnd')(state);\n      }\n    }),\n    field('HAWI_Enrollment_Date__c', state => {\n      if (dataValue('$.form.Basic_Information.HAWI_Status')(state) == 'Yes') {\n        return dataValue('$.metadata.timeEnd')(state);\n      }\n    }),\n    field('LMP__c', dataValue('$.form.TT5.Child_Information.ANCs.LMP')),\n    field('Source__c', true),\n    field('CommCare_ID__c', dataValue('$.form.subcase_0.case.@case_id')),\n    field('Date_of_Birth__c', dataValue('$.form.Basic_Information.DOB')),\n    field('Gender__c', dataValue('$.form.Basic_Information.Final_Gender')),\n    field(\n      'Marital_Status__c',\n      dataValue('$.form.Basic_Information.Marital_Status')\n    ),\n    field(\n      'Telephone__c',\n      dataValue('$.form.Basic_Information.Contact_Info.contact_phone_number')\n    ),\n    field(\n      'Next_of_Kin__c',\n      dataValue('$.form.Basic_Information.Contact_Info.Next_of_Kin')\n    ),\n    field(\n      'Next_of_Kin_Phone__c',\n      dataValue('$.form.Basic_Information.Contact_Info.next_of_kin_phone')\n    ),\n    field('Client_Status__c', 'Active'),\n    field(\n      'Ever_on_Family_Planning__c',\n      dataValue('$.form.Basic_Information.Ever_on_Family_Planning')\n    ),\n    field(\n      'Family_Planning__c',\n      dataValue('$.form.Basic_Information.Currently_on_family_planning')\n    ),\n    field(\n      'Family_Planning_Method__c',\n      dataValue('$.form.Basic_Information.Family_Planning_Method')\n    ),\n    field('ANC_1__c', dataValue('$.form.TT5.Child_Information.ANCs.ANC_1')),\n    field('ANC_2__c', dataValue('$.form.TT5.Child_Information.ANCs.ANC_2')),\n    field('ANC_3__c', dataValue('$.form.TT5.Child_Information.ANCs.ANC_3')),\n    field('ANC_4__c', dataValue('$.form.TT5.Child_Information.ANCs.ANC_4')),\n    field('ANC_5__c', dataValue('$.form.TT5.Child_Information.ANCs.ANC_5')),\n    field(\n      'BCG__c',\n      dataValue('$.form.TT5.Child_Information.Immunizations.BCG')\n    ),\n    field(\n      'OPV_0__c',\n      dataValue('$.form.TT5.Child_Information.Immunizations.OPV_0')\n    ),\n    field(\n      'OPV_1__c',\n      dataValue('$.form.TT5.Child_Information.Immunizations.OPV_PCV_Penta_1')\n    ),\n    field(\n      'OPV_2__c',\n      dataValue('$.form.TT5.Child_Information.Immunizations.OPV_PCV_Penta_2')\n    ),\n    field(\n      'OPV_3__c',\n      dataValue('$.form.TT5.Child_Information.Immunizations.OPV_PCV_Penta_3')\n    ),\n    field(\n      'Measles_6__c',\n      dataValue('$.form.TT5.Child_Information.Immunizations.Measles_6')\n    ),\n    field(\n      'Measles_9__c',\n      dataValue('$.form.TT5.Child_Information.Immunizations.Measles_9')\n    ),\n    field(\n      'Measles_18__c',\n      dataValue('$.form.TT5.Child_Information.Immunizations.Measles_18')\n    ),\n    field(\n      'Exclusive_Breastfeeding',\n      dataValue(\n        '$.form.TT5.Child_Information.Exclusive_Breastfeeding.Exclusive_Breastfeeding'\n      )\n    ),\n    field('Pregnant__c', state => {\n      if (dataValue('$.form.TT5.Mother_Information.Pregnant')(state) == 'Yes')\n        return 1;\n    }),\n    field('Education_Level__c', state => {\n      if (\n        dataValue('$.form.Basic_Information.Record_Type')(state) !== 'Child' &&\n        dataValue('$.form.Basic_Information.Record_Type')(state) !== 'Youth'\n      ) {\n        return dataValue('$.form.Basic_Information.Education_Level')(state)\n          .toString()\n          .replace(/_/g, ' ');\n      }\n    }),\n    field(\n      'Gravida__c',\n      dataValue('$.form.TT5.Mother_Information.Pregnancy_Information.Gravida')\n    ),\n    field(\n      'Parity__c',\n      dataValue('$.form.TT5.Mother_Information.Pregnancy_Information.Parity')\n    ),\n    field(\n      'Unique_Patient_Code__c',\n      dataValue('$.form.HAWI.Unique_Patient_Code')\n    ),\n    field(\n      'Active_in_Support_Group__c',\n      dataValue('$.form.HAWI.Active_in_Support_Group')\n    ),\n    field('Currently_on_ART_s__c', dataValue('$.form.HAWI.ART')),\n    field('ART_Regimen__c', state => {\n      var art = '';\n      var str = dataValue('$.form.HAWI.ARVs')(state);\n      if (str !== undefined) {\n        art = str.replace(/ /g, '; ');\n      }\n      return art;\n    }),\n    field('Preferred_Care_Facility__c', state => {\n      var val = '';\n      if (\n        dataValue('$.form.HAWI.Preferred_Care_Facility')(state) !== undefined\n      ) {\n        val = dataValue('$.form.HAWI.Preferred_Care_Facility')(state)\n          .toString()\n          .replace(/_/g, ' ');\n      }\n      return val;\n    }),\n    field('CommCare_HH_Code__c', dataValue('$.form.case.@case_id')),\n    field(\n      'Child_Status__c',\n      dataValue('$.form.Basic_Information.Child_Status')\n    ),\n    field('Place_of_Delivery__c', state => {\n      var val = '';\n      var placeholder = '';\n      if (\n        dataValue(\n          '$.form.TT5.Child_Information.Delivery_Information.Skilled_Unskilled'\n        )(state) !== undefined\n      ) {\n        placeholder = dataValue(\n          '$.form.TT5.Child_Information.Delivery_Information.Skilled_Unskilled'\n        )(state);\n        if (placeholder == 'Skilled') {\n          val = 'Facility';\n        } else if (placeholder == 'Unskilled') {\n          val = 'Home';\n        }\n      }\n      return val;\n    }),\n    field('Delivery_Facility__c', state => {\n      var val = '';\n      var placeholder = '';\n      if (\n        dataValue(\n          '$.form.TT5.Child_Information.Delivery_Information.Birth_Facility'\n        )(state) !== undefined\n      ) {\n        placeholder = dataValue(\n          '$.form.TT5.Child_Information.Delivery_Information.Birth_Facility'\n        )(state);\n        val = placeholder.toString().replace(/_/g, ' ');\n      }\n      return val;\n    })\n  )\n),\n  create(\n    'Visit__c',\n    fields(\n      relationship(\n        'Household__r',\n        'CommCare_Code__c',\n        dataValue('$.form.case.@case_id')\n      ),\n      field('Household_CHW__c', dataValue('$.form.CHW_ID')),\n      field('Date__c', dataValue('$.metadata.timeEnd')),\n      field('Location__latitude__s', dataValue('$.metadata.location[0]')),\n      field('Location__longitude__s', dataValue('$.metadata.location[1]'))\n    )\n  );\n\n// Your job goes here.// Your job goes here.\n\n")))}c.isMDXComponent=!0}}]);