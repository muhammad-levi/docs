"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7842],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95446:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return f}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],p={title:"Plateforme"},l=void 0,s={unversionedId:"deploy/platform",id:"deploy/platform",isDocsHomePage:!1,title:"Plateforme",description:"Introduction",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/deploy/platform.md",sourceDirName:"deploy",slug:"/deploy/platform",permalink:"/fr/documentation/deploy/platform",editUrl:"https://github.com/openfn/docs/edit/main/docs/deploy/platform.md",tags:[],version:"current",frontMatter:{title:"Plateforme"},sidebar:"docs",previous:{title:"Portabilit\xe9",permalink:"/fr/documentation/portability"},next:{title:"Microservice",permalink:"/fr/documentation/microservice/home"}},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Consid\xe9rations pour les d\xe9ploiements de plateformes",id:"consid\xe9rations-pour-les-d\xe9ploiements-de-plateformes",children:[{value:"Conformit\xe9",id:"conformit\xe9",children:[],level:3},{value:"Confiance",id:"confiance",children:[],level:3}],level:2}],u={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"La plateforme d'int\xe9gration OpenFn fournit une infrastructure flexible, \xe9volutive et s\xe9curis\xe9e pour connecter vos syst\xe8mes existants, rationaliser le partage des donn\xe9es et automatiser les flux de travail."),(0,i.kt)("p",null,"Les informations sur les prix standards peuvent \xeatre trouv\xe9es ici\xa0: ",(0,i.kt)("a",{parentName:"p",href:"https://openfn.org/pricing"},"https://openfn.org/pricing"),", mais n'h\xe9sitez pas \xe0 contacter un sp\xe9cialiste de la mise en \u0153uvre d'OpenFn \xe0 l'adresse ",(0,i.kt)("a",{parentName:"p",href:"mailto:enterpise@openfn.org"},"enterpise@openfn.org")," pour les options SaaS d'entreprise qui correspondent \xe0 votre mod\xe8le et vos besoins."),(0,i.kt)("p",null,":::astuce"),(0,i.kt)("p",null,"Si vous construisez sur ",(0,i.kt)("strong",{parentName:"p"},"OpenFn/platform"),", vous pouvez simplement augmenter ou r\xe9duire la taille de votre projet \xe0 tout moment \xe0 partir de la page project settings."),(0,i.kt)("p",null,":::"),(0,i.kt)("h2",{id:"consid\xe9rations-pour-les-d\xe9ploiements-de-plateformes"},"Consid\xe9rations pour les d\xe9ploiements de plateformes"),(0,i.kt)("h3",{id:"conformit\xe9"},"Conformit\xe9"),(0,i.kt)("p",null,"Consultez ",(0,i.kt)("a",{parentName:"p",href:"https://www.openfn.org/compliance"},"https://www.openfn.org/compliance")," pour un aper\xe7u de la fa\xe7on de consid\xe9rer OpenFn et le RGPD."),(0,i.kt)("h3",{id:"confiance"},"Confiance"),(0,i.kt)("p",null,"Apprenez-en plus sur S3, comment OpenFn g\xe8re la s\xe9curit\xe9, la stabilit\xe9 et l'\xe9volutivit\xe9 sur ",(0,i.kt)("a",{parentName:"p",href:"https://www.openfn.org/trust"},"https://www.openfn.org/trust")))}f.isMDXComponent=!0}}]);