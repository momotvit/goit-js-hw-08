!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,y=Math.min,p=function(){return d.Date.now()};function g(e,t,n){var r,o,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(w,t),s?g(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function w(){var e=p();if(S(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?y(n,u-(e-c)):n}(e))}function O(e){return f=void 0,v&&r?g(e):(r=o=void 0,a)}function T(){var e=p(),n=S(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(d)return f=setTimeout(w,t),g(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=h(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(h(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},T.flush=function(){return void 0===f?a:O(p())},T}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};var j,S=document.querySelector("form"),w=document.querySelector('input[name="email"]'),O=document.querySelector('textarea[name="message"]'),T="feedback-form-state",x={email:"",message:""};function E(e){if(e.preventDefault(),""===w.value||""===O.value)return alert("Fill all of the fields, please");x={email:w.value,message:O.value},localStorage.removeItem(T),w.value="",O.value="",S.reset()}S.addEventListener("submit",E),S.addEventListener("input",e(t)((function(e){var t=e.target,n=t.name,r=t.value;x[n]=r,localStorage.setItem(T,JSON.stringify(x))}),500)),(j=function(){try{var e=localStorage.getItem(T);return null===e?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}}())&&(w.value=j.email,O.value=j.message),document.addEventListener("keydown",(function(e){"Enter"===e.key&&E(e)}))}();
//# sourceMappingURL=03-feedback.41a3f2a2.js.map
