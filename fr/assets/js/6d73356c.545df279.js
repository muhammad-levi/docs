"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3357],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),_=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=_(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=_(n),c=a,f=p["".concat(l,".").concat(c)]||p[c]||u[c]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var _=2;_<i;_++)o[_]=n[_];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58379:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return _},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o={title:"PHQ9",sidebar_label:"\u2728 PHQ9",id:"PHQ9-2021-05-03",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","relationship","upsert"]},s=void 0,l={unversionedId:"jobs/auto/PHQ9-2021-05-03",id:"jobs/auto/PHQ9-2021-05-03",isDocsHomePage:!1,title:"PHQ9",description:"This job was provided by an OpenFn.org user via the job library API.",source:"@site/library/jobs/auto/PHQ9-2021-05-03.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/PHQ9-2021-05-03",permalink:"/fr/library/jobs/auto/PHQ9-2021-05-03",tags:[],version:"current",frontMatter:{title:"PHQ9",sidebar_label:"\u2728 PHQ9",id:"PHQ9-2021-05-03",keywords:["library","job","expression","salesforce","alterState","dataValue","field","fields","relationship","upsert"]},sidebar:"library",previous:{title:"\ud83d\udcdc Merge data into child array then upsert",permalink:"/fr/library/jobs/auto/upsert-many-items-in-array-with-value-outside-array"},next:{title:"\ud83d\udcdc Pre-processing data",permalink:"/fr/library/jobs/auto/alter-state-before-operations"}},_=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],d={toc:_};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("em",null,"This job was provided by an OpenFn.org user via the job library API."),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: PHQ9"),(0,i.kt)("li",{parentName:"ul"},"Adaptor: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,i.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,i.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce/releases/tag/v2.0.0"},(0,i.kt)("inlineCode",{parentName:"a"},"v2.0.0"))),(0,i.kt)("li",{parentName:"ul"},"Created 4 months ago"),(0,i.kt)("li",{parentName:"ul"},"Updated 28 days ago"),(0,i.kt)("li",{parentName:"ul"},"Score: ",(0,i.kt)("b",null,"88")," (an ",(0,i.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,i.kt)("h2",{id:"key-functions"},"Key Functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"alterState"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"relationship"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"upsert")),(0,i.kt)("h2",{id:"expression"},"Expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  function capitalizeFirstLetter(str) {\n    if (!str) return;\n    let new_str = str.toString().toLowerCase();\n    return new_str.slice(0, 1).toUpperCase() + new_str.slice(1);\n  }\n\n  function transform(value) {\n    if (!value) return;\n    switch (value.toString().trim()) {\n      case 'Daughterson':\n        return 'Daughter/Son';\n      case 'Other_specify':\n        return 'Other';\n      case 'Single_never_married':\n        return 'Single/Never Married';\n      case 'Divorced__separated':\n        return 'Divorced/separated';\n      default:\n        return value;\n    }\n  }\n\n  function getAge(dateString) {\n    if (!dateString) return;\n\n    const today = new Date();\n    const birthDate = new Date(dateString);\n    var age = today.getFullYear() - birthDate.getFullYear();\n    var m = today.getMonth() - birthDate.getMonth();\n    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {\n      age--;\n    }\n    return age;\n  }\n  \n  state.data.form.begin_interview.what_is_your_marital_status = state.data.form.begin_interview && state.data.form.begin_interview.what_is_your_marital_status  ? transform(\n    capitalizeFirstLetter(state.data.form.begin_interview.what_is_your_marital_status) \n  ): undefined;\n\n  state.data.form.begin_interview.position_of_respondent_in_the_household = state.data.form.begin_interview && state.data.form.begin_interview.position_of_respondent_in_the_household ? transform(\n    capitalizeFirstLetter(state.data.form.begin_interview.position_of_respondent_in_the_household)\n  ): undefined;\n\n  state.helperFunctions = { getAge };\n  return state;\n});\n\nupsert(\n  'PHQ_9_Strong_Minds__c',\n  'CommCare_Ext_ID__c',\n  fields(\n    field('CommCare_Ext_ID__c', dataValue('id')),\n    \n    // relationship('Intervention_Name__r', 'CommCare_Case_ID__c', state => {\n    //   if (state.data.form.hidden_properties.intervention_id) return state.data.form.hidden_properties.intervention_id;\n    //   else return \"990221ac-3c05-475d-87c7-24d8a5fcb63e\";\n    // }),\n    relationship('Intervention_Name__r', 'CommCare_Case_ID__c', dataValue('form.hidden_properties.intervention_id')),\n    \n    \n    //relationship('Participant__r','CommCare_Ext_ID__c', dataValue('form.hidden_properties.participant_fullname')),\n    field('Mobile_Contact_Information__c', dataValue('form.hidden_properties.mobile_number')),\n    field('Curriculum__c', dataValue('form.hidden_properties.curriculum')),\n    //field('Intervention__c', dataValue('form.hidden_properties.intervention')),\n    field('Gender__c', dataValue('form.hidden_properties.gender')),\n    field('Participant_Name__c', state => {\n      const firstname = state.data.form.hidden_properties.participant_first_name;\n      const lastname = state.data.form.hidden_properties.participant_surname;\n      return firstname + ' ' + lastname;\n    }),\n\n    field('Coach_Name__c', dataValue('form.hidden_properties.coach_name')),\n    field('Venue__c', dataValue('form.hidden_properties.venue')),\n    field('Site__c', dataValue('form.hidden_properties.site')),\n    field('Interview_Date__c', dataValue('form.interview_date')),\n    field('Resident_not_shifting_in_3_months_time__c', dataValue('form.full_time_resident')),\n    field('Participant_DOB__c', state => {\n      const dob  = dataValue('form.hidden_properties.date_of_birth')(state); \n      return dob ? dob : null; \n    }),\n    //field('Area_Center__c', dataValue('form.hidden_properties.venue')), //Can get from Intervention\n    field('Age_of_Participant__c', state => {\n      const dob = dataValue('form.hidden_properties.date_of_birth')(state);\n\n      return dob ? state.helperFunctions.getAge(dob) : null;\n    }),\n    \n    \n    field('Marital_Status__c', dataValue('form.begin_interview.what_is_your_marital_status')),\n    field(\n      'Position_of_Respondent_in_Household__c',\n      dataValue('form.begin_interview.position_of_respondent_in_the_household')\n    ),\n    field('Q1_Little_interest_pleasure__c', dataValue('form.begin_interview.questions.little_interest')),\n    field('Q2_Sad_Down_Depressed_Hopeless__c', dataValue('form.begin_interview.questions.depressed_sad_hopeless')),\n    field('Q3_Trouble_sleeping__c', dataValue('form.begin_interview.questions.trouble_sleeping')),\n    field('Q4_Feeling_tired__c', dataValue('form.begin_interview.questions.heavy_burden')),\n    field('Q5_Appetite_problems__c', dataValue('form.begin_interview.questions.appetite_problems')),\n    field('Q6_Failure_Worthless_Guilt__c', dataValue('form.begin_interview.questions.feeling_bad')),\n    field('Q7_Trouble_concentrating__c', dataValue('form.begin_interview.questions.trouble_concentrating')),\n    field('Q8_Trouble_in_speech__c', dataValue('form.begin_interview.questions.moving_slowly')),\n    field('Q9_Suicidal_thoughts__c', dataValue('form.begin_interview.questions.thoughts_suicide'))\n    //field('PHQ9_Total_Score__c', dataValue('form.begin_interview.questions.phq9_result.PHQ9_score'))\n  )\n);\n\n")))}u.isMDXComponent=!0}}]);