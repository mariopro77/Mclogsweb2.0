(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[948],{442:(e,l,t)=>{Promise.resolve().then(t.bind(t,6013))},6013:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>i});var s=t(5155),a=t(2115),r=t(3737);function i(){let[e,l]=(0,a.useState)([]),[t,i]=(0,a.useState)(""),[n,d]=(0,a.useState)([]),[,o]=(0,a.useState)(""),{t:c}=(0,r.Bd)("common");(0,a.useEffect)(()=>{(async()=>{try{let e=await fetch("https://support.consilialogistics.com/mclogs/agents"),t=await e.json();l(t),i("")}catch(e){console.error("Error fetching data:",e)}})()},[]),(0,a.useEffect)(()=>{d(e.filter(e=>""===t||e.continent===t))},[t,e]);let x=e=>{i(e)},m=[...new Set(n.map(e=>e.country.trimEnd()))];return(0,s.jsxs)("div",{className:"h-auto w-full font-Encode-Sans ",children:[(0,s.jsx)("div",{className:"flex flex-col h-auto w-full items-center gap-y-6 pt-20 overflow-hidden",children:(0,s.jsx)("div",{className:"flex justify-center items-center bg-center w-full h-40 md:h-80",style:{backgroundImage:"url(/Images/Agentes/introimg2.webp)",backgroundSize:"cover"},children:(0,s.jsxs)("div",{className:"flex flex-col text-center",children:[(0,s.jsx)("h1",{className:"text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold animate__animated animate__fadeInLeft",children:c("our_agents")}),(0,s.jsx)("p",{className:"text-white font-regular pt-4 px-2 animate__animated animate__fadeInRight",children:c("our_agents_description")})]})})}),(0,s.jsxs)("div",{className:"flex flex-col h-auto w-full pt-4 md:pt-16 pb-20 sm:pb-56 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40",children:[(0,s.jsxs)("div",{className:"flex flex-col w-full  h-auto gap-y-6 pb-16",children:[(0,s.jsx)("div",{className:"bg-white pt-4 w-full ",children:(0,s.jsx)("div",{className:"grid xl:grid-cols-7 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:grid-rows-3 md:grid-rows-3 lg:grid-rows-1 gap-y-2 md:gap-y-4 grid-rows-auto gap-x-6 w-full justify-items-center",children:["Asia","Oceania","Europa","\xc1frica","Norte Am\xe9rica","Centro Am\xe9rica","Sur Am\xe9rica"].map((e,l)=>(0,s.jsx)("button",{className:`hover:border-aureolin border-2 w-full h-auto p-2 rounded-md text-aureolin ${t===e?"bg-aureolin text-white border-0":""}`,onClick:()=>x(e),children:e},l))})}),(0,s.jsx)("div",{className:"rounded-md w-full h-10 border border-slate-400",children:(0,s.jsx)("input",{className:"h-full w-full rounded-md p-2 ",placeholder:"Buscar",onChange:l=>{let t=l.target.value.toLowerCase();o(t),d(e.filter(e=>[e.name.toLowerCase(),e.country.toLowerCase(),e.continent.toLowerCase()].join(" ").includes(t)))}})})]}),(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"flex flex-col w-auto h-auto gap-6",children:m.length>0?m.map(e=>(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"text-2xl font-semibold pb-6 text-blue",children:e}),(0,s.jsx)("div",{className:"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6",children:n.filter(l=>l.country.trimEnd()===e).map(e=>(0,s.jsxs)("div",{className:"bg-white shadow-md rounded-md p-4 mb-4 w-auto h-auto overflow-auto",children:[(0,s.jsx)("p",{className:"font-bold text-slate-600",children:e.name}),(0,s.jsxs)("p",{className:" font-semibold text-slate-400",children:["Ciudad: ",e.town]}),(0,s.jsx)("p",{children:0!==e.web_page.length?(0,s.jsxs)("span",{children:["Pagina: ",(0,s.jsx)("a",{href:e.web_page,className:"text-sky-600",children:e.web_page})]}):""}),(0,s.jsxs)("p",{children:["Email: ",e.email]}),(0,s.jsxs)("p",{children:["Tipo: ",e.type]})]},e.oid))})]},e)):(0,s.jsx)("p",{children:"No se encontraron agentes."})})})]})]})}}},e=>{var l=l=>e(e.s=l);e.O(0,[214,737,441,517,358],()=>l(442)),_N_E=e.O()}]);