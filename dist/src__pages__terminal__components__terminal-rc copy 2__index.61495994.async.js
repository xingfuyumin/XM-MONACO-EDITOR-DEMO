(self.webpackChunk=self.webpackChunk||[]).push([[728,6758],{63927:function(E,i,t){"use strict";t.r(i);var o=t(60715),f=t.n(o),s=t(61272),m=t.n(s),_=t(68136),n=t(28399),e=t.n(n),u=t(33465),M=t(10389),P=t.n(M),R=t(53907);i.default=function(h,C){var p=(0,_.useRef)(null),O=(0,_.useRef)({}),a=(0,_.useRef)(""),I=(0,R.Z)(p),T=function(){var l=m()(f()().mark(function D(){var c,r,A;return f()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(c=p.current,c){v.next=3;break}return v.abrupt("return");case 3:r=new n.Terminal(h.initOptions),A=new M.FitAddon,O.current.terminal=r,O.current.fitAddon=A,r.loadAddon(A),r.open(c),A.fit(),r.write("\u8BF7\u8F93\u5165:"),r.onData(function(d){switch(d){case"":r.writeln("^C"),r.write("\u8BF7\u8F93\u5165:");break;case"\r":h.onEnter&&h.onEnter(a.current),r.writeln(""),r.writeln("\u6267\u884C\u547D\u4EE4: ".concat(a.current)),r.write("\u8BF7\u8F93\u5165:"),a.current="";break;case"\x7F":r._core.buffer.x>7&&(r.write("\b \b"),a.current.length>0&&(a.current=a.current.substr(0,a.current.length-1)));break;default:(d>=String.fromCharCode(32)&&d<=String.fromCharCode(126)||d>="\xA0")&&(a.current+=d,r.write(d))}});case 12:case"end":return v.stop()}},D)}));return function(){return l.apply(this,arguments)}}();return(0,_.useEffect)(function(){return T(),function(){var l=O.current,D=l.terminal,c=l.fitAddon;c&&c.dispose(),D&&D.dispose()}},[]),(0,_.useEffect)(function(){},[h.value]),(0,_.useEffect)(function(){var l=O.current.fitAddon},[I]),(0,_.useImperativeHandle)(C,function(){return O.current},[]),{continerRef:p}}},13300:function(E,i,t){"use strict";t.r(i),t.d(i,{default:function(){return e}});var o=t(63927),f=t(68136),s=t(91150),m=t.n(s),_=t(33130),n=(0,f.forwardRef)(function(u,M){var P=(0,o.default)(u,M),R=P.continerRef;return(0,_.jsx)("div",{className:m()("tant-terminal",u.className),ref:R})}),e=n},91150:function(E,i){var t,o;(function(){"use strict";var f={}.hasOwnProperty;function s(){for(var n="",e=0;e<arguments.length;e++){var u=arguments[e];u&&(n=_(n,m(u)))}return n}function m(n){if(typeof n=="string"||typeof n=="number")return n;if(typeof n!="object")return"";if(Array.isArray(n))return s.apply(null,n);if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]"))return n.toString();var e="";for(var u in n)f.call(n,u)&&n[u]&&(e=_(e,u));return e}function _(n,e){return e?n?n+" "+e:n+e:n}E.exports?(s.default=s,E.exports=s):(t=[],o=function(){return s}.apply(i,t),o!==void 0&&(E.exports=o))})()}}]);
