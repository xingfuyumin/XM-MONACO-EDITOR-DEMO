(self.webpackChunk=self.webpackChunk||[]).push([[9997],{9997:function(p,b,k){p=k.nmd(p),ace.define("ace/mode/sql_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,g,v){"use strict";var u=r("../lib/oop"),d=r("./text_highlight_rules").TextHighlightRules,c=function(){var f="select|insert|update|delete|from|where|and|or|group|by|order|limit|offset|having|as|case|when|then|else|end|type|left|right|join|on|outer|desc|asc|union|create|table|primary|key|if|foreign|not|references|default|null|inner|cross|natural|database|drop|grant|distinct|is|in|all|alter|any|array|at|authorization|between|both|cast|check|collate|column|commit|constraint|cube|current|current_date|current_time|current_timestamp|current_user|describe|escape|except|exists|external|extract|fetch|filter|for|full|function|global|grouping|intersect|interval|into|leading|like|local|no|of|only|out|overlaps|partition|position|range|revoke|rollback|rollup|row|rows|session_user|set|some|start|tablesample|time|to|trailing|truncate|unique|unknown|user|using|values|window|with",e="true|false",t="avg|count|first|last|max|min|sum|ucase|lcase|mid|len|round|rank|now|format|coalesce|ifnull|isnull|nvl",i="int|numeric|decimal|date|varchar|char|bigint|float|double|bit|binary|text|set|timestamp|money|real|number|integer|string",o=this.createKeywordMapper({"support.function":t,keyword:f,"constant.language":e,"storage.type":i},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"comment",start:"/\\*",end:"\\*/"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"string",regex:"`.*?`"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:o,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]},this.normalizeRules()};u.inherits(c,d),g.SqlHighlightRules=c}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,g,v){"use strict";var u=r("../../lib/oop"),d=r("../../range").Range,c=r("./fold_mode").FoldMode,f=g.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};u.inherits(f,c),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var o=e.getLine(i);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var a=this._getFoldWidgetBase(e,t,i);return!a&&this.startRegionRe.test(o)?"start":a},this.getFoldWidgetRange=function(e,t,i,o){var a=e.getLine(i);if(this.startRegionRe.test(a))return this.getCommentRegionBlock(e,a,i);var n=a.match(this.foldingStartMarker);if(n){var s=n.index;if(n[1])return this.openingBracketBlock(e,n[1],i,s);var l=e.getCommentFoldRange(i,s+n[0].length,1);return l&&!l.isMultiLine()&&(o?l=this.getSectionRange(e,i):t!="all"&&(l=null)),l}if(t!=="markbegin"){var n=a.match(this.foldingStopMarker);if(n){var s=n.index+n[0].length;return n[1]?this.closingBracketBlock(e,n[1],i,s):e.getCommentFoldRange(i,s,-1)}}},this.getSectionRange=function(e,t){var i=e.getLine(t),o=i.search(/\S/),a=t,s=i.length;t=t+1;for(var l=t,n=e.getLength();++t<n;){i=e.getLine(t);var m=i.search(/\S/);if(m!==-1){if(o>m)break;var h=this.getFoldWidgetRange(e,"all",t);if(h){if(h.start.row<=a)break;if(h.isMultiLine())t=h.end.row;else if(o==m)break}l=t}}return new d(a,s,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,i){for(var o=t.search(/\s*$/),a=e.getLength(),s=i,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,n=1;++i<a;){t=e.getLine(i);var m=l.exec(t);if(m&&(m[1]?n--:n++,!n))break}var h=i;if(h>s)return new d(s,o,h,t.length)}}.call(f.prototype)}),ace.define("ace/mode/folding/sql",["require","exports","module","ace/lib/oop","ace/mode/folding/cstyle"],function(r,g,v){"use strict";var u=r("../../lib/oop"),d=r("./cstyle").FoldMode,c=g.FoldMode=function(){};u.inherits(c,d),function(){}.call(c.prototype)}),ace.define("ace/mode/sql",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sql_highlight_rules","ace/mode/folding/sql"],function(r,g,v){"use strict";var u=r("../lib/oop"),d=r("./text").Mode,c=r("./sql_highlight_rules").SqlHighlightRules,f=r("./folding/sql").FoldMode,e=function(){this.HighlightRules=c,this.foldingRules=new f,this.$behaviour=this.$defaultBehaviour};u.inherits(e,d),function(){this.lineCommentStart="--",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/sql",this.snippetFileId="ace/snippets/sql"}.call(e.prototype),g.Mode=e}),function(){ace.require(["ace/mode/sql"],function(r){p&&(p.exports=r)})}()}}]);
