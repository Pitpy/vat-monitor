(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51d8d82e"],{"02f4":function(e,t,r){var n=r("4588"),u=r("be13");e.exports=function(e){return function(t,r){var o,i,a=String(u(t)),f=n(r),c=a.length;return f<0||f>=c?e?"":void 0:(o=a.charCodeAt(f),o<55296||o>56319||f+1===c||(i=a.charCodeAt(f+1))<56320||i>57343?e?a.charAt(f):o:e?a.slice(f,f+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var n=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("integer",/^-?[0-9]*$/);t.default=u},"214f":function(e,t,r){"use strict";r("b0c5");var n=r("2aba"),u=r("32e9"),o=r("79e5"),i=r("be13"),a=r("2b4c"),f=r("520a"),c=a("species"),s=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var d=a(e),p=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),v=p?!o((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[c]=function(){return r}),r[d](""),!t})):void 0;if(!p||!v||"replace"===e&&!s||"split"===e&&!l){var b=/./[d],m=r(i,d,""[e],(function(e,t,r,n,u){return t.exec===f?p&&!u?{done:!0,value:b.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}})),y=m[0],g=m[1];n(String.prototype,e,y),u(RegExp.prototype,d,2==t?function(e,t){return g.call(e,this,t)}:function(e){return g.call(e,this)})}}},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t.default=u},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t.default=u},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=u},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("numeric",/^[0-9]*$/);t.default=u},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=u},4917:function(e,t,r){"use strict";var n=r("cb7c"),u=r("9def"),o=r("0390"),i=r("5f1b");r("214f")("match",1,(function(e,t,r,a){return[function(r){var n=e(this),u=void 0==r?void 0:r[t];return void 0!==u?u.call(r,n):new RegExp(r)[t](String(n))},function(e){var t=a(r,e,this);if(t.done)return t.value;var f=n(e),c=String(this);if(!f.global)return i(f,c);var s=f.unicode;f.lastIndex=0;var l,d=[],p=0;while(null!==(l=i(f,c))){var v=String(l[0]);d[p]=v,""===v&&(f.lastIndex=o(c,u(f.lastIndex),s)),p++}return 0===p?null:d}]}))},"520a":function(e,t,r){"use strict";var n=r("0bfb"),u=RegExp.prototype.exec,o=String.prototype.replace,i=u,a="lastIndex",f=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e[a]||0!==t[a]}(),c=void 0!==/()??/.exec("")[1],s=f||c;s&&(i=function(e){var t,r,i,s,l=this;return c&&(r=new RegExp("^"+l.source+"$(?!\\s)",n.call(l))),f&&(t=l[a]),i=u.call(l,e),f&&i&&(l[a]=l.global?i.index+i[0].length:t),c&&i&&i.length>1&&o.call(i[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),e.exports=i},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,o=(0,n.regex)("email",u);t.default=o},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t.default=u},"5f1b":function(e,t,r){"use strict";var n=r("23c6"),u=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return u.call(e,t)}},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t.default=u},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t.default=u},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,o=(0,n.regex)("url",u);t.default=o},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}}),t.regex=t.ref=t.len=t.req=void 0;var n=u(r("8750"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=i;var a=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.len=a;var f=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=f;var c=function(e,t){return(0,n.default)({type:e},(function(e){return!i(e)||t.test(e)}))};t.regex=c},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===Object({NODE_ENV:"production",BASE_URL:"/monitor/"}).BUILD?r("cb69").withParams:r("0234").withParams,u=n;t.default=u},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};t.default=u;var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},a55b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"login"}},[r("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[e.display?r("div",{staticClass:"_container"},[r("div",{staticClass:"login-box"},[r("div",{staticClass:"logo-box"},[r("img",{attrs:{src:"img/custom.png",alt:"",srcset:""}})]),r("form",{staticClass:"control-box",on:{submit:function(t){return t.preventDefault(),e.go(t)}}},[r("div",{class:["welcome",this.$store.state.loginStatus.status?"":"failed"]},[e._v(e._s(this.$store.state.loginStatus.text))]),r("div",{class:["control",e.$v.form.user.$error?"err":""]},[r("label",{attrs:{for:"user"}},[e._v("User")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.user,expression:"form.user",modifiers:{trim:!0}}],attrs:{type:"text",id:"user",placeholder:"Enter username",autofocus:""},domProps:{value:e.form.user},on:{input:function(t){t.target.composing||e.$set(e.form,"user",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.form.user.$error?r("span",{staticClass:"required"},[e._v("Username cannot be empty.")]):e._e()]),r("div",{class:["control",e.$v.form.password.$error?"err":""]},[r("label",{attrs:{for:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.form.password,expression:"form.password",modifiers:{trim:!0}}],attrs:{type:"password",id:"password",placeholder:"Enter password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.form.password.$error?r("span",{staticClass:"required"},[e._v("Password cannot be empty.")]):e._e()]),r("div",{staticClass:"button-box"},[r("button",{staticClass:"pp-btn",attrs:{type:"submit",role:"button"}},[e._v("log in")])])])])]):e._e()]),r("span",{staticClass:"cp-right"},[e._v("Copyright Ⓒ 2019 | BCEL BANK")])],1)},u=[],o=(r("4917"),r("b5ae")),i=r("cc3b"),a={data:function(){return{display:!1,form:{user:"",password:"",agen:"",location:""}}},validations:{form:{user:{required:o["required"]},password:{required:o["required"]}}},mounted:function(){var e=this;this.form.agen=i["a"].enC(this.device()),navigator.geolocation.getCurrentPosition((function(t){e.form.location="".concat(t.coords.latitude,",").concat(t.coords.longitude)})),setTimeout((function(){e.display=!0}),500)},methods:{go:function(){this.$v.$touch(),this.$v.$invalid||this.$store.dispatch("auth",this.form)},device:function(){return navigator.userAgent.match(/Linux/i)?"Linux":navigator.userAgent.match(/Windows/i)?"Windows":navigator.userAgent.match(/Android/i)?"Android":navigator.userAgent.match(/iPhone/i)?"iPhone":navigator.userAgent.match(/iPad/i)?"iPad":void 0}}},f=a,c=(r("abb5"),r("2877")),s=Object(c["a"])(f,n,u,!1,null,"23502984",null);t["default"]=s.exports},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=u},ab58:function(e,t,r){},abb5:function(e,t,r){"use strict";var n=r("ab58"),u=r.n(n);u.a},b0c5:function(e,t,r){"use strict";var n=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return j.default}}),t.helpers=void 0;var n=$(r("6235")),u=$(r("3a54")),o=$(r("45b8")),i=$(r("ec11")),a=$(r("5d75")),f=$(r("c99d")),c=$(r("91d3")),s=$(r("2a12")),l=$(r("5db3")),d=$(r("d4f4")),p=$(r("aa82")),v=$(r("e652")),b=$(r("b6cb")),m=$(r("772d")),y=$(r("d294")),g=$(r("3360")),h=$(r("6417")),P=$(r("eb66")),_=$(r("46bc")),w=$(r("1331")),j=$(r("c301")),O=x(r("78ef"));function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}function $(e){return e&&e.__esModule?e:{default:e}}t.helpers=O},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t.default=u},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=u},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)}));t.default=u;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},u=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},o=n.vuelidate?n.vuelidate.withParams:u;t.withParams=o}).call(this,r("c8ba"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),u=0;u<r;u++)n[u]=arguments[u];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t.default=u},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=(0,n.withParams)({type:"required"},n.req);t.default=u},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t.default=u},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=u},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("78ef"),u=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=u}}]);
//# sourceMappingURL=chunk-51d8d82e.2ecb9ada.js.map