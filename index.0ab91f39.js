function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("hrxEy",(function(e,t){var n=s("3JpYu"),r=s("hH01d"),i=e.exports;for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);function a(e){if("string"==typeof e&&(e=r.parse(e)),e.protocol||(e.protocol="https:"),"https:"!==e.protocol)throw new Error('Protocol "'+e.protocol+'" not supported. Expected "https:"');return e}i.request=function(e,t){return e=a(e),n.request.call(this,e,t)},i.get=function(e,t){return e=a(e),n.get.call(this,e,t)}})),s.register("3JpYu",(function(e,n){var r=s("hxw2T"),i=s("4KSWs"),o=s("57907"),a=s("jrXzS"),l=s("hH01d"),c=e.exports;c.request=function(e,n){e="string"==typeof e?l.parse(e):o(e);var i=-1===t.location.protocol.search(/^https?:$/)?"http:":"",s=e.protocol||i,a=e.hostname||e.host,c=e.port,h=e.path||"/";a&&-1!==a.indexOf(":")&&(a="["+a+"]"),e.url=(a?s+"//"+a:"")+(c?":"+c:"")+h,e.method=(e.method||"GET").toUpperCase(),e.headers=e.headers||{};var u=new r(e);return n&&u.on("response",n),u},c.get=function(e,t){var n=c.request(e,t);return n.end(),n},c.ClientRequest=r,c.IncomingMessage=i.IncomingMessage,c.Agent=function(){},c.Agent.defaultMaxSockets=4,c.globalAgent=new c.Agent,c.STATUS_CODES=a,c.METHODS=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"]})),s.register("hxw2T",(function(e,n){var r=s("ihoyg").Buffer,i=s("4TNnu"),o=s("7mvjX"),a=s("eSHUL"),l=s("4KSWs"),c=s("9AddZ"),h=l.IncomingMessage,u=l.readyStates;var d=e.exports=function(e){var t,n=this;c.Writable.call(n),n._opts=e,n._body=[],n._headers={},e.auth&&n.setHeader("Authorization","Basic "+r.from(e.auth).toString("base64")),Object.keys(e.headers).forEach((function(t){n.setHeader(t,e.headers[t])}));var i=!0;if("disable-fetch"===e.mode||"requestTimeout"in e&&!o.abortController)i=!1,t=!0;else if("prefer-streaming"===e.mode)t=!1;else if("allow-wrong-content-type"===e.mode)t=!o.overrideMimeType;else{if(e.mode&&"default"!==e.mode&&"prefer-fast"!==e.mode)throw new Error("Invalid value for opts.mode");t=!0}n._mode=function(e,t){return o.fetch&&t?"fetch":o.mozchunkedarraybuffer?"moz-chunked-arraybuffer":o.msstream?"ms-stream":o.arraybuffer&&e?"arraybuffer":"text"}(t,i),n._fetchTimer=null,n._socketTimeout=null,n._socketTimer=null,n.on("finish",(function(){n._onFinish()}))};a(d,c.Writable),d.prototype.setHeader=function(e,t){var n=e.toLowerCase();-1===f.indexOf(n)&&(this._headers[n]={name:e,value:t})},d.prototype.getHeader=function(e){var t=this._headers[e.toLowerCase()];return t?t.value:null},d.prototype.removeHeader=function(e){delete this._headers[e.toLowerCase()]},d.prototype._onFinish=function(){var e=this;if(!e._destroyed){var n=e._opts;"timeout"in n&&0!==n.timeout&&e.setTimeout(n.timeout);var r=e._headers,s=null;"GET"!==n.method&&"HEAD"!==n.method&&(s=new Blob(e._body,{type:(r["content-type"]||{}).value||""}));var a=[];if(Object.keys(r).forEach((function(e){var t=r[e].name,n=r[e].value;Array.isArray(n)?n.forEach((function(e){a.push([t,e])})):a.push([t,n])})),"fetch"===e._mode){var l=null;if(o.abortController){var c=new AbortController;l=c.signal,e._fetchAbortController=c,"requestTimeout"in n&&0!==n.requestTimeout&&(e._fetchTimer=t.setTimeout((function(){e.emit("requestTimeout"),e._fetchAbortController&&e._fetchAbortController.abort()}),n.requestTimeout))}t.fetch(e._opts.url,{method:e._opts.method,headers:a,body:s||void 0,mode:"cors",credentials:n.withCredentials?"include":"same-origin",signal:l}).then((function(t){e._fetchResponse=t,e._resetTimers(!1),e._connect()}),(function(t){e._resetTimers(!0),e._destroyed||e.emit("error",t)}))}else{var h=e._xhr=new t.XMLHttpRequest;try{h.open(e._opts.method,e._opts.url,!0)}catch(t){return void i.nextTick((function(){e.emit("error",t)}))}"responseType"in h&&(h.responseType=e._mode),"withCredentials"in h&&(h.withCredentials=!!n.withCredentials),"text"===e._mode&&"overrideMimeType"in h&&h.overrideMimeType("text/plain; charset=x-user-defined"),"requestTimeout"in n&&(h.timeout=n.requestTimeout,h.ontimeout=function(){e.emit("requestTimeout")}),a.forEach((function(e){h.setRequestHeader(e[0],e[1])})),e._response=null,h.onreadystatechange=function(){switch(h.readyState){case u.LOADING:case u.DONE:e._onXHRProgress()}},"moz-chunked-arraybuffer"===e._mode&&(h.onprogress=function(){e._onXHRProgress()}),h.onerror=function(){e._destroyed||(e._resetTimers(!0),e.emit("error",new Error("XHR error")))};try{h.send(s)}catch(t){return void i.nextTick((function(){e.emit("error",t)}))}}}},d.prototype._onXHRProgress=function(){var e=this;e._resetTimers(!1),function(e){try{var t=e.status;return null!==t&&0!==t}catch(e){return!1}}(e._xhr)&&!e._destroyed&&(e._response||e._connect(),e._response._onXHRProgress(e._resetTimers.bind(e)))},d.prototype._connect=function(){var e=this;e._destroyed||(e._response=new h(e._xhr,e._fetchResponse,e._mode,e._resetTimers.bind(e)),e._response.on("error",(function(t){e.emit("error",t)})),e.emit("response",e._response))},d.prototype._write=function(e,t,n){this._body.push(e),n()},d.prototype._resetTimers=function(e){var n=this;t.clearTimeout(n._socketTimer),n._socketTimer=null,e?(t.clearTimeout(n._fetchTimer),n._fetchTimer=null):n._socketTimeout&&(n._socketTimer=t.setTimeout((function(){n.emit("timeout")}),n._socketTimeout))},d.prototype.abort=d.prototype.destroy=function(e){var t=this;t._destroyed=!0,t._resetTimers(!0),t._response&&(t._response._destroyed=!0),t._xhr?t._xhr.abort():t._fetchAbortController&&t._fetchAbortController.abort(),e&&t.emit("error",e)},d.prototype.end=function(e,t,n){"function"==typeof e&&(n=e,e=void 0),c.Writable.prototype.end.call(this,e,t,n)},d.prototype.setTimeout=function(e,t){var n=this;t&&n.once("timeout",t),n._socketTimeout=e,n._resetTimers(!1)},d.prototype.flushHeaders=function(){},d.prototype.setNoDelay=function(){},d.prototype.setSocketKeepAlive=function(){};var f=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","via"]})),s.register("7mvjX",(function(n,r){var i,s,o,a,l,c,h,u;function d(){if(void 0!==u)return u;if(t.XMLHttpRequest){u=new t.XMLHttpRequest;try{u.open("GET",t.XDomainRequest?"/":"https://example.com")}catch(e){u=null}}else u=null;return u}function f(e){var t=d();if(!t)return!1;try{return t.responseType=e,t.responseType===e}catch(e){}return!1}function p(e){return"function"==typeof e}e(n.exports,"fetch",(function(){return i}),(function(e){return i=e})),e(n.exports,"writableStream",(function(){return s}),(function(e){return s=e})),e(n.exports,"abortController",(function(){return o}),(function(e){return o=e})),e(n.exports,"arraybuffer",(function(){return a}),(function(e){return a=e})),e(n.exports,"msstream",(function(){return l}),(function(e){return l=e})),e(n.exports,"mozchunkedarraybuffer",(function(){return c}),(function(e){return c=e})),e(n.exports,"overrideMimeType",(function(){return h}),(function(e){return h=e})),i=p(t.fetch)&&p(t.ReadableStream),s=p(t.WritableStream),o=p(t.AbortController),a=i||f("arraybuffer"),l=!i&&f("ms-stream"),c=!i&&f("moz-chunked-arraybuffer"),h=i||!!d()&&p(d().overrideMimeType),u=null})),s.register("eSHUL",(function(e,t){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}}})),s.register("4KSWs",(function(n,r){var i,o;e(n.exports,"readyStates",(function(){return i}),(function(e){return i=e})),e(n.exports,"IncomingMessage",(function(){return o}),(function(e){return o=e}));var a=s("4TNnu"),l=s("ihoyg").Buffer,c=s("7mvjX"),h=s("eSHUL"),u=s("9AddZ"),d=i={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},f=o=function(e,t,n,r){var i=this;if(u.Readable.call(i),i._mode=n,i.headers={},i.rawHeaders=[],i.trailers={},i.rawTrailers=[],i.on("end",(function(){a.nextTick((function(){i.emit("close")}))})),"fetch"===n){if(i._fetchResponse=t,i.url=t.url,i.statusCode=t.status,i.statusMessage=t.statusText,t.headers.forEach((function(e,t){i.headers[t.toLowerCase()]=e,i.rawHeaders.push(t,e)})),c.writableStream){var s=new WritableStream({write:function(e){return r(!1),new Promise((function(t,n){i._destroyed?n():i.push(l.from(e))?t():i._resumeFetch=t}))},close:function(){r(!0),i._destroyed||i.push(null)},abort:function(e){r(!0),i._destroyed||i.emit("error",e)}});try{return void t.body.pipeTo(s).catch((function(e){r(!0),i._destroyed||i.emit("error",e)}))}catch(e){}}var o=t.body.getReader();!function e(){o.read().then((function(t){i._destroyed||(r(t.done),t.done?i.push(null):(i.push(l.from(t.value)),e()))})).catch((function(e){r(!0),i._destroyed||i.emit("error",e)}))}()}else{if(i._xhr=e,i._pos=0,i.url=e.responseURL,i.statusCode=e.status,i.statusMessage=e.statusText,e.getAllResponseHeaders().split(/\r?\n/).forEach((function(e){var t=e.match(/^([^:]+):\s*(.*)/);if(t){var n=t[1].toLowerCase();"set-cookie"===n?(void 0===i.headers[n]&&(i.headers[n]=[]),i.headers[n].push(t[2])):void 0!==i.headers[n]?i.headers[n]+=", "+t[2]:i.headers[n]=t[2],i.rawHeaders.push(t[1],t[2])}})),i._charset="x-user-defined",!c.overrideMimeType){var h=i.rawHeaders["mime-type"];if(h){var d=h.match(/;\s*charset=([^;])(;|$)/);d&&(i._charset=d[1].toLowerCase())}i._charset||(i._charset="utf-8")}}};h(f,u.Readable),f.prototype._read=function(){var e=this._resumeFetch;e&&(this._resumeFetch=null,e())},f.prototype._onXHRProgress=function(e){var n=this,r=n._xhr,i=null;switch(n._mode){case"text":if((i=r.responseText).length>n._pos){var s=i.substr(n._pos);if("x-user-defined"===n._charset){for(var o=l.alloc(s.length),a=0;a<s.length;a++)o[a]=255&s.charCodeAt(a);n.push(o)}else n.push(s,n._charset);n._pos=i.length}break;case"arraybuffer":if(r.readyState!==d.DONE||!r.response)break;i=r.response,n.push(l.from(new Uint8Array(i)));break;case"moz-chunked-arraybuffer":if(i=r.response,r.readyState!==d.LOADING||!i)break;n.push(l.from(new Uint8Array(i)));break;case"ms-stream":if(i=r.response,r.readyState!==d.LOADING)break;var c=new t.MSStreamReader;c.onprogress=function(){c.result.byteLength>n._pos&&(n.push(l.from(new Uint8Array(c.result.slice(n._pos)))),n._pos=c.result.byteLength)},c.onload=function(){e(!0),n.push(null)},c.readAsArrayBuffer(i)}n._xhr.readyState===d.DONE&&"ms-stream"!==n._mode&&(e(!0),n.push(null))}})),s.register("9AddZ",(function(e,t){(t=e.exports=s("cEnbP")).Stream=t,t.Readable=t,t.Writable=s("cuAoD"),t.Duplex=s("2Hlr9"),t.Transform=s("l7DDn"),t.PassThrough=s("6VFzs"),t.finished=s("gr8mb"),t.pipeline=s("e8JAK")})),s.register("cEnbP",(function(e,n){var r,i=s("4TNnu");e.exports=S,S.ReadableState=C;s("jMc9N").EventEmitter;var o=function(e,t){return e.listeners(t).length},a=s("j5tZS"),l=s("ihoyg").Buffer,c=t.Uint8Array||function(){};var h,u=s("5Io6y");h=u&&u.debuglog?u.debuglog("stream"):function(){};var d,f,p,m=s("5KjdV"),_=s("kZIsm"),g=s("ipGaF").getHighWaterMark,v=s("dzxhd").codes,y=v.ERR_INVALID_ARG_TYPE,b=v.ERR_STREAM_PUSH_AFTER_EOF,w=v.ERR_METHOD_NOT_IMPLEMENTED,I=v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;s("eSHUL")(S,a);var T=_.errorOrDestroy,E=["error","close","destroy","pause","resume"];function C(e,t,n){r=r||s("2Hlr9"),e=e||{},"boolean"!=typeof n&&(n=t instanceof r),this.objectMode=!!e.objectMode,n&&(this.objectMode=this.objectMode||!!e.readableObjectMode),this.highWaterMark=g(this,e,"readableHighWaterMark",n),this.buffer=new m,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(d||(d=s("lEpDX").StringDecoder),this.decoder=new d(e.encoding),this.encoding=e.encoding)}function S(e){if(r=r||s("2Hlr9"),!(this instanceof S))return new S(e);var t=this instanceof r;this._readableState=new C(e,this,t),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),a.call(this)}function k(e,t,n,r,i){h("readableAddChunk",t);var s,o=e._readableState;if(null===t)o.reading=!1,function(e,t){if(h("onEofChunk"),t.ended)return;if(t.decoder){var n=t.decoder.end();n&&n.length&&(t.buffer.push(n),t.length+=t.objectMode?1:n.length)}t.ended=!0,t.sync?O(e):(t.needReadable=!1,t.emittedReadable||(t.emittedReadable=!0,x(e)))}(e,o);else if(i||(s=function(e,t){var n;r=t,l.isBuffer(r)||r instanceof c||"string"==typeof t||void 0===t||e.objectMode||(n=new y("chunk",["string","Buffer","Uint8Array"],t));var r;return n}(o,t)),s)T(e,s);else if(o.objectMode||t&&t.length>0)if("string"==typeof t||o.objectMode||Object.getPrototypeOf(t)===l.prototype||(t=function(e){return l.from(e)}(t)),r)o.endEmitted?T(e,new I):R(e,o,t,!0);else if(o.ended)T(e,new b);else{if(o.destroyed)return!1;o.reading=!1,o.decoder&&!n?(t=o.decoder.write(t),o.objectMode||0!==t.length?R(e,o,t,!1):L(e,o)):R(e,o,t,!1)}else r||(o.reading=!1,L(e,o));return!o.ended&&(o.length<o.highWaterMark||0===o.length)}function R(e,t,n,r){t.flowing&&0===t.length&&!t.sync?(t.awaitDrain=0,e.emit("data",n)):(t.length+=t.objectMode?1:n.length,r?t.buffer.unshift(n):t.buffer.push(n),t.needReadable&&O(e)),L(e,t)}Object.defineProperty(S.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),S.prototype.destroy=_.destroy,S.prototype._undestroy=_.undestroy,S.prototype._destroy=function(e,t){t(e)},S.prototype.push=function(e,t){var n,r=this._readableState;return r.objectMode?n=!0:"string"==typeof e&&((t=t||r.defaultEncoding)!==r.encoding&&(e=l.from(e,t),t=""),n=!0),k(this,e,t,!1,n)},S.prototype.unshift=function(e){return k(this,e,null,!0,!1)},S.prototype.isPaused=function(){return!1===this._readableState.flowing},S.prototype.setEncoding=function(e){d||(d=s("lEpDX").StringDecoder);var t=new d(e);this._readableState.decoder=t,this._readableState.encoding=this._readableState.decoder.encoding;for(var n=this._readableState.buffer.head,r="";null!==n;)r+=t.write(n.data),n=n.next;return this._readableState.buffer.clear(),""!==r&&this._readableState.buffer.push(r),this._readableState.length=r.length,this};var N=1073741824;function P(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=N?e=N:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function O(e){var t=e._readableState;h("emitReadable",t.needReadable,t.emittedReadable),t.needReadable=!1,t.emittedReadable||(h("emitReadable",t.flowing),t.emittedReadable=!0,i.nextTick(x,e))}function x(e){var t=e._readableState;h("emitReadable_",t.destroyed,t.length,t.ended),t.destroyed||!t.length&&!t.ended||(e.emit("readable"),t.emittedReadable=!1),t.needReadable=!t.flowing&&!t.ended&&t.length<=t.highWaterMark,F(e)}function L(e,t){t.readingMore||(t.readingMore=!0,i.nextTick(A,e,t))}function A(e,t){for(;!t.reading&&!t.ended&&(t.length<t.highWaterMark||t.flowing&&0===t.length);){var n=t.length;if(h("maybeReadMore read 0"),e.read(0),n===t.length)break}t.readingMore=!1}function M(e){var t=e._readableState;t.readableListening=e.listenerCount("readable")>0,t.resumeScheduled&&!t.paused?t.flowing=!0:e.listenerCount("data")>0&&e.resume()}function D(e){h("readable nexttick read 0"),e.read(0)}function U(e,t){h("resume",t.reading),t.reading||e.read(0),t.resumeScheduled=!1,e.emit("resume"),F(e),t.flowing&&!t.reading&&e.read(0)}function F(e){var t=e._readableState;for(h("flow",t.flowing);t.flowing&&null!==e.read(););}function j(e,t){return 0===t.length?null:(t.objectMode?n=t.buffer.shift():!e||e>=t.length?(n=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.first():t.buffer.concat(t.length),t.buffer.clear()):n=t.buffer.consume(e,t.decoder),n);var n}function q(e){var t=e._readableState;h("endReadable",t.endEmitted),t.endEmitted||(t.ended=!0,i.nextTick(H,t,e))}function H(e,t){if(h("endReadableNT",e.endEmitted,e.length),!e.endEmitted&&0===e.length&&(e.endEmitted=!0,t.readable=!1,t.emit("end"),e.autoDestroy)){var n=t._writableState;(!n||n.autoDestroy&&n.finished)&&t.destroy()}}function W(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}S.prototype.read=function(e){h("read",e),e=parseInt(e,10);var t=this._readableState,n=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&((0!==t.highWaterMark?t.length>=t.highWaterMark:t.length>0)||t.ended))return h("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?q(this):O(this),null;if(0===(e=P(e,t))&&t.ended)return 0===t.length&&q(this),null;var r,i=t.needReadable;return h("need readable",i),(0===t.length||t.length-e<t.highWaterMark)&&h("length less than watermark",i=!0),t.ended||t.reading?h("reading or ended",i=!1):i&&(h("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=P(n,t))),null===(r=e>0?j(e,t):null)?(t.needReadable=t.length<=t.highWaterMark,e=0):(t.length-=e,t.awaitDrain=0),0===t.length&&(t.ended||(t.needReadable=!0),n!==e&&t.ended&&q(this)),null!==r&&this.emit("data",r),r},S.prototype._read=function(e){T(this,new w("_read()"))},S.prototype.pipe=function(e,t){var n=this,r=this._readableState;switch(r.pipesCount){case 0:r.pipes=e;break;case 1:r.pipes=[r.pipes,e];break;default:r.pipes.push(e)}r.pipesCount+=1,h("pipe count=%d opts=%j",r.pipesCount,t);var s=(!t||!1!==t.end)&&e!==i.stdout&&e!==i.stderr?l:_;function a(t,i){h("onunpipe"),t===n&&i&&!1===i.hasUnpiped&&(i.hasUnpiped=!0,h("cleanup"),e.removeListener("close",p),e.removeListener("finish",m),e.removeListener("drain",c),e.removeListener("error",f),e.removeListener("unpipe",a),n.removeListener("end",l),n.removeListener("end",_),n.removeListener("data",d),u=!0,!r.awaitDrain||e._writableState&&!e._writableState.needDrain||c())}function l(){h("onend"),e.end()}r.endEmitted?i.nextTick(s):n.once("end",s),e.on("unpipe",a);var c=function(e){return function(){var t=e._readableState;h("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&o(e,"data")&&(t.flowing=!0,F(e))}}(n);e.on("drain",c);var u=!1;function d(t){h("ondata");var i=e.write(t);h("dest.write",i),!1===i&&((1===r.pipesCount&&r.pipes===e||r.pipesCount>1&&-1!==W(r.pipes,e))&&!u&&(h("false write response, pause",r.awaitDrain),r.awaitDrain++),n.pause())}function f(t){h("onerror",t),_(),e.removeListener("error",f),0===o(e,"error")&&T(e,t)}function p(){e.removeListener("finish",m),_()}function m(){h("onfinish"),e.removeListener("close",p),_()}function _(){h("unpipe"),n.unpipe(e)}return n.on("data",d),function(e,t,n){if("function"==typeof e.prependListener)return e.prependListener(t,n);e._events&&e._events[t]?Array.isArray(e._events[t])?e._events[t].unshift(n):e._events[t]=[n,e._events[t]]:e.on(t,n)}(e,"error",f),e.once("close",p),e.once("finish",m),e.emit("pipe",n),r.flowing||(h("pipe resume"),n.resume()),e},S.prototype.unpipe=function(e){var t=this._readableState,n={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,n)),this;if(!e){var r=t.pipes,i=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var s=0;s<i;s++)r[s].emit("unpipe",this,{hasUnpiped:!1});return this}var o=W(t.pipes,e);return-1===o||(t.pipes.splice(o,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,n)),this},S.prototype.on=function(e,t){var n=a.prototype.on.call(this,e,t),r=this._readableState;return"data"===e?(r.readableListening=this.listenerCount("readable")>0,!1!==r.flowing&&this.resume()):"readable"===e&&(r.endEmitted||r.readableListening||(r.readableListening=r.needReadable=!0,r.flowing=!1,r.emittedReadable=!1,h("on readable",r.length,r.reading),r.length?O(this):r.reading||i.nextTick(D,this))),n},S.prototype.addListener=S.prototype.on,S.prototype.removeListener=function(e,t){var n=a.prototype.removeListener.call(this,e,t);return"readable"===e&&i.nextTick(M,this),n},S.prototype.removeAllListeners=function(e){var t=a.prototype.removeAllListeners.apply(this,arguments);return"readable"!==e&&void 0!==e||i.nextTick(M,this),t},S.prototype.resume=function(){var e=this._readableState;return e.flowing||(h("resume"),e.flowing=!e.readableListening,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,i.nextTick(U,e,t))}(this,e)),e.paused=!1,this},S.prototype.pause=function(){return h("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(h("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},S.prototype.wrap=function(e){var t=this,n=this._readableState,r=!1;for(var i in e.on("end",(function(){if(h("wrapped end"),n.decoder&&!n.ended){var e=n.decoder.end();e&&e.length&&t.push(e)}t.push(null)})),e.on("data",(function(i){(h("wrapped data"),n.decoder&&(i=n.decoder.write(i)),n.objectMode&&null==i)||(n.objectMode||i&&i.length)&&(t.push(i)||(r=!0,e.pause()))})),e)void 0===this[i]&&"function"==typeof e[i]&&(this[i]=function(t){return function(){return e[t].apply(e,arguments)}}(i));for(var s=0;s<E.length;s++)e.on(E[s],this.emit.bind(this,E[s]));return this._read=function(t){h("wrapped _read",t),r&&(r=!1,e.resume())},this},"function"==typeof Symbol&&(S.prototype[Symbol.asyncIterator]=function(){return void 0===f&&(f=s("8BamM")),f(this)}),Object.defineProperty(S.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(S.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(S.prototype,"readableFlowing",{enumerable:!1,get:function(){return this._readableState.flowing},set:function(e){this._readableState&&(this._readableState.flowing=e)}}),S._fromList=j,Object.defineProperty(S.prototype,"readableLength",{enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(S.from=function(e,t){return void 0===p&&(p=s("eGESN")),p(S,e,t)})})),s.register("jMc9N",(function(e,t){var n,r="object"==typeof Reflect?Reflect:null,i=r&&"function"==typeof r.apply?r.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};n=r&&"function"==typeof r.ownKeys?r.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,s),r(n)}function s(){"function"==typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}_(e,t,s,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&_(e,"error",t,n)}(e,i,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var a=10;function l(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function h(e,t,n,r){var i,s,o,a;if(l(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),o=s[t]),void 0===o)o=s[t]=n,++e._eventsCount;else if("function"==typeof o?o=s[t]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),(i=c(e))>0&&o.length>i&&!o.warned){o.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=e,h.type=t,h.count=o.length,a=h,console&&console.warn&&console.warn(a)}return e}function u(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=u.bind(r);return i.listener=n,r.wrapFn=i,i}function f(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):m(i,i.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function m(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function _(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(s){r.once&&e.removeEventListener(t,i),n(s)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,s=this._events;if(void 0!==s)r=r&&void 0===s.error;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(void 0===l)return!1;if("function"==typeof l)i(l,this,t);else{var c=l.length,h=m(l,c);for(n=0;n<c;++n)i(h[n],this,t)}return!0},o.prototype.addListener=function(e,t){return h(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return h(this,e,t,!0)},o.prototype.once=function(e,t){return l(t),this.on(e,d(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,d(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,s,o;if(l(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,i=s;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,o||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,s=Object.keys(n);for(r=0;r<s.length;++r)"removeListener"!==(i=s[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return f(this,e,!0)},o.prototype.rawListeners=function(e){return f(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}})),s.register("j5tZS",(function(e,t){e.exports=s("jMc9N").EventEmitter})),s.register("5Io6y",(function(e,t){})),s.register("5KjdV",(function(e,t){function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=s("ihoyg").Buffer,a=s("5Io6y").inspect,l=a&&a.custom||"inspect";e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.head=null,this.tail=null,this.length=0}var t,s,c;return t=e,s=[{key:"push",value:function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length}},{key:"unshift",value:function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length}},{key:"shift",value:function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(e){if(0===this.length)return"";for(var t=this.head,n=""+t.data;t=t.next;)n+=e+t.data;return n}},{key:"concat",value:function(e){if(0===this.length)return o.alloc(0);for(var t,n,r,i=o.allocUnsafe(e>>>0),s=this.head,a=0;s;)t=s.data,n=i,r=a,o.prototype.copy.call(t,n,r),a+=s.data.length,s=s.next;return i}},{key:"consume",value:function(e,t){var n;return e<this.head.data.length?(n=this.head.data.slice(0,e),this.head.data=this.head.data.slice(e)):n=e===this.head.data.length?this.shift():t?this._getString(e):this._getBuffer(e),n}},{key:"first",value:function(){return this.head.data}},{key:"_getString",value:function(e){var t=this.head,n=1,r=t.data;for(e-=r.length;t=t.next;){var i=t.data,s=e>i.length?i.length:e;if(s===i.length?r+=i:r+=i.slice(0,e),0==(e-=s)){s===i.length?(++n,t.next?this.head=t.next:this.head=this.tail=null):(this.head=t,t.data=i.slice(s));break}++n}return this.length-=n,r}},{key:"_getBuffer",value:function(e){var t=o.allocUnsafe(e),n=this.head,r=1;for(n.data.copy(t),e-=n.data.length;n=n.next;){var i=n.data,s=e>i.length?i.length:e;if(i.copy(t,t.length-e,0,s),0==(e-=s)){s===i.length?(++r,n.next?this.head=n.next:this.head=this.tail=null):(this.head=n,n.data=i.slice(s));break}++r}return this.length-=r,t}},{key:l,value:function(e,t){return a(this,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},t,{depth:0,customInspect:!1}))}}],s&&i(t.prototype,s),c&&i(t,c),e}()})),s.register("kZIsm",(function(e,t){var n=s("4TNnu");function r(e,t){o(e,t),i(e)}function i(e){e._writableState&&!e._writableState.emitClose||e._readableState&&!e._readableState.emitClose||e.emit("close")}function o(e,t){e.emit("error",t)}e.exports={destroy:function(e,t){var s=this,a=this._readableState&&this._readableState.destroyed,l=this._writableState&&this._writableState.destroyed;return a||l?(t?t(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,n.nextTick(o,this,e)):n.nextTick(o,this,e)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,(function(e){!t&&e?s._writableState?s._writableState.errorEmitted?n.nextTick(i,s):(s._writableState.errorEmitted=!0,n.nextTick(r,s,e)):n.nextTick(r,s,e):t?(n.nextTick(i,s),t(e)):n.nextTick(i,s)})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(e,t){var n=e._readableState,r=e._writableState;n&&n.autoDestroy||r&&r.autoDestroy?e.destroy(t):e.emit("error",t)}}})),s.register("ipGaF",(function(e,t){var n=s("dzxhd").codes.ERR_INVALID_OPT_VALUE;e.exports={getHighWaterMark:function(e,t,r,i){var s=function(e,t,n){return null!=e.highWaterMark?e.highWaterMark:t?e[n]:null}(t,i,r);if(null!=s){if(!isFinite(s)||Math.floor(s)!==s||s<0)throw new n(i?r:"highWaterMark",s);return Math.floor(s)}return e.objectMode?16:16384}}})),s.register("dzxhd",(function(t,n){var r;e(t.exports,"codes",(function(){return r}),(function(e){return r=e}));var i={};function s(e,t,n){n||(n=Error);var r=function(e){var n,r;function i(n,r,i){return e.call(this,function(e,n,r){return"string"==typeof t?t:t(e,n,r)}(n,r,i))||this}return r=e,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r,i}(n);r.prototype.name=n.name,r.prototype.code=e,i[e]=r}function o(e,t){if(Array.isArray(e)){var n=e.length;return e=e.map((function(e){return String(e)})),n>2?"one of ".concat(t," ").concat(e.slice(0,n-1).join(", "),", or ")+e[n-1]:2===n?"one of ".concat(t," ").concat(e[0]," or ").concat(e[1]):"of ".concat(t," ").concat(e[0])}return"of ".concat(t," ").concat(String(e))}s("ERR_INVALID_OPT_VALUE",(function(e,t){return'The value "'+t+'" is invalid for option "'+e+'"'}),TypeError),s("ERR_INVALID_ARG_TYPE",(function(e,t,n){var r,i,s,a;if("string"==typeof t&&(i="not ",t.substr(!s||s<0?0:+s,i.length)===i)?(r="must not be",t=t.replace(/^not /,"")):r="must be",function(e,t,n){return(void 0===n||n>e.length)&&(n=e.length),e.substring(n-t.length,n)===t}(e," argument"))a="The ".concat(e," ").concat(r," ").concat(o(t,"type"));else{var l=function(e,t,n){return"number"!=typeof n&&(n=0),!(n+t.length>e.length)&&-1!==e.indexOf(t,n)}(e,".")?"property":"argument";a='The "'.concat(e,'" ').concat(l," ").concat(r," ").concat(o(t,"type"))}return a+=". Received type ".concat(typeof n)}),TypeError),s("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),s("ERR_METHOD_NOT_IMPLEMENTED",(function(e){return"The "+e+" method is not implemented"})),s("ERR_STREAM_PREMATURE_CLOSE","Premature close"),s("ERR_STREAM_DESTROYED",(function(e){return"Cannot call "+e+" after a stream was destroyed"})),s("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),s("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),s("ERR_STREAM_WRITE_AFTER_END","write after end"),s("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),s("ERR_UNKNOWN_ENCODING",(function(e){return"Unknown encoding: "+e}),TypeError),s("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),r=i})),s.register("2Hlr9",(function(e,t){var n=s("4TNnu"),r=Object.keys||function(e){var t=[];for(var n in e)t.push(n);return t};e.exports=h;var i=s("cEnbP"),o=s("cuAoD");s("eSHUL")(h,i);for(var a=r(o.prototype),l=0;l<a.length;l++){var c=a[l];h.prototype[c]||(h.prototype[c]=o.prototype[c])}function h(e){if(!(this instanceof h))return new h(e);i.call(this,e),o.call(this,e),this.allowHalfOpen=!0,e&&(!1===e.readable&&(this.readable=!1),!1===e.writable&&(this.writable=!1),!1===e.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",u)))}function u(){this._writableState.ended||n.nextTick(d,this)}function d(e){e.end()}Object.defineProperty(h.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(h.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(h.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(h.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}})})),s.register("cuAoD",(function(e,n){var r,i=s("4TNnu");function o(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t,n){var r=e.entry;e.entry=null;for(;r;){var i=r.callback;t.pendingcb--,i(n),r=r.next}t.corkedRequestsFree.next=e}(t,e)}}e.exports=S,S.WritableState=C;var a={deprecate:s("l4FQK")},l=s("j5tZS"),c=s("ihoyg").Buffer,h=t.Uint8Array||function(){};var u,d=s("kZIsm"),f=s("ipGaF").getHighWaterMark,p=s("dzxhd").codes,m=p.ERR_INVALID_ARG_TYPE,_=p.ERR_METHOD_NOT_IMPLEMENTED,g=p.ERR_MULTIPLE_CALLBACK,v=p.ERR_STREAM_CANNOT_PIPE,y=p.ERR_STREAM_DESTROYED,b=p.ERR_STREAM_NULL_VALUES,w=p.ERR_STREAM_WRITE_AFTER_END,I=p.ERR_UNKNOWN_ENCODING,T=d.errorOrDestroy;function E(){}function C(e,t,n){r=r||s("2Hlr9"),e=e||{},"boolean"!=typeof n&&(n=t instanceof r),this.objectMode=!!e.objectMode,n&&(this.objectMode=this.objectMode||!!e.writableObjectMode),this.highWaterMark=f(this,e,"writableHighWaterMark",n),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var a=!1===e.decodeStrings;this.decodeStrings=!a,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var n=e._writableState,r=n.sync,s=n.writecb;if("function"!=typeof s)throw new g;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(n),t)!function(e,t,n,r,s){--t.pendingcb,n?(i.nextTick(s,r),i.nextTick(x,e,t),e._writableState.errorEmitted=!0,T(e,r)):(s(r),e._writableState.errorEmitted=!0,T(e,r),x(e,t))}(e,n,r,t,s);else{var o=P(n)||e.destroyed;o||n.corked||n.bufferProcessing||!n.bufferedRequest||N(e,n),r?i.nextTick(R,e,n,o,s):R(e,n,o,s)}}(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==e.emitClose,this.autoDestroy=!!e.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new o(this)}function S(e){var t=this instanceof(r=r||s("2Hlr9"));if(!t&&!u.call(S,this))return new S(e);this._writableState=new C(e,this,t),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),l.call(this)}function k(e,t,n,r,i,s,o){t.writelen=r,t.writecb=o,t.writing=!0,t.sync=!0,t.destroyed?t.onwrite(new y("write")):n?e._writev(i,t.onwrite):e._write(i,s,t.onwrite),t.sync=!1}function R(e,t,n,r){n||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,r(),x(e,t)}function N(e,t){t.bufferProcessing=!0;var n=t.bufferedRequest;if(e._writev&&n&&n.next){var r=t.bufferedRequestCount,i=new Array(r),s=t.corkedRequestsFree;s.entry=n;for(var a=0,l=!0;n;)i[a]=n,n.isBuf||(l=!1),n=n.next,a+=1;i.allBuffers=l,k(e,t,!0,t.length,i,"",s.finish),t.pendingcb++,t.lastBufferedRequest=null,s.next?(t.corkedRequestsFree=s.next,s.next=null):t.corkedRequestsFree=new o(t),t.bufferedRequestCount=0}else{for(;n;){var c=n.chunk,h=n.encoding,u=n.callback;if(k(e,t,!1,t.objectMode?1:c.length,c,h,u),n=n.next,t.bufferedRequestCount--,t.writing)break}null===n&&(t.lastBufferedRequest=null)}t.bufferedRequest=n,t.bufferProcessing=!1}function P(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function O(e,t){e._final((function(n){t.pendingcb--,n&&T(e,n),t.prefinished=!0,e.emit("prefinish"),x(e,t)}))}function x(e,t){var n=P(t);if(n&&(function(e,t){t.prefinished||t.finalCalled||("function"!=typeof e._final||t.destroyed?(t.prefinished=!0,e.emit("prefinish")):(t.pendingcb++,t.finalCalled=!0,i.nextTick(O,e,t)))}(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"),t.autoDestroy))){var r=e._readableState;(!r||r.autoDestroy&&r.endEmitted)&&e.destroy()}return n}s("eSHUL")(S,l),C.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(C.prototype,"buffer",{get:a.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(u=Function.prototype[Symbol.hasInstance],Object.defineProperty(S,Symbol.hasInstance,{value:function(e){return!!u.call(this,e)||this===S&&(e&&e._writableState instanceof C)}})):u=function(e){return e instanceof this},S.prototype.pipe=function(){T(this,new v)},S.prototype.write=function(e,t,n){var r,s=this._writableState,o=!1,a=!s.objectMode&&(r=e,c.isBuffer(r)||r instanceof h);return a&&!c.isBuffer(e)&&(e=function(e){return c.from(e)}(e)),"function"==typeof t&&(n=t,t=null),a?t="buffer":t||(t=s.defaultEncoding),"function"!=typeof n&&(n=E),s.ending?function(e,t){var n=new w;T(e,n),i.nextTick(t,n)}(this,n):(a||function(e,t,n,r){var s;return null===n?s=new b:"string"==typeof n||t.objectMode||(s=new m("chunk",["string","Buffer"],n)),!s||(T(e,s),i.nextTick(r,s),!1)}(this,s,e,n))&&(s.pendingcb++,o=function(e,t,n,r,i,s){if(!n){var o=function(e,t,n){e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=c.from(t,n));return t}(t,r,i);r!==o&&(n=!0,i="buffer",r=o)}var a=t.objectMode?1:r.length;t.length+=a;var l=t.length<t.highWaterMark;l||(t.needDrain=!0);if(t.writing||t.corked){var h=t.lastBufferedRequest;t.lastBufferedRequest={chunk:r,encoding:i,isBuf:n,callback:s,next:null},h?h.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else k(e,t,!1,a,r,i,s);return l}(this,s,a,e,t,n)),o},S.prototype.cork=function(){this._writableState.corked++},S.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.bufferProcessing||!e.bufferedRequest||N(this,e))},S.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new I(e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(S.prototype,"writableBuffer",{enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(S.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),S.prototype._write=function(e,t,n){n(new _("_write()"))},S.prototype._writev=null,S.prototype.end=function(e,t,n){var r=this._writableState;return"function"==typeof e?(n=e,e=null,t=null):"function"==typeof t&&(n=t,t=null),null!=e&&this.write(e,t),r.corked&&(r.corked=1,this.uncork()),r.ending||function(e,t,n){t.ending=!0,x(e,t),n&&(t.finished?i.nextTick(n):e.once("finish",n));t.ended=!0,e.writable=!1}(this,r,n),this},Object.defineProperty(S.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(S.prototype,"destroyed",{enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),S.prototype.destroy=d.destroy,S.prototype._undestroy=d.undestroy,S.prototype._destroy=function(e,t){t(e)}})),s.register("l4FQK",(function(e,n){function r(e){try{if(!t.localStorage)return!1}catch(e){return!1}var n=t.localStorage[e];return null!=n&&"true"===String(n).toLowerCase()}e.exports=function(e,t){if(r("noDeprecation"))return e;var n=!1;return function(){if(!n){if(r("throwDeprecation"))throw new Error(t);r("traceDeprecation")?console.trace(t):console.warn(t),n=!0}return e.apply(this,arguments)}}})),s.register("lEpDX",(function(t,n){var r;e(t.exports,"StringDecoder",(function(){return r}),(function(e){return r=e}));var i=s("6U9mG").Buffer,o=i.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function a(e){var t;switch(this.encoding=function(e){var t=function(e){if(!e)return"utf8";for(var t;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase(),t=!0}}(e);if("string"!=typeof t&&(i.isEncoding===o||!o(e)))throw new Error("Unknown encoding: "+e);return t||e}(e),this.encoding){case"utf16le":this.text=h,this.end=u,t=4;break;case"utf8":this.fillLast=c,t=4;break;case"base64":this.text=d,this.end=f,t=3;break;default:return this.write=p,void(this.end=m)}this.lastNeed=0,this.lastTotal=0,this.lastChar=i.allocUnsafe(t)}function l(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}function c(e){var t=this.lastTotal-this.lastNeed,n=function(e,t,n){if(128!=(192&t[0]))return e.lastNeed=0,"�";if(e.lastNeed>1&&t.length>1){if(128!=(192&t[1]))return e.lastNeed=1,"�";if(e.lastNeed>2&&t.length>2&&128!=(192&t[2]))return e.lastNeed=2,"�"}}(this,e);return void 0!==n?n:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(e.copy(this.lastChar,t,0,e.length),void(this.lastNeed-=e.length))}function h(e,t){if((e.length-t)%2==0){var n=e.toString("utf16le",t);if(n){var r=n.charCodeAt(n.length-1);if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],n.slice(0,-1)}return n}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function u(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var n=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,n)}return t}function d(e,t){var n=(e.length-t)%3;return 0===n?e.toString("base64",t):(this.lastNeed=3-n,this.lastTotal=3,1===n?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-n))}function f(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function p(e){return e.toString(this.encoding)}function m(e){return e&&e.length?this.write(e):""}r=a,a.prototype.write=function(e){if(0===e.length)return"";var t,n;if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return"";n=this.lastNeed,this.lastNeed=0}else n=0;return n<e.length?t?t+this.text(e,n):this.text(e,n):t||""},a.prototype.end=function(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�":t},a.prototype.text=function(e,t){var n=function(e,t,n){var r=t.length-1;if(r<n)return 0;var i=l(t[r]);if(i>=0)return i>0&&(e.lastNeed=i-1),i;if(--r<n||-2===i)return 0;if((i=l(t[r]))>=0)return i>0&&(e.lastNeed=i-2),i;if(--r<n||-2===i)return 0;if((i=l(t[r]))>=0)return i>0&&(2===i?i=0:e.lastNeed=i-3),i;return 0}(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=n;var r=e.length-(n-this.lastNeed);return e.copy(this.lastChar,0,r),e.toString("utf8",t,r)},a.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}})),s.register("6U9mG",(function(e,t){var n=s("ihoyg"),r=n.Buffer;function i(e,t){for(var n in e)t[n]=e[n]}function o(e,t,n){return r(e,t,n)}r.from&&r.alloc&&r.allocUnsafe&&r.allocUnsafeSlow?e.exports=n:(i(n,e.exports),e.exports.Buffer=o),o.prototype=Object.create(r.prototype),i(r,o),o.from=function(e,t,n){if("number"==typeof e)throw new TypeError("Argument must not be a number");return r(e,t,n)},o.alloc=function(e,t,n){if("number"!=typeof e)throw new TypeError("Argument must be a number");var i=r(e);return void 0!==t?"string"==typeof n?i.fill(t,n):i.fill(t):i.fill(0),i},o.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return r(e)},o.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return n.SlowBuffer(e)}})),s.register("8BamM",(function(e,t){var n,r=s("4TNnu");function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=s("gr8mb"),a=Symbol("lastResolve"),l=Symbol("lastReject"),c=Symbol("error"),h=Symbol("ended"),u=Symbol("lastPromise"),d=Symbol("handlePromise"),f=Symbol("stream");function p(e,t){return{value:e,done:t}}function m(e){var t=e[a];if(null!==t){var n=e[f].read();null!==n&&(e[u]=null,e[a]=null,e[l]=null,t(p(n,!1)))}}function _(e){r.nextTick(m,e)}var g=Object.getPrototypeOf((function(){})),v=Object.setPrototypeOf((i(n={get stream(){return this[f]},next:function(){var e=this,t=this[c];if(null!==t)return Promise.reject(t);if(this[h])return Promise.resolve(p(void 0,!0));if(this[f].destroyed)return new Promise((function(t,n){r.nextTick((function(){e[c]?n(e[c]):t(p(void 0,!0))}))}));var n,i=this[u];if(i)n=new Promise(function(e,t){return function(n,r){e.then((function(){t[h]?n(p(void 0,!0)):t[d](n,r)}),r)}}(i,this));else{var s=this[f].read();if(null!==s)return Promise.resolve(p(s,!1));n=new Promise(this[d])}return this[u]=n,n}},Symbol.asyncIterator,(function(){return this})),i(n,"return",(function(){var e=this;return new Promise((function(t,n){e[f].destroy(null,(function(e){e?n(e):t(p(void 0,!0))}))}))})),n),g);e.exports=function(e){var t,n=Object.create(v,(i(t={},f,{value:e,writable:!0}),i(t,a,{value:null,writable:!0}),i(t,l,{value:null,writable:!0}),i(t,c,{value:null,writable:!0}),i(t,h,{value:e._readableState.endEmitted,writable:!0}),i(t,d,{value:function(e,t){var r=n[f].read();r?(n[u]=null,n[a]=null,n[l]=null,e(p(r,!1))):(n[a]=e,n[l]=t)},writable:!0}),t));return n[u]=null,o(e,(function(e){if(e&&"ERR_STREAM_PREMATURE_CLOSE"!==e.code){var t=n[l];return null!==t&&(n[u]=null,n[a]=null,n[l]=null,t(e)),void(n[c]=e)}var r=n[a];null!==r&&(n[u]=null,n[a]=null,n[l]=null,r(p(void 0,!0))),n[h]=!0})),e.on("readable",_.bind(null,n)),n}})),s.register("gr8mb",(function(e,t){var n=s("dzxhd").codes.ERR_STREAM_PREMATURE_CLOSE;function r(){}e.exports=function e(t,i,s){if("function"==typeof i)return e(t,null,i);i||(i={}),s=function(e){var t=!1;return function(){if(!t){t=!0;for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e.apply(this,r)}}}(s||r);var o=i.readable||!1!==i.readable&&t.readable,a=i.writable||!1!==i.writable&&t.writable,l=function(){t.writable||h()},c=t._writableState&&t._writableState.finished,h=function(){a=!1,c=!0,o||s.call(t)},u=t._readableState&&t._readableState.endEmitted,d=function(){o=!1,u=!0,a||s.call(t)},f=function(e){s.call(t,e)},p=function(){var e;return o&&!u?(t._readableState&&t._readableState.ended||(e=new n),s.call(t,e)):a&&!c?(t._writableState&&t._writableState.ended||(e=new n),s.call(t,e)):void 0},m=function(){t.req.on("finish",h)};return!function(e){return e.setHeader&&"function"==typeof e.abort}(t)?a&&!t._writableState&&(t.on("end",l),t.on("close",l)):(t.on("complete",h),t.on("abort",p),t.req?m():t.on("request",m)),t.on("end",d),t.on("finish",h),!1!==i.error&&t.on("error",f),t.on("close",p),function(){t.removeListener("complete",h),t.removeListener("abort",p),t.removeListener("request",m),t.req&&t.req.removeListener("finish",h),t.removeListener("end",l),t.removeListener("close",l),t.removeListener("finish",h),t.removeListener("end",d),t.removeListener("error",f),t.removeListener("close",p)}}})),s.register("eGESN",(function(e,t){e.exports=function(){throw new Error("Readable.from is not available in the browser")}})),s.register("l7DDn",(function(e,t){e.exports=h;var n=s("dzxhd").codes,r=n.ERR_METHOD_NOT_IMPLEMENTED,i=n.ERR_MULTIPLE_CALLBACK,o=n.ERR_TRANSFORM_ALREADY_TRANSFORMING,a=n.ERR_TRANSFORM_WITH_LENGTH_0,l=s("2Hlr9");function c(e,t){var n=this._transformState;n.transforming=!1;var r=n.writecb;if(null===r)return this.emit("error",new i);n.writechunk=null,n.writecb=null,null!=t&&this.push(t),r(e);var s=this._readableState;s.reading=!1,(s.needReadable||s.length<s.highWaterMark)&&this._read(s.highWaterMark)}function h(e){if(!(this instanceof h))return new h(e);l.call(this,e),this._transformState={afterTransform:c.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.on("prefinish",u)}function u(){var e=this;"function"!=typeof this._flush||this._readableState.destroyed?d(this,null,null):this._flush((function(t,n){d(e,t,n)}))}function d(e,t,n){if(t)return e.emit("error",t);if(null!=n&&e.push(n),e._writableState.length)throw new a;if(e._transformState.transforming)throw new o;return e.push(null)}s("eSHUL")(h,l),h.prototype.push=function(e,t){return this._transformState.needTransform=!1,l.prototype.push.call(this,e,t)},h.prototype._transform=function(e,t,n){n(new r("_transform()"))},h.prototype._write=function(e,t,n){var r=this._transformState;if(r.writecb=n,r.writechunk=e,r.writeencoding=t,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},h.prototype._read=function(e){var t=this._transformState;null===t.writechunk||t.transforming?t.needTransform=!0:(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform))},h.prototype._destroy=function(e,t){l.prototype._destroy.call(this,e,(function(e){t(e)}))}})),s.register("6VFzs",(function(e,t){e.exports=r;var n=s("l7DDn");function r(e){if(!(this instanceof r))return new r(e);n.call(this,e)}s("eSHUL")(r,n),r.prototype._transform=function(e,t,n){n(null,e)}})),s.register("e8JAK",(function(e,t){var n;var r=s("dzxhd").codes,i=r.ERR_MISSING_ARGS,o=r.ERR_STREAM_DESTROYED;function a(e){if(e)throw e}function l(e,t,r,i){i=function(e){var t=!1;return function(){t||(t=!0,e.apply(void 0,arguments))}}(i);var a=!1;e.on("close",(function(){a=!0})),void 0===n&&(n=s("gr8mb")),n(e,{readable:t,writable:r},(function(e){if(e)return i(e);a=!0,i()}));var l=!1;return function(t){if(!a&&!l)return l=!0,function(e){return e.setHeader&&"function"==typeof e.abort}(e)?e.abort():"function"==typeof e.destroy?e.destroy():void i(t||new o("pipe"))}}function c(e){e()}function h(e,t){return e.pipe(t)}function u(e){return e.length?"function"!=typeof e[e.length-1]?a:e.pop():a}e.exports=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,s=u(t);if(Array.isArray(t[0])&&(t=t[0]),t.length<2)throw new i("streams");var o=t.map((function(e,n){var i=n<t.length-1;return l(e,i,n>0,(function(e){r||(r=e),e&&o.forEach(c),i||(o.forEach(c),s(r))}))}));return t.reduce(h)}})),s.register("57907",(function(e,t){e.exports=function(){for(var e={},t=0;t<arguments.length;t++){var r=arguments[t];for(var i in r)n.call(r,i)&&(e[i]=r[i])}return e};var n=Object.prototype.hasOwnProperty})),s.register("jrXzS",(function(e,t){e.exports={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}})),s.register("hH01d",(function(t,n){var r;e(t.exports,"parse",(function(){return r}),(function(e){return r=e}));var i=s("9Wff9"),o=s("4kBTp");function a(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}r=w;var l=/^([a-z0-9.+-]+:)/i,c=/:[0-9]*$/,h=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,u=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),d=["'"].concat(u),f=["%","/","?",";","#"].concat(d),p=["/","?","#"],m=/^[+a-z0-9A-Z_-]{0,63}$/,_=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,g={javascript:!0,"javascript:":!0},v={javascript:!0,"javascript:":!0},y={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},b=s("hKeqt");function w(e,t,n){if(e&&o.isObject(e)&&e instanceof a)return e;var r=new a;return r.parse(e,t,n),r}a.prototype.parse=function(e,t,n){if(!o.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var r=e.indexOf("?"),s=-1!==r&&r<e.indexOf("#")?"?":"#",a=e.split(s);a[0]=a[0].replace(/\\/g,"/");var c=e=a.join(s);if(c=c.trim(),!n&&1===e.split("#").length){var u=h.exec(c);if(u)return this.path=c,this.href=c,this.pathname=u[1],u[2]?(this.search=u[2],this.query=t?b.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var w=l.exec(c);if(w){var I=(w=w[0]).toLowerCase();this.protocol=I,c=c.substr(w.length)}if(n||w||c.match(/^\/\/[^@\/]+@[^@\/]+/)){var T="//"===c.substr(0,2);!T||w&&v[w]||(c=c.substr(2),this.slashes=!0)}if(!v[w]&&(T||w&&!y[w])){for(var E,C,S=-1,k=0;k<p.length;k++){-1!==(R=c.indexOf(p[k]))&&(-1===S||R<S)&&(S=R)}-1!==(C=-1===S?c.lastIndexOf("@"):c.lastIndexOf("@",S))&&(E=c.slice(0,C),c=c.slice(C+1),this.auth=decodeURIComponent(E)),S=-1;for(k=0;k<f.length;k++){var R;-1!==(R=c.indexOf(f[k]))&&(-1===S||R<S)&&(S=R)}-1===S&&(S=c.length),this.host=c.slice(0,S),c=c.slice(S),this.parseHost(),this.hostname=this.hostname||"";var N="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!N)for(var P=this.hostname.split(/\./),O=(k=0,P.length);k<O;k++){var x=P[k];if(x&&!x.match(m)){for(var L="",A=0,M=x.length;A<M;A++)x.charCodeAt(A)>127?L+="x":L+=x[A];if(!L.match(m)){var D=P.slice(0,k),U=P.slice(k+1),F=x.match(_);F&&(D.push(F[1]),U.unshift(F[2])),U.length&&(c="/"+U.join(".")+c),this.hostname=D.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),N||(this.hostname=i.toASCII(this.hostname));var j=this.port?":"+this.port:"",q=this.hostname||"";this.host=q+j,this.href+=this.host,N&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==c[0]&&(c="/"+c))}if(!g[I])for(k=0,O=d.length;k<O;k++){var H=d[k];if(-1!==c.indexOf(H)){var W=encodeURIComponent(H);W===H&&(W=escape(H)),c=c.split(H).join(W)}}var B=c.indexOf("#");-1!==B&&(this.hash=c.substr(B),c=c.slice(0,B));var V=c.indexOf("?");if(-1!==V?(this.search=c.substr(V),this.query=c.substr(V+1),t&&(this.query=b.parse(this.query)),c=c.slice(0,V)):t&&(this.search="",this.query={}),c&&(this.pathname=c),y[I]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){j=this.pathname||"";var z=this.search||"";this.path=j+z}return this.href=this.format(),this},a.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",n=this.pathname||"",r=this.hash||"",i=!1,s="";this.host?i=e+this.host:this.hostname&&(i=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(s=b.stringify(this.query));var a=this.search||s&&"?"+s||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||y[t])&&!1!==i?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),a&&"?"!==a.charAt(0)&&(a="?"+a),t+i+(n=n.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(a=a.replace("#","%23"))+r},a.prototype.resolve=function(e){return this.resolveObject(w(e,!1,!0)).format()},a.prototype.resolveObject=function(e){if(o.isString(e)){var t=new a;t.parse(e,!1,!0),e=t}for(var n=new a,r=Object.keys(this),i=0;i<r.length;i++){var s=r[i];n[s]=this[s]}if(n.hash=e.hash,""===e.href)return n.href=n.format(),n;if(e.slashes&&!e.protocol){for(var l=Object.keys(e),c=0;c<l.length;c++){var h=l[c];"protocol"!==h&&(n[h]=e[h])}return y[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(e.protocol&&e.protocol!==n.protocol){if(!y[e.protocol]){for(var u=Object.keys(e),d=0;d<u.length;d++){var f=u[d];n[f]=e[f]}return n.href=n.format(),n}if(n.protocol=e.protocol,e.host||v[e.protocol])n.pathname=e.pathname;else{for(var p=(e.pathname||"").split("/");p.length&&!(e.host=p.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),n.pathname=p.join("/")}if(n.search=e.search,n.query=e.query,n.host=e.host||"",n.auth=e.auth,n.hostname=e.hostname||e.host,n.port=e.port,n.pathname||n.search){var m=n.pathname||"",_=n.search||"";n.path=m+_}return n.slashes=n.slashes||e.slashes,n.href=n.format(),n}var g=n.pathname&&"/"===n.pathname.charAt(0),b=e.host||e.pathname&&"/"===e.pathname.charAt(0),w=b||g||n.host&&e.pathname,I=w,T=n.pathname&&n.pathname.split("/")||[],E=(p=e.pathname&&e.pathname.split("/")||[],n.protocol&&!y[n.protocol]);if(E&&(n.hostname="",n.port=null,n.host&&(""===T[0]?T[0]=n.host:T.unshift(n.host)),n.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===p[0]?p[0]=e.host:p.unshift(e.host)),e.host=null),w=w&&(""===p[0]||""===T[0])),b)n.host=e.host||""===e.host?e.host:n.host,n.hostname=e.hostname||""===e.hostname?e.hostname:n.hostname,n.search=e.search,n.query=e.query,T=p;else if(p.length)T||(T=[]),T.pop(),T=T.concat(p),n.search=e.search,n.query=e.query;else if(!o.isNullOrUndefined(e.search)){if(E)n.hostname=n.host=T.shift(),(N=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=N.shift(),n.host=n.hostname=N.shift());return n.search=e.search,n.query=e.query,o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!T.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var C=T.slice(-1)[0],S=(n.host||e.host||T.length>1)&&("."===C||".."===C)||""===C,k=0,R=T.length;R>=0;R--)"."===(C=T[R])?T.splice(R,1):".."===C?(T.splice(R,1),k++):k&&(T.splice(R,1),k--);if(!w&&!I)for(;k--;k)T.unshift("..");!w||""===T[0]||T[0]&&"/"===T[0].charAt(0)||T.unshift(""),S&&"/"!==T.join("/").substr(-1)&&T.push("");var N,P=""===T[0]||T[0]&&"/"===T[0].charAt(0);E&&(n.hostname=n.host=P?"":T.length?T.shift():"",(N=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=N.shift(),n.host=n.hostname=N.shift()));return(w=w||n.host&&T.length)&&!P&&T.unshift(""),T.length?n.pathname=T.join("/"):(n.pathname=null,n.path=null),o.isNull(n.pathname)&&o.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=e.auth||n.auth,n.slashes=n.slashes||e.slashes,n.href=n.format(),n},a.prototype.parseHost=function(){var e=this.host,t=c.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}})),s.register("9Wff9",(function(e,n){!function(r){var i=n&&!n.nodeType&&n,s=e&&!e.nodeType&&e,o="object"==typeof t&&t;o.global!==o&&o.window!==o&&o.self!==o||(r=o);var a,l,c=2147483647,h=36,u=/^xn--/,d=/[^\x20-\x7E]/,f=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},m=Math.floor,_=String.fromCharCode;function g(e){throw RangeError(p[e])}function v(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n]);return r}function y(e,t){var n=e.split("@"),r="";return n.length>1&&(r=n[0]+"@",e=n[1]),r+v((e=e.replace(f,".")).split("."),t).join(".")}function b(e){for(var t,n,r=[],i=0,s=e.length;i<s;)(t=e.charCodeAt(i++))>=55296&&t<=56319&&i<s?56320==(64512&(n=e.charCodeAt(i++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),i--):r.push(t);return r}function w(e){return v(e,(function(e){var t="";return e>65535&&(t+=_((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=_(e)})).join("")}function I(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function T(e,t,n){var r=0;for(e=n?m(e/700):e>>1,e+=m(e/t);e>455;r+=h)e=m(e/35);return m(r+36*e/(e+38))}function E(e){var t,n,r,i,s,o,a,l,u,d,f,p=[],_=e.length,v=0,y=128,b=72;for((n=e.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&g("not-basic"),p.push(e.charCodeAt(r));for(i=n>0?n+1:0;i<_;){for(s=v,o=1,a=h;i>=_&&g("invalid-input"),((l=(f=e.charCodeAt(i++))-48<10?f-22:f-65<26?f-65:f-97<26?f-97:h)>=h||l>m((c-v)/o))&&g("overflow"),v+=l*o,!(l<(u=a<=b?1:a>=b+26?26:a-b));a+=h)o>m(c/(d=h-u))&&g("overflow"),o*=d;b=T(v-s,t=p.length+1,0==s),m(v/t)>c-y&&g("overflow"),y+=m(v/t),v%=t,p.splice(v++,0,y)}return w(p)}function C(e){var t,n,r,i,s,o,a,l,u,d,f,p,v,y,w,E=[];for(p=(e=b(e)).length,t=128,n=0,s=72,o=0;o<p;++o)(f=e[o])<128&&E.push(_(f));for(r=i=E.length,i&&E.push("-");r<p;){for(a=c,o=0;o<p;++o)(f=e[o])>=t&&f<a&&(a=f);for(a-t>m((c-n)/(v=r+1))&&g("overflow"),n+=(a-t)*v,t=a,o=0;o<p;++o)if((f=e[o])<t&&++n>c&&g("overflow"),f==t){for(l=n,u=h;!(l<(d=u<=s?1:u>=s+26?26:u-s));u+=h)w=l-d,y=h-d,E.push(_(I(d+w%y,0))),l=m(w/y);E.push(_(I(l,0))),s=T(n,v,r==i),n=0,++r}++n,++t}return E.join("")}if(a={version:"1.3.2",ucs2:{decode:b,encode:w},decode:E,encode:C,toASCII:function(e){return y(e,(function(e){return d.test(e)?"xn--"+C(e):e}))},toUnicode:function(e){return y(e,(function(e){return u.test(e)?E(e.slice(4).toLowerCase()):e}))}},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",(function(){return a}));else if(i&&s)if(e.exports==i)s.exports=a;else for(l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);else r.punycode=a}(this)})),s.register("4kBTp",(function(e,t){e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}})),s.register("hKeqt",(function(t,n){var r,i;e(t.exports,"parse",(function(){return r}),(function(e){return r=e})),e(t.exports,"stringify",(function(){return i}),(function(e){return i=e})),r=s("7fdz3"),i=s("21Uuv")})),s.register("7fdz3",(function(e,t){function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,i,s){t=t||"&",i=i||"=";var o={};if("string"!=typeof e||0===e.length)return o;var a=/\+/g;e=e.split(t);var l=1e3;s&&"number"==typeof s.maxKeys&&(l=s.maxKeys);var c=e.length;l>0&&c>l&&(c=l);for(var h=0;h<c;++h){var u,d,f,p,m=e[h].replace(a,"%20"),_=m.indexOf(i);_>=0?(u=m.substr(0,_),d=m.substr(_+1)):(u=m,d=""),f=decodeURIComponent(u),p=decodeURIComponent(d),n(o,f)?r(o[f])?o[f].push(p):o[f]=[o[f],p]:o[f]=p}return o};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}})),s.register("21Uuv",(function(e,t){var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,o,a){return t=t||"&",o=o||"=",null===e&&(e=void 0),"object"==typeof e?i(s(e),(function(s){var a=encodeURIComponent(n(s))+o;return r(e[s])?i(e[s],(function(e){return a+encodeURIComponent(n(e))})).join(t):a+encodeURIComponent(n(e[s]))})).join(t):a?encodeURIComponent(n(a))+o+encodeURIComponent(n(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function i(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var s=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.0ab91f39.js","6Y9A4":"movie-time.93f8ca93.jpg","7mVsD":"index.8a30ed25.css","b9auz":"index.90bfe647.js"}'));var o=s("2shzp");class a{async getTrendingMovies(){try{const e=`https://api.themoviedb.org/3/trending/movie/day?${this.key}&page=${this.page}`;return(await n(o).get(e)).data}catch(e){console.log(e)}}async getSearchMovies(){try{const e=`https://api.themoviedb.org/3/search/movie?${this.key}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return(await n(o).get(e)).data}catch(e){console.log(e)}}async getMoviesByID(e){try{const t=`https://api.themoviedb.org/3/movie/${e}?${this.key}&language=en-US`;return(await n(o).get(t)).data}catch(e){console.log(e)}}resetPage(){this.page=1}setPage(e){this.page=e}incrementPage(){return this.page+=1}decrementPage(){if(1!==this.page)return this.page-=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1,this.key="api_key=6fe1e9d5fbaeb01db6cc1b91ad7172fe"}}var l=s("krGWQ"),c={};c=function e(t,n,r){function i(o,a){if(!n[o]){if(!t[o]){var l=void 0;if(!a&&l)return l(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var h=n[o]={exports:{}};t[o][0].call(h.exports,(function(e){return i(t[o][1][e]||e)}),h,h.exports,e,t,n,r)}return n[o].exports}for(var s=void 0,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},s=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=s,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),s=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return s.appendChild(e)}));var o=i(s,"IMG"),a=i(s,"VIDEO"),l=i(s,"IFRAME");return!0===o&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),o=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===s(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&o()}));var a={element:function(){return n},visible:function(){return s(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:o};return a}},{}]},{},[1])(1);var h;function u(e){var t="";e.options.path=encodeURI("/3/search/movie?api_key="+e.key+"&query="+e.movie+(null!==e.year?"&year="+e.year:"")),e.protocol.get(e.options,(function(n){n.on("data",(function(e){t+=e})),n.on("end",(function(){var n=JSON.parse(t);void 0!==n.status_message?e.cb("Got error: "+n.status_message):0===n.results.length?null!==e.year?(e.year=null,u(e)):e.cb("Got error: No results found"):(e.mid=n.results[0].id,function(e){var t="";e.options.path=encodeURI("/3/movie/"+e.mid+"/videos?api_key="+e.key),e.protocol.get(e.options,(function(n){n.on("data",(function(e){t+=e})),n.on("end",(function(){var n=JSON.parse(t);if(void 0!==n.status_message)e.cb("Got error: "+n.status_message);else if(0===n.results.length)e.cb("Got error: No results found");else if(e.multi)e.cb(null,n.results);else{n.results.filter((function(e){return"youtube"===e.site.toLowerCase()}));e.cb(null,encodeURI("https://www.youtube.com/watch?v="+n.results[0].key))}}))})).on("error",(function(t){e.cb("Got error: "+t.message)}))}(e))}))})).on("error",(function(t){e.cb("Got error: "+t.message)}))}h=function(e,t,n,r){var i={key:"9d2bff12ed955c7f1f74b83187f188ae",protocol:s("hrxEy"),cb:r,id:null,year:null,multi:n,movie:e,options:{host:"api.themoviedb.org",port:443,path:null}};if("function"==typeof t?(i.cb=t,t=n=null):"function"==typeof n&&(i.cb=n,n=!1),"string"!=typeof e)throw new Error("Expected a string");i.year=t,u(i)};new a;class d{async fetchTrailer(){const e=await h(this.trailerTitle,{id:!0,api_key:"api_key=6fe1e9d5fbaeb01db6cc1b91ad7172fe",trailerId:this.trailerId});if(null!==e)return e}player(e){if(void 0!==e)return`<iframe class="modal__trailer-video" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/${e}?autoplay=1" frameborder="0" allow="autoplay; fullscreen"></iframe>`;document.querySelector(".js-trailer-btn").textContent="Sorry, trailer is not found"}lightboxForTrailer(e){return c.create(e).show()}showTrailer(){this.fetchTrailer().then(this.player).then(this.lightboxForTrailer)}constructor(e,t){this.trailerId=e,this.trailerTitle=t}}var f;f=new URL(s("kyEFX").resolve("6Y9A4"),import.meta.url).toString(),l.default.mainList.addEventListener("click",(function(e){l.default.modalFilmInfoRef.innerHTML="";const t=e.target.closest(".movieCard");if(!t)return;const r=t.getAttribute("data");l.default.backdropFilmRef.classList.remove("is-hidden"),l.default.modalFilmInfoRef.classList.remove("is-hidden"),l.default.body.classList.add("no-scroll"),i=r,p.getMoviesByID(i).then((e=>{!function({title:e,popularity:t,original_title:r,vote_average:i,genres:s,poster_path:o,overview:a,vote_count:c,id:h}){const u="https://image.tmdb.org/t/p/",d="w500",p=s.map((e=>e.name)).join(", ");l.default.modalFilmInfoRef.innerHTML=`<button class="modal__btn-close">\n     <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="14"\n        height="14"\n        fill="currentColor"\n        class="modal__icon-close"\n        viewBox="0 0 16 16"\n      >\n        <path\n          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"\n        />\n      </svg>\n    </button>\n  <div class="modal-film__img">\n    <div class="modal-film__wrapper">\n    <img\n      src="${o?`${u}${d}${o}`:n(f)}"\n      alt="${e}"\n      class="modal-film__poster"\n      loading="lazy" \n    />\n    </div>\n    <div class='modal__trailer-wrapper'>\n      <button class='modal__trailer-btn js-trailer-btn'\n      type='button'\n      data-id='${h}'\n      data-name='${r}'>\n      watch trailer\n      </button>\n    </div> \n  </div>\n  <div class="modal-film__description">\n  <h2 class="modal-film__title">${e}</h2>\n  <ul class="modal-film__table">\n    <li class="modal-film__table-row">\n      <p class="modal-film__table-description">Vote / Votes</p>\n      <p class="modal-film__table-value">\n        <span class="modal-film__table-vote">${i.toFixed(1)}</span\n        ><span class="modal-film__table-slash"> / </span\n        ><span class="modal-film__table-votes">${c}</span>\n      </p>\n    </li>\n    <li class="modal-film__table-row">\n      <p class="modal-film__table-description">Popularity</p>\n      <p class="modal-film__table-value popularity-value">${t}</p>\n    </li>\n    <li class="modal-film__table-row">\n      <p class="modal-film__table-description">Original Title</p>\n      <p class="modal-film__table-value">${r}</p>\n    </li>\n    <li class="modal-film__table-row">\n      <p class="modal-film__table-description">Genre</p>\n      <p class="modal-film__table-value">${p}</p>\n    </li>\n  </ul>\n  <h3 class="modal-film__about">About</h3>\n  <p class="modal-film__abot-text">${a}\n  </p>\n  <ul class="modal-film__container-btn">\n    <li>\n\n      <button class="modal-btn modal-film_btn-watched" type="button">add to watched</button>\n    </li>\n    <li>\n      <button class="modal-btn modal-film_btn-queue" type="button">add to queue</button>\n\n    </li>\n  </ul>\n  </div>`,document.querySelector(".js-trailer-btn").addEventListener("click",v)}(e)})),document.addEventListener("keydown",m),document.addEventListener("click",_);var i}));const p=new a;function m(e){"Escape"===e.key&&(g(),document.querySelector(".basicLightbox").remove())}function _(e){(e.target.classList.contains("modal-film__backdrop")||e.target.classList.contains("modal__btn-close")||e.target.classList.contains("modal__icon-close"))&&g()}function g(){l.default.backdropFilmRef.classList.add("is-hidden"),l.default.modalFilmInfoRef.classList.add("is-hidden"),l.default.body.classList.remove("no-scroll"),document.removeEventListener("click",_),document.removeEventListener("keydown",m)}function v(e){const t=e.target.dataset.id,n=e.target.dataset.name;new d(t,n).showTrailer()}var y,b=s("CNRfc"),w=(l=s("krGWQ"),{});window,
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */
y=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,r,i,s,o=Object.prototype.hasOwnProperty;for(i=1,s=arguments.length;i<s;i+=1)for(r in n=arguments[i])o.call(n,r)&&(e[r]=n[r]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var r=n(2),i=n(17),s=n(6);e.exports=function(e,t,n){r(e)?i(e,t,n):s(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var r;for(r in n=n||null,e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))break}},function(e,t,n){var r=n(18),i=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&r(n,e),t.hasOwnProperty("static")&&(i(n,t.static),delete t.static),i(n.prototype,t),n}},function(e,t,n){var r=n(2);e.exports=function(e,t,n){var i,s;if(n=n||0,!r(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(s=t.length,i=n;n>=0&&i<s;i+=1)if(t[i]===e)return i;return-1}},function(e,t,n){var r=n(29),i=n(30),s=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),i=s(e)?e(t):r(e,t);return n.innerHTML=i,n.firstChild},bind:function(e,t){var n,r=Array.prototype.slice;return e.bind?e.bind.apply(e,r.call(arguments,1)):(n=r.call(arguments,2),function(){return e.apply(t,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var r=n(13),i=n(7),s=n(0),o=n(1),a=n(20),l=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},h=i({init:function(e,t){this._options=s({},c,t),this._currentPage=0,this._view=new a(e,this._options,l.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&l.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===e;return this._options.centerAlign?r?t-1:t+n:r?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),r=this._getPageIndex(e),i=this._getPageIndex(n),s=this._getEdge(e);return t.leftPageNumber=s.left,t.rightPageNumber=s.right,t.prevMore=r>1,t.nextMore=r<i,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,r,i=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(r=Math.floor(s/2),(n=(t=Math.max(e-r,1))+s-1)>i&&(t=Math.max(i-s+1,1),n=i)):(t=(o-1)*s+1,n=o*s,n=Math.min(n,i)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(h),e.exports=h},function(e,t,n){var r=n(0),i=n(14),s=n(4),o=n(16),a=n(2),l=n(5),c=n(3),h=/\s+/g;function u(){this.events=null,this.contexts=null}u.mixin=function(e){r(e.prototype,u.prototype)},u.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},u.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},u.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},u.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},u.prototype._memorizeContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},u.prototype._forgetContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},u.prototype._bindEvent=function(e,t,n){var r=this._safeEvent(e);this._memorizeContext(n),r.push(this._getHandlerItem(t,n))},u.prototype.on=function(e,t,n){var r=this;s(e)?(e=e.split(h),c(e,(function(e){r._bindEvent(e,t,n)}))):o(e)&&(n=t,c(e,(function(e,t){r.on(t,e,n)})))},u.prototype.once=function(e,t,n){var r=this;if(o(e))return n=t,void c(e,(function(e,t){r.once(t,e,n)}));this.on(e,(function i(){t.apply(n,arguments),r.off(e,i,n)}),n)},u.prototype._spliceMatches=function(e,t){var n,r=0;if(a(e))for(n=e.length;r<n;r+=1)!0===t(e[r])&&(e.splice(r,1),n-=1,r-=1)},u.prototype._matchHandler=function(e){var t=this;return function(n){var r=e===n.handler;return r&&t._forgetContext(n.context),r}},u.prototype._matchContext=function(e){var t=this;return function(n){var r=e===n.context;return r&&t._forgetContext(n.context),r}},u.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(r){var i=e===r.handler,s=t===r.context,o=i&&s;return o&&n._forgetContext(r.context),o}},u.prototype._offByEventName=function(e,t){var n=this,r=l(t),i=n._matchHandler(t);e=e.split(h),c(e,(function(e){var t=n._safeEvent(e);r?n._spliceMatches(t,i):(c(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},u.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);c(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},u.prototype._offByObject=function(e,t){var n,r=this;this._indexOfContext(e)<0?c(e,(function(e,t){r.off(t,e)})):s(t)?(n=this._matchContext(e),r._spliceMatches(this._safeEvent(t),n)):l(t)?(n=this._matchHandlerAndContext(t,e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)}))):(n=this._matchContext(e),c(this._safeEvent(),(function(e){r._spliceMatches(e,n)})))},u.prototype.off=function(e,t){s(e)?this._offByEventName(e,t):arguments.length?l(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},u.prototype.fire=function(e){this.invoke.apply(this,arguments)},u.prototype.invoke=function(e){var t,n,r,i;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),r=0;t[r];){if(!1===(i=t[r]).handler.apply(i.context,n))return!1;r+=1}return!0},u.prototype.hasListener=function(e){return this.getListenerLength(e)>0},u.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=u},function(e,t,n){var r=n(1),i=n(15);e.exports=function(e){return!r(e)&&!i(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var r=0,i=e.length;for(n=n||null;r<i&&!1!==t.call(n,e[r],r,e);r+=1);}},function(e,t,n){var r=n(19);e.exports=function(e,t){var n=r(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var r=n(3),i=n(7),s=n(21),o=n(22),a=n(24),l=n(25),c=n(0),h=n(4),u=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],m=["prev","next"],_=i({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=c({},f,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(h(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!u(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){r(p,(function(e){this._buttons[e]=d.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){r(p,(function(e){var t="disabled"+d.capitalizeFirstLetter(e);this._buttons[t]=d.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){r(m,(function(e){var t=e+"More";this._buttons[t]=d.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,l(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,l(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,r=e.leftPageNumber,i=e.rightPageNumber;for(n=r;n<=i;n+=1)n===e.page?t=d.createElementByTemplate(this._template.currentPage,{page:n}):(t=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==r||e.prevMore||l(t,this._firstItemClassName),n!==i||e.nextMore||l(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,r,i=s(t);a(t),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),e(r,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return r(n,(function(n,r){return!d.isContained(e,n)||(t=r,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(t=this._enabledPageElements[n],d.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=_},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var r=n(4),i=n(3),s=n(23);function o(e,t,n,r){function o(t){n.call(r||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,r){var o=s(e,t),a=!1;i(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:r})}(e,t,n,o)}e.exports=function(e,t,n,s){r(t)?i(t.split(/\s+/g),(function(t){o(e,t,n,s)})):i(t,(function(t,r){o(e,r,t,n)}))}},function(e,t,n){var r="_feEventKey";e.exports=function(e,t){var n,i=e[r];return i||(i=e[r]={}),(n=i[t])||(n=i[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var r=n(3),i=n(8),s=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,l=[];a?r(n,(function(t){e.classList.add(t)})):((t=s(e))&&(n=[].concat(t.split(/\s+/),n)),r(n,(function(e){i(e,l)<0&&l.push(e)})),o(e,l))}},function(e,t,n){var r=n(1);e.exports=function(e){return e&&e.className?r(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var r=n(2),i=n(1);e.exports=function(e,t){t=(t=r(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var r=n(8),i=n(3),s=n(2),o=n(4),a=n(0),l=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,h=/\[\s?|\s?\]/,u=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,p=/"|'/g,m=/^-?\d+\.?\d*$/,_={if:function(e,t,n){var r=function(e,t){var n=[e],r=[],s=0,o=0;return i(t,(function(e,i){0===e.indexOf("if")?s+=1:"/if"===e?s-=1:s||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),r.push(t.slice(o,i)),o=i+1)})),r.push(t.slice(o)),{exps:n,sourcesInsideIf:r}}(e,t),s=!1,o="";return i(r.exps,(function(e,t){return(s=b(e,n))&&(o=w(r.sourcesInsideIf[t],n)),!s})),o},each:function(e,t,n){var r=b(e,n),o=s(r)?"@index":"@key",l={},c="";return i(r,(function(e,r){l[o]=r,l["@this"]=e,a(n,l),c+=w(t.slice(),n)})),c},with:function(e,t,n){var i=r("as",e),s=e[i+1],o=b(e.slice(0,i),n),l={};return l[s]=o,w(t,a(n,l))||""}},g=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,r,i=[],s=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)r=n.index,i.push(e.slice(s,r)),s=r+n[0].length,n=t.exec(e);return i.push(e.slice(s)),i};function v(e,t){var n,r=t[e];return"true"===e?r=!0:"false"===e?r=!1:f.test(e)?r=e.replace(p,""):c.test(e)?r=v((n=e.split(h))[0],t)[v(n[1],t)]:u.test(e)?r=v((n=e.split(d))[0],t)[n[1]]:m.test(e)&&(r=parseFloat(e)),r}function y(e,t,n){for(var r,i,s,a,l=_[e],c=1,h=2,u=t[h];c&&o(u);)0===u.indexOf(e)?c+=1:0===u.indexOf("/"+e)&&(c-=1,r=h),u=t[h+=2];if(c)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=l(t[0].split(" ").slice(1),(i=0,s=r,(a=t.splice(i+1,s-i)).pop(),a),n),t}function b(e,t){var n=v(e[0],t);return n instanceof Function?function(e,t,n){var r=[];return i(t,(function(e){r.push(v(e,n))})),e.apply(null,r)}(n,e.slice(1),t):n}function w(e,t){for(var n,r,i,s=1,a=e[s];o(a);)r=(n=a.split(" "))[0],_[r]?(i=y(r,e.splice(s,e.length-s),t),e=e.concat(i)):e[s]=b(n,t),a=e[s+=2];return e.join("")}e.exports=function(e,t){return w(g(e,l),t)}},function(e,t,n){var r=n(1),i=n(31);e.exports=function(e,t){var n=location.hostname,s="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(s);(r(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var r=n(6);e.exports=function(e,t){var n=document.createElement("img"),i="";return r(t,(function(e,t){i+="&"+t+"="+e})),i=i.substring(1),n.src=e+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},w=y();var I=s("04jNI");l.default.searchForm.addEventListener("submit",(function(e){e.preventDefault();const{elements:{searchQuery:t}}=e.currentTarget;if(!t.value)return void(l.default.warningOnSearch.textContent="Please enter a valid movie name!");const n=t.value,r=encodeURI(n);T.query=r,(0,I.onSpinnerEnabled)(),T.getSearchMovies().then((e=>{l.default.searchErrorImg.classList.add("visually-hidden");const t=(0,b.createMovieCard)(e.results);return C.reset(e.total_results),t})).then((e=>{(0,I.onSpinnerDisabled)(),e?(l.default.mainList.innerHTML="",l.default.mainList.insertAdjacentHTML("beforeend",e),C.on("afterMove",S),l.default.warningOnSearch.textContent="",l.default.searchForm.reset()):(l.default.warningOnSearch.textContent="Sorry, there are no results found. Try searching for something else!",l.default.mainList.innerHTML="",l.default.searchErrorImg.classList.remove("visually-hidden"),l.default.searchForm.reset())}))}));const T=new a,E=document.querySelector("#pagination"),C=new(n(w))(E,{totalItems:0,itemsPerPage:20,visiblePages:5,page:1});function S(e){T.setPage(e.page),(0,I.onSpinnerEnabled)(),T.getSearchMovies().then((e=>(0,b.createMovieCard)(e.results))).then((e=>{(0,I.onSpinnerDisabled)(),l.default.mainList.innerHTML=e})),window.scrollTo({top:0,left:0,behavior:"smooth"})}(l=s("krGWQ")).default.footerButtomEl.addEventListener("click",(function(){l.default.backdropFooterEl.classList.remove("is-hidden"),l.default.body.classList.add("no-scroll")})),l.default.backdropFooterEl.addEventListener("click",(function(e){const t=e.target.classList.contains("backdrop__button"),n=e.target.classList.contains("backdrop");if(l.default.body.classList.remove("no-scroll"),!t&&!n)return;l.default.backdropFooterEl.classList.add("is-hidden")})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&(l.default.backdropFooterEl.classList.add("is-hidden"),l.default.body.classList.remove("no-scroll"))}));l=s("krGWQ"),b=s("CNRfc"),I=s("04jNI");const k=new a,R=document.querySelector("#pagination"),N=new(n(w))(R,{totalItems:0,itemsPerPage:20,visiblePages:5,page:1});let P=N.getCurrentPage();function O(e){k.setPage(e.page),P=e.page,(0,I.onSpinnerEnabled)(),k.getTrendingMovies().then((e=>(0,b.createMovieCard)(e.results))).then((e=>{(0,I.onSpinnerDisabled)(),l.default.mainList.innerHTML=e})),window.scrollTo({top:0,left:0,behavior:"smooth"})}var x;x=P,k.setPage(x),(0,I.onSpinnerEnabled)(),k.getTrendingMovies().then((e=>{l.default.searchErrorImg.classList.add("visually-hidden");const t=(0,b.createMovieCard)(e.results);return N.reset(e.total_results),t})).then((e=>{(0,I.onSpinnerDisabled)(),N.on("afterMove",O),l.default.mainList.insertAdjacentHTML("beforeend",e)})),s("04jNI"),s("4S0r6"),s("74Aiq");l=s("krGWQ");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=!1,A=!1,M="${JSCORE_VERSION}",D=function(e,t){if(!e)throw U(t)},U=function(e){return new Error("Firebase Database ("+M+") INTERNAL ASSERT FAILED: "+e)},F=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},j={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,h=(3&i)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),r.push(n[c],n[h],n[u],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(F(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},q=function(e){const t=F(e);return j.encodeByteArray(t,!0)},H=function(e){return q(e).replace(/\./g,"")},W=function(e){try{return j.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){return V(void 0,e)}function V(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=V(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function G(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function K(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Y(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function J(){const e=$();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function X(){return!0===L||!0===A}class Q extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Z.prototype.create)}}class Z{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(ee,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Q(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const ee=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e){return JSON.parse(e)}function ne(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=te(W(s[0])||""),n=te(W(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},ie=function(e){const t=re(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},se=function(e){const t=re(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ae(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function le(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ce(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function he(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(ue(n)&&ue(s)){if(!he(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function ue(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function de(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function fe(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function pe(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^o&(a^l),i=1518500249):(r=o^a^l,i=1859775393):e<60?(r=o&a|l&(o|a),i=2400959708):(r=o^a^l,i=3395469782);const t=(s<<5|s>>>27)+r+c+i+n[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function _e(e,t){const n=new ge(e,t);return n.subscribe.bind(n)}class ge{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ve),void 0===r.error&&(r.error=ve),void 0===r.complete&&(r.complete=ve);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function ve(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,D(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},we=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ie(e){return e&&e._delegate?e._delegate:e}class Te{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ee{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new z;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Ce{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ee(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se=[];var ke,Re;(Re=ke||(ke={}))[Re.DEBUG=0]="DEBUG",Re[Re.VERBOSE=1]="VERBOSE",Re[Re.INFO=2]="INFO",Re[Re.WARN=3]="WARN",Re[Re.ERROR=4]="ERROR",Re[Re.SILENT=5]="SILENT";const Ne={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},Pe=ke.INFO,Oe={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},xe=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Oe[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Le{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ne[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Pe,this._logHandler=xe,this._userLogHandler=null,Se.push(this)}}let Ae,Me;const De=new WeakMap,Ue=new WeakMap,Fe=new WeakMap,je=new WeakMap,qe=new WeakMap;let He={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Ue.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Fe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ve(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function We(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Me||(Me=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ze(this),t),Ve(De.get(this))}:function(...t){return Ve(e.apply(ze(this),t))}:function(t,...n){const r=e.call(ze(this),t,...n);return Fe.set(r,t.sort?t.sort():[t]),Ve(r)}}function Be(e){return"function"==typeof e?We(e):(e instanceof IDBTransaction&&function(e){if(Ue.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Ue.set(e,t)}(e),t=e,(Ae||(Ae=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,He):e);var t}function Ve(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Ve(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&De.set(t,e)})).catch((()=>{})),qe.set(t,e),t}(e);if(je.has(e))return je.get(e);const t=Be(e);return t!==e&&(je.set(e,t),qe.set(t,e)),t}const ze=e=>qe.get(e);function $e(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ve(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Ve(o.result),e.oldVersion,e.newVersion,Ve(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Ge=["get","getKey","getAll","getAllKeys","count"],Ke=["put","add","delete","clear"],Ye=new Map;function Je(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ye.get(t))return Ye.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ke.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ge.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Ye.set(t,s),s}He=(e=>({...e,get:(t,n,r)=>Je(t,n)||e.get(t,n,r),has:(t,n)=>!!Je(t,n)||e.has(t,n)}))(He);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Qe=new Le("@firebase/app"),Ze={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},et=new Map,tt=new Map;function nt(e,t){try{e.container.addComponent(t)}catch(n){Qe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function rt(e){const t=e.name;if(tt.has(t))return Qe.debug(`There were multiple attempts to register component ${t}.`),!1;tt.set(t,e);for(const t of et.values())nt(t,e);return!0}function it(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const st=new Z("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ot{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw st.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Te("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e="[DEFAULT]"){const t=et.get(e);if(!t)throw st.create("no-app",{appName:e});return t}function lt(e,t,n){var r;let i=null!==(r=Ze[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Qe.warn(e.join(" "))}rt(new Te(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let ct=null;function ht(){return ct||(ct=$e("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw st.create("idb-open",{originalErrorMessage:e.message})}))),ct}async function ut(e,t){var n;try{const n=(await ht()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,dt(e)),n.done}catch(e){if(e instanceof Q)Qe.warn(e.message);else{const t=st.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});Qe.warn(t.message)}}}function dt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=pt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=pt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),_t(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_t(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=H(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function pt(){return(new Date).toISOString().substring(0,10)}class mt{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await ht()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(dt(e))}catch(e){if(e instanceof Q)Qe.warn(e.message);else{const n=st.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});Qe.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ut(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ut(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function _t(e){return H(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt;gt="",rt(new Te("platform-logger",(e=>new Xe(e)),"PRIVATE")),rt(new Te("heartbeat",(e=>new ft(e)),"PRIVATE")),lt("@firebase/app","0.7.32",gt),lt("@firebase/app","0.7.32","esm2017"),lt("fire-js","");function vt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function yt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bt=yt,wt=new Z("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),It=new Le("@firebase/auth");function Tt(e,...t){It.logLevel<=ke.ERROR&&It.error(`Auth (9.9.4): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e,...t){throw kt(e,...t)}function Ct(e,...t){return kt(e,...t)}function St(e,t,n){const r=Object.assign(Object.assign({},bt()),{[t]:n});return new Z("auth","Firebase",r).create(t,{appName:e.name})}function kt(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return wt.create(e,...t)}function Rt(e,t,...n){if(!e)throw kt(t,...n)}function Nt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Tt(t),new Error(t)}function Pt(e,t){e||Nt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Map;function xt(e){Pt(e instanceof Function,"Expected a class definition");let t=Ot.get(e);return t?(Pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ot.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function At(){return"http:"===Mt()||"https:"===Mt()}function Mt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(At()||K()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{get(){return Dt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Pt(t>e,"Short delay should be less than long delay!"),this.isMobile=G()||Y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,t){Pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ht=new Ut(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Bt(e,t,n,r,i={}){return Vt(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=de(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),jt.fetch()($t(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Vt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},qt),t);try{const t=new Gt(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Kt(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Kt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Kt(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Kt(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw St(e,a,o);Et(e,a)}}catch(t){if(t instanceof Q)throw t;Et(e,"network-request-failed")}}async function zt(e,t,n,r,i={}){const s=await Bt(e,t,n,r,i);return"mfaPendingCredential"in s&&Et(e,"multi-factor-auth-required",{_serverResponse:s}),s}function $t(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ft(e.config,i):`${e.config.apiScheme}://${i}`}class Gt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ct(this.auth,"network-request-failed"))),Ht.get())}))}}function Kt(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(e){return 1e3*Number(e)}function Xt(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return Tt("JWT malformed, contained fewer than 3 sections"),null;try{const e=W(r);return e?JSON.parse(e):(Tt("Failed to decode base64 JWT payload"),null)}catch(e){return Tt("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qt(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Q&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Zt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{_initializeTime(){this.lastSignInTime=Yt(this.lastLoginAt),this.creationTime=Yt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Qt(e,async function(e,t){return Bt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Rt(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=vt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const h=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!h&&u,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new en(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Rt(e.idToken,"internal-error"),Rt(void 0!==e.idToken,"internal-error"),Rt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Xt(e);return Rt(t,"internal-error"),Rt(void 0!==t.exp,"internal-error"),Rt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Rt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Vt(e,{},(async()=>{const n=de({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=$t(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",jt.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new nn;return n&&(Rt("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Rt("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Rt("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nn,this.toJSON())}_performRefresh(){return Nt("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t){Rt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class sn{async getIdToken(e){const t=await Qt(this,this.stsTokenManager.getToken(this.auth,e));return Rt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ie(e),r=await n.getIdToken(t),i=Xt(r);Rt(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yt(Jt(i.auth_time)),issuedAtTime:Yt(Jt(i.iat)),expirationTime:Yt(Jt(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ie(e);await tn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Rt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Rt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await tn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qt(this,async function(e,t){return Bt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,u=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,_=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:I}=t;Rt(v&&I,e,"internal-error");const T=nn.fromJSON(this.name,I);Rt("string"==typeof v,e,"internal-error"),rn(h,e.name),rn(u,e.name),Rt("boolean"==typeof y,e,"internal-error"),Rt("boolean"==typeof b,e,"internal-error"),rn(d,e.name),rn(f,e.name),rn(p,e.name),rn(m,e.name),rn(_,e.name),rn(g,e.name);const E=new sn({uid:v,auth:e,email:u,emailVerified:y,displayName:h,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:_,lastLoginAt:g});return w&&Array.isArray(w)&&(E.providerData=w.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new nn;r.updateFromServerResponse(t);const i=new sn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await tn(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=vt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new en(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}on.type="NONE";const an=on;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(e,t,n){return`firebase:${e}:${t}:${n}`}class cn{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new cn(xt(an),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||xt(an);const s=ln(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=sn._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new cn(i,e,n)):new cn(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ln(this.userKey,r.apiKey,i),this.fullPersistenceKey=ln("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(un(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_n(t))return"Blackberry";if(gn(t))return"Webos";if(dn(t))return"Safari";if((t.includes("chrome/")||fn(t))&&!t.includes("edge/"))return"Chrome";if(mn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function un(e=$()){return/firefox\//i.test(e)}function dn(e=$()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fn(e=$()){return/crios\//i.test(e)}function pn(e=$()){return/iemobile/i.test(e)}function mn(e=$()){return/android/i.test(e)}function _n(e=$()){return/blackberry/i.test(e)}function gn(e=$()){return/webos/i.test(e)}function vn(e=$()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function yn(){return J()&&10===document.documentMode}function bn(e=$()){return vn(e)||mn(e)||gn(e)||_n(e)||/windows phone/i.test(e)||pn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function wn(e,t=[]){let n;switch(e){case"Browser":n=hn($());break;case"Worker":n=`${hn($())}-${e}`;break;default:n=e}return`${n}/JsCore/9.9.4/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xt(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Rt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await tn(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ie(e):null;return t&&Rt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Rt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(xt(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Z("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xt(e)||this._popupRedirectResolver;Rt(t,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Rt(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Rt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cn(this),this.idTokenSubscription=new Cn(this),this.beforeStateQueue=new In(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function En(e){return Ie(e)}class Cn{get next(){return Rt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=_e((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn{toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,t){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(e,t){return Bt(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rn extends Sn{static _fromEmailAndPassword(e,t){return new Rn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Rn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return zt(e,"POST","/v1/accounts:signInWithPassword",Wt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return zt(e,"POST","/v1/accounts:signInWithEmailLink",Wt(e,t))}(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return kn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return zt(e,"POST","/v1/accounts:signInWithEmailLink",Wt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(e,t){return zt(e,"POST","/v1/accounts:signInWithIdp",Wt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Sn{static _fromParams(e){const t=new Pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=vt(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Pn(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Nn(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Nn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Nn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=de(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xn extends Sn{static _fromVerification(e,t){return new xn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new xn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return zt(e,"POST","/v1/accounts:signInWithPhoneNumber",Wt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await zt(e,"POST","/v1/accounts:signInWithPhoneNumber",Wt(e,t));if(n.temporaryProof)throw Kt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return zt(e,"POST","/v1/accounts:signInWithPhoneNumber",Wt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),On)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new xn({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{static parseLink(e){const t=function(e){const t=fe(pe(e)).link,n=t?fe(pe(t)).deep_link_id:null,r=fe(pe(e)).deep_link_id;return(r?fe(pe(r)).link:null)||r||n||t||e}(e);try{return new Ln(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=fe(pe(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Rt(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class An{static credential(e,t){return Rn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ln.parseLink(t);return Rt(n,"argument-error"),Rn._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=An.PROVIDER_ID}}An.PROVIDER_ID="password",An.EMAIL_PASSWORD_SIGN_IN_METHOD="password",An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Mn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Un extends Dn{static credential(e){return Pn._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com",Un.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fn extends Dn{static credential(e,t){return Pn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Fn.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}Fn.GOOGLE_SIGN_IN_METHOD="google.com",Fn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jn extends Dn{static credential(e){return Pn._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}jn.GITHUB_SIGN_IN_METHOD="github.com",jn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn extends Dn{static credential(e,t){return Pn._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return qn.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Hn(e,t){return zt(e,"POST","/v1/accounts:signUp",Wt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn.TWITTER_SIGN_IN_METHOD="twitter.com",qn.PROVIDER_ID="twitter.com";class Wn{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await sn._fromIdTokenResponse(e,n,r),s=Bn(n);return new Wn({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Bn(n);return new Wn({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function Bn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vn extends Q{static _fromErrorAndOperation(e,t,n,r){return new Vn(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Vn.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function zn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Vn._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(e,t,n=!1){const r=await Qt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Wn._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Gn(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await Qt(e,zn(i,s,t,e),n);Rt(r.idToken,i,"internal-error");const o=Xt(r.idToken);Rt(o,i,"internal-error");const{sub:a}=o;return Rt(e.uid===a,i,"user-mismatch"),Wn._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&Et(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(e,t,n=!1){const r="signIn",i=await zn(e,r,t),s=await Wn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Yn(e,t){return Kn(En(e),t)}async function Jn(e,t,n){const r=En(e),i=await Hn(r,{returnSecureToken:!0,email:t,password:n}),s=await Wn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Ie(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Qt(r,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Bt(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function Qn(e){return Ie(e).signOut()}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Zn{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);yn()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=$();return dn(e)||vn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=bn(),this._shouldAllowMigration=!0}}er.type="LOCAL";const tr=er;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Zn{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}nr.type="SESSION";const rr=nr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ir{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new ir(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sr(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir.receivers=[];class or{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=sr("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lr(){return void 0!==ar().WorkerGlobalScope&&"function"==typeof ar().importScripts}class cr{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function hr(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ur(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new cr(e).toPromise()}(),t(await ur()))}))}))}async function dr(e,t,n){const r=hr(e,!0).put({fbase_key:t,value:n});return new cr(r).toPromise()}function fr(e,t){const n=hr(e,!0).delete(t);return new cr(n).toPromise()}class pr{async _openDb(){return this.db||(this.db=await ur()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ir._getInstance(lr()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new or(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ur();return await dr(e,"__sak","1"),await fr(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>dr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=hr(e,!1).get(t),r=await new cr(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>fr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=hr(e,!1).getAll();return new cr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}pr.type="LOCAL";const mr=pr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Ct("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function gr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
gr("rcb"),new Ut(3e4,6e4);async function vr(e,t,n){var r;const i=await n.verify();try{let s;if(Rt("string"==typeof i,e,"argument-error"),Rt("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Rt("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Bt(e,"POST","/v2/accounts/mfaEnrollment:start",Wt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Rt("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Rt(n,e,"missing-multi-factor-info");const o=await function(e,t){return Bt(e,"POST","/v2/accounts/mfaSignIn:start",Wt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Bt(e,"POST","/v1/accounts:sendVerificationCode",Wt(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yr{verifyPhoneNumber(e,t){return vr(this.auth,e,Ie(t))}static credential(e,t){return xn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return yr.credentialFromTaggedObject(t)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?xn._fromTokenResponse(t,n):null}constructor(e){this.providerId=yr.PROVIDER_ID,this.auth=En(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function br(e,t){return t?xt(t):(Rt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yr.PROVIDER_ID="phone",yr.PHONE_SIGN_IN_METHOD="phone";class wr extends Sn{_getIdTokenResponse(e){return Nn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Nn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Ir(e){return Kn(e.auth,new wr(e),e.bypassAuthState)}function Tr(e){const{auth:t,user:n}=e;return Rt(n,t,"internal-error"),Gn(n,new wr(e),e.bypassAuthState)}async function Er(e){const{auth:t,user:n}=e;return Rt(n,t,"internal-error"),$n(n,new wr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ir;case"linkViaPopup":case"linkViaRedirect":return Er;case"reauthViaPopup":case"reauthViaRedirect":return Tr;default:Et(this.auth,"internal-error")}}resolve(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Ut(2e3,1e4);class kr extends Cr{async executeNotNull(){const e=await this.execute();return Rt(e,this.auth,"internal-error"),e}async onExecution(){Pt(1===this.filter.length,"Popup operations only handle one event");const e=sr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ct(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Sr.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,kr.currentPopupAction&&kr.currentPopupAction.cancel(),kr.currentPopupAction=this}}kr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rr=new Map;class Nr extends Cr{async execute(){let e=Rr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=xr(t),r=Or(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Rr.set(this.auth._key(),e)}return this.bypassAuthState||Rr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Pr(e,t){Rr.set(e._key(),t)}function Or(e){return xt(e._redirectPersistence)}function xr(e){return ln("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(e,t,n=!1){const r=En(e),i=br(r,t),s=new Nr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Ar{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Dr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ct(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mr(e))}saveEventToCache(e){this.cachedEventUids.add(Mr(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Mr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Dr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ur=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fr=/^https?/;async function jr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Bt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(qr(e))return}catch(e){}Et(e,"unauthorized-domain")}function qr(e){const t=Lt(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Fr.test(n))return!1;if(Ur.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Ut(3e4,6e4);function Wr(){const e=ar().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Br=null;function Vr(e){return Br=Br||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Wr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wr(),n(Ct(e,"network-request-failed"))},timeout:Hr.get()})}if(null===(i=null===(r=ar().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=ar().gapi)||void 0===s?void 0:s.load)){const t=gr("iframefcb");return ar()[t]=()=>{gapi.load?o():n(Ct(e,"network-request-failed"))},_r(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Br=null,e}))}(e),Br}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Ut(5e3,15e3),$r={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kr(e){const t=e.config;Rt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ft(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.9.4"},i=Gr.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${de(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Yr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Jr{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Xr(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Yr),{width:r.toString(),height:i.toString(),top:s,left:o}),c=$().toLowerCase();n&&(a=fn(c)?"_blank":n),un(c)&&(t=t||"http://localhost",l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=$()){var t;return vn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Jr(null);const u=window.open(t||"",a,h);Rt(u,e,"popup-blocked");try{u.focus()}catch(e){}return new Jr(u)}function Qr(e,t,n,r,i,s){Rt(e.config.authDomain,e,"auth-domain-config-required"),Rt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.9.4",eventId:i};if(t instanceof Mn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",le(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Dn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?Ft(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${de(a).slice(1)}`}const Zr=class{async _openPopup(e,t,n,r){var i;Pt(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Xr(e,Qr(e,t,n,Lt(),r),sr())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Qr(e,t,n,Lt(),r),ar().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Pt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Vr(e),n=ar().gapi;return Rt(n,e,"internal-error"),t.open({where:document.body,url:Kr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$r,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Ct(e,"network-request-failed"),s=ar().setTimeout((()=>{r(i)}),zr.get());function o(){ar().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Ar(e);return t.register("authEvent",(t=>{Rt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Et(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bn()||dn()||vn()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rr,this._completeRedirectFn=Lr,this._overrideRedirectResult=Pr}};var ei;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ti{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Rt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ei="Browser",rt(new Te("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{Rt(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Rt(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:ei,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wn(ei)},o=new Tn(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),rt(new Te("auth-internal",(e=>{const t=En(e.getProvider("auth").getImmediate());return new ti(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),lt("@firebase/auth","0.20.6",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ei)),lt("@firebase/auth","0.20.6","esm2017");var ni=s("4TNnu");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ne(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:te(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return oe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new ii(t)}}catch(e){}return new si},ai=oi("localStorage"),li=oi("sessionStorage"),ci=new Le("@firebase/database"),hi=function(){let e=1;return function(){return e++}}(),ui=function(e){const t=be(e),n=new me;n.update(t);const r=n.digest();return j.encodeByteArray(r)},di=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=di.apply(null,r):t+="object"==typeof r?ne(r):r,t+=" "}return t};let fi=null,pi=!0;const mi=function(e,t){D(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(ci.logLevel=ke.VERBOSE,fi=ci.log.bind(ci),t&&li.set("logging_enabled",!0)):"function"==typeof e?fi=e:(fi=null,li.remove("logging_enabled"))},_i=function(...e){if(!0===pi&&(pi=!1,null===fi&&!0===li.get("logging_enabled")&&mi(!0)),fi){const t=di.apply(null,e);fi(t)}},gi=function(e){return function(...t){_i(e,...t)}},vi=function(...e){const t="FIREBASE INTERNAL ERROR: "+di(...e);ci.error(t)},yi=function(...e){const t=`FIREBASE FATAL ERROR: ${di(...e)}`;throw ci.error(t),new Error(t)},bi=function(...e){const t="FIREBASE WARNING: "+di(...e);ci.warn(t)},wi=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Ii=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=Pi(e),r=Pi(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},Ti=function(e,t){return e===t?0:e<t?-1:1},Ei=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ne(t))},Ci=function(e){if("object"!=typeof e||null===e)return ne(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=ne(t[r]),n+=":",n+=Ci(e[t[r]]);return n+="}",n},Si=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function ki(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ri=function(e){D(!wi(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Ni=new RegExp("^-?(0*)\\d{1,10}$"),Pi=function(e){if(Ni.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Oi=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw bi("Exception was thrown by user callback.",t),e}),Math.floor(0))}},xi=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){bi(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(_i("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bi(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class Mi{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}Mi.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Di=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ai.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ai.get("host:"+e)||this._host}}function Fi(e,t,n){let r;if(D("string"==typeof t,"typeof type must == string"),D("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return ki(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{incrementCounter(e,t=1){oe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return B(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi={},Hi={};function Wi(e){const t=e.toString();return qi[t]||(qi[t]=new ji),qi[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Oi((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Bi(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(X()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new zi(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Di.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Vi.forceAllow_=!0}static forceDisallow(){Vi.forceDisallow_=!0}static isAvailable(){return!X()&&(!!Vi.forceAllow_||!(Vi.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ne(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=q(t),r=Si(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(X())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ne(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gi(e),this.stats_=Wi(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Fi(t,"long_polling",e))}}class zi{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||_i("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){X()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{_i("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,X())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=hi(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=zi.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){_i("frame writing exception"),e.stack&&_i(e.stack),_i(e)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i=null;"undefined"!=typeof MozWebSocket?$i=MozWebSocket:"undefined"!=typeof WebSocket&&($i=WebSocket);class Gi{static connectionURL_(e,t,n,r,i){const s={v:"5"};return!X()&&"undefined"!=typeof location&&location.hostname&&Di.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s.ac=r),i&&(s.p=i),Fi(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ai.set("previous_websocket_failure",!0);try{let e;if(X()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${ri}/${ni.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new $i(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Gi.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==$i&&!Gi.forceDisallow_}static previouslyFailed(){return ai.isInMemoryStorage||!0===ai.get("previous_websocket_failure")}markConnectionHealthy(){ai.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=te(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=ne(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Si(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gi(this.connId),this.stats_=Wi(t),this.connURL=Gi.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}}Gi.responsesRequiredToBeHealthy=2,Gi.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{static get ALL_TRANSPORTS(){return[Vi,Gi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Gi&&Gi.isAvailable();let n=t&&!Gi.previouslyFailed();if(e.webSocketOnly&&(t||bi("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Gi];else{const e=this.transports_=[];for(const t of Ki.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Ki.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}Ki.globalTransportInitialized_=!1;class Yi{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=xi((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ei("t",e),n=Ei("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ei("t",e),n=Ei("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ei("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?vi("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&bi("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),xi((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xi((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ai.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gi("c:"+this.id+":"),this.transportManager_=new Ki(t),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){D(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends Xi{static getInstance(){return new Qi}getInitialEvent(e){return D("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||G()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function es(){return new Zi("")}function ts(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ns(e){return e.pieces_.length-e.pieceNum_}function rs(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Zi(e.pieces_,t)}function is(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ss(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function os(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Zi(t,0)}function as(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Zi)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Zi(n,0)}function ls(e){return e.pieceNum_>=e.pieces_.length}function cs(e,t){const n=ts(e),r=ts(t);if(null===n)return t;if(n===r)return cs(rs(e),rs(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function hs(e,t){if(ns(e)!==ns(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function us(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ns(e)>ns(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class ds{constructor(e,t){this.errorPrefix_=t,this.parts_=ss(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=we(this.parts_[e]);fs(this)}}function fs(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+ps(e))}function ps(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Xi{static getInstance(){return new ms}getInitialEvent(e){return D("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends Ji{sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(ne(i)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new z,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;_s.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&oe(e,"w")){const n=ae(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();bi(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||se(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ie(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ne(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):vi("Unrecognized action received from server: "+ne(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+_s.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},l=function(e){D(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?_i("getToken() completed but was canceled"):(_i("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new Yi(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{bi(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&bi(e),a())}}}interrupt(e){_i("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_i("Resuming connection for reason: "+e),delete this.interruptReasons_[e],le(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ci(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Zi(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){_i("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){_i("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";X()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ri.replace(/\./g,"-")]=1,G()?e["framework.cordova"]=1:Y()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qi.getInstance().currentlyOnline();return le(this.interruptReasons_)&&e}constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=_s.nextPersistentConnectionId_++,this.log_=gi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!X())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ms.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Qi.getInstance().on("online",this.onOnline_,this)}}_s.nextPersistentConnectionId_=0,_s.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gs{static Wrap(e,t){return new gs(e,t)}constructor(e,t){this.name=e,this.node=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new gs("[MIN_NAME]",e),r=new gs("[MIN_NAME]",t);return 0!==this.compare(n,r)}minPost(){return gs.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys;class bs extends vs{static get __EMPTY_NODE(){return ys}static set __EMPTY_NODE(e){ys=e}compare(e,t){return Ii(e.name,t.name)}isDefinedOn(e){throw U("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return gs.MIN}maxPost(){return new gs("[MAX_NAME]",ys)}makePost(e,t){return D("string"==typeof e,"KeyIndex indexValue must always be a string."),new gs(e,ys)}toString(){return".key"}}const ws=new bs;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Ts{copy(e,t,n,r,i){return new Ts(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Es.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Es.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ts.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ts.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ts.RED,this.left=null!=r?r:Es.EMPTY_NODE,this.right=null!=i?i:Es.EMPTY_NODE}}Ts.RED=!0,Ts.BLACK=!1;class Es{insert(e,t){return new Es(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ts.BLACK,null,null))}remove(e){return new Es(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ts.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Is(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Is(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}constructor(e,t=Es.EMPTY_NODE){this.comparator_=e,this.root_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cs(e,t){return Ii(e.name,t.name)}function Ss(e,t){return Ii(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks;Es.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ts(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Rs=function(e){return"number"==typeof e?"number:"+Ri(e):"string:"+e},Ns=function(e){if(e.isLeafNode()){const t=e.val();D("string"==typeof t||"number"==typeof t||"object"==typeof t&&oe(t,".sv"),"Priority must be a string or number.")}else D(e===ks||e.isEmpty(),"priority of unexpected type.");D(e===ks||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ps,Os,xs;class Ls{static set __childrenNodeConstructor(e){Ps=e}static get __childrenNodeConstructor(){return Ps}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ls(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Ls.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ls(e)?this:".priority"===ts(e)?this.priorityNode_:Ls.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Ls.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ts(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(D(".priority"!==n||1===ns(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Ls.__childrenNodeConstructor.EMPTY_NODE.updateChild(rs(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Rs(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ri(this.value_):this.value_,this.lazyHash_=ui(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ls.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ls.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Ls.VALUE_TYPE_ORDER.indexOf(t),i=Ls.VALUE_TYPE_ORDER.indexOf(n);return D(r>=0,"Unknown leaf type: "+t),D(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Ls.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,D(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ns(this.priorityNode_)}}Ls.VALUE_TYPE_ORDER=["object","boolean","number","string"];const As=new class extends vs{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?Ii(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return gs.MIN}maxPost(){return new gs("[MAX_NAME]",new Ls("[PRIORITY-POST]",xs))}makePost(e,t){const n=Os(e);return new gs(t,new Ls("[PRIORITY-POST]",n))}toString(){return".priority"}},Ms=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ms,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}}const Us=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Ts(a,o.node,Ts.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),h=i(l+1,r);return o=e[l],a=n?n(o):o,new Ts(a,o.node,Ts.BLACK,c,h)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),h=e[s],u=n?n(h):h;l(new Ts(u,h.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Ts.BLACK):(a(r,Ts.BLACK),a(r,Ts.RED))}return s}(new Ds(e.length));return new Es(r||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fs;const js={};class qs{static get Default(){return D(js&&As,"ChildrenNode.ts has not been loaded"),Fs=Fs||new qs({".priority":js},{".priority":As}),Fs}get(e){const t=ae(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Es?t:null}hasIndex(e){return oe(this.indexSet_,e.toString())}addIndex(e,t){D(e!==ws,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(gs.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?Us(n,e.getCompare()):js;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new qs(c,l)}addToIndexes(e,t){const n=ce(this.indexes_,((n,r)=>{const i=ae(this.indexSet_,r);if(D(i,"Missing index implementation for "+r),n===js){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(gs.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),Us(n,i.getCompare())}return js}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new gs(e.name,r))),i.insert(e,e.node)}}));return new qs(n,this.indexSet_)}removeFromIndexes(e,t){const n=ce(this.indexes_,(n=>{if(n===js)return n;{const r=t.get(e.name);return r?n.remove(new gs(e.name,r)):n}}));return new qs(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs;class Ws{static get EMPTY_NODE(){return Hs||(Hs=new Ws(new Es(Ss),null,qs.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hs}updatePriority(e){return this.children_.isEmpty()?this:new Ws(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Hs:t}}getChild(e){const t=ts(e);return null===t?this:this.getImmediateChild(t).getChild(rs(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(D(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new gs(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?Hs:this.priorityNode_;return new Ws(r,s,i)}}updateChild(e,t){const n=ts(e);if(null===n)return t;{D(".priority"!==ts(e)||1===ns(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(rs(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(As,((s,o)=>{t[s]=o.val(e),n++,i&&Ws.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Rs(this.getPriority().val())+":"),this.forEachChild(As,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":ui(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new gs(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new gs(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new gs(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,gs.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,gs.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bs?-1:0}withIndex(e){if(e===ws||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ws(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ws||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(As),n=t.getIterator(As);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===ws?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ns(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Ws.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Bs=new class extends Ws{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ws.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Es(Ss),Ws.EMPTY_NODE,qs.Default)}};Object.defineProperties(gs,{MIN:{value:new gs("[MIN_NAME]",Ws.EMPTY_NODE)},MAX:{value:new gs("[MAX_NAME]",Bs)}}),bs.__EMPTY_NODE=Ws.EMPTY_NODE,Ls.__childrenNodeConstructor=Ws,ks=Bs,function(e){xs=e}(Bs);function Vs(e,t=null){if(null===e)return Ws.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),D(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Ls(e,Vs(t))}if(e instanceof Array){let n=Ws.EMPTY_NODE;return ki(e,((t,r)=>{if(oe(e,t)&&"."!==t.substring(0,1)){const e=Vs(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Vs(t))}{const n=[];let r=!1;if(ki(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Vs(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new gs(e,i)))}})),0===n.length)return Ws.EMPTY_NODE;const i=Us(n,Cs,(e=>e.name),Ss);if(r){const e=Us(n,As.getCompare());return new Ws(i,Vs(t),new qs({".priority":e},{".priority":As}))}return new Ws(i,Vs(t),qs.Default)}}!function(e){Os=e}(Vs);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zs extends vs{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?Ii(e.name,t.name):i}makePost(e,t){const n=Vs(e),r=Ws.EMPTY_NODE.updateChild(this.indexPath_,n);return new gs(t,r)}maxPost(){const e=Ws.EMPTY_NODE.updateChild(this.indexPath_,Bs);return new gs("[MAX_NAME]",e)}toString(){return ss(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,D(!ls(e)&&".priority"!==ts(e),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new class extends vs{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Ii(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return gs.MIN}maxPost(){return gs.MAX}makePost(e,t){const n=Vs(e);return new gs(t,n)}toString(){return".value"}},Gs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ks(e){return{type:"value",snapshotNode:e}}function Ys(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Js(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Xs(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qs{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===As}copy(){const e=new Qs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=As}}function Zs(e){const t={};if(e.isDefault())return t;let n;return e.index_===As?n="$priority":e.index_===$s?n="$value":e.index_===ws?n="$key":(D(e.index_ instanceof zs,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=ne(n),e.startSet_&&(t.startAt=ne(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+ne(e.indexStartName_))),e.endSet_&&(t.endAt=ne(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+ne(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function eo(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==As&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Ji{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=to.getListenId_(e,n),o={};this.listens_[s]=o;const a=Zs(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),ae(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=to.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Zs(e._queryParams),n=e._path.toString(),r=new z;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+de(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=te(o.responseText)}catch(e){bi("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&bi("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=gi("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Ws.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(){return{value:null,children:new Map}}function io(e,t,n){if(ls(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=ts(t);e.children.has(r)||e.children.set(r,ro());io(e.children.get(r),t=rs(t),n)}}function so(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,r)=>{so(r,new Zi(t.toString()+"/"+e),n)}))}class oo{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ki(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;ki(e,((e,r)=>{r>0&&oe(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),xi(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new oo(e);const n=1e4+2e4*Math.random();xi(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lo,co;function ho(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(co=lo||(lo={}))[co.OVERWRITE=0]="OVERWRITE",co[co.MERGE=1]="MERGE",co[co.ACK_USER_WRITE=2]="ACK_USER_WRITE",co[co.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class uo{operationForChild(e){if(ls(this.path)){if(null!=this.affectedTree.value)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Zi(e));return new uo(es(),t,this.revert)}}return D(ts(this.path)===e,"operationForChild called for unrelated child."),new uo(rs(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=lo.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fo{operationForChild(e){return ls(this.path)?new fo(this.source,es(),this.snap.getImmediateChild(e)):new fo(this.source,rs(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=lo.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{operationForChild(e){if(ls(this.path)){const t=this.children.subtree(new Zi(e));return t.isEmpty()?null:t.value?new fo(this.source,es(),t.value):new po(this.source,es(),t)}return D(ts(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new po(this.source,rs(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=lo.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ls(e))return this.isFullyInitialized()&&!this.filtered_;const t=ts(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw U("Should only compare child_ events.");const r=new gs(t.childName,t.snapshotNode),i=new gs(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function go(e,t){return{eventCache:e,serverCache:t}}function vo(e,t,n,r){return go(new mo(t,n,r),e.serverCache)}function yo(e,t,n,r){return go(e.eventCache,new mo(t,n,r))}function bo(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function wo(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Io;class To{static fromObject(e){let t=new To(null);return ki(e,((e,n)=>{t=t.set(new Zi(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:es(),value:this.value};if(ls(e))return null;{const n=ts(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(rs(e),t);if(null!=i){return{path:as(new Zi(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ls(e))return this;{const t=ts(e),n=this.children.get(t);return null!==n?n.subtree(rs(e)):new To(null)}}set(e,t){if(ls(e))return new To(t,this.children);{const n=ts(e),r=(this.children.get(n)||new To(null)).set(rs(e),t),i=this.children.insert(n,r);return new To(this.value,i)}}remove(e){if(ls(e))return this.children.isEmpty()?new To(null):new To(null,this.children);{const t=ts(e),n=this.children.get(t);if(n){const r=n.remove(rs(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new To(null):new To(this.value,i)}return this}}get(e){if(ls(e))return this.value;{const t=ts(e),n=this.children.get(t);return n?n.get(rs(e)):null}}setTree(e,t){if(ls(e))return t;{const n=ts(e),r=(this.children.get(n)||new To(null)).setTree(rs(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new To(this.value,i)}}fold(e){return this.fold_(es(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(as(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,es(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(ls(e))return null;{const r=ts(e),i=this.children.get(r);return i?i.findOnPath_(rs(e),as(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,es(),t)}foreachOnPath_(e,t,n){if(ls(e))return this;{this.value&&n(t,this.value);const r=ts(e),i=this.children.get(r);return i?i.foreachOnPath_(rs(e),as(t,r),n):new To(null)}}foreach(e){this.foreach_(es(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(as(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(Io||(Io=new Es(Ti)),Io))()){this.value=e,this.children=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{static empty(){return new Eo(new To(null))}constructor(e){this.writeTree_=e}}function Co(e,t,n){if(ls(t))return new Eo(new To(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=cs(i,t);return s=s.updateChild(o,n),new Eo(e.writeTree_.set(i,s))}{const r=new To(n),i=e.writeTree_.setTree(t,r);return new Eo(i)}}}function So(e,t,n){let r=e;return ki(n,((e,n)=>{r=Co(r,as(t,e),n)})),r}function ko(e,t){if(ls(t))return Eo.empty();{const n=e.writeTree_.setTree(t,new To(null));return new Eo(n)}}function Ro(e,t){return null!=No(e,t)}function No(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(cs(n.path,t)):null}function Po(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(As,((e,n)=>{t.push(new gs(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new gs(e,n.value))})),t}function Oo(e,t){if(ls(t))return e;{const n=No(e,t);return new Eo(null!=n?new To(n):e.writeTree_.subtree(t))}}function xo(e){return e.writeTree_.isEmpty()}function Lo(e,t){return Ao(es(),e.writeTree_,t)}function Ao(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(D(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ao(as(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(as(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e,t){return Ko(t,e)}function Do(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));D(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Uo(t,r.path)?i=!1:us(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=jo(e.allWrites,Fo,es()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=ko(e.visibleWrites,r.path);else{ki(r.children,(t=>{e.visibleWrites=ko(e.visibleWrites,as(r.path,t))}))}return!0}return!1}function Uo(e,t){if(e.snap)return us(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&us(as(e.path,n),t))return!0;return!1}function Fo(e){return e.visible}function jo(e,t,n){let r=Eo.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)us(n,e)?(t=cs(n,e),r=Co(r,t,s.snap)):us(e,n)&&(t=cs(e,n),r=Co(r,es(),s.snap.getChild(t)));else{if(!s.children)throw U("WriteRecord should have .snap or .children");if(us(n,e))t=cs(n,e),r=So(r,t,s.children);else if(us(e,n))if(t=cs(e,n),ls(t))r=So(r,es(),s.children);else{const e=ae(s.children,ts(t));if(e){const n=e.getChild(rs(t));r=Co(r,es(),n)}}}}}return r}function qo(e,t,n,r,i){if(r||i){const s=Oo(e.visibleWrites,t);if(!i&&xo(s))return n;if(i||null!=n||Ro(s,es())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(us(e.path,t)||us(t,e.path))};return Lo(jo(e.allWrites,s,t),n||Ws.EMPTY_NODE)}return null}{const r=No(e.visibleWrites,t);if(null!=r)return r;{const r=Oo(e.visibleWrites,t);if(xo(r))return n;if(null!=n||Ro(r,es())){return Lo(r,n||Ws.EMPTY_NODE)}return null}}}function Ho(e,t,n,r){return qo(e.writeTree,e.treePath,t,n,r)}function Wo(e,t){return function(e,t,n){let r=Ws.EMPTY_NODE;const i=No(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(As,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Oo(e.visibleWrites,t);return n.forEachChild(As,((e,t)=>{const n=Lo(Oo(i,new Zi(e)),t);r=r.updateImmediateChild(e,n)})),Po(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Po(Oo(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Bo(e,t,n,r){return function(e,t,n,r,i){D(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=as(t,n);if(Ro(e.visibleWrites,s))return null;{const t=Oo(e.visibleWrites,s);return xo(t)?i.getChild(n):Lo(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Vo(e,t){return function(e,t){return No(e.visibleWrites,t)}(e.writeTree,as(e.treePath,t))}function zo(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=Oo(e.visibleWrites,t),c=No(l,es());if(null!=c)a=c;else{if(null==n)return[];a=Lo(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function $o(e,t,n){return function(e,t,n,r){const i=as(t,n),s=No(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return Lo(Oo(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Go(e,t){return Ko(as(e.treePath,t),e.writeTree)}function Ko(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{trackChildChange(e){const t=e.type,n=e.childName;D("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),D(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Xs(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Js(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Ys(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw U("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Xs(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Xo{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new mo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $o(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:wo(this.viewCache_),i=zo(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(e,t,n,r,i){const s=new Yo;let o,a;if(n.type===lo.OVERWRITE){const l=n;l.source.fromUser?o=ta(e,t,l.path,l.snap,r,i,s):(D(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!ls(l.path),o=ea(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===lo.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=as(n,r);na(t,ts(c))&&(a=ta(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=as(n,r);na(t,ts(c))||(a=ta(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(D(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=ia(e,t,l.path,l.children,r,i,a,s))}else if(n.type===lo.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=Vo(r,n))return t;{const a=new Xo(r,t,i),l=t.eventCache.getNode();let c;if(ls(n)||".priority"===ts(n)){let n;if(t.serverCache.isFullyInitialized())n=Ho(r,wo(t));else{const e=t.serverCache.getNode();D(e instanceof Ws,"serverChildren would be complete if leaf node"),n=Wo(r,e)}c=e.filter.updateFullNode(l,n,s)}else{const i=ts(n);let h=$o(r,i,t.serverCache);null==h&&t.serverCache.isCompleteForChild(i)&&(h=l.getImmediateChild(i)),c=null!=h?e.filter.updateChild(l,i,h,rs(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,Ws.EMPTY_NODE,rs(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Ho(r,wo(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Vo(r,es()),vo(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=Vo(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(ls(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ea(e,t,n,l.getNode().getChild(n),i,s,a,o);if(ls(n)){let r=new To(null);return l.getNode().forEachChild(ws,((e,t)=>{r=r.set(new Zi(e),t)})),ia(e,t,n,r,i,s,a,o)}return t}{let c=new To(null);return r.foreach(((e,t)=>{const r=as(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),ia(e,t,n,c,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==lo.LISTEN_COMPLETE)throw U("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=yo(t,s.getNode(),s.isFullyInitialized()||ls(n),s.isFiltered());return Zo(e,o,n,r,Jo,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=bo(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Ks(bo(t)))}}(t,o,l),{viewCache:o,changes:l}}function Zo(e,t,n,r,i,s){const o=t.eventCache;if(null!=Vo(r,n))return t;{let a,l;if(ls(n))if(D(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=wo(t),i=Wo(r,n instanceof Ws?n:Ws.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=Ho(r,wo(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=ts(n);if(".priority"===c){D(1===ns(n),"Can't have a priority with additional path components");const i=o.getNode();l=t.serverCache.getNode();const s=Bo(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const h=rs(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Bo(r,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=$o(r,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,i,s):o.getNode()}}return vo(t,a,o.isFullyInitialized()||ls(n),e.filter.filtersNodes())}}function ea(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(ls(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),e,null)}else{const e=ts(n);if(!l.isCompleteForPath(n)&&ns(n)>1)return t;const i=rs(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?h.updatePriority(l.getNode(),s):h.updateChild(l.getNode(),e,s,i,Jo,null)}const u=yo(t,c,l.isFullyInitialized()||ls(n),h.filtersNodes());return Zo(e,u,n,i,new Xo(i,u,s),a)}function ta(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const h=new Xo(i,t,s);if(ls(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=vo(t,c,!0,e.filter.filtersNodes());else{const i=ts(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=vo(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=rs(n),c=a.getNode().getImmediateChild(i);let u;if(ls(s))u=r;else{const e=h.getCompleteChild(i);u=null!=e?".priority"===is(s)&&e.getChild(os(s)).isEmpty()?e:e.updateChild(s,r):Ws.EMPTY_NODE}if(c.equals(u))l=t;else{l=vo(t,e.filter.updateChild(a.getNode(),i,u,s,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function na(e,t){return e.eventCache.isCompleteForChild(t)}function ra(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ia(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=ls(n)?r:new To(null).setTree(n,r);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(h.hasChild(n)){const l=ra(0,t.serverCache.getNode().getImmediateChild(n),r);c=ea(e,c,new Zi(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!h.hasChild(n)&&!l){const l=ra(0,t.serverCache.getNode().getImmediateChild(n),r);c=ea(e,c,new Zi(n),l,i,s,o,a)}})),c}function sa(e,t){const n=wo(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ls(t)&&!n.getImmediateChild(ts(t)).isEmpty())?n.getChild(t):null}function oa(e,t,n,r){t.type===lo.MERGE&&null!==t.source.queryId&&(D(wo(e.viewCache_),"We should always have a full cache before handling merges"),D(bo(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=Qo(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,D(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),D(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),D(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,aa(e,s.changes,s.viewCache.eventCache.getNode(),null)}function aa(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),_o(e,i,"child_removed",t,r,n),_o(e,i,"child_added",t,r,n),_o(e,i,"child_moved",s,r,n),_o(e,i,"child_changed",t,r,n),_o(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la,ca;function ha(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return D(null!=s,"SyncTree gave us an op for an invalid query."),oa(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(oa(s,t,n,r));return i}}function ua(e,t){let n=null;for(const r of e.views.values())n=n||sa(r,t);return n}class da{constructor(e){this.listenProvider_=e,this.syncPointTree_=new To(null),this.pendingWriteTree_={visibleWrites:Eo.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function fa(e,t,n,r,i){return function(e,t,n,r,i){D(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Co(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?va(e,new fo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function pa(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(Do(e.pendingWriteTree_,t)){let t=new To(null);return null!=r.snap?t=t.set(es(),!0):ki(r.children,(e=>{t=t.set(new Zi(e),!0)})),va(e,new uo(r.path,t,n))}return[]}function ma(e,t,n){return va(e,new fo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function _a(e,t,n,r){const i=wa(e,r);if(null!=i){const r=Ia(i),s=r.path,o=r.queryId,a=cs(s,t);return Ta(e,s,new fo(ho(o),a,n))}return[]}function ga(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=ua(n,cs(e,t));if(r)return r}));return qo(r,t,i,n,!0)}function va(e,t){return ya(t,e.syncPointTree_,null,Mo(e.pendingWriteTree_,es()))}function ya(e,t,n,r){if(ls(e.path))return ba(e,t,n,r);{const i=t.get(es());null==n&&null!=i&&(n=ua(i,es()));let s=[];const o=ts(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Go(r,o);s=s.concat(ya(a,l,e,t))}return i&&(s=s.concat(ha(i,e,r,n))),s}}function ba(e,t,n,r){const i=t.get(es());null==n&&null!=i&&(n=ua(i,es()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Go(r,t),l=e.operationForChild(t);l&&(s=s.concat(ba(l,i,o,a)))})),i&&(s=s.concat(ha(i,e,r,n))),s}function wa(e,t){return e.tagToQueryMap.get(t)}function Ia(e){const t=e.indexOf("$");return D(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Zi(e.substr(0,t))}}function Ta(e,t,n){const r=e.syncPointTree_.get(t);D(r,"Missing sync point for query tag that we're tracking");return ha(r,n,Mo(e.pendingWriteTree_,t),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ea{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ea(t)}node(){return this.node_}constructor(e){this.node_=e}}class Ca{getImmediateChild(e){const t=as(this.path_,e);return new Ca(this.syncTree_,t)}node(){return ga(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Sa=function(e,t,n){return e&&"object"==typeof e?(D(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?ka(e[".sv"],t,n):"object"==typeof e[".sv"]?Ra(e[".sv"],t):void D(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},ka=function(e,t,n){if("timestamp"===e)return n.timestamp;D(!1,"Unexpected server value: "+e)},Ra=function(e,t,n){e.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&D(!1,"Unexpected increment value: "+r);const i=t.node();if(D(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},Na=function(e,t,n,r){return Oa(t,new Ca(n,e),r)},Pa=function(e,t,n){return Oa(e,new Ea(t),n)};function Oa(e,t,n){const r=e.getPriority().val(),i=Sa(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Sa(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new Ls(s,Vs(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new Ls(i))),r.forEachChild(As,((e,r)=>{const i=Oa(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function La(e,t){let n=t instanceof Zi?t:new Zi(t),r=e,i=ts(n);for(;null!==i;){const e=ae(r.node.children,i)||{children:{},childCount:0};r=new xa(i,r,e),n=rs(n),i=ts(n)}return r}function Aa(e){return e.node.value}function Ma(e,t){e.node.value=t,qa(e)}function Da(e){return e.node.childCount>0}function Ua(e,t){ki(e.node.children,((n,r)=>{t(new xa(n,e,r))}))}function Fa(e,t,n,r){n&&!r&&t(e),Ua(e,(e=>{Fa(e,t,!0,r)})),n&&r&&t(e)}function ja(e){return new Zi(null===e.parent?e.name:ja(e.parent)+"/"+e.name)}function qa(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Aa(e)&&!Da(e)}(n),i=oe(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,qa(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,qa(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Ha=/[\[\].#$\/\u0000-\u001F\u007F]/,Wa=/[\[\].#$\u0000-\u001F\u007F]/,Ba=function(e){return"string"==typeof e&&0!==e.length&&!Ha.test(e)},Va=function(e){return"string"==typeof e&&0!==e.length&&!Wa.test(e)},za=function(e,t,n,r){r&&void 0===t||$a(ye(e,"value"),t,n)},$a=function(e,t,n){const r=n instanceof Zi?new ds(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+ps(r));if("function"==typeof t)throw new Error(e+"contains a function "+ps(r)+" with contents = "+t.toString());if(wi(t))throw new Error(e+"contains "+t.toString()+" "+ps(r));if("string"==typeof t&&t.length>10485760/3&&we(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+ps(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(ki(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Ba(t)))throw new Error(e+" contains an invalid key ("+t+") "+ps(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=we(a),fs(o),$a(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=we(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+ps(r)+" in addition to actual children.")}},Ga=function(e,t,n,r){if(!(r&&void 0===n||Va(n)))throw new Error(ye(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ka=function(e,t){if(".info"===ts(t))throw new Error(e+" failed = Can't modify data under /.info/")},Ya=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ba(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Va(e)}(n))throw new Error(ye(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xa(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||hs(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Qa(e,t,n){Xa(e,n),Za(e,(e=>us(e,t)||us(t,e)))}function Za(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(el(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function el(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();fi&&_i("event: "+n.toString()),Oi(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ja,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ro(),this.transactionQueueTree_=new xa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function nl(e,t,n){if(e.stats_=Wi(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new to(e.repoInfo_,((t,n,r,i)=>{sl(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ol(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ne(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new _s(e.repoInfo_,t,((t,n,r,i)=>{sl(e,t,n,r,i)}),(t=>{ol(e,t)}),(t=>{!function(e,t){ki(t,((t,n)=>{al(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Hi[n]||(Hi[n]=t()),Hi[n]}(e.repoInfo_,(()=>new ao(e.stats_,e.server_))),e.infoData_=new no,e.infoSyncTree_=new da({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=ma(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),al(e,"connected",!1),e.serverSyncTree_=new da({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);Qa(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function rl(e){const t=e.infoData_.getNode(new Zi(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function il(e){return(t=(t={timestamp:rl(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function sl(e,t,n,r,i){e.dataUpdateCount++;const s=new Zi(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=ce(n,(e=>Vs(e)));o=function(e,t,n,r){const i=wa(e,r);if(i){const r=Ia(i),s=r.path,o=r.queryId,a=cs(s,t),l=To.fromObject(n);return Ta(e,s,new po(ho(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=Vs(n);o=_a(e.serverSyncTree_,s,t,i)}else if(r){const t=ce(n,(e=>Vs(e)));o=function(e,t,n){const r=To.fromObject(n);return va(e,new po({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=Vs(n);o=ma(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=ml(e,s)),Qa(e.eventQueue_,a,o)}function ol(e,t){al(e,"connected",t),!1===t&&function(e){ul(e,"onDisconnectEvents");const t=il(e),n=ro();so(e.onDisconnect_,es(),((r,i)=>{const s=Na(r,i,e.serverSyncTree_,t);io(n,r,s)}));let r=[];so(n,es(),((t,n)=>{r=r.concat(ma(e.serverSyncTree_,t,n));const i=bl(e,t);ml(e,i)})),e.onDisconnect_=ro(),Qa(e.eventQueue_,es(),r)}(e)}function al(e,t,n){const r=new Zi("/.info/"+t),i=Vs(n);e.infoData_.updateSnapshot(r,i);const s=ma(e.infoSyncTree_,r,i);Qa(e.eventQueue_,r,s)}function ll(e){return e.nextWriteId_++}function cl(e,t,n,r,i){ul(e,"set",{path:t.toString(),value:n,priority:r});const s=il(e),o=Vs(n,r),a=ga(e.serverSyncTree_,t),l=Pa(o,a,s),c=ll(e),h=fa(e.serverSyncTree_,t,l,c,!0);Xa(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||bi("set at "+t+" failed: "+n);const o=pa(e.serverSyncTree_,c,!s);Qa(e.eventQueue_,t,o),dl(e,i,n,r)}));const u=bl(e,t);ml(e,u),Qa(e.eventQueue_,u,[])}function hl(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function ul(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),_i(n,...t)}function dl(e,t,n,r){t&&Oi((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function fl(e,t,n){return ga(e.serverSyncTree_,t,n)||Ws.EMPTY_NODE}function pl(e,t=e.transactionQueueTree_){if(t||yl(e,t),Aa(t)){const n=gl(e,t);D(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=fl(e,t,r);let s=i;const o=i.hash();for(let e=0;e<n.length;e++){const r=n[e];D(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=cs(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{ul(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(pa(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();yl(e,La(e.transactionQueueTree_,t)),pl(e,e.transactionQueueTree_),Qa(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Oi(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{bi("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}ml(e,t)}}),o)}(e,ja(t),n)}else Da(t)&&Ua(t,(t=>{pl(e,t)}))}function ml(e,t){const n=_l(e,t),r=ja(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=cs(n,l.path);let h,u=!1;if(D(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,i=i.concat(pa(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,h="maxretry",i=i.concat(pa(e.serverSyncTree_,l.currentWriteId,!0));else{const n=fl(e,l.path,s);l.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){$a("transaction failed: Data returned ",r,l.path);let t=Vs(r);"object"==typeof r&&null!=r&&oe(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=il(e),c=Pa(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=ll(e),s.splice(s.indexOf(o),1),i=i.concat(fa(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(pa(e.serverSyncTree_,o,!0))}else u=!0,h="nodata",i=i.concat(pa(e.serverSyncTree_,l.currentWriteId,!0))}Qa(e.eventQueue_,n,i),i=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===h?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(h),!1,null)))))}var o;yl(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)Oi(r[e]);pl(e,e.transactionQueueTree_)}(e,gl(e,n),r),r}function _l(e,t){let n,r=e.transactionQueueTree_;for(n=ts(t);null!==n&&void 0===Aa(r);)r=La(r,n),n=ts(t=rs(t));return r}function gl(e,t){const n=[];return vl(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function vl(e,t,n){const r=Aa(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Ua(t,(t=>{vl(e,t,n)}))}function yl(e,t){const n=Aa(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ma(t,n.length>0?n:void 0)}Ua(t,(t=>{yl(e,t)}))}function bl(e,t){const n=ja(_l(e,t)),r=La(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{wl(e,t)})),wl(e,r),Fa(r,(t=>{wl(e,t)})),n}function wl(e,t){const n=Aa(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(D(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(D(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(pa(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Ma(t,void 0):n.length=s+1,Qa(e.eventQueue_,ja(t),i);for(let e=0;e<r.length;e++)Oi(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il=function(e,t){const n=Tl(e),r=n.namespace;"firebase.com"===n.domain&&yi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||yi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&bi("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ui(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Zi(n.pathString)}},Tl=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):bi(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class El{get key(){return ls(this._path)?null:is(this._path)}get ref(){return new Cl(this._repo,this._path)}get _queryIdentifier(){const e=eo(this._queryParams),t=Ci(e);return"{}"===t?"default":t}get _queryObject(){return eo(this._queryParams)}isEqual(e){if(!((e=Ie(e))instanceof El))return!1;const t=this._repo===e._repo,n=hs(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}}class Cl extends El{get parent(){const e=os(this._path);return null===e?null:new Cl(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new Qs,!1)}}function Sl(e,t){return(e=Ie(e))._checkNotDeleted("ref"),void 0!==t?kl(e._root,t):e._root}function kl(e,t){var n,r,i,s;return null===ts((e=Ie(e))._path)?(n="child",r="path",s=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Ga(n,r,i,s)):Ga("child","path",t,!1),new Cl(e._repo,as(e._path,t))}function Rl(e,t){e=Ie(e),Ka("set",e._path),za("set",t,e._path,!1);const n=new z;return cl(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}!function(e){D(!la,"__referenceConstructor has already been defined"),la=e}(Cl),function(e){D(!ca,"__referenceConstructor has already been defined"),ca=e}(Cl);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nl={};let Pl=!1;function Ol(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||yi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_i("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Il(s,i),c=l.repoInfo;void 0!==ni&&ni.env&&(a=ni.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Il(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const h=i&&o?new Mi(Mi.OWNER):new Ai(e.name,e.options,t);Ya("Invalid Firebase Database URL",l),ls(l.path)||yi("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,r){let i=Nl[t.name];i||(i={},Nl[t.name]=i);let s=i[e.toURLString()];s&&yi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new tl(e,Pl,n,r),i[e.toURLString()]=s,s}(c,e,h,new Li(e.name,n));return new xl(u,e)}class xl{get _repo(){return this._instanceStarted||(nl(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cl(this._repo,es())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Nl[t];n&&n[e.key]===e||yi(`Database ${t}(${e.repoInfo_}) has already been deleted.`),hl(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&yi("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}_s.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},_s.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){ri="9.9.4",rt(new Te("database",((e,{instanceIdentifier:t})=>Ol(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),lt("@firebase/database","0.13.6",e),lt("@firebase/database","0.13.6","esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),s("04jNI");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
lt("firebase","9.9.4","app");const Ll=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw st.create("bad-app-name",{appName:String(r)});const i=et.get(r);if(i){if(he(e,i.options)&&he(n,i.config))return i;throw st.create("duplicate-app",{appName:r})}const s=new Ce(r);for(const e of tt.values())s.addComponent(e);const o=new ot(e,n,s);return et.set(r,o),o}({apiKey:"AIzaSyCSpAHIweIjCadvRfBg5ErXYj-EJPMjj7I",authDomain:"trinity-matrix.firebaseapp.com",projectId:"trinity-matrix",storageBucket:"trinity-matrix.appspot.com",messagingSenderId:"638807085059",appId:"1:638807085059:web:dff3fc2283e72ba9a27e36"}),Al=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=at()){const t=it(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=it(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(he(n.getOptions(),null!=t?t:{}))return e;Et(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Zr,persistence:[mr,tr,rr]})}(Ll),Ml=function(e=at(),t){return it(e,"database").getImmediate({identifier:t})}(Ll);function Dl(e){"button"!==e.target.type&&"email"!==e.target.type&&"password"!==e.target.type&&"text"!==e.target.type&&"Enter"!==e.code&&e.target!==l.default.modalSignIn&&e.target!==l.default.signInForm&&e.target!==l.default.modalSignUp&&e.target!==l.default.signUpForm&&e.target!==l.default.formWrap&&(e.code,l.default.backdropAuth.classList.add("is-hidden"),l.default.body.classList.remove("no-scroll"))}var Ul,Fl,jl;function ql(e){e.preventDefault(),l.default.modalSignUp.classList.add("hidden-item"),l.default.modalSignIn.classList.remove("hidden-item")}function Hl(e){e.preventDefault(),l.default.modalSignUp.classList.remove("hidden-item"),l.default.modalSignIn.classList.add("hidden-item")}l.default.logOut.addEventListener("click",(function(){Al.currentUser;Qn(Al).then((()=>{location.reload()})),alert("You are logged out")})),l.default.toLogInTab.addEventListener("click",ql),l.default.toSignUpTab.addEventListener("click",Hl),l.default.toLogIn.addEventListener("click",ql),l.default.toSignUp.addEventListener("click",Hl),l.default.openAuth.addEventListener("click",(function(){l.default.backdropAuth.classList.remove("is-hidden"),l.default.body.classList.add("no-scroll")})),l.default.backdropAuth.addEventListener("click",Dl),l.default.signInForm.addEventListener("submit",(function(e){e.preventDefault();Al.currentUser;const t={email:document.getElementById("auth-email").value,pass:document.getElementById("auth-password").value};if(l.default.backdropAuth.classList.remove("is-hidden"),l.default.body.classList.add("no-scroll"),!t.email||!t.pass)return void alert("Please enter your email and password");(n=Al,r=t.email,i=t.pass,Yn(Ie(n),An.credential(r,i))).then((e=>{const n=e.user;l.default.library.classList.remove("hidden-item"),t.email="",t.pass="",alert(`User ${n.displayName} signed in`),location.reload()})).catch((e=>{const t=e.code,n=e.message;alert(t,n)}));var n,r,i;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */})),l.default.signUpForm.addEventListener("submit",(function(e){e.preventDefault();const t={name:document.getElementById("name").value,email:document.getElementById("register-email").value,pass:document.getElementById("register-password").value};l.default.modalSignIn.classList.remove("hidden-item"),l.default.modalSignUp.classList.add("hidden-item"),Jn(Al,t.email,t.pass).then((e=>{const n=e.user;Rl(Sl(Ml,"users/"+n.uid+"/auth/"),t),Xn(Al.currentUser,{displayName:`${t.name}`}),alert(`User ${t.name} created`),location.reload(),Qn(Al).then((()=>{l.default.library.classList.add("hidden-item")})),t.name="",t.pass="",t.email="",location.reload()})).catch((e=>{const t=e.code,n=e.message;alert(t,n)}))})),document.addEventListener("keydown",Dl),Ul=e=>{e?(l.default.library.classList.remove("hidden-item"),l.default.openAuth.classList.add("hidden-item"),l.default.logOut.classList.remove("hidden-item")):(l.default.library.classList.add("hidden-item"),l.default.openAuth.classList.remove("hidden-item"),l.default.logOut.classList.add("hidden-item"))},Ie(Al).onAuthStateChanged(Ul,Fl,jl);l=s("krGWQ");var Wl=s("i1OHb");const Bl=new a;function Vl(e){const t=e.target.nodeName,n=e.target.closest(".movieCard"),r=Number(n.getAttribute("data"));var i;i=r,Bl.getMoviesByID(i).then((e=>{zl=e})),"IMG"!==t&&"P"!==t||(l.default.modalFilmInfoRef.addEventListener("click",$l),l.default.modalFilmInfoRef.addEventListener("click",Gl))}l.default.mainList.addEventListener("click",Vl),l.default.mainList.addEventListener("click",Vl);let zl={};function $l(e){if("modal-btn modal-film_btn-watched"===e.target.className){const e=[];e.push(zl),Kl(e,"watched")}}function Gl(e){if("modal-btn modal-film_btn-queue"===e.target.className){const e=[];e.push(zl),Kl(e,"queue")}}function Kl(e,t){const n=e.map((e=>e.id));let r=[...n];if((0,Wl.load)(t)){const i=(0,Wl.load)(t);let s=i.map((e=>e.id));i.push(...e),r=[...new Set([...n,...s])],e.push(...i)}!function(e,t,n){let r=[];for(let n=0;n<e.length;n+=1){let i=e[n],s=t.find((e=>e.id===i));r.push(s)}(0,Wl.save)(n,r)}(r,e,t)}
//# sourceMappingURL=index.0ab91f39.js.map
