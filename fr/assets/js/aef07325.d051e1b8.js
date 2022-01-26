"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[5810],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,f=m["".concat(p,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13068:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Adaptateurs"},p=void 0,s={unversionedId:"build/adaptors",id:"build/adaptors",title:"Adaptateurs",description:"Un adaptateur est un module Javascript open-source qui fournit aux utilisateurs principaux d'OpenFn core un ensemble d'op\xe9rations qui aident \xe0 communiquer avec un syst\xe8me externe sp\xe9cifique. Dans le pass\xe9, nous les appelions souvent \xab\xa0paquets linguistiques\xa0\xbb. On utilise parfois les deux termes de mani\xe8re interchangeable, mais la meilleure fa\xe7on de communiquer sur les adaptateurs est la suivante\xa0:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/build/adaptors.md",sourceDirName:"build",slug:"/build/adaptors",permalink:"/fr/documentation/build/adaptors",editUrl:"https://github.com/openfn/docs/edit/main/docs/build/adaptors.md",tags:[],version:"current",frontMatter:{title:"Adaptateurs"},sidebar:"docs",previous:{title:"Devtools",permalink:"/fr/documentation/devtools/home"},next:{title:"Planification du d\xe9ploiement",permalink:"/fr/documentation/deploy/options"}},u=[{value:"O\xf9 les trouver\xa0?",id:"o\xf9-les-trouver",children:[{value:"Sur Github",id:"sur-github",children:[],level:3},{value:"Sur la plateforme",id:"sur-la-plateforme",children:[],level:3},{value:"Sur npm",id:"sur-npm",children:[{value:"Install on platform via npm",id:"install-on-platform-via-npm",children:[],level:4}],level:3}],level:2},{value:"Developing adaptors",id:"developing-adaptors",children:[{value:"Extension d&#39;un adaptateur",id:"extension-dun-adaptateur",children:[],level:3},{value:"D\xe9veloppement d&#39;un nouvel adaptateur",id:"d\xe9veloppement-dun-nouvel-adaptateur",children:[],level:3},{value:"Op\xe9ration par d\xe9faut",id:"op\xe9ration-par-d\xe9faut",children:[],level:3},{value:"Consid\xe9rations g\xe9n\xe9rales",id:"consid\xe9rations-g\xe9n\xe9rales",children:[{value:"Using <code>@openfn/language-common.http</code>",id:"using-openfnlanguage-commonhttp",children:[],level:4},{value:"Import language-common from npm",id:"import-language-common-from-npm",children:[],level:4}],level:3}],level:2},{value:"Construire et Tester",id:"construire-et-tester",children:[{value:"Construire",id:"construire",children:[],level:3},{value:"Tests",id:"tests",children:[],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Un adaptateur est un module Javascript open-source qui fournit aux utilisateurs principaux d'OpenFn core un ensemble d'op\xe9rations qui aident \xe0 communiquer avec un syst\xe8me externe sp\xe9cifique. Dans le pass\xe9, nous les appelions souvent \xab\xa0paquets linguistiques\xa0\xbb. On utilise parfois les deux termes de mani\xe8re interchangeable, mais la meilleure fa\xe7on de communiquer sur les adaptateurs est la suivante\xa0:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\xab\xa0Quel ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("strong",{parentName:"em"},"adaptateur"))," ce job utilise-t-il\xa0?\xa0\xbb (\xab\xa0Ce job utilise ",(0,o.kt)("inlineCode",{parentName:"li"},"language-dhis2"),".\xa0\xbb)"),(0,o.kt)("li",{parentName:"ul"},"\xab\xa0L'",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("strong",{parentName:"em"},"adaptateur"))," DHIS2 est appel\xe9 ",(0,o.kt)("inlineCode",{parentName:"li"},"language-dhis2"),".\xa0\xbb"),(0,o.kt)("li",{parentName:"ul"},"\"Je n'ai pas l'",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("strong",{parentName:"em"},"adaptateur "))," appropri\xe9 pour ce job, laissez-moi l'installer en ex\xe9cutant ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install @openfn/language-dhis2"),".")),(0,o.kt)("p",null,"En bref, la ",(0,o.kt)("em",{parentName:"p"},"plupart")," des ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"adptateurs"))," suivent la convention de d\xe9nomination ",(0,o.kt)("inlineCode",{parentName:"p"},"@openfn/language-xyz"),", mais pas tous\xa0!"),(0,o.kt)("h2",{id:"o\xf9-les-trouver"},"O\xf9 les trouver\xa0?"),(0,o.kt)("h3",{id:"sur-github"},"Sur Github"),(0,o.kt)("p",null,"Les adaptateurs d\xe9velopp\xe9s peuvent \xeatre trouv\xe9s dans GitHub sous ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/openfn"),", en commen\xe7ant par le pr\xe9fixe ",(0,o.kt)("inlineCode",{parentName:"p"},"language-xyz"),". Voici quelques exemples\xa0:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/language-http"},"language-http")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/language-postgresql"},"language-postgresql")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/OpenFn/language-primero"},"language-primero"))),(0,o.kt)("h3",{id:"sur-la-plateforme"},"Sur la plateforme"),(0,o.kt)("p",null,"Lors de la cr\xe9ation ou de la modification d'un job sur la plateforme, vous pouvez choisir l'adaptateur pour ex\xe9cuter le job. De cette fa\xe7on, vous \xab importez \xbb les op\xe9rations n\xe9cessaires. Ouvrez simplement la liste d\xe9roulante des adaptateurs, et cliquez sur l'un d'entre eux."),(0,o.kt)("img",{src:"/img/adaptor_choice_openfn.png",width:"300"}),(0,o.kt)("h3",{id:"sur-npm"},"Sur npm"),(0,o.kt)("p",null,"La plupart de nos adaptateurs sont \xe9galement disponibles sur ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40openfn"},"npmjs"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Liste des adaptateurs dans npm",src:n(82362).Z})),(0,o.kt)("h4",{id:"install-on-platform-via-npm"},"Install on platform via npm"),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),", you can install adaptors that are not part of the recommended adaptors picklist directly from ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40openfn"},"npm"),"."),(0,o.kt)("p",null,"To install from npm, click on the ",(0,o.kt)("em",{parentName:"p"},"cloud download icon")," next to the adaptor version picklist. In the ",(0,o.kt)("strong",{parentName:"p"},"Select Unreleased Adaptor")," dialog box, enter the ",(0,o.kt)("inlineCode",{parentName:"p"},"adaptor name"),"(e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"dhis2")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"language-dhis2"),") and the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"version number"),"(e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"v2.3.4"),"), as listed on ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=%40openfn"},"npmjs"),", for the adaptor of your choice. The platform will attempt to install the selected adaptor version it can be used to run the specified job."),(0,o.kt)("p",null,"Note that, after this custom installation of the adaptor, ",(0,o.kt)("inlineCode",{parentName:"p"},"platform")," will not add this adaptor version to the picklist of recommended adaptors in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openfn.org/documentation/jobs/job-studio"},"JobStudio"),", but you are guaranteed that the adaptor will be available to use in any of your jobs as long as you specify it via the ",(0,o.kt)("strong",{parentName:"p"},"Select Unreleased Adaptor")," dialog."),(0,o.kt)("h2",{id:"developing-adaptors"},"Developing adaptors"),(0,o.kt)("p",null,"You can develop a new adaptor from scratch or extend an existing one."),(0,o.kt)("h3",{id:"extension-dun-adaptateur"},"Extension d'un adaptateur"),(0,o.kt)("p",null,"Extending an adaptor equals adding one or multiple new operations. The new operations can be added inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/Adaptor.js")," file of the adaptor."),(0,o.kt)("img",{src:"/img/srcfolder.png",width:"400"}),(0,o.kt)("h3",{id:"d\xe9veloppement-dun-nouvel-adaptateur"},"D\xe9veloppement d'un nouvel adaptateur"),(0,o.kt)("p",null,"Developing a new adaptor can be done by cloning the template available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/adaptor"},"here")," via the ",(0,o.kt)("inlineCode",{parentName:"p"},"USE THIS TEMPLATE")," button over on Github."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Use this template button",src:n(73371).Z})),(0,o.kt)("h3",{id:"op\xe9ration-par-d\xe9faut"},"Op\xe9ration par d\xe9faut"),(0,o.kt)("p",null,"This template contains a default ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," operation that can be customized according to the objectives of the new adaptor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export function create(path, params, callback) {\n  return state => {\n    // expand references for the data argument with state\n    // do the work\n    // return state\n  };\n}\n")),(0,o.kt)("h3",{id:"consid\xe9rations-g\xe9n\xe9rales"},"Consid\xe9rations g\xe9n\xe9rales"),(0,o.kt)("h4",{id:"using-openfnlanguage-commonhttp"},"Using ",(0,o.kt)("inlineCode",{parentName:"h4"},"@openfn/language-common.http")),(0,o.kt)("p",null,"In many cases, it's useful to be able to execute regular HTTP requests inside a specialized adaptor (e.g. posting the output of a Primero case fetch to an OpenFn inbox). Considering these types of situations, ",(0,o.kt)("inlineCode",{parentName:"p"},"language-common")," implements and exports an ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," module. To use ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," in any job executed with a specific adaptor consider exporting it directly from ",(0,o.kt)("inlineCode",{parentName:"p"},"language-common"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"...\nexport {\n  alterState,\n  ...\n  http,\n  ...\n  sourceValue,\n} from '@openfn/language-common';\n")),(0,o.kt)("h4",{id:"import-language-common-from-npm"},"Import language-common from npm"),(0,o.kt)("p",null,"To leverage the last tested available version of our language-common adaptor, consider importing the one published in ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," through ",(0,o.kt)("inlineCode",{parentName:"p"},"@openfn/language-common"),"."),(0,o.kt)("p",null,"Accordingly, your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," should add a dependency to that version as this (snippet taken from ",(0,o.kt)("inlineCode",{parentName:"p"},"language-postgresql"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@openfn/language-common": "1.2.6",\n    "pg": "^8.3.2",\n    "pg-format": "^1.0.4"\n  },\n  ...rest\n}\n')),(0,o.kt)("h2",{id:"construire-et-tester"},"Construire et Tester"),(0,o.kt)("h3",{id:"construire"},"Construire"),(0,o.kt)("p",null,"Building an adaptor for release is done by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," from the root folder."),(0,o.kt)("h3",{id:"tests"},"Tests"),(0,o.kt)("p",null,"Tests can be written with nock under the path ",(0,o.kt)("inlineCode",{parentName:"p"},"test/index.js"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"describe('createPatient', () => {\n  before(() => {\n    nock('https://fakepatient.server.com')\n      .post('/api/patients')\n      .reply(200, (uri, requestBody) => {\n        return { ...requestBody, fullName: 'Mamadou', gender: 'M' };\n      });\n  });\n\n  it('makes a post request to the patient endpoint', async () => {\n    const state = {\n      configuration: {\n        baseUrl: 'https://fakepatient.server.com',\n        username: 'hello',\n        password: 'there',\n      },\n      data: {\n        fullName: 'Mamadou',\n        gender: 'M',\n      },\n    };\n\n    const finalState = await execute(\n      create('api/patients', {\n        name: dataValue('fullName')(state),\n        gender: dataValue('gender')(state),\n      })\n    )(state);\n\n    expect(finalState.data).to.eql({\n      fullName: 'Mamadou',\n      gender: 'M',\n    });\n  });\n});\n")),(0,o.kt)("p",null,"Run your tests with ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run test"),". Tests are written to assess dummy calls on the available helper functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"}," ~/devtools/adaptors/adaptor > npm run test\n\n> language-template@1.0.0 test /home/taylor/devtools/adaptors/adaptor\n> mocha --require @babel/register\n\n\n\n  execute\n    \u2713 executes each operation in sequence\n    \u2713 assigns references, data to the initialState\n\n  create\n    \u2713 makes a post request to the right endpoint\n    \u2713 throws an error for a 404\n    \u2713 handles and throws different kinds of errors\n\n  createPatient\n    \u2713 makes a post request to the patient endpoint\n\n\n  6 passing (16ms)\n\n ~/devtools/adaptors/adaptor >\n")),(0,o.kt)("p",null,"When writing tests, bear in mind as well for scenarios that could trigger errors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"describe('create', () => {\n  before(() => {\n    nock('https://fake.server.com')\n      .post('/api/noAccess')\n      .reply(404, (uri, requestBody) => {\n        return { detail: 'Not found.' };\n      });\n\n  it('throws an error for a 404', async () => {\n    const state = {\n      configuration: {\n        baseUrl: 'https://fake.server.com',\n        username: 'hello',\n        password: 'there',\n      },\n    };\n    const error = await execute(create('api/noAccess', { name: 'taylor' }))(\n      state\n    ).catch(error => {\n      return error;\n    });\n    expect(error.message).to.eql('Request failed with status code 404');\n  });\n\n});\n")))}m.isMDXComponent=!0},82362:function(e,t,n){t.Z=n.p+"assets/images/adaptor_npm-2141b2789fbf572fb682e67a828e768f.png"},73371:function(e,t,n){t.Z=n.p+"assets/images/usethistemplate-aede212d4072939e4ed47bc6b0e95e1b.png"}}]);