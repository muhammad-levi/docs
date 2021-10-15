"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[9558],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9917:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),s=["components"],u={layout:"post",title:"Vous autoriser \xe0 \xe9chouer",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars.githubusercontent.com/taylordowns2000",tags:["comment faire","conseils"],featured:"faux"},i=void 0,l={permalink:"/fr/articles/2020/07/02/allow-yourself-to-fail",editUrl:"https://github.com/openfn/docs/edit/main/articles/2020-07-02-allow-yourself-to-fail.md",source:"@site/i18n/fr/docusaurus-plugin-content-blog-articles/2020-07-02-allow-yourself-to-fail.md",title:"Vous autoriser \xe0 \xe9chouer",description:"Bonjour \xe0 tous, c'est un message tr\xe8s court avec un message simple : conception pour l'\xe9chec. M\xeame si vous n'avez jamais entendu parler de MSSQL (ou Azure, ou Microsoft ? , je veux parler pendant un instant de l'importance des upserts et d'un dr\xf4le terme de d\xe9veloppeur appel\xe9 \xab idempotence \xbb.",date:"2020-07-02T00:00:00.000Z",formattedDate:"2 juillet 2020",tags:[{label:"comment faire",permalink:"/fr/articles/tags/comment-faire"},{label:"conseils",permalink:"/fr/articles/tags/conseils"}],readingTime:1.925,truncated:!0,authors:[{name:"Taylor Downs",url:"https://github.com/taylordowns2000",imageURL:"https://avatars.githubusercontent.com/taylordowns2000"}],prevItem:{title:"Actualit\xe9s du produit : Contr\xf4le am\xe9lior\xe9 des jobs planifi\xe9s/p\xe9riodiques",permalink:"/fr/articles/2020/07/14/cron-is-better-than-a-timer"},nextItem:{title:"Automatiser ou ne pas automatiser ? Posez-vous ces 3 Questions.",permalink:"/fr/articles/2020/06/24/three-questions-to-ask"}},p={authorsImageUrls:[void 0]},c=[],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bonjour \xe0 tous, c'est un message tr\xe8s court avec un message simple : conception pour l'\xe9chec. M\xeame si vous n'avez jamais entendu parler de ",(0,a.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/sql-server"},"MSSQL")," (ou ",(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/"},"Azure"),", ou Microsoft ? , je veux parler pendant un instant de l'importance des upserts et d'un dr\xf4le terme de d\xe9veloppeur appel\xe9 \xab idempotence \xbb."),(0,a.kt)("p",null,"Nous venons d'\xe9largir notre ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/language-mssql"},"adaptateur langue-mssql")," avec une fonction personnalis\xe9e qui permet les upserts (un",(0,a.kt)("inlineCode",{parentName:"p"},"upsert")," consiste \xe0 ins\xe9rer un nouvel enregistrement ou mettre \xe0 jour un enregistrement existant en fonction d'un identifiant). Auparavant, vous deviez \xe9crire quelque chose de fastidieux comme :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sql({\n  demande: `MERGE my_table AS [Target]\n          UTILISANT (SELECT '8675309' AS some_unique_id, 'writing_blog_posts' AS skill) COMME [Source]\n          SUR [Target].some_unique_id = [Source].some_unique_id\n          SI VRAI\n            MISE \xc0 JOUR [Target].some_unique_id=8675309, [Target].skill='writing_blog_posts'\n          SI FAUX\n            AJOUT (some_unique_id, skill) VALEURS ([Source].some_unique_id, [Source].skill);`,\n});\n")),(0,a.kt)("p",null,"alors que maintenant, vous pouvez simplement \xe9crire :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"upsert('my_table', 'some_unique_id', {\n  some_unique_id: 8675309,\n  skill: '\xe9crire des articles de blogs',\n});\n")),(0,a.kt)("p",null,"Pour qu'une op\xe9ration soit id\xe9mpotente, cela signifie qu'elle peut \xeatre r\xe9p\xe9t\xe9e encore et encore sans produire un r\xe9sultat involontaire. Ceci est SUPER important pour cr\xe9er des int\xe9grations (",(0,a.kt)("strong",{parentName:"p"},"S"),"\xe9curis\xe9, ",(0,a.kt)("strong",{parentName:"p"},"S"),"table et ",(0,a.kt)("strong",{parentName:"p"},"S"),"calque \u2014 plus sur ceci ",(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/trust"},"ici"),") S3 car ceci vous offre deux cartes \xab sortir de prison \xbb."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Si une application de destination \xe9choue, si une connexion expire, ou si (pour une raison quelconque) vous n'\xeates pas s\xfbr que le ",(0,a.kt)("inlineCode",{parentName:"p"},"job")," a \xe9t\xe9 termin\xe9 (par exemple... effectuer un paiement \xe0 CHW) alors une op\xe9ration id\xe9mpotente peut \xeatre ESSAY\xc9E DE NOUVEAU sans craindre de faire un double paiement.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Si vous apportez des changements \xe0 la fa\xe7on dont votre ",(0,a.kt)("inlineCode",{parentName:"p"},"job")," fonctionne, apportez quelques modifications \xe0 l'un de vos syst\xe8mes de destination, ou simplement parce que vous voulez \xeatre ",(0,a.kt)("em",{parentName:"p"},"extr\xeamement s\xfbr")," que toutes les donn\xe9es d'un sondage de 9 mois ont \xe9t\xe9 int\xe9gr\xe9es dans le syst\xe8me national de rapport sanitaire, vous pouvez ",(0,a.kt)("em",{parentName:"p"},"REFAIRE LE PROCESSUS")," de chaque message qui arrive via OpenFn en un clic, sans avoir \xe0 se soucier de doublons."))),(0,a.kt)("p",null,"Alors, quand les clients me laissent m'occuper de leurs jobs, je ",(0,a.kt)("em",{parentName:"p"},"recommande")," toujours de concevoir en fonction de l'idempotence. C'est logique lorsque vous passez des messages entre deux syst\xe8mes diff\xe9rents qui sont vou\xe9s \xe0 \xe9voluer, se d\xe9connecter, passer une mauvaise journ\xe9e, etc"),(0,a.kt)("p",null,"\u2014 Taylor"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://openfn.org/signup"},"Inscrivez-vous"),"{: .btn} pour mettre en place un projet aujourd'hui, absolument gratuit."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"mailto:admin@openfn.org"},"Contactez-nous"),"{: .btn} pour plus d'informations."))}d.isMDXComponent=!0}}]);