(self.webpackChunk=self.webpackChunk||[]).push([[5760],{35760:function(k,x,p){k=p.nmd(k),ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(c,u,v){"use strict";var d=c("../lib/oop"),h=c("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};d.inherits(l,h),u.JsonHighlightRules=l}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(c,u,v){"use strict";var d=c("../range").Range,h=function(){};(function(){this.checkOutdent=function(l,s){return/^\s+$/.test(l)?/^\s*\}/.test(s):!1},this.autoOutdent=function(l,s){var e=l.getLine(s),i=e.match(/^(\s*\})/);if(!i)return 0;var t=i[1].length,r=l.findMatchingBracket({row:s,column:t});if(!r||r.row==s)return 0;var n=this.$getIndent(l.getLine(r.row));l.replace(new d(s,0,s,t-1),n)},this.$getIndent=function(l){return l.match(/^\s*/)[0]}}).call(h.prototype),u.MatchingBraceOutdent=h}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(c,u,v){"use strict";var d=c("../../lib/oop"),h=c("../../range").Range,l=c("./fold_mode").FoldMode,s=u.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(s,l),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,i,t){var r=e.getLine(t);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var n=this._getFoldWidgetBase(e,i,t);return!n&&this.startRegionRe.test(r)?"start":n},this.getFoldWidgetRange=function(e,i,t,r){var n=e.getLine(t);if(this.startRegionRe.test(n))return this.getCommentRegionBlock(e,n,t);var a=n.match(this.foldingStartMarker);if(a){var o=a.index;if(a[1])return this.openingBracketBlock(e,a[1],t,o);var g=e.getCommentFoldRange(t,o+a[0].length,1);return g&&!g.isMultiLine()&&(r?g=this.getSectionRange(e,t):i!="all"&&(g=null)),g}if(i!=="markbegin"){var a=n.match(this.foldingStopMarker);if(a){var o=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],t,o):e.getCommentFoldRange(t,o,-1)}}},this.getSectionRange=function(e,i){var t=e.getLine(i),r=t.search(/\S/),n=i,o=t.length;i=i+1;for(var g=i,a=e.getLength();++i<a;){t=e.getLine(i);var m=t.search(/\S/);if(m!==-1){if(r>m)break;var f=this.getFoldWidgetRange(e,"all",i);if(f){if(f.start.row<=n)break;if(f.isMultiLine())i=f.end.row;else if(r==m)break}g=i}}return new h(n,o,g,e.getLine(g).length)},this.getCommentRegionBlock=function(e,i,t){for(var r=i.search(/\s*$/),n=e.getLength(),o=t,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++t<n;){i=e.getLine(t);var m=g.exec(i);if(m&&(m[1]?a--:a++,!a))break}var f=t;if(f>o)return new h(o,r,f,i.length)}}.call(s.prototype)}),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle","ace/worker/worker_client"],function(c,u,v){"use strict";var d=c("../lib/oop"),h=c("./text").Mode,l=c("./json_highlight_rules").JsonHighlightRules,s=c("./matching_brace_outdent").MatchingBraceOutdent,e=c("./folding/cstyle").FoldMode,i=c("../worker/worker_client").WorkerClient,t=function(){this.HighlightRules=l,this.$outdent=new s,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new e};d.inherits(t,h),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(r,n,o){var g=this.$getIndent(n);if(r=="start"){var a=n.match(/^.*[\{\(\[]\s*$/);a&&(g+=o)}return g},this.checkOutdent=function(r,n,o){return this.$outdent.checkOutdent(n,o)},this.autoOutdent=function(r,n,o){this.$outdent.autoOutdent(n,o)},this.createWorker=function(r){var n=new i(["ace"],"ace/mode/json_worker","JsonWorker");return n.attachToDocument(r.getDocument()),n.on("annotate",function(o){r.setAnnotations(o.data)}),n.on("terminate",function(){r.clearAnnotations()}),n},this.$id="ace/mode/json"}.call(t.prototype),u.Mode=t}),function(){ace.require(["ace/mode/json"],function(c){k&&(k.exports=c)})}()}}]);
