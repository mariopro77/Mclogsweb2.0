(()=>{var e={};e.id=637,e.ids=[637],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9021:e=>{"use strict";e.exports=require("fs")},3873:e=>{"use strict";e.exports=require("path")},7811:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>c,tree:()=>u});var o=r(260),n=r(8203),s=r(5155),l=r.n(s),a=r(7292),i={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>a[e]);r.d(t,i);let u=["",{children:["Soporte",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2736)),"/Users/admin/Desktop/Mclogsweb2.0/src/app/Soporte/page.jsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,8180)),"/Users/admin/Desktop/Mclogsweb2.0/src/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/admin/Desktop/Mclogsweb2.0/src/app/Soporte/page.jsx"],p={require:r,loadChunk:()=>Promise.resolve()},c=new o.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/Soporte/page",pathname:"/Soporte",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},6083:(e,t,r)=>{Promise.resolve().then(r.bind(r,2736))},155:(e,t,r)=>{Promise.resolve().then(r.bind(r,8399))},6256:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}});let o=r(5488)._(r(568));function n(e,t){var r;let n={};"function"==typeof e&&(n.loader=e);let s={...n,...t};return(0,o.default)({...s,modules:null==(r=s.loadableGenerated)?void 0:r.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3400:(e,t)=>{"use strict";function r(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"encodeURIPath",{enumerable:!0,get:function(){return r}})},5771:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let o=r(4639);function n(e){let{reason:t,children:r}=e;throw new o.BailoutToCSRError(t)}},568:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let o=r(5512),n=r(8009),s=r(5771),l=r(6054);function a(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},u=function(e){let t={...i,...e},r=(0,n.lazy)(()=>t.loader().then(a)),u=t.loading;function d(e){let a=u?(0,o.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,i=!t.ssr||!!t.loading,d=i?n.Suspense:n.Fragment,p=t.ssr?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.PreloadChunks,{moduleIds:t.modules}),(0,o.jsx)(r,{...e})]}):(0,o.jsx)(s.BailoutToCSR,{reason:"next/dynamic",children:(0,o.jsx)(r,{...e})});return(0,o.jsx)(d,{...i?{fallback:a}:{},children:p})}return d.displayName="LoadableComponent",d}},6054:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadChunks",{enumerable:!0,get:function(){return a}});let o=r(5512),n=r(5740),s=r(9294),l=r(3400);function a(e){let{moduleIds:t}=e,r=s.workAsyncStorage.getStore();if(void 0===r)return null;let a=[];if(r.reactLoadableManifest&&t){let e=r.reactLoadableManifest;for(let r of t){if(!e[r])continue;let t=e[r].files;a.push(...t)}}return 0===a.length?null:(0,o.jsx)(o.Fragment,{children:a.map(e=>{let t=r.assetPrefix+"/_next/"+(0,l.encodeURIPath)(e);return e.endsWith(".css")?(0,o.jsx)("link",{precedence:"dynamic",href:t,rel:"stylesheet",as:"style"},e):((0,n.preload)(t,{as:"script",fetchPriority:"low"}),null)})})}},8399:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var o=r(5512),n=r(6256);let s=r.n(n)()(async()=>{},{loadableGenerated:{modules:["app/Soporte/page.jsx -> ../../Components/FormsSoporte"]},ssr:!1});function l(){return(0,o.jsx)("div",{className:"h-auto w-full",children:(0,o.jsx)(s,{})})}},2736:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});let o=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/admin/Desktop/Mclogsweb2.0/src/app/Soporte/page.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/admin/Desktop/Mclogsweb2.0/src/app/Soporte/page.jsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[625,214],()=>r(7811));module.exports=o})();