function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("bRlFp",(function(e,t){var n=s("2bBga"),r=s("djt5d"),i=s("6zSb1"),o=s("d0EKm");var a=function e(t){var s=new i(t),a=r(i.prototype.request,s);return n.extend(a,i.prototype,s),n.extend(a,s),a.create=function(n){return e(o(t,n))},a}(s("hqlPG"));a.Axios=i,a.CanceledError=s("83xK9"),a.CancelToken=s("2sjhC"),a.isCancel=s("ksuZT"),a.VERSION=s("50GW0").version,a.toFormData=s("aewVa"),a.AxiosError=s("121rJ"),a.Cancel=a.CanceledError,a.all=function(e){return Promise.all(e)},a.spread=s("av9gA"),a.isAxiosError=s("gNhGc"),e.exports=a,e.exports.default=a})),s.register("2bBga",(function(e,t){var n,r=s("djt5d"),i=Object.prototype.toString,o=(n=Object.create(null),function(e){var t=i.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return o(t)===e}}function c(e){return Array.isArray(e)}function l(e){return void 0===e}var u=a("ArrayBuffer");function h(e){return null!==e&&"object"==typeof e}function d(e){if("object"!==o(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var f=a("Date"),p=a("File"),m=a("Blob"),g=a("FileList");function _(e){return"[object Function]"===i.call(e)}var y=a("URLSearchParams");function v(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),c(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var b,w=(b="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return b&&e instanceof b});e.exports={isArray:c,isArrayBuffer:u,isBuffer:function(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||_(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:h,isPlainObject:d,isUndefined:l,isDate:f,isFile:p,isBlob:m,isFunction:_,isStream:function(e){return h(e)&&_(e.pipe)},isURLSearchParams:y,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:v,merge:function e(){var t={};function n(n,r){d(t[r])&&d(n)?t[r]=e(t[r],n):d(n)?t[r]=e({},n):c(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)v(arguments[r],n);return t},extend:function(e,t,n){return v(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,i,s,o={};t=t||{};do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)o[s=r[i]]||(t[s]=e[s],o[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:o,kindOfTest:a,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(l(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:w,isFileList:g}})),s.register("djt5d",(function(e,t){e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}})),s.register("6zSb1",(function(e,t){var n=s("2bBga"),r=s("2RNjJ"),i=s("5Dm7L"),o=s("eQ5d8"),a=s("d0EKm"),c=s("1ZTQa"),l=s("6zj0X"),u=l.validators;function h(e){this.defaults=e,this.interceptors={request:new i,response:new i}}h.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&l.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var s,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!i){var h=[o,void 0];for(Array.prototype.unshift.apply(h,r),h=h.concat(c),s=Promise.resolve(t);h.length;)s=s.then(h.shift(),h.shift());return s}for(var d=t;r.length;){var f=r.shift(),p=r.shift();try{d=f(d)}catch(e){p(e);break}}try{s=o(d)}catch(e){return Promise.reject(e)}for(;c.length;)s=s.then(c.shift(),c.shift());return s},h.prototype.getUri=function(e){e=a(this.defaults,e);var t=c(e.baseURL,e.url);return r(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){h.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(a(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)})),e.exports=h})),s.register("2RNjJ",(function(e,t){var n=s("2bBga");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var s;if(i)s=i(t);else if(n.isURLSearchParams(t))s=t.toString();else{var o=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),o.push(r(t)+"="+r(e))})))})),s=o.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}})),s.register("5Dm7L",(function(e,t){var n=s("2bBga");function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r})),s.register("eQ5d8",(function(e,t){var n=s("2bBga"),r=s("bhEpd"),i=s("ksuZT"),o=s("hqlPG"),a=s("83xK9");function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return c(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),s.register("bhEpd",(function(e,t){var n=s("2bBga"),r=s("hqlPG");e.exports=function(e,t,i){var s=this||r;return n.forEach(i,(function(n){e=n.call(s,e,t)})),e}})),s.register("hqlPG",(function(e,t){var n=s("4TNnu"),r=s("2bBga"),i=s("i16eu"),o=s("121rJ"),a=s("2wfLM"),c=s("aewVa"),l={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var h,d={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(h=s("9VVcb")),h),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,s=r.isObject(e),o=t&&t["Content-Type"];if((n=r.isFileList(e))||s&&"multipart/form-data"===o){var a=this.env&&this.env.FormData;return c(n?{"files[]":e}:e,a&&new a)}return s||"application/json"===o?(u(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||d.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw o.from(e,o.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:s("1gvAv")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){d.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){d.headers[e]=r.merge(l)})),e.exports=d})),s.register("4TNnu",(function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],u=!1,h=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++h<t;)c&&c[h].run();h=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),s.register("i16eu",(function(e,t){var n=s("2bBga");e.exports=function(e,t){n.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}})),s.register("121rJ",(function(e,t){var n=s("2bBga");function r(e,t,n,r,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}n.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=r.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){o[e]={value:e}})),Object.defineProperties(r,o),Object.defineProperty(i,"isAxiosError",{value:!0}),r.from=function(e,t,s,o,a,c){var l=Object.create(i);return n.toFlatObject(e,l,(function(e){return e!==Error.prototype})),r.call(l,e.message,t,s,o,a),l.name=e.name,c&&Object.assign(l,c),l},e.exports=r})),s.register("2wfLM",(function(e,t){e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),s.register("aewVa",(function(e,t){var n=s("ihoyg").Buffer,r=s("2bBga");e.exports=function(e,t){t=t||new FormData;var i=[];function s(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,o){if(r.isPlainObject(n)||r.isArray(n)){if(-1!==i.indexOf(n))throw Error("Circular reference detected in "+o);i.push(n),r.forEach(n,(function(n,i){if(!r.isUndefined(n)){var a,c=o?o+"."+i:i;if(n&&!o&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(a=r.toArray(n)))return void a.forEach((function(e){!r.isUndefined(e)&&t.append(c,s(e))}));e(n,c)}})),i.pop()}else t.append(o,s(n))}(e),t}})),s.register("ihoyg",(function(t,n){var r,i;e(t.exports,"Buffer",(function(){return r}),(function(e){return r=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return i}),(function(e){return i=e}));var o=s("hqZtu"),a=s("5WQj6");const c="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r=h,i=50;const l=2147483647;function u(e){if(e>l)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,h.prototype),t}function h(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return p(e)}return d(e,t,n)}function d(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!h.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|y(e,t);let r=u(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(X(e,Uint8Array)){const t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return m(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(X(e,ArrayBuffer)||e&&X(e.buffer,ArrayBuffer))return g(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(X(e,SharedArrayBuffer)||e&&X(e.buffer,SharedArrayBuffer)))return g(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return h.from(r,t,n);const i=function(e){if(h.isBuffer(e)){const t=0|_(e.length),n=u(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?u(0):m(e);if("Buffer"===e.type&&Array.isArray(e.data))return m(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return h.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function f(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function p(e){return f(e),u(e<0?0:0|_(e))}function m(e){const t=e.length<0?0:0|_(e.length),n=u(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function g(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,h.prototype),r}function _(e){if(e>=l)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l.toString(16)+" bytes");return 0|e}function y(e,t){if(h.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||X(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return J(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Y(e).length;default:if(i)return r?-1:J(e).length;t=(""+t).toLowerCase(),i=!0}}function v(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return x(this,t,n);case"utf8":case"utf-8":return N(this,t,n);case"ascii":return A(this,t,n);case"latin1":case"binary":return O(this,t,n);case"base64":return R(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function b(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function w(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=h.from(t,r)),h.isBuffer(t))return 0===t.length?-1:E(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):E(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function E(e,t,n,r,i){let s,o=1,a=e.length,c=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function l(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(l(e,s)===l(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===c)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let r=0;r<c;r++)if(l(e,s+r)!==l(t,r)){n=!1;break}if(n)return s}return-1}function I(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=t.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(t.substr(2*o,2),16);if(Z(r))return o;e[n+o]=r}return o}function T(e,t,n,r){return Q(J(t,e.length-n),e,n,r)}function C(e,t,n,r){return Q(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function S(e,t,n,r){return Q(Y(t),e,n,r)}function k(e,t,n,r){return Q(function(e,t){let n,r,i;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(t,e.length-n),e,n,r)}function R(e,t,n){return 0===t&&n===e.length?o.fromByteArray(e):o.fromByteArray(e.slice(t,n))}function N(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[i+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(c=(15&t)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){const t=e.length;if(t<=P)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=P));return n}(r)}h.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(e,t,n){return d(e,t,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(e,t,n){return function(e,t,n){return f(e),e<=0?u(e):void 0!==t?"string"==typeof n?u(e).fill(t,n):u(e).fill(t):u(e)}(e,t,n)},h.allocUnsafe=function(e){return p(e)},h.allocUnsafeSlow=function(e){return p(e)},h.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==h.prototype},h.compare=function(e,t){if(X(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),X(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(e)||!h.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},h.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return h.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=h.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(X(t,Uint8Array))i+t.length>r.length?(h.isBuffer(t)||(t=h.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!h.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},h.byteLength=y,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},h.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},h.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},h.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?N(this,0,e):v.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(e){if(!h.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===h.compare(this,e)},h.prototype.inspect=function(){let e="";const t=i;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},c&&(h.prototype[c]=h.prototype.inspect),h.prototype.compare=function(e,t,n,r,i){if(X(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(r,i),l=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==l[e]){s=c[e],o=l[e];break}return s<o?-1:o<s?1:0},h.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},h.prototype.indexOf=function(e,t,n){return w(this,e,t,n,!0)},h.prototype.lastIndexOf=function(e,t,n){return w(this,e,t,n,!1)},h.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return I(this,e,t,n);case"utf8":case"utf-8":return T(this,e,t,n);case"ascii":case"latin1":case"binary":return C(this,e,t,n);case"base64":return S(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const P=4096;function A(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function O(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function x(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=ee[e[r]];return i}function L(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function D(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function M(e,t,n,r,i,s){if(!h.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function U(e,t,n,r,i){$(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function B(e,t,n,r,i){$(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function F(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function j(e,t,n,r,i){return t=+t,n>>>=0,i||F(e,0,n,4),a.write(e,t,n,r,23,4),n+4}function q(e,t,n,r,i){return t=+t,n>>>=0,i||F(e,0,n,8),a.write(e,t,n,r,52,8),n+8}h.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,h.prototype),r},h.prototype.readUintLE=h.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},h.prototype.readUintBE=h.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},h.prototype.readUint8=h.prototype.readUInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),this[e]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]|this[e+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(e,t){return e>>>=0,t||D(e,2,this.length),this[e]<<8|this[e+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},h.prototype.readBigUInt64LE=te((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),h.prototype.readBigUInt64BE=te((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),h.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},h.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||D(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},h.prototype.readInt8=function(e,t){return e>>>=0,t||D(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},h.prototype.readInt16LE=function(e,t){e>>>=0,t||D(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(e,t){e>>>=0,t||D(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},h.prototype.readInt32BE=function(e,t){return e>>>=0,t||D(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},h.prototype.readBigInt64LE=te((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),h.prototype.readBigInt64BE=te((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||K(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),h.prototype.readFloatLE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!0,23,4)},h.prototype.readFloatBE=function(e,t){return e>>>=0,t||D(e,4,this.length),a.read(this,e,!1,23,4)},h.prototype.readDoubleLE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!0,52,8)},h.prototype.readDoubleBE=function(e,t){return e>>>=0,t||D(e,8,this.length),a.read(this,e,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){M(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){M(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,255,0),this[t]=255&e,t+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigUInt64LE=te((function(e,t=0){return U(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=te((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);M(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},h.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);M(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},h.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},h.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},h.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},h.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},h.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||M(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},h.prototype.writeBigInt64LE=te((function(e,t=0){return U(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=te((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function(e,t,n){return j(this,e,t,!0,n)},h.prototype.writeFloatBE=function(e,t,n){return j(this,e,t,!1,n)},h.prototype.writeDoubleLE=function(e,t,n){return q(this,e,t,!0,n)},h.prototype.writeDoubleBE=function(e,t,n){return q(this,e,t,!1,n)},h.prototype.copy=function(e,t,n,r){if(!h.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},h.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!h.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const s=h.isBuffer(e)?e:h.from(e,r),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};const H={};function W(e,t,n){H[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function V(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function $(e,t,n,r,i,s){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new H.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){z(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||K(t,e.length-(n+1))}(r,i,s)}function z(e,t){if("number"!=typeof e)throw new H.ERR_INVALID_ARG_TYPE(t,"number",e)}function K(e,t,n){if(Math.floor(e)!==e)throw z(e,n),new H.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new H.ERR_BUFFER_OUT_OF_BOUNDS;throw new H.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}W("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),W("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),W("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=V(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=V(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const G=/[^+/0-9A-Za-z-_]/g;function J(e,t){let n;t=t||1/0;const r=e.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Y(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(G,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Q(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function X(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),s.register("hqZtu",(function(t,n){var r,i;e(t.exports,"toByteArray",(function(){return r}),(function(e){return r=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),r=function(e){var t,n,r=h(e),i=r[0],s=r[1],c=new a(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),l=0,u=s>0?i-4:i;for(n=0;n<u;n+=4)t=o[e.charCodeAt(n)]<<18|o[e.charCodeAt(n+1)]<<12|o[e.charCodeAt(n+2)]<<6|o[e.charCodeAt(n+3)],c[l++]=t>>16&255,c[l++]=t>>8&255,c[l++]=255&t;2===s&&(t=o[e.charCodeAt(n)]<<2|o[e.charCodeAt(n+1)]>>4,c[l++]=255&t);1===s&&(t=o[e.charCodeAt(n)]<<10|o[e.charCodeAt(n+1)]<<4|o[e.charCodeAt(n+2)]>>2,c[l++]=t>>8&255,c[l++]=255&t);return c},i=function(e){for(var t,n=e.length,r=n%3,i=[],o=16383,a=0,c=n-r;a<c;a+=o)i.push(d(e,a,a+o>c?c:a+o));1===r?(t=e[n-1],i.push(s[t>>2]+s[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(s[t>>10]+s[t>>4&63]+s[t<<2&63]+"="));return i.join("")};for(var s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,u=c.length;l<u;++l)s[l]=c[l],o[c.charCodeAt(l)]=l;function h(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function d(e,t,n){for(var r,i,o=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),o.push(s[(i=r)>>18&63]+s[i>>12&63]+s[i>>6&63]+s[63&i]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),s.register("5WQj6",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;e(t.exports,"read",(function(){return r}),(function(e){return r=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),r=function(e,t,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?i-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=r;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===s)s=1-l;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=l}return(f?-1:1)*o*Math.pow(2,s-r)},i=function(e,t,n,r,i,s){var o,a,c,l=8*s-i-1,u=(1<<l)-1,h=u>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*c-1)*Math.pow(2,i),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,l+=i;l>0;e[n+f]=255&o,f+=p,o/=256,l-=8);e[n+f-p]|=128*m}})),s.register("9VVcb",(function(e,t){var n=s("2bBga"),r=s("1TQad"),i=s("kTwUV"),o=s("2RNjJ"),a=s("1ZTQa"),c=s("9cPEm"),l=s("g3yOT"),u=s("2wfLM"),h=s("121rJ"),d=s("83xK9"),f=s("8wMQb");e.exports=function(e){return new Promise((function(t,s){var p,m=e.data,g=e.headers,_=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(m)&&n.isStandardBrowserEnv()&&delete g["Content-Type"];var v=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.Authorization="Basic "+btoa(b+":"+w)}var E=a(e.baseURL,e.url);function I(){if(v){var n="getAllResponseHeaders"in v?c(v.getAllResponseHeaders()):null,i={data:_&&"text"!==_&&"json"!==_?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:n,config:e,request:v};r((function(e){t(e),y()}),(function(e){s(e),y()}),i),v=null}}if(v.open(e.method.toUpperCase(),o(E,e.params,e.paramsSerializer),!0),v.timeout=e.timeout,"onloadend"in v?v.onloadend=I:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(I)},v.onabort=function(){v&&(s(new h("Request aborted",h.ECONNABORTED,e,v)),v=null)},v.onerror=function(){s(new h("Network Error",h.ERR_NETWORK,e,v,v)),v=null},v.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||u;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),s(new h(t,n.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,v)),v=null},n.isStandardBrowserEnv()){var T=(e.withCredentials||l(E))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;T&&(g[e.xsrfHeaderName]=T)}"setRequestHeader"in v&&n.forEach(g,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete g[t]:v.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(v.withCredentials=!!e.withCredentials),_&&"json"!==_&&(v.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&v.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){v&&(s(!e||e&&e.type?new d:e),v.abort(),v=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),m||(m=null);var C=f(E);C&&-1===["http","https","file"].indexOf(C)?s(new h("Unsupported protocol "+C+":",h.ERR_BAD_REQUEST,e)):v.send(m)}))}})),s.register("1TQad",(function(e,t){var n=s("121rJ");e.exports=function(e,t,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?t(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}})),s.register("kTwUV",(function(e,t){var n=s("2bBga");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,s,o){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(i)&&a.push("path="+i),n.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),s.register("1ZTQa",(function(e,t){var n=s("iUwU6"),r=s("91vFE");e.exports=function(e,t){return e&&!n(t)?r(e,t):t}})),s.register("iUwU6",(function(e,t){e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),s.register("91vFE",(function(e,t){e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),s.register("9cPEm",(function(e,t){var n=s("2bBga"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,s,o={};return e?(n.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),i=n.trim(e.substr(s+1)),t){if(o[t]&&r.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([i]):o[t]?o[t]+", "+i:i}})),o):o}})),s.register("g3yOT",(function(e,t){var n=s("2bBga");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}})),s.register("83xK9",(function(e,t){var n=s("121rJ");function r(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}s("2bBga").inherits(r,n,{__CANCEL__:!0}),e.exports=r})),s.register("8wMQb",(function(e,t){e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),s.register("1gvAv",(function(e,t){e.exports=null})),s.register("ksuZT",(function(e,t){e.exports=function(e){return!(!e||!e.__CANCEL__)}})),s.register("d0EKm",(function(e,t){var n=s("2bBga");e.exports=function(e,t){t=t||{};var r={};function i(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function s(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(e[r],t[r])}function o(e){if(!n.isUndefined(t[e]))return i(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:i(void 0,e[r]):i(void 0,t[r])}function c(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||s,i=t(e);n.isUndefined(i)&&t!==c||(r[e]=i)})),r}})),s.register("6zj0X",(function(e,t){var n=s("50GW0").version,r=s("121rJ"),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var o={};i.transitional=function(e,t,i){function s(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(i?". "+i:"")}return function(n,i,a){if(!1===e)throw new r(s(i," has been removed"+(t?" in "+t:"")),r.ERR_DEPRECATED);return t&&!o[i]&&(o[i]=!0,console.warn(s(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new r("options must be an object",r.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),s=i.length;s-- >0;){var o=i[s],a=t[o];if(a){var c=e[o],l=void 0===c||a(c,o,e);if(!0!==l)throw new r("option "+o+" must be "+l,r.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new r("Unknown option "+o,r.ERR_BAD_OPTION)}},validators:i}})),s.register("50GW0",(function(e,t){e.exports={version:"0.27.2"}})),s.register("2sjhC",(function(e,t){var n=s("83xK9");function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r})),s.register("av9gA",(function(e,t){e.exports=function(e){return function(t){return e.apply(null,t)}}})),s.register("gNhGc",(function(e,t){var n=s("2bBga");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}})),s.register("KyCZ1",(function(e,t){s("5DqoN"),e.exports=self.fetch.bind(self)})),s.register("5DqoN",(function(e,t){var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==n&&n,r="URLSearchParams"in n,i="Symbol"in n&&"iterator"in Symbol,s="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(e){return!1}}(),o="FormData"in n,a="ArrayBuffer"in n;if(a)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],l=ArrayBuffer.isView||function(e){return e&&c.indexOf(Object.prototype.toString.call(e))>-1};function u(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function h(e){return"string"!=typeof e&&(e=String(e)),e}function d(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return i&&(t[Symbol.iterator]=function(){return t}),t}function f(e){this.map={},e instanceof f?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function p(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function m(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function g(e){var t=new FileReader,n=m(t);return t.readAsArrayBuffer(e),n}function _(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function y(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:s&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():a&&s&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=_(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(e)||l(e))?this._bodyArrayBuffer=_(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=p(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(g)}),this.text=function(){var e,t,n,r=p(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=m(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(w)}),this.json=function(){return this.text().then(JSON.parse)},this}f.prototype.append=function(e,t){e=u(e),t=h(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},f.prototype.delete=function(e){delete this.map[u(e)]},f.prototype.get=function(e){return e=u(e),this.has(e)?this.map[e]:null},f.prototype.has=function(e){return this.map.hasOwnProperty(u(e))},f.prototype.set=function(e,t){this.map[u(e)]=h(t)},f.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},f.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),d(e)},f.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),d(e)},f.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),d(e)},i&&(f.prototype[Symbol.iterator]=f.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function b(e,t){if(!(this instanceof b))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var n,r,i=(t=t||{}).body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new f(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,i||null==e._bodyInit||(i=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new f(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),v.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&i)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(i),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var s=/([?&])_=[^&]*/;if(s.test(this.url))this.url=this.url.replace(s,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function w(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(i))}})),t}function E(e,t){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new f(t.headers),this.url=t.url||"",this._initBody(e)}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})},y.call(b.prototype),y.call(E.prototype),E.prototype.clone=function(){return new E(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new f(this.headers),url:this.url})},E.error=function(){var e=new E(null,{status:0,statusText:""});return e.type="error",e};var I=[301,302,303,307,308];E.redirect=function(e,t){if(-1===I.indexOf(t))throw new RangeError("Invalid status code");return new E(null,{status:t,headers:{location:e}})};var T=n.DOMException;try{new T}catch(e){(T=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),T.prototype.constructor=T}function C(e,t){return new Promise((function(r,i){var o=new b(e,t);if(o.signal&&o.signal.aborted)return i(new T("Aborted","AbortError"));var c=new XMLHttpRequest;function l(){c.abort()}c.onload=function(){var e,t,n={status:c.status,statusText:c.statusText,headers:(e=c.getAllResponseHeaders()||"",t=new f,e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var i=n.join(":").trim();t.append(r,i)}})),t)};n.url="responseURL"in c?c.responseURL:n.headers.get("X-Request-URL");var i="response"in c?c.response:c.responseText;setTimeout((function(){r(new E(i,n))}),0)},c.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},c.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},c.onabort=function(){setTimeout((function(){i(new T("Aborted","AbortError"))}),0)},c.open(o.method,function(e){try{return""===e&&n.location.href?n.location.href:e}catch(t){return e}}(o.url),!0),"include"===o.credentials?c.withCredentials=!0:"omit"===o.credentials&&(c.withCredentials=!1),"responseType"in c&&(s?c.responseType="blob":a&&o.headers.get("Content-Type")&&-1!==o.headers.get("Content-Type").indexOf("application/octet-stream")&&(c.responseType="arraybuffer")),!t||"object"!=typeof t.headers||t.headers instanceof f?o.headers.forEach((function(e,t){c.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){c.setRequestHeader(e,h(t.headers[e]))})),o.signal&&(o.signal.addEventListener("abort",l),c.onreadystatechange=function(){4===c.readyState&&o.signal.removeEventListener("abort",l)}),c.send(void 0===o._bodyInit?null:o._bodyInit)}))}C.polyfill=!0,n.fetch||(n.fetch=C,n.Headers=f,n.Request=b,n.Response=E)})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.a92145f1.js","6Y9A4":"movie-time.93f8ca93.jpg","7mVsD":"index.0a1da39a.css"}'));var o;o=s("bRlFp");class a{async getTrendingMovies(){try{const e=`https://api.themoviedb.org/3/trending/movie/day?${this.key}&page=${this.page}`;return(await t(o).get(e)).data}catch(e){console.log(e)}}async getSearchMovies(){try{const e=`https://api.themoviedb.org/3/search/movie?${this.key}&language=en-US&query=${this.searchQuery}&page=${this.page}&include_adult=false`;return(await t(o).get(e)).data}catch(e){console.log(e)}}async getMoviesByID(e){try{const n=`https://api.themoviedb.org/3/movie/${e}?${this.key}&language=en-US`;return(await t(o).get(n)).data}catch(e){console.log(e)}}resetPage(){this.page=1}setPage(e){this.page=e}incrementPage(){return this.page+=1}decrementPage(){if(1!==this.page)return this.page-=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1,this.key="api_key=6fe1e9d5fbaeb01db6cc1b91ad7172fe"}}var c={searchForm:document.querySelector("#search-form"),mainList:document.querySelector(".movieList"),warningOnSearch:document.querySelector("#js-input-error"),modalFilmInfoRef:document.querySelector(".modal-film"),footerButtomEl:document.querySelector(".footer__btn"),backdropFooterEl:document.querySelector(".backdrop"),spinnerEl:document.querySelector(".backdrop-spinner"),backdropFilmRef:document.querySelector(".modal-film__backdrop"),body:document.querySelector("body"),openAuth:document.querySelector(".open-auth"),backdropAuth:document.querySelector(".backdrop-auth"),logOut:document.querySelector(".exit"),library:document.querySelector("#library"),toLogIn:document.querySelector("#to-login"),modalSignIn:document.querySelector("#auth"),signInForm:document.querySelector("#auth-form"),toSignUp:document.querySelector("#to-signup"),modalSignUp:document.querySelector("#reg"),signUpForm:document.querySelector("#reg-form"),toggle:document.querySelector("#theme-switch-toggle"),modalQueueBtn:document.querySelector(".modal-film_btn-queue"),modalWatchedBtn:document.querySelector(".modal-film_btn-watched"),toSignUpTab:document.querySelector("#to-signup-tab"),toLogInTab:document.querySelector("#to-login-tab")},l={};l=function e(t,n,r){function i(o,a){if(!n[o]){if(!t[o]){var c=void 0;if(!a&&c)return c(o,!0);if(s)return s(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[o]={exports:{}};t[o][0].call(u.exports,(function(e){return i(t[o][1][e]||e)}),u,u.exports,e,t,n,r)}return n[o].exports}for(var s=void 0,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},i=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},s=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=s,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),s=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return s.appendChild(e)}));var o=i(s,"IMG"),a=i(s,"VIDEO"),c=i(s,"IFRAME");return!0===o&&n.classList.add("basicLightbox--img"),!0===a&&n.classList.add("basicLightbox--video"),!0===c&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),o=function(e){return!1!==t.onClose(a)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===s(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(a)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&o()}));var a={element:function(){return n},visible:function(){return s(n)},show:function(e){return!1!==t.onShow(a)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(a)}))},close:o};return a}},{}]},{},[1])(1);var u,h={};u=e=>{function t(e){let t=e&&e.message?e.message:e;console.warn(`movie-trailer: ${t}`)}function n(e){if(!e.ok)throw Error(e.statusText);return e}function r(i,s){const o="https://api.themoviedb.org"+encodeURI("/3/search/movie?api_key="+s.apiKey+"&query="+i+(null===s.year?"":"&year="+s.year)+(null===s.language?"":"&language="+s.language));return e(o,{method:"GET"}).then(n).then((e=>e.json())).then((e=>{if(void 0!==e.status_message)throw Error(e.status_message);if(0===e.results.length){if(null!==s.year)return r(i,null,s.language);throw Error(`No TMDB Movie found with the current search terms, try searching https://www.themoviedb.org/search?query=${encodeURIComponent(i)}`)}return e.results[0].id})).catch((e=>(t(e),null)))}function i(r,i){const s="https://api.themoviedb.org"+encodeURI("/3/movie/"+r+"/videos?api_key="+i.apiKey+(null===i.language?"":"&language="+i.language));return e(s,{method:"GET"}).then(n).then((e=>e.json())).then((e=>{if(void 0!==e.status_message)throw Error(`movie-trailer: ${e.status_message}`);if(0===e.results.length)throw Error("No trailers found for that TMDB ID");let{results:t}=e;return t=t.map((e=>e.key)),i.id||(t=t.map((e=>function(e){return encodeURI("https://www.youtube.com/watch?v="+e)}(e)))),i.multi?[...new Set(t)]:t[0]})).catch((e=>(t(e),null)))}return async function(e,n,s,o){let a={multi:!1,id:!1,year:null,language:null,apiKey:"9d2bff12ed955c7f1f74b83187f188ae"};if(n||(n={}),"string"!=typeof e&&!n.tmdbId)throw Error("Expected first parameter to be a movie or TMDB ID (string)");"function"==typeof n?(s=n,n=null):"boolean"==typeof n||"true"===n?a.multi=n:"string"==typeof n||"number"==typeof n?(a.year=n,"function"==typeof o&&("boolean"==typeof s||"string"==typeof s&&"true"===s)&&(a.multi=s,s=o)):"object"==typeof n&&(a=Object.assign(a,n)),"function"!=typeof s&&(s=null);const c=a.tmdbId?a.tmdbId:await r(e,a).catch((e=>(t(e),null)));if(!c)return null;const l=i(c,a);return l?s?l.then((e=>s(null,e))).catch((e=>s(e,null))):l:null}},"function"==typeof define&&define.amd?define(["isomorphic-fetch"],u):h=u(s("KyCZ1"));new a;class d{async fetchTrailer(){const e=await h(this.trailerTitle,{id:!0,api_key:"api_key=6fe1e9d5fbaeb01db6cc1b91ad7172fe",trailerId:this.trailerId});if(null!==e)return e}player(e){if(void 0!==e)return`<iframe class="modal__trailer-video" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/${e}?autoplay=1" frameborder="0" allow="autoplay; fullscreen"></iframe>`;{const e=document.querySelector(".js-trailer-btn");console.log(e),e.textContent="Sorry, trailer is not found"}}lightboxForTrailer(e){return l.create(e).show()}showTrailer(){this.fetchTrailer().then(this.player).then(this.lightboxForTrailer)}constructor(e,t){this.trailerId=e,this.trailerTitle=t}}var f;f=new URL(s("kyEFX").resolve("6Y9A4"),import.meta.url).toString(),c.mainList.addEventListener("click",(function(e){c.modalFilmInfoRef.innerHTML="";const n=e.target.closest(".movieCard");if(!n)return;const r=n.getAttribute("data");console.log(r),c.backdropFilmRef.classList.remove("is-hidden"),c.modalFilmInfoRef.classList.remove("is-hidden"),c.body.classList.add("no-scroll"),i=r,p.getMoviesByID(i).then((e=>{!function({title:e,popularity:n,original_title:r,vote_average:i,genres:s,poster_path:o,overview:a,vote_count:l,id:u}){const h="https://image.tmdb.org/t/p/",d="w500",p=s.map((e=>e.name)).join(", ");c.modalFilmInfoRef.innerHTML=`<button class="modal__btn-close">\n     <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="14"\n        height="14"\n        fill="currentColor"\n        class="modal__icon-close"\n        viewBox="0 0 16 16"\n      >\n        <path\n          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"\n        />\n      </svg>\n    </button>\n  <div div class="modal-film__img">\n    <div class="modal-film__wrapper">\n    <img\n      src="${o?`${h}${d}${o}`:t(f)}"\n      alt="${e}"\n      class="modal-film__poster"\n      loading="lazy" \n    />\n    </div>\n    <div class='modal__trailer-wrapper'>\n      <button class='modal__trailer-btn js-trailer-btn'\n      type='button'\n      data-id='${u}'\n      data-name='${r}'>\n      watch trailer\n      </button>\n    </div> \n  </div>\n  <div class="modal-film__description">\n  <h2 class="modal-film__title">${e}</h2>\n  <ul class="modal-film__table">\n    <li class="modal-film__table-row">\n      <p class="modal-film__table-description">Vote / Votes</p>\n      <p class="modal-film__table-value">\n        <span class="modal-film__table-vote">${i.toFixed(1)}</span\n        ><span class="modal-film__table-slash"> / </span\n        ><span class="modal-film__table-votes">${l}</span>\n      </p>\n    </li>\n    <li class="modal-film__table-row">\n      <p class="modal-film__table-description">Popularity</p>\n      <p class="modal-film__table-value popularity-value">${n}</p>\n    </li>\n    <li class="modal-film__table-row">\n      <p class="modal-film__table-description">Original Title</p>\n      <p class="modal-film__table-value">${r}</p>\n    </li>\n    <li class="modal-film__table-row">\n      <p class="modal-film__table-description">Genre</p>\n      <p class="modal-film__table-value">${p}</p>\n    </li>\n  </ul>\n  <h3 class="modal-film__about">About</h3>\n  <p class="modal-film__abot-text">${a}\n  </p>\n  <ul class="modal-film__container-btn">\n    <li>\n      <button class="modal-btn modal-film_btn-watched" type="submit">add to watched</button>\n    </li>\n    <li>\n      <button class="modal-btn modal-film_btn-queue" type="submit">add to queue</button>\n    </li>\n  </ul>\n  </div>`,document.querySelector(".js-trailer-btn").addEventListener("click",v)}(e),function(e){m.push(e)}(e)})),document.addEventListener("keydown",g),document.addEventListener("click",_);var i}));const p=new a,m=[];function g(e){"Escape"===e.key&&(y(),document.querySelector(".basicLightbox").remove())}function _(e){(e.target.classList.contains("modal-film__backdrop")||e.target.classList.contains("modal__btn-close")||e.target.classList.contains("modal__icon-close"))&&y()}function y(){c.backdropFilmRef.classList.add("is-hidden"),c.modalFilmInfoRef.classList.add("is-hidden"),c.body.classList.remove("no-scroll"),document.removeEventListener("click",_),document.removeEventListener("keydown",g)}function v(e){const t=e.target.dataset.id,n=e.target.dataset.name;new d(t,n).showTrailer()}const b=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e)}},w=e=>{try{let t=localStorage.getItem(e);return t=JSON.parse(t)||void 0}catch(e){console.error("Get state error: ",e)}};let E={};async function I(){"genreList"!==localStorage.key&&(await async function(){try{const{data:e}=await t(o).get("https://api.themoviedb.org/3/genre/movie/list?api_key=6fe1e9d5fbaeb01db6cc1b91ad7172fe&language=en-US");e.genres.forEach((e=>E[e.id]=e.name))}catch(e){console.log(e.message)}}(),b("genreList",E))}async function T(e){return await I(),e.map((({id:e,title:t,poster_path:n,genre_ids:r,release_date:i,vote_average:s})=>`<li class="movieCard" data="${e}">\n      <div class="movieCard__img-wrapper">\n      <img src="${function(e){return null===e?"https://freedesignfile.com/upload/2014/07/Movie-time-design-elements-vector-backgrounds-01.jpg":`https://image.tmdb.org/t/p/w500${e}`}(n)}"\n        alt="${t} movie poster"\n        loading="lazy"\n        class="movieCard__img"\n      />\n      </div>\n      <div class="movieCard__text">\n        <h2 class="movieCard__title">${t.toUpperCase()}</h2>\n        <p class="movieCard__info">${function(e){if("genreList"===localStorage.key)return E=w("genreList");let t=e.map((e=>E[e]));return t.length>2?`${t[0]}, ${t[1]}, Other`:t.join(", ")}(r)} | ${new Date(i).getFullYear()}\n          <span class="movieCard__rate">${s.toFixed(1)}</span></p>\n      </div>\n      </li>\n`)).join("")}c.searchForm.addEventListener("submit",(function(e){e.preventDefault();const{elements:{searchQuery:t}}=e.currentTarget;if(!t.value)return void(c.warningOnSearch.textContent="Please enter a valid movie name!");const n=t.value,r=encodeURI(n);console.log(r),C.query=r,C.getSearchMovies().then((e=>T(e.results))).then((e=>{e?(c.mainList.innerHTML="",c.mainList.insertAdjacentHTML("beforeend",e),c.warningOnSearch.textContent="",c.searchForm.reset()):(c.warningOnSearch.textContent="Sorry, there are no results found. Try searching for something else!",c.searchForm.reset())}))}));const C=new a;c.footerButtomEl.addEventListener("click",(function(){c.backdropFooterEl.classList.remove("is-hidden"),c.body.classList.add("no-scroll")})),c.backdropFooterEl.addEventListener("click",(function(e){const t=e.target.classList.contains("backdrop__button"),n=e.target.classList.contains("backdrop");if(c.body.classList.remove("no-scroll"),!t&&!n)return;c.backdropFooterEl.classList.add("is-hidden")})),document.addEventListener("keydown",(function(e){"Escape"===e.code&&(c.backdropFooterEl.classList.add("is-hidden"),c.body.classList.remove("no-scroll"))}));(new a).getTrendingMovies().then((e=>T(e.results))).then((e=>{c.mainList.insertAdjacentHTML("beforeend",e)})),window.addEventListener("load",(function e(){c.spinnerEl.classList.add("visually-hidden"),setTimeout((()=>{c.spinnerEl.remove(),window.removeEventListener("load",e)}),600)})),c.toggle.addEventListener("change",(e=>{c.body.classList.contains("dark")?(c.body.classList.remove("dark"),localStorage.removeItem("darkTheme")):(c.body.classList.add("dark"),localStorage.setItem("darkTheme","true"))}));localStorage.getItem("darkTheme");localStorage.getItem("darkTheme")&&(c.body.classList.add("dark"),c.toggle.checked=!0);document.querySelector("footer");const S=document.querySelector(".scrollUpBtn"),k=document.documentElement;function R(){document.body.scrollTop>2500||document.documentElement.scrollTop>2500?S.classList.add("showBtn"):S.classList.remove("showBtn")}R(),window.onscroll=function(){R()},S.addEventListener("click",(function(){k.scrollTo({top:0,behavior:"smooth"})}));var N,P={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,N=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){e.exports=function(e,t){var n,r,i,s,o=Object.prototype.hasOwnProperty;for(i=1,s=arguments.length;i<s;i+=1)for(r in n=arguments[i])o.call(n,r)&&(e[r]=n[r]);return e}},function(e,t,n){e.exports=function(e){return void 0===e}},function(e,t,n){e.exports=function(e){return e instanceof Array}},function(e,t,n){var r=n(2),i=n(17),s=n(6);e.exports=function(e,t,n){r(e)?i(e,t,n):s(e,t,n)}},function(e,t,n){e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){e.exports=function(e){return e instanceof Function}},function(e,t,n){e.exports=function(e,t,n){var r;for(r in n=n||null,e)if(e.hasOwnProperty(r)&&!1===t.call(n,e[r],r,e))break}},function(e,t,n){var r=n(18),i=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&r(n,e),t.hasOwnProperty("static")&&(i(n,t.static),delete t.static),i(n.prototype,t),n}},function(e,t,n){var r=n(2);e.exports=function(e,t,n){var i,s;if(n=n||0,!r(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(s=t.length,i=n;n>=0&&i<s;i+=1)if(t[i]===e)return i;return-1}},function(e,t,n){var r=n(29),i=n(30),s=n(5),o={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),i=s(e)?e(t):r(e,t);return n.innerHTML=i,n.firstChild},bind:function(e,t){var n,r=Array.prototype.slice;return e.bind?e.bind.apply(e,r.call(arguments,1)):(n=r.call(arguments,2),function(){return e.apply(t,n.length?n.concat(r.call(arguments)):arguments)})},sendHostName:function(){i("pagination","UA-129987462-1")}};e.exports=o},function(e,t,n){n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){var r=n(13),i=n(7),s=n(0),o=n(1),a=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=i({init:function(e,t){this._options=s({},l,t),this._currentPage=0,this._view=new a(e,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,r="prev"===e;return this._options.centerAlign?r?t-1:t+n:r?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),r=this._getPageIndex(e),i=this._getPageIndex(n),s=this._getEdge(e);return t.leftPageNumber=s.left,t.rightPageNumber=s.right,t.prevMore=r>1,t.nextMore=r<i,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,r,i=this._getLastPage(),s=this._options.visiblePages,o=this._getPageIndex(e);return this._options.centerAlign?(r=Math.floor(s/2),(n=(t=Math.max(e-r,1))+s-1)>i&&(t=Math.max(i-s+1,1),n=i)):(t=(o-1)*s+1,n=o*s,n=Math.min(n,i)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){o(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(u),e.exports=u},function(e,t,n){var r=n(0),i=n(14),s=n(4),o=n(16),a=n(2),c=n(5),l=n(3),u=/\s+/g;function h(){this.events=null,this.contexts=null}h.mixin=function(e){r(e.prototype,h.prototype)},h.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},h.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},h.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},h.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},h.prototype._memorizeContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},h.prototype._forgetContext=function(e){var t,n;i(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},h.prototype._bindEvent=function(e,t,n){var r=this._safeEvent(e);this._memorizeContext(n),r.push(this._getHandlerItem(t,n))},h.prototype.on=function(e,t,n){var r=this;s(e)?(e=e.split(u),l(e,(function(e){r._bindEvent(e,t,n)}))):o(e)&&(n=t,l(e,(function(e,t){r.on(t,e,n)})))},h.prototype.once=function(e,t,n){var r=this;if(o(e))return n=t,void l(e,(function(e,t){r.once(t,e,n)}));this.on(e,(function i(){t.apply(n,arguments),r.off(e,i,n)}),n)},h.prototype._spliceMatches=function(e,t){var n,r=0;if(a(e))for(n=e.length;r<n;r+=1)!0===t(e[r])&&(e.splice(r,1),n-=1,r-=1)},h.prototype._matchHandler=function(e){var t=this;return function(n){var r=e===n.handler;return r&&t._forgetContext(n.context),r}},h.prototype._matchContext=function(e){var t=this;return function(n){var r=e===n.context;return r&&t._forgetContext(n.context),r}},h.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(r){var i=e===r.handler,s=t===r.context,o=i&&s;return o&&n._forgetContext(r.context),o}},h.prototype._offByEventName=function(e,t){var n=this,r=c(t),i=n._matchHandler(t);e=e.split(u),l(e,(function(e){var t=n._safeEvent(e);r?n._spliceMatches(t,i):(l(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},h.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);l(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},h.prototype._offByObject=function(e,t){var n,r=this;this._indexOfContext(e)<0?l(e,(function(e,t){r.off(t,e)})):s(t)?(n=this._matchContext(e),r._spliceMatches(this._safeEvent(t),n)):c(t)?(n=this._matchHandlerAndContext(t,e),l(this._safeEvent(),(function(e){r._spliceMatches(e,n)}))):(n=this._matchContext(e),l(this._safeEvent(),(function(e){r._spliceMatches(e,n)})))},h.prototype.off=function(e,t){s(e)?this._offByEventName(e,t):arguments.length?c(e)?this._offByHandler(e):o(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},h.prototype.fire=function(e){this.invoke.apply(this,arguments)},h.prototype.invoke=function(e){var t,n,r,i;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),r=0;t[r];){if(!1===(i=t[r]).handler.apply(i.context,n))return!1;r+=1}return!0},h.prototype.hasListener=function(e){return this.getListenerLength(e)>0},h.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=h},function(e,t,n){var r=n(1),i=n(15);e.exports=function(e){return!r(e)&&!i(e)}},function(e,t,n){e.exports=function(e){return null===e}},function(e,t,n){e.exports=function(e){return e===Object(e)}},function(e,t,n){e.exports=function(e,t,n){var r=0,i=e.length;for(n=n||null;r<i&&!1!==t.call(n,e[r],r,e);r+=1);}},function(e,t,n){var r=n(19);e.exports=function(e,t){var n=r(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){var r=n(3),i=n(7),s=n(21),o=n(22),a=n(24),c=n(25),l=n(0),u=n(4),h=n(28),d=n(9),f={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},p=["first","prev","next","last"],m=["prev","next"],g=i({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=l({},f,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(u(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!h(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){r(p,(function(e){this._buttons[e]=d.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){r(p,(function(e){var t="disabled"+d.capitalizeFirstLetter(e);this._buttons[t]=d.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){r(m,(function(e){var t=e+"More";this._buttons[t]=d.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,c(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,c(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,r=e.leftPageNumber,i=e.rightPageNumber;for(n=r;n<=i;n+=1)n===e.page?t=d.createElementByTemplate(this._template.currentPage,{page:n}):(t=d.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==r||e.prevMore||c(t,this._firstItemClassName),n!==i||e.nextMore||c(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();o(t,"click",(function(t){var n,r,i=s(t);a(t),(r=this._getButtonType(i))||(n=this._getPageNumber(i)),e(r,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return r(n,(function(n,r){return!d.isContained(e,n)||(t=r,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,r=this._enabledPageElements.length;n<r;n+=1)if(t=this._enabledPageElements[n],d.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){var r=n(4),i=n(3),s=n(23);function o(e,t,n,r){function o(t){n.call(r||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,o):"attachEvent"in e&&e.attachEvent("on"+t,o),function(e,t,n,r){var o=s(e,t),a=!1;i(o,(function(e){return e.handler!==n||(a=!0,!1)})),a||o.push({handler:n,wrappedHandler:r})}(e,t,n,o)}e.exports=function(e,t,n,s){r(t)?i(t.split(/\s+/g),(function(t){o(e,t,n,s)})):i(t,(function(t,r){o(e,r,t,n)}))}},function(e,t,n){var r="_feEventKey";e.exports=function(e,t){var n,i=e[r];return i||(i=e[r]={}),(n=i[t])||(n=i[t]=[]),n}},function(e,t,n){e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){var r=n(3),i=n(8),s=n(26),o=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),a=e.classList,c=[];a?r(n,(function(t){e.classList.add(t)})):((t=s(e))&&(n=[].concat(t.split(/\s+/),n)),r(n,(function(e){i(e,c)<0&&c.push(e)})),o(e,c))}},function(e,t,n){var r=n(1);e.exports=function(e){return e&&e.className?r(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){var r=n(2),i=n(1);e.exports=function(e,t){t=(t=r(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),i(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){var r=n(8),i=n(3),s=n(2),o=n(4),a=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,h=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,f=/^["']\w+["']$/,p=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var r=function(e,t){var n=[e],r=[],s=0,o=0;return i(t,(function(e,i){0===e.indexOf("if")?s+=1:"/if"===e?s-=1:s||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),r.push(t.slice(o,i)),o=i+1)})),r.push(t.slice(o)),{exps:n,sourcesInsideIf:r}}(e,t),s=!1,o="";return i(r.exps,(function(e,t){return(s=b(e,n))&&(o=w(r.sourcesInsideIf[t],n)),!s})),o},each:function(e,t,n){var r=b(e,n),o=s(r)?"@index":"@key",c={},l="";return i(r,(function(e,r){c[o]=r,c["@this"]=e,a(n,c),l+=w(t.slice(),n)})),l},with:function(e,t,n){var i=r("as",e),s=e[i+1],o=b(e.slice(0,i),n),c={};return c[s]=o,w(t,a(n,c))||""}},_=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,r,i=[],s=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)r=n.index,i.push(e.slice(s,r)),s=r+n[0].length,n=t.exec(e);return i.push(e.slice(s)),i};function y(e,t){var n,r=t[e];return"true"===e?r=!0:"false"===e?r=!1:f.test(e)?r=e.replace(p,""):l.test(e)?r=y((n=e.split(u))[0],t)[y(n[1],t)]:h.test(e)?r=y((n=e.split(d))[0],t)[n[1]]:m.test(e)&&(r=parseFloat(e)),r}function v(e,t,n){for(var r,i,s,a,c=g[e],l=1,u=2,h=t[u];l&&o(h);)0===h.indexOf(e)?l+=1:0===h.indexOf("/"+e)&&(l-=1,r=u),h=t[u+=2];if(l)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=c(t[0].split(" ").slice(1),(i=0,s=r,(a=t.splice(i+1,s-i)).pop(),a),n),t}function b(e,t){var n=y(e[0],t);return n instanceof Function?function(e,t,n){var r=[];return i(t,(function(e){r.push(y(e,n))})),e.apply(null,r)}(n,e.slice(1),t):n}function w(e,t){for(var n,r,i,s=1,a=e[s];o(a);)r=(n=a.split(" "))[0],g[r]?(i=v(r,e.splice(s,e.length-s),t),e=e.concat(i)):e[s]=b(n,t),a=e[s+=2];return e.join("")}e.exports=function(e,t){return w(_(e,c),t)}},function(e,t,n){var r=n(1),i=n(31);e.exports=function(e,t){var n=location.hostname,s="TOAST UI "+e+" for "+n+": Statistics",o=window.localStorage.getItem(s);(r(window.tui)||!1!==window.tui.usageStatistics)&&(o&&!function(e){return(new Date).getTime()-e>6048e5}(o)||(window.localStorage.setItem(s,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||i("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){var r=n(6);e.exports=function(e,t){var n=document.createElement("img"),i="";return r(t,(function(e,t){i+="&"+t+"="+e})),i=i.substring(1),n.src=e+"?"+i,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},P=N();const A=document.querySelector("#pagination"),O=new(t(P))(A,{totalItems:0,itemsPerPage:20,visiblePages:5,page:1}),x=(O.getCurrentPage(),new a);function L(e){x.setPage(e.page),console.log(x.page),x.getSearchMovies().then((e=>T(e.results))).then((e=>{c.mainList.innerHTML=e})),window.scrollTo({top:0,left:0,behavior:"smooth"})}
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
 */x.getTrendingMovies().then((({total_results:e})=>{O.reset(e)})).catch((e=>console.log(e.message))),O.on("afterMove",(function(e){x.setPage(e.page),console.log(x.page),x.getTrendingMovies().then((e=>T(e.results))).then((e=>{c.mainList.innerHTML=e})),window.scrollTo({top:0,left:0,behavior:"smooth"})})),O.off("afterMove",L),O.on("afterMove",L);const D=!1,M=!1,U="${JSCORE_VERSION}",B=function(e,t){if(!e)throw F(t)},F=function(e){return new Error("Firebase Database ("+U+") INTERNAL ASSERT FAILED: "+e)},j=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},q={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(j(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},H=function(e){const t=j(e);return q.encodeByteArray(t,!0)},W=function(e){return H(e).replace(/\./g,"")},V=function(e){try{return q.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function $(e){return z(void 0,e)}function z(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=z(e[n],t[n]));return e}
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
class K{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
function G(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function J(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(G())}function Y(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Q(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function X(){const e=G();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Z(){return!0===D||!0===M}class ee extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,te.prototype.create)}}class te{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(ne,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new ee(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const ne=/\{\$([^}]+)}/g;
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
 */function re(e){return JSON.parse(e)}function ie(e){return JSON.stringify(e)}
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
 */const se=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=re(V(s[0])||""),n=re(V(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},oe=function(e){const t=se(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},ae=function(e){const t=se(e).claims;return"object"==typeof t&&!0===t.admin};
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
function ce(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function le(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ue(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function he(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function de(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(fe(n)&&fe(s)){if(!de(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function fe(e){return null!==e&&"object"==typeof e}
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
function pe(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function me(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function ge(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class _e{reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=c^o&(a^c),i=1518500249):(r=o^a^c,i=1859775393):e<60?(r=o&a|c&(o|a),i=2400959708):(r=o^a^c,i=3395469782);const t=(s<<5|s>>>27)+r+l+i+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}}function ye(e,t){const n=new ve(e,t);return n.subscribe.bind(n)}class ve{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=be),void 0===r.error&&(r.error=be),void 0===r.complete&&(r.complete=be);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function be(){}
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
 */function we(e,t){return`${e} failed: ${t} argument `}
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
const Ee=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,B(r<e.length,"Surrogate pair missing trail surrogate.");i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ie=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function Te(e){return e&&e._delegate?e._delegate:e}class Ce{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class Se{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new K;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ke{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Se(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const Re=[];var Ne,Pe;(Pe=Ne||(Ne={}))[Pe.DEBUG=0]="DEBUG",Pe[Pe.VERBOSE=1]="VERBOSE",Pe[Pe.INFO=2]="INFO",Pe[Pe.WARN=3]="WARN",Pe[Pe.ERROR=4]="ERROR",Pe[Pe.SILENT=5]="SILENT";const Ae={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},Oe=Ne.INFO,xe={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},Le=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=xe[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class De{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ae[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Oe,this._logHandler=Le,this._userLogHandler=null,Re.push(this)}}let Me,Ue;const Be=new WeakMap,Fe=new WeakMap,je=new WeakMap,qe=new WeakMap,He=new WeakMap;let We={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Fe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||je.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ze(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ve(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ue||(Ue=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ke(this),t),ze(Be.get(this))}:function(...t){return ze(e.apply(Ke(this),t))}:function(t,...n){const r=e.call(Ke(this),t,...n);return je.set(r,t.sort?t.sort():[t]),ze(r)}}function $e(e){return"function"==typeof e?Ve(e):(e instanceof IDBTransaction&&function(e){if(Fe.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Fe.set(e,t)}(e),t=e,(Me||(Me=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,We):e);var t}function ze(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(ze(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Be.set(t,e)})).catch((()=>{})),He.set(t,e),t}(e);if(qe.has(e))return qe.get(e);const t=$e(e);return t!==e&&(qe.set(e,t),He.set(t,e)),t}const Ke=e=>He.get(e);function Ge(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=ze(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(ze(o.result),e.oldVersion,e.newVersion,ze(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Je=["get","getKey","getAll","getAllKeys","count"],Ye=["put","add","delete","clear"],Qe=new Map;function Xe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Qe.get(t))return Qe.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ye.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Je.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Qe.set(t,s),s}We=(e=>({...e,get:(t,n,r)=>Xe(t,n)||e.get(t,n,r),has:(t,n)=>!!Xe(t,n)||e.has(t,n)}))(We);
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
class Ze{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const et=new De("@firebase/app"),tt={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},nt=new Map,rt=new Map;function it(e,t){try{e.container.addComponent(t)}catch(n){et.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function st(e){const t=e.name;if(rt.has(t))return et.debug(`There were multiple attempts to register component ${t}.`),!1;rt.set(t,e);for(const t of nt.values())it(t,e);return!0}function ot(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const at=new te("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class ct{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ce("app",(()=>this),"PUBLIC"))}}
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
 */function lt(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw at.create("bad-app-name",{appName:String(r)});const i=nt.get(r);if(i){if(de(e,i.options)&&de(n,i.config))return i;throw at.create("duplicate-app",{appName:r})}const s=new ke(r);for(const e of rt.values())s.addComponent(e);const o=new ct(e,n,s);return nt.set(r,o),o}function ut(e="[DEFAULT]"){const t=nt.get(e);if(!t)throw at.create("no-app",{appName:e});return t}function ht(e,t,n){var r;let i=null!==(r=tt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void et.warn(e.join(" "))}st(new Ce(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let dt=null;function ft(){return dt||(dt=Ge("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw at.create("idb-open",{originalErrorMessage:e.message})}))),dt}async function pt(e,t){var n;try{const n=(await ft()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,mt(e)),n.done}catch(e){if(e instanceof ee)et.warn(e.message);else{const t=at.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});et.warn(t.message)}}}function mt(e){return`${e.name}!${e.options.appId}`}
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
 */class gt{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=_t();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=_t(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),vt(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=W(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function _t(){return(new Date).toISOString().substring(0,10)}class yt{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await ft()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(mt(e))}catch(e){if(e instanceof ee)et.warn(e.message);else{const n=at.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});et.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return pt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return pt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function vt(e){return W(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var bt;bt="",st(new Ce("platform-logger",(e=>new Ze(e)),"PRIVATE")),st(new Ce("heartbeat",(e=>new gt(e)),"PRIVATE")),ht("@firebase/app","0.7.32",bt),ht("@firebase/app","0.7.32","esm2017"),ht("fire-js","");function wt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Et(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const It=Et,Tt=new te("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ct=new De("@firebase/auth");function St(e,...t){Ct.logLevel<=Ne.ERROR&&Ct.error(`Auth (9.9.4): ${e}`,...t)}
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
 */function kt(e,...t){throw Pt(e,...t)}function Rt(e,...t){return Pt(e,...t)}function Nt(e,t,n){const r=Object.assign(Object.assign({},It()),{[t]:n});return new te("auth","Firebase",r).create(t,{appName:e.name})}function Pt(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Tt.create(e,...t)}function At(e,t,...n){if(!e)throw Pt(t,...n)}function Ot(e){const t="INTERNAL ASSERTION FAILED: "+e;throw St(t),new Error(t)}function xt(e,t){e||Ot(t)}
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
 */const Lt=new Map;function Dt(e){xt(e instanceof Function,"Expected a class definition");let t=Lt.get(e);return t?(xt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lt.set(e,t),t)}
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
function Mt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ut(){return"http:"===Bt()||"https:"===Bt()}function Bt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Ft(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Ut()||Y()||"connection"in navigator))||navigator.onLine}
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
class jt{get(){return Ft()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,xt(t>e,"Short delay should be less than long delay!"),this.isMobile=J()||Q()}}
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
 */function qt(e,t){xt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Ht{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Wt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Vt=new jt(3e4,6e4);
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
 */function $t(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zt(e,t,n,r,i={}){return Kt(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=pe(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ht.fetch()(Jt(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Kt(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Wt),t);try{const t=new Yt(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Qt(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Qt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Qt(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Qt(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Nt(e,a,o);kt(e,a)}}catch(t){if(t instanceof ee)throw t;kt(e,"network-request-failed")}}async function Gt(e,t,n,r,i={}){const s=await zt(e,t,n,r,i);return"mfaPendingCredential"in s&&kt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Jt(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?qt(e.config,i):`${e.config.apiScheme}://${i}`}class Yt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Rt(this.auth,"network-request-failed"))),Vt.get())}))}}function Qt(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rt(e,t,r);return i.customData._tokenResponse=n,i}
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
function Xt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Zt(e){return 1e3*Number(e)}function en(e){var t;const[n,r,i]=e.split(".");if(void 0===n||void 0===r||void 0===i)return St("JWT malformed, contained fewer than 3 sections"),null;try{const e=V(r);return e?JSON.parse(e):(St("Failed to decode base64 JWT payload"),null)}catch(e){return St("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
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
async function tn(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof ee&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class nn{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class rn{_initializeTime(){this.lastSignInTime=Xt(this.lastLoginAt),this.creationTime=Xt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function sn(e){var t;const n=e.auth,r=await e.getIdToken(),i=await tn(e,async function(e,t){return zt(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));At(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=wt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rn(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class on{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){At(e.idToken,"internal-error"),At(void 0!==e.idToken,"internal-error"),At(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=en(e);return At(t,"internal-error"),At(void 0!==t.exp,"internal-error"),At(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return At(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Kt(e,{},(async()=>{const n=pe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Jt(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ht.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new on;return n&&(At("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(At("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(At("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new on,this.toJSON())}_performRefresh(){return Ot("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function an(e,t){At("string"==typeof e||void 0===e,"internal-error",{appName:t})}class cn{async getIdToken(e){const t=await tn(this,this.stsTokenManager.getToken(this.auth,e));return At(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Te(e),r=await n.getIdToken(t),i=en(r);At(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xt(Zt(i.auth_time)),issuedAtTime:Xt(Zt(i.iat)),expirationTime:Xt(Zt(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Te(e);await sn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(At(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){At(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await sn(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tn(this,async function(e,t){return zt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:v,isAnonymous:b,providerData:w,stsTokenManager:E}=t;At(y&&E,e,"internal-error");const I=on.fromJSON(this.name,E);At("string"==typeof y,e,"internal-error"),an(u,e.name),an(h,e.name),At("boolean"==typeof v,e,"internal-error"),At("boolean"==typeof b,e,"internal-error"),an(d,e.name),an(f,e.name),an(p,e.name),an(m,e.name),an(g,e.name),an(_,e.name);const T=new cn({uid:y,auth:e,email:h,emailVerified:v,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:_});return w&&Array.isArray(w)&&(T.providerData=w.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const r=new on;r.updateFromServerResponse(t);const i=new cn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await sn(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=wt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rn(i.createdAt||void 0,i.lastLoginAt||void 0)}}
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
 */class ln{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}ln.type="NONE";const un=ln;
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
 */function hn(e,t,n){return`firebase:${e}:${t}:${n}`}class dn{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new dn(Dt(un),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Dt(un);const s=hn(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=cn._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new dn(i,e,n)):new dn(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=hn(this.userKey,r.apiKey,i),this.fullPersistenceKey=hn("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function fn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_n(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(vn(t))return"Blackberry";if(bn(t))return"Webos";if(mn(t))return"Safari";if((t.includes("chrome/")||gn(t))&&!t.includes("edge/"))return"Chrome";if(yn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function pn(e=G()){return/firefox\//i.test(e)}function mn(e=G()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gn(e=G()){return/crios\//i.test(e)}function _n(e=G()){return/iemobile/i.test(e)}function yn(e=G()){return/android/i.test(e)}function vn(e=G()){return/blackberry/i.test(e)}function bn(e=G()){return/webos/i.test(e)}function wn(e=G()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function En(){return X()&&10===document.documentMode}function In(e=G()){return wn(e)||yn(e)||bn(e)||vn(e)||/windows phone/i.test(e)||_n(e)}
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
function Tn(e,t=[]){let n;switch(e){case"Browser":n=fn(G());break;case"Worker":n=`${fn(G())}-${e}`;break;default:n=e}return`${n}/JsCore/9.9.4/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class Cn{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class Sn{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dt(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return At(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await sn(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Te(e):null;return t&&At(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&At(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Dt(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new te("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dt(e)||this._popupRedirectResolver;At(t,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[Dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return At(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return At(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rn(this),this.idTokenSubscription=new Rn(this),this.beforeStateQueue=new Cn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function kn(e){return Te(e)}class Rn{get next(){return At(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=ye((e=>this.observer=e))}}
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
class Nn{toJSON(){return Ot("not implemented")}_getIdTokenResponse(e){return Ot("not implemented")}_linkToIdToken(e,t){return Ot("not implemented")}_getReauthenticationResolver(e){return Ot("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function Pn(e,t){return zt(e,"POST","/v1/accounts:update",t)}
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
class An extends Nn{static _fromEmailAndPassword(e,t){return new An(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new An(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Gt(e,"POST","/v1/accounts:signInWithPassword",$t(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return Gt(e,"POST","/v1/accounts:signInWithEmailLink",$t(e,t))}(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Pn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Gt(e,"POST","/v1/accounts:signInWithEmailLink",$t(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
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
 */async function On(e,t){return Gt(e,"POST","/v1/accounts:signInWithIdp",$t(e,t))}
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
 */class xn extends Nn{static _fromParams(e){const t=new xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=wt(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new xn(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return On(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,On(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,On(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pe(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Ln={USER_NOT_FOUND:"user-not-found"};
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
class Dn extends Nn{static _fromVerification(e,t){return new Dn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Dn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Gt(e,"POST","/v1/accounts:signInWithPhoneNumber",$t(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Gt(e,"POST","/v1/accounts:signInWithPhoneNumber",$t(e,t));if(n.temporaryProof)throw Qt(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Gt(e,"POST","/v1/accounts:signInWithPhoneNumber",$t(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ln)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Dn({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class Mn{static parseLink(e){const t=function(e){const t=me(ge(e)).link,n=t?me(ge(t)).deep_link_id:null,r=me(ge(e)).deep_link_id;return(r?me(ge(r)).link:null)||r||n||t||e}(e);try{return new Mn(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=me(ge(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);At(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
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
class Un{static credential(e,t){return An._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Mn.parseLink(t);return At(n,"argument-error"),An._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=Un.PROVIDER_ID}}Un.PROVIDER_ID="password",Un.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Bn{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class Fn extends Bn{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class jn extends Fn{static credential(e){return xn._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com",jn.PROVIDER_ID="facebook.com";
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
class qn extends Fn{static credential(e,t){return xn._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return qn.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}qn.GOOGLE_SIGN_IN_METHOD="google.com",qn.PROVIDER_ID="google.com";
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
class Hn extends Fn{static credential(e){return xn._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}Hn.GITHUB_SIGN_IN_METHOD="github.com",Hn.PROVIDER_ID="github.com";
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
class Wn extends Fn{static credential(e,t){return xn._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Wn.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function Vn(e,t){return Gt(e,"POST","/v1/accounts:signUp",$t(e,t))}
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
 */Wn.TWITTER_SIGN_IN_METHOD="twitter.com",Wn.PROVIDER_ID="twitter.com";class $n{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await cn._fromIdTokenResponse(e,n,r),s=zn(n);return new $n({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=zn(n);return new $n({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function zn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Kn extends ee{static _fromErrorAndOperation(e,t,n,r){return new Kn(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Kn.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function Gn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Kn._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function Jn(e,t,n=!1){const r=await tn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return $n._forOperation(e,"link",r)}
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
async function Yn(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await tn(e,Gn(i,s,t,e),n);At(r.idToken,i,"internal-error");const o=en(r.idToken);At(o,i,"internal-error");const{sub:a}=o;return At(e.uid===a,i,"user-mismatch"),$n._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null===(r=e)||void 0===r?void 0:r.code)&&kt(i,"user-mismatch"),e}}
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
 */async function Qn(e,t,n=!1){const r="signIn",i=await Gn(e,r,t),s=await $n._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Xn(e,t){return Qn(kn(e),t)}async function Zn(e,t,n){const r=kn(e),i=await Vn(r,{returnSecureToken:!0,email:t,password:n}),s=await $n._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function er(e,t,n){return Xn(Te(e),Un.credential(t,n))}
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
async function tr(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=Te(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await tn(r,
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
async function(e,t){return zt(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const o=r.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=r.displayName,o.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function nr(e){return Te(e).signOut()}new WeakMap;
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
class rr{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class ir extends rr{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);En()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=G();return mn(e)||wn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=In(),this._shouldAllowMigration=!0}}ir.type="LOCAL";const sr=ir;
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
 */class or extends rr{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}or.type="SESSION";const ar=or;
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
class cr{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new cr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function lr(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */cr.receivers=[];class ur{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=lr("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function hr(){return window}
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
function dr(){return void 0!==hr().WorkerGlobalScope&&"function"==typeof hr().importScripts}class fr{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function pr(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function mr(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new fr(e).toPromise()}(),t(await mr()))}))}))}async function gr(e,t,n){const r=pr(e,!0).put({fbase_key:t,value:n});return new fr(r).toPromise()}function _r(e,t){const n=pr(e,!0).delete(t);return new fr(n).toPromise()}class yr{async _openDb(){return this.db||(this.db=await mr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cr._getInstance(dr()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ur(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mr();return await gr(e,"__sak","1"),await _r(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>gr(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=pr(e,!1).get(t),r=await new fr(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>_r(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=pr(e,!1).getAll();return new fr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}yr.type="LOCAL";const vr=yr;
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
 */function br(e){return new Promise(((t,n)=>{const r=document.createElement("script");
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
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Rt("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function wr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
wr("rcb"),new jt(3e4,6e4);async function Er(e,t,n){var r;const i=await n.verify();try{let s;if(At("string"==typeof i,e,"argument-error"),At("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){At("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return zt(e,"POST","/v2/accounts/mfaEnrollment:start",$t(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{At("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;At(n,e,"missing-multi-factor-info");const o=await function(e,t){return zt(e,"POST","/v2/accounts/mfaSignIn:start",$t(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return zt(e,"POST","/v1/accounts:sendVerificationCode",$t(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class Ir{verifyPhoneNumber(e,t){return Er(this.auth,e,Te(t))}static credential(e,t){return Dn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ir.credentialFromTaggedObject(t)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Dn._fromTokenResponse(t,n):null}constructor(e){this.providerId=Ir.PROVIDER_ID,this.auth=kn(e)}}
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
function Tr(e,t){return t?Dt(t):(At(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Ir.PROVIDER_ID="phone",Ir.PHONE_SIGN_IN_METHOD="phone";class Cr extends Nn{_getIdTokenResponse(e){return On(e,this._buildIdpRequest())}_linkToIdToken(e,t){return On(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return On(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Sr(e){return Qn(e.auth,new Cr(e),e.bypassAuthState)}function kr(e){const{auth:t,user:n}=e;return At(n,t,"internal-error"),Yn(n,new Cr(e),e.bypassAuthState)}async function Rr(e){const{auth:t,user:n}=e;return At(n,t,"internal-error"),Jn(n,new Cr(e),e.bypassAuthState)}
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
 */class Nr{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sr;case"linkViaPopup":case"linkViaRedirect":return Rr;case"reauthViaPopup":case"reauthViaRedirect":return kr;default:kt(this.auth,"internal-error")}}resolve(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const Pr=new jt(2e3,1e4);class Ar extends Nr{async executeNotNull(){const e=await this.execute();return At(e,this.auth,"internal-error"),e}async onExecution(){xt(1===this.filter.length,"Popup operations only handle one event");const e=lr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Rt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Pr.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ar.currentPopupAction&&Ar.currentPopupAction.cancel(),Ar.currentPopupAction=this}}Ar.currentPopupAction=null;
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
const Or=new Map;class xr extends Nr{async execute(){let e=Or.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Mr(t),r=Dr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Or.set(this.auth._key(),e)}return this.bypassAuthState||Or.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Lr(e,t){Or.set(e._key(),t)}function Dr(e){return Dt(e._redirectPersistence)}function Mr(e){return hn("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function Ur(e,t,n=!1){const r=kn(e),i=Tr(r,t),s=new xr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Br{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jr(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!jr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Rt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fr(e))}saveEventToCache(e){this.cachedEventUids.add(Fr(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Fr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function jr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const qr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hr=/^https?/;async function Wr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return zt(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Vr(e))return}catch(e){}kt(e,"unauthorized-domain")}function Vr(e){const t=Mt(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Hr.test(n))return!1;if(qr.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const $r=new jt(3e4,6e4);function zr(){const e=hr().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Kr=null;function Gr(e){return Kr=Kr||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){zr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{zr(),n(Rt(e,"network-request-failed"))},timeout:$r.get()})}if(null===(i=null===(r=hr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=hr().gapi)||void 0===s?void 0:s.load)){const t=wr("iframefcb");return hr()[t]=()=>{gapi.load?o():n(Rt(e,"network-request-failed"))},br(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Kr=null,e}))}(e),Kr}
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
 */const Jr=new jt(5e3,15e3),Yr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xr(e){const t=e.config;At(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?qt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.9.4"},i=Qr.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pe(r).slice(1)}`}
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
const Zr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ei{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function ti(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Zr),{width:r.toString(),height:i.toString(),top:s,left:o}),l=G().toLowerCase();n&&(a=gn(l)?"_blank":n),pn(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=G()){var t;return wn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new ei(null);const h=window.open(t||"",a,u);At(h,e,"popup-blocked");try{h.focus()}catch(e){}return new ei(h)}function ni(e,t,n,r,i,s){At(e.config.authDomain,e,"auth-domain-config-required"),At(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.9.4",eventId:i};if(t instanceof Bn){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ue(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Fn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){return e.emulator?qt(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${pe(a).slice(1)}`}const ri=class{async _openPopup(e,t,n,r){var i;xt(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return ti(e,ni(e,t,n,Mt(),r),lr())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=ni(e,t,n,Mt(),r),hr().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(xt(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await Gr(e),n=hr().gapi;return At(n,e,"internal-error"),t.open({where:document.body,url:Xr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Rt(e,"network-request-failed"),s=hr().setTimeout((()=>{r(i)}),Jr.get());function o(){hr().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Br(e);return t.register("authEvent",(t=>{At(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),kt(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return In()||mn()||wn()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ar,this._completeRedirectFn=Ur,this._overrideRedirectResult=Lr}};var ii;
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
class si{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){At(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
function oi(e=ut()){const t=ot(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=ot(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(de(n.getOptions(),null!=t?t:{}))return e;kt(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:ri,persistence:[vr,sr,ar]})}ii="Browser",st(new Ce("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((e,n)=>{At(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),At(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const r={apiKey:i,authDomain:s,clientPlatform:ii,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tn(ii)},o=new Sn(e,n,r);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),st(new Ce("auth-internal",(e=>{const t=kn(e.getProvider("auth").getImmediate());return new si(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ht("@firebase/auth","0.20.6",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ii)),ht("@firebase/auth","0.20.6","esm2017");var ai=s("4TNnu");
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
 */let ci="";
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
class li{set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ie(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:re(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}constructor(e){this.domStorage_=e,this.prefix_="firebase:"}}
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
 */class ui{set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ce(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
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
 */const hi=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new li(t)}}catch(e){}return new ui},di=hi("localStorage"),fi=hi("sessionStorage"),pi=new De("@firebase/database"),mi=function(){let e=1;return function(){return e++}}(),gi=function(e){const t=Ee(e),n=new _e;n.update(t);const r=n.digest();return q.encodeByteArray(r)},_i=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=_i.apply(null,r):t+="object"==typeof r?ie(r):r,t+=" "}return t};let yi=null,vi=!0;const bi=function(e,t){B(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(pi.logLevel=Ne.VERBOSE,yi=pi.log.bind(pi),t&&fi.set("logging_enabled",!0)):"function"==typeof e?yi=e:(yi=null,fi.remove("logging_enabled"))},wi=function(...e){if(!0===vi&&(vi=!1,null===yi&&!0===fi.get("logging_enabled")&&bi(!0)),yi){const t=_i.apply(null,e);yi(t)}},Ei=function(e){return function(...t){wi(e,...t)}},Ii=function(...e){const t="FIREBASE INTERNAL ERROR: "+_i(...e);pi.error(t)},Ti=function(...e){const t=`FIREBASE FATAL ERROR: ${_i(...e)}`;throw pi.error(t),new Error(t)},Ci=function(...e){const t="FIREBASE WARNING: "+_i(...e);pi.warn(t)},Si=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},ki=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=Di(e),r=Di(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},Ri=function(e,t){return e===t?0:e<t?-1:1},Ni=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ie(t))},Pi=function(e){if("object"!=typeof e||null===e)return ie(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=ie(t[r]),n+=":",n+=Pi(e[t[r]]);return n+="}",n},Ai=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Oi(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const xi=function(e){B(!Si(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const Li=new RegExp("^-?(0*)\\d{1,10}$"),Di=function(e){if(Li.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Mi=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Ci("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Ui=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
class Bi{getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Ci(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}}
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
 */class Fi{getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(wi("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ci(e)}constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}}class ji{getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}constructor(e){this.accessToken=e}}ji.OWNER="owner";
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
const qi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class Hi{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&di.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=di.get("host:"+e)||this._host}}function Wi(e,t,n){let r;if(B("string"==typeof t,"typeof type must == string"),B("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return Oi(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
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
 */class Vi{incrementCounter(e,t=1){ce(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return $(this.counters_)}constructor(){this.counters_={}}}
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
 */const $i={},zi={};function Ki(e){const t=e.toString();return $i[t]||($i[t]=new Vi),$i[t]}
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
class Gi{closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Mi((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
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
 */class Ji{open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Gi(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Z()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yi(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&qi.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ji.forceAllow_=!0}static forceDisallow(){Ji.forceDisallow_=!0}static isAvailable(){return!Z()&&(!!Ji.forceAllow_||!(Ji.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=H(t),r=Ai(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Z())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ie(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ei(e),this.stats_=Ki(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Wi(t,"long_polling",e))}}class Yi{static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||wi("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){Z()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{wi("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Z())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=mi(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Yi.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){wi("frame writing exception"),e.stack&&wi(e.stack),wi(e)}}}}
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
 */let Qi=null;"undefined"!=typeof MozWebSocket?Qi=MozWebSocket:"undefined"!=typeof WebSocket&&(Qi=WebSocket);class Xi{static connectionURL_(e,t,n,r,i){const s={v:"5"};return!Z()&&"undefined"!=typeof location&&location.hostname&&qi.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s.ac=r),i&&(s.p=i),Wi(e,"websocket",s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,di.set("previous_websocket_failure",!0);try{let e;if(Z()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/5/${ci}/${ai.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new Qi(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Xi.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Qi&&!Xi.forceDisallow_}static previouslyFailed(){return di.isInMemoryStorage||!0===di.get("previous_websocket_failure")}markConnectionHealthy(){di.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=re(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ai(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ei(this.connId),this.stats_=Ki(t),this.connURL=Xi.connectionURL_(t,s,o,r,n),this.nodeAdmin=t.nodeAdmin}}Xi.responsesRequiredToBeHealthy=2,Xi.healthyTimeout=3e4;
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
class Zi{static get ALL_TRANSPORTS(){return[Ji,Xi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Xi&&Xi.isAvailable();let n=t&&!Xi.previouslyFailed();if(e.webSocketOnly&&(t||Ci("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Xi];else{const e=this.transports_=[];for(const t of Zi.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Zi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(e){this.initTransports_(e)}}Zi.globalTransportInitialized_=!1;class es{start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ui((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ni("t",e),n=Ni("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ni("t",e),n=Ni("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ni("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Ii("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ii("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Ci("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ui((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ui((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(di.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(e,t,n,r,i,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ei("c:"+this.id+":"),this.transportManager_=new Zi(t),this.log_("Connection created"),this.start_()}}
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
 */class ts{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class ns{trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){B(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}}
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
 */class rs extends ns{static getInstance(){return new rs}getInitialEvent(e){return B("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||J()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
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
 */class is{toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}}function ss(){return new is("")}function os(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function as(e){return e.pieces_.length-e.pieceNum_}function cs(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new is(e.pieces_,t)}function ls(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function us(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function hs(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new is(t,0)}function ds(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof is)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new is(n,0)}function fs(e){return e.pieceNum_>=e.pieces_.length}function ps(e,t){const n=os(e),r=os(t);if(null===n)return t;if(n===r)return ps(cs(e),cs(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ms(e,t){if(as(e)!==as(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function gs(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(as(e)>as(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class _s{constructor(e,t){this.errorPrefix_=t,this.parts_=us(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Ie(this.parts_[e]);ys(this)}}function ys(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+vs(e))}function vs(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class bs extends ns{static getInstance(){return new bs}getInitialEvent(e){return B("visible"===e,"Unknown event type: "+e),[this.visible_]}constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}}
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
 */class ws extends ts{sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(ie(i)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new K,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;ws.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ce(e,"w")){const n=le(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Ci(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||ae(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=oe(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ie(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Ii("Unrecognized action received from server: "+ie(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ws.nextConnectionId_++,i=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},c=function(e){B(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?wi("getToken() completed but was canceled"):(wi("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new es(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Ci(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),i))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&Ci(e),a())}}}interrupt(e){wi("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wi("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ue(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Pi(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new is(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){wi("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){wi("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Z()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ci.replace(/\./g,"-")]=1,J()?e["framework.cordova"]=1:Q()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rs.getInstance().currentlyOnline();return ue(this.interruptReasons_)&&e}constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=ws.nextPersistentConnectionId_++,this.log_=Ei("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Z())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");bs.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&rs.getInstance().on("online",this.onOnline_,this)}}ws.nextPersistentConnectionId_=0,ws.nextConnectionId_=0;
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
class Es{static Wrap(e,t){return new Es(e,t)}constructor(e,t){this.name=e,this.node=t}}
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
 */class Is{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Es("[MIN_NAME]",e),r=new Es("[MIN_NAME]",t);return 0!==this.compare(n,r)}minPost(){return Es.MIN}}
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
 */let Ts;class Cs extends Is{static get __EMPTY_NODE(){return Ts}static set __EMPTY_NODE(e){Ts=e}compare(e,t){return ki(e.name,t.name)}isDefinedOn(e){throw F("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Es.MIN}maxPost(){return new Es("[MAX_NAME]",Ts)}makePost(e,t){return B("string"==typeof e,"KeyIndex indexValue must always be a string."),new Es(e,Ts)}toString(){return".key"}}const Ss=new Cs;
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
 */class ks{getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}}class Rs{copy(e,t,n,r,i){return new Rs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ns.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ns.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Rs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Rs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Rs.RED,this.left=null!=r?r:Ns.EMPTY_NODE,this.right=null!=i?i:Ns.EMPTY_NODE}}Rs.RED=!0,Rs.BLACK=!1;class Ns{insert(e,t){return new Ns(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Rs.BLACK,null,null))}remove(e){return new Ns(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Rs.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ks(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ks(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ks(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ks(this.root_,null,this.comparator_,!0,e)}constructor(e,t=Ns.EMPTY_NODE){this.comparator_=e,this.root_=t}}
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
function Ps(e,t){return ki(e.name,t.name)}function As(e,t){return ki(e,t)}
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
 */let Os;Ns.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Rs(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const xs=function(e){return"number"==typeof e?"number:"+xi(e):"string:"+e},Ls=function(e){if(e.isLeafNode()){const t=e.val();B("string"==typeof t||"number"==typeof t||"object"==typeof t&&ce(t,".sv"),"Priority must be a string or number.")}else B(e===Os||e.isEmpty(),"priority of unexpected type.");B(e===Os||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Ds,Ms,Us;class Bs{static set __childrenNodeConstructor(e){Ds=e}static get __childrenNodeConstructor(){return Ds}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Bs(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Bs.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return fs(e)?this:".priority"===os(e)?this.priorityNode_:Bs.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Bs.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=os(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(B(".priority"!==n||1===as(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Bs.__childrenNodeConstructor.EMPTY_NODE.updateChild(cs(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xs(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?xi(this.value_):this.value_,this.lazyHash_=gi(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Bs.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Bs.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Bs.VALUE_TYPE_ORDER.indexOf(t),i=Bs.VALUE_TYPE_ORDER.indexOf(n);return B(r>=0,"Unknown leaf type: "+t),B(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}constructor(e,t=Bs.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,B(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ls(this.priorityNode_)}}Bs.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Fs=new class extends Is{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?ki(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Es.MIN}maxPost(){return new Es("[MAX_NAME]",new Bs("[PRIORITY-POST]",Us))}makePost(e,t){const n=Ms(e);return new Es(t,new Bs("[PRIORITY-POST]",n))}toString(){return".priority"}},js=Math.log(2);
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
 */class qs{nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/js,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}}const Hs=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Rs(a,o.node,Rs.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=i(t,c),u=i(c+1,r);return o=e[c],a=n?n(o):o,new Rs(a,o.node,Rs.BLACK,l,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const l=i(s+1,a),u=e[s],h=n?n(u):u;c(new Rs(h,u.node,r,null,l))},c=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Rs.BLACK):(a(r,Rs.BLACK),a(r,Rs.RED))}return s}(new qs(e.length));return new Ns(r||t,s)};
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
 */let Ws;const Vs={};class $s{static get Default(){return B(Vs&&Fs,"ChildrenNode.ts has not been loaded"),Ws=Ws||new $s({".priority":Vs},{".priority":Fs}),Ws}get(e){const t=le(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ns?t:null}hasIndex(e){return ce(this.indexSet_,e.toString())}addIndex(e,t){B(e!==Ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Es.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?Hs(n,e.getCompare()):Vs;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=s,new $s(l,c)}addToIndexes(e,t){const n=he(this.indexes_,((n,r)=>{const i=le(this.indexSet_,r);if(B(i,"Missing index implementation for "+r),n===Vs){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Es.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),Hs(n,i.getCompare())}return Vs}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Es(e.name,r))),i.insert(e,e.node)}}));return new $s(n,this.indexSet_)}removeFromIndexes(e,t){const n=he(this.indexes_,(n=>{if(n===Vs)return n;{const r=t.get(e.name);return r?n.remove(new Es(e.name,r)):n}}));return new $s(n,this.indexSet_)}constructor(e,t){this.indexes_=e,this.indexSet_=t}}
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
 */let zs;class Ks{static get EMPTY_NODE(){return zs||(zs=new Ks(new Ns(As),null,$s.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zs}updatePriority(e){return this.children_.isEmpty()?this:new Ks(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?zs:t}}getChild(e){const t=os(e);return null===t?this:this.getImmediateChild(t).getChild(cs(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(B(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Es(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?zs:this.priorityNode_;return new Ks(r,s,i)}}updateChild(e,t){const n=os(e);if(null===n)return t;{B(".priority"!==os(e)||1===as(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(cs(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Fs,((s,o)=>{t[s]=o.val(e),n++,i&&Ks.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+xs(this.getPriority().val())+":"),this.forEachChild(Fs,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":gi(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Es(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Es(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Es(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Es.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Es.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gs?-1:0}withIndex(e){if(e===Ss||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ks(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Fs),n=t.getIterator(Fs);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Ss?null:this.indexMap_.get(e.toString())}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ls(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}Ks.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Gs=new class extends Ks{compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ks.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Ns(As),Ks.EMPTY_NODE,$s.Default)}};Object.defineProperties(Es,{MIN:{value:new Es("[MIN_NAME]",Ks.EMPTY_NODE)},MAX:{value:new Es("[MAX_NAME]",Gs)}}),Cs.__EMPTY_NODE=Ks.EMPTY_NODE,Bs.__childrenNodeConstructor=Ks,Os=Gs,function(e){Us=e}(Gs);function Js(e,t=null){if(null===e)return Ks.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),B(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Bs(e,Js(t))}if(e instanceof Array){let n=Ks.EMPTY_NODE;return Oi(e,((t,r)=>{if(ce(e,t)&&"."!==t.substring(0,1)){const e=Js(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Js(t))}{const n=[];let r=!1;if(Oi(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Js(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Es(e,i)))}})),0===n.length)return Ks.EMPTY_NODE;const i=Hs(n,Ps,(e=>e.name),As);if(r){const e=Hs(n,Fs.getCompare());return new Ks(i,Js(t),new $s({".priority":e},{".priority":Fs}))}return new Ks(i,Js(t),$s.Default)}}!function(e){Ms=e}(Js);
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
class Ys extends Is{extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?ki(e.name,t.name):i}makePost(e,t){const n=Js(e),r=Ks.EMPTY_NODE.updateChild(this.indexPath_,n);return new Es(t,r)}maxPost(){const e=Ks.EMPTY_NODE.updateChild(this.indexPath_,Gs);return new Es("[MAX_NAME]",e)}toString(){return us(this.indexPath_,0).join("/")}constructor(e){super(),this.indexPath_=e,B(!fs(e)&&".priority"!==os(e),"Can't create PathIndex with empty path or .priority key")}}
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
 */const Qs=new class extends Is{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?ki(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Es.MIN}maxPost(){return Es.MAX}makePost(e,t){const n=Js(e);return new Es(t,n)}toString(){return".value"}},Xs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
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
function Zs(e){return{type:"value",snapshotNode:e}}function eo(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function to(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function no(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class ro{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fs}copy(){const e=new ro;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fs}}function io(e){const t={};if(e.isDefault())return t;let n;return e.index_===Fs?n="$priority":e.index_===Qs?n="$value":e.index_===Ss?n="$key":(B(e.index_ instanceof Ys,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=ie(n),e.startSet_&&(t.startAt=ie(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+ie(e.indexStartName_))),e.endSet_&&(t.endAt=ie(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+ie(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function so(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Fs&&(t.i=e.index_.toString()),t}
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
 */class oo extends ts{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=oo.getListenId_(e,n),o={};this.listens_[s]=o;const a=io(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),le(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=oo.getListenId_(e,t);delete this.listens_[n]}get(e){const t=io(e._queryParams),n=e._path.toString(),r=new K;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pe(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=re(o.responseText)}catch(e){Ci("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Ci("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Ei("p:rest:"),this.listens_={}}}
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
 */class ao{getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}constructor(){this.rootNode_=Ks.EMPTY_NODE}}
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
 */function co(){return{value:null,children:new Map}}function lo(e,t,n){if(fs(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=os(t);e.children.has(r)||e.children.set(r,co());lo(e.children.get(r),t=cs(t),n)}}function uo(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,r)=>{uo(r,new is(t.toString()+"/"+e),n)}))}class ho{get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Oi(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}constructor(e){this.collection_=e,this.last_=null}}
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
 */class fo{reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Oi(e,((e,r)=>{r>0&&ce(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Ui(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ho(e);const n=1e4+2e4*Math.random();Ui(this.reportStats_.bind(this),Math.floor(n))}}
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
 */var po,mo;function go(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(mo=po||(po={}))[mo.OVERWRITE=0]="OVERWRITE",mo[mo.MERGE=1]="MERGE",mo[mo.ACK_USER_WRITE=2]="ACK_USER_WRITE",mo[mo.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class _o{operationForChild(e){if(fs(this.path)){if(null!=this.affectedTree.value)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new is(e));return new _o(ss(),t,this.revert)}}return B(os(this.path)===e,"operationForChild called for unrelated child."),new _o(cs(this.path),this.affectedTree,this.revert)}constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=po.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
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
class yo{operationForChild(e){return fs(this.path)?new yo(this.source,ss(),this.snap.getImmediateChild(e)):new yo(this.source,cs(this.path),this.snap)}constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=po.OVERWRITE}}
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
 */class vo{operationForChild(e){if(fs(this.path)){const t=this.children.subtree(new is(e));return t.isEmpty()?null:t.value?new yo(this.source,ss(),t.value):new vo(this.source,ss(),t)}return B(os(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vo(this.source,cs(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=po.MERGE}}
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
 */class bo{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(fs(e))return this.isFullyInitialized()&&!this.filtered_;const t=os(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}}
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
 */function wo(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw F("Should only compare child_ events.");const r=new Es(t.childName,t.snapshotNode),i=new Es(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Eo(e,t){return{eventCache:e,serverCache:t}}function Io(e,t,n,r){return Eo(new bo(t,n,r),e.serverCache)}function To(e,t,n,r){return Eo(e.eventCache,new bo(t,n,r))}function Co(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function So(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let ko;class Ro{static fromObject(e){let t=new Ro(null);return Oi(e,((e,n)=>{t=t.set(new is(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ss(),value:this.value};if(fs(e))return null;{const n=os(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(cs(e),t);if(null!=i){return{path:ds(new is(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(fs(e))return this;{const t=os(e),n=this.children.get(t);return null!==n?n.subtree(cs(e)):new Ro(null)}}set(e,t){if(fs(e))return new Ro(t,this.children);{const n=os(e),r=(this.children.get(n)||new Ro(null)).set(cs(e),t),i=this.children.insert(n,r);return new Ro(this.value,i)}}remove(e){if(fs(e))return this.children.isEmpty()?new Ro(null):new Ro(null,this.children);{const t=os(e),n=this.children.get(t);if(n){const r=n.remove(cs(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Ro(null):new Ro(this.value,i)}return this}}get(e){if(fs(e))return this.value;{const t=os(e),n=this.children.get(t);return n?n.get(cs(e)):null}}setTree(e,t){if(fs(e))return t;{const n=os(e),r=(this.children.get(n)||new Ro(null)).setTree(cs(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Ro(this.value,i)}}fold(e){return this.fold_(ss(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(ds(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ss(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(fs(e))return null;{const r=os(e),i=this.children.get(r);return i?i.findOnPath_(cs(e),ds(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ss(),t)}foreachOnPath_(e,t,n){if(fs(e))return this;{this.value&&n(t,this.value);const r=os(e),i=this.children.get(r);return i?i.foreachOnPath_(cs(e),ds(t,r),n):new Ro(null)}}foreach(e){this.foreach_(ss(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(ds(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}constructor(e,t=(()=>(ko||(ko=new Ns(Ri)),ko))()){this.value=e,this.children=t}}
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
 */class No{static empty(){return new No(new Ro(null))}constructor(e){this.writeTree_=e}}function Po(e,t,n){if(fs(t))return new No(new Ro(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=ps(i,t);return s=s.updateChild(o,n),new No(e.writeTree_.set(i,s))}{const r=new Ro(n),i=e.writeTree_.setTree(t,r);return new No(i)}}}function Ao(e,t,n){let r=e;return Oi(n,((e,n)=>{r=Po(r,ds(t,e),n)})),r}function Oo(e,t){if(fs(t))return No.empty();{const n=e.writeTree_.setTree(t,new Ro(null));return new No(n)}}function xo(e,t){return null!=Lo(e,t)}function Lo(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ps(n.path,t)):null}function Do(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Fs,((e,n)=>{t.push(new Es(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Es(e,n.value))})),t}function Mo(e,t){if(fs(t))return e;{const n=Lo(e,t);return new No(null!=n?new Ro(n):e.writeTree_.subtree(t))}}function Uo(e){return e.writeTree_.isEmpty()}function Bo(e,t){return Fo(ss(),e.writeTree_,t)}function Fo(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(B(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Fo(ds(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(ds(e,".priority"),r)),n}}
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
 */function jo(e,t){return Zo(t,e)}function qo(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));B(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Ho(t,r.path)?i=!1:gs(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=Vo(e.allWrites,Wo,ss()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Oo(e.visibleWrites,r.path);else{Oi(r.children,(t=>{e.visibleWrites=Oo(e.visibleWrites,ds(r.path,t))}))}return!0}return!1}function Ho(e,t){if(e.snap)return gs(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&gs(ds(e.path,n),t))return!0;return!1}function Wo(e){return e.visible}function Vo(e,t,n){let r=No.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)gs(n,e)?(t=ps(n,e),r=Po(r,t,s.snap)):gs(e,n)&&(t=ps(e,n),r=Po(r,ss(),s.snap.getChild(t)));else{if(!s.children)throw F("WriteRecord should have .snap or .children");if(gs(n,e))t=ps(n,e),r=Ao(r,t,s.children);else if(gs(e,n))if(t=ps(e,n),fs(t))r=Ao(r,ss(),s.children);else{const e=le(s.children,os(t));if(e){const n=e.getChild(cs(t));r=Po(r,ss(),n)}}}}}return r}function $o(e,t,n,r,i){if(r||i){const s=Mo(e.visibleWrites,t);if(!i&&Uo(s))return n;if(i||null!=n||xo(s,ss())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(gs(e.path,t)||gs(t,e.path))};return Bo(Vo(e.allWrites,s,t),n||Ks.EMPTY_NODE)}return null}{const r=Lo(e.visibleWrites,t);if(null!=r)return r;{const r=Mo(e.visibleWrites,t);if(Uo(r))return n;if(null!=n||xo(r,ss())){return Bo(r,n||Ks.EMPTY_NODE)}return null}}}function zo(e,t,n,r){return $o(e.writeTree,e.treePath,t,n,r)}function Ko(e,t){return function(e,t,n){let r=Ks.EMPTY_NODE;const i=Lo(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Fs,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Mo(e.visibleWrites,t);return n.forEachChild(Fs,((e,t)=>{const n=Bo(Mo(i,new is(e)),t);r=r.updateImmediateChild(e,n)})),Do(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Do(Mo(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Go(e,t,n,r){return function(e,t,n,r,i){B(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ds(t,n);if(xo(e.visibleWrites,s))return null;{const t=Mo(e.visibleWrites,s);return Uo(t)?i.getChild(n):Bo(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Jo(e,t){return function(e,t){return Lo(e.visibleWrites,t)}(e.writeTree,ds(e.treePath,t))}function Yo(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const c=Mo(e.visibleWrites,t),l=Lo(c,ss());if(null!=l)a=l;else{if(null==n)return[];a=Bo(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let c=n.getNext();for(;c&&e.length<i;)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Qo(e,t,n){return function(e,t,n,r){const i=ds(t,n),s=Lo(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return Bo(Mo(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Xo(e,t){return Zo(ds(e.treePath,t),e.writeTree)}function Zo(e,t){return{treePath:e,writeTree:t}}
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
 */class ea{trackChildChange(e){const t=e.type,n=e.childName;B("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),B(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,no(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,to(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,eo(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw F("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,no(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
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
 */const ta=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class na{getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new bo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qo(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:So(this.viewCache_),i=Yo(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}}
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
 */function ra(e,t,n,r,i){const s=new ea;let o,a;if(n.type===po.OVERWRITE){const c=n;c.source.fromUser?o=oa(e,t,c.path,c.snap,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!fs(c.path),o=sa(e,t,c.path,c.snap,r,i,a,s))}else if(n.type===po.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,c)=>{const l=ds(n,r);aa(t,os(l))&&(a=oa(e,a,l,c,i,s,o))})),r.foreach(((r,c)=>{const l=ds(n,r);aa(t,os(l))||(a=oa(e,a,l,c,i,s,o))})),a}(e,t,c.path,c.children,r,i,s):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=la(e,t,c.path,c.children,r,i,a,s))}else if(n.type===po.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=Jo(r,n))return t;{const a=new na(r,t,i),c=t.eventCache.getNode();let l;if(fs(n)||".priority"===os(n)){let n;if(t.serverCache.isFullyInitialized())n=zo(r,So(t));else{const e=t.serverCache.getNode();B(e instanceof Ks,"serverChildren would be complete if leaf node"),n=Ko(r,e)}l=e.filter.updateFullNode(c,n,s)}else{const i=os(n);let u=Qo(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=c.getImmediateChild(i)),l=null!=u?e.filter.updateChild(c,i,u,cs(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(c,i,Ks.EMPTY_NODE,cs(n),a,s):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=zo(r,So(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Jo(r,ss()),Io(t,l,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=Jo(i,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(fs(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return sa(e,t,n,c.getNode().getChild(n),i,s,a,o);if(fs(n)){let r=new Ro(null);return c.getNode().forEachChild(Ss,((e,t)=>{r=r.set(new is(e),t)})),la(e,t,n,r,i,s,a,o)}return t}{let l=new Ro(null);return r.foreach(((e,t)=>{const r=ds(n,e);c.isCompleteForPath(r)&&(l=l.set(e,c.getNode().getChild(r)))})),la(e,t,n,l,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==po.LISTEN_COMPLETE)throw F("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=To(t,s.getNode(),s.isFullyInitialized()||fs(n),s.isFiltered());return ia(e,o,n,r,ta,i)}(e,t,n.path,r,s)}const c=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Co(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Zs(Co(t)))}}(t,o,c),{viewCache:o,changes:c}}function ia(e,t,n,r,i,s){const o=t.eventCache;if(null!=Jo(r,n))return t;{let a,c;if(fs(n))if(B(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=So(t),i=Ko(r,n instanceof Ks?n:Ks.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=zo(r,So(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=os(n);if(".priority"===l){B(1===as(n),"Can't have a priority with additional path components");const i=o.getNode();c=t.serverCache.getNode();const s=Go(r,n,i,c);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=cs(n);let h;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();const e=Go(r,n,o.getNode(),c);h=null!=e?o.getNode().getImmediateChild(l).updateChild(u,e):o.getNode().getImmediateChild(l)}else h=Qo(r,l,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),l,h,u,i,s):o.getNode()}}return Io(t,a,o.isFullyInitialized()||fs(n),e.filter.filtersNodes())}}function sa(e,t,n,r,i,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(fs(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),e,null)}else{const e=os(n);if(!c.isCompleteForPath(n)&&as(n)>1)return t;const i=cs(n),s=c.getNode().getImmediateChild(e).updateChild(i,r);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,i,ta,null)}const h=To(t,l,c.isFullyInitialized()||fs(n),u.filtersNodes());return ia(e,h,n,i,new na(i,h,s),a)}function oa(e,t,n,r,i,s,o){const a=t.eventCache;let c,l;const u=new na(i,t,s);if(fs(n))l=e.filter.updateFullNode(t.eventCache.getNode(),r,o),c=Io(t,l,!0,e.filter.filtersNodes());else{const i=os(n);if(".priority"===i)l=e.filter.updatePriority(t.eventCache.getNode(),r),c=Io(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=cs(n),l=a.getNode().getImmediateChild(i);let h;if(fs(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===ls(s)&&e.getChild(hs(s)).isEmpty()?e:e.updateChild(s,r):Ks.EMPTY_NODE}if(l.equals(h))c=t;else{c=Io(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function aa(e,t){return e.eventCache.isCompleteForChild(t)}function ca(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function la(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=fs(n)?r:new Ro(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const c=ca(0,t.serverCache.getNode().getImmediateChild(n),r);l=sa(e,l,new is(n),c,i,s,o,a)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!u.hasChild(n)&&!c){const c=ca(0,t.serverCache.getNode().getImmediateChild(n),r);l=sa(e,l,new is(n),c,i,s,o,a)}})),l}function ua(e,t){const n=So(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!fs(t)&&!n.getImmediateChild(os(t)).isEmpty())?n.getChild(t):null}function ha(e,t,n,r){t.type===po.MERGE&&null!==t.source.queryId&&(B(So(e.viewCache_),"We should always have a full cache before handling merges"),B(Co(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ra(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,B(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),B(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),B(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,da(e,s.changes,s.viewCache.eventCache.getNode(),null)}function da(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;
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
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),wo(e,i,"child_removed",t,r,n),wo(e,i,"child_added",t,r,n),wo(e,i,"child_moved",s,r,n),wo(e,i,"child_changed",t,r,n),wo(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */let fa,pa;function ma(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return B(null!=s,"SyncTree gave us an op for an invalid query."),ha(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(ha(s,t,n,r));return i}}function ga(e,t){let n=null;for(const r of e.views.values())n=n||ua(r,t);return n}class _a{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ro(null),this.pendingWriteTree_={visibleWrites:No.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ya(e,t,n,r,i){return function(e,t,n,r,i){B(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Po(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Ia(e,new yo({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function va(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(qo(e.pendingWriteTree_,t)){let t=new Ro(null);return null!=r.snap?t=t.set(ss(),!0):Oi(r.children,(e=>{t=t.set(new is(e),!0)})),Ia(e,new _o(r.path,t,n))}return[]}function ba(e,t,n){return Ia(e,new yo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function wa(e,t,n,r){const i=Sa(e,r);if(null!=i){const r=ka(i),s=r.path,o=r.queryId,a=ps(s,t);return Ra(e,s,new yo(go(o),a,n))}return[]}function Ea(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=ga(n,ps(e,t));if(r)return r}));return $o(r,t,i,n,!0)}function Ia(e,t){return Ta(t,e.syncPointTree_,null,jo(e.pendingWriteTree_,ss()))}function Ta(e,t,n,r){if(fs(e.path))return Ca(e,t,n,r);{const i=t.get(ss());null==n&&null!=i&&(n=ga(i,ss()));let s=[];const o=os(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=Xo(r,o);s=s.concat(Ta(a,c,e,t))}return i&&(s=s.concat(ma(i,e,r,n))),s}}function Ca(e,t,n,r){const i=t.get(ss());null==n&&null!=i&&(n=ga(i,ss()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Xo(r,t),c=e.operationForChild(t);c&&(s=s.concat(Ca(c,i,o,a)))})),i&&(s=s.concat(ma(i,e,r,n))),s}function Sa(e,t){return e.tagToQueryMap.get(t)}function ka(e){const t=e.indexOf("$");return B(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new is(e.substr(0,t))}}function Ra(e,t,n){const r=e.syncPointTree_.get(t);B(r,"Missing sync point for query tag that we're tracking");return ma(r,n,jo(e.pendingWriteTree_,t),null)}
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
class Na{getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Na(t)}node(){return this.node_}constructor(e){this.node_=e}}class Pa{getImmediateChild(e){const t=ds(this.path_,e);return new Pa(this.syncTree_,t)}node(){return Ea(this.syncTree_,this.path_)}constructor(e,t){this.syncTree_=e,this.path_=t}}const Aa=function(e,t,n){return e&&"object"==typeof e?(B(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Oa(e[".sv"],t,n):"object"==typeof e[".sv"]?xa(e[".sv"],t):void B(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Oa=function(e,t,n){if("timestamp"===e)return n.timestamp;B(!1,"Unexpected server value: "+e)},xa=function(e,t,n){e.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&B(!1,"Unexpected increment value: "+r);const i=t.node();if(B(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},La=function(e,t,n,r){return Ma(t,new Pa(n,e),r)},Da=function(e,t,n){return Ma(e,new Na(t),n)};function Ma(e,t,n){const r=e.getPriority().val(),i=Aa(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Aa(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new Bs(s,Js(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new Bs(i))),r.forEachChild(Fs,((e,r)=>{const i=Ma(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
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
 */class Ua{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ba(e,t){let n=t instanceof is?t:new is(t),r=e,i=os(n);for(;null!==i;){const e=le(r.node.children,i)||{children:{},childCount:0};r=new Ua(i,r,e),n=cs(n),i=os(n)}return r}function Fa(e){return e.node.value}function ja(e,t){e.node.value=t,$a(e)}function qa(e){return e.node.childCount>0}function Ha(e,t){Oi(e.node.children,((n,r)=>{t(new Ua(n,e,r))}))}function Wa(e,t,n,r){n&&!r&&t(e),Ha(e,(e=>{Wa(e,t,!0,r)})),n&&r&&t(e)}function Va(e){return new is(null===e.parent?e.name:Va(e.parent)+"/"+e.name)}function $a(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Fa(e)&&!qa(e)}(n),i=ce(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,$a(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,$a(e))}
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
 */(e.parent,e.name,e)}const za=/[\[\].#$\/\u0000-\u001F\u007F]/,Ka=/[\[\].#$\u0000-\u001F\u007F]/,Ga=function(e){return"string"==typeof e&&0!==e.length&&!za.test(e)},Ja=function(e){return"string"==typeof e&&0!==e.length&&!Ka.test(e)},Ya=function(e,t,n,r){r&&void 0===t||Qa(we(e,"value"),t,n)},Qa=function(e,t,n){const r=n instanceof is?new _s(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+vs(r));if("function"==typeof t)throw new Error(e+"contains a function "+vs(r)+" with contents = "+t.toString());if(Si(t))throw new Error(e+"contains "+t.toString()+" "+vs(r));if("string"==typeof t&&t.length>10485760/3&&Ie(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+vs(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(Oi(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Ga(t)))throw new Error(e+" contains an invalid key ("+t+") "+vs(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Ie(a),ys(o),Qa(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=Ie(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+vs(r)+" in addition to actual children.")}},Xa=function(e,t,n,r){if(!(r&&void 0===n||Ja(n)))throw new Error(we(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Za=function(e,t){if(".info"===os(t))throw new Error(e+" failed = Can't modify data under /.info/")},ec=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Ga(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ja(e)}(n))throw new Error(we(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class tc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function nc(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||ms(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function rc(e,t,n){nc(e,n),ic(e,(e=>gs(e,t)||gs(t,e)))}function ic(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(sc(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function sc(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();yi&&wi("event: "+n.toString()),Mi(r)}}}
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
 */class oc{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new tc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=co(),this.transactionQueueTree_=new Ua,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function ac(e,t,n){if(e.stats_=Ki(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new oo(e.repoInfo_,((t,n,r,i)=>{uc(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>hc(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ie(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new ws(e.repoInfo_,t,((t,n,r,i)=>{uc(e,t,n,r,i)}),(t=>{hc(e,t)}),(t=>{!function(e,t){Oi(t,((t,n)=>{dc(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return zi[n]||(zi[n]=t()),zi[n]}(e.repoInfo_,(()=>new fo(e.stats_,e.server_))),e.infoData_=new ao,e.infoSyncTree_=new _a({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=ba(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),dc(e,"connected",!1),e.serverSyncTree_=new _a({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);rc(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function cc(e){const t=e.infoData_.getNode(new is(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function lc(e){return(t=(t={timestamp:cc(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function uc(e,t,n,r,i){e.dataUpdateCount++;const s=new is(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=he(n,(e=>Js(e)));o=function(e,t,n,r){const i=Sa(e,r);if(i){const r=ka(i),s=r.path,o=r.queryId,a=ps(s,t),c=Ro.fromObject(n);return Ra(e,s,new vo(go(o),a,c))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=Js(n);o=wa(e.serverSyncTree_,s,t,i)}else if(r){const t=he(n,(e=>Js(e)));o=function(e,t,n){const r=Ro.fromObject(n);return Ia(e,new vo({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=Js(n);o=ba(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=bc(e,s)),rc(e.eventQueue_,a,o)}function hc(e,t){dc(e,"connected",t),!1===t&&function(e){gc(e,"onDisconnectEvents");const t=lc(e),n=co();uo(e.onDisconnect_,ss(),((r,i)=>{const s=La(r,i,e.serverSyncTree_,t);lo(n,r,s)}));let r=[];uo(n,ss(),((t,n)=>{r=r.concat(ba(e.serverSyncTree_,t,n));const i=Cc(e,t);bc(e,i)})),e.onDisconnect_=co(),rc(e.eventQueue_,ss(),r)}(e)}function dc(e,t,n){const r=new is("/.info/"+t),i=Js(n);e.infoData_.updateSnapshot(r,i);const s=ba(e.infoSyncTree_,r,i);rc(e.eventQueue_,r,s)}function fc(e){return e.nextWriteId_++}function pc(e,t,n,r,i){gc(e,"set",{path:t.toString(),value:n,priority:r});const s=lc(e),o=Js(n,r),a=Ea(e.serverSyncTree_,t),c=Da(o,a,s),l=fc(e),u=ya(e.serverSyncTree_,t,c,l,!0);nc(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||Ci("set at "+t+" failed: "+n);const o=va(e.serverSyncTree_,l,!s);rc(e.eventQueue_,t,o),_c(e,i,n,r)}));const h=Cc(e,t);bc(e,h),rc(e.eventQueue_,h,[])}function mc(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function gc(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),wi(n,...t)}function _c(e,t,n,r){t&&Mi((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function yc(e,t,n){return Ea(e.serverSyncTree_,t,n)||Ks.EMPTY_NODE}function vc(e,t=e.transactionQueueTree_){if(t||Tc(e,t),Fa(t)){const n=Ec(e,t);B(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=yc(e,t,r);let s=i;const o=i.hash();for(let e=0;e<n.length;e++){const r=n[e];B(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const i=ps(t,r.path);s=s.updateChild(i,r.currentOutputSnapshotRaw)}const a=s.val(!0),c=t;e.server_.put(c.toString(),a,(r=>{gc(e,"transaction put response",{path:c.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(va(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Tc(e,Ba(e.transactionQueueTree_,t)),vc(e,e.transactionQueueTree_),rc(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Mi(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Ci("transaction at "+c.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}bc(e,t)}}),o)}(e,Va(t),n)}else qa(t)&&Ha(t,(t=>{vc(e,t)}))}function bc(e,t){const n=wc(e,t),r=Va(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=ps(n,c.path);let u,h=!1;if(B(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,u=c.abortReason,i=i.concat(va(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)h=!0,u="maxretry",i=i.concat(va(e.serverSyncTree_,c.currentWriteId,!0));else{const n=yc(e,c.path,s);c.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){Qa("transaction failed: Data returned ",r,c.path);let t=Js(r);"object"==typeof r&&null!=r&&ce(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=lc(e),l=Da(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=fc(e),s.splice(s.indexOf(o),1),i=i.concat(ya(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),i=i.concat(va(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",i=i.concat(va(e.serverSyncTree_,c.currentWriteId,!0))}rc(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;Tc(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)Mi(r[e]);vc(e,e.transactionQueueTree_)}(e,Ec(e,n),r),r}function wc(e,t){let n,r=e.transactionQueueTree_;for(n=os(t);null!==n&&void 0===Fa(r);)r=Ba(r,n),n=os(t=cs(t));return r}function Ec(e,t){const n=[];return Ic(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Ic(e,t,n){const r=Fa(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);Ha(t,(t=>{Ic(e,t,n)}))}function Tc(e,t){const n=Fa(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ja(t,n.length>0?n:void 0)}Ha(t,(t=>{Tc(e,t)}))}function Cc(e,t){const n=Va(wc(e,t)),r=Ba(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Sc(e,t)})),Sc(e,r),Wa(r,(t=>{Sc(e,t)})),n}function Sc(e,t){const n=Fa(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(B(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(B(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(va(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?ja(t,void 0):n.length=s+1,rc(e.eventQueue_,Va(t),i);for(let e=0;e<r.length;e++)Mi(r[e])}}
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
 */const kc=function(e,t){const n=Rc(e),r=n.namespace;"firebase.com"===n.domain&&Ti(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Ti("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ci("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Hi(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new is(n.pathString)}},Rc=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ci(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
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
class Nc{get key(){return fs(this._path)?null:ls(this._path)}get ref(){return new Pc(this._repo,this._path)}get _queryIdentifier(){const e=so(this._queryParams),t=Pi(e);return"{}"===t?"default":t}get _queryObject(){return so(this._queryParams)}isEqual(e){if(!((e=Te(e))instanceof Nc))return!1;const t=this._repo===e._repo,n=ms(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}}class Pc extends Nc{get parent(){const e=hs(this._path);return null===e?null:new Pc(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}constructor(e,t){super(e,t,new ro,!1)}}function Ac(e,t){return(e=Te(e))._checkNotDeleted("ref"),void 0!==t?Oc(e._root,t):e._root}function Oc(e,t){var n,r,i,s;return null===os((e=Te(e))._path)?(n="child",r="path",s=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Xa(n,r,i,s)):Xa("child","path",t,!1),new Pc(e._repo,ds(e._path,t))}function xc(e,t){e=Te(e),Za("set",e._path),Ya("set",t,e._path,!1);const n=new K;return pc(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}!function(e){B(!fa,"__referenceConstructor has already been defined"),fa=e}(Pc),function(e){B(!pa,"__referenceConstructor has already been defined"),pa=e}(Pc);
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
const Lc={};let Dc=!1;function Mc(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||Ti("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wi("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=kc(s,i),l=c.repoInfo;void 0!==ai&&ai.env&&(a=ai.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${l.namespace}`,c=kc(s,i),l=c.repoInfo):o=!c.repoInfo.secure;const u=i&&o?new ji(ji.OWNER):new Fi(e.name,e.options,t);ec("Invalid Firebase Database URL",c),fs(c.path)||Ti("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=Lc[t.name];i||(i={},Lc[t.name]=i);let s=i[e.toURLString()];s&&Ti("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new oc(e,Dc,n,r),i[e.toURLString()]=s,s}(l,e,u,new Bi(e.name,n));return new Uc(h,e)}class Uc{get _repo(){return this._instanceStarted||(ac(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pc(this._repo,ss())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Lc[t];n&&n[e.key]===e||Ti(`Database ${t}(${e.repoInfo_}) has already been deleted.`),mc(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Ti("Cannot call "+e+" on a deleted database.")}constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}}function Bc(e=ut(),t){return ot(e,"database").getImmediate({identifier:t})}ws.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},ws.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){ci="9.9.4",st(new Ce("database",((e,{instanceIdentifier:t})=>Mc(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ht("@firebase/database","0.13.6",e),ht("@firebase/database","0.13.6","esm2017")}
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
 */();
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
ht("firebase","9.9.4","app");const Fc={apiKey:"AIzaSyCSpAHIweIjCadvRfBg5ErXYj-EJPMjj7I",authDomain:"trinity-matrix.firebaseapp.com",projectId:"trinity-matrix",storageBucket:"trinity-matrix.appspot.com",messagingSenderId:"638807085059",appId:"1:638807085059:web:dff3fc2283e72ba9a27e36"},jc=lt(Fc);Bc(jc),oi(jc);s("4TNnu");const qc=lt(Fc),Hc=oi(qc),Wc=Bc(qc);function Vc(e){"Escape"===e.code&&(c.backdropAuth.classList.add("is-hidden"),c.body.classList.remove("no-scroll"))}var $c,zc,Kc;function Gc(e){e.preventDefault(),c.modalSignUp.classList.add("hidden-item"),c.modalSignIn.classList.remove("hidden-item")}function Jc(e){e.preventDefault(),c.modalSignUp.classList.remove("hidden-item"),c.modalSignIn.classList.add("hidden-item")}c.logOut.addEventListener("click",(function(){Hc.currentUser;nr(Hc).then((()=>{location.reload()})),alert("You are logged out")})),c.openAuth.addEventListener("click",(function(){c.backdropAuth.classList.remove("is-hidden"),c.body.classList.add("no-scroll")})),c.backdropAuth.addEventListener("click",Vc),document.addEventListener("keydown",Vc),$c=e=>{e?(c.library.classList.remove("hidden-item"),c.openAuth.classList.add("hidden-item"),c.logOut.classList.remove("hidden-item")):(c.library.classList.add("hidden-item"),c.openAuth.classList.remove("hidden-item"),c.logOut.classList.add("hidden-item"))},Te(Hc).onAuthStateChanged($c,zc,Kc),c.signInForm.addEventListener("submit",(function(e){e.preventDefault();Hc.currentUser;const t={email:document.getElementById("auth-email").value,pass:document.getElementById("auth-password").value};if(!t.email||!t.pass)return void alert("Please enter your email and password");er(Hc,t.email,t.pass).then((e=>{const n=e.user;c.library.classList.remove("hidden-item"),t.email.value="",t.pass.value="",alert(`User ${n.displayName} signed in`),location.reload()})).catch((e=>{const t=e.code,n=e.message;alert(t,n)}))})),c.signUpForm.addEventListener("submit",(function(e){e.preventDefault();const t={name:document.getElementById("name").value,email:document.getElementById("register-email").value,pass:document.getElementById("register-password").value};Zn(Hc,t.email,t.pass).then((e=>{const n=e.user;xc(Ac(Wc,"users/"+n.uid+"/auth/"),t),tr(Hc.currentUser,{displayName:`${t.name}`}),alert(`User ${t.name} created`),nr(Hc).then((()=>{c.library.classList.add("hidden-item")})),t.name.value="",t.pass.value="",t.email.value="",location.reload()})).catch((e=>{const t=e.code,n=e.message;alert(t,n)}))})),c.toLogInTab.addEventListener("click",Gc),c.toSignUpTab.addEventListener("click",Jc),c.toLogIn.addEventListener("click",Gc),c.toSignUp.addEventListener("click",Jc),c.mainList.addEventListener("click",(function(e){const t=e.target.nodeName;"IMG"!==t&&"P"!==t||(console.log("open modal"),c.modalFilmInfoRef.addEventListener("click",Yc),c.modalFilmInfoRef.addEventListener("click",Xc));return}));function Yc(e){if("modal-btn modal-film_btn-watched"===e.target.className){Qc(w("watched"),"watched")}}function Qc(e,t){(function(e,t){let n=[],r=w(t);r&&(n=[...r]);const i=new Set(n);return console.log(i.has(e)),i.has(e)})($ccc271a2338f7cf1$export$8f2bcfbbaef19220,e)||b(t,m)}function Xc(e){if("modal-btn modal-film_btn-queue"===e.target.className){Qc(w("queue"),"queue")}}
//# sourceMappingURL=index.a92145f1.js.map
