(self.webpackChunk=self.webpackChunk||[]).push([[5819],{5819:function(f,x,v){f=v.nmd(f),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(i,d,k){"use strict";var u=i("../range").Range,h=function(){};(function(){this.checkOutdent=function(o,s){return/^\s+$/.test(o)?/^\s*\}/.test(s):!1},this.autoOutdent=function(o,s){var e=o.getLine(s),n=e.match(/^(\s*\})/);if(!n)return 0;var t=n[1].length,r=o.findMatchingBracket({row:s,column:t});if(!r||r.row==s)return 0;var l=this.$getIndent(o.getLine(r.row));o.replace(new u(s,0,s,t-1),l)},this.$getIndent=function(o){return o.match(/^\s*/)[0]}}).call(h.prototype),d.MatchingBraceOutdent=h}),ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(i,d,k){"use strict";var u=i("../lib/oop"),h=i("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},o.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};u.inherits(o,h),o.getTagRule=function(s){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},o.getStartRule=function(s){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:s}},o.getEndRule=function(s){return{token:"comment.doc",regex:"\\*\\/",next:s}},d.DocCommentHighlightRules=o}),ace.define("ace/mode/dot_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules","ace/mode/doc_comment_highlight_rules"],function(i,d,k){"use strict";var u=i("../lib/oop"),h=i("../lib/lang"),o=i("./text_highlight_rules").TextHighlightRules,s=i("./doc_comment_highlight_rules").DocCommentHighlightRules,e=function(){var n=h.arrayToMap("strict|node|edge|graph|digraph|subgraph".split("|")),t=h.arrayToMap("damping|k|url|area|arrowhead|arrowsize|arrowtail|aspect|bb|bgcolor|center|charset|clusterrank|color|colorscheme|comment|compound|concentrate|constraint|decorate|defaultdist|dim|dimen|dir|diredgeconstraints|distortion|dpi|edgeurl|edgehref|edgetarget|edgetooltip|epsilon|esep|fillcolor|fixedsize|fontcolor|fontname|fontnames|fontpath|fontsize|forcelabels|gradientangle|group|headurl|head_lp|headclip|headhref|headlabel|headport|headtarget|headtooltip|height|href|id|image|imagepath|imagescale|label|labelurl|label_scheme|labelangle|labeldistance|labelfloat|labelfontcolor|labelfontname|labelfontsize|labelhref|labeljust|labelloc|labeltarget|labeltooltip|landscape|layer|layerlistsep|layers|layerselect|layersep|layout|len|levels|levelsgap|lhead|lheight|lp|ltail|lwidth|margin|maxiter|mclimit|mindist|minlen|mode|model|mosek|nodesep|nojustify|normalize|nslimit|nslimit1|ordering|orientation|outputorder|overlap|overlap_scaling|pack|packmode|pad|page|pagedir|pencolor|penwidth|peripheries|pin|pos|quadtree|quantum|rank|rankdir|ranksep|ratio|rects|regular|remincross|repulsiveforce|resolution|root|rotate|rotation|samehead|sametail|samplepoints|scale|searchsize|sep|shape|shapefile|showboxes|sides|size|skew|smoothing|sortv|splines|start|style|stylesheet|tailurl|tail_lp|tailclip|tailhref|taillabel|tailport|tailtarget|tailtooltip|target|tooltip|truecolor|vertices|viewport|voro_margin|weight|width|xlabel|xlp|z".split("|"));this.$rules={start:[{token:"comment",regex:/\/\/.*$/},{token:"comment",regex:/#.*$/},{token:"comment",merge:!0,regex:/\/\*/,next:"comment"},{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/[+\-]?\d+(?:(?:\.\d*)?(?:[eE][+\-]?\d+)?)?\b/},{token:"keyword.operator",regex:/\+|=|\->/},{token:"punctuation.operator",regex:/,|;/},{token:"paren.lparen",regex:/[\[{]/},{token:"paren.rparen",regex:/[\]}]/},{token:"comment",regex:/^#!.*$/},{token:function(r){return n.hasOwnProperty(r.toLowerCase())?"keyword":t.hasOwnProperty(r.toLowerCase())?"variable":"text"},regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],qqstring:[{token:"string",regex:'[^"\\\\]+',merge:!0},{token:"string",regex:"\\\\$",next:"qqstring",merge:!0},{token:"string",regex:'"|$',next:"start",merge:!0}],qstring:[{token:"string",regex:"[^'\\\\]+",merge:!0},{token:"string",regex:"\\\\$",next:"qstring",merge:!0},{token:"string",regex:"'|$",next:"start",merge:!0}]}};u.inherits(e,o),d.DotHighlightRules=e}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(i,d,k){"use strict";var u=i("../../lib/oop"),h=i("../../range").Range,o=i("./fold_mode").FoldMode,s=d.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};u.inherits(s,o),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,t){var r=e.getLine(t);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var l=this._getFoldWidgetBase(e,n,t);return!l&&this.startRegionRe.test(r)?"start":l},this.getFoldWidgetRange=function(e,n,t,r){var l=e.getLine(t);if(this.startRegionRe.test(l))return this.getCommentRegionBlock(e,l,t);var a=l.match(this.foldingStartMarker);if(a){var g=a.index;if(a[1])return this.openingBracketBlock(e,a[1],t,g);var c=e.getCommentFoldRange(t,g+a[0].length,1);return c&&!c.isMultiLine()&&(r?c=this.getSectionRange(e,t):n!="all"&&(c=null)),c}if(n!=="markbegin"){var a=l.match(this.foldingStopMarker);if(a){var g=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],t,g):e.getCommentFoldRange(t,g,-1)}}},this.getSectionRange=function(e,n){var t=e.getLine(n),r=t.search(/\S/),l=n,g=t.length;n=n+1;for(var c=n,a=e.getLength();++n<a;){t=e.getLine(n);var p=t.search(/\S/);if(p!==-1){if(r>p)break;var m=this.getFoldWidgetRange(e,"all",n);if(m){if(m.start.row<=l)break;if(m.isMultiLine())n=m.end.row;else if(r==p)break}c=n}}return new h(l,g,c,e.getLine(c).length)},this.getCommentRegionBlock=function(e,n,t){for(var r=n.search(/\s*$/),l=e.getLength(),g=t,c=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++t<l;){n=e.getLine(t);var p=c.exec(n);if(p&&(p[1]?a--:a++,!a))break}var m=t;if(m>g)return new h(g,r,m,n.length)}}.call(s.prototype)}),ace.define("ace/mode/dot",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/matching_brace_outdent","ace/mode/dot_highlight_rules","ace/mode/folding/cstyle"],function(i,d,k){"use strict";var u=i("../lib/oop"),h=i("./text").Mode,o=i("./matching_brace_outdent").MatchingBraceOutdent,s=i("./dot_highlight_rules").DotHighlightRules,e=i("./folding/cstyle").FoldMode,n=function(){this.HighlightRules=s,this.$outdent=new o,this.foldingRules=new e,this.$behaviour=this.$defaultBehaviour};u.inherits(n,h),function(){this.lineCommentStart=["//","#"],this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(t,r,l){var g=this.$getIndent(r),c=this.getTokenizer().getLineTokens(r,t),a=c.tokens,p=c.state;if(a.length&&a[a.length-1].type=="comment")return g;if(t=="start"){var m=r.match(/^.*(?:\bcase\b.*:|[\{\(\[])\s*$/);m&&(g+=l)}return g},this.checkOutdent=function(t,r,l){return this.$outdent.checkOutdent(r,l)},this.autoOutdent=function(t,r,l){this.$outdent.autoOutdent(r,l)},this.$id="ace/mode/dot"}.call(n.prototype),d.Mode=n}),function(){ace.require(["ace/mode/dot"],function(i){f&&(f.exports=i)})}()}}]);