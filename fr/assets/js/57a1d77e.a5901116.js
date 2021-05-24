(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[1467],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?o.createElement(f,u(u({ref:n},l),{},{components:t})):o.createElement(f,u({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,u=new Array(i);u[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,u[1]=a;for(var c=2;c<i;c++)u[c]=t[c];return o.createElement.apply(null,u)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95877:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},metadata:function(){return a},toc:function(){return s},default:function(){return l}});var o=t(22122),r=t(19756),i=(t(67294),t(3905)),u={title:"Nous \u2764\ufe0f la documentation.",sidebar_label:"Introduction",slug:"/"},a={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Nous \u2764\ufe0f la documentation.",description:"Documentation d'OpenFn",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/fr/documentation/",editUrl:"https://github.com/openfn/docs/edit/main/docs/intro.md",version:"current",sidebar_label:"Introduction",frontMatter:{title:"Nous \u2764\ufe0f la documentation.",sidebar_label:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Overview",permalink:"/fr/documentation/getting-started/overview"}},s=[{value:"Documentation d&#39;OpenFn",id:"documentation-dopenfn",children:[]},{value:"La communaut\xe9 OpenFn sur le discours",id:"la-communaut\xe9-openfn-sur-le-discours",children:[]}],c={toc:s};function l(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"documentation-dopenfn"},"Documentation d'OpenFn"),(0,i.kt)("p",null,"Cette documentation concerne la suite d'outils d'int\xe9gration, d'interop\xe9rabilit\xe9 et d'automatisation de donn\xe9es OpenFn. Notez que certaines documentation technique et le code source des outils d'int\xe9gration et les adaptateurs FOSS d'OpenFn peuvent \xe9galement \xeatre trouv\xe9s dans leurs d\xe9p\xf4ts respectifs \xe0 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openfn"},"Github. om/OpenFn")," ou voir la section ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openfn.org/documentation/deploy/options"},"D\xe9ployer")," pour un aper\xe7u des options FOSS et des docs suppl\xe9mentaires."),(0,i.kt)("p",null,"Consultez les sections \xe0 gauche. Ils vous montreront comment \xeatre op\xe9rationnel, ainsi que comment concevoir, cr\xe9er, d\xe9ployer et g\xe9rer des projets d'int\xe9gration de donn\xe9es et d'interop\xe9rabilit\xe9 sur les applications OpenFn."),(0,i.kt)("p",null,"S'il vous pla\xeet n'h\xe9sitez pas \xe0 signaler les ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openfn/docs/issues"},"probl\xe8mes")," avec cette documentation ou, si vous ne trouvez pas le bon d\xe9p\xf4t, ou avez des probl\xe8mes avec le outils eux-m\xeames. (Plus il y a de feed-back, mieux c'est !). Si vous voulez proposer une nouvelle langue pour la documentation, vous pouvez effectuer ces modifications en cliquant sur le lien ",(0,i.kt)("strong",{parentName:"p"},"\xab Modifier cette page \xbb")," en bas de n'importe quelle page et en soumettant une demande !"),(0,i.kt)("p",null,"Si vous avez des questions, n'h\xe9sitez pas \xe0 envoyer un e-mail \xe0 ",(0,i.kt)("a",{parentName:"p",href:"mailto:admin@openfn.org"},"admin@openfn.org"),"."),(0,i.kt)("h2",{id:"la-communaut\xe9-openfn-sur-le-discours"},"La communaut\xe9 OpenFn sur le discours"),(0,i.kt)("p",null,"Enfin, veuillez consulter notre forum de discours sur ",(0,i.kt)("a",{parentName:"p",href:"https://community.openfn.org"},"community.openfn.org"),". Inscrivez-vous et rejoignez la conversation. Habituellement, c'est le moyen le plus rapide d'obtenir de l'aide si vous avez des questions qui n'ont pas de r\xe9ponse ici."))}l.isMDXComponent=!0}}]);