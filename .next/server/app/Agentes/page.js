(()=>{var e={};e.id=948,e.ids=[948],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},3873:e=>{"use strict";e.exports=require("path")},1997:e=>{"use strict";e.exports=require("punycode")},7910:e=>{"use strict";e.exports=require("stream")},9551:e=>{"use strict";e.exports=require("url")},4075:e=>{"use strict";e.exports=require("zlib")},4083:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var r=s(260),a=s(8203),l=s(5155),o=s.n(l),i=s(7292),n={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);s.d(t,n);let d=["",{children:["Agentes",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,269)),"/Users/admin/Desktop/Mclogsweb2.0/src/app/Agentes/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,8180)),"/Users/admin/Desktop/Mclogsweb2.0/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9937,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/admin/Desktop/Mclogsweb2.0/src/app/Agentes/page.jsx"],p={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/Agentes/page",pathname:"/Agentes",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9846:(e,t,s)=>{Promise.resolve().then(s.bind(s,269))},9582:(e,t,s)=>{Promise.resolve().then(s.bind(s,7921))},7921:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(5512),a=s(8009),l=s(9712);function o(){let[e,t]=(0,a.useState)([]),[s,o]=(0,a.useState)(""),[i,n]=(0,a.useState)([]),[,d]=(0,a.useState)(""),{t:c}=(0,l.Bd)("common"),p=e=>{o(e)},u=[...new Set(i.map(e=>e.country.trimEnd()))];return(0,r.jsxs)("div",{className:"h-auto w-full font-Encode-Sans ",children:[(0,r.jsx)("div",{className:"flex flex-col h-auto w-full items-center gap-y-6 pt-20 overflow-hidden",children:(0,r.jsx)("div",{className:"flex justify-center items-center bg-center w-full h-40 md:h-80",style:{backgroundImage:"url(/Images/Agentes/introimg2.webp)",backgroundSize:"cover"},children:(0,r.jsxs)("div",{className:"flex flex-col text-center",children:[(0,r.jsx)("h1",{className:"text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold animate__animated animate__fadeInLeft",children:c("our_agents")}),(0,r.jsx)("p",{className:"text-white font-regular pt-4 px-2 animate__animated animate__fadeInRight",children:c("our_agents_description")})]})})}),(0,r.jsxs)("div",{className:"flex flex-col h-auto w-full pt-4 md:pt-16 pb-20 sm:pb-56 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40",children:[(0,r.jsxs)("div",{className:"flex flex-col w-full  h-auto gap-y-6 pb-16",children:[(0,r.jsx)("div",{className:"bg-white pt-4 w-full ",children:(0,r.jsx)("div",{className:"grid xl:grid-cols-7 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:grid-rows-3 md:grid-rows-3 lg:grid-rows-1 gap-y-2 md:gap-y-4 grid-rows-auto gap-x-6 w-full justify-items-center",children:["Asia","Oceania","Europa","\xc1frica","Norte Am\xe9rica","Centro Am\xe9rica","Sur Am\xe9rica"].map((e,t)=>(0,r.jsx)("button",{className:`hover:border-aureolin border-2 w-full h-auto p-2 rounded-md text-aureolin ${s===e?"bg-aureolin text-white border-0":""}`,onClick:()=>p(e),children:e},t))})}),(0,r.jsx)("div",{className:"rounded-md w-full h-10 border border-slate-400",children:(0,r.jsx)("input",{className:"h-full w-full rounded-md p-2 ",placeholder:"Buscar",onChange:t=>{let s=t.target.value.toLowerCase();d(s),n(e.filter(e=>[e.name.toLowerCase(),e.country.toLowerCase(),e.continent.toLowerCase()].join(" ").includes(s)))}})})]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"flex flex-col w-auto h-auto gap-6",children:u.length>0?u.map(e=>(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold pb-6 text-blue",children:e}),(0,r.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6",children:i.filter(t=>t.country.trimEnd()===e).map(e=>(0,r.jsxs)("div",{className:"bg-white shadow-md rounded-md p-4 mb-4 w-auto h-auto overflow-auto",children:[(0,r.jsx)("p",{className:"font-bold text-slate-600",children:e.name}),(0,r.jsxs)("p",{className:" font-semibold text-slate-400",children:["Ciudad: ",e.town]}),(0,r.jsx)("p",{children:0!==e.web_page.length?(0,r.jsxs)("span",{children:["Pagina: ",(0,r.jsx)("a",{href:e.web_page,className:"text-sky-600",children:e.web_page})]}):""}),(0,r.jsxs)("p",{children:["Email: ",e.email]}),(0,r.jsxs)("p",{children:["Tipo: ",e.type]})]},e.oid))})]},e)):(0,r.jsx)("p",{children:"No se encontraron agentes."})})})]})]})}},269:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/admin/Desktop/Mclogsweb2.0/src/app/Agentes/page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/admin/Desktop/Mclogsweb2.0/src/app/Agentes/page.jsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[189,214],()=>s(4083));module.exports=r})();