(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(257)),i={title:"Adaptors"},p={unversionedId:"build/adaptors",id:"build/adaptors",isDocsHomePage:!1,title:"Adaptors",description:"An adaptor is an open-source module that provides the necessary operations that",source:"@site/docs/build/adaptors.md",slug:"/build/adaptors",permalink:"/documentation/build/adaptors",editUrl:"https://github.com/openfn/docs/edit/main/docs/build/adaptors.md",version:"current",sidebar:"docs",previous:{title:"Generic Data Sources",permalink:"/documentation/source-apps"},next:{title:"Planning for Deployment",permalink:"/documentation/deploy/options"}},s=[{value:"Where to find them?",id:"where-to-find-them",children:[{value:"On GitHub",id:"on-github",children:[]},{value:"On openfn.org",id:"on-openfnorg",children:[]},{value:"On npm",id:"on-npm",children:[]}]},{value:"Developing an adaptor",id:"developing-an-adaptor",children:[{value:"Extending an adaptor",id:"extending-an-adaptor",children:[]},{value:"Developing a new adaptor",id:"developing-a-new-adaptor",children:[]}]},{value:"Build and tests",id:"build-and-tests",children:[{value:"Build",id:"build",children:[]},{value:"Tests",id:"tests",children:[]}]}],c={toc:s};function l(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"An adaptor is an open-source module that provides the necessary operations that\nhelp communicate with a specific external system. We often refer to them as\n",Object(o.b)("inlineCode",{parentName:"p"},"language-packages"),". In the following, we might use the two terms\ninterchangeably."),Object(o.b)("h2",{id:"where-to-find-them"},"Where to find them?"),Object(o.b)("h3",{id:"on-github"},"On GitHub"),Object(o.b)("p",null,"The developed adaptors can be found in GitHub under ",Object(o.b)("inlineCode",{parentName:"p"},"https://github.com/openfn"),",\nstarting with the prefix ",Object(o.b)("inlineCode",{parentName:"p"},"language-XXXX"),". Some examples are:\n",Object(o.b)("inlineCode",{parentName:"p"},"language-http (https://github.com/OpenFn/language-http)"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"language-postgresql (https://github.com/OpenFn/language-postgresql)"),"."),Object(o.b)("h3",{id:"on-openfnorg"},"On openfn.org"),Object(o.b)("p",null,'When creating or editing a job, you can choose the adaptor to run the job. This\nway you "import" the needed operations. Simply open the dropdown list of\nadaptors, and click on one.'),Object(o.b)("img",{src:"/img/adaptor_choice_openfn.png",width:"300"}),Object(o.b)("h3",{id:"on-npm"},"On npm"),Object(o.b)("p",null,"Some of our language-packages are also available in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/search?q=%40openfn"}),"npmjs"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Adaptors list in npm",src:n(651).default})),Object(o.b)("h2",{id:"developing-an-adaptor"},"Developing an adaptor"),Object(o.b)("p",null,"You can develop a new adaptor from scratch or extend an existing one."),Object(o.b)("h3",{id:"extending-an-adaptor"},"Extending an adaptor"),Object(o.b)("p",null,"Extending an adaptor equals adding one or multiple new operations. The new\noperations can be added inside the ",Object(o.b)("inlineCode",{parentName:"p"},"src/Adaptor.js")," file of the adaptor."),Object(o.b)("img",{src:"/img/srcfolder.png",width:"400"}),Object(o.b)("h3",{id:"developing-a-new-adaptor"},"Developing a new adaptor"),Object(o.b)("p",null,"Developing a new Adaptor a a language package can be done by cloning the\ntemplate available in this Url: ",Object(o.b)("inlineCode",{parentName:"p"},"https://github.com/OpenFn/adaptor")," via the\n",Object(o.b)("inlineCode",{parentName:"p"},"USE THIS TEMPLATE")," button over on Github."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Use this template button",src:n(652).default})),Object(o.b)("h4",{id:"default-operation"},"Default operation"),Object(o.b)("p",null,"This template contains a default ",Object(o.b)("inlineCode",{parentName:"p"},"create")," operation that can be customized\naccording to the objectives of the new language-package."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"export function create(path, params, callback) {\n  return state => {\n    // expand references for the data argument with state\n    // do the work\n    // return state\n  };\n}\n")),Object(o.b)("h2",{id:"build-and-tests"},"Build and tests"),Object(o.b)("h3",{id:"build"},"Build"),Object(o.b)("p",null,"Building an adaptor is done by running the command ",Object(o.b)("inlineCode",{parentName:"p"},"make")," from the root folder."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Build an adaptor",src:n(653).default})),Object(o.b)("h3",{id:"tests"},"Tests"),Object(o.b)("p",null,"Tests can be written with nock under the path ",Object(o.b)("inlineCode",{parentName:"p"},"test/index.js"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"describe('createPatient', () => {\n  before(() => {\n    nock('https://fakepatient.server.com')\n      .post('/api/patients')\n      .reply(200, (uri, requestBody) => {\n        return { ...requestBody, fullName: 'Mamadou', gender: 'M' };\n      });\n  });\n\n  it('makes a post request to the patient endpoint', async () => {\n    const state = {\n      configuration: {\n        baseUrl: 'https://fakepatient.server.com',\n        username: 'hello',\n        password: 'there',\n      },\n      data: {\n        fullName: 'Mamadou',\n        gender: 'M',\n      },\n    };\n\n    const finalState = await execute(\n      create('api/patients', {\n        name: dataValue('fullName')(state),\n        gender: dataValue('gender')(state),\n      })\n    )(state);\n\n    expect(finalState.data).to.eql({\n      fullName: 'Mamadou',\n      gender: 'M',\n    });\n  });\n});\n")),Object(o.b)("p",null,"Run your tests with ",Object(o.b)("inlineCode",{parentName:"p"},"npm run test"),". Tests are written to assess dummy calls on\nthe available helper functions."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"})," ~/devtools/adaptors/adaptor > npm run test\n\n> language-template@1.0.0 test /home/taylor/devtools/adaptors/adaptor\n> mocha --require @babel/register\n\n\n\n  execute\n    \u2713 executes each operation in sequence\n    \u2713 assigns references, data to the initialState\n\n  create\n    \u2713 makes a post request to the right endpoint\n    \u2713 throws an error for a 404\n    \u2713 handles and throws different kinds of errors\n\n  createPatient\n    \u2713 makes a post request to the patient endpoint\n\n\n  6 passing (16ms)\n\n ~/devtools/adaptors/adaptor >\n")),Object(o.b)("p",null,"When writing tests, bear in mind as well for scenarios that could trigger\nerrors."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"describe('create', () => {\n  before(() => {\n    nock('https://fake.server.com')\n      .post('/api/noAccess')\n      .reply(404, (uri, requestBody) => {\n        return { detail: 'Not found.' };\n      });\n\n  it('throws an error for a 404', async () => {\n    const state = {\n      configuration: {\n        baseUrl: 'https://fake.server.com',\n        username: 'hello',\n        password: 'there',\n      },\n    };\n    const error = await execute(create('api/noAccess', { name: 'taylor' }))(\n      state\n    ).catch(error => {\n      return error;\n    });\n    expect(error.message).to.eql('Request failed with status code 404');\n  });\n\n});\n")))}l.isMDXComponent=!0},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(m,p(p({ref:t},c),{},{components:n})):r.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},651:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/adaptor_npm-2141b2789fbf572fb682e67a828e768f.png"},652:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/usethistemplate-aede212d4072939e4ed47bc6b0e95e1b.png"},653:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/make-b6567513046dce427e7928d522aabcf5.png"}}]);