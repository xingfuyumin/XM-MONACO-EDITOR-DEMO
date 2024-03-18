(self.webpackChunk=self.webpackChunk||[]).push([[4572],{34572:function(s,v,f){s=f.nmd(s),ace.define("ace/mode/ada_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,u,m){"use strict";var g=t("../lib/oop"),l=t("./text_highlight_rules").TextHighlightRules,d=function(){var c="abort|else|new|return|abs|elsif|not|reverse|abstract|end|null|accept|entry|select|access|exception|of|separate|aliased|exit|or|some|all|others|subtype|and|for|out|synchronized|array|function|overriding|at|tagged|generic|package|task|begin|goto|pragma|terminate|body|private|then|if|procedure|type|case|in|protected|constant|interface|until||is|raise|use|declare|range|delay|limited|record|when|delta|loop|rem|while|digits|renames|with|do|mod|requeue|xor",r="true|false|null",i="count|min|max|avg|sum|rank|now|coalesce|main",e=this.createKeywordMapper({"support.function":i,keyword:c,"constant.language":r},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.'"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\(]"},{token:"paren.rparen",regex:"[\\)]"},{token:"text",regex:"\\s+"}]}};g.inherits(d,l),u.AdaHighlightRules=d}),ace.define("ace/mode/ada",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/ada_highlight_rules","ace/range"],function(t,u,m){"use strict";var g=t("../lib/oop"),l=t("./text").Mode,d=t("./ada_highlight_rules").AdaHighlightRules,c=t("../range").Range,r=function(){this.HighlightRules=d,this.$behaviour=this.$defaultBehaviour};g.inherits(r,l),function(){this.lineCommentStart="--",this.getNextLineIndent=function(i,e,n){var a=this.$getIndent(e),h=this.getTokenizer().getLineTokens(e,i),o=h.tokens;if(o.length&&o[o.length-1].type=="comment")return a;if(i=="start"){var p=e.match(/^.*(begin|loop|then|is|do)\s*$/);p&&(a+=n)}return a},this.checkOutdent=function(i,e,n){var a=e+n;return!!a.match(/^\s*(begin|end)$/)},this.autoOutdent=function(i,e,n){var a=e.getLine(n),h=e.getLine(n-1),o=this.$getIndent(h).length,p=this.$getIndent(a).length;p<=o||e.outdentRows(new c(n,0,n+2,0))},this.$id="ace/mode/ada"}.call(r.prototype),u.Mode=r}),function(){ace.require(["ace/mode/ada"],function(t){s&&(s.exports=t)})}()}}]);