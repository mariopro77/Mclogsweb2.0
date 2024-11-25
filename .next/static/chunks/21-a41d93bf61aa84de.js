(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21],{5647:(e,t,o)=>{var r="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==o.g&&o.g,n=function(){function e(){this.fetch=!1,this.DOMException=r.DOMException}return e.prototype=r,new e}();!function(e){!function(t){var o=void 0!==e&&e||"undefined"!=typeof self&&self||void 0!==o&&o,r={searchParams:"URLSearchParams"in o,iterable:"Symbol"in o&&"iterator"in Symbol,blob:"FileReader"in o&&"Blob"in o&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in o,arrayBuffer:"ArrayBuffer"in o};if(r.arrayBuffer)var n=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(e){return e&&n.indexOf(Object.prototype.toString.call(e))>-1};function s(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function a(e){return"string"!=typeof e&&(e=String(e)),e}function u(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r.iterable&&(t[Symbol.iterator]=function(){return t}),t}function c(e){this.map={},e instanceof c?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function l(e){if(e.bodyUsed)return Promise.reject(TypeError("Already read"));e.bodyUsed=!0}function f(e){return new Promise(function(t,o){e.onload=function(){t(e.result)},e.onerror=function(){o(e.error)}})}function d(e){var t=new FileReader,o=f(t);return t.readAsArrayBuffer(e),o}function h(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(e){if(this.bodyUsed=this.bodyUsed,this._bodyInit=e,e){if("string"==typeof e)this._bodyText=e;else if(r.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(r.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else{var t;r.arrayBuffer&&r.blob&&(t=e)&&DataView.prototype.isPrototypeOf(t)?(this._bodyArrayBuffer=h(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||i(e))?this._bodyArrayBuffer=h(e):this._bodyText=e=Object.prototype.toString.call(e)}}else this._bodyText="";!this.headers.get("content-type")&&("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var e=l(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(!this._bodyFormData)return Promise.resolve(new Blob([this._bodyText]));throw Error("could not read FormData body as blob")},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)):this.blob().then(d)}),this.text=function(){var e,t,o,r=l(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,o=f(t=new FileReader),t.readAsText(e),o;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),o=Array(t.length),r=0;r<t.length;r++)o[r]=String.fromCharCode(t[r]);return o.join("")}(this._bodyArrayBuffer));if(!this._bodyFormData)return Promise.resolve(this._bodyText);throw Error("could not read FormData body as text")},r.formData&&(this.formData=function(){return this.text().then(b)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(e,t){e=s(e),t=a(t);var o=this.map[e];this.map[e]=o?o+", "+t:t},c.prototype.delete=function(e){delete this.map[s(e)]},c.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},c.prototype.set=function(e,t){this.map[s(e)]=a(t)},c.prototype.forEach=function(e,t){for(var o in this.map)this.map.hasOwnProperty(o)&&e.call(t,this.map[o],o,this)},c.prototype.keys=function(){var e=[];return this.forEach(function(t,o){e.push(o)}),u(e)},c.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),u(e)},c.prototype.entries=function(){var e=[];return this.forEach(function(t,o){e.push([o,t])}),u(e)},r.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var y=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(e,t){if(!(this instanceof m))throw TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var o,r,n=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new c(t.headers)),this.method=(r=(o=t.method||this.method||"GET").toUpperCase(),y.indexOf(r)>-1?r:o),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),("GET"===this.method||"HEAD"===this.method)&&("no-store"===t.cache||"no-cache"===t.cache)){var i=/([?&])_=[^&]*/;i.test(this.url)?this.url=this.url.replace(i,"$1_="+new Date().getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+new Date().getTime()}}function b(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var o=e.split("="),r=o.shift().replace(/\+/g," "),n=o.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(n))}}),t}function g(e,t){if(!(this instanceof g))throw TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new c(t.headers),this.url=t.url||"",this._initBody(e)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},p.call(m.prototype),p.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},g.error=function(){var e=new g(null,{status:0,statusText:""});return e.type="error",e};var v=[301,302,303,307,308];g.redirect=function(e,t){if(-1===v.indexOf(t))throw RangeError("Invalid status code");return new g(null,{status:t,headers:{location:e}})},t.DOMException=o.DOMException;try{new t.DOMException}catch(e){t.DOMException=function(e,t){this.message=e,this.name=t;var o=Error(e);this.stack=o.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function w(e,n){return new Promise(function(i,s){var u=new m(e,n);if(u.signal&&u.signal.aborted)return s(new t.DOMException("Aborted","AbortError"));var l=new XMLHttpRequest;function f(){l.abort()}l.onload=function(){var e,t,o={status:l.status,statusText:l.statusText,headers:(e=l.getAllResponseHeaders()||"",t=new c,e.replace(/\r?\n[\t ]+/g," ").split("\r").map(function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e}).forEach(function(e){var o=e.split(":"),r=o.shift().trim();if(r){var n=o.join(":").trim();t.append(r,n)}}),t)};o.url="responseURL"in l?l.responseURL:o.headers.get("X-Request-URL");var r="response"in l?l.response:l.responseText;setTimeout(function(){i(new g(r,o))},0)},l.onerror=function(){setTimeout(function(){s(TypeError("Network request failed"))},0)},l.ontimeout=function(){setTimeout(function(){s(TypeError("Network request failed"))},0)},l.onabort=function(){setTimeout(function(){s(new t.DOMException("Aborted","AbortError"))},0)},l.open(u.method,function(e){try{return""===e&&o.location.href?o.location.href:e}catch(t){return e}}(u.url),!0),"include"===u.credentials?l.withCredentials=!0:"omit"===u.credentials&&(l.withCredentials=!1),"responseType"in l&&(r.blob?l.responseType="blob":r.arrayBuffer&&u.headers.get("Content-Type")&&-1!==u.headers.get("Content-Type").indexOf("application/octet-stream")&&(l.responseType="arraybuffer")),!n||"object"!=typeof n.headers||n.headers instanceof c?u.headers.forEach(function(e,t){l.setRequestHeader(t,e)}):Object.getOwnPropertyNames(n.headers).forEach(function(e){l.setRequestHeader(e,a(n.headers[e]))}),u.signal&&(u.signal.addEventListener("abort",f),l.onreadystatechange=function(){4===l.readyState&&u.signal.removeEventListener("abort",f)}),l.send(void 0===u._bodyInit?null:u._bodyInit)})}w.polyfill=!0,o.fetch||(o.fetch=w,o.Headers=c,o.Request=m,o.Response=g),t.Headers=c,t.Request=m,t.Response=g,t.fetch=w}({})}(n),n.fetch.ponyfill=!0,delete n.fetch.polyfill;var i=r.fetch?r:n;(t=i.fetch).default=i.fetch,t.fetch=i.fetch,t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response,e.exports=t},6046:(e,t,o)=>{"use strict";var r=o(6658);o.o(r,"usePathname")&&o.d(t,{usePathname:function(){return r.usePathname}}),o.o(r,"useRouter")&&o.d(t,{useRouter:function(){return r.useRouter}})},6921:(e,t,o)=>{var r;if("function"==typeof fetch&&(r=void 0!==o.g&&o.g.fetch?o.g.fetch:"undefined"!=typeof window&&window.fetch?window.fetch:fetch),"undefined"==typeof window){var n=r||o(5647);n.default&&(n=n.default),t.default=n,e.exports=t.default}},5683:(e,t,o)=>{"use strict";o.d(t,{N:()=>b});var r=o(5155),n=o(2115),i=o(9656),s=o(9234),a=o(7249);class u extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function c(e){let{children:t,isPresent:o}=e,i=(0,n.useId)(),s=(0,n.useRef)(null),c=(0,n.useRef)({width:0,height:0,top:0,left:0}),{nonce:l}=(0,n.useContext)(a.Q);return(0,n.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:n}=c.current;if(o||!s.current||!e||!t)return;s.current.dataset.motionPopId=i;let a=document.createElement("style");return l&&(a.nonce=l),document.head.appendChild(a),a.sheet&&a.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            top: ${r}px !important;
            left: ${n}px !important;
          }
        `),()=>{document.head.removeChild(a)}},[o]),(0,r.jsx)(u,{isPresent:o,childRef:s,sizeRef:c,children:n.cloneElement(t,{ref:s})})}let l=e=>{let{children:t,initial:o,isPresent:a,onExitComplete:u,custom:l,presenceAffectsLayout:d,mode:h}=e,p=(0,s.M)(f),y=(0,n.useId)(),m=(0,n.useCallback)(e=>{for(let t of(p.set(e,!0),p.values()))if(!t)return;u&&u()},[p,u]),b=(0,n.useMemo)(()=>({id:y,initial:o,isPresent:a,custom:l,onExitComplete:m,register:e=>(p.set(e,!1),()=>p.delete(e))}),d?[Math.random(),m]:[a,m]);return(0,n.useMemo)(()=>{p.forEach((e,t)=>p.set(t,!1))},[a]),n.useEffect(()=>{a||p.size||!u||u()},[a]),"popLayout"===h&&(t=(0,r.jsx)(c,{isPresent:a,children:t})),(0,r.jsx)(i.t.Provider,{value:b,children:t})};function f(){return new Map}var d=o(4710),h=o(5749);let p=e=>e.key||"";function y(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}var m=o(5403);let b=e=>{let{children:t,exitBeforeEnter:o,custom:i,initial:a=!0,onExitComplete:u,presenceAffectsLayout:c=!0,mode:f="sync"}=e;(0,h.V)(!o,"Replace exitBeforeEnter with mode='wait'");let b=(0,n.useMemo)(()=>y(t),[t]),g=b.map(p),v=(0,n.useRef)(!0),w=(0,n.useRef)(b),O=(0,s.M)(()=>new Map),[x,E]=(0,n.useState)(b),[P,S]=(0,n.useState)(b);(0,m.E)(()=>{v.current=!1,w.current=b;for(let e=0;e<P.length;e++){let t=p(P[e]);g.includes(t)?O.delete(t):!0!==O.get(t)&&O.set(t,!1)}},[P,g.length,g.join("-")]);let j=[];if(b!==x){let e=[...b];for(let t=0;t<P.length;t++){let o=P[t],r=p(o);g.includes(r)||(e.splice(t,0,o),j.push(o))}"wait"===f&&j.length&&(e=j),S(y(e)),E(b);return}let{forceRender:T}=(0,n.useContext)(d.L);return(0,r.jsx)(r.Fragment,{children:P.map(e=>{let t=p(e),o=b===P||g.includes(t);return(0,r.jsx)(l,{isPresent:o,initial:(!v.current||!!a)&&void 0,custom:o?void 0:i,presenceAffectsLayout:c,mode:f,onExitComplete:o?void 0:()=>{if(!O.has(t))return;O.set(t,!0);let e=!0;O.forEach(t=>{t||(e=!1)}),e&&(null==T||T(),S(w.current),u&&u())},children:e},t)})})}},7570:(e,t,o)=>{"use strict";o.d(t,{A:()=>w});let{slice:r,forEach:n}=[],i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,s=(e,t,o)=>{let r=o||{};r.path=r.path||"/";let n=encodeURIComponent(t),s=`${e}=${n}`;if(r.maxAge>0){let e=r.maxAge-0;if(Number.isNaN(e))throw Error("maxAge should be a Number");s+=`; Max-Age=${Math.floor(e)}`}if(r.domain){if(!i.test(r.domain))throw TypeError("option domain is invalid");s+=`; Domain=${r.domain}`}if(r.path){if(!i.test(r.path))throw TypeError("option path is invalid");s+=`; Path=${r.path}`}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw TypeError("option expires is invalid");s+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(s+="; HttpOnly"),r.secure&&(s+="; Secure"),r.sameSite)switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return s},a={create(e,t,o,r){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};o&&(n.expires=new Date,n.expires.setTime(n.expires.getTime()+6e4*o)),r&&(n.domain=r),document.cookie=s(e,encodeURIComponent(t),n)},read(e){let t=`${e}=`,o=document.cookie.split(";");for(let e=0;e<o.length;e++){let r=o[e];for(;" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null},remove(e){this.create(e,"",-1)}};var u={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&"undefined"!=typeof document)return a.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:o,cookieMinutes:r,cookieDomain:n,cookieOptions:i}=t;o&&"undefined"!=typeof document&&a.create(o,e,r,n,i)}},c={name:"querystring",lookup(e){let t,{lookupQuerystring:o}=e;if("undefined"!=typeof window){let{search:e}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(e=window.location.hash.substring(window.location.hash.indexOf("?")));let r=e.substring(1).split("&");for(let e=0;e<r.length;e++){let n=r[e].indexOf("=");n>0&&r[e].substring(0,n)===o&&(t=r[e].substring(n+1))}}return t}};let l=null,f=()=>{if(null!==l)return l;try{l="undefined"!==window&&null!==window.localStorage;let e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(e){l=!1}return l};var d={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&f())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:o}=t;o&&f()&&window.localStorage.setItem(o,e)}};let h=null,p=()=>{if(null!==h)return h;try{h="undefined"!==window&&null!==window.sessionStorage;let e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(e){h=!1}return h};var y={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&p())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:o}=t;o&&p()&&window.sessionStorage.setItem(o,e)}},m={name:"navigator",lookup(e){let t=[];if("undefined"!=typeof navigator){let{languages:e,userLanguage:o,language:r}=navigator;if(e)for(let o=0;o<e.length;o++)t.push(e[o]);o&&t.push(o),r&&t.push(r)}return t.length>0?t:void 0}},b={name:"htmlTag",lookup(e){let t,{htmlTag:o}=e,r=o||("undefined"!=typeof document?document.documentElement:null);return r&&"function"==typeof r.getAttribute&&(t=r.getAttribute("lang")),t}},g={name:"path",lookup(e){let{lookupFromPathIndex:t}=e;if("undefined"==typeof window)return;let o=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(Array.isArray(o))return o["number"==typeof t?t:0]?.replace("/","")}},v={name:"subdomain",lookup(e){let{lookupFromSubdomainIndex:t}=e,o="undefined"!=typeof window&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(o)return o["number"==typeof t?t+1:1]}};class w{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=function(e){return n.call(r.call(arguments,1),t=>{if(t)for(let o in t)void 0===e[o]&&(e[o]=t[o])}),e}(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}),"string"==typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=e=>e.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(u),this.addDetector(c),this.addDetector(d),this.addDetector(y),this.addDetector(m),this.addDetector(b),this.addDetector(g),this.addDetector(v)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){e||(e=this.options.order);let t=[];return(e.forEach(e=>{if(this.detectors[e]){let o=this.detectors[e].lookup(this.options);o&&"string"==typeof o&&(o=[o]),o&&(t=t.concat(o))}}),t=t.map(e=>this.options.convertDetectedLanguage(e)),this.services.languageUtils.getBestMatchFromCodes)?t:t.length>0?t[0]:null}cacheUserLanguage(e,t){t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(t=>{this.detectors[t]&&this.detectors[t].cacheUserLanguage(e,this.options)}))}}w.type="languageDetector"},3479:(e,t,o)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.d(t,{A:()=>j});var n,i,s,a=[];function u(){return"function"==typeof XMLHttpRequest||("undefined"==typeof XMLHttpRequest?"undefined":r(XMLHttpRequest))==="object"}a.forEach,a.slice;var c=o(6921),l=o.t(c,2);function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?f(Object(o),!0).forEach(function(t){var r,n;r=t,n=o[t],(r=function(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=h(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==h(t)?t:t+""}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}"function"==typeof fetch&&(n="undefined"!=typeof global&&global.fetch?global.fetch:"undefined"!=typeof window&&window.fetch?window.fetch:fetch),u()&&("undefined"!=typeof global&&global.XMLHttpRequest?i=global.XMLHttpRequest:"undefined"!=typeof window&&window.XMLHttpRequest&&(i=window.XMLHttpRequest)),"function"==typeof ActiveXObject&&("undefined"!=typeof global&&global.ActiveXObject?s=global.ActiveXObject:"undefined"!=typeof window&&window.ActiveXObject&&(s=window.ActiveXObject)),n||!l||i||s||(n=c||l),"function"!=typeof n&&(n=void 0);var p=function(e,t){if(t&&"object"===h(t)){var o="";for(var r in t)o+="&"+encodeURIComponent(r)+"="+encodeURIComponent(t[r]);if(!o)return e;e=e+(-1!==e.indexOf("?")?"&":"?")+o.slice(1)}return e},y=function(e,t,o,r){var i=function(e){if(!e.ok)return o(e.statusText||"Error",{status:e.status});e.text().then(function(t){o(null,{status:e.status,data:t})}).catch(o)};if(r){var s=r(e,t);if(s instanceof Promise){s.then(i).catch(o);return}}"function"==typeof fetch?fetch(e,t).then(i).catch(o):n(e,t).then(i).catch(o)},m=!1,b=function(e,t,o,r){e.queryStringParams&&(t=p(t,e.queryStringParams));var n=d({},"function"==typeof e.customHeaders?e.customHeaders():e.customHeaders);"undefined"==typeof window&&"undefined"!=typeof global&&void 0!==global.process&&global.process.versions&&global.process.versions.node&&(n["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),o&&(n["Content-Type"]="application/json");var i="function"==typeof e.requestOptions?e.requestOptions(o):e.requestOptions,s=d({method:o?"POST":"GET",body:o?e.stringify(o):void 0,headers:n},m?{}:i),a="function"==typeof e.alternateFetch&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{y(t,s,r,a)}catch(e){if(!i||0===Object.keys(i).length||!e.message||0>e.message.indexOf("not implemented"))return r(e);try{Object.keys(i).forEach(function(e){delete s[e]}),y(t,s,r,a),m=!0}catch(e){r(e)}}},g=function(e,t,o,r){o&&"object"===h(o)&&(o=p("",o).slice(1)),e.queryStringParams&&(t=p(t,e.queryStringParams));try{(n=i?new i:new s("MSXML2.XMLHTTP.3.0")).open(o?"POST":"GET",t,1),e.crossDomain||n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.withCredentials=!!e.withCredentials,o&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.overrideMimeType&&n.overrideMimeType("application/json");var n,a=e.customHeaders;if(a="function"==typeof a?a():a)for(var u in a)n.setRequestHeader(u,a[u]);n.onreadystatechange=function(){n.readyState>3&&r(n.status>=400?n.statusText:null,{status:n.status,data:n.responseText})},n.send(o)}catch(e){console&&console.log(e)}};let v=function(e,t,o,r){return("function"==typeof o&&(r=o,o=void 0),r=r||function(){},n&&0!==t.indexOf("file:"))?b(e,t,o,r):u()||"function"==typeof ActiveXObject?g(e,t,o,r):void r(Error("No fetch and no xhr implementation found!"))};function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function x(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?O(Object(o),!0).forEach(function(t){E(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):O(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function E(e,t,o){return(t=P(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function P(e){var t=function(e,t){if("object"!=w(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!=w(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==w(t)?t:t+""}var S=function(){var e,t;return e=function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,e),this.services=t,this.options=o,this.allOptions=r,this.type="backend",this.init(t,o,r)},t=[{key:"init",value:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.services=e,this.options=x(x(x({},{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(e){return JSON.parse(e)},stringify:JSON.stringify,parsePayload:function(e,t,o){return E({},t,o||"")},parseLoadPayload:function(e,t){},request:v,reloadInterval:"undefined"==typeof window&&36e5,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}),this.options||{}),o),this.allOptions=r,this.services&&this.options.reloadInterval){var n=setInterval(function(){return t.reload()},this.options.reloadInterval);"object"===w(n)&&"function"==typeof n.unref&&n.unref()}}},{key:"readMulti",value:function(e,t,o){this._readAny(e,e,t,t,o)}},{key:"read",value:function(e,t,o){this._readAny([e],e,[t],t,o)}},{key:"_readAny",value:function(e,t,o,r,n){var i,s,a=this,u=this.options.loadPath;"function"==typeof this.options.loadPath&&(u=this.options.loadPath(e,o)),(u=(s=i=u)&&"function"==typeof s.then?i:Promise.resolve(i)).then(function(i){if(!i)return n(null,{});var s=a.services.interpolator.interpolate(i,{lng:e.join("+"),ns:o.join("+")});a.loadUrl(s,n,t,r)})}},{key:"loadUrl",value:function(e,t,o,r){var n=this,i=this.options.parseLoadPayload("string"==typeof o?[o]:o,"string"==typeof r?[r]:r);this.options.request(this.options,e,i,function(i,s){if(s&&(s.status>=500&&s.status<600||!s.status))return t("failed loading "+e+"; status code: "+s.status,!0);if(s&&s.status>=400&&s.status<500)return t("failed loading "+e+"; status code: "+s.status,!1);if(!s&&i&&i.message){var a,u,c=i.message.toLowerCase();if(["failed","fetch","network","load"].find(function(e){return c.indexOf(e)>-1}))return t("failed loading "+e+": "+i.message,!0)}if(i)return t(i,!1);try{a="string"==typeof s.data?n.options.parse(s.data,o,r):s.data}catch(t){u="failed parsing "+e+" to json"}if(u)return t(u,!1);t(null,a)})}},{key:"create",value:function(e,t,o,r,n){var i=this;if(this.options.addPath){"string"==typeof e&&(e=[e]);var s=this.options.parsePayload(t,o,r),a=0,u=[],c=[];e.forEach(function(o){var r=i.options.addPath;"function"==typeof i.options.addPath&&(r=i.options.addPath(o,t));var l=i.services.interpolator.interpolate(r,{lng:o,ns:t});i.options.request(i.options,l,s,function(t,o){a+=1,u.push(t),c.push(o),a===e.length&&"function"==typeof n&&n(u,c)})})}}},{key:"reload",value:function(){var e=this,t=this.services,o=t.backendConnector,r=t.languageUtils,n=t.logger,i=o.language;if(!i||"cimode"!==i.toLowerCase()){var s=[],a=function(e){r.toResolveHierarchy(e).forEach(function(e){0>s.indexOf(e)&&s.push(e)})};a(i),this.allOptions.preload&&this.allOptions.preload.forEach(function(e){return a(e)}),s.forEach(function(t){e.allOptions.ns.forEach(function(e){o.read(t,e,"read",null,null,function(r,i){r&&n.warn("loading namespace ".concat(e," for language ").concat(t," failed"),r),!r&&i&&n.log("loaded namespace ".concat(e," for language ").concat(t),i),o.loaded("".concat(t,"|").concat(e),r,i)})})})}}}],function(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}();S.type="backend";let j=S}}]);