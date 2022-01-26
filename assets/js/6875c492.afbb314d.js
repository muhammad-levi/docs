"use strict";(self.webpackChunk_openfn_docs=self.webpackChunk_openfn_docs||[]).push([[8610],{78665:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(80102),n=a(67294),l=a(86010),s=a(92582),m=a(39960),c="sidebar_2ahu",o="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",g="sidebarItem_2UVv",u="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",p=a(95999);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),n.createElement("ul",{className:i},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:d},e.title))}))))}var b=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,m=e.children,c=(0,r.Z)(e,b),o=t&&t.items.length>0;return n.createElement(s.Z,c,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&n.createElement("div",{className:"col col--2"},a))))}},69404:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var r=a(67294),n=a(39960),l=a(78665),s=a(223),m=a(95999),c=a(16681);function o(e){var t,a=e.metadata,o=e.items,i=e.sidebar,g=a.allTagsPath,u=a.name,d=a.count,p=(t=(0,c.c2)().selectMessage,function(e){return t(e,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,m.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(d),tagName:u});return r.createElement(l.Z,{title:h,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagPostListPage,searchMetadata:{tag:"blog_tags_posts"},sidebar:i},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(n.Z,{href:g},r.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),o.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},223:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(67294),n=a(86010),l=a(3905),s=a(12859),m=a(39960),c=a(67707),o=a(44996),i="blogPostTitle_nmLu",g="blogPostDate_3tMv",u="blogPostAuthorSeparator_1vC2",d="blogPostAvatar_1SuQ",p="blogPostTag_36QG",h="blogPostPreview_2NNd",b=["January","February","March","April","May","June","July","August","September","October","November","December"];var E=function(e){var t,a,E,v,f,N=e.children,_=e.frontMatter,k=e.metadata,Z=e.truncated,y=e.isBlogPostPage,w=void 0!==y&&y,P=k.date,T=k.permalink,I=k.tags,M=k.readingTime,A=_.author,L=_.author_image_url,x=_.author_url,C=_.title,F=_.image,R=_.keywords,S=(0,o.Z)(F,{absolute:!0});return r.createElement(r.Fragment,null,r.createElement(s.Z,null,R&&R.length&&r.createElement("meta",{name:"keywords",content:R.join(",")}),F&&r.createElement("meta",{property:"og:image",content:S}),F&&r.createElement("meta",{property:"twitter:image",content:S}),F&&r.createElement("meta",{name:"twitter:image:alt",content:"Image for "+C})),r.createElement("article",{className:(0,n.Z)(!w&&"margin-bottom--lg",!w&&h)},(t=w?"h1":"h2",a=P.substring(0,10).split("-"),E=a[0],v=b[parseInt(a[1],10)-1],f=parseInt(a[2],10),r.createElement("header",null,r.createElement(t,{className:(0,n.Z)("margin-bottom--sm",i)},w?C:r.createElement(m.Z,{to:T},C)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:P,className:g},v," ",f,", ",E," ",M&&r.createElement(r.Fragment,null," \xb7 ",Math.ceil(M)," min read"))),r.createElement("div",{className:"avatar margin-vert--md"},r.createElement("div",{style:{position:"relative",height:"45px",width:53+20*([A].length-1)+"px"}},[{name:A,avatar:L}].map((function(e,t){var a=e.name,n=e.avatar;return r.createElement("img",{key:a,className:d,style:{zIndex:1e3-t,marginLeft:20*t+"px"},src:n,alt:a})}))),r.createElement("div",{className:"avatar__intro"},r.createElement("h4",{className:"avatar__name"},[{name:A,url:x}].map((function(e,t){var a=e.name,l=e.url;return r.createElement(r.Fragment,{key:a},r.createElement("a",{href:l,target:"_blank",rel:"noreferrer noopener"},a),0!=t&&r.createElement("span",{className:(0,n.Z)(u)},",\xa0"))}))))))),r.createElement("section",{className:"markdown"},r.createElement(l.Zo,{components:c.Z},N)),(I.length>0||Z)&&r.createElement("footer",{className:"row margin-vert--md"},I.length>0&&r.createElement("div",{className:"col",style:{marginTop:-10}},I.map((function(e){var t=e.label,a=e.permalink;return r.createElement(m.Z,{key:a,className:(0,n.Z)(p),to:a},t)}))),Z&&r.createElement("div",{className:"col text--right",style:{marginTop:"auto"}},r.createElement(m.Z,{to:k.permalink,"aria-label":"Read more about "+C},r.createElement("strong",null,"Read More"))))))}}}]);