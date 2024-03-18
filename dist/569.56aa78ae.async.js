(self.webpackChunk=self.webpackChunk||[]).push([[569],{10569:function(k,j,p){k=p.nmd(k),ace.define("ace/mode/jssm_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(i,h,x){"use strict";var u=i("../lib/oop"),g=i("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"punctuation.definition.comment.mn",regex:/\/\*/,push:[{token:"punctuation.definition.comment.mn",regex:/\*\//,next:"pop"},{defaultToken:"comment.block.jssm"}],comment:"block comment"},{token:"comment.line.jssm",regex:/\/\//,push:[{token:"comment.line.jssm",regex:/$/,next:"pop"},{defaultToken:"comment.line.jssm"}],comment:"block comment"},{token:"entity.name.function",regex:/\${/,push:[{token:"entity.name.function",regex:/}/,next:"pop"},{defaultToken:"keyword.other"}],comment:"js outcalls"},{token:"constant.numeric",regex:/[0-9]*\.[0-9]*\.[0-9]*/,comment:"semver"},{token:"constant.language.jssmLanguage",regex:/graph_layout\s*:/,comment:"jssm language tokens"},{token:"constant.language.jssmLanguage",regex:/machine_name\s*:/,comment:"jssm language tokens"},{token:"constant.language.jssmLanguage",regex:/machine_version\s*:/,comment:"jssm language tokens"},{token:"constant.language.jssmLanguage",regex:/jssm_version\s*:/,comment:"jssm language tokens"},{token:"keyword.control.transition.jssmArrow.legal_legal",regex:/<->/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.legal_none",regex:/<-/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.none_legal",regex:/->/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.main_main",regex:/<=>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.none_main",regex:/=>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.main_none",regex:/<=/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.forced_forced",regex:/<~>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.none_forced",regex:/~>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.forced_none",regex:/<~/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.legal_main",regex:/<-=>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.main_legal",regex:/<=->/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.legal_forced",regex:/<-~>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.forced_legal",regex:/<~->/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.main_forced",regex:/<=~>/,comment:"transitions"},{token:"keyword.control.transition.jssmArrow.forced_main",regex:/<~=>/,comment:"transitions"},{token:"constant.numeric.jssmProbability",regex:/[0-9]+%/,comment:"edge probability annotation"},{token:"constant.character.jssmAction",regex:/\'[^']*\'/,comment:"action annotation"},{token:"entity.name.tag.jssmLabel.doublequoted",regex:/\"[^"]*\"/,comment:"jssm label annotation"},{token:"entity.name.tag.jssmLabel.atom",regex:/[a-zA-Z0-9_.+&()#@!?,]/,comment:"jssm label annotation"}]},this.normalizeRules()};l.metaData={fileTypes:["jssm","jssm_state"],name:"JSSM",scopeName:"source.jssm"},u.inherits(l,g),h.JSSMHighlightRules=l}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(i,h,x){"use strict";var u=i("../../lib/oop"),g=i("../../range").Range,l=i("./fold_mode").FoldMode,f=h.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};u.inherits(f,l),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var s=e.getLine(n);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(s)?"start":r},this.getFoldWidgetRange=function(e,t,n,s){var r=e.getLine(n);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,n);var o=r.match(this.foldingStartMarker);if(o){var m=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,m);var a=e.getCommentFoldRange(n,m+o[0].length,1);return a&&!a.isMultiLine()&&(s?a=this.getSectionRange(e,n):t!="all"&&(a=null)),a}if(t!=="markbegin"){var o=r.match(this.foldingStopMarker);if(o){var m=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],n,m):e.getCommentFoldRange(n,m,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),s=n.search(/\S/),r=t,m=n.length;t=t+1;for(var a=t,o=e.getLength();++t<o;){n=e.getLine(t);var d=n.search(/\S/);if(d!==-1){if(s>d)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=r)break;if(c.isMultiLine())t=c.end.row;else if(s==d)break}a=t}}return new g(r,m,a,e.getLine(a).length)},this.getCommentRegionBlock=function(e,t,n){for(var s=t.search(/\s*$/),r=e.getLength(),m=n,a=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++n<r;){t=e.getLine(n);var d=a.exec(t);if(d&&(d[1]?o--:o++,!o))break}var c=n;if(c>m)return new g(m,s,c,t.length)}}.call(f.prototype)}),ace.define("ace/mode/jssm",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/jssm_highlight_rules","ace/mode/folding/cstyle"],function(i,h,x){"use strict";var u=i("../lib/oop"),g=i("./text").Mode,l=i("./jssm_highlight_rules").JSSMHighlightRules,f=i("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=l,this.foldingRules=new f};u.inherits(e,g),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/jssm"}.call(e.prototype),h.Mode=e}),function(){ace.require(["ace/mode/jssm"],function(i){k&&(k.exports=i)})}()}}]);
