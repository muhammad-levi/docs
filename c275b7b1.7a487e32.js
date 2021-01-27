(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(146)),i={layout:"post",title:"Allow Yourself to Fail",author:"Taylor Downs",author_url:"https://github.com/taylordowns2000",author_image_url:"https://avatars1.githubusercontent.com/u/8732845?s=460&u=5aa58a0e73b25e089668134e0bd1fe971019c960&v=4",categories:["how-to","tips"],featured:!1},s={permalink:"/articles/2020/07/02/allow-yourself-to-fail",source:"@site/articles/2020-07-02-allow-yourself-to-fail.md",description:"Hi all, this is a very short post with a simple message: design for failure.",date:"2020-07-02T00:00:00.000Z",tags:[],title:"Allow Yourself to Fail",readingTime:1.795,truncated:!1,prevItem:{title:"Product News: Enhanced Scheduled/Periodic Job Control",permalink:"/articles/2020/07/14/cron-is-better-than-a-timer"},nextItem:{title:"To Automate or Not to Automate? Ask Yourself These 3 Questions.",permalink:"/articles/2020/06/24/three-questions-to-ask"}},c=[],u={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Hi all, this is a very short post with a simple message: design for failure.\nEven if you've never heard of\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.microsoft.com/en-us/sql-server"}),"MSSQL")," (or\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://azure.microsoft.com/en-us/"}),"Azure"),', or Microsoft?), I want to talk for\none moment about the importance of upserts and a funny developer term called\n"idempotence."'),Object(a.b)("p",null,"We just extended our\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OpenFn/language-mssql"}),"language-mssql adaptor")," with a custom\nfunction that allows upserts (an ",Object(a.b)("inlineCode",{parentName:"p"},"upsert")," is when you either insert a new record\nor update an existing record based on some identifier). Before, you'd need to\nwrite something tedious like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"sql({\n  query: `MERGE my_table AS [Target]\n          USING (SELECT '8675309' AS some_unique_id, 'writing_blog_posts' AS skill) AS [Source]\n          ON [Target].some_unique_id = [Source].some_unique_id\n          WHEN MATCHED THEN\n            UPDATE SET [Target].some_unique_id=8675309, [Target].skill='writing_blog_posts'\n          WHEN NOT MATCHED THEN\n            INSERT (some_unique_id, skill) VALUES ([Source].some_unique_id, [Source].skill);`,\n});\n")),Object(a.b)("p",null,"whereas now you can simply write:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"upsert('my_table', 'some_unique_id', {\n  some_unique_id: 8675309,\n  skill: 'writing blog posts',\n});\n")),Object(a.b)("p",null,"For an operation to be idempotent means that it can be repeated time and time\nagain without producing an unintended result. This is SUPER important for\ncreating S3 (",Object(a.b)("strong",{parentName:"p"},"S"),"ecure, ",Object(a.b)("strong",{parentName:"p"},"S"),"table and ",Object(a.b)("strong",{parentName:"p"},"S"),"calable\u2014more on that\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://openfn.org/trust"}),"here"),') integrations because it provides you with two\n"get-out-of-jail-free" cards.'),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If a destination application fails, if a connection times out, or if (for\nwhatever reason) you're not sure if the ",Object(a.b)("inlineCode",{parentName:"p"},"job")," was completed (say... making a\npayment to CHW) then an idempotent operation can be RETRIED without fear of\nmaking a double-payment.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If you make some change to how your ",Object(a.b)("inlineCode",{parentName:"p"},"job")," works, make some modification to\none of your destination systems, or just because you want to be ",Object(a.b)("em",{parentName:"p"},"extra extra\nsure")," that all the data in a 9 month survey made it to the national public\nhealth reporting system, you can ",Object(a.b)("em",{parentName:"p"},"REPROCESS")," every single message that's come\nthrough OpenFn at the click of a button, without having to worry about\nduplicates."))),Object(a.b)("p",null,"So... when clients let me mess around with their jobs, I ",Object(a.b)("em",{parentName:"p"},"always")," recommend we\ndesign for idempotence. It's common sense when you're passing messages between\ntwo different systems that are bound to evolve, go offline, have a bad day, etc"),Object(a.b)("p",null,"\u2014 Taylor"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://openfn.org/signup"}),"Sign up"),"{: .btn} to set up a project today,\nabsolutely free."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:admin@openfn.org"}),"Reach out"),"{: .btn} for more information."))}l.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(f,s(s({ref:t},u),{},{components:n})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);