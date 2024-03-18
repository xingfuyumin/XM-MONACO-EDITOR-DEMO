(self.webpackChunk=self.webpackChunk||[]).push([[9805],{99805:function(p,x,v){p=v.nmd(p),ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(l,h,k){"use strict";var d=l("../lib/oop"),s=l("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},o.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};d.inherits(o,s),o.getTagRule=function(c){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},o.getStartRule=function(c){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:c}},o.getEndRule=function(c){return{token:"comment.doc",regex:"\\*\\/",next:c}},h.DocCommentHighlightRules=o}),ace.define("ace/mode/golang_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(l,h,k){var d=l("../lib/oop"),s=l("./doc_comment_highlight_rules").DocCommentHighlightRules,o=l("./text_highlight_rules").TextHighlightRules,c=function(){var t="else|break|case|return|goto|if|const|select|continue|struct|default|switch|for|range|func|import|package|chan|defer|fallthrough|go|interface|map|range|select|type|var",n="string|uint8|uint16|uint32|uint64|int8|int16|int32|int64|float32|float64|complex64|complex128|byte|rune|uint|int|uintptr|bool|error",e="new|close|cap|copy|panic|panicln|print|println|len|make|delete|real|recover|imag|append",i="nil|true|false|iota",r=this.createKeywordMapper({keyword:t,"constant.language":i,"support.function":e,"support.type":n},""),u=`\\\\(?:[0-7]{3}|x\\h{2}|u{4}|U\\h{6}|[abfnrtv'"\\\\])`.replace(/\\h/g,"[a-fA-F\\d]");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},s.getStartRule("doc-start"),{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"string",regex:/"(?:[^"\\]|\\.)*?"/},{token:"string",regex:"`",next:"bqstring"},{token:"constant.numeric",regex:"'(?:[^\\'\uD800-\uDBFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|"+u.replace('"',"")+")'"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:["keyword","text","entity.name.function"],regex:"(func)(\\s+)([a-zA-Z_$][a-zA-Z0-9_$]*)\\b"},{token:function(a){return a[a.length-1]=="("?[{type:r(a.slice(0,-1))||"support.function",value:a.slice(0,-1)},{type:"paren.lparen",value:a.slice(-1)}]:r(a)||"identifier"},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b\\(?"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^="},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],bqstring:[{token:"string",regex:"`",next:"start"},{defaultToken:"string"}]},this.embedRules(s,"doc-",[s.getEndRule("start")])};d.inherits(c,o),h.GolangHighlightRules=c}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(l,h,k){"use strict";var d=l("../range").Range,s=function(){};(function(){this.checkOutdent=function(o,c){return/^\s+$/.test(o)?/^\s*\}/.test(c):!1},this.autoOutdent=function(o,c){var t=o.getLine(c),n=t.match(/^(\s*\})/);if(!n)return 0;var e=n[1].length,i=o.findMatchingBracket({row:c,column:e});if(!i||i.row==c)return 0;var r=this.$getIndent(o.getLine(i.row));o.replace(new d(c,0,c,e-1),r)},this.$getIndent=function(o){return o.match(/^\s*/)[0]}}).call(s.prototype),h.MatchingBraceOutdent=s}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(l,h,k){"use strict";var d=l("../../lib/oop"),s=l("../../range").Range,o=l("./fold_mode").FoldMode,c=h.FoldMode=function(t){t&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+t.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+t.end)))};d.inherits(c,o),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(t,n,e){var i=t.getLine(e);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var r=this._getFoldWidgetBase(t,n,e);return!r&&this.startRegionRe.test(i)?"start":r},this.getFoldWidgetRange=function(t,n,e,i){var r=t.getLine(e);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(t,r,e);var g=r.match(this.foldingStartMarker);if(g){var u=g.index;if(g[1])return this.openingBracketBlock(t,g[1],e,u);var a=t.getCommentFoldRange(e,u+g[0].length,1);return a&&!a.isMultiLine()&&(i?a=this.getSectionRange(t,e):n!="all"&&(a=null)),a}if(n!=="markbegin"){var g=r.match(this.foldingStopMarker);if(g){var u=g.index+g[0].length;return g[1]?this.closingBracketBlock(t,g[1],e,u):t.getCommentFoldRange(e,u,-1)}}},this.getSectionRange=function(t,n){var e=t.getLine(n),i=e.search(/\S/),r=n,u=e.length;n=n+1;for(var a=n,g=t.getLength();++n<g;){e=t.getLine(n);var m=e.search(/\S/);if(m!==-1){if(i>m)break;var f=this.getFoldWidgetRange(t,"all",n);if(f){if(f.start.row<=r)break;if(f.isMultiLine())n=f.end.row;else if(i==m)break}a=n}}return new s(r,u,a,t.getLine(a).length)},this.getCommentRegionBlock=function(t,n,e){for(var i=n.search(/\s*$/),r=t.getLength(),u=e,a=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,g=1;++e<r;){n=t.getLine(e);var m=a.exec(n);if(m&&(m[1]?g--:g++,!g))break}var f=e;if(f>u)return new s(u,i,f,n.length)}}.call(c.prototype)}),ace.define("ace/mode/golang",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/golang_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(l,h,k){var d=l("../lib/oop"),s=l("./text").Mode,o=l("./golang_highlight_rules").GolangHighlightRules,c=l("./matching_brace_outdent").MatchingBraceOutdent,t=l("./folding/cstyle").FoldMode,n=function(){this.HighlightRules=o,this.$outdent=new c,this.foldingRules=new t,this.$behaviour=this.$defaultBehaviour};d.inherits(n,s),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,i,r){var u=this.$getIndent(i),a=this.getTokenizer().getLineTokens(i,e),g=a.tokens,m=a.state;if(g.length&&g[g.length-1].type=="comment")return u;if(e=="start"){var f=i.match(/^.*[\{\(\[]\s*$/);f&&(u+=r)}return u},this.checkOutdent=function(e,i,r){return this.$outdent.checkOutdent(i,r)},this.autoOutdent=function(e,i,r){this.$outdent.autoOutdent(i,r)},this.$id="ace/mode/golang"}.call(n.prototype),h.Mode=n}),function(){ace.require(["ace/mode/golang"],function(l){p&&(p.exports=l)})}()}}]);
