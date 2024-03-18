(self.webpackChunk=self.webpackChunk||[]).push([[8625],{58625:function(p,x,k){p=k.nmd(p),ace.define("ace/mode/smithy_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,h,f){"use strict";var m=r("../lib/oop"),d=r("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{include:"#comment"},{token:["meta.keyword.statement.smithy","variable.other.smithy","text","keyword.operator.smithy"],regex:/^(\$)(\s+.+)(\s*)(=)/},{token:["keyword.statement.smithy","text","entity.name.type.namespace.smithy"],regex:/^(namespace)(\s+)([A-Z-a-z0-9_\.#$-]+)/},{token:["keyword.statement.smithy","text","keyword.statement.smithy","text","entity.name.type.smithy"],regex:/^(use)(\s+)(shape|trait)(\s+)([A-Z-a-z0-9_\.#$-]+)\b/},{token:["keyword.statement.smithy","variable.other.smithy","text","keyword.operator.smithy"],regex:/^(metadata)(\s+.+)(\s*)(=)/},{token:["keyword.statement.smithy","text","entity.name.type.smithy"],regex:/^(apply|byte|short|integer|long|float|double|bigInteger|bigDecimal|boolean|blob|string|timestamp|service|resource|trait|list|map|set|structure|union|document)(\s+)([A-Z-a-z0-9_\.#$-]+)\b/},{token:["keyword.operator.smithy","text","entity.name.type.smithy","text","text","support.function.smithy","text","text","support.function.smithy"],regex:/^(operation)(\s+)([A-Z-a-z0-9_\.#$-]+)(\(.*\))(?:(\s*)(->)(\s*[A-Z-a-z0-9_\.#$-]+))?(?:(\s+)(errors))?/},{include:"#trait"},{token:["support.type.property-name.smithy","punctuation.separator.dictionary.pair.smithy"],regex:/([A-Z-a-z0-9_\.#$-]+)(:)/},{include:"#value"},{token:"keyword.other.smithy",regex:/\->/}],"#comment":[{include:"#doc_comment"},{include:"#line_comment"}],"#doc_comment":[{token:"comment.block.documentation.smithy",regex:/\/\/\/.*/}],"#line_comment":[{token:"comment.line.double-slash.smithy",regex:/\/\/.*/}],"#trait":[{token:["punctuation.definition.annotation.smithy","storage.type.annotation.smithy"],regex:/(@)([0-9a-zA-Z\.#-]+)/},{token:["punctuation.definition.annotation.smithy","punctuation.definition.object.end.smithy","meta.structure.smithy"],regex:/(@)([0-9a-zA-Z\.#-]+)(\()/,push:[{token:"punctuation.definition.object.end.smithy",regex:/\)/,next:"pop"},{include:"#value"},{include:"#object_inner"},{defaultToken:"meta.structure.smithy"}]}],"#value":[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"}],"#array":[{token:"punctuation.definition.array.begin.smithy",regex:/\[/,push:[{token:"punctuation.definition.array.end.smithy",regex:/\]/,next:"pop"},{include:"#comment"},{include:"#value"},{token:"punctuation.separator.array.smithy",regex:/,/},{token:"invalid.illegal.expected-array-separator.smithy",regex:/[^\s\]]/},{defaultToken:"meta.structure.array.smithy"}]}],"#constant":[{token:"constant.language.smithy",regex:/\b(?:true|false|null)\b/}],"#number":[{token:"constant.numeric.smithy",regex:/-?(?:0|[1-9]\d*)(?:(?:\.\d+)?(?:[eE][+-]?\d+)?)?/}],"#object":[{token:"punctuation.definition.dictionary.begin.smithy",regex:/\{/,push:[{token:"punctuation.definition.dictionary.end.smithy",regex:/\}/,next:"pop"},{include:"#trait"},{include:"#object_inner"},{defaultToken:"meta.structure.dictionary.smithy"}]}],"#object_inner":[{include:"#comment"},{include:"#string_key"},{token:"punctuation.separator.dictionary.key-value.smithy",regex:/:/,push:[{token:"punctuation.separator.dictionary.pair.smithy",regex:/,|(?=\})/,next:"pop"},{include:"#value"},{token:"invalid.illegal.expected-dictionary-separator.smithy",regex:/[^\s,]/},{defaultToken:"meta.structure.dictionary.value.smithy"}]},{token:"invalid.illegal.expected-dictionary-separator.smithy",regex:/[^\s\}]/}],"#string_key":[{include:"#identifier_key"},{include:"#dquote_key"},{include:"#squote_key"}],"#identifier_key":[{token:"support.type.property-name.smithy",regex:/[A-Z-a-z0-9_\.#$-]+/}],"#dquote_key":[{include:"#dquote"}],"#squote_key":[{include:"#squote"}],"#string":[{include:"#textblock"},{include:"#dquote"},{include:"#squote"},{include:"#identifier"}],"#textblock":[{token:"punctuation.definition.string.begin.smithy",regex:/"""/,push:[{token:"punctuation.definition.string.end.smithy",regex:/"""/,next:"pop"},{token:"constant.character.escape.smithy",regex:/\\./},{defaultToken:"string.quoted.double.smithy"}]}],"#dquote":[{token:"punctuation.definition.string.begin.smithy",regex:/"/,push:[{token:"punctuation.definition.string.end.smithy",regex:/"/,next:"pop"},{token:"constant.character.escape.smithy",regex:/\\./},{defaultToken:"string.quoted.double.smithy"}]}],"#squote":[{token:"punctuation.definition.string.begin.smithy",regex:/'/,push:[{token:"punctuation.definition.string.end.smithy",regex:/'/,next:"pop"},{token:"constant.character.escape.smithy",regex:/\\./},{defaultToken:"string.quoted.single.smithy"}]}],"#identifier":[{token:"storage.type.smithy",regex:/[A-Z-a-z_][A-Z-a-z0-9_\.#$-]*/}]},this.normalizeRules()};s.metaData={name:"Smithy",fileTypes:["smithy"],scopeName:"source.smithy",foldingStartMarker:"(\\{|\\[)\\s*",foldingStopMarker:"\\s*(\\}|\\])"},m.inherits(s,d),h.SmithyHighlightRules=s}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,h,f){"use strict";var m=r("../range").Range,d=function(){};(function(){this.checkOutdent=function(s,u){return/^\s+$/.test(s)?/^\s*\}/.test(u):!1},this.autoOutdent=function(s,u){var e=s.getLine(u),t=e.match(/^(\s*\})/);if(!t)return 0;var i=t[1].length,n=s.findMatchingBracket({row:u,column:i});if(!n||n.row==u)return 0;var o=this.$getIndent(s.getLine(n.row));s.replace(new m(u,0,u,i-1),o)},this.$getIndent=function(s){return s.match(/^\s*/)[0]}}).call(d.prototype),h.MatchingBraceOutdent=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,h,f){"use strict";var m=r("../../lib/oop"),d=r("../../range").Range,s=r("./fold_mode").FoldMode,u=h.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};m.inherits(u,s),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var n=e.getLine(i);if(this.singleLineBlockCommentRe.test(n)&&!this.startRegionRe.test(n)&&!this.tripleStarBlockCommentRe.test(n))return"";var o=this._getFoldWidgetBase(e,t,i);return!o&&this.startRegionRe.test(n)?"start":o},this.getFoldWidgetRange=function(e,t,i,n){var o=e.getLine(i);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,i);var a=o.match(this.foldingStartMarker);if(a){var l=a.index;if(a[1])return this.openingBracketBlock(e,a[1],i,l);var c=e.getCommentFoldRange(i,l+a[0].length,1);return c&&!c.isMultiLine()&&(n?c=this.getSectionRange(e,i):t!="all"&&(c=null)),c}if(t!=="markbegin"){var a=o.match(this.foldingStopMarker);if(a){var l=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],i,l):e.getCommentFoldRange(i,l,-1)}}},this.getSectionRange=function(e,t){var i=e.getLine(t),n=i.search(/\S/),o=t,l=i.length;t=t+1;for(var c=t,a=e.getLength();++t<a;){i=e.getLine(t);var y=i.search(/\S/);if(y!==-1){if(n>y)break;var g=this.getFoldWidgetRange(e,"all",t);if(g){if(g.start.row<=o)break;if(g.isMultiLine())t=g.end.row;else if(n==y)break}c=t}}return new d(o,l,c,e.getLine(c).length)},this.getCommentRegionBlock=function(e,t,i){for(var n=t.search(/\s*$/),o=e.getLength(),l=i,c=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++i<o;){t=e.getLine(i);var y=c.exec(t);if(y&&(y[1]?a--:a++,!a))break}var g=i;if(g>l)return new d(l,n,g,t.length)}}.call(u.prototype)}),ace.define("ace/mode/smithy",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/smithy_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(r,h,f){"use strict";var m=r("../lib/oop"),d=r("./text").Mode,s=r("./smithy_highlight_rules").SmithyHighlightRules,u=r("./matching_brace_outdent").MatchingBraceOutdent,e=r("./folding/cstyle").FoldMode,t=function(){this.HighlightRules=s,this.$outdent=new u,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new e};m.inherits(t,d),function(){this.lineCommentStart="//",this.$quotes={'"':'"'},this.checkOutdent=function(i,n,o){return this.$outdent.checkOutdent(n,o)},this.autoOutdent=function(i,n,o){this.$outdent.autoOutdent(n,o)},this.$id="ace/mode/smithy"}.call(t.prototype),h.Mode=t}),function(){ace.require(["ace/mode/smithy"],function(r){p&&(p.exports=r)})}()}}]);
