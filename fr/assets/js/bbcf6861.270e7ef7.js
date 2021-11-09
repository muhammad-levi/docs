"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[2507],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24767:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=n(83117),a=n(80102),r=(n(67294),n(3905)),i=["components"],s={title:"Editing jobs locally"},l=void 0,p={unversionedId:"jobs/editing_locally",id:"jobs/editing_locally",isDocsHomePage:!1,title:"Editing jobs locally",description:"To edit jobs, instead of using the OpenFn Job Studio you can also use your favorite text editor and make changes offline, committing and pushing to GitHub to deploy to your OpenFn using the version control feature.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/jobs/editing_locally.md",sourceDirName:"jobs",slug:"/jobs/editing_locally",permalink:"/fr/documentation/jobs/editing_locally",editUrl:"https://github.com/openfn/docs/edit/main/docs/jobs/editing_locally.md",tags:[],version:"current",frontMatter:{title:"Editing jobs locally"},sidebar:"docs",previous:{title:"Le Job Studio OpenFn",permalink:"/fr/documentation/jobs/job-studio"},next:{title:"Triggers",permalink:"/fr/documentation/build/triggers"}},c=[],u={toc:c};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To edit jobs, instead of using the OpenFn ",(0,r.kt)("a",{parentName:"p",href:"/documentation/jobs/job-studio"},"Job Studio")," you can also use your favorite text editor and make changes offline, committing and pushing to GitHub to deploy to your OpenFn using the ",(0,r.kt)("a",{parentName:"p",href:"/documentation/manage/platform-mgmt/#github-version-control"},"version control feature"),"."),(0,r.kt)("p",null,"First, make sure that version control is set up for your project and the job in question. When that's all done, follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure you have ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git installed"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the repo from GitHub. Depending on how you're connecting, grab the HTTPS or SSH URL of the repository."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"GH Clone URL",src:n(80474).Z})),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can connect to GitHub with username+password (HTTPS) or an SSH keypair you generated. (You can check out the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories"},"GitHub docs")," for more info.)"))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then use it to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository"},"clone the repo")," to your computer by running this command in a folder that you'd like to contain your new repo: ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone {repo URL}")," (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/OpenFn/Miracle-Feet.git"),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To update your local copy with changes from GitHub, run ",(0,r.kt)("inlineCode",{parentName:"p"},"git pull")," regularly while you're editing.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For this tutorial, we assume you're making changes on the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch: the one that is deployed as your production system to OpenFn.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To edit your jobs, use a code editor such as ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Visual Studio Code"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"VS Code",src:n(50018).Z})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Make sure you install the ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier VSCode Extension")," and set is as default formatter in Settings as seen below. This will apply the correct code formatting to the files you change.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Prettier",src:n(86145).Z})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you're done, you can check which files you changed with ",(0,r.kt)("inlineCode",{parentName:"p"},"git status"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Then use ",(0,r.kt)("inlineCode",{parentName:"p"},"git add {filepath}")," followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"git commit -m {change notes}")," to prepare the changes to be merged into the repo."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There's a lot to learn about git. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/git-guides/git-commit"},"Here's a good place to start"),"."))),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Then run ",(0,r.kt)("inlineCode",{parentName:"li"},"git push")," to upload the files to the repo (see more on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/git-guides/git-push"},"git docs"),").")),(0,r.kt)("p",null,"From there, the version control integration will update changed jobs in your OpenFn project and you can test those changes on the platform."),(0,r.kt)("p",null,"Once you're ready to start running jobs and testing your changes ",(0,r.kt)("em",{parentName:"p"},"locally"),", head over to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openfn.org/documentation/devtools/home"},"Devtools")," docs for guidance."))}d.isMDXComponent=!0},50018:function(e,t,n){t.Z=n.p+"assets/images/edit_job_vscode-e8bd8e327b662032d7b4b90f281ff431.png"},80474:function(e,t,n){t.Z=n.p+"assets/images/git_clone_url-35a4106f50ed2820554bb2dbb0ad38a6.png"},86145:function(e,t,n){t.Z=n.p+"assets/images/prettier-a1c13866d8c1ef0b85b21265fc7621ad.png"}}]);