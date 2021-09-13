"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[4255],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=s,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55962:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return u},assets:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),s=n(63366),i=(n(67294),n(3905)),a={layout:"post",title:"Instances d'entit\xe9s suivies dans DHIS2",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["comment faire","conseils"],featured:"vrai"},o=void 0,u={permalink:"/fr/articles/2020/12/09/upsert-in-dhis2",editUrl:"https://github.com/openfn/docs/edit/main/articles/2020-12-09-upsert-in-dhis2.md",source:"@site/i18n/fr/docusaurus-plugin-content-blog-articles/2020-12-09-upsert-in-dhis2.md",title:"Instances d'entit\xe9s suivies dans DHIS2",description:"tl;dr il est compos\xe9 d'API existantes et d'un peu de logique \ud83e\udd14. Maintenant vous pouvez mettre \xe0 jour des instances d'entit\xe9s suivies vers DHIS2 \ud83d\udc4d \u2705.",date:"2020-12-09T00:00:00.000Z",formattedDate:"9 d\xe9cembre 2020",tags:[{label:"comment faire",permalink:"/fr/articles/tags/comment-faire"},{label:"conseils",permalink:"/fr/articles/tags/conseils"}],readingTime:1.98,truncated:!0,authors:[{name:"Taylor Downs",url:"https://github.com/taylordowns2000",imageURL:"https://avatars.githubusercontent.com/taylordowns2000"}],prevItem:{title:"Nos serveurs ou les v\xf4tres : Penser \xe0 travers les options de d\xe9ploiement",permalink:"/fr/articles/2021/02/03/hosted-or-local-deployment"},nextItem:{title:"Actualit\xe9s du produit : Contr\xf4le am\xe9lior\xe9 des jobs planifi\xe9s/p\xe9riodiques",permalink:"/fr/articles/2020/07/14/cron-is-better-than-a-timer"}},l={authorsImageUrls:[void 0]},p=[{value:"Un peu plus...",id:"un-peu-plus",children:[]},{value:"Et bien plus encore !",id:"et-bien-plus-encore-",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,s.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"tl;dr: Beaucoup de nos utilisateurs veulent mettre \xe0 jour les instances d'entit\xe9s suivies dans dhis2, mais les upserts ne sont pas pris en charge par un point de terminaison standard de l'API DHIS2. Nous en avons construit un dans notre adaptateur dhis2 : il est compos\xe9 d'API existantes et d'un peu de logique \ud83e\udd14. Maintenant vous pouvez ",(0,i.kt)("inlineCode",{parentName:"p"},"mettre \xe0 jour")," des instances d'entit\xe9s suivies vers DHIS2 \ud83d\udc4d \u2705."),(0,i.kt)("h2",{id:"un-peu-plus"},"Un peu plus..."),(0,i.kt)("p",null,"Un \xab UPSERT \xbb est un mot-valise des fonctions de base de donn\xe9es MISE \xc0 JOUR et INS\xc9RER. Il est essentiel de manipuler correctement les upserts lors de l'int\xe9gration des syst\xe8mes. Depuis la version 35 de l'API, DHIS2 ne permet pas \xe0 un administrateur de mettre \xe0 jour des instances d'entit\xe9s suivies (\xab TEI \xbb). ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chaiwa-berian"},"Chaiwa Berian")," d'OpenFn a trouv\xe9 une solution qui met en \xe9vidence l'utilit\xe9 des fonctions d'aide dans notre adaptateur dhis2. En combinant diff\xe9rentes API DHIS2 via une fonction upsertTEI en OpenFn, les utilisateurs de DHIS2 peuvent maintenant effectuer des upserts \xe0 des TEI."),(0,i.kt)("p",null,"Si vous \xeates curieux, consultez son impl\xe9mentation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-dhis2/blob/master/src/Adaptor.js#L347"},"ici"),"."),(0,i.kt)("h2",{id:"et-bien-plus-encore-"},"Et bien plus encore !"),(0,i.kt)("p",null,"Une instance d'entit\xe9 suivie dans DHIS2 est un type d'entit\xe9 qui peut \xeatre suivi \xe0 travers le syst\xe8me. Il peut s'agir d'une personne \xe0 un produit comme un m\xe9dicament. Si je suis un administrateur de base de donn\xe9es qui g\xe8re deux syst\xe8mes diff\xe9rents connect\xe9s l'un \xe0 l'autre, appelons-les \xab Syst\xe8me A \xbb et \xab Syst\xe8me B \xbb, j'aimerais que toutes les mises \xe0 jour apport\xe9es \xe0 la TEI d'un utilisateur nomm\xe9 \xab Jim Smith \xbb dans le Syst\xe8me A apparaissent \xe9galement dans l'enregistrement de Jim dans le Syst\xe8me B. Avant l'apparition des upserts, il \xe9tait difficile de le faire en raison de la possibilit\xe9 de cr\xe9er des enregistrements en double. Comme un upsert fait en simultan\xe9ment les MISES \xc0 JOUR et les INSERTIONS, cela \xe9vite les doublons."),(0,i.kt)("p",null,"Les upserts sont importants et utiles car ils r\xe9duisent le risque de dupliquer la saisie de donn\xe9es et permettent \xe9galement que les transactions soient r\xe9essay\xe9es \xe0 plusieurs reprises pour garantir l'int\xe9grit\xe9 des donn\xe9es. Cette derni\xe8re partie est appel\xe9e \xab idempotency \xbb et vous pouvez en lire plus \xe0 ce sujet ",(0,i.kt)("a",{parentName:"p",href:"https://blog.openfn.org/allow-yourself-to-fail/"},"ici"),"."),(0,i.kt)("p",null,"N\u2019h\xe9sitez pas \xe0 contacter l\u2019un des sp\xe9cialistes en impl\xe9mentation d\u2019OpenFn si vous souhaitez en savoir plus."),(0,i.kt)("p",null,"\u2014 Taylor"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://openfn.org/signup"},"Inscrivez-vous"),"{: .btn} pour mettre en place un projet aujourd'hui, absolument gratuit."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"mailto:admin@openfn.org"},"Contactez-nous"),"{: .btn} pour plus d'informations."))}d.isMDXComponent=!0}}]);