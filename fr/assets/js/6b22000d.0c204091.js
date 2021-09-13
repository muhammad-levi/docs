"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9145],{3905:function(e,n,_){_.d(n,{Zo:function(){return d},kt:function(){return f}});var a=_(67294);function t(e,n,_){return n in e?Object.defineProperty(e,n,{value:_,enumerable:!0,configurable:!0,writable:!0}):e[n]=_,e}function i(e,n){var _=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),_.push.apply(_,a)}return _}function r(e){for(var n=1;n<arguments.length;n++){var _=null!=arguments[n]?arguments[n]:{};n%2?i(Object(_),!0).forEach((function(n){t(e,n,_[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(_)):i(Object(_)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(_,n))}))}return e}function o(e,n){if(null==e)return{};var _,a,t=function(e,n){if(null==e)return{};var _,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)_=i[a],n.indexOf(_)>=0||(t[_]=e[_]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)_=i[a],n.indexOf(_)>=0||Object.prototype.propertyIsEnumerable.call(e,_)&&(t[_]=e[_])}return t}var l=a.createContext({}),s=function(e){var n=a.useContext(l),_=n;return e&&(_="function"==typeof e?e(n):r(r({},n),e)),_},d=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var _=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(_),f=t,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||i;return _?a.createElement(m,r(r({ref:n},d),{},{components:_})):a.createElement(m,r({ref:n},d))}));function f(e,n){var _=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=_.length,r=new Array(i);r[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,r[1]=o;for(var s=2;s<i;s++)r[s]=_[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,_)}c.displayName="MDXCreateElement"},47969:function(e,n,_){_.r(n),_.d(n,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var a=_(87462),t=_(63366),i=(_(67294),_(3905)),r={title:"Concat fields with nulls",sidebar_label:"\ud83d\udcdc Concat fields with nulls",id:"concatenate-many-fields-with-nulls",keywords:["library","job","expression","salesforce","arrayToString","create","dataValue","each","field","fields","relationship"]},o=void 0,l={unversionedId:"jobs/auto/concatenate-many-fields-with-nulls",id:"jobs/auto/concatenate-many-fields-with-nulls",isDocsHomePage:!1,title:"Concat fields with nulls",description:"\ud83d\udcdc This job is an official example from OpenFn.",source:"@site/library/jobs/auto/concatenate-many-fields-with-nulls.md",sourceDirName:"jobs/auto",slug:"/jobs/auto/concatenate-many-fields-with-nulls",permalink:"/fr/library/jobs/auto/concatenate-many-fields-with-nulls",tags:[],version:"current",frontMatter:{title:"Concat fields with nulls",sidebar_label:"\ud83d\udcdc Concat fields with nulls",id:"concatenate-many-fields-with-nulls",keywords:["library","job","expression","salesforce","arrayToString","create","dataValue","each","field","fields","relationship"]},sidebar:"library",previous:{title:"\u2728 Coach Session Register",permalink:"/fr/library/jobs/auto/Coach-Session-Register-2021-05-03"},next:{title:"\u2728 Create Distribution & Referral in SF",permalink:"/fr/library/jobs/auto/Create-Distribution-Referral-in-SF-2020-06-19"}},s=[{value:"Metadata",id:"metadata",children:[]},{value:"Key Functions",id:"key-functions",children:[]},{value:"Expression",id:"expression",children:[]}],d={toc:s};function u(e){var n=e.components,_=(0,t.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,_,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ud83d\udcdc ",(0,i.kt)("em",null,"This job is an official example from OpenFn.")),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: Concat fields with nulls"),(0,i.kt)("li",{parentName:"ul"},"Adaptor: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,i.kt)("inlineCode",{parentName:"a"},"@openfn/language-salesforce"))),(0,i.kt)("li",{parentName:"ul"},"Adaptor Version: ",(0,i.kt)("a",{parentName:"li",href:"https://www.github.com/openfn/language-salesforce"},(0,i.kt)("inlineCode",{parentName:"a"},"latest"))),(0,i.kt)("li",{parentName:"ul"},"Created date unknown"),(0,i.kt)("li",{parentName:"ul"},"Updated date unknown"),(0,i.kt)("li",{parentName:"ul"},"Score: ",(0,i.kt)("b",null,"100")," (an ",(0,i.kt)("a",{parentName:"li",href:"/library/#library-scores"},"indicator")," of how useful this job may be)")),(0,i.kt)("h2",{id:"key-functions"},"Key Functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"arrayToString"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dataValue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"each"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"field"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"relationship")),(0,i.kt)("h2",{id:"expression"},"Expression"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"each(\n  '$.data.data[*]',\n  create(\n    'Verification__c',\n    fields(\n      field('RecordTypeId', '01236000000Q6PT'),\n      relationship(\n        'Supplier__r',\n        'Unique_Entity_ID__c',\n        dataValue('Unique_Entity_ID')\n      ),\n      field('Currency_ISO_Code__c', dataValue('Currency_ISO_Code')),\n      field('Date_Conducted__c', dataValue('Date_Conducted')),\n      field('ODK_Key__c', dataValue('*meta-instance-id*')),\n      field('Unique_Entity_ID__c', dataValue('Unique_Entity_ID')),\n      field('Interviewee__c', dataValue('Interviewee')),\n      field('Interviewee_Role__c', dataValue('Interviewee_Role')),\n      field(\n        'Interviewee_Primary_Phone__c',\n        dataValue('Interviewee_Primary_Phone')\n      ),\n      field('Interviewee_Phone_2__c', dataValue('Interviewee_Phone_2')),\n      field('Interviewee_Phone_3__c', dataValue('Interviewee_Phone_3')),\n      field(\n        'Interviewee_Primary_Email__c',\n        dataValue('Interviewee_Primary_Email')\n      ),\n      field('Trade_Name__c', dataValue('Trade_Name')),\n      field('Registered_Name__c', dataValue('Registered_Name')),\n      field('Location_Description__c', dataValue('Location_Description')),\n      field('Main_Office_Country__c', dataValue('Main_Office_Country')),\n      field('Main_Office_Region_Province_or_County__c', function (state) {\n        return arrayToString(\n          [\n            dataValue('Main_Office_Region_Province_or_County_a')(state),\n            dataValue('Main_Office_Region_Province_or_County_b')(state),\n            dataValue('Main_Office_Region_Province_or_County_c')(state),\n            dataValue('Main_Office_Region_Province_or_County_d')(state),\n          ].filter(Boolean),\n          ','\n        );\n      }),\n      field('Main_Office_City__c', function (state) {\n        return arrayToString(\n          [\n            dataValue('Main_Office_City_a')(state),\n            dataValue('Main_Office_City_b')(state),\n            dataValue('Main_Office_City_c')(state),\n            dataValue('Main_Office_City_d')(state),\n          ].filter(Boolean),\n          ','\n        );\n      }),\n      field(\n        'Main_Office_Street_Address__c',\n        dataValue('Main_Office_Street_Address')\n      ),\n      field('Geolocation__Latitude__s', dataValue('gps:Latitude')),\n      field('Geolocation__Longitude__s', dataValue('gps:Longitude')),\n      field('Main_Contact_First__c', dataValue('Main_Contact_First')),\n      field('Main_Contact_Last__c', dataValue('Main_Contact_Last')),\n      field('Main_Contact_Role__c', dataValue('Main_Contact_Role')),\n      field('Main_Contact_Role_Other__c', dataValue('Main_Contact_Role_Other')),\n      field(\n        'Main_Contact_Phone_Mobile__c',\n        dataValue('Main_Contact_Phone_Mobile')\n      ),\n      field('Main_Contact_Phone_Work__c', dataValue('Main_Contact_Phone_Work')),\n      field(\n        'Main_Contact_Phone_Other__c',\n        dataValue('Main_Contact_Phone_Other')\n      ),\n      field('Main_Contact_Email_Work__c', dataValue('Main_Contact_Email_Work')),\n      field('General_Phone__c', dataValue('General_Phone')),\n      field('General_Email__c', dataValue('General_Email')),\n      field('Website__c', dataValue('Website')),\n      field('Interest_in_Website__c', dataValue('Interest_in_Website')),\n      field(\n        'Hours_of_Operation_Start__c',\n        dataValue('Hours_of_Operation_Start')\n      ),\n      field('Hours_of_Operation_End__c', dataValue('Hours_of_Operation_End')),\n      field(\n        'Hours_of_Operation_Other__c',\n        dataValue('Hours_of_Operation_Other')\n      ),\n      field(\n        'Hours_of_Operation_Other_Start__c',\n        dataValue('Hours_of_Operation_Other_Start')\n      ),\n      field(\n        'Hours_of_Operation_Other_End__c',\n        dataValue('Hours_of_Operation_Other_End')\n      ),\n      field(\n        'Goods_and_Services_Description__c',\n        dataValue('Goods_and_Services_Description')\n      ),\n      field('Primary_Sector__c', dataValue('Primary_Sector')),\n      field('Primary_Subsectors__c', function (state) {\n        return arrayToString(\n          [\n            dataValue('Primary_Subsectors_1')(state),\n            dataValue('Primary_Subsectors_2')(state),\n            dataValue('Primary_Subsectors_3')(state),\n            dataValue('Primary_Subsectors_4')(state),\n            dataValue('Primary_Subsectors_5')(state),\n            dataValue('Primary_Subsectors_6')(state),\n            dataValue('Primary_Subsectors_7')(state),\n            dataValue('Primary_Subsectors_8')(state),\n            dataValue('Primary_Subsectors_9')(state),\n            dataValue('Primary_Subsectors_10')(state),\n            dataValue('Primary_Subsectors_l1')(state),\n            dataValue('Primary_Subsectors_12')(state),\n            dataValue('Primary_Subsectors_13')(state),\n            dataValue('Primary_Subsectors_14')(state),\n            dataValue('Primary_Subsectors_15')(state),\n            dataValue('Primary_Subsectors_16')(state),\n            dataValue('Primary_Subsectors_17')(state),\n            dataValue('Primary_Subsectors_18')(state),\n            dataValue('Primary_Subsectors_19')(state),\n            dataValue('Primary_Subsectors_20')(state),\n            dataValue('Primary_Subsectors_21')(state),\n          ].filter(Boolean),\n          ','\n        );\n      }),\n      field('Other_Sectors__c', function (state) {\n        return arrayToString(dataValue('Other_Sectors')(state), ',');\n      }),\n      field('Other_Subsectors__c', function (state) {\n        return arrayToString(\n          [\n            dataValue('Other_Subsectors_1')(state),\n            dataValue('Other_Subsectors_2')(state),\n            dataValue('Other_Subsectors_3')(state),\n            dataValue('Other_Subsectors_4')(state),\n            dataValue('Other_Subsectors_5')(state),\n            dataValue('Other_Subsectors_6')(state),\n            dataValue('Other_Subsectors_7')(state),\n            dataValue('Other_Subsectors_8')(state),\n            dataValue('Other_Subsectors_9')(state),\n            dataValue('Other_Subsectors_10')(state),\n            dataValue('Other_Subsectors_l1')(state),\n            dataValue('Other_Subsectors_12')(state),\n            dataValue('Other_Subsectors_13')(state),\n            dataValue('Other_Subsectors_14')(state),\n            dataValue('Other_Subsectors_15')(state),\n            dataValue('Other_Subsectors_16')(state),\n            dataValue('Other_Subsectors_17')(state),\n            dataValue('Other_Subsectors_18')(state),\n            dataValue('Other_Subsectors_19')(state),\n            dataValue('Other_Subsectors_20')(state),\n            dataValue('Other_Subsectors_21')(state),\n          ].filter(Boolean),\n          ','\n        );\n      }),\n      field(\n        'Entity_and_Registration_1__c',\n        dataValue('Entity_and_Registration_1')\n      ),\n      field(\n        'Entity_and_Registration_2__c',\n        dataValue('Entity_and_Registration_2')\n      ),\n      field(\n        'Entity_and_Registration_3__c',\n        dataValue('Entity_and_Registration_3')\n      ),\n      field('Registration_Date__c', dataValue('Registration_Date')),\n      field('Registration_Active__c', dataValue('Registration_Active')),\n      field(\n        'Business_Operation_Licenses__c',\n        dataValue('Business_Operation_Licenses')\n      ),\n      field(\n        'Business_Operation_Certificates__c',\n        dataValue('Business_Operation_Certificates')\n      ),\n      field('Association_Memberships__c', dataValue('Association_Memberships')),\n      field('Vendor_List_Memberships__c', dataValue('Vendor_List_Memberships')),\n      field('Has_Marketing_Plan__c', dataValue('Has_Marketing_Plan')),\n      field('Number_of_Competitors__c', dataValue('Number_of_Competitors')),\n      field('Start_of_Operations__c', dataValue('Start_of_Operations')),\n      field('Primary_Language__c', dataValue('Primary_Language')),\n      field('Primary_Language_Other__c', dataValue('Primary_Language_Other')),\n      field('English_Speakers__c', dataValue('English_Speakers')),\n      field('Other_Languages__c', dataValue('Other_Languages')),\n      field(\n        'Frequency_of_Internet_Access__c',\n        dataValue('Frequency_of_Internet_Access')\n      ),\n      field(\n        'Method_of_Internet_Access__c',\n        dataValue('Method_of_Internet_Access')\n      ),\n      field(\n        'Method_of_Internet_Access_Other__c',\n        dataValue('Method_of_Internet_Access_Other')\n      ),\n      field('Frequency_of_Email_Use__c', dataValue('Frequency_of_Email_Use')),\n      field('Type_of_Email_Use__c', dataValue('Type_of_Email_Use')),\n      field('Counties_Regions_Serviced__c', function (state) {\n        return arrayToString(\n          [\n            dataValue('Counties_Regions_Serviced_a')(state),\n            dataValue('Counties_Regions_Serviced_b')(state),\n            dataValue('Counties_Regions_Serviced_c')(state),\n            dataValue('Counties_Regions_Serviced_d')(state),\n          ].filter(Boolean),\n          ','\n        );\n      }),\n      field('Additional_Branches__c', dataValue('Additional_Branches')),\n      field('Branch_Locations__c', function (state) {\n        return arrayToString(\n          [\n            dataValue('Branch_Locations_a')(state),\n            dataValue('Branch_Locations_b')(state),\n            dataValue('Branch_Locations_c')(state),\n            dataValue('Branch_Locations_d')(state),\n          ].filter(Boolean),\n          ','\n        );\n      }),\n      field(\n        'Majority_Local_or_Foreign__c',\n        dataValue('Majority_Local_or_Foreign')\n      ),\n      field('Num_of_Owners__c', dataValue('Num_of_Owners')),\n      field('Num_of_Female_Owners__c', dataValue('Num_of_Female_Owners')),\n      field('Num_of_Male_Owners__c', dataValue('Num_of_Male_Owners')),\n      field(\n        'Primary_Owner_is_Same_as_Main_Contact__c',\n        dataValue('Primary_Owner_is_Same_as_Main_Contact')\n      ),\n      field('Primary_Owner__c', dataValue('Primary_Owner')),\n      field('Primary_Owner_Gender__c', dataValue('Primary_Owner_Gender')),\n      field(\n        'Primary_Owner_Gender_Other__c',\n        dataValue('Primary_Owner_Gender_Other')\n      ),\n      field(\n        'Primary_Owner_Nationality__c',\n        dataValue('Primary_Owner_Nationality')\n      ),\n      field(\n        'Primary_Owner_Phone_Mobile__c',\n        dataValue('Primary_Owner_Phone_Mobile')\n      ),\n      field(\n        'Primary_Owner_Phone_Work__c',\n        dataValue('Primary_Owner_Phone_Work')\n      ),\n      field(\n        'Primary_Owner_Phone_Other__c',\n        dataValue('Primary_Owner_Phone_Other')\n      ),\n      field('Primary_Owner_Email__c', dataValue('Primary_Owner_Email')),\n      field('Num_of_Businesses_Owned__c', dataValue('Num_of_Businesses_Owned')),\n      field(\n        'Names_of_Businesses_Owned__c',\n        dataValue('Names_of_Businesses_Owned')\n      ),\n      field('Num_of_Managers__c', dataValue('Num_of_Managers')),\n      field('Num_of_Female_Managers__c', dataValue('Num_of_Female_Managers')),\n      field('Num_of_Male_Managers__c', dataValue('Num_of_Male_Managers')),\n      field('Finance_Management__c', dataValue('Finance_Management')),\n      field(\n        'Finance_Management_Other__c',\n        dataValue('Finance_Management_Other')\n      ),\n      field('Dedicated_HR_Manager__c', dataValue('Dedicated_HR_Manager')),\n      field(\n        'Num_of_Permanent_Full_Time_Employees__c',\n        dataValue('Num_of_Permanent_Full_Time_Employees')\n      ),\n      field(\n        'Num_of_Perm_Full_Time_Female_Employees__c',\n        dataValue('Num_of_Perm_Full_Time_Female_Employees')\n      ),\n      field(\n        'Num_of_Perm_Full_Time_Male_Employees__c',\n        dataValue('Num_of_Perm_Full_Time_Male_Employees')\n      ),\n      field(\n        'Num_of_Full_Time_Temporary_Employees__c',\n        dataValue('Num_of_Full_Time_Temporary_Employees')\n      ),\n      field(\n        'Num_of_Full_Time_Temp_Female_Employees__c',\n        dataValue('Num_of_Full_Time_Temp_Female_Employees')\n      ),\n      field(\n        'Num_of_Full_Time_Temp_Male_Employees__c',\n        dataValue('Num_of_Full_Time_Temp_Male_Employees')\n      ),\n      field(\n        'Num_of_Local_Staff_Full_Part_Time__c',\n        dataValue('Num_of_Local_Staff_Full_Part_Time')\n      ),\n      field(\n        'Num_of_Expatriate_Staff_Full_Part_Time__c',\n        dataValue('Num_of_Expatriate_Staff_Full_Part_Time')\n      ),\n      field(\n        'International_Client_in_Past_Six_Months__c',\n        dataValue('International_Client_in_Past_Six_Months')\n      ),\n      field('Principal_Client_Name__c', dataValue('Principal_Client_Name')),\n      field(\n        'Foreign_or_Domestic_Principal_Client__c',\n        dataValue('Foreign_or_Domestic_Principal_Client')\n      ),\n      field('Principal_Client_Sector__c', dataValue('Principal_Client_Sector')),\n      field(\n        'Goods_Services_Provided_to_this_Client__c',\n        dataValue('Goods_Services_Provided_to_this_Client')\n      ),\n      field(\n        'End_of_Last_Contract_with_this_Client__c',\n        dataValue('End_of_Last_Contract_with_this_Client')\n      ),\n      field(\n        'Value_Goods_Services_Sold_Last_6_Months__c',\n        dataValue('Value_Goods_Services_Sold_Last_6_Months')\n      ),\n      field(\n        'Value_Goods_Sold_Last_6_Months_USD__c',\n        dataValue('Value_Goods_Sold_Last_6_Months_USD')\n      ),\n      field(\n        'Access_to_Finance_Constraint_Ranking__c',\n        dataValue('Access_to_Finance_Constraint_Ranking')\n      ),\n      field('Bank_Account__c', dataValue('Bank_Account')),\n      field('Bank_Guarantee__c', dataValue('Bank_Guarantee')),\n      field(\n        'Satisfied_with_Current_Bank__c',\n        dataValue('Satisfied_with_Current_Bank')\n      ),\n      field(\n        'Describe_Satisfaction_with_Current_Bank__c',\n        dataValue('Describe_Satisfaction_with_Current_Bank')\n      ),\n      field(\n        'Has_Received_a_Formal_Loan__c',\n        dataValue('Has_Received_a_Formal_Loan')\n      ),\n      field('Formal_Loan_Provider__c', dataValue('Formal_Loan_Provider')),\n      field(\n        'Formal_Loan_Amount_Received__c',\n        dataValue('Formal_Loan_Amount_Received')\n      ),\n      field(\n        'Formal_Loan_Amount_Received_USD__c',\n        dataValue('Formal_Loan_Amount_Received_USD')\n      ),\n      field(\n        'Date_Formal_Loan_Received__c',\n        dataValue('Date_Formal_Loan_Received')\n      ),\n      field('Formal_Loan_Purpose__c', dataValue('Formal_Loan_Purpose')),\n      field(\n        'Formal_Loan_Purpose_Other__c',\n        dataValue('Formal_Loan_Purpose_Other')\n      ),\n      field('Formal_Loan_Repaid__c', dataValue('Formal_Loan_Repaid')),\n      field('Interested_in_Loan__c', dataValue('Interested_in_Loan')),\n      field('Interested_Loan_Amount__c', dataValue('Interested_Loan_Amount')),\n      field(\n        'Interested_Loan_Amount_USD__c',\n        dataValue('Interested_Loan_Amount_USD')\n      ),\n      field(\n        'Interested_Loan_Duration__c',\n        dataValue('Interested_Loan_Duration')\n      ),\n      field('Interested_Loan_Purpose__c', dataValue('Interested_Loan_Purpose')),\n      field(\n        'Interested_Loan_Purpose_Other__c',\n        dataValue('Interested_Loan_Purpose_Other')\n      ),\n      field(\n        'Formal_Loan_Confidence_Ranking__c',\n        dataValue('Formal_Loan_Confidence_Ranking')\n      ),\n      field(\n        'Received_Loan_from_Family_Friends__c',\n        dataValue('Received_Loan_from_Family_Friends')\n      ),\n      field(\n        'Family_Friend_Loan_Amount__c',\n        dataValue('Family_Friend_Loan_Amount')\n      ),\n      field(\n        'Family_Friend_Loan_Amount_USD__c',\n        dataValue('Family_Friend_Loan_Amount_USD')\n      ),\n      field(\n        'Received_Loan_from_Informal_Lenders__c',\n        dataValue('Received_Loan_from_Informal_Lenders')\n      ),\n      field(\n        'Informal_Lender_Loan_Amount__c',\n        dataValue('Informal_Lender_Loan_Amount')\n      ),\n      field(\n        'Informal_Lender_Loan_Amount_USD__c',\n        dataValue('Informal_Lender_Loan_Amount_USD')\n      ),\n      field(\n        'Interested_in_Investor_Business_Partner__c',\n        dataValue('Interested_in_Investor_Business_Partner')\n      ),\n      field(\n        'Total_Turnover_Previous_Month__c',\n        dataValue('Total_Turnover_Previous_Month')\n      ),\n      field(\n        'Total_Turnover_Previous_Month_USD__c',\n        dataValue('Total_Turnover_Previous_Month_USD')\n      ),\n      field(\n        'Total_Turnover_Previous_Fiscal_Year__c',\n        dataValue('Total_Turnover_Previous_Fiscal_Year')\n      ),\n      field(\n        'Total_Turnover_Previous_Fiscal_Yr_USD__c',\n        dataValue('Total_Turnover_Previous_Fiscal_Yr_USD')\n      ),\n      field(\n        'Total_Profit_Previous_Fiscal_Year__c',\n        dataValue('Total_Profit_Previous_Fiscal_Year')\n      ),\n      field(\n        'Total_Profit_Previous_Fiscal_Year_USD__c',\n        dataValue('Total_Profit_Previous_Fiscal_Year_USD')\n      ),\n      field(\n        'Accepted_Modes_of_Payment__c',\n        dataValue('Accepted_Modes_of_Payment')\n      ),\n      field(\n        'Accepted_Modes_of_Payment_Other__c',\n        dataValue('Accepted_Modes_of_Payment_Other')\n      ),\n      field(\n        'Avg_Expen_Spent_on_Imported_Goods_Year__c',\n        dataValue('Avg_Expen_Spent_on_Imported_Goods_Year')\n      ),\n      field(\n        'Avg_Expen_Spent_on_Domestic_Goods_Year__c',\n        dataValue('Avg_Expen_Spent_on_Domestic_Goods_Year')\n      ),\n      field(\n        'Avg_Expen_on_Domestic_Suppliers_Year__c',\n        dataValue('Avg_Expen_on_Domestic_Suppliers_Year')\n      ),\n      field(\n        'Avg_Expen_on_Intl_Suppliers_Year__c',\n        dataValue('Avg_Expen_on_Intl_Suppliers_Year')\n      ),\n      field(\n        'Avg_Expen_Spent_on_Salaries_Year__c',\n        dataValue('Avg_Expen_Spent_on_Salaries_Year')\n      ),\n      field(\n        'Balance_Sheet_Statement_Available__c',\n        dataValue('Balance_Sheet_Statement_Available')\n      ),\n      field('Profit_Loss_Statement__c', dataValue('Profit_Loss_Statement')),\n      field('Directly_Imports_Goods__c', dataValue('Directly_Imports_Goods')),\n      field(\n        'Avg_of_Total_Costs_from_Imports__c',\n        dataValue('Avg_of_Total_Costs_from_Imports')\n      ),\n      field('Highest_Costing_Import__c', dataValue('Highest_Costing_Import')),\n      field(\n        'Origin_Country_of_Highest_Costing_Import__c',\n        dataValue('Origin_Country_of_Highest_Costing_Import')\n      ),\n      field('Other_Import_Countries__c', dataValue('Other_Import_Countries')),\n      field('Exports_Products__c', dataValue('Exports_Products')),\n      field(\n        'Avg_of_Total_Revenue_from_Exports__c',\n        dataValue('Avg_of_Total_Revenue_from_Exports')\n      ),\n      field('Primary_Export__c', dataValue('Primary_Export')),\n      field('Destination_of_Exports__c', dataValue('Destination_of_Exports')),\n      field(\n        'Profits_Expectation_Next_Six_Months__c',\n        dataValue('Profits_Expectation_Next_Six_Months')\n      ),\n      field(\n        'Staff_Expectation_Next_Six_Months__c',\n        dataValue('Staff_Expectation_Next_Six_Months')\n      ),\n      field(\n        'Int_l_Entities_Represent_Good_Opp__c',\n        dataValue('Int_l_Entities_Represent_Good_Opp')\n      ),\n      field(\n        'Int_l_Concessionaires_Represent_Good_Opp__c',\n        dataValue('Int_l_Concessionaires_Represent_Good_Opp')\n      ),\n      field(\n        'Sectors_Representing_Best_Local_Opps__c',\n        dataValue('Sectors_Presenting_Best_Local_Opps')\n      ),\n      field(\n        'Obstacle_Working_with_Intl_Entities__c',\n        dataValue('Obstacle_Working_with_Intl_Entities')\n      ),\n      field(\n        'Biggest_Challenge_Next_6_Months__c',\n        dataValue('Biggest_Challenge_Next_6_Months')\n      ),\n      field(\n        'Second_Biggest_Challenge_Next_6_Months__c',\n        dataValue('Second_Biggest_Challenge_Next_6_Months')\n      ),\n      field(\n        'Financial_Management_Ranking__c',\n        dataValue('Financial_Management_Ranking')\n      ),\n      field(\n        'Access_to_Finance_Ranking__c',\n        dataValue('Access_to_Finance_Ranking')\n      ),\n      field('Administration_Ranking__c', dataValue('Administration_Ranking')),\n      field('Human_Resources_Ranking__c', dataValue('Human_Resources_Ranking')),\n      field(\n        'Technical_Expertise_Ranking__c',\n        dataValue('Technical_Expertise_Ranking')\n      ),\n      field(\n        'Training_Helps_Efficiency__c',\n        dataValue('Training_Helps_Efficiency')\n      ),\n      field(\n        'Capacity_Building_Activities_Offered__c',\n        dataValue('Capacity_Building_Activities_Offered')\n      ),\n      field(\n        'Capacity_Building_Offered_Other__c',\n        dataValue('Capacity_Building_Offered_Other')\n      ),\n      field(\n        'Can_Provide_Quotations_WP_on_Request__c',\n        dataValue('Can_Provide_Quotations_WP_on_Request')\n      ),\n      field('Knows_What_a_Tender_is__c', dataValue('Knows_What_a_Tender_is')),\n      field(\n        'Frequency_Checking_for_Tenders__c',\n        dataValue('Frequency_Checking_for_Tenders')\n      ),\n      field(\n        'Has_Submitted_a_Tender_Bid__c',\n        dataValue('Has_Submitted_a_Tender_Bid')\n      ),\n      field(\n        'Has_Won_Tenders_in_Past_Six_Months__c',\n        dataValue('Has_Won_Tenders_in_Past_Six_Months')\n      ),\n      field(\n        'Details_of_Recently_Won_Tenders__c',\n        dataValue('Details_of_Recently_Won_Tenders')\n      ),\n      field(\n        'Num_of_Gov_t_Bids_in_Last_Six_Months__c',\n        dataValue('Num_of_Govt_Bids_in_Last_Six_Months')\n      ),\n      field(\n        'Num_of_Private_Bids_in_Last_Six_Months__c',\n        dataValue('Num_of_Private_Bids_in_Last_Six_Months')\n      ),\n      field(\n        'Num_of_NGO_INGO_IO_Bids_Last_Six_Months__c',\n        dataValue('Num_of_NGO_INGO_IO_Bids_Last_Six_Months')\n      ),\n      field(\n        'Main_Reason_for_Lost_Bids__c',\n        dataValue('Main_Reason_for_Lost_Bids')\n      ),\n      field(\n        'Main_Reason_for_Lost_Bids_Other__c',\n        dataValue('Main_Reason_for_Lost_Bids_Other__c')\n      ),\n      field(\n        'Main_Reason_for_Not_Bidding_on_Tenders__c',\n        dataValue('Main_Reason_for_Not_Bidding_on_Tenders')\n      ),\n      field(\n        'Main_Reason_Not_Bidding_Tenders_Others__c',\n        dataValue('Main_Reason_Not_Bidding_Tenders_Others__c')\n      ),\n      field(\n        'Planning_to_Bid_on_Future_Tenders__c',\n        dataValue('Planning_to_Bid_on_Tenders_in_the_Future')\n      ),\n      field(\n        'Services_That_Would_Help_to_Win_Tenders__c',\n        dataValue('Services_That_Would_Help_to_Win_Tenders')\n      ),\n      field(\n        'Interested_in_Future_BM_Communications__c',\n        dataValue('Interested_in_Future_BM_Communications')\n      ),\n      field(\n        'Future_BM_Communications__c',\n        dataValue('Future_BM_Communications')\n      ),\n      field(\n        'Interested_in_Attending_Future_Training__c',\n        dataValue('Interested_in_Attending_Future_Training')\n      ),\n      field(\n        'Training_Most_Interested_in_Attending__c',\n        dataValue('Training_Most_Interested_in_Attending')\n      ),\n      field(\n        'Training_Most_Interested_in_Other__c',\n        dataValue('Training_Most_Interested_in_Other')\n      ),\n      field(\n        'Amount_Willing_to_Pay_for_Training__c',\n        dataValue('Amount_Willing_to_Pay_for_Training')\n      ),\n      field(\n        'Amount_Willing_to_Pay_for_Training__c',\n        dataValue('Amount_Willing_to_Pay_for_Training')\n      ),\n      field(\n        'Training_Interested_In_but_Not_Offered__c',\n        dataValue('Training_Interested_In_but_Not_Offered')\n      ),\n      field(\n        'Advice_to_Entrepreneurs_in_your_Country__c',\n        dataValue('Advice_to_Entrepreneurs_in_your_Country')\n      ),\n      field('Interviewer_Comments__c', dataValue('Interviewer_Comments'))\n    )\n  )\n);\n\n")))}u.isMDXComponent=!0}}]);