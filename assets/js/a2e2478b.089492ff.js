"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[176],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,h=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(h,a(a({ref:n},s),{},{components:t})):r.createElement(h,a({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79809:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(83117),i=t(80102),o=(t(67294),t(3905)),a=["components"],l={title:"Microservice"},p=void 0,c={unversionedId:"microservice/home",id:"microservice/home",title:"Microservice",description:"Intent",source:"@site/docs/microservice/home.md",sourceDirName:"microservice",slug:"/microservice/home",permalink:"/documentation/microservice/home",editUrl:"https://github.com/openfn/docs/edit/main/docs/microservice/home.md",tags:[],version:"current",frontMatter:{title:"Microservice"},sidebar:"docs",previous:{title:"Platform",permalink:"/documentation/deploy/platform"},next:{title:"Instant OpenHIE",permalink:"/documentation/instant-openhie"}},s=[{value:"Intent",id:"intent",children:[],level:2},{value:"Introduction",id:"introduction",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Docker up and running",id:"docker-up-and-running",children:[],level:2},{value:"Development up and running guide",id:"development-up-and-running-guide",children:[{value:"Up and running inside Docker",id:"up-and-running-inside-docker",children:[],level:3}],level:2},{value:"Project configuration",id:"project-configuration",children:[{value:"First setup using the sample config",id:"first-setup-using-the-sample-config",children:[],level:3},{value:"Setup from your existing OpenFn platform project",id:"setup-from-your-existing-openfn-platform-project",children:[],level:3}],level:2}],u={toc:s};function m(e){var n=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"intent"},"Intent"),(0,o.kt)("p",null,"OpenFn is used by numerous health and humanitarian organizations around the\nworld to scale their programs through real-time interoperability, systems\nintegration, and workflow automation. ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/microservice")," makes use of\nOpenFn's open-core technology\u2014namely ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/core"),", ",(0,o.kt)("strong",{parentName:"p"},"OpenFn/engine"),", and the\nvarious OpenFn ",(0,o.kt)("strong",{parentName:"p"},"adaptors"),"\u2014to create standalone microservices which can be\ndeployed on any hardware."),(0,o.kt)("p",null,"This microservice approach helps to ensure that governments and NGOs are never\nlocked-in to OpenFn's SaaS offering, and can port their existing jobs, triggers,\nand credentials from ",(0,o.kt)("a",{parentName:"p",href:"https://www.openfn.org"},"OpenFn.org")," to their own infrastructure\neasily."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"platform"),", OpenFn/microservice runs on ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," files. This\nmeans that when organizations or governments have an open-source license\nrequirement, all their jobs, credentials, and project configurations can be\nexported from OpenFn's iPaaS and used to create a microservice deployment."),(0,o.kt)("p",null,"While this approach doesn't provide the OpenFn platform front-end with its\nvarious project management and configuration features, it's perfect for groups\nwith DevOps experience and 100% compatible with the platform. You can even build\nand test entire projects on ",(0,o.kt)("inlineCode",{parentName:"p"},"platform")," and then export the ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," file\nto run on your own servers using ",(0,o.kt)("inlineCode",{parentName:"p"},"microservice"),"."),(0,o.kt)("p",null,"This microservice approach provides flexibility to governments and NGOs, so they\nare never locked-in to OpenFn's SaaS platform offering. At any time, an\norganization can port their existing jobs, triggers, and credentials from\nOpenFn.org to run with our FOSS integration toolkit, using their own\ninfrastructure."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Familiarity with other elements of OpenFn's open source integration toolkit is\nhelpful when considering the microservice approach."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.openfn.org/"},"OpenFn/docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openfn/engine"},"OpenFn/engine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/openFn/core"},"OpenFn/core")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openfn.github.io/devtools/"},"OpenFn/devtools"))),(0,o.kt)("h2",{id:"docker-up-and-running"},"Docker up and running"),(0,o.kt)("p",null,"Assuming you've got an ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," and a sample project at ",(0,o.kt)("inlineCode",{parentName:"p"},"./sample-project"),"\ndirectory with a ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," spec:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker-compose up\n")),(0,o.kt)("p",null,"You can configure either the compose file or the .env, or run the container\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -v <path-to-your-project-folder>:/home/microservice/<path-to-your-project-folder> \\\n  --env-file <path-to-your-env-file> \\\n  --network host \\\n  openfn/microservice:v0.3.2\n")),(0,o.kt)("h2",{id:"development-up-and-running-guide"},"Development up and running guide"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clone this repo with ",(0,o.kt)("inlineCode",{parentName:"li"},"git clone git@github.com:OpenFn/microservice.git")),(0,o.kt)("li",{parentName:"ul"},"Enter the directory with ",(0,o.kt)("inlineCode",{parentName:"li"},"cd microservice")),(0,o.kt)("li",{parentName:"ul"},"Install dependencies with ",(0,o.kt)("inlineCode",{parentName:"li"},"mix setup")),(0,o.kt)("li",{parentName:"ul"},"Run the tests with ",(0,o.kt)("inlineCode",{parentName:"li"},"mix test")),(0,o.kt)("li",{parentName:"ul"},"Make a project directory to hold your project artifacts with\n",(0,o.kt)("inlineCode",{parentName:"li"},"mkdir sample-project")),(0,o.kt)("li",{parentName:"ul"},"Create a new project specification with\n",(0,o.kt)("inlineCode",{parentName:"li"},"cp project.yaml.example ./sample-project/project.yaml")),(0,o.kt)("li",{parentName:"ul"},"Create a ",(0,o.kt)("inlineCode",{parentName:"li"},".env")," file with ",(0,o.kt)("inlineCode",{parentName:"li"},"cp .env.example .env")),(0,o.kt)("li",{parentName:"ul"},"Install necessary adaptors via\n",(0,o.kt)("inlineCode",{parentName:"li"},"npm install @openfn/language-http --prefix priv/openfn/runtime/node_modules --no-save --no-package-lock --global-style")),(0,o.kt)("li",{parentName:"ul"},"Start your microservice server with\n",(0,o.kt)("inlineCode",{parentName:"li"},'env $(cat .env | grep -v "#" | xargs ) iex -S mix phx.server'))),(0,o.kt)("h3",{id:"up-and-running-inside-docker"},"Up and running inside Docker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build a docker image with ",(0,o.kt)("inlineCode",{parentName:"li"},"docker build -t openfn/microservice:v0.3.0 .")),(0,o.kt)("li",{parentName:"ul"},"Run with the ",(0,o.kt)("a",{parentName:"li",href:"#Docker-run"},"docker run command"))),(0,o.kt)("h2",{id:"project-configuration"},"Project configuration"),(0,o.kt)("p",null,"You can configure the jobs, triggers, credentials and language packs used in\nyour microservice in the ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," config file."),(0,o.kt)("h3",{id:"first-setup-using-the-sample-config"},"First setup using the sample config"),(0,o.kt)("p",null,"The\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenFn/microservice/blob/main/project.yaml.example"},"sample project configuration file"),"\ndescribes an example project setup to help you get acquainted with this\nstructure."),(0,o.kt)("p",null,"By default microservice is configured with 4 sample jobs:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"job-1")," is triggered when a matching message arrives to the inbox (see\n",(0,o.kt)("inlineCode",{parentName:"li"},"trigger-1"),")."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"recurring-job")," is a timed job scheduled to run every minute and is linked to\nthe ",(0,o.kt)("inlineCode",{parentName:"li"},"every-minute")," cron trigger."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"flow-job")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"catch-job")," run after the ",(0,o.kt)("inlineCode",{parentName:"li"},"success")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"failure")," of job-1,\nrespectively.")),(0,o.kt)("p",null,"All of the jobs are configured with the language pack ",(0,o.kt)("inlineCode",{parentName:"p"},"openfn/language-common"),"."),(0,o.kt)("p",null,"In the default sample configuration a new message posted to\n",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:4000/inbox")," that matches ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger-1")," (i.e. the message contains\n",(0,o.kt)("inlineCode",{parentName:"p"},'"number":2'),") is greeted with an asynchronous acknowledgement receipt\n(",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP 202")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Data accepted and processing has begun"),") and will trigger ",(0,o.kt)("inlineCode",{parentName:"p"},"job-1"),"\nto run."),(0,o.kt)("p",null,"You can try this out with the following snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" \\\n -d \'{\n  "number":2,\n  "surveyId": 37479\n}\' \\\n http://localhost:4000/inbox\n')),(0,o.kt)("p",null,"Posting a message not matching any of the triggers (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"\u201cnumber\u201d:3"),") equally\nprompts an acknowledgement but doesn\u2019t trigger any jobs."),(0,o.kt)("p",null,"Example message post for this non-match scenario:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST -H "Content-Type: application/json" \\\n -d \'{\n  "number":3,\n  "surveyId": 37479\n}\' \\\n http://localhost:4000/inbox\n')),(0,o.kt)("p",null,"HTTP ",(0,o.kt)("inlineCode",{parentName:"p"},"post")," requests made to\n",(0,o.kt)("a",{parentName:"p",href:"http://localhost:4000/inbox"},(0,o.kt)("inlineCode",{parentName:"a"},"localhost:4000/inbox"))," will be processed by the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Receiver"),", according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"credential"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"expression"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"adaptor")," defined\nin the project configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"YAML")," file."),(0,o.kt)("p",null,"Time-based jobs will be run by ",(0,o.kt)("inlineCode",{parentName:"p"},"Engine")," according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"credential"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"expression"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"adaptor")," defined in your ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml")," file."),(0,o.kt)("h3",{id:"setup-from-your-existing-openfn-platform-project"},"Setup from your existing OpenFn platform project"),(0,o.kt)("p",null,"If you have a project configured on OpenFn, you have two ways for exporting your\nconfig on the Project Settings page and running your project in microservice."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you export as ",(0,o.kt)("inlineCode",{parentName:"p"},"project.yaml"),", you can download your settings in ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml"),"\nformat from your platform project Download page or from a link in the\nauto-generated email sent to your address. You can plug this file into your\nenvironment as set up using the\n",(0,o.kt)("a",{parentName:"p",href:"#Development-up-and-running-guide"},"Development Up and Running Guide"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you export as ",(0,o.kt)("inlineCode",{parentName:"p"},"microservice.zip"),", you'll get your microservice folder\nready to run with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),", containing"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yaml")," config file"),(0,o.kt)("li",{parentName:"ul"},"a project folder containing ",(0,o.kt)("inlineCode",{parentName:"li"},"project.yaml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".env")," file with the default environment variables for docker"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("inlineCode",{parentName:"li"},"Readme")," file")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into the folder and run the project with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose up"),". If you don't\nhave the docker image, it will be auto-pulled from ",(0,o.kt)("inlineCode",{parentName:"p"},"hub.docker.com"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Export Microservice Zip",src:t(57833).Z})))}m.isMDXComponent=!0},57833:function(e,n,t){n.Z=t.p+"assets/images/microservice_zip_export-9ae611d479650754fcb804c827f42f5c.gif"}}]);