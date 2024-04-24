"use strict";(self.webpackChunkfrontend_react=self.webpackChunkfrontend_react||[]).push([[16],{16:(t,e,n)=>{n.r(e),n.d(e,{encodeIntoResult:()=>d,stegaEncodeSourceMap:()=>b,stegaEncodeSourceMap$1:()=>w});var r=n(604);const o=/_key\s*==\s*['"](.*)['"]/;function c(t){if(!Array.isArray(t))throw new Error("Path is not an array");return t.reduce(((t,e,n)=>{const r=typeof e;if("number"===r)return"".concat(t,"[").concat(e,"]");if("string"===r){const r=0===n?"":".";return"".concat(t).concat(r).concat(e)}if(function(t){return"string"===typeof t?o.test(t.trim()):"object"===typeof t&&"_key"in t}(e)&&e._key)return"".concat(t,'[_key=="').concat(e._key,'"]');if(Array.isArray(e)){const[n,r]=e;return"".concat(t,"[").concat(n,":").concat(r,"]")}throw new Error("Unsupported path segment `".concat(JSON.stringify(e),"`"))}),"")}const a={"\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","'":"\\'","\\":"\\\\"},s={"\\f":"\f","\\n":"\n","\\r":"\r","\\t":"\t","\\'":"'","\\\\":"\\"};function i(t){const e=[],n=/\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;let r;for(;null!==(r=n.exec(t));)if(void 0===r[1])if(void 0===r[2])if(void 0===r[3]);else{const t=r[3].replace(/\\(\\')/g,(t=>s[t]));e.push({_key:t,_index:-1})}else e.push(parseInt(r[2],10));else{const t=r[1].replace(/\\(\\|f|n|r|t|')/g,(t=>s[t]));e.push(t)}return e}function u(t){return t.map((t=>{if("string"===typeof t)return t;if("number"===typeof t)return t;if(""!==t._key)return{_key:t._key};if(-1!==t._index)return t._index;throw new Error("invalid segment:".concat(JSON.stringify(t)))}))}function l(t,e){if(!(null==e?void 0:e.mappings))return;const n=function(t){return"$".concat(t.map((t=>{if("string"===typeof t){const e=t.replace(/[\f\n\r\t'\\]/g,(t=>a[t]));return"['".concat(e,"']")}if("number"===typeof t)return"[".concat(t,"]");if(""!==t._key){const e=t._key.replace(/['\\]/g,(t=>a[t]));return"[?(@._key=='".concat(e,"')]")}return"[".concat(t._index,"]")})).join(""))}(t.map((t=>{if("string"===typeof t)return t;if("number"===typeof t)return t;if(-1!==t._index)return t._index;throw new Error("invalid segment:".concat(JSON.stringify(t)))})));if(void 0!==e.mappings[n])return{mapping:e.mappings[n],matchedPath:n,pathSuffix:""};const r=Object.entries(e.mappings).filter((t=>{let[e]=t;return n.startsWith(e)})).sort(((t,e)=>{let[n]=t,[r]=e;return r.length-n.length}));if(0==r.length)return;const[o,c]=r[0];return{mapping:c,matchedPath:o,pathSuffix:n.substring(o.length)}}function p(t){return"object"===typeof t&&null!==t}function f(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return function(t){return null!==t&&Array.isArray(t)}(t)?t.map(((t,r)=>{if(p(t)){const o=t._key;if("string"===typeof o)return f(t,e,n.concat({_key:o,_index:r}))}return f(t,e,n.concat(r))})):p(t)?Object.fromEntries(Object.entries(t).map((t=>{let[r,o]=t;return[r,f(o,e,n.concat(r))]}))):e(t,n)}function d(t,e,n){return f(t,((t,r)=>{if("string"!==typeof t)return t;const o=l(r,e);if(!o)return t;const{mapping:c,matchedPath:a}=o;if("value"!==c.type)return t;if("documentValue"!==c.source.type)return t;const s=e.documents[c.source.document],u=e.paths[c.source.path],p=i(a),f=i(u).concat(r.slice(p.length));return n({sourcePath:f,sourceDocument:s,resultPath:r,value:t})}))}const h="drafts.";function g(t){const{baseUrl:e,workspace:n="default",tool:r="default",id:o,type:a,path:s}=t;if(!e)throw new Error("baseUrl is required");if(!s)throw new Error("path is required");if(!o)throw new Error("id is required");if("/"!==e&&e.endsWith("/"))throw new Error("baseUrl must not end with a slash");const i="default"===n?void 0:n,l="default"===r?void 0:r,p=function(t){return t.startsWith(h)?t.slice(h.length):t}(o),f=Array.isArray(s)?c(u(s)):s,d=new URLSearchParams({baseUrl:e,id:p,type:a,path:f});i&&d.set("workspace",i),l&&d.set("tool",l);const g=["/"===e?"":e];i&&g.push(i);const y=["mode=presentation","id=".concat(p),"type=".concat(a),"path=".concat(encodeURIComponent(f))];return l&&y.push("tool=".concat(l)),g.push("intent","edit","".concat(y.join(";"),"?").concat(d)),g.join("/")}const y=t=>{let{sourcePath:e,value:n}=t;if(/^\d{4}-\d{2}-\d{2}/.test(r=n)&&Boolean(Date.parse(r))||function(t){try{new URL(t,t.startsWith("/")?"https://acme.com":void 0)}catch{return!1}return!0}(n))return!1;var r;const o=e.at(-1);return("slug"!==e.at(-2)||"current"!==o)&&(("string"!==typeof o||!o.startsWith("_"))&&(("number"!==typeof o||"marks"!==e.at(-2))&&(("href"!==o||"number"!==typeof e.at(-2)||"markDefs"!==e.at(-3))&&("style"!==o&&"listItem"!==o&&(!e.some((t=>"meta"===t||"metadata"===t||"openGraph"===t||"seo"===t))&&("string"!==typeof o||!m.has(o)))))))},m=new Set(["color","colour","currency","email","format","gid","hex","href","hsl","hsla","icon","id","index","key","language","layout","link","linkAction","locale","lqip","page","path","ref","rgb","rgba","route","secret","slug","status","tag","template","theme","type","unit","url","username","variant","website"]);const k=20;function b(t,e,n){var c,a,s,i,u,l,p,f,h;const{filter:m,logger:b,enabled:w}=n;if(!w){const r="config.enabled must be true, don't call this function otherwise";throw null==(c=null==b?void 0:b.error)||c.call(b,"[@sanity/client/stega]: ".concat(r),{result:t,resultSourceMap:e,config:n}),new TypeError(r)}if(!e)return null==(a=null==b?void 0:b.error)||a.call(b,"[@sanity/client/stega]: Missing Content Source Map from response body",{result:t,resultSourceMap:e,config:n}),t;if(!n.studioUrl){const r="config.studioUrl must be defined";throw null==(s=null==b?void 0:b.error)||s.call(b,"[@sanity/client/stega]: ".concat(r),{result:t,resultSourceMap:e,config:n}),new TypeError(r)}const _={encoded:[],skipped:[]},U=d(t,e,(t=>{let{sourcePath:e,sourceDocument:o,resultPath:c,value:a}=t;if(!1===("function"===typeof m?m({sourcePath:e,resultPath:c,filterDefault:y,sourceDocument:o,value:a}):y({sourcePath:e,resultPath:c,filterDefault:y,sourceDocument:o,value:a})))return b&&_.skipped.push({path:v(e),value:"".concat(a.slice(0,k)).concat(a.length>k?"...":""),length:a.length}),a;b&&_.encoded.push({path:v(e),value:"".concat(a.slice(0,k)).concat(a.length>k?"...":""),length:a.length});const{baseUrl:s,workspace:i,tool:u}=function(t){let e="string"===typeof t?t:t.baseUrl;return"/"!==e&&(e=e.replace(/\/$/,"")),"string"===typeof t?{baseUrl:e}:{...t,baseUrl:e}}("function"===typeof n.studioUrl?n.studioUrl(o):n.studioUrl);if(!s)return a;const{_id:l,_type:p}=o;return(0,r.b)(a,{origin:"sanity.io",href:g({baseUrl:s,workspace:i,tool:u,id:l,type:p,path:e})},!1)}));if(b){const t=_.skipped.length,e=_.encoded.length;if((t||e)&&(null==(i=(null==b?void 0:b.groupCollapsed)||b.log)||i("[@sanity/client/stega]: Encoding source map into result"),null==(u=b.log)||u.call(b,"[@sanity/client/stega]: Paths encoded: ".concat(_.encoded.length,", skipped: ").concat(_.skipped.length))),_.encoded.length>0&&(null==(l=null==b?void 0:b.log)||l.call(b,"[@sanity/client/stega]: Table of encoded paths"),null==(p=(null==b?void 0:b.table)||b.log)||p(_.encoded)),_.skipped.length>0){const t=new Set;for(const{path:e}of _.skipped)t.add(e.replace(o,"0").replace(/\[\d+\]/g,"[]"));null==(f=null==b?void 0:b.log)||f.call(b,"[@sanity/client/stega]: List of skipped paths",[...t.values()])}(t||e)&&(null==(h=null==b?void 0:b.groupEnd)||h.call(b))}return U}function v(t){return c(u(t))}var w=Object.freeze({__proto__:null,stegaEncodeSourceMap:b})}}]);
//# sourceMappingURL=16.64421d16.chunk.js.map