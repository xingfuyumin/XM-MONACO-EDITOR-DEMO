(self.webpackChunk=self.webpackChunk||[]).push([[5056],{35056:function(k,F,R){k=R.nmd(k),ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(s,p,v){"use strict";var d=s("../lib/oop"),h=s("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},l.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};d.inherits(l,h),l.getTagRule=function(u){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},l.getStartRule=function(u){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:u}},l.getEndRule=function(u){return{token:"comment.doc",regex:"\\*\\/",next:u}},p.DocCommentHighlightRules=l}),ace.define("ace/mode/odin_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(s,p,v){var d=this&&this.__read||function(t,e){var o=typeof Symbol=="function"&&t[Symbol.iterator];if(!o)return t;var a=o.call(t),c,n=[],g;try{for(;(e===void 0||e-- >0)&&!(c=a.next()).done;)n.push(c.value)}catch(f){g={error:f}}finally{try{c&&!c.done&&(o=a.return)&&o.call(a)}finally{if(g)throw g.error}}return n},h=this&&this.__spreadArray||function(t,e,o){if(o||arguments.length===2)for(var a=0,c=e.length,n;a<c;a++)(n||!(a in e))&&(n||(n=Array.prototype.slice.call(e,0,a)),n[a]=e[a]);return t.concat(n||Array.prototype.slice.call(e))},l=s("../lib/oop"),u=s("./doc_comment_highlight_rules").DocCommentHighlightRules,r=s("./text_highlight_rules").TextHighlightRules,i=function(){var t="using|transmute|cast|distinct|opaque|where|struct|enum|union|bit_field|bit_set|if|when|else|do|switch|case|break|fallthrough|size_of|offset_of|type_info_if|typeid_of|type_of|align_of|or_return|or_else|inline|no_inline|import|package|foreign|defer|auto_cast|map|matrix|proc|for|continue|not_in|in",e=function(){for(var m=[],_=0;_<arguments.length;_++)m[_]=arguments[_];return m.reduce(function(x,b){return x.flatMap(function(y){return b.map(function(M){return[y,M].flat()})})}).map(function(x){return x.join("")})},o=h(h(h(h(["int","uint","uintptr","typeid","rawptr","string","cstring","i8","u8","any","byte","rune","bool","b8","b16","b32","b64"],d(e(["i","u"],["16","32","64","128"],["","le","be"])),!1),d(e(["f"],["16","32","64"],["","le","be"])),!1),d(e(["complex"],["32","64","128"])),!1),d(e(["quaternion"],["64","128","256"])),!1).join("|"),a=["\\*","/","%","%%","<<",">>","&","&~","\\+","\\-","~","\\|",">","<","<=",">=","==","!="].concat(":").map(function(m){return m+"="}).concat("=",":=","::","->","\\^","&",":").join("|"),c="new|cap|copy|panic|len|make|delete|append|free",n="nil|true|false",g=this.createKeywordMapper({keyword:t,"constant.language":n,"support.function":c,"support.type":o},""),f=`\\\\(?:[0-7]{3}|x\\h{2}|u{4}|U\\h{6}|[abfnrtv'"\\\\])`.replace(/\\h/g,"[a-fA-F\\d]");this.$rules={start:[{token:"comment",regex:/\/\/.*$/},u.getStartRule("doc-start"),{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"string",regex:/"(?:[^"\\]|\\.)*?"/},{token:"string",regex:"`",next:"bqstring"},{token:"support.constant",regex:/#[a-z_]+/},{token:"constant.numeric",regex:"'(?:[^\\'\uD800-\uDBFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|"+f.replace('"',"")+")'"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:["entity.name.function","text","keyword.operator","text","keyword"],regex:"([a-zA-Z_$][a-zA-Z0-9_$]*)(\\s+)(::)(\\s+)(proc)\\b"},{token:function(m){return m[m.length-1]=="("?[{type:g(m.slice(0,-1))||"support.function",value:m.slice(0,-1)},{type:"paren.lparen",value:m.slice(-1)}]:g(m)||"identifier"},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b\\(?"},{token:"keyword.operator",regex:a},{token:"punctuation.operator",regex:"\\?|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],bqstring:[{token:"string",regex:"`",next:"start"},{defaultToken:"string"}]},this.embedRules(u,"doc-",[u.getEndRule("start")])};l.inherits(i,r),p.OdinHighlightRules=i}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(s,p,v){"use strict";var d=s("../range").Range,h=function(){};(function(){this.checkOutdent=function(l,u){return/^\s+$/.test(l)?/^\s*\}/.test(u):!1},this.autoOutdent=function(l,u){var r=l.getLine(u),i=r.match(/^(\s*\})/);if(!i)return 0;var t=i[1].length,e=l.findMatchingBracket({row:u,column:t});if(!e||e.row==u)return 0;var o=this.$getIndent(l.getLine(e.row));l.replace(new d(u,0,u,t-1),o)},this.$getIndent=function(l){return l.match(/^\s*/)[0]}}).call(h.prototype),p.MatchingBraceOutdent=h}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(s,p,v){"use strict";var d=s("../../lib/oop"),h=s("../../range").Range,l=s("./fold_mode").FoldMode,u=p.FoldMode=function(r){r&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+r.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+r.end)))};d.inherits(u,l),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(r,i,t){var e=r.getLine(t);if(this.singleLineBlockCommentRe.test(e)&&!this.startRegionRe.test(e)&&!this.tripleStarBlockCommentRe.test(e))return"";var o=this._getFoldWidgetBase(r,i,t);return!o&&this.startRegionRe.test(e)?"start":o},this.getFoldWidgetRange=function(r,i,t,e){var o=r.getLine(t);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(r,o,t);var n=o.match(this.foldingStartMarker);if(n){var a=n.index;if(n[1])return this.openingBracketBlock(r,n[1],t,a);var c=r.getCommentFoldRange(t,a+n[0].length,1);return c&&!c.isMultiLine()&&(e?c=this.getSectionRange(r,t):i!="all"&&(c=null)),c}if(i!=="markbegin"){var n=o.match(this.foldingStopMarker);if(n){var a=n.index+n[0].length;return n[1]?this.closingBracketBlock(r,n[1],t,a):r.getCommentFoldRange(t,a,-1)}}},this.getSectionRange=function(r,i){var t=r.getLine(i),e=t.search(/\S/),o=i,a=t.length;i=i+1;for(var c=i,n=r.getLength();++i<n;){t=r.getLine(i);var g=t.search(/\S/);if(g!==-1){if(e>g)break;var f=this.getFoldWidgetRange(r,"all",i);if(f){if(f.start.row<=o)break;if(f.isMultiLine())i=f.end.row;else if(e==g)break}c=i}}return new h(o,a,c,r.getLine(c).length)},this.getCommentRegionBlock=function(r,i,t){for(var e=i.search(/\s*$/),o=r.getLength(),a=t,c=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,n=1;++t<o;){i=r.getLine(t);var g=c.exec(i);if(g&&(g[1]?n--:n++,!n))break}var f=t;if(f>a)return new h(a,e,f,i.length)}}.call(u.prototype)}),ace.define("ace/mode/odin",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/odin_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(s,p,v){var d=s("../lib/oop"),h=s("./text").Mode,l=s("./odin_highlight_rules").OdinHighlightRules,u=s("./matching_brace_outdent").MatchingBraceOutdent,r=s("./folding/cstyle").FoldMode,i=function(){this.HighlightRules=l,this.$outdent=new u,this.foldingRules=new r,this.$behaviour=this.$defaultBehaviour};d.inherits(i,h),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(t,e,o){var a=this.$getIndent(e),c=this.getTokenizer().getLineTokens(e,t),n=c.tokens;if(n.length&&n[n.length-1].type=="comment")return a;if(t=="start"){var g=e.match(/^.*[\{\(\[:]\s*$/);g&&(a+=o)}return a},this.checkOutdent=function(t,e,o){return this.$outdent.checkOutdent(e,o)},this.autoOutdent=function(t,e,o){this.$outdent.autoOutdent(e,o)},this.$id="ace/mode/odin"}.call(i.prototype),p.Mode=i}),function(){ace.require(["ace/mode/odin"],function(s){k&&(k.exports=s)})}()}}]);