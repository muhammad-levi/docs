"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8194],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94266:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(83117),i=n(80102),s=(n(67294),n(3905)),o=["components"],a={title:"Credentials"},l=void 0,u={unversionedId:"build/credentials",id:"build/credentials",isDocsHomePage:!1,title:"Credentials",description:"Credentials",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/build/credentials.md",sourceDirName:"build",slug:"/build/credentials",permalink:"/fr/documentation/build/credentials",editUrl:"https://github.com/openfn/docs/edit/main/docs/build/credentials.md",tags:[],version:"current",frontMatter:{title:"Credentials"},sidebar:"docs",previous:{title:"Triggers",permalink:"/fr/documentation/build/triggers"},next:{title:"Votre Inbox",permalink:"/fr/documentation/build/inbox"}},c=[{value:"Credentials",id:"credentials",children:[{value:"Credentials bruts",id:"credentials-bruts",children:[],level:3},{value:"Credentials du trousseau",id:"credentials-du-trousseau",children:[],level:3}],level:2}],d={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"credentials"},"Credentials"),(0,s.kt)("p",null,"Les Credentials sont utilis\xe9s pour autoriser les connexions aux syst\xe8mes de destination. Dans le futur, nos adaptateurs utiliseront les credentials pour r\xe9cup\xe9rer les m\xe9tadonn\xe9es des applications source et de destination, ce qui facilitera le processus de r\xe9daction des jobs."),(0,s.kt)("p",null,"Certains syst\xe8mes (Salesforce, OpenMRS, DHIS2) requi\xe8rent une instance Url, un h\xf4te ou ApiUrl. Laissez le \xab\xa0/\xa0\xbb final dans ces Url\xa0: ",(0,s.kt)("inlineCode",{parentName:"p"},"https://login.salesforce.com")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"http://demo.openmrs.org/openmrs")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"https://play.dhis2.org"),"."),(0,s.kt)("p",null,"Les Credentials ne peuvent \xeatre consult\xe9s ou modifi\xe9s que par un seul utilisateur\xa0-\xa0leur \xab\xa0propri\xe9taire\xa0\xbb (ou la personne qui a cr\xe9\xe9 ces identifiants). Tous les collaborateurs d'un projet particulier peuvent choisir ces credentials pour les utiliser lors de la d\xe9finition d'un job."),(0,s.kt)("p",null,"Il existe deux types particuliers de credentials, en plus de la myriade de credentials standard sp\xe9cifique aux applications et aux protocoles d'authentification."),(0,s.kt)("h3",{id:"credentials-bruts"},"Credentials bruts"),(0,s.kt)("p",null,"Les credentials bruts sont des documents JSON valides qui sont transmis \xe0 l'\xe9tat d'ex\xe9cution d'un job. Notez que les propri\xe9taires de ces credentials pourront les consulter, dans leur int\xe9gralit\xe9, en clair."),(0,s.kt)("h3",{id:"credentials-du-trousseau"},"Credentials du trousseau"),(0,s.kt)("p",null,"Les credentials du trousseau permettent \xe0 un seul job d'utiliser plusieurs credentials. Ils fonctionnent en inspectant les donn\xe9es de l'\xe9tat d'ex\xe9cution du job (c.-\xe0-d. ",(0,s.kt)("inlineCode",{parentName:"p"},"state.data"),") et en v\xe9rifiant la valeur d'un identifiant pr\xe9d\xe9termin\xe9. En fonction de cette valeur, pr\xe9sente dans les donn\xe9es pour un message source donn\xe9, par exemple, un ",(0,s.kt)("em",{parentName:"p"},"autre")," credential sera s\xe9lectionn\xe9 et appliqu\xe9 pour ce job particulier."))}p.isMDXComponent=!0}}]);