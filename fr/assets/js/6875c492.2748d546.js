"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8610],{46165:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(63366),r=a(67294),l=a(86010),o=a(46254),c=a(36742),s="sidebar_2ahu",i="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",f=a(24973);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(i,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var p=a(571);var v=function(e){var t=e.sidebar,a=e.toc,c=e.children,s=(0,n.Z)(e,["sidebar","toc","children"]),i=t&&t.items.length>0;return r.createElement(o.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},i&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&r.createElement("div",{className:"col col--2"},r.createElement(p.Z,{toc:a})))))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(67294),r=a(36742),l=a(46165),o=a(69788),c=a(24973),s=a(941);function i(e){var t,a=e.metadata,i=e.items,m=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,f=(t=(0,s.c2)().selectMessage,function(e){return t(e,(0,c.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,c.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:f(g),tagName:d});return n.createElement(l.Z,{title:h,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:m},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,h),n.createElement(r.Z,{href:u},n.createElement(c.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),i.map((function(e){var t=e.content;return n.createElement(o.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},n.createElement(t,null))})))}},571:function(e,t,a){a.d(t,{r:function(){return g},Z:function(){return f}});var n=a(67294),r=a(86010),l=a(941);function o(e){var t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function c(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return o(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function s(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var i=function(e){var t=(0,n.useRef)(void 0),a=s();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=c({anchorTopOffset:a.current}),o=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function g(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))}))):null}var f=function(e){var t=e.toc;return i(d),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},69788:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),r=a(86010),l=a(3905),o=a(99105),c=a(36742),s=a(96845),i=a(44996),m="blogPostTitle_nmLu",u="blogPostDate_3tMv",d="blogPostAuthorSeparator_1vC2",g="blogPostAvatar_1SuQ",f="blogPostTag_36QG",h="blogPostPreview_2NNd",p=["January","February","March","April","May","June","July","August","September","October","November","December"];var v=function(e){var t,a,v,b,E,N=e.children,_=e.frontMatter,k=e.metadata,y=e.truncated,Z=e.isBlogPostPage,w=void 0!==Z&&Z,T=k.date,L=k.permalink,P=k.tags,C=k.readingTime,A=_.author,I=_.author_image_url,M=_.author_url,x=_.title,O=_.image,R=_.keywords,S=(0,i.Z)(O,{absolute:!0});return n.createElement(n.Fragment,null,n.createElement(o.Z,null,R&&R.length&&n.createElement("meta",{name:"keywords",content:R.join(",")}),O&&n.createElement("meta",{property:"og:image",content:S}),O&&n.createElement("meta",{property:"twitter:image",content:S}),O&&n.createElement("meta",{name:"twitter:image:alt",content:"Image for "+x})),n.createElement("article",{className:(0,r.Z)(!w&&"margin-bottom--lg",!w&&h)},(t=w?"h1":"h2",a=T.substring(0,10).split("-"),v=a[0],b=p[parseInt(a[1],10)-1],E=parseInt(a[2],10),n.createElement("header",null,n.createElement(t,{className:(0,r.Z)("margin-bottom--sm",m)},w?x:n.createElement(c.Z,{to:L},x)),n.createElement("div",{className:"margin-vert--md"},n.createElement("time",{dateTime:T,className:u},b," ",E,", ",v," ",C&&n.createElement(n.Fragment,null," \xb7 ",Math.ceil(C)," min read"))),n.createElement("div",{className:"avatar margin-vert--md"},n.createElement("div",{style:{position:"relative",height:"45px",width:53+20*([A].length-1)+"px"}},[{name:A,avatar:I}].map((function(e,t){var a=e.name,r=e.avatar;return n.createElement("img",{key:a,className:g,style:{zIndex:1e3-t,marginLeft:20*t+"px"},src:r,alt:a})}))),n.createElement("div",{className:"avatar__intro"},n.createElement("h4",{className:"avatar__name"},[{name:A,url:M}].map((function(e,t){var a=e.name,l=e.url;return n.createElement(n.Fragment,{key:a},n.createElement("a",{href:l,target:"_blank",rel:"noreferrer noopener"},a),0!=t&&n.createElement("span",{className:(0,r.Z)(d)},",\xa0"))}))))))),n.createElement("section",{className:"markdown"},n.createElement(l.Zo,{components:s.Z},N)),(P.length>0||y)&&n.createElement("footer",{className:"row margin-vert--md"},P.length>0&&n.createElement("div",{className:"col",style:{marginTop:-10}},P.map((function(e){var t=e.label,a=e.permalink;return n.createElement(c.Z,{key:a,className:(0,r.Z)(f),to:a},t)}))),y&&n.createElement("div",{className:"col text--right",style:{marginTop:"auto"}},n.createElement(c.Z,{to:k.permalink,"aria-label":"Read more about "+x},n.createElement("strong",null,"Read More"))))))}}}]);