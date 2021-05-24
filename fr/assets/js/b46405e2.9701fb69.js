(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4098],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,d=u["".concat(s,".").concat(c)]||u[c]||h[c]||o;return n?a.createElement(d,i(i({ref:t},l),{},{components:n})):a.createElement(d,i({ref:t},l))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17561:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"OpenHIE instantan\xe9"},p={unversionedId:"instant-openhie",id:"instant-openhie",isDocsHomePage:!1,title:"OpenHIE instantan\xe9",description:"Aper\xe7u",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/instant-openhie.md",sourceDirName:".",slug:"/instant-openhie",permalink:"/fr/documentation/instant-openhie",editUrl:"https://github.com/openfn/docs/edit/main/docs/instant-openhie.md",version:"current",frontMatter:{title:"OpenHIE instantan\xe9"},sidebar:"docs",previous:{title:"Microservice",permalink:"/fr/documentation/microservice/home"},next:{title:"Do-it-yourself Deployments",permalink:"/fr/documentation/deploy/diy"}},s=[{value:"Aper\xe7u",id:"aper\xe7u",children:[]},{value:"Cas d&#39;utilisation pour l&#39;impl\xe9mentation du prototype",id:"cas-dutilisation-pour-limpl\xe9mentation-du-prototype",children:[{value:"R\xe9cits utilisateur",id:"r\xe9cits-utilisateur",children:[]}]},{value:"Conception de la mise en \u0153uvre",id:"conception-de-la-mise-en-\u0153uvre",children:[]},{value:"Explorer l\u2019impl\xe9mentation",id:"explorer-limpl\xe9mentation",children:[]},{value:"About the Implementation Setup",id:"about-the-implementation-setup",children:[{value:"Processes",id:"processes",children:[]},{value:"Project Configuration Steps",id:"project-configuration-steps",children:[]}]},{value:"Job writing notes",id:"job-writing-notes",children:[]},{value:"System Deployment Steps",id:"system-deployment-steps",children:[]}],m={toc:s};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"aper\xe7u"},"Aper\xe7u"),(0,o.kt)("p",null,"En partenariat avec ",(0,o.kt)("a",{parentName:"p",href:"https://digitalsquare.org/"},"Digital Square")," et ",(0,o.kt)("em",{parentName:"p"},"FCDO COVIDaction"),", ",(0,o.kt)("strong",{parentName:"p"},"OpenFn a investi dans sa bo\xeete \xe0 outils d'int\xe9gration open source")," pour fournir des solutions d'int\xe9gration robustes qui peuvent connecter ",(0,o.kt)("em",{parentName:"p"},"n'importe quel syst\xe8me de sant\xe9 num\xe9rique")," et \xeatre rapidement impl\xe9ment\xe9es sur n'importe quel serveur, dans n'importe quel pays, par n'importe quelle organisation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/documentation/microservice/home/"},"OpenFn/microservice"))," est une composante enti\xe8rement compatible avec ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," qui peut \xeatre utilis\xe9e pour piloter le flux de travail, se conformer aux normes et int\xe9grer les composants de la pile ",(0,o.kt)("a",{parentName:"p",href:"https://openhim.readthedocs.io/en/latest/implementations/openhie.html"},"OpenHIE"),"."),(0,o.kt)("p",null,"Nous cherchons \xe0 am\xe9liorer la valeur du projet ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," en d\xe9veloppant un paquet qui inclura ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," comme voie d'int\xe9gration pour se connecter \xe0 l'architecture ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE"),"."),(0,o.kt)("p",null,"Ce paquet vise \xe0 am\xe9liorer la valeur de ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," en fournissant une autre option pour un traitement d'informations robuste, l'int\xe9gration et l'automatisation des processus m\xe9tier (flux de travail). Lors du d\xe9ploiement de ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE"),", les impl\xe9mentateurs ont maintenant l'option d'inclure ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," en tant que composant."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," peut \xe9galement \xeatre utilis\xe9 comme moteur de flux de travail pour automatiser une logique de travail complexe \xe0 c\xf4t\xe9 de ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," et de la ",(0,o.kt)("a",{parentName:"p",href:"https://openhim.readthedocs.io/en/latest/implementations/openhie.html"},"pile OpenHIE"),". Les ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2ches ")," individuelles dans ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn"),", parfois nombreuses dans un seul d\xe9ploiement de microservice, peut \xeatre utilis\xe9 comme ",(0,o.kt)("em",{parentName:"p"},"\xab m\xe9diateurs \xbb")," (",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"voir la biblioth\xe8que OpenHIE de m\xe9diateurs existants"),") pour transformer rapidement et cartographier les donn\xe9es \xe0 l'architecture ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE"),"."),(0,o.kt)("p",null,"Pour d\xe9montrer un cas d'utilisation r\xe9el de la fa\xe7on dont ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," pourrait \xeatre impl\xe9ment\xe9 dans l'architecture ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE"),", nous avons rencontr\xe9 plusieurs membres de la communaut\xe9 pour identifier des cas d'utilisation cl\xe9s pour une impl\xe9mentation de prototype de r\xe9f\xe9rence."),(0,o.kt)("p",null,"Visitez le ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo"},"d\xe9p\xf4t de d\xe9mo ici"),"."),(0,o.kt)("h2",{id:"cas-dutilisation-pour-limpl\xe9mentation-du-prototype"},"Cas d'utilisation pour l'impl\xe9mentation du prototype"),(0,o.kt)("p",null,"Nous avons vu que le cas d\u2019utilisation de l\u2019int\xe9gration le plus courant est que les prestataires de services de sant\xe9, en particulier les grands agents de sant\xe9 communautaires (\xab ASC \xbb), doivent int\xe9grer leurs donn\xe9es et leur programmation dans des architectures nationales de cybersant\xe9."),(0,o.kt)("h3",{id:"r\xe9cits-utilisateur"},"R\xe9cits utilisateur"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"En tant que responsable de la mise en \u0153uvre de la sant\xe9 communautaire, je souhaite int\xe9grer mon application de gestion de cas CommCare utilis\xe9e par les ASC au registre national des patients, afin de pouvoir d\xe9velopper un dossier de sant\xe9 partag\xe9 et automatiser les pipelines de rapports.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("em",{parentName:"li"},"En tant que prestataire de services de sant\xe9, je souhaite int\xe9grer mon application existante au SIH national, mais je veux appliquer la norme FHIR \xe0 mes donn\xe9es collect\xe9es avant le partage pour adh\xe9rer aux exigences de conformit\xe9 et de rapport.")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nous avons donc d\xe9cid\xe9 de cr\xe9er une solution d'int\xe9gration qui d\xe9montre comment les applications ",(0,o.kt)("strong",{parentName:"li"},"ASC")," existantes peuvent \xeatre int\xe9gr\xe9es \xe0 l'infrastructure nationale de sant\xe9 et tirer parti d'un travail simple sur ",(0,o.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn")," en tant que m\xe9diateur ",(0,o.kt)("a",{parentName:"li",href:"http://openhim.org/mediator-library/"})," pour appliquer la norme de donn\xe9es FHIR ",(0,o.kt)("a",{parentName:"li",href:"https://fhir.org/"})," et d'autres manipulations de donn\xe9es n\xe9cessaires pour s'int\xe9grer \xe0 ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),".")),(0,o.kt)("h2",{id:"conception-de-la-mise-en-\u0153uvre"},"Conception de la mise en \u0153uvre"),(0,o.kt)("p",null,"En r\xe9sum\xe9, le prototype envoie les donn\xe9es d'enregistrement des cas de patients depuis les applications mobiles de collecte de donn\xe9es (",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"KoboToolbox"),") \xe0 ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice"),". ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," transforme ensuite les donn\xe9es et s'assure qu'elles adh\xe8rent aux normes de donn\xe9es ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"patient")," et ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"r\xe9pondent ")," aux normes de donn\xe9es, vant de l'envoyer vers un ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR canal")," dans ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),". ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," est utilis\xe9 ici comme un ","_","\xab canal \xbb","_"," pour l'architecture ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/pages/viewpage.action?pageId=8454157"},"OpenHIE")," afin de valider les demandes et les transmettre \xe0 d'autres syst\xe8mes dans l'architecture ",(0,o.kt)("strong",{parentName:"p"},"nationale de cybersant\xe9"),". Dans ce cas, nous transf\xe9rons les donn\xe9es du cas vers pour que le patient soit enregistrer dans un serveur ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),"."),(0,o.kt)("p",null,"Cette conception d'impl\xe9mentation a \xe9t\xe9 jug\xe9e la plus \xe9lev\xe9e / la plus demand\xe9e car elle exploite les fonctionnalit\xe9s de base d'",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," (fournissant un proxy invers\xe9 et g\xe9n\xe9rant une piste d'audit) sans obliger les int\xe9grateurs \xe0 cr\xe9er un nouveau ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"m\xe9diateur, un")," processus plus complexe que de configurer une ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2che")," dans un ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"projet OpenFn"),"."),(0,o.kt)("p",null,"Ce prototype inclut les composants suivants :"),(0,o.kt)("p",null,"Une instance ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," peut \xeatre cr\xe9\xe9e, contenant ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),", ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),", et un seul ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"d\xe9ploiement OpenFn/microservice")," (un fichier ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"projet.aml"),", export\xe9 \xe0 partir de ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn/platform"),") avec 2 taches diff\xe9rentes ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"}),". Lorsque les donn\xe9es sont transf\xe9r\xe9es \xe0 ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," \xe0 partir de deux soumissions de formulaire distinctes sur ",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," et ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo"),", elles sont trait\xe9es et cr\xe9ent des ressources ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," des patient via ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," et ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),". Nous avons opt\xe9 pour un seul \xab projet \xbb ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," avec deux ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"t\xe2ches")," et ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/triggers/"},"d\xe9clencheurs")," l\xe9g\xe8rement diff\xe9rents pour mettre en \xe9vidence la polyvalence des ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"projects OpenFn"),"."),(0,o.kt)("h2",{id:"explorer-limpl\xe9mentation"},"Explorer l\u2019impl\xe9mentation"),(0,o.kt)("p",null,"Actuellement, il y a deux fa\xe7ons diff\xe9rentes d'explorer cette d\xe9mo. La premi\xe8re (la m\xe9thode ",(0,o.kt)("em",{parentName:"p"},"\xab Instant \xbb")," ) la plus traditionnelle consiste \xe0 ",(0,o.kt)("strong",{parentName:"p"},"cloner le d\xe9p\xf4t OpenFn/Instant-demo"),". Une fois \xe0 l'int\xe9rieur, les utilisateurs tapent sur ",(0,o.kt)("em",{parentName:"p"},"\xab configuration du fil \xbb")," pour tout mettre en marche. Running ",(0,o.kt)("em",{parentName:"p"},"\u201cyarn test\u201d")," will then demonstrate the ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo"),"/",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," to ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," to ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," to ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," flows."),(0,o.kt)("p",null,"They can explore the various ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"jobs"),", sample payloads, endpoints, and post data to the various endpoints using either the data forwarding settings in ",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo")," or via ",(0,o.kt)("a",{parentName:"p",href:"https://curl.se/"},"CURL")," (or their HTTP request agent of choice.)"),(0,o.kt)("p",null,"Once running, users can see how standard ",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo")," submissions are transformed by the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservice")," to adhere to the ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR")," specifications for ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"patients")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"encounters"),", and then that those subsequent resources are created on the ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR")," server, via a channel on the ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),"."),(0,o.kt)("p",null,"The second (slightly less conventional way) to explore the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo"},"demo"),", is via ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org"),". Since ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"OpenFn projects")," can be run in ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"microservice")," or on the ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"hosted platform"),", we\u2019ve provided a project instance at ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org")," that allows users to explore the configuration required to incorporate ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," in an ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," project. There are three ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/projects/p5pqx3/jobs"},"jobs")," which can be accessed with a ",(0,o.kt)("strong",{parentName:"p"},"demo user")," with ",(0,o.kt)("em",{parentName:"p"},"username: ",(0,o.kt)("a",{parentName:"em",href:"mailto:demo@openfn.org"},"demo@openfn.org"))," and ",(0,o.kt)("em",{parentName:"p"},"password:guest123"),"."),(0,o.kt)("p",null,"The three jobs will show:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How a ",(0,o.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare")," submission is transformed and sent to ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),";"),(0,o.kt)("li",{parentName:"ul"},"How a ",(0,o.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"Kobo")," submission is transformed and sent to ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),";"),(0,o.kt)("li",{parentName:"ul"},"And what the final resources that would be sent to ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR")," look like.")),(0,o.kt)("p",null,"It\u2019s our hope that this will provide a valuable entry-point for ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," configuration with ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn/microservices"),"."),(0,o.kt)("h2",{id:"about-the-implementation-setup"},"About the Implementation Setup"),(0,o.kt)("h3",{id:"processes"},"Processes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We met with ",(0,o.kt)("a",{parentName:"p",href:"https://ohie.org/tag/community/"},"OpenHIE community members")," to understand use cases, and with ",(0,o.kt)("a",{parentName:"p",href:"https://www.jembi.org/"},"Jembi Health Systems")," to learn about ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.ohie.org/display/resources/Instant+OpenHIE"},"Instant OpenHIE")," packages, specifications, and compliance requirements.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Identified sample data sources (real ",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.kobotoolbox.org/"},"Kobo")," case registration forms - see here) that we could use to send data to the ",(0,o.kt)("strong",{parentName:"p"},"national eHealth architecture"),". Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/fixtures/commcare_sample.json"},"sample submission payload from CommCare")," Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/fixtures/koboCaseRegistration.json"},"sample submission payload from Kobo"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reviewed ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR-HL7")," documentation to determine data standard requirements for patient data and encounter data. See ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"FHIR patient spec")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"FHIR encounter spec"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Evaluated ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," vs. ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," capabilities to determine how to use. Determined that using an ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM channel")," will leverage the core audit trail functionality from ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM"),", but not require us to build a ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/mediator-library/"},"new mediator"),"."))),(0,o.kt)("h3",{id:"project-configuration-steps"},"Project Configuration Steps"),(0,o.kt)("p",null,"There are two ways to set up a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," to run as a ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"microservice"),". The first is to use the ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org platform"),", and the second way is to use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),"."),(0,o.kt)("p",null,"These two methods are detailed below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Configure a project using the OpenFn.org platform")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This option allows organisations to leverage ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org"),"\u2019s built-in features for easy ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"project")," setup, ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"job writing")," and source code management.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," file generated from this project setup will then be used as the base structure for the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The steps to setup the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice")," project using the ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn.org platform")," are as below:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"A. Add ",(0,o.kt)("a",{parentName:"strong",href:"/documentation/build/credentials/"},"credentials")," to the project which will be used to connect the OpenFn Microservice to OpenHIM.")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is also an opportunity to add ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/credentials/"},"credentials")," which ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice")," may use to connect to source systems (such as ",(0,o.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare")," or ",(0,o.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"KoBotoolbox"),") .")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"B. Add ",(0,o.kt)("a",{parentName:"strong",href:"/documentation/build/triggers/"},"triggers")," to the project which will be used by the ",(0,o.kt)("a",{parentName:"strong",href:"/documentation/microservice/home/"},"OpenFn Microservice")," to match payloads from source systems to ",(0,o.kt)("a",{parentName:"strong",href:"/documentation/build/jobs/"},"OpenFn Microservice Jobs"),".")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Note that the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"Microservice")," is configured to run a ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"job")," based on the shape of the incoming payload.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For example, a ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/triggers/"},"trigger")," may be configured to match payloads, from ",(0,o.kt)("a",{parentName:"p",href:"https://www.commcarehq.org/"},"CommCare"),", which contain the ",(0,o.kt)("inlineCode",{parentName:"p"},'{"@name": "Register New Patient"}')," message in their message body.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A given ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"job")," will then match against this message, and will be invoked by the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice")," to (a) create a payload in the ",(0,o.kt)("a",{parentName:"p",href:"https://fhir.org/"},"FHIR standard")," containing an ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/encounter-example.json.html"},"Encounter Resource")," and (b) send the ",(0,o.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-example.json.html"},"FHIR Standard")," Payload to ",(0,o.kt)("a",{parentName:"p",href:"http://openhim.org/"},"OpenHIM")," with instructions to load it to ",(0,o.kt)("a",{parentName:"p",href:"https://hapifhir.io/"},"HAPI FHIR"),"."))),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"C. Export the ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," file using the Export Wizard of the ",(0,o.kt)("a",{parentName:"strong",href:"https://openfn.org/"},"OpenFn.org"))),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"generated YAML")," file will then be used by the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice")," to execute the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/"},"jobs")," for the matching payloads."))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Configure a project using the ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"))),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This option allows organisations to configure the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"project")," and host ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"job expression")," source files, for ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"OpenFn Microservice projects"),", without using the ",(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn platform"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"With this option, it is recommended that organisations use source versioning tools and platforms such as ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"github")," to manage the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/example-build/"},"project")," and ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"job expression")," source code/files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To configure the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice project")," using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),", create a local folder or github repository to host your project configuration files. Inside this folder, one would then perform the following actions:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a credential.json file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add credentials as shown in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml#L165-L167"},"sample credential here"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/#a-basic-expression"},"job expressions"),". In this case, one would create the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"CommCare-to-OpenHIM")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"Kobo-to-OpenHIM")," expressions as shown in the demo expressions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/instant-demo/tree/main/expressions"},"here"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"OpenFn CLI")," to configure the rest of the project. The ",(0,o.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"CLI")," will assemble the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml")," file from the different artifacts as provided. See detailed steps in the documentation site ",(0,o.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The last step of the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/devtools/home/#configure-an-openfn-project"},"CLI")," prompts will allow one to export the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"Project YAML file"),", which will then be used by the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/microservice/home/"},"OpenFn Microservice")," to execute the ",(0,o.kt)("a",{parentName:"p",href:"/documentation/build/jobs/"},"jobs")," for matching payloads."))))))),(0,o.kt)("h2",{id:"job-writing-notes"},"Job writing notes"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://openfn.org/"},"OpenFn")," provides two ways of writing jobs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Using the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/jobs/job-studio/"},"OpenFn.org\u2019s Job Studio")," as detailed in the documentation site ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/"},"here"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"With this option, if editing an existing ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"Job Expression"),", one would be expected to use ",(0,o.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn.org Project Export service")," to re-generate the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"Project YAML")," file for the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),"."))),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/devtools"},"OpenFn/devtools"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This option also allows organisations to write ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"job expressions")," without using the ",(0,o.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn\u2019s hosted service"),". See detailed documentation ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/devtools"},"here")),(0,o.kt)("li",{parentName:"ul"},"With this option, if editing an existing ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/jobs/#a-basic-expression"},"Job Expression"),", one would be expected to run the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/devtools/home/#configure-an-openfn-project"},"OpenFn CLI"),", to re-generate the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"Project YAML file")," for the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),".")))),(0,o.kt)("h2",{id:"system-deployment-steps"},"System Deployment Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openfn.org/"},"OpenFn")," provides an automated deployment script that allows system admins to setup and run the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"OpenFn Microservice"),"."),(0,o.kt)("li",{parentName:"ul"},"For example, to run the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"Instant-demo Microservice"),", the following steps are recommended:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Clone the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"OpenFn/instant-demo repo")),(0,o.kt)("li",{parentName:"ul"},"Overwrite the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml"},"sample \u201cproject.yaml\u201d")," file with your newly generated ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"project.yaml file"),", or use the existing ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"YAML file")," to deploy the demo project. Run the setup command as described in the documentation ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo"},"here")),(0,o.kt)("li",{parentName:"ul"},"Verify the system is working by ",(0,o.kt)("a",{parentName:"li",href:"https://curl.se/"},"curling")," data (or submitting forms on ",(0,o.kt)("a",{parentName:"li",href:"https://www.commcarehq.org/"},"CommCare"),"/",(0,o.kt)("a",{parentName:"li",href:"https://www.kobotoolbox.org/"},"Kobo"),") matching their ",(0,o.kt)("a",{parentName:"li",href:"/documentation/build/triggers/"},"triggers")," to the ",(0,o.kt)("a",{parentName:"li",href:"/documentation/microservice/home/"},"microservice")," endpoint ",(0,o.kt)("inlineCode",{parentName:"li"},"(localhost:4001/inbox)")," and checking to see that resources are created in ",(0,o.kt)("a",{parentName:"li",href:"https://hapifhir.io/"},"HAPI FHIR"),"."),(0,o.kt)("li",{parentName:"ul"},"Note how the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/test.js"},"test.js file")," handles this verification with the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/instant-demo/blob/main/openfn/docker/config/project.yaml"},"sample project.yaml"))))))}l.isMDXComponent=!0}}]);