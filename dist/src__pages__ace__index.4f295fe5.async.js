"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8570,3105,1622],{44749:function($,C,h){h.r(C);var g=h(157),O=h.n(g),s=h(19058),X=h.n(s),i=h(68136),F=h(34738),m=h(53135),B=h(33130),K={tab:0,row:1,col:1,total:0,selectionNum:0,value:'SELECT "$part_event","$part_date","#user_id","#event_name","#event_time","#account_id","#distinct_id","#server_time","platform","logintime","channel","#zone_offset","#lib","#lib_version","level","firstlogintime","systemversion","shoptype","consumegoldcoins","entertime","firstbuyitemtime","iswin","firstentertime","combattime","rehcargecount","logouttime","firstrechargetime","rechagelibao","#data_source","#os","#ip","#ram","#screen_height","#system_language","#device_model","#network_type","#city","#disk","#carrier","test01","#country_code","#device_id","#province","#bundle_id","#screen_width","#install_time","#simulator","#country","#fps","#manufacturer","#app_version","#os_version","click","istest","properties","isfirstbuy","product_num","product_name","#element_type","#screen_name","#resume_from_background","#background_duration","pay_currency_type","activity_reward","reward_amount","object_list","interest","temperature","micro_decimal","device_id","luky_day","attend_progress","is_fine","inteset_arrray_string","serial_no","object","cost","card_list","diamond_amount","draw_type","cost_type","item_list","battle_id","enter_time","url","cost_amount","special_char","long_english","mix_list","json_string","duration","is_max_battle","is_first_pay","pay_amount","currency_type","payment_name","long_mixed","lib","app_version","device_type","manufacturer","network","screen_height","browser","model","browser_version","brand","carrier_name","screen_width","os","os_version","ip","serverid","vip_level","city","listtest","metric_events","#ops_receipt_properties","bool","mark","dict","row","card_id","b","batchno","id","version","subversion","request","request_method","request_url","result_detail","result","repect_result","header","updatetime","last_time","stamp","level_before","reason","gold_get_amount","gold_change_after","gold_change_before","hero_type","hero_id","hero_quality","diamond_get_amount","online_time","te_ads_object","gxy001","gxy_a_1","currency",split("buyitems",chr(0009)) AS "buyitems" FROM  ta.v_event_11 WHERE ${PartDate:date1} and ${Variable2} and ${PartDate:date3} and ${Number:number4} and ${Selector:selector5} ',mode:"sql",showMinMap:!0,showFormat:!0,theme:"tomorrow",code:!0,insert:"\u6211\u662F\u8981\u63D2\u5165\u7684\u5185\u5BB9",selection:"",locale:"zh-CN",debug:!0,completion:!1};C.default=function(){var G=(0,m.Z)(O()(O()({},K),{},{total:K.value.length})),c=X()(G,2),N=c[0],v=c[1],E=(0,i.useRef)({}),I=function(f,V,S,k){if(S.type==="tant-variable"){var P=S.value.slice(2);return P=P.slice(0,P.length-1),(0,B.jsx)(F.zx,{size:"small",children:P})}return S.value==="v_event_11"?(0,B.jsx)(F.u,{content:"\u6211\u662F\u4E00\u5F20\u65E0\u6BD4\u8BA8\u538C\u7684\u8868",children:(0,B.jsx)("div",{style:{cursor:"pointer",color:"red"},children:S.value})}):null},M=function(f){v({mode:f})},R=function(){var f;(f=E.current.editor)===null||f===void 0||f.format()},U=function(f){v({theme:f})},J=function(f){v({total:f.getValue().length})},L=function(f){v({selectionNum:f.getSelectedText().length||0,col:f.getCursorPosition().column,row:f.getCursorPosition().row})},x=function(f){v({completion:f})},W=function(f){v({debug:f})};return O()({aceRef:E,handleModeChange:M,handleFormat:R,handleThemeChange:U,handleValueChange:J,handleSelectionChange:L,handleDebugChange:W,handleCompletionChange:x,handleTextRender:I},N)}},65523:function($,C,h){h.r(C),h.d(C,{default:function(){return K}});var g={root:"root___Fw2jA",editor:"editor___SPPnK",container:"container___YOsCX",tool:"tool___jBv93",info:"info___EoFQG",info2:"info2___o2PF9"},O=h(44749),s=h(34738),X=h(5479),i=h(33130),F=[{value:"sql",label:"Sql",otherKey:0},{value:"shell",label:"Shell",otherKey:1},{value:"python",label:"Python",otherKey:2},{value:"text",label:"Text",otherKey:3}],m=[{value:"tomorrow",label:"\u9ED8\u8BA4\u4EAE",otherKey:0},{value:"tomorrow_night",label:"\u9ED8\u8BA4\u9ED1",otherKey:1}],B=function(){var c=(0,O.default)(),N=c.mode,v=c.theme,E=c.debug,I=c.completion,M=c.handleModeChange,R=c.handleFormat,U=c.handleThemeChange,J=c.handleValueChange,L=c.handleSelectionChange,x=c.handleDebugChange,W=c.handleCompletionChange,w=c.handleTextRender,f=c.total,V=c.col,S=c.row,k=c.tab,P=c.selectionNum,H=c.value,Y=c.locale,Z=c.showFormat,q=c.widget,ee=c.formRef,Q=c.aceRef;return(0,i.jsxs)("div",{className:g.root,children:[(0,i.jsx)("div",{className:g.container,children:(0,i.jsx)(X.default,{className:g.editor,value:H,ref:Q,theme:v,onValueChange:J,onSelectionChange:L,runWidget:{show:E,render:function(e){return(0,i.jsx)(s.zx,{onClick:function(){s.u_.confirm({title:"\u5C06\u6267\u884C\u4EE5\u4E0B\u8BED\u53E5",content:e})},children:"\u8C03\u8BD5"})}},textRender:w,onCompletionsChange:I?function(){return[{value:"USER_INFO",score:1e3,meta:"\u8868"},{value:"id",score:1e3,meta:"\u5B57\u6BB5"}]}:void 0})}),(0,i.jsxs)("div",{className:g.tool,children:[(0,i.jsxs)(s.X2,{children:[(0,i.jsx)(s.JX,{span:6,children:"\u7F16\u7A0B\u8BED\u8A00"}),(0,i.jsx)(s.JX,{span:18,children:(0,i.jsx)(s.Ph,{value:N,onChange:M,optionList:F,style:{width:"100%"}})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.X2,{children:[(0,i.jsx)(s.JX,{span:6,children:"\u4E3B\u9898"}),(0,i.jsx)(s.JX,{span:18,children:(0,i.jsx)(s.Ph,{value:v,onChange:U,optionList:m,style:{width:"100%"}})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.X2,{children:[(0,i.jsx)(s.JX,{span:6,children:"\u5F00\u542F\u8C03\u8BD5"}),(0,i.jsx)(s.JX,{span:18,children:(0,i.jsx)(s.rs,{checked:E,onChange:x})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.X2,{children:[(0,i.jsx)(s.JX,{span:6,children:"\u5F00\u542F\u81EA\u52A8\u8865\u5168"}),(0,i.jsx)(s.JX,{span:18,children:(0,i.jsx)(s.rs,{checked:I,onChange:W})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.X2,{children:[(0,i.jsx)(s.JX,{span:6,children:"\u683C\u5F0F\u5316"}),(0,i.jsx)(s.JX,{span:18,children:(0,i.jsx)(s.zx,{onClick:R,children:"\u70B9\u51FB\u683C\u5F0F\u5316"})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.X2,{children:[(0,i.jsx)(s.JX,{span:6,children:"\u603B\u5B57\u6570"}),(0,i.jsxs)(s.JX,{span:18,children:[f," ",P?"(\u5DF2\u9009\u62E9\uFF1A".concat(P,")"):""]})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.X2,{children:[(0,i.jsx)(s.JX,{span:6,children:"\u5F53\u524D\u4F4D\u7F6E"}),(0,i.jsxs)(s.JX,{span:18,children:["\u884C ",S,"\uFF0C\u5217 ",V]})]}),(0,i.jsx)("br",{}),(0,i.jsx)(s.l0,{labelPosition:"left",labelWidth:"120px"})]})]})},K=B},66317:function($,C,h){h.d(C,{mf:function(){return O}});var g=function(m){return m!==null&&typeof m=="object"},O=function(m){return typeof m=="function"},s=function(m){return typeof m=="string"},X=function(m){return typeof m=="boolean"},i=function(m){return typeof m=="number"},F=function(m){return typeof m=="undefined"}},58559:function($,C,h){h.d(C,{CR:function(){return R},pi:function(){return s}});var g=function(e,t){return g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},g(e,t)};function O(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");g(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var s=function(){return s=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},s.apply(this,arguments)};function X(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function i(e,t,r,n){var a=arguments.length,o=a<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,r,n);else for(var _=e.length-1;_>=0;_--)(l=e[_])&&(o=(a<3?l(o):a>3?l(t,r,o):l(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}function F(e,t){return function(r,n){t(r,n,e)}}function m(e,t,r,n,a,o){function l(z){if(z!==void 0&&typeof z!="function")throw new TypeError("Function expected");return z}for(var _=n.kind,b=_==="getter"?"get":_==="setter"?"set":"value",u=!t&&e?n.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,n.name):{}),y,p=!1,j=r.length-1;j>=0;j--){var D={};for(var T in n)D[T]=T==="access"?{}:n[T];for(var T in n.access)D.access[T]=n.access[T];D.addInitializer=function(z){if(p)throw new TypeError("Cannot add initializers after decoration has completed");o.push(l(z||null))};var A=(0,r[j])(_==="accessor"?{get:d.get,set:d.set}:d[b],D);if(_==="accessor"){if(A===void 0)continue;if(A===null||typeof A!="object")throw new TypeError("Object expected");(y=l(A.get))&&(d.get=y),(y=l(A.set))&&(d.set=y),(y=l(A.init))&&a.unshift(y)}else(y=l(A))&&(_==="field"?a.unshift(y):d[b]=y)}u&&Object.defineProperty(u,n.name,d),p=!0}function B(e,t,r){for(var n=arguments.length>2,a=0;a<t.length;a++)r=n?t[a].call(e,r):t[a].call(e);return n?r:void 0}function K(e){return typeof e=="symbol"?e:"".concat(e)}function G(e,t,r){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:r?"".concat(r," ",t):t})}function c(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function N(e,t,r,n){function a(o){return o instanceof r?o:new r(function(l){l(o)})}return new(r||(r=Promise))(function(o,l){function _(d){try{u(n.next(d))}catch(y){l(y)}}function b(d){try{u(n.throw(d))}catch(y){l(y)}}function u(d){d.done?o(d.value):a(d.value).then(_,b)}u((n=n.apply(e,t||[])).next())})}function v(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,l;return l={next:_(0),throw:_(1),return:_(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function _(u){return function(d){return b([u,d])}}function b(u){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,u[0]&&(r=0)),r;)try{if(n=1,a&&(o=u[0]&2?a.return:u[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,u[1])).done)return o;switch(a=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,a=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){r.label=u[1];break}if(u[0]===6&&r.label<o[1]){r.label=o[1],o=u;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(u);break}o[2]&&r.ops.pop(),r.trys.pop();continue}u=t.call(e,r)}catch(d){u=[6,d],a=0}finally{n=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var E=Object.create?function(e,t,r,n){n===void 0&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]};function I(e,t){for(var r in e)r!=="default"&&!Object.prototype.hasOwnProperty.call(t,r)&&E(t,e,r)}function M(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function R(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),a,o=[],l;try{for(;(t===void 0||t-- >0)&&!(a=n.next()).done;)o.push(a.value)}catch(_){l={error:_}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(l)throw l.error}}return o}function U(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(R(arguments[t]));return e}function J(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var o=arguments[t],l=0,_=o.length;l<_;l++,a++)n[a]=o[l];return n}function L(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function x(e){return this instanceof x?(this.v=e,this):new x(e)}function W(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),a,o=[];return a={},l("next"),l("throw"),l("return"),a[Symbol.asyncIterator]=function(){return this},a;function l(p){n[p]&&(a[p]=function(j){return new Promise(function(D,T){o.push([p,j,D,T])>1||_(p,j)})})}function _(p,j){try{b(n[p](j))}catch(D){y(o[0][3],D)}}function b(p){p.value instanceof x?Promise.resolve(p.value.v).then(u,d):y(o[0][2],p)}function u(p){_("next",p)}function d(p){_("throw",p)}function y(p,j){p(j),o.shift(),o.length&&_(o[0][0],o[0][1])}}function w(e){var t,r;return t={},n("next"),n("throw",function(a){throw a}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(a,o){t[a]=e[a]?function(l){return(r=!r)?{value:x(e[a](l)),done:!1}:o?o(l):l}:o}}function f(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof M=="function"?M(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(o){r[o]=e[o]&&function(l){return new Promise(function(_,b){l=e[o](l),a(_,b,l.done,l.value)})}}function a(o,l,_,b){Promise.resolve(b).then(function(u){o({value:u,done:_})},l)}}function V(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var S=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function k(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)&&E(t,e,r);return S(t,e),t}function P(e){return e&&e.__esModule?e:{default:e}}function H(e,t,r,n){if(r==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?n:r==="a"?n.call(e):n?n.value:t.get(e)}function Y(e,t,r,n,a){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?a.call(e,r):a?a.value=r:t.set(e,r),r}function Z(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}function q(e,t,r){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var n;if(r){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");n=t[Symbol.asyncDispose]}if(n===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");n=t[Symbol.dispose]}if(typeof n!="function")throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:n,async:r})}else r&&e.stack.push({async:!0});return t}var ee=typeof SuppressedError=="function"?SuppressedError:function(e,t,r){var n=new Error(r);return n.name="SuppressedError",n.error=e,n.suppressed=t,n};function Q(e){function t(n){e.error=e.hasError?new ee(n,e.error,"An error was suppressed during disposal."):n,e.hasError=!0}function r(){for(;e.stack.length;){var n=e.stack.pop();try{var a=n.dispose&&n.dispose.call(n.value);if(n.async)return Promise.resolve(a).then(r,function(o){return t(o),r()})}catch(o){t(o)}}if(e.hasError)throw e.error}return r()}var te={__extends:O,__assign:s,__rest:X,__decorate:i,__param:F,__metadata:c,__awaiter:N,__generator:v,__createBinding:E,__exportStar:I,__values:M,__read:R,__spread:U,__spreadArrays:J,__spreadArray:L,__await:x,__asyncGenerator:W,__asyncDelegator:w,__asyncValues:f,__makeTemplateObject:V,__importStar:k,__importDefault:P,__classPrivateFieldGet:H,__classPrivateFieldSet:Y,__classPrivateFieldIn:Z,__addDisposableResource:q,__disposeResources:Q}}}]);
