var MKi=function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){const s=r(1);e.exports={request:new s.Request}},function(e,t,r){"use strict";r.r(t),r.d(t,"Request",(function(){return n}));const{FetchError:s}=r(2);class n{constructor(){this.config={method:"POST",body:"",headers:{"Content-type":"application/json; charset=UTF-8"}}}setCofig(e){this.config=e}async fetch_GET(e){try{return fetch(e).then(e=>{if(200===e.status)return e.json();if(404==e.status)throw new Error("Not found")}).catch(t=>{throw new s(e,{message:"Service not found"},"Is this correct? "+e)})}catch(e){return e.consoleError(),null}}async fetch_POST(e,t=null){try{return null!=t&&(this.config.body=JSON.stringify(t)),fetch(e,this.config).then(e=>e.json()).then(e=>{if(this.config.body="",!e.Message){if(void 0===e.d)throw new Error("GET request cannot have 'data' property");return e.d}if(e.Message.includes("Falta un valor")||e.Message.includes("issing")){const t=e.Message.split("'")[1];throw new Error(`Missing value '${t}'`)}if(e.Message.includes("No se puede convertir")||e.Message.includes("convert"))throw new Error("The sent object has not json format")}).catch(t=>{throw t.message.includes("Request with GET/HEAD")?new s(e,t,"Remove body from the request or change the request to post"):t.message.includes("Missing value")?new s(e,t,`Add the property '${t.message.split("'")[1]}' to your data`):t.message.includes("json format")?new s(e,t,"Verify that you are sending a json object"):t.message.includes("GET")?new s(e,t,"You must remove 'data' in the collection object if is a GET request"):void 0===e?new s("Oops! You haven't set any URL",{message:"Missing URL to fetch"},"Set an URL in your request"):new s(e,{message:"Service not found"},"Is this correct? "+e)})}catch(e){return e.consoleError(),e}}async fetchAll(e){return Promise.all(e.map(e=>void 0!==e.data?this.fetch_POST(e.url,e.data):this.fetch_GET(e.url))).then(e=>e).catch(e=>(e.consoleError(),null))}}},function(e,t,r){"use strict";r.r(t),r.d(t,"FetchError",(function(){return n})),r.d(t,"NullOrEmpty",(function(){return o}));class s extends Error{constructor(e){super(e),this.customMessage="",this.fixTip="",this.stack=this.stack.split(this.name)[1].split("at ")[1],this.original={},this.styles={red:"font-size:15px; color:white; background-color: indianred",sea:"font-size:14px; color:white; background-color: lightseagreen",font15:"font-size:15px;"}}consoleError(){console.log(`%c ${this.name}: \n${this.customMessage}`,this.styles.red),""!=this.fixTip&&console.log("%c 🔨 How to fix?: \n",this.styles.sea,"-> "+this.fixTip)}}class n extends s{constructor(e,t=null,r="",s=""){super(s),this.name="⚠️FetchError",this.original=t,this.customMessage=` An error has occurred on the request: ${null!=this.original?this.original.message:""}  \n At -> ${e}\n`,this.fixTip=r}}class o extends s{constructor(e=null,t=""){super(t),this.name="NullOrEmpty",this.original=fixTip}}}]);export const MK = MKi;