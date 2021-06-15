(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[6293],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(o,".").concat(m)]||c[m]||p[m]||s;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},57258:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return o},default:function(){return d}});var r=n(22122),a=n(19756),s=(n(67294),n(3905)),i={title:"Triggers"},l={unversionedId:"build/triggers",id:"build/triggers",isDocsHomePage:!1,title:"Triggers",description:"Les triggers sont responsables du d\xe9marrage automatique du job. Il en existe 4 types. Les plus courants sont les triggers de type \xab\xa0filtre de messages\xa0\xbb , mais il existe aussi les triggers de type \xab\xa0cron\xa0\xbb, \xab\xa0flux\xa0\xbb et \xab\xa0\xe9chec\xa0\xbb.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/build/triggers.md",sourceDirName:"build",slug:"/build/triggers",permalink:"/fr/documentation/build/triggers",editUrl:"https://github.com/openfn/docs/edit/main/docs/build/triggers.md",version:"current",frontMatter:{title:"Triggers"},sidebar:"docs",previous:{title:"Le Job Studio OpenFn",permalink:"/fr/documentation/jobs/job-studio"},next:{title:"Credentials",permalink:"/fr/documentation/build/credentials"}},o=[{value:"Types de trigger",id:"types-de-trigger",children:[{value:"Triggers de filtre de messages",id:"triggers-de-filtre-de-messages",children:[]},{value:"Triggers Cron (anciennement minuteurs)",id:"triggers-cron-anciennement-minuteurs",children:[]},{value:"Triggers de flux",id:"triggers-de-flux",children:[]},{value:"Triggers d&#39;\xe9chec",id:"triggers-d\xe9chec",children:[]}]},{value:"Traitement des jobs cron",id:"traitement-des-jobs-cron",children:[{value:"Gestion de la taille de <code>state</code> pour les jobs de minuterie",id:"gestion-de-la-taille-de-state-pour-les-jobs-de-minuterie",children:[]},{value:"Une solution rapide pour l&#39;\xe9tat final bloat",id:"une-solution-rapide-pour-l\xe9tat-final-bloat",children:[]}]},{value:"La correspondance des filtres en d\xe9tail",id:"la-correspondance-des-filtres-en-d\xe9tail",children:[{value:"Filtre 1, inclusion simple",id:"filtre-1-inclusion-simple",children:[]},{value:"Filtre 2, inclusion <em>et</em> exclusion",id:"filtre-2-inclusion-et-exclusion",children:[]}]},{value:"Autres \xe9chantillons de filtres",id:"autres-\xe9chantillons-de-filtres",children:[{value:"Correspond aux messages <code>WHERE</code> le <code>formId</code> est <code>&quot;Robot_Photo_21.04.2015&quot;</code>",id:"correspond-aux-messages-where-le-formid-est-robot_photo_21042015",children:[]},{value:"Faire correspondre un message avec deux fragments \xe0 l&#39;int\xe9rieur d&#39;un tableau appel\xe9 <code>data</code>",id:"faire-correspondre-un-message-avec-deux-fragments-\xe0-lint\xe9rieur-dun-tableau-appel\xe9-data",children:[]},{value:"Faire correspondre un message <code>WHERE</code> et <code>AND</code> qui sont tous les deux inclus",id:"faire-correspondre-un-message-where-et-and-qui-sont-tous-les-deux-inclus",children:[]},{value:"Faire correspondre un message en utilisant l&#39;exclusion",id:"faire-correspondre-un-message-en-utilisant-lexclusion",children:[]},{value:"Faire correspondre un message avec un fragment \xe0 l&#39;int\xe9rieur d&#39;un autre objet appel\xe9 <code>form</code>",id:"faire-correspondre-un-message-avec-un-fragment-\xe0-lint\xe9rieur-dun-autre-objet-appel\xe9-form",children:[]}]},{value:"Une d\xe9mo d&#39;exclusion",id:"une-d\xe9mo-dexclusion",children:[]}],u={toc:o};function d(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Les triggers sont responsables du d\xe9marrage automatique du job. Il en existe 4 types. Les plus courants sont les triggers de type \xab\xa0filtre de messages\xa0\xbb , mais il existe aussi les triggers de type \xab\xa0cron\xa0\xbb, \xab\xa0flux\xa0\xbb et \xab\xa0\xe9chec\xa0\xbb."),(0,s.kt)("h2",{id:"types-de-trigger"},"Types de trigger"),(0,s.kt)("h3",{id:"triggers-de-filtre-de-messages"},"Triggers de filtre de messages"),(0,s.kt)("p",null,"Les triggers de filtre de messages surveillent les messages entrants et v\xe9rifient si les donn\xe9es dans ces messages correspondent \xe0 leurs ",(0,s.kt)("strong",{parentName:"p"},"crit\xe8res d'inclusion")," et ",(0,s.kt)("em",{parentName:"p"},"ne r\xe9pondent pas")," \xe0 leurs ",(0,s.kt)("strong",{parentName:"p"},"crit\xe8res d'exclusion"),". S'ils r\xe9ussissent ces tests et s'il y a des jobs actifs configur\xe9s pour utiliser ce trigger, une ex\xe9cution sera lanc\xe9e pour chaque combinaison message/job."),(0,s.kt)("p",null,"En tant qu'utilisateur, vous sp\xe9cifiez les crit\xe8res d'inclusion et d'exclusion qui d\xe9terminent les messages entrants qui doivent d\xe9clencher l'ex\xe9cution des jobs. En gros, si une partie d'un corps de message ",(0,s.kt)("strong",{parentName:"p"},"correspond")," au JSON que vous fournissez comme filtre d'inclusion, et ",(0,s.kt)("em",{parentName:"p"},"ne")," correspond pas au JSON que vous avez fourni comme filtre d'exclusion, un job s'ex\xe9cutera (en supposant que vous en avez cr\xe9\xe9 un avec ",(0,s.kt)("inlineCode",{parentName:"p"},"autoprocess")," activ\xe9)."),(0,s.kt)("p",null,"Le crit\xe8re de filtrage prend la forme d'une cha\xeene de caract\xe8res JSON valide, comme ceci\xa0: ",(0,s.kt)("inlineCode",{parentName:"p"},'{"Name":"Aleksa Iwobi"}'),". Dans une requ\xeate SQL, cette cha\xeene sera utilis\xe9e dans la clause WHERE et utilisera des op\xe9rateurs sp\xe9ciaux de ",(0,s.kt)("inlineCode",{parentName:"p"},"jsonb")," comme celui-ci\xa0:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM messages\n  WHERE body::jsonb @> \'{"Name":"Nicholas P\xe9p\xe9"}\'::jsonb;\n')),(0,s.kt)("p",null,"Si vous fournissez des crit\xe8res d'exclusion comme ",(0,s.kt)("inlineCode",{parentName:"p"},'{"type": "fake-data"}')," la requ\xeate r\xe9sultante ressemblera \xe0 quelque chose comme ceci :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM messages\n  WHERE body::jsonb @> \'{"Name":"Nicholas P\xe9p\xe9"}\'::jsonb\n  AND NOT (body::jsonb @> \'{"type":"fake-data"}\'::jsonb);\n')),(0,s.kt)("p",null,"Il y a une explication plus d\xe9taill\xe9e de la correspondance des filtres ",(0,s.kt)("a",{parentName:"p",href:"#filter-matching-in-detail"},"ci-dessous"),"."),(0,s.kt)("h3",{id:"triggers-cron-anciennement-minuteurs"},"Triggers Cron (anciennement minuteurs)"),(0,s.kt)("p",null,"Cron triggers run jobs based on a cron schedule. Ils peuvent fonctionner aussi fr\xe9quemment qu'une fois toutes les minutes, ou aussi rarement que vous le souhaitez, et peuvent \xeatre programm\xe9s \xe0 des dates ou des heures tr\xe8s pr\xe9cises. Chaque fois qu'un job chronom\xe9tr\xe9 r\xe9ussit, son ",(0,s.kt)("inlineCode",{parentName:"p"},"final_state")," est sauvegard\xe9 et utilis\xe9 comme ",(0,s.kt)("inlineCode",{parentName:"p"},"initial_state")," pour sa prochaine ex\xe9cution. Voir \xab\xa0G\xe9rer l'\xe9tat\xa0\xbb et \xab\xa0Garder un curseur\xa0\xbb ci-dessous pour une aide \xe0 l'impl\xe9mentation."),(0,s.kt)("p",null,"La meilleure fa\xe7on d'apprendre \xe0 conna\xeetre ",(0,s.kt)("inlineCode",{parentName:"p"},"cron"),", si vous n'\xeates pas d\xe9j\xe0 familier, est \xe0 travers l'interface OpenFn ou"),(0,s.kt)("a",{href:"https://crontab.guru",target:"_blank"},"crontab.guru"),".",(0,s.kt)("h3",{id:"triggers-de-flux"},"Triggers de flux"),(0,s.kt)("p",null,"Les triggers de flux ex\xe9cutent un job ",(0,s.kt)("em",{parentName:"p"},"apr\xe8s")," qu'un autre job sp\xe9cifi\xe9 se termine avec succ\xe8s. Par exemple, un trigger de flux qui sp\xe9cifie l'ex\xe9cution r\xe9ussie du Job A peut \xeatre utilis\xe9 pour le Job B. Chaque fois que le Job A r\xe9ussit, le Job B commence \xe0 s'ex\xe9cuter avec le ",(0,s.kt)("inlineCode",{parentName:"p"},"final_state")," du Job A comme son ",(0,s.kt)("inlineCode",{parentName:"p"},"initial_state"),"."),(0,s.kt)("h3",{id:"triggers-d\xe9chec"},"Triggers d'\xe9chec"),(0,s.kt)("p",null,"Les triggers d'\xe9chec, ou \xab\xa0catch\xa0\xbb, fonctionnent comme les triggers de flux, sauf qu'ils guettent l'\xe9chec, plut\xf4t que le succ\xe8s, d'un job sp\xe9cifique. (par exemple, le Job A paie un ASC via MPESA. Si le Job A ",(0,s.kt)("em",{parentName:"p"},"\xe9choue,")," nous devons lancer le Job B, qui envoie un SMS au responsable du district lui demandant de payer manuellement l'ASC.)"),(0,s.kt)("h2",{id:"traitement-des-jobs-cron"},"Traitement des jobs cron"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Traitement \xe0 la demande pour les jobs cron.")," Si vous exploitez les triggers cron pour ex\xe9cuter des jobs \xe0 des moments pr\xe9cis, vous pouvez \xe9galement ex\xe9cuter ce job d\xe9clench\xe9 par cron \xe0 la demande. De cette fa\xe7on, vous n\u2019avez pas \xe0 attendre l'expiration de la minuterie avant de proc\xe9der au test\xa0! Il suffit simplement de cliquer sur le bouton Processus/\xab Jouer \xbb maintenant disponible sur les pages Job, Run et Activity History."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Ex\xe9cute le bouton de trigger de temps d&#39;ex\xe9cution de la liste",src:n(95279).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Bouton de trigger de l&#39;historique de l&#39;ex\xe9cution",src:n(28443).Z})),(0,s.kt)("h4",{id:"maintien-dun-curseur-en-state-pour-les-jobs-de-minuterie"},"Maintien d'un curseur en ",(0,s.kt)("inlineCode",{parentName:"h4"},"state")," pour les jobs de minuterie"),(0,s.kt)("p",null,"Comme de nombreux jobs de minuterie n\xe9cessitent de garder une sorte d'enregistrement de leur ex\xe9cution pr\xe9c\xe9dente pour modifier leurs actions ult\xe9rieures, ",(0,s.kt)("inlineCode",{parentName:"p"},"state")," est transmis entre les ex\xe9cutions. Un exemple pourrait \xeatre de conserver un \xab curseur \xbb pour ne s\xe9lectionner que les nouveaux enregistrements dans une base de donn\xe9es. On s'attendrait \xe0 la logique suivante\xa0:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"job-1")," r\xe9cup\xe8re les patients de la base de donn\xe9es"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"job-1")," fait quelque chose d'important avec ces dossiers de patients"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("inlineCode",{parentName:"li"},"job-1")," enregistre l'",(0,s.kt)("inlineCode",{parentName:"li"},"id")," du dernier patient trait\xe9 avec succ\xe8s \xe0 ",(0,s.kt)("inlineCode",{parentName:"li"},"final_state")),(0,s.kt)("li",{parentName:"ol"},"quand ",(0,s.kt)("inlineCode",{parentName:"li"},"job-1")," s'ex\xe9cute \xe0 nouveau, il r\xe9cup\xe8re les patients dont l'",(0,s.kt)("inlineCode",{parentName:"li"},"id")," est sup\xe9rieur \xe0 l'",(0,s.kt)("inlineCode",{parentName:"li"},"id")," du dernier patient trait\xe9 avec succ\xe8s.")),(0,s.kt)("p",null,"Pour y parvenir, vous pourriez \xe9crire\xa0:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"fetchPatient({ type: 'referral', offset: state.lastId }, state => {\n  // Assuming the system returned an array of patients in the \"data\" key.\n  state.lastId = state.data.patients.sort((a, b) => b.id - a.id)[0];\n  return state;\n});\n")),(0,s.kt)("p",null,"Le d\xe9calage initial sera ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),", mais les ex\xe9cutions suivantes vont automatiquement r\xe9cup\xe9rer seulement les \xab\xa0nouveaux\xa0\xbb patients."),(0,s.kt)("h3",{id:"gestion-de-la-taille-de-state-pour-les-jobs-de-minuterie"},"Gestion de la taille de ",(0,s.kt)("inlineCode",{parentName:"h3"},"state")," pour les jobs de minuterie"),(0,s.kt)("p",null,"Etant donn\xe9 que l'\xe9tat est transmis entre chaque ex\xe9cution d'un job de minuterie, si votre job ajoute quelque chose de nouveau \xe0 l'\xe9tat \xe0 chaque ex\xe9cution, il peut rapidement devenir trop grand pour \xeatre trait\xe9 de mani\xe8re pratique. Imaginez qu'une r\xe9ponse du serveur ajoutait, via ",(0,s.kt)("inlineCode",{parentName:"p"},"array.push(...)"),", \xe0 ",(0,s.kt)("inlineCode",{parentName:"p"},"state.references")," chaque fois que le job est ex\xe9cut\xe9. OpenFn supporte jusqu'\xe0 50 000 octets (via Erlang's ",(0,s.kt)("inlineCode",{parentName:"p"},"byte_size"),"), bien que la plupart des octets ",(0,s.kt)("inlineCode",{parentName:"p"},"final_state")," se situent entre 100 et 1000."),(0,s.kt)("p",null,"Si la taille de votre ",(0,s.kt)("inlineCode",{parentName:"p"},"final_state")," d\xe9passe 10 000 octets, OpenFn enverra aux collaborateurs du projet un email d'avertissement. Si elle d\xe9passe 50 000 octets, votre ex\xe9cution va toujours r\xe9ussir mais son ",(0,s.kt)("inlineCode",{parentName:"p"},"final_state")," ne sera pas sauvegard\xe9 et la prochaine fois que le job sera ex\xe9cut\xe9e il h\xe9ritera de l'\xe9tat final pr\xe9c\xe9dent, non mis \xe0 jour. (p. ex. le dernier \xe9tat qui \xe9tait < de 50 000 octets.)"),(0,s.kt)("h3",{id:"une-solution-rapide-pour-l\xe9tat-final-bloat"},"Une solution rapide pour l'\xe9tat final bloat"),(0,s.kt)("p",null,"Le plus souvent, l'\xe9tat final bloat est d\xfb \xe0 une gestion incorrecte de ",(0,s.kt)("inlineCode",{parentName:"p"},"state.references")," ou ",(0,s.kt)("inlineCode",{parentName:"p"},"state.data"),". Cela peut \xeatre corrig\xe9 en ajoutant les lignes suivantes\xa0: ",(0,s.kt)("em",{parentName:"p"},"either")," \xe0 la fonction callback de votre paquetage de langue (s'il en permet un) ou en ajoutant une op\xe9ration ",(0,s.kt)("inlineCode",{parentName:"p"},"alterState(. .)")," apr\xe8s votre op\xe9ration."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"alterState(state => {\n  state.custom = somethingIntentional;\n  state.data = {};\n  state.references = [];\n  return state;\n});\n")),(0,s.kt)("h2",{id:"la-correspondance-des-filtres-en-d\xe9tail"},"La correspondance des filtres en d\xe9tail"),(0,s.kt)("p",null,"Pour illustrer la correspondance des filtres, reportez-vous aux exemples de filtres et de messages ci-dessous."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Le message \xab\xa0a\xa0\xbb correspondra au filtre 1, mais pas le message \xab\xa0b\xa0\xbb."),(0,s.kt)("li",{parentName:"ul"},"Le message \xab\xa0c\xa0\xbb correspondra au filtre 2, mais pas le message \xab\xa0d\xa0\xbb.")),(0,s.kt)("h3",{id:"filtre-1-inclusion-simple"},"Filtre 1, inclusion simple"),(0,s.kt)("p",null,"Les crit\xe8res d'inclusion sont ",(0,s.kt)("inlineCode",{parentName:"p"},'{ "formID": "patient_registration_v7" }')," et les crit\xe8res d'exclusion sont laiss\xe9s vides."),(0,s.kt)("h4",{id:"le-message-\xab-a-\xbb-correspondra"},"Le message \xab\xa0a\xa0\xbb correspondra"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-15",\n  "formID": "patient_registration_v7",\n  "name": "Jack Wilshere",\n  "dob": "1986-05-16",\n  "medications": ["anaphlene", "zaradood", "morphofast"]\n}\n')),(0,s.kt)("h4",{id:"le-message-\xab-b-\xbb-ne-correspondra-pas"},"Le message \xab\xa0b\xa0\xbb ne correspondra pas"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-16",\n  "formID": "patient_registration_v8",\n  "name": "Larry Bird",\n  "dob": "1982-03-21",\n  "medications": ["anaphlene", "zaradood", "morphofast"]\n}\n')),(0,s.kt)("p",null,"Le message \xab\xa0b\xa0\xbb n'inclut pas ",(0,s.kt)("inlineCode",{parentName:"p"},'"formID":"patient_registration_v7"')," et ne correspond pas au filtre \xab\xa01\xa0\xbb."),(0,s.kt)("h3",{id:"filtre-2-inclusion-et-exclusion"},"Filtre 2, inclusion ",(0,s.kt)("em",{parentName:"h3"},"et")," exclusion"),(0,s.kt)("p",null,"Le crit\xe8re d'inclusion est ",(0,s.kt)("inlineCode",{parentName:"p"},'{ "name": "john doe" }')," et le crit\xe8re d'exclusion est ",(0,s.kt)("inlineCode",{parentName:"p"},'{"allowedToShare": false}'),"."),(0,s.kt)("h4",{id:"le-message-\xab-c-\xbb-correspondra"},"Le message \xab\xa0c\xa0\xbb correspondra"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-15",\n  "name": "john doe",\n  "dob": "1986-05-16"\n}\n')),(0,s.kt)("h4",{id:"le-message-\xab-d-\xbb-ne-correspondra-pas"},"Le message \xab\xa0d\xa0\xbb ne correspondra pas"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "submissionDate": "2016-01-15",\n  "name": "john doe",\n  "dob": "1986-05-16",\n  "allowedToShare": false\n}\n')),(0,s.kt)("h2",{id:"autres-\xe9chantillons-de-filtres"},"Autres \xe9chantillons de filtres"),(0,s.kt)("h3",{id:"correspond-aux-messages-where-le-formid-est-robot_photo_21042015"},"Correspond aux messages ",(0,s.kt)("inlineCode",{parentName:"h3"},"WHERE")," le ",(0,s.kt)("inlineCode",{parentName:"h3"},"formId")," est ",(0,s.kt)("inlineCode",{parentName:"h3"},'"Robot_Photo_21.04.2015"')),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,s.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},'{ "formId": "Robot_Photo_21.04.2015" }')),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("h3",{id:"faire-correspondre-un-message-avec-deux-fragments-\xe0-lint\xe9rieur-dun-tableau-appel\xe9-data"},"Faire correspondre un message avec deux fragments \xe0 l'int\xe9rieur d'un tableau appel\xe9 ",(0,s.kt)("inlineCode",{parentName:"h3"},"data")),(0,s.kt)("p",null,"(Ceci est utile lors de la collecte de donn\xe9es via ODK)"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,s.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},'{ "data": [{ "outlet_call": "TRUE", "new_existing": "Existing" }] }')),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("h3",{id:"faire-correspondre-un-message-where-et-and-qui-sont-tous-les-deux-inclus"},"Faire correspondre un message ",(0,s.kt)("inlineCode",{parentName:"h3"},"WHERE")," et ",(0,s.kt)("inlineCode",{parentName:"h3"},"AND")," qui sont tous les deux inclus"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,s.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},'{ "formId": "Robot_Photo_21.04.2015", "secret_number": 8 }')),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("h3",{id:"faire-correspondre-un-message-en-utilisant-lexclusion"},"Faire correspondre un message en utilisant l'exclusion"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,s.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},'{ "formId": "Robot_Photo_21.04.2015" }')),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},'{ "safeToProcess": false }'))))),(0,s.kt)("h3",{id:"faire-correspondre-un-message-avec-un-fragment-\xe0-lint\xe9rieur-dun-autre-objet-appel\xe9-form"},"Faire correspondre un message avec un fragment \xe0 l'int\xe9rieur d'un autre objet appel\xe9 ",(0,s.kt)("inlineCode",{parentName:"h3"},"form")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,s.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},'{"form": {"@xmlns": "http://openrosa.org/formdesigner/F732194-3278-nota-ReAL-one"}}')),(0,s.kt)("td",{parentName:"tr",align:null})))),(0,s.kt)("h2",{id:"une-d\xe9mo-dexclusion"},"Une d\xe9mo d'exclusion"),(0,s.kt)("p",null,"Imaginez que nous ayons un filtre qui inclut des messages avec ",(0,s.kt)("inlineCode",{parentName:"p"},"form == 'bns_survey'")," mais nous voulons ensuite commencer ",(0,s.kt)("em",{parentName:"p"},"en excluant")," ceux qui ont ",(0,s.kt)("inlineCode",{parentName:"p"},"body.survey_type == 'practice'"),". Notre trigger de filtre devrait ressembler \xe0 ceci\xa0:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"inclusion"),(0,s.kt)("th",{parentName:"tr",align:null},"exclusion"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},'{ "form": "bns_survey" }')),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},'{"body": {"survey_type": "practice"}}'))))),(0,s.kt)("p",null,"Nous l'avons configur\xe9 \xe0 partir du formulaire de trigger comme ceci\xa0:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(39308).Z})),(0,s.kt)("p",null,"Et v\xe9rifiez le r\xe9sultat dans l'inbox\xa0:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:n(68069).Z})))}d.isMDXComponent=!0},68069:function(e,t,n){"use strict";t.Z=n.p+"assets/images/demo-exclusion-cc520464bca5893c3ca38bfa1d1f2142.gif"},39308:function(e,t,n){"use strict";t.Z=n.p+"assets/images/exclusion-cb6fe8d428d9dd35a5712fa756eb907a.gif"},28443:function(e,t,n){"use strict";t.Z=n.p+"assets/images/runtimetrigger1-6895401e3fee9878d136613b44c469e9.png"},95279:function(e,t,n){"use strict";t.Z=n.p+"assets/images/timetriggerunslist-30591afe14b40286a89b96a5a78f3c55.png"}}]);