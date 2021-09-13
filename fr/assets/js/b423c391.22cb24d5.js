"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[7693],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81368:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i={title:"Qu'est-ce qu'une op\xe9ration ?"},u=void 0,s={unversionedId:"jobs/operations",id:"jobs/operations",isDocsHomePage:!1,title:"Qu'est-ce qu'une op\xe9ration ?",description:"Une op\xe9ration est une fonction qui retourne une autre fonction qui prend un state et retourne un Promise ou state.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/jobs/operations.md",sourceDirName:"jobs",slug:"/jobs/operations",permalink:"/fr/documentation/jobs/operations",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/operations.md",tags:[],version:"current",frontMatter:{title:"Qu'est-ce qu'une op\xe9ration ?"},sidebar:"docs",previous:{title:"Un examen plus approfondi des jobs",permalink:"/fr/documentation/jobs/understanding"},next:{title:"Utilisation d'op\xe9rations plusieurs",permalink:"/fr/documentation/jobs/multiple-operations"}},c=[],p={toc:c};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Une op\xe9ration est une fonction qui retourne une autre fonction qui prend un ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," et retourne un ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," ou ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"."),(0,a.kt)("p",null,"Le but d'une op\xe9ration est d'agir comme une unit\xe9 de comportement non r\xe9solue."),(0,a.kt)("p",null,"Par exemple, lors de la cr\xe9ation d'une expression - le code lui-m\xeame ne sait pas ce que sera le state (l'\xe9tat), seulement ce qu'",(0,a.kt)("em",{parentName:"p"},"il fera"),"."),(0,a.kt)("p",null,"Les packs de langue suivent tous cette convention o\xf9 les fonctions qui sont fournies renvoient toutes des op\xe9rations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"create('My_Custom_Object__c', {\n  Custom_Field__c: dataValue('foo'),\n});\n")),(0,a.kt)("p",null,"Dans l'extrait ci-dessus, la fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," ne sait rien sur les credentials, ou toute donn\xe9e dynamique qui pourrait \xeatre disponible au moment de l'ex\xe9cution."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"function create(objectName, data) {\n  return function (state) {\n    // expand the data argument using state\n    // actually do the work\n  };\n}\n")),(0,a.kt)("p",null,"Dans cet extrait, vous trouverez un exemple simple de ce \xe0 quoi ressemblent la plupart des fonctions dans OpenFn. La fonction ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," renvoie une fonction qui prend state, c'est une ",(0,a.kt)("inlineCode",{parentName:"p"},"Operation"),". Le runtime utilisant ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," appellera toutes les op\xe9rations avec ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"."))}l.isMDXComponent=!0}}]);