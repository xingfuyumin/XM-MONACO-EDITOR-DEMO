(self.webpackChunk=self.webpackChunk||[]).push([[3197],{83197:function(m,_,k){m=k.nmd(m),ace.define("ace/mode/c9search_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(r,v,b){"use strict";var p=r("../lib/oop"),f=r("../lib/lang"),o=r("./text_highlight_rules").TextHighlightRules;function c(h,i){try{return new RegExp(h,i)}catch(n){}}var d=function(){this.$rules={start:[{tokenNames:["c9searchresults.constant.numeric","c9searchresults.text","c9searchresults.text","c9searchresults.keyword"],regex:/(^\s+[0-9]+)(:)(\d*\s?)([^\r\n]+)/,onMatch:function(h,i,n){var e=this.splitRegex.exec(h),a=this.tokenNames,s=[{type:a[0],value:e[1]},{type:a[1],value:e[2]}];e[3]&&(e[3]==" "?s[1]={type:a[1],value:e[2]+" "}:s.push({type:a[1],value:e[3]}));var t=n[1],u=e[4],g,l=0;if(t&&t.exec)for(t.lastIndex=0;g=t.exec(u);){var x=u.substring(l,g.index);if(l=t.lastIndex,x&&s.push({type:a[2],value:x}),g[0])s.push({type:a[3],value:g[0]});else if(!x)break}return l<u.length&&s.push({type:a[2],value:u.substr(l)}),s}},{regex:"^Searching for [^\\r\\n]*$",onMatch:function(h,i,n){var e=h.split("");if(e.length<3)return"text";var a,s,t=0,u=[{value:e[t++]+"'",type:"text"},{value:s=e[t++],type:"text"},{value:"'"+e[t++],type:"text"}];for(e[2]!==" in"&&u.push({value:"'"+e[t++]+"'",type:"text"},{value:e[t++],type:"text"}),u.push({value:" "+e[t++]+" ",type:"text"}),e[t+1]?(a=e[t+1],u.push({value:"("+e[t+1]+")",type:"text"}),t+=1):t-=1;t++<e.length;)e[t]&&u.push({value:e[t],type:"text"});s&&(/regex/.test(a)||(s=f.escapeRegExp(s)),/whole/.test(a)&&(s="\\b"+s+"\\b"));var g=s&&c("("+s+")",/ sensitive/.test(a)?"g":"ig");return g&&(n[0]=i,n[1]=g),u}},{regex:"^(?=Found \\d+ matches)",token:"text",next:"numbers"},{token:"string",regex:"^\\S:?[^:]+",next:"numbers"}],numbers:[{regex:"\\d+",token:"constant.numeric"},{regex:"$",token:"text",next:"start"}]},this.normalizeRules()};p.inherits(d,o),v.C9SearchHighlightRules=d}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,v,b){"use strict";var p=r("../range").Range,f=function(){};(function(){this.checkOutdent=function(o,c){return/^\s+$/.test(o)?/^\s*\}/.test(c):!1},this.autoOutdent=function(o,c){var d=o.getLine(c),h=d.match(/^(\s*\})/);if(!h)return 0;var i=h[1].length,n=o.findMatchingBracket({row:c,column:i});if(!n||n.row==c)return 0;var e=this.$getIndent(o.getLine(n.row));o.replace(new p(c,0,c,i-1),e)},this.$getIndent=function(o){return o.match(/^\s*/)[0]}}).call(f.prototype),v.MatchingBraceOutdent=f}),ace.define("ace/mode/folding/c9search",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,v,b){"use strict";var p=r("../../lib/oop"),f=r("../../range").Range,o=r("./fold_mode").FoldMode,c=v.FoldMode=function(){};p.inherits(c,o),function(){this.foldingStartMarker=/^(\S.*:|Searching for.*)$/,this.foldingStopMarker=/^(\s+|Found.*)$/,this.getFoldWidgetRange=function(d,h,i){var n=d.doc.getAllLines(i),e=n[i],a=/^(Found.*|Searching for.*)$/,s=/^(\S.*:|\s*)$/,t=a.test(e)?a:s,u=i,g=i;if(this.foldingStartMarker.test(e)){for(var l=i+1,x=d.getLength();l<x&&!t.test(n[l]);l++);g=l}else if(this.foldingStopMarker.test(e)){for(var l=i-1;l>=0&&(e=n[l],!t.test(e));l--);u=l}if(u!=g){var y=e.length;return t===a&&(y=e.search(/\(Found[^)]+\)$|$/)),new f(u,y,g,0)}}}.call(c.prototype)}),ace.define("ace/mode/c9search",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c9search_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/c9search"],function(r,v,b){"use strict";var p=r("../lib/oop"),f=r("./text").Mode,o=r("./c9search_highlight_rules").C9SearchHighlightRules,c=r("./matching_brace_outdent").MatchingBraceOutdent,d=r("./folding/c9search").FoldMode,h=function(){this.HighlightRules=o,this.$outdent=new c,this.foldingRules=new d};p.inherits(h,f),function(){this.getNextLineIndent=function(i,n,e){var a=this.$getIndent(n);return a},this.checkOutdent=function(i,n,e){return this.$outdent.checkOutdent(n,e)},this.autoOutdent=function(i,n,e){this.$outdent.autoOutdent(n,e)},this.$id="ace/mode/c9search"}.call(h.prototype),v.Mode=h}),function(){ace.require(["ace/mode/c9search"],function(r){m&&(m.exports=r)})}()}}]);
