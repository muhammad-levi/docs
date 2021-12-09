"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8465],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=i,h=p["".concat(l,".").concat(u)]||p[u]||c[u]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52592:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},assets:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],s={layout:"post",title:"Forms and Cases: CommCare and event-based integration",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["how-to","tips"],featured:!0},l=void 0,m={permalink:"/fr/articles/2021/05/24/commcare-events",editUrl:"https://github.com/openfn/docs/edit/main/articles/2021-05-24-commcare-events.md",source:"@site/articles/2021-05-24-commcare-events.md",title:"Forms and Cases: CommCare and event-based integration",description:"This is a quick one, but I just got off an exciting call with an organization",date:"2021-05-24T00:00:00.000Z",formattedDate:"24 mai 2021",tags:[{label:"how-to",permalink:"/fr/articles/tags/how-to"},{label:"tips",permalink:"/fr/articles/tags/tips"}],readingTime:8.955,truncated:!0,authors:[{name:"Taylor Downs",url:"https://github.com/taylordowns2000",imageURL:"https://avatars.githubusercontent.com/taylordowns2000"}],prevItem:{title:"Wrapping my head around jobs",permalink:"/fr/articles/2021/07/05/wrapping-my-head-around-jobs"},nextItem:{title:"Sync Like You Mean It: Thinking Through System \u201cSyncing\u201d Protocols",permalink:"/fr/articles/2021/02/17/syncing-options"}},d={authorsImageUrls:[void 0]},c=[{value:"Most people use &quot;Data Forwarding&quot; in CommCare",id:"most-people-use-data-forwarding-in-commcare",children:[],level:2},{value:"Working with the data that comes from CommCare",id:"working-with-the-data-that-comes-from-commcare",children:[],level:2},{value:"The instructions for our worker",id:"the-instructions-for-our-worker",children:[],level:2},{value:"Translating this into an OpenFn project",id:"translating-this-into-an-openfn-project",children:[{value:"Create a Salesforce credential",id:"create-a-salesforce-credential",children:[],level:3},{value:"Create a message-filter trigger",id:"create-a-message-filter-trigger",children:[],level:3},{value:"Create the job",id:"create-the-job",children:[],level:3}],level:2},{value:"What&#39;s next",id:"whats-next",children:[],level:2},{value:"A final thought",id:"a-final-thought",children:[],level:2}],p={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a quick one, but I just got off an exciting call with an organization\nthat's going to set up some jobs to move data into Salesforce from CommCare and\nrealized that despite this being one of our more common integration\nrequirements, we haven't done a 'tips' article for this type of project. Until\nnow."),(0,o.kt)("p",null,"So here goes. While this is by no means an exhaustive project planning template,\nhere are a few things to keep in mind if you're planning to implement a CommCare\nto Salesforce integration on your own."),(0,o.kt)("h2",{id:"most-people-use-data-forwarding-in-commcare"},'Most people use "Data Forwarding" in CommCare'),(0,o.kt)("p",null,'First, most people make use of CommCare\'s "Data Forwarding" feature to send form\nsubmissions and changes in cases (creation, update, closure, etc.) to OpenFn in\nreal-time. You can read about that\n',(0,o.kt)("a",{parentName:"p",href:"/documentation/apps/commcare#forward-cases-andor-forms-from-commcare-to-openfn"},"here"),"\nbut the key consideration at this planning stage is ",(0,o.kt)("em",{parentName:"p"},"when")," you'll be performing\noperations\u2014",(0,o.kt)("inlineCode",{parentName:"p"},"create(...)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"update(...)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert(...)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"query(...)"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"(bulk(...)"),", etc.\u2014in Salesforce and what data you'll have access to."),(0,o.kt)("p",null,"Each time a form submission comes into CommCare, we'll get a copy of that\nsubmission at OpenFn and can use that data to create or modify some records in\nSalesforce."),(0,o.kt)("p",null,'Likewise, each time a case gets updated (or created or closed) we\'ll get a copy\nof the case with all the case "properties" and we can use that data to ',(0,o.kt)("em",{parentName:"p"},"do some\nstuff")," in Salesforce."),(0,o.kt)("p",null,'If you are using "Form Forwarding", the ',(0,o.kt)("inlineCode",{parentName:"p"},"trigger")," you'd create in OpenFn might\nlook like this ",(0,o.kt)("inlineCode",{parentName:"p"},'{"form":{"@name":"ART Adherence Self-Reporting Tool"}}')," and it\nwould trigger your ",(0,o.kt)("inlineCode",{parentName:"p"},"job"),' any time an "ART Adherence Self-Reporting Tool"\nsubmission arrived from CommCare, giving that job access to all of the data\ninside that submission.'),(0,o.kt)("h2",{id:"working-with-the-data-that-comes-from-commcare"},"Working with the data that comes from CommCare"),(0,o.kt)("p",null,"Assuming you're using making use of case management, the data that arrives from\nCommCare will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "__query_params": {\n    "app_id": "some-long-id"\n  },\n  "app_id": "some-long-id",\n  "archived": false,\n  "attachments": {\n    "1621866020043.jpg": {\n      "content_type": "image/jpeg",\n      "length": 16423,\n      "url": "https://www.commcarehq.org/a/your-project/api/form/attachment/some-uuid/1621866020043.jpg"\n    },\n    "form.xml": {\n      "content_type": "text/xml",\n      "length": 2727,\n      "url": "https://www.commcarehq.org/a/your-project/api/form/attachment/some-uuid/form.xml"\n    }\n  },\n  "build_id": "0ec83881cd0e420dad5c24ed3a5452fe",\n  "domain": "your-project",\n  "edited_by_user_id": null,\n  "edited_on": null,\n  "form": {\n    "#type": "data",\n    "@name": "ART Adherence Self-Reporting Tool",\n    "@uiVersion": "1",\n    "@version": "2783",\n    "@xmlns": "http://openrosa.org/formdesigner/59E1207B-969F-402D-9EEE-675504036F78",\n    "administrative": {\n      "coach_verification": "check_here",\n      "visit_notes": "",\n      "vist_notes_to_save": ""\n    },\n    "case": {\n      "@case_id": "1ec51ee9-5aef-4bd2-b7eb-7599856251bc",\n      "@date_modified": "2021-05-24T14:20:28.693000Z",\n      "@user_id": "332e893dcd1b413686621bd80aae0cd3",\n      "@xmlns": "http://commcarehq.org/case/transaction/v2",\n      "update": {\n        "consent_received": "yes",\n        "home_visit_notes": ""\n      }\n    },\n    "meta": {\n      "@xmlns": "http://openrosa.org/jr/xforms",\n      "appVersion": "CommCare Android, version \\"2.51.2\\"(463994). App v2798. CommCare Version 2.51.2. Build 463994, built on: 2021-03-17",\n      "app_build_version": 2798,\n      "commcare_version": "2.51.2",\n      "deviceID": "commcare_a39f55a5-c744-4e33-8e01-d17e7698894f",\n      "drift": "0",\n      "geo_point": null,\n      "instanceID": "130c68c5-7d17-4086-8a85-27d7d7da2216",\n      "timeEnd": "2021-05-24T14:20:28.693000Z",\n      "timeStart": "2021-05-24T14:18:46.856000Z",\n      "userID": "332e893dcd1b413686621bd80aae0cd3",\n      "username": "some-chw"\n    },\n    "participant_information": {\n      "participant_id": "007",\n      "name": "taylor downs",\n      "gender": "male",\n      "guardian_information": {\n        "guardians_name": "Fake Data",\n        "guardians_phone_number": "8675309",\n        "guardians_signature": "1621866020043.jpg",\n        "relationship_to_participant": "father"\n      },\n      "current_medications": [\n        { "name": "generic-1", "active": true },\n        { "name": "fakelyn-notrealiol", "active": false },\n        { "name": "sasstra-zenica", "active": false },\n        { "name": "ibuprofen", "active": true }\n      ]\n    },\n    "tested_for_hiv_status_tested_for_hiv": "OK",\n    "visit_information": {\n      "consent_given": "yes",\n      "date_consent_given": "2021-05-23",\n      "visit_date": "2021-05-23"\n    }\n  },\n  "id": "130c68c5-7d17-4086-8a85-27d7d7da2216",\n  "indexed_on": "2021-05-24T14:20:39.045971",\n  "initial_processing_complete": true,\n  "is_phone_submission": true,\n  "metadata": {\n    "appVersion": "CommCare Android, version \\"2.51.2\\"(463994). App v2798. CommCare Version 2.51.2. Build 463994, built on: 2021-03-17",\n    "app_build_version": 2798,\n    "commcare_version": "2.51.2",\n    "deviceID": "commcare_a39f55a5-c744-4e33-8e01-d17e7698894f",\n    "drift": "0",\n    "geo_point": null,\n    "instanceID": "130c68c5-7d17-4086-8a85-27d7d7da2216",\n    "location": null,\n    "timeEnd": "2021-05-24T14:20:28.693000Z",\n    "timeStart": "2021-05-24T14:18:46.856000Z",\n    "userID": "332e893dcd1b413686621bd80aae0cd3",\n    "username": "some-chw"\n  },\n  "problem": null,\n  "received_on": "2021-05-24T14:20:37.976363Z",\n  "resource_uri": "",\n  "server_modified_on": "2021-05-24T14:20:38.111789Z",\n  "type": "data",\n  "uiversion": "1",\n  "version": "2783"\n}\n')),(0,o.kt)("p",null,"This is a big blob of ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),'\u2014the body of the message that\'s received at OpenFn\nwhen this particular form ("ART Adherence Self-Reporting Tool") is submitted in\nCommCare\u2014will be handed off to the job to start processing. The question is,\nwhat should we do?'),(0,o.kt)("p",null,"When setting up for a self-service implementation on OpenFn, the most important\nthing you can do at this moment is carefully enumerate the data entry process\nthat you'd like a real human to follow. You can translate it to a job script\nlater."),(0,o.kt)("p",null,"You'll need to write this up for your own case, but in this fictional example,\nhere's the data entry process."),(0,o.kt)("h2",{id:"the-instructions-for-our-worker"},"The instructions for our worker"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Right from the start, notice that we\'re being incredibly explicit with these\ninstructions! We\'re using the "API Name" (instead of just the "label", which\nmight be ambiguous) of every field we want filled out in Salesforce and we\'re\nusing the specific "path" to the data we want this person to enter from\nCommCare.'),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Why are we being so specific?")," Because eventually, a computer will need to\ninterpret this\u2014and they're ",(0,o.kt)("em",{parentName:"p"},"terrible")," with ambiguity!"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Every time a messaged is received with\n",(0,o.kt)("inlineCode",{parentName:"li"},'{"form":{"@name":"ART Adherence Self-Reporting Tool"}}')," in the body (this is\nour trigger)"),(0,o.kt)("li",{parentName:"ol"},"Log into Salesforce and create a new participant with the ",(0,o.kt)("inlineCode",{parentName:"li"},"participant_id"),"\nyou find in the ",(0,o.kt)("inlineCode",{parentName:"li"},"form.participant_information")," section as their\n",(0,o.kt)("inlineCode",{parentName:"li"},"Participant_Code__c"),". (If one already exists in Salesforce with that code,\nthen update the existing record instead.)"),(0,o.kt)("li",{parentName:"ol"},"Fill out the following fields in Salesforce based on the CommCare data in\nthis message:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Name__c")," with the data from ",(0,o.kt)("inlineCode",{parentName:"li"},"form.participant_information.name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sex__c")," with the data from ",(0,o.kt)("inlineCode",{parentName:"li"},"form.participant_information.gender")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CommCare_Case_ID__c")," with the data from ",(0,o.kt)("inlineCode",{parentName:"li"},"form.case.@case_id")))),(0,o.kt)("li",{parentName:"ol"},"After you've created (or updated) this participant in Salesforce, create a\nrecord of the visit with the ",(0,o.kt)("inlineCode",{parentName:"li"},"instanceID")," from the ",(0,o.kt)("inlineCode",{parentName:"li"},"metadata")," section as the\nunique identifier ",(0,o.kt)("inlineCode",{parentName:"li"},"Visit_Code__c"),". (Again, if there's already a visit with\nthat ID please update the existing record.)"),(0,o.kt)("li",{parentName:"ol"},'Fill out the following fields for the visit with data from CommCare"',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Date__c")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"form.visit_information.visit_date"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Consented__c")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"form.visit_information.consent_given"),"."),(0,o.kt)("li",{parentName:"ul"},"Always set ",(0,o.kt)("inlineCode",{parentName:"li"},"Test_Status__c")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", regardless of what's in the message\nfrom CommCare."),(0,o.kt)("li",{parentName:"ul"},"And relate this record with the ",(0,o.kt)("inlineCode",{parentName:"li"},"Community_Health_Worker")," by their username\nin ",(0,o.kt)("inlineCode",{parentName:"li"},"form.metadata.username"),"."))),(0,o.kt)("li",{parentName:"ol"},"Finally, add a record for each medication listed in the\n",(0,o.kt)("inlineCode",{parentName:"li"},"form.participant_information.current_medications")," array\u2014matching on a unique\nID formed by a combination of the medication ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," and the ",(0,o.kt)("inlineCode",{parentName:"li"},"participant_id"),"\nso that we can update existing medication records if they're present."),(0,o.kt)("li",{parentName:"ol"},"Fill out the following fields for the medication:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Generic_Name__c")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Status__c")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"active")),(0,o.kt)("li",{parentName:"ul"},"And relate this record with the participant you created or updated in step\n2 via the ",(0,o.kt)("inlineCode",{parentName:"li"},"participant_id")," field.")))),(0,o.kt)("p",null,"Phew... that's the task. It's just a fictional example and things could be much\nmore straightforward, or much more complicated than this, but it's important to\nremember that if you can get to this level of ",(0,o.kt)("strong",{parentName:"p"},"precision and granularity")," in\nyour data entry process, a tool like OpenFn can automate this for you in a\nflash."),(0,o.kt)("h2",{id:"translating-this-into-an-openfn-project"},"Translating this into an OpenFn project"),(0,o.kt)("p",null,'If you\'re streaming data in from CommCare and you\'ve got your Salesforce system\nall set up so that this data entry person can complete the above steps (are all\nthe objects and fields created? are the right fields marked as "unique" and set\nto be used as an "external id" in the Salesforce administration section? have\nyou turned on data forwarding in CommCare?) then it\'s time to turn them into an\nOpenFn project!'),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"A quick plug: ",(0,o.kt)("strong",{parentName:"p"},"Did you know that there's an\n",(0,o.kt)("a",{parentName:"strong",href:"https://community.openfn.org"},"OpenFn community forum")),' where you can post\nstuff like the "steps" above and get help from other OpenFn users and staff\nconverting these steps into a real, working, OpenFn job?'),(0,o.kt)("p",{parentName:"div"},"Well, you do know! Check it out at\n",(0,o.kt)("a",{parentName:"p",href:"https://community.openfn.org"},"community.openfn.org")))),(0,o.kt)("h3",{id:"create-a-salesforce-credential"},"Create a Salesforce credential"),(0,o.kt)("p",null,"We don't need a CommCare credential, since they'll send data to us. Create a\nSalesforce credential that will allow the OpenFn worker to log into your\nSalesforce system."),(0,o.kt)("p",null,"Read more about credentials ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/credentials"},"here"),"."),(0,o.kt)("h3",{id:"create-a-message-filter-trigger"},"Create a message-filter trigger"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Message Filter")," for the ",(0,o.kt)("inlineCode",{parentName:"li"},"type")),(0,o.kt)("li",{parentName:"ul"},"Enter ",(0,o.kt)("inlineCode",{parentName:"li"},'{"form":{"@name":"ART Adherence Self-Reporting Tool"}}')," for the\n",(0,o.kt)("inlineCode",{parentName:"li"},"inclusion criteria"))),(0,o.kt)("p",null,"Read more about triggers ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/triggers"},"here"),"."),(0,o.kt)("h3",{id:"create-the-job"},"Create the job"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Give it a name"),(0,o.kt)("li",{parentName:"ul"},"Select the trigger you just created"),(0,o.kt)("li",{parentName:"ul"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"salesforce")," adaptor"),(0,o.kt)("li",{parentName:"ul"},"Select the credential you just created")),(0,o.kt)("p",null,'And convert the instructions above to "operations" by using the inline help\nprovided by the Salesforce adaptor:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Use upsert to create or update a participant based on their participant code.\nupsert(\n  'Participant__c',\n  'Participant_Code__c',\n  fields(\n    field(\n      'Participant_Code__c',\n      dataValue('form.participant_information.participant_id')\n    ),\n    field('Name__c', dataValue('form.participant_information.name')),\n    field('Sex__c', dataValue('form.participant_information.gender')),\n    field('CommCare_Case_ID__c', dataValue('form.case[@case_id]'))\n  )\n);\n\n// Then upsert a visit using the visit code.\nupsert(\n  'Visit__c',\n  'Visit_Code__c',\n  fields(\n    field('Visit_Code__c', dataValue('metadata.instanceID')),\n    field('Date__c', dataValue('form.visit_information.visit_date')),\n    field('Consented__c', dataValue('form.visit_information.consent_given')),\n    // Always set status to true\n    field('Test_Status__c', true),\n    // And related this visit to the participant we just created by their \"code\"\n    relationship(\n      'Participant__r',\n      'Participant_Code__c',\n      dataValue('form.participant_information.participant_id')\n    )\n  )\n);\n\n// And finally for EACH mediation listed, create a medication record with a status\neach(\n  merge(\n    dataPath('form.participant_information.current_medications[*]'),\n    fields(\n      field('pID', dataValue('form.participant_information.participant_id'))\n    )\n  ),\n  upsert(\n    'Medication_Tx__c',\n    'Medication_Tx_ID__c',\n    fields(\n      field(Medication_Tx_ID__c, state => {\n        // Here, inside the medications array we've \"scoped\" state so that\n        // state.data, for each item in the array, looks like this:\n        // { pID: 007, name: \"sasstra-zenica\", active: false }\n\n        // We will concatenate the participant ID with the medication name.\n        return state.data.pID + state.data.name;\n      }),\n      field('Generic_Name__c', dataValue('name')),\n      field('Status__c', dataValue('status')),\n      relationship('Participant__r', 'Participant_Code__c', dataValue('pID'))\n    )\n  )\n);\n")),(0,o.kt)("p",null,"Now, every time this job runs (which is every time a CommCare form is submitted)\nyour OpenFn worker will upsert a ",(0,o.kt)("inlineCode",{parentName:"p"},"Participant"),", upsert a ",(0,o.kt)("inlineCode",{parentName:"p"},"Visit"),", and upsert a\nwhole list of ",(0,o.kt)("inlineCode",{parentName:"p"},"Medications")," in Salesforce."),(0,o.kt)("h2",{id:"whats-next"},"What's next"),(0,o.kt)("p",null,'Well, in our little example you\'d turn the job "on" (setting it to on the\ninbound messages from CommCare) and let it run. Whenever there was a failure\n(maybe your Salesforce admin added a new required field on the\ncustom',(0,o.kt)("inlineCode",{parentName:"p"},"Medication")," object) you'd get an email and you'd have to come back to\nOpenFn to update your job, including that new field."),(0,o.kt)("p",null,"If you're in the process of designing your CommCare and Salesforce systems at\nthe moment, this back-and-forth will be pretty common. Keep in mind that you\nwant as much simplicity as possible in those end-user systems because... well\nbecause ",(0,o.kt)("em",{parentName:"p"},"humans")," have the interact with them every day!"),(0,o.kt)("p",null,"So long as your processes are well defined, OpenFn can handle a bit of\ncomplexity (data cleaning, transformation, complex logical flows, etc.) but you\nshould never make sacrifices to the user experience in CommCare and\nSalesforce\u2014that's a quick way to lose adoption."),(0,o.kt)("p",null,"So, ideally, you've designed your workflows in CommCare and Salesforce to make\nyour users happy and get them the information they need to do their jobs well\nand ",(0,o.kt)("em",{parentName:"p"},"then")," you come back to OpenFn and spell out our data entry instructions\nlike we've done above."),(0,o.kt)("h2",{id:"a-final-thought"},"A final thought"),(0,o.kt)("p",null,"The two most important resources you've got at your disposal if you're setting\nthis all up on your own are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"this site (docs.openfn.org), and"),(0,o.kt)("li",{parentName:"ol"},"the ",(0,o.kt)("a",{parentName:"li",href:"https://community.openfn.org"},"forum")," (community.openfn.org)")),(0,o.kt)("p",null,"Read through the\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/getting-started/so-you-want-to-integrate"},'"What is an integration"'),",\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/getting-started/terminology"},'"OpenFn Concepts"'),", and\n",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs"},'"Build"')," sections if you're a thorough,\nbackground-first kind of learner. If you crave snippets and sample job code,\nhead directly to the ",(0,o.kt)("a",{parentName:"p",href:"/library"},"Job Library")," to see how other OpenFn users are\ncreating their jobs."),(0,o.kt)("p",null,"Either way, keep the community posted on your progress in the forum\u2014you'll find\nlots of helpful folks willing to lend you a hand in your integration journey."))}u.isMDXComponent=!0}}]);