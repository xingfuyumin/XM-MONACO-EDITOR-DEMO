(self.webpackChunk=self.webpackChunk||[]).push([[1926],{91926:function(b,w,v){b=v.nmd(b),ace.define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],function(c,g,f){"use strict";var p=c("../lib/oop"),h=c("../lib/lang"),l=c("./text_highlight_rules").TextHighlightRules,d=g.supportType="align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|border|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|font|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|hanging-punctuation|height|justify-content|left|letter-spacing|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-bottom|margin-left|margin-right|margin-top|max-height|max-width|max-zoom|min-height|min-width|min-zoom|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|order|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-x|overflow-y|padding|padding-bottom|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|perspective|perspective-origin|position|quotes|resize|right|tab-size|table-layout|text-align|text-align-last|text-decoration|text-decoration-color|text-decoration-line|text-decoration-style|text-indent|text-justify|text-overflow|text-shadow|text-transform|top|transform|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|unicode-bidi|user-select|user-zoom|vertical-align|visibility|white-space|width|word-break|word-spacing|word-wrap|z-index",e=g.supportFunction="rgb|rgba|url|attr|counter|counters",i=g.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|flex-end|flex-start|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero|zoom",t=g.supportConstantColor="aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen",r=g.supportConstantFonts="arial|century|comic|courier|cursive|fantasy|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",o=g.numRe="\\-?(?:(?:[0-9]+(?:\\.[0-9]+)?)|(?:\\.[0-9]+))",n=g.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",a=g.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",s=function(){var u=this.createKeywordMapper({"support.function":e,"support.constant":i,"support.type":d,"support.constant.color":t,"support.constant.fonts":r},"text",!0);this.$rules={start:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"ruleset"},{token:"paren.rparen",regex:"\\}"},{token:"string",regex:"@(?!viewport)",next:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"keyword",regex:"%"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant.numeric",regex:o},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{include:["strings","url","comments"]},{token:"paren.lparen",regex:"\\{",next:"start"},{token:"paren.rparen",regex:"\\}",next:"start"},{token:"string",regex:";",next:"start"},{token:"keyword",regex:"(?:media|supports|document|charset|import|namespace|media|supports|document|page|font|keyframes|viewport|counter-style|font-feature-values|swash|ornaments|annotation|stylistic|styleset|character-variant)"}],comments:[{token:"comment",regex:"\\/\\*",push:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}]}],ruleset:[{regex:"-(webkit|ms|moz|o)-",token:"text"},{token:"punctuation.operator",regex:"[:;]"},{token:"paren.rparen",regex:"\\}",next:"start"},{include:["strings","url","comments"]},{token:["constant.numeric","keyword"],regex:"("+o+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vm|vw|%)"},{token:"constant.numeric",regex:o},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:n},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:a},{include:"url"},{token:u,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}],url:[{token:"support.function",regex:"(?:url(:?-prefix)?|domain|regexp)\\(",push:[{token:"support.function",regex:"\\)",next:"pop"},{defaultToken:"string"}]}],strings:[{token:"string.start",regex:"'",push:[{token:"string.end",regex:"'|$",next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]},{token:"string.start",regex:'"',push:[{token:"string.end",regex:'"|$',next:"pop"},{include:"escapes"},{token:"constant.language.escape",regex:/\\$/,consumeLineEnd:!0},{defaultToken:"string"}]}],escapes:[{token:"constant.language.escape",regex:/\\([a-fA-F\d]{1,6}|[^a-fA-F\d])/}]},this.normalizeRules()};p.inherits(s,l),g.CssHighlightRules=s}),ace.define("ace/mode/less_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules","ace/mode/css_highlight_rules"],function(c,g,f){"use strict";var p=c("../lib/oop"),h=c("./text_highlight_rules").TextHighlightRules,l=c("./css_highlight_rules"),d=function(){var e="@import|@media|@font-face|@keyframes|@-webkit-keyframes|@supports|@charset|@plugin|@namespace|@document|@page|@viewport|@-ms-viewport|or|and|when|not",i=e.split("|"),t=l.supportType.split("|"),r=this.createKeywordMapper({"support.constant":l.supportConstant,keyword:e,"support.constant.color":l.supportConstantColor,"support.constant.fonts":l.supportConstantFonts},"identifier",!0),o="\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:["constant.numeric","keyword"],regex:"("+o+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:"constant.numeric",regex:o},{token:["support.function","paren.lparen","string","paren.rparen"],regex:"(url)(\\()(.*)(\\))"},{token:["support.function","paren.lparen"],regex:"(:extend|[a-z0-9_\\-]+)(\\()"},{token:function(n){return i.indexOf(n.toLowerCase())>-1?"keyword":"variable"},regex:"[@\\$][a-z0-9_\\-@\\$]*\\b"},{token:"variable",regex:"[@\\$]\\{[a-z0-9_\\-@\\$]*\\}"},{token:function(n,a){return t.indexOf(n.toLowerCase())>-1?["support.type.property","text"]:["support.type.unknownProperty","text"]},regex:"([a-z0-9-_]+)(\\s*:)"},{token:"keyword",regex:"&"},{token:r,regex:"\\-?[@a-z_][@a-z0-9_\\-]*"},{token:"variable.language",regex:"#[a-z0-9-_]+"},{token:"variable.language",regex:"\\.[a-z0-9-_]+"},{token:"variable.language",regex:":[a-z_][a-z0-9-_]*"},{token:"constant",regex:"[a-z0-9-_]+"},{token:"keyword.operator",regex:"<|>|<=|>=|=|!=|-|%|\\+|\\*"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"},{caseInsensitive:!0}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]},this.normalizeRules()};p.inherits(d,h),g.LessHighlightRules=d}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(c,g,f){"use strict";var p=c("../range").Range,h=function(){};(function(){this.checkOutdent=function(l,d){return/^\s+$/.test(l)?/^\s*\}/.test(d):!1},this.autoOutdent=function(l,d){var e=l.getLine(d),i=e.match(/^(\s*\})/);if(!i)return 0;var t=i[1].length,r=l.findMatchingBracket({row:d,column:t});if(!r||r.row==d)return 0;var o=this.$getIndent(l.getLine(r.row));l.replace(new p(d,0,d,t-1),o)},this.$getIndent=function(l){return l.match(/^\s*/)[0]}}).call(h.prototype),g.MatchingBraceOutdent=h}),ace.define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],function(c,g,f){"use strict";var p=c("../../lib/oop"),h=c("../behaviour").Behaviour,l=c("./cstyle").CstyleBehaviour,d=c("../../token_iterator").TokenIterator,e=function(){this.inherit(l),this.add("colon","insertion",function(i,t,r,o,n){if(n===":"&&r.selection.isEmpty()){var a=r.getCursorPosition(),s=new d(o,a.row,a.column),u=s.getCurrentToken();if(u&&u.value.match(/\s+/)&&(u=s.stepBackward()),u&&u.type==="support.type"){var m=o.doc.getLine(a.row),k=m.substring(a.column,a.column+1);if(k===":")return{text:"",selection:[1,1]};if(/^(\s+[^;]|\s*$)/.test(m.substring(a.column)))return{text:":;",selection:[1,1]}}}}),this.add("colon","deletion",function(i,t,r,o,n){var a=o.doc.getTextRange(n);if(!n.isMultiLine()&&a===":"){var s=r.getCursorPosition(),u=new d(o,s.row,s.column),m=u.getCurrentToken();if(m&&m.value.match(/\s+/)&&(m=u.stepBackward()),m&&m.type==="support.type"){var k=o.doc.getLine(n.start.row),x=k.substring(n.end.column,n.end.column+1);if(x===";")return n.end.column++,n}}}),this.add("semicolon","insertion",function(i,t,r,o,n){if(n===";"&&r.selection.isEmpty()){var a=r.getCursorPosition(),s=o.doc.getLine(a.row),u=s.substring(a.column,a.column+1);if(u===";")return{text:"",selection:[1,1]}}}),this.add("!important","insertion",function(i,t,r,o,n){if(n==="!"&&r.selection.isEmpty()){var a=r.getCursorPosition(),s=o.doc.getLine(a.row);if(/^\s*(;|}|$)/.test(s.substring(a.column)))return{text:"!important",selection:[10,10]}}})};p.inherits(e,l),g.CssBehaviour=e}),ace.define("ace/mode/css_completions",["require","exports","module"],function(c,g,f){"use strict";var p={background:{"#$0":1},"background-color":{"#$0":1,transparent:1,fixed:1},"background-image":{"url('/$0')":1},"background-repeat":{repeat:1,"repeat-x":1,"repeat-y":1,"no-repeat":1,inherit:1},"background-position":{bottom:2,center:2,left:2,right:2,top:2,inherit:2},"background-attachment":{scroll:1,fixed:1},"background-size":{cover:1,contain:1},"background-clip":{"border-box":1,"padding-box":1,"content-box":1},"background-origin":{"border-box":1,"padding-box":1,"content-box":1},border:{"solid $0":1,"dashed $0":1,"dotted $0":1,"#$0":1},"border-color":{"#$0":1},"border-style":{solid:2,dashed:2,dotted:2,double:2,groove:2,hidden:2,inherit:2,inset:2,none:2,outset:2,ridged:2},"border-collapse":{collapse:1,separate:1},bottom:{px:1,em:1,"%":1},clear:{left:1,right:1,both:1,none:1},color:{"#$0":1,"rgb(#$00,0,0)":1},cursor:{default:1,pointer:1,move:1,text:1,wait:1,help:1,progress:1,"n-resize":1,"ne-resize":1,"e-resize":1,"se-resize":1,"s-resize":1,"sw-resize":1,"w-resize":1,"nw-resize":1},display:{none:1,block:1,inline:1,"inline-block":1,"table-cell":1},"empty-cells":{show:1,hide:1},float:{left:1,right:1,none:1},"font-family":{Arial:2,"Comic Sans MS":2,Consolas:2,"Courier New":2,Courier:2,Georgia:2,Monospace:2,"Sans-Serif":2,"Segoe UI":2,Tahoma:2,"Times New Roman":2,"Trebuchet MS":2,Verdana:1},"font-size":{px:1,em:1,"%":1},"font-weight":{bold:1,normal:1},"font-style":{italic:1,normal:1},"font-variant":{normal:1,"small-caps":1},height:{px:1,em:1,"%":1},left:{px:1,em:1,"%":1},"letter-spacing":{normal:1},"line-height":{normal:1},"list-style-type":{none:1,disc:1,circle:1,square:1,decimal:1,"decimal-leading-zero":1,"lower-roman":1,"upper-roman":1,"lower-greek":1,"lower-latin":1,"upper-latin":1,georgian:1,"lower-alpha":1,"upper-alpha":1},margin:{px:1,em:1,"%":1},"margin-right":{px:1,em:1,"%":1},"margin-left":{px:1,em:1,"%":1},"margin-top":{px:1,em:1,"%":1},"margin-bottom":{px:1,em:1,"%":1},"max-height":{px:1,em:1,"%":1},"max-width":{px:1,em:1,"%":1},"min-height":{px:1,em:1,"%":1},"min-width":{px:1,em:1,"%":1},overflow:{hidden:1,visible:1,auto:1,scroll:1},"overflow-x":{hidden:1,visible:1,auto:1,scroll:1},"overflow-y":{hidden:1,visible:1,auto:1,scroll:1},padding:{px:1,em:1,"%":1},"padding-top":{px:1,em:1,"%":1},"padding-right":{px:1,em:1,"%":1},"padding-bottom":{px:1,em:1,"%":1},"padding-left":{px:1,em:1,"%":1},"page-break-after":{auto:1,always:1,avoid:1,left:1,right:1},"page-break-before":{auto:1,always:1,avoid:1,left:1,right:1},position:{absolute:1,relative:1,fixed:1,static:1},right:{px:1,em:1,"%":1},"table-layout":{fixed:1,auto:1},"text-decoration":{none:1,underline:1,"line-through":1,blink:1},"text-align":{left:1,right:1,center:1,justify:1},"text-transform":{capitalize:1,uppercase:1,lowercase:1,none:1},top:{px:1,em:1,"%":1},"vertical-align":{top:1,bottom:1},visibility:{hidden:1,visible:1},"white-space":{nowrap:1,normal:1,pre:1,"pre-line":1,"pre-wrap":1},width:{px:1,em:1,"%":1},"word-spacing":{normal:1},filter:{"alpha(opacity=$0100)":1},"text-shadow":{"$02px 2px 2px #777":1},"text-overflow":{"ellipsis-word":1,clip:1,ellipsis:1},"-moz-border-radius":1,"-moz-border-radius-topright":1,"-moz-border-radius-bottomright":1,"-moz-border-radius-topleft":1,"-moz-border-radius-bottomleft":1,"-webkit-border-radius":1,"-webkit-border-top-right-radius":1,"-webkit-border-top-left-radius":1,"-webkit-border-bottom-right-radius":1,"-webkit-border-bottom-left-radius":1,"-moz-box-shadow":1,"-webkit-box-shadow":1,transform:{"rotate($00deg)":1,"skew($00deg)":1},"-moz-transform":{"rotate($00deg)":1,"skew($00deg)":1},"-webkit-transform":{"rotate($00deg)":1,"skew($00deg)":1}},h=function(){};(function(){this.completionsDefined=!1,this.defineCompletions=function(){if(document){var l=document.createElement("c").style;for(var d in l)if(typeof l[d]=="string"){var e=d.replace(/[A-Z]/g,function(i){return"-"+i.toLowerCase()});p.hasOwnProperty(e)||(p[e]=1)}}this.completionsDefined=!0},this.getCompletions=function(l,d,e,i){if(this.completionsDefined||this.defineCompletions(),l==="ruleset"||d.$mode.$id=="ace/mode/scss"){var t=d.getLine(e.row).substr(0,e.column),r=/\([^)]*$/.test(t);return r&&(t=t.substr(t.lastIndexOf("(")+1)),/:[^;]+$/.test(t)?(/([\w\-]+):[^:]*$/.test(t),this.getPropertyValueCompletions(l,d,e,i)):this.getPropertyCompletions(l,d,e,i,r)}return[]},this.getPropertyCompletions=function(l,d,e,i,t){t=t||!1;var r=Object.keys(p);return r.map(function(o){return{caption:o,snippet:o+": $0"+(t?"":";"),meta:"property",score:1e6}})},this.getPropertyValueCompletions=function(l,d,e,i){var t=d.getLine(e.row).substr(0,e.column),r=(/([\w\-]+):[^:]*$/.exec(t)||{})[1];if(!r)return[];var o=[];return r in p&&typeof p[r]=="object"&&(o=Object.keys(p[r])),o.map(function(n){return{caption:n,snippet:n,meta:"property value",score:1e6}})}}).call(h.prototype),g.CssCompletions=h}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(c,g,f){"use strict";var p=c("../../lib/oop"),h=c("../../range").Range,l=c("./fold_mode").FoldMode,d=g.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};p.inherits(d,l),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,i,t){var r=e.getLine(t);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var o=this._getFoldWidgetBase(e,i,t);return!o&&this.startRegionRe.test(r)?"start":o},this.getFoldWidgetRange=function(e,i,t,r){var o=e.getLine(t);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,t);var s=o.match(this.foldingStartMarker);if(s){var n=s.index;if(s[1])return this.openingBracketBlock(e,s[1],t,n);var a=e.getCommentFoldRange(t,n+s[0].length,1);return a&&!a.isMultiLine()&&(r?a=this.getSectionRange(e,t):i!="all"&&(a=null)),a}if(i!=="markbegin"){var s=o.match(this.foldingStopMarker);if(s){var n=s.index+s[0].length;return s[1]?this.closingBracketBlock(e,s[1],t,n):e.getCommentFoldRange(t,n,-1)}}},this.getSectionRange=function(e,i){var t=e.getLine(i),r=t.search(/\S/),o=i,n=t.length;i=i+1;for(var a=i,s=e.getLength();++i<s;){t=e.getLine(i);var u=t.search(/\S/);if(u!==-1){if(r>u)break;var m=this.getFoldWidgetRange(e,"all",i);if(m){if(m.start.row<=o)break;if(m.isMultiLine())i=m.end.row;else if(r==u)break}a=i}}return new h(o,n,a,e.getLine(a).length)},this.getCommentRegionBlock=function(e,i,t){for(var r=i.search(/\s*$/),o=e.getLength(),n=t,a=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++t<o;){i=e.getLine(t);var u=a.exec(i);if(u&&(u[1]?s--:s++,!s))break}var m=t;if(m>n)return new h(n,r,m,i.length)}}.call(d.prototype)}),ace.define("ace/mode/less",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/less_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/css","ace/mode/css_completions","ace/mode/folding/cstyle"],function(c,g,f){"use strict";var p=c("../lib/oop"),h=c("./text").Mode,l=c("./less_highlight_rules").LessHighlightRules,d=c("./matching_brace_outdent").MatchingBraceOutdent,e=c("./behaviour/css").CssBehaviour,i=c("./css_completions").CssCompletions,t=c("./folding/cstyle").FoldMode,r=function(){this.HighlightRules=l,this.$outdent=new d,this.$behaviour=new e,this.$completer=new i,this.foldingRules=new t};p.inherits(r,h),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(o,n,a){var s=this.$getIndent(n),u=this.getTokenizer().getLineTokens(n,o).tokens;if(u.length&&u[u.length-1].type=="comment")return s;var m=n.match(/^.*\{\s*$/);return m&&(s+=a),s},this.checkOutdent=function(o,n,a){return this.$outdent.checkOutdent(n,a)},this.autoOutdent=function(o,n,a){this.$outdent.autoOutdent(n,a)},this.getCompletions=function(o,n,a,s){return this.$completer.getCompletions("ruleset",n,a,s)},this.$id="ace/mode/less"}.call(r.prototype),g.Mode=r}),function(){ace.require(["ace/mode/less"],function(c){b&&(b.exports=c)})}()}}]);