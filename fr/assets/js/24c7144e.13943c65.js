(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[3917],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45795:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r,i=n(22122),o=n(19756),a=(n(67294),n(3905)),l={title:"Portabilit\xe9"},s={unversionedId:"portability",id:"portability",isDocsHomePage:!1,title:"Portabilit\xe9",description:"Intentions",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/portability.md",sourceDirName:".",slug:"/portability",permalink:"/fr/documentation/portability",editUrl:"https://github.com/openfn/docs/edit/main/docs/portability.md",version:"current",frontMatter:{title:"Portabilit\xe9"},sidebar:"docs",previous:{title:"Planification du d\xe9ploiement",permalink:"/fr/documentation/deploy/options"},next:{title:"Platform",permalink:"/fr/documentation/deploy/platform"}},c=[{value:"Intentions",id:"intentions",children:[]},{value:"Proposition v2 <code>@dernier</code>",id:"proposition-v2-dernier",children:[]},{value:"Autres versions",id:"autres-versions",children:[]}],u=(r="ReactPlayer",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)}),p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intentions"},"Intentions"),(0,a.kt)("p",null,"Au-del\xe0 de faciliter la portabilit\xe9 / transf\xe9rabilit\xe9 entre la plateforme d'",(0,a.kt)("a",{parentName:"p",href:"deploy/platform"},"OpenFn")," et les voies de d\xe9ploiement ",(0,a.kt)("a",{parentName:"p",href:"/documentation/microservice/home"},"microservice"),", la proposition de portabilit\xe9 (n\xe9cessite un meilleur nom... et...) cherche \xe0 \xe9tablir un moyen simple et applicable \xe0 l'\xe9chelle mondiale pour ",(0,a.kt)("strong",{parentName:"p"},"sp\xe9cifier l'automatisation du flux de travail")," qui pourrait \xeatre appliqu\xe9e \xe0 travers les moteurs de flux de travail / plates-formes d'int\xe9gration \xe0 travers le secteur. Rien dans la sp\xe9cification ",(0,a.kt)("em",{parentName:"p"},"ne doit")," \xeatre sp\xe9cifique \xe0 OpenFn ou \xe0 l'un de nos produits individuels. Nous envisageons un avenir dans lequel les logiciels bas\xe9s sur le ",(0,a.kt)("a",{parentName:"p",href:"deploy/diy"},"noyau"),", le ",(0,a.kt)("a",{parentName:"p",href:"deploy/diy"},"moteur"),", et les outils d\u2019int\xe9gration/de flux de travail enti\xe8rement nouveaux et diff\xe9rents peuvent adopter cette sp\xe9cification."),(0,a.kt)("p",null,"Il se r\xe9sume \xe0 trois ensembles cl\xe9s d'artefacts : ",(0,a.kt)("inlineCode",{parentName:"p"},"les taches"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"les d\xe9clencheurs "),", et les ",(0,a.kt)("inlineCode",{parentName:"p"},"identifiants"),". Respectivement, ils d\xe9terminent (1) quelles actions doivent \xeatre effectu\xe9es, (2) quand elles doivent \xeatre effectu\xe9es, et (3) quelle authentification, le cas \xe9ch\xe9ant, ils auront besoin pour les effectuer."),(0,a.kt)("p",null,"Si vous souhaitez contribuer \xe0 la sp\xe9cification, contactez OpenFn via le ",(0,a.kt)("a",{parentName:"p",href:"https://community.openfn.org"},"forum de la communaut\xe9"),", \xe9crivez-nous ou sugg\xe9rez des modifications en soumettant une demande ici."),(0,a.kt)("p",null,"importer ReactPlayer depuis 'react-player' ;"),(0,a.kt)(u,{url:"https://www.youtube.com/watch?v=9xXK5xoiMgA",mdxType:"ReactPlayer"}),(0,a.kt)("h2",{id:"proposition-v2-dernier"},"Proposition v2 ",(0,a.kt)("inlineCode",{parentName:"h2"},"@dernier")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"t\xe2ches :\n  t\xe2che-1 :\n    expression: >\n      registerPatient({\n        patient-id: state.data.id,\n        dob: state.data.birth\n      })\n    adaptateur :  '@openfn/language-openmrs'\n    d\xe9clencheur : d\xe9clencheur-1\n    identifiant: mon-secret-identifiant\n  t\xe2che-r\xe9currente :\n    expression : >\n      alterState(state => {\n        console. og( \xab Salut ! \xbb)\n        \xe9tat de retour ;\n      })\n    adaptateur : '@openfn/language-common'\n    declencheur : chaque-minute\n flux-t\xe2che : \n    expression : >\n      alterState(state => {\n        state. data.number = state.data. num\xe9ro * 3\n        \xe9tat de retour ;\n      })\n    adaptateur : '@openfn/language-common'\n    identifiant : apr\xe8s-j1\n  attrape-t\xe2che :\n    expression : >\n      alterState(state => {\n        state. message = \xab l'a trait\xe9. \xbb\n        \xe9tat de retour ;\n      })\n    adaptateur : '@openfn/language-common'\n    declencheur: j1-\xe9chec\n\ndeclencheurs :\n  declencheur-1 :\n    crit\xe8res: '{\"number\":2}'\n  chaque-minute: \n    cron: '* * * * * *\n  apr\xe8s-j1 :\n    Succ\xe8s : t\xe2che-1\n  j1-echec:\n    echec: t\xe2che-1\n\n# Notez que les cl\xe9s d'identification sont copi\xe9es, mais les valeurs doivent \xeatre saisies manuellement\n# une fois l'exportation termin\xe9e.\nidentifiants:\n  my-secret-credential:\n    nom d'utilisateur : '******'\n    mot de passe : '******'\n")),(0,a.kt)("h2",{id:"autres-versions"},"Autres versions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"portability-versions#proposal-v3"},"Proposition de portabilit\xe9 v3")," ",(0,a.kt)("inlineCode",{parentName:"li"},"@next")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"portability-versions#proposal-v1"},"Proposition de portabilit\xe9 v1"))))}d.isMDXComponent=!0}}]);