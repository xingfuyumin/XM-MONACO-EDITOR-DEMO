(self.webpackChunk=self.webpackChunk||[]).push([[5918],{5918:function(g,d,u){g=u.nmd(g),ace.define("ace/mode/latex_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,a,h){"use strict";var o=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,t=function(){this.$rules={start:[{token:"comment",regex:"%.*$"},{token:["keyword","lparen","variable.parameter","rparen","lparen","storage.type","rparen"],regex:"(\\\\(?:documentclass|usepackage|input))(?:(\\[)([^\\]]*)(\\]))?({)([^}]*)(})"},{token:["keyword","lparen","variable.parameter","rparen"],regex:"(\\\\(?:label|v?ref|cite(?:[^{]*)))(?:({)([^}]*)(}))?"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\begin)({)(verbatim)(})",next:"verbatim"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\begin)({)(lstlisting)(})",next:"lstlisting"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\(?:begin|end))({)([\\w*]*)(})"},{token:"storage.type",regex:/\\verb\b\*?/,next:[{token:["keyword.operator","string","keyword.operator"],regex:"(.)(.*?)(\\1|$)|",next:"start"}]},{token:"storage.type",regex:"\\\\[a-zA-Z]+"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"constant.character.escape",regex:"\\\\[^a-zA-Z]?"},{token:"string",regex:"\\${1,2}",next:"equation"}],equation:[{token:"comment",regex:"%.*$"},{token:"string",regex:"\\${1,2}",next:"start"},{token:"constant.character.escape",regex:"\\\\(?:[^a-zA-Z]|[a-zA-Z]+)"},{token:"error",regex:"^\\s*$",next:"start"},{defaultToken:"string"}],verbatim:[{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\end)({)(verbatim)(})",next:"start"},{defaultToken:"text"}],lstlisting:[{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\end)({)(lstlisting)(})",next:"start"},{defaultToken:"text"}]},this.normalizeRules()};o.inherits(t,i),a.LatexHighlightRules=t}),ace.define("ace/mode/rdoc_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules","ace/mode/latex_highlight_rules"],function(e,a,h){"use strict";var o=e("../lib/oop"),i=e("../lib/lang"),t=e("./text_highlight_rules").TextHighlightRules,r=e("./latex_highlight_rules"),n=function(){this.$rules={start:[{token:"comment",regex:"%.*$"},{token:"text",regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:name|alias|method|S3method|S4method|item|code|preformatted|kbd|pkg|var|env|option|command|author|email|url|source|cite|acronym|href|code|preformatted|link|eqn|deqn|keyword|usage|examples|dontrun|dontshow|figure|if|ifelse|Sexpr|RdOpts|inputencoding|usepackage)\\b",next:"nospell"},{token:"keyword",regex:"\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],nospell:[{token:"comment",regex:"%.*$",next:"start"},{token:"nospell.text",regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:name|alias|method|S3method|S4method|item|code|preformatted|kbd|pkg|var|env|option|command|author|email|url|source|cite|acronym|href|code|preformatted|link|eqn|deqn|keyword|usage|examples|dontrun|dontshow|figure|if|ifelse|Sexpr|RdOpts|inputencoding|usepackage)\\b"},{token:"keyword",regex:"\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])",next:"start"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])]"},{token:"paren.keyword.operator",regex:"}",next:"start"},{token:"nospell.text",regex:"\\s+"},{token:"nospell.text",regex:"\\w+"}]}};o.inherits(n,t),a.RDocHighlightRules=n}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,a,h){"use strict";var o=e("../range").Range,i=function(){};(function(){this.checkOutdent=function(t,r){return/^\s+$/.test(t)?/^\s*\}/.test(r):!1},this.autoOutdent=function(t,r){var n=t.getLine(r),l=n.match(/^(\s*\})/);if(!l)return 0;var s=l[1].length,c=t.findMatchingBracket({row:r,column:s});if(!c||c.row==r)return 0;var p=this.$getIndent(t.getLine(c.row));t.replace(new o(r,0,r,s-1),p)},this.$getIndent=function(t){return t.match(/^\s*/)[0]}}).call(i.prototype),a.MatchingBraceOutdent=i}),ace.define("ace/mode/rdoc",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/rdoc_highlight_rules","ace/mode/matching_brace_outdent"],function(e,a,h){"use strict";var o=e("../lib/oop"),i=e("./text").Mode,t=e("./rdoc_highlight_rules").RDocHighlightRules,r=e("./matching_brace_outdent").MatchingBraceOutdent,n=function(l){this.HighlightRules=t,this.$outdent=new r,this.$behaviour=this.$defaultBehaviour};o.inherits(n,i),function(){this.getNextLineIndent=function(l,s,c){return this.$getIndent(s)},this.$id="ace/mode/rdoc"}.call(n.prototype),a.Mode=n}),function(){ace.require(["ace/mode/rdoc"],function(e){g&&(g.exports=e)})}()}}]);
