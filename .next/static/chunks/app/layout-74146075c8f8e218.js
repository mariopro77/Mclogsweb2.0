(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{9058:(e,s,t)=>{Promise.resolve().then(t.bind(t,2445)),Promise.resolve().then(t.bind(t,9801)),Promise.resolve().then(t.t.bind(t,5786,23)),Promise.resolve().then(t.t.bind(t,6009,23))},2445:(e,s,t)=>{"use strict";t.d(s,{TrackingProvider:()=>a,f:()=>r});var l=t(5155),n=t(2115);let r=(0,n.createContext)(),a=e=>{let{children:s}=e,[t,a]=(0,n.useState)(""),[o,i]=(0,n.useState)("");return(0,l.jsx)(r.Provider,{value:{trackSearch:t,setTrackSearch:a,shipName:o,setShipName:i},children:s})}},9801:(e,s,t)=>{"use strict";t.d(s,{default:()=>v});var l=t(5155),n=t(2115),r=t(6046),a=t(9214),o=t(3768),i=t(3479);o.Ay.use(i.A).use(a.r9).init({backend:{loadPath:"/locales/{{lng}}/common.json"},fallbackLng:"es",interpolation:{escapeValue:!1},react:{useSuspense:!1}});let c=o.Ay;var d=t(7396),x=t(5683),m=t(3761),h=t(3737);let p=[{code:"es",label:"Espa\xf1ol",flag:"\uD83C\uDDEA\uD83C\uDDF8"},{code:"en",label:"English",flag:"\uD83C\uDDFA\uD83C\uDDF8"}],u=()=>{let{i18n:e}=(0,h.Bd)("common"),[s,t]=(0,n.useState)(!1),[a,o]=(0,n.useState)(null),i=(0,n.useRef)(null);(0,r.useRouter)(),(0,n.useEffect)(()=>{o(p.find(s=>s.code===e.language)||p[0])},[e.language]);let c=s=>{o(s),e.changeLanguage(s.code),t(!1)};return(0,n.useEffect)(()=>{let e=e=>{i.current&&!i.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),(0,l.jsxs)("div",{className:"relative inline-block text-left",ref:i,children:[(0,l.jsx)("button",{onClick:()=>t(e=>!e),className:"inline-flex items-center justify-center px-4 text-sm font-medium text-gray-700 bg-transparent focus:outline-none",children:(0,l.jsx)("span",{className:"mr-2 text-xl",children:a?.flag||"\uD83C\uDDEA\uD83C\uDDF8"})}),s&&(0,l.jsx)("div",{className:"lg:absolute right-0 z-10 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",children:(0,l.jsx)("div",{className:"py-1",children:p.map(e=>(0,l.jsxs)("button",{onClick:()=>c(e),className:`${a?.code===e.code?"bg-gray-100 text-gray-900":"text-gray-700"} flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`,role:"menuitem",children:[(0,l.jsx)("span",{className:"mr-3 text-xl",children:e.flag}),e.label]},e.code))})})]})};var g=t(5565);function f(e){let{activeLink:s,setActiveLink:t}=e,[o,i]=(0,n.useState)(0),[c,h]=(0,n.useState)(!1),[p,f]=(0,n.useState)(!1),j="/"===(0,r.usePathname)(),{t:w}=(0,a.Bd)("common");(0,n.useEffect)(()=>{if(j){let e=()=>{i(window.scrollY)};return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}}},[j]);let v=j?o>=100?"top-0 w-full fixed z-50 h-20 bg-white backdrop-blur-md px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 text-black ":`top-0 w-full fixed z-50 h-20 bg-slate/70 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 ${c?"bg-white text-black":"lg:text-white text-white"}`:"top-0 w-full fixed z-50 h-20 bg-white px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40 text-black",k=[{name:w("us"),link:"/Nosotros"},{name:w("services"),link:"/Servicios"},{name:w("agents"),link:"/Agentes"},{name:w("Projects"),link:"/Proyectos"},{name:w("centro_de_ayuda"),link:"/Centrodeayuda"},{name:w("news"),link:"/Noticias"},{name:w("myaccount"),link:"https://my.mclogs.com/auth/login"}];return(0,l.jsxs)("header",{className:v,children:[(0,l.jsxs)("div",{className:"flex items-center justify-between h-full",children:[(0,l.jsx)("div",{className:"flex-none h-full w-auto items-center justify-center pt-2",children:(0,l.jsx)(d.default,{href:"/",onClick:()=>t("/"),className:"text-3xl",children:(0,l.jsx)(g.default,{className:"pt-2 h-auto w-32",src:j?o>=100?"/Images/Logos/original.png":"/Images/Logos/White5.webp":"/Images/Logos/original.png",alt:"Logo",width:500,height:300})})}),(0,l.jsx)("div",{className:"flex text-2xl cursor-pointer xl:hidden",onClick:()=>{h(!c)},children:(0,l.jsx)("span",{children:c?(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})}):(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})})}),(0,l.jsx)("div",{className:"hidden xl:flex items-center justify-center",children:(0,l.jsxs)("ul",{className:"flex space-x-4 list-none",children:[(0,l.jsxs)("li",{className:"relative",onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[(0,l.jsxs)("div",{className:"cursor-pointer flex justify-center items-center py-2",children:[(0,l.jsx)("p",{children:w("us")}),(0,l.jsx)("svg",{className:"ml-1 h-4 w-4",fill:"none",stroke:"currentColor",strokeWidth:2,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})})]}),(0,l.jsx)(x.N,{children:p&&(0,l.jsx)(m.P.ul,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg",children:k.slice(0,5).map(e=>(0,l.jsx)("li",{children:e.link.startsWith("/")?(0,l.jsx)(d.default,{href:e.link,className:`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 ${s===e.link?"text-oldgold":""}`,onClick:()=>t(e.link),children:e.name}):(0,l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 ${s===e.link?"text-oldgold":""}`,children:e.name})},e.name))})})]}),k.slice(5).map(e=>(0,l.jsx)("li",{children:e.link.startsWith("/")?(0,l.jsx)(d.default,{href:e.link,className:`xl:hover:bg-transparent hover:bg-gray-100 flex py-2 px-4 items-center rounded-md border-gray-300 cursor-pointer ${s===e.link?"text-oldgold":""}`,onClick:()=>t(e.link),children:e.name}):(0,l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:`xl:hover:bg-transparent hover:bg-gray-100 flex py-2 px-4 items-center rounded-md border-gray-300 cursor-pointer ${s===e.link?"text-oldgold":""}`,children:e.name})},e.name)),(0,l.jsx)("li",{className:"flex items-center",children:(0,l.jsx)(u,{})})]})}),(0,l.jsx)(x.N,{children:c&&(0,l.jsxs)(m.P.ul,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"flex-none z-20 top-20 left-0 w-full xl:w-auto xl:flex xl:items-center xl:pb-0 xl:pl-0 py-8 xl:py-0 px-10 sm:px-10 md:px-20 xl:px-0 2xl:px-0 absolute bg-white xl:bg-transparent text-black text-2xl font-medium list-none",children:[k.map(e=>(0,l.jsx)("li",{children:e.link.startsWith("/")?(0,l.jsx)(d.default,{href:e.link,className:`xl:hover:bg-transparent hover:bg-gray-100 flex py-2 px-4 items-center rounded-md border-gray-300 cursor-pointer ${s===e.link?"text-oldgold":""}`,onClick:()=>{t(e.link),h(!1)},children:e.name}):(0,l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:`xl:hover:bg-transparent hover:bg-gray-100 flex py-2 px-4 items-center rounded-md border-gray-300 cursor-pointer ${s===e.link?"text-oldgold":""}`,children:e.name})},e.name)),(0,l.jsx)("li",{children:(0,l.jsx)(u,{})})]})})]}),(0,l.jsx)("div",{children:(0,l.jsx)("hr",{className:j?c?"hidden":o>=100?"hidden":"bg-white h-0.2 w-full":"hidden"})})]})}function j(){let{i18n:e}=(0,h.Bd)("common"),{t:s}=(0,h.Bd)("common"),t=(0,r.useRouter)(),a=new Date().getFullYear(),o=[{name:s("us"),link:"/Nosotros"},{name:s("services"),link:"/Servicios"},{name:s("agents"),link:"/Agentes"},{name:s("news"),link:"/Noticias"},{name:s("tracking"),link:"/Rastreo"},{name:s("myaccount"),link:"https://my.mclogs.com/auth/login"}],i=[{name:s("security_policy"),link:"/PrivacidadySeguridad"},{name:s("terminos_de_uso"),link:"/Terminos"},{name:s("centro_de_ayuda"),link:"/Centrodeayuda"}],[c,x]=(0,n.useState)(null),m=s=>{x(s),e.changeLanguage(s),t.refresh()};return(0,l.jsxs)("footer",{className:"px-10 sm:px-10 md:px-20 lg:px-30 2xl:px-40",children:[(0,l.jsx)("hr",{className:"bg-slate-50/50"}),(0,l.jsx)("div",{className:"max-w-screen-2xl py-12 mx-auto",children:(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(d.default,{href:"/",children:(0,l.jsx)(g.default,{className:"w-52",src:"/Images/Logos/logo.png",alt:"MC Logo",width:100,height:52})}),(0,l.jsxs)("div",{className:"mt-4 grid grid-cols-4 gap-y-4 text-gray-600",children:[(0,l.jsxs)("a",{className:"hover:opacity-75",href:"https://www.google.com/maps/place/M.C.+Logistics+SRL/",target:"_blank",rel:"noreferrer",children:[(0,l.jsx)("span",{className:"sr-only",children:"Location"}),(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"h-6 w-6 text-gray-500",children:[(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"})]})]}),(0,l.jsxs)("a",{className:"hover:opacity-75",href:"tel:8095653265",children:[(0,l.jsx)("span",{className:"sr-only",children:" WhatsApp "}),(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"h-6 w-6 text-gray-500",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"})})]}),(0,l.jsxs)("a",{className:"hover:opacity-75",href:"mailto:info@mclogs.com",children:[(0,l.jsx)("span",{className:"sr-only",children:" Email "}),(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"h-6 w-6 text-gray-500",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"})})]}),(0,l.jsx)("a",{className:"hover:opacity-75",href:"https://wa.me/18095653265",children:(0,l.jsx)(g.default,{src:"/Icons/Whatsapp.png",alt:"WhatsApp",width:20,height:20})}),(0,l.jsxs)("a",{href:"https://play.google.com/store/apps/details?id=com.mclogs.www",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 hover:opacity-75 col-span-2",children:[(0,l.jsx)(g.default,{className:"h-5 w-5",src:"/Icons/Android.png",alt:"Google Play",width:20,height:20}),(0,l.jsx)("p",{className:"font-normal text-sm text-gray-500 hover:text-gray-400 pt-1",children:"Google Play"})]}),(0,l.jsxs)("a",{href:"https://apps.apple.com/do/app/mclogs/id1504701375",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 hover:opacity-75 col-span-2",children:[(0,l.jsx)(g.default,{className:"h-5 w-5",src:"/Icons/Apple.png",alt:"Apple Store",width:20,height:20}),(0,l.jsx)("p",{className:"font-normal text-sm text-gray-500 hover:text-gray-400 pt-1",children:"Apple Store"})]})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"font-medium text-lg",children:s("footer_acces")}),(0,l.jsx)("nav",{className:"grid grid-cols-2 mt-4 gap-y-2 text-sm text-gray-500",children:o.map((e,s)=>(0,l.jsx)(d.default,{href:e.link,children:e.name},s))})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"font-medium text-lg",children:s("footer_links")}),(0,l.jsx)("nav",{className:"flex flex-col mt-4 space-y-2 text-sm text-gray-500",children:i.map((e,s)=>(0,l.jsx)(d.default,{href:e.link,children:e.name},s))})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"font-medium text-lg",children:s("contact_us_open")}),(0,l.jsxs)("nav",{className:"flex flex-col mt-4 text-sm text-gray-500",children:[(0,l.jsx)("p",{className:"text-md text-black opacity-70 font-medium",children:s("offices")}),(0,l.jsx)("p",{className:"text-sm pt-1",children:s("contact_us_hours1")}),(0,l.jsx)("p",{className:"text-sm pt-1",children:s("contact_us_hours2")})]})]})]})}),(0,l.jsx)("div",{children:(0,l.jsx)("hr",{className:" bg-slate-200 w-full"})}),(0,l.jsxs)("div",{className:"flex justify-between py-6 text-center",children:[(0,l.jsxs)("p",{className:"text-xs text-gray-500",children:[s("rights_first_half")," ",a," ",s("rights_second_half")]}),(0,l.jsxs)("div",{className:"language-switcher text-xs",children:[(0,l.jsx)("button",{onClick:()=>m("en"),className:"px-4 text-gray-500",children:"English"}),(0,l.jsx)("button",{onClick:()=>m("es"),className:"px-4  text-gray-500",children:"Espa\xf1ol"})]})]})]})}function w(){let[e,s]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=()=>{s(window.scrollY)};return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e)}},[]),(0,l.jsx)("div",{className:"fixed bottom-10 lg:bottom-24 mr-1 right-8 z-40 hidden lg:block",children:(0,l.jsx)("button",{className:`h-10 w-10  rounded-full shadow-xl ${e>=200?"h-10 w-10 p-2 bg-bluemunsell/80 hover:bg-cyan-600":"hidden"}`,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-full w-full text-white",children:[(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 18.75 7.5-7.5 7.5 7.5"}),(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 7.5-7.5 7.5 7.5"})]})})})}function v(e){let{children:s}=e,[t,o]=(0,n.useState)(""),i=(0,r.useRouter)();return(0,n.useEffect)(()=>{let e=()=>window.scrollTo(0,0);return i.events?.on("routeChangeComplete",e),()=>{i.events?.off("routeChangeComplete",e)}},[i]),(0,n.useEffect)(()=>{let e=document.createElement("script");return e.src="https://cdn.botpress.cloud/webchat/v2.2/inject.js",e.async=!0,e.onload=()=>{let e=document.createElement("script");return e.src="https://files.bpcontent.cloud/2024/11/27/16/20241127160310-731MLXW9.js",e.async=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]),(0,l.jsxs)(a.xC,{i18n:c,children:[(0,l.jsx)(f,{activeLink:t,setActiveLink:o}),s,(0,l.jsx)(w,{}),(0,l.jsx)(j,{setActiveLink:o})]})}t(6009),t(5786)},5786:()=>{},6009:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[149,214,737,970,761,396,684,441,517,358],()=>s(9058)),_N_E=e.O()}]);