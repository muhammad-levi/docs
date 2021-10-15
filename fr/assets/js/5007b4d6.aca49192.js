"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[218],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79367:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(83117),s=n(80102),a=(n(67294),n(3905)),o=["components"],i={title:"D\xe9pannage"},l=void 0,u={unversionedId:"trouble-shooting",id:"trouble-shooting",isDocsHomePage:!1,title:"D\xe9pannage",description:"Que se passe-t-il si les donn\xe9es de mon sondage d'ODK doivent \xeatre li\xe9es \xe0 des enregistrements existants dans mon syst\xe8me Salesforce mais qu'un r\xe9pondant entre ou s\xe9lectionne un ID externe invalide ?",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/trouble-shooting.md",sourceDirName:".",slug:"/trouble-shooting",permalink:"/fr/documentation/trouble-shooting",editUrl:"https://github.com/openfn/docs/edit/main/docs/trouble-shooting.md",tags:[],version:"current",frontMatter:{title:"D\xe9pannage"},sidebar:"docs",previous:{title:"Gestion de projet",permalink:"/fr/documentation/manage/platform-mgmt"},next:{title:"Codes de sortie et erreurs",permalink:"/fr/documentation/jobs/errors"}},c=[{value:"Messages d&#39;erreurs courants",id:"messages-derreurs-courants",children:[],level:3},{value:"Erreurs courantes et comment les g\xe9rer",id:"erreurs-courantes-et-comment-les-g\xe9rer",children:[{value:"Les relations Master-detail dans Salesforce sont-elles reparentables ?",id:"les-relations-master-detail-dans-salesforce-sont-elles-reparentables-",children:[],level:4}],level:3}],p={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Que se passe-t-il si les donn\xe9es de mon sondage d'ODK doivent \xeatre li\xe9es \xe0 des enregistrements existants dans mon syst\xe8me Salesforce mais qu'un r\xe9pondant entre ou s\xe9lectionne un ",(0,a.kt)("inlineCode",{parentName:"p"},"ID externe")," invalide ?")),(0,a.kt)("p",null,"Bonne question, et ne vous inqui\xe9tez pas, \xe7a arrive tout le temps. En supposant que vous avez d\xe9j\xe0 pris toutes les mesures possibles pour pr\xe9charger les identifiants externes sous votre forme ODK ou utiliser des identifiants plus \xe9prouv\xe9s par l'homme (comme les codes \xe0 barres et les empreintes digitales) voici le flux de travail :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Lisez l'e-mail et inspectez la raison de l'\xe9chec.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"99% des ex\xe9cutions \xe9chou\xe9es sur OpenFn sont dues \xe0 des ",(0,a.kt)("inlineCode",{parentName:"p"},"incoh\xe9rences de la valeur"),". Le ",(0,a.kt)("em",{parentName:"p"},"id")," ",(0,a.kt)("inlineCode",{parentName:"p"},"collect\xe9")," dans ODK ne correspond pas \xe0 l'",(0,a.kt)("em",{parentName:"p"},"id")," ",(0,a.kt)("inlineCode",{parentName:"p"},"attendu")," dans la force de vente. Vous devez maintenant choisir soit :"),(0,a.kt)("p",{parentName:"li"},"A. Modifier la source ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," dans votre ",(0,a.kt)("inlineCode",{parentName:"p"},"re\xe7u")," & r\xe9essayer la tentative."),(0,a.kt)("p",{parentName:"li"},"B. Modifier l' ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," associ\xe9 dans votre syst\xe8me de destination & recommencer la tentative."),(0,a.kt)("p",{parentName:"li"},"C. Ignorez la tentative : ces donn\xe9es sources n'atteindront jamais votre syst\xe8me de destination. (Il y a eu des rapports selon lesquels l'\xe9diteur JSON d'ODK Aggregate a envoy\xe9 des valeurs en double. Si cela se produit et que votre ex\xe9cution \xe9choue en raison de \xab valeurs en double \xbb sur un champ unique particulier, vous pouvez ignorer l'ex\xe9cution en toute s\xe9curit\xe9 dans OpenFn.)"))),(0,a.kt)("p",null,"La modification des donn\xe9es dans votre syst\xe8me de destination peut \xeatre effectu\xe9e via l'interface de ce syst\xe8me. De nombreux outils qui agissent en tant que ",(0,a.kt)("inlineCode",{parentName:"p"},"sources")," (comme ODK) ne permettent pas de faciliter l'\xe9dition et la r\xe9soumission de donn\xe9es. Vous pouvez utiliser OpenFn pour modifier les donn\xe9es sources avant de recommencer la tentative."),(0,a.kt)("h3",{id:"messages-derreurs-courants"},"Messages d'erreurs courants"),(0,a.kt)("p",null,"Les messages d'erreur les plus courants avec des explications en anglais sont :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"DUPLICATE_VALUE: duplicate value found: ODK_uuid__c duplicates value on record with id: a0524000005wNw0\nThe insert is blocked because you are attempting to create a new record with a\nunique field with the same value as an existing record.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Champ obligatoire non renseign\xe9\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Id externe introuvable\n")),(0,a.kt)("h3",{id:"erreurs-courantes-et-comment-les-g\xe9rer"},"Erreurs courantes et comment les g\xe9rer"),(0,a.kt)("h4",{id:"les-relations-master-detail-dans-salesforce-sont-elles-reparentables-"},"Les relations Master-detail dans Salesforce sont-elles reparentables ?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"{ INVALID_FIELD_FOR_INSERT_UPDATE: Impossible de cr\xe9er/mettre \xe0 jour les champs : Contact__c.\nVeuillez v\xe9rifier les param\xe8tres de s\xe9curit\xe9 de ce champ et v\xe9rifier qu'il est\nlu/\xe9crire pour votre profil ou votre permission d\xe9finie. }\n")),(0,a.kt)("p",null,"Cette erreur peut survenir si une relation de master-d\xe9tail dans Salesforce n'est pas d\xe9finie comme r\xe9parentable et que l'utilisateur tente d'ex\xe9cuter une mise en valeur."))}d.isMDXComponent=!0}}]);