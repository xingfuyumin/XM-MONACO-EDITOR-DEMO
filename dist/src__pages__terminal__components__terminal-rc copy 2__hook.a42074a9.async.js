"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6758],{63927:function(P,E,_){_.r(E);var D=_(60715),c=_.n(D),M=_(61272),h=_.n(M),r=_(68136),m=_(28399),b=_.n(m),g=_(33465),O=_(10389),I=_.n(O),R=_(53907);E.default=function(f,A){var l=(0,r.useRef)(null),i=(0,r.useRef)({}),n=(0,r.useRef)(""),v=(0,R.Z)(l),C=function(){var t=h()(c()().mark(function s(){var u,e,d;return c()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(u=l.current,u){o.next=3;break}return o.abrupt("return");case 3:e=new m.Terminal(f.initOptions),d=new O.FitAddon,i.current.terminal=e,i.current.fitAddon=d,e.loadAddon(d),e.open(u),d.fit(),e.write("\u8BF7\u8F93\u5165:"),e.onData(function(a){switch(a){case"":e.writeln("^C"),e.write("\u8BF7\u8F93\u5165:");break;case"\r":f.onEnter&&f.onEnter(n.current),e.writeln(""),e.writeln("\u6267\u884C\u547D\u4EE4: ".concat(n.current)),e.write("\u8BF7\u8F93\u5165:"),n.current="";break;case"\x7F":e._core.buffer.x>7&&(e.write("\b \b"),n.current.length>0&&(n.current=n.current.substr(0,n.current.length-1)));break;default:(a>=String.fromCharCode(32)&&a<=String.fromCharCode(126)||a>="\xA0")&&(n.current+=a,e.write(a))}});case 12:case"end":return o.stop()}},s)}));return function(){return t.apply(this,arguments)}}();return(0,r.useEffect)(function(){return C(),function(){var t=i.current,s=t.terminal,u=t.fitAddon;u&&u.dispose(),s&&s.dispose()}},[]),(0,r.useEffect)(function(){},[f.value]),(0,r.useEffect)(function(){var t=i.current.fitAddon},[v]),(0,r.useImperativeHandle)(A,function(){return i.current},[]),{continerRef:l}}}}]);