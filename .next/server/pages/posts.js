(()=>{var t={};t.id=679,t.ids=[679,888,660],t.modules={1789:t=>{t.exports={container:"styles_container__uJ_Rc",posts:"styles_posts__4cp3V",buttonNavigate:"styles_buttonNavigate__aGfm2"}},6641:(t,e,r)=>{"use strict";r.r(e),r.d(e,{config:()=>R,default:()=>N,getServerSideProps:()=>k,getStaticPaths:()=>z,getStaticProps:()=>w,reportWebVitals:()=>A,routeModule:()=>G,unstable_getServerProps:()=>B,unstable_getServerSideProps:()=>V,unstable_getStaticParams:()=>T,unstable_getStaticPaths:()=>D,unstable_getStaticProps:()=>C});var s={};r.r(s),r.d(s,{default:()=>y,getStaticProps:()=>q});var i=r(7093),a=r(5244),o=r(1323),n=r(1269),c=r(6218),l=r(997),u=r(6689),p=r(968),d=r.n(p),g=r(1789),x=r.n(g),m=r(1664),h=r.n(m),b=r(5675),S=r.n(b),v=r(2211),_=r(9715),j=r.n(_),P=r(9983),f=r(6893);function y({posts:t,page:e,totalPage:r}){let[s,i]=(0,u.useState)(t||[]),[a,o]=(0,u.useState)(Number(e));async function n(t){let e=(0,v.e)(),r=await e.query([j().Predicates.at("document.type","post")],{orderings:"[document.last_publication_date desc]",fetch:["post.title","post.description","post.cover"],pageSize:3,page:String(t)});return r}async function c(t){let e=await n(t);if(0===e.results.length)return;let r=e.results.map(t=>({slug:t.uid,title:P.RichText.asText(t.data.title),description:t.data.description.find(t=>"paragraph"===t.type)?.text??"",cover:t.data.cover.url,updatedAt:new Date(t.last_publication_date).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}));o(t),i(r)}return(0,l.jsxs)(l.Fragment,{children:[l.jsx(d(),{children:l.jsx("title",{children:"Blog | Sujeito Programador"})}),l.jsx("main",{className:x().container,children:(0,l.jsxs)("div",{className:x().posts,children:[s.map(t=>(0,l.jsxs)(h(),{href:`/posts/${t.slug}`,children:[l.jsx(S(),{src:t.cover,alt:t.title,width:720,height:410,quality:100}),l.jsx("strong",{children:t.title}),l.jsx("time",{children:t.updatedAt}),l.jsx("p",{children:t.description})]},t.slug)),(0,l.jsxs)("div",{className:x().buttonNavigate,children:[Number(a)>=2&&(0,l.jsxs)("div",{children:[l.jsx("button",{onClick:()=>c(1),children:l.jsx(f.JHF,{size:25,color:"#FFF"})}),l.jsx("button",{onClick:()=>c(Number(a-1)),children:l.jsx(f.YFh,{size:25,color:"#FFF"})})]}),Number(a)<=Number(r)&&(0,l.jsxs)("div",{children:[l.jsx("button",{onClick:()=>c(Number(a+1)),children:l.jsx(f.Tfp,{size:25,color:"#FFF"})}),l.jsx("button",{onClick:()=>c(Number(r)),children:l.jsx(f.qhs,{size:25,color:"#FFF"})})]})]})]})})]})}let q=async()=>{let t=(0,v.e)(),e=await t.query([j().predicates.at("document.type","post")],{orderings:"[document.last_publication_date desc]",fetch:["post.title","post.description","post.cover"],pageSize:3}),r=e.results.map(t=>({slug:t.uid,title:P.RichText.asText(t.data.title),description:t.data.description.find(t=>"paragraph"===t.type)?.text??"",cover:t.data.cover.url,updatedAt:new Date(t.last_publication_date).toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"})}));return{props:{posts:r,page:e.page,totalPage:e.total_pages},revalidate:1800}},F=i.PagesRouteModule,N=(0,o.l)(s,"default"),w=(0,o.l)(s,"getStaticProps"),z=(0,o.l)(s,"getStaticPaths"),k=(0,o.l)(s,"getServerSideProps"),R=(0,o.l)(s,"config"),A=(0,o.l)(s,"reportWebVitals"),C=(0,o.l)(s,"unstable_getStaticProps"),D=(0,o.l)(s,"unstable_getStaticPaths"),T=(0,o.l)(s,"unstable_getStaticParams"),B=(0,o.l)(s,"unstable_getServerProps"),V=(0,o.l)(s,"unstable_getServerSideProps"),G=new F({definition:{kind:a.x.PAGES,page:"/posts",pathname:"/posts",bundlePath:"",filename:""},components:{App:c.default,Document:n.default},userland:s})},2211:(t,e,r)=>{"use strict";r.d(e,{e:()=>a});var s=r(9715),i=r.n(s);function a(t){let e=i().client("https://claudioaricci.cdn.prismic.io/api/v2",{req:t});return e}},9715:t=>{"use strict";t.exports=require("@prismicio/client")},2785:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:t=>{"use strict";t.exports=require("next/head")},9983:t=>{"use strict";t.exports=require("prismic-dom")},6689:t=>{"use strict";t.exports=require("react")},6405:t=>{"use strict";t.exports=require("react-dom")},997:t=>{"use strict";t.exports=require("react/jsx-runtime")},7147:t=>{"use strict";t.exports=require("fs")},1017:t=>{"use strict";t.exports=require("path")},2781:t=>{"use strict";t.exports=require("stream")},9796:t=>{"use strict";t.exports=require("zlib")}};var e=require("../webpack-runtime.js");e.C(t);var r=t=>e(e.s=t),s=e.X(0,[966,640,859,450,127,893,218,269],()=>r(6641));module.exports=s})();