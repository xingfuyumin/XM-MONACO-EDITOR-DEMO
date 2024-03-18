(self.webpackChunk=self.webpackChunk||[]).push([[359],{80359:function(R,m,S){R=S.nmd(R),ace.define("ace/mode/pig_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,u,f){"use strict";var h=n("../lib/oop"),d=n("./text_highlight_rules").TextHighlightRules,l=function(){this.$rules={start:[{token:"comment.block.pig",regex:/\/\*/,push:[{token:"comment.block.pig",regex:/\*\//,next:"pop"},{defaultToken:"comment.block.pig"}]},{token:"comment.line.double-dash.asciidoc",regex:/--.*$/},{token:"keyword.control.pig",regex:/\b(?:ASSERT|LOAD|STORE|DUMP|FILTER|DISTINCT|FOREACH|GENERATE|STREAM|JOIN|COGROUP|GROUP|CROSS|ORDER|LIMIT|UNION|SPLIT|DESCRIBE|EXPLAIN|ILLUSTRATE|AS|BY|INTO|USING|LIMIT|PARALLEL|OUTER|INNER|DEFAULT|LEFT|SAMPLE|RANK|CUBE|ALL|KILL|QUIT|MAPREDUCE|ASC|DESC|THROUGH|SHIP|CACHE|DECLARE|CASE|WHEN|THEN|END|IN|PARTITION|FULL|IMPORT|IF|ONSCHEMA|INPUT|OUTPUT)\b/,caseInsensitive:!0},{token:"storage.datatypes.pig",regex:/\b(?:int|long|float|double|chararray|bytearray|boolean|datetime|biginteger|bigdecimal|tuple|bag|map)\b/,caseInsensitive:!0},{token:"support.function.storage.pig",regex:/\b(?:PigStorage|BinStorage|BinaryStorage|PigDump|HBaseStorage|JsonLoader|JsonStorage|AvroStorage|TextLoader|PigStreaming|TrevniStorage|AccumuloStorage)\b/},{token:"support.function.udf.pig",regex:/\b(?:DIFF|TOBAG|TOMAP|TOP|TOTUPLE|RANDOM|FLATTEN|flatten|CUBE|ROLLUP|IsEmpty|ARITY|PluckTuple|SUBTRACT|BagToString)\b/},{token:"support.function.udf.math.pig",regex:/\b(?:ABS|ACOS|ASIN|ATAN|CBRT|CEIL|COS|COSH|EXP|FLOOR|LOG|LOG10|ROUND|ROUND_TO|SIN|SINH|SQRT|TAN|TANH|AVG|COUNT|COUNT_STAR|MAX|MIN|SUM|COR|COV)\b/},{token:"support.function.udf.string.pig",regex:/\b(?:CONCAT|INDEXOF|LAST_INDEX_OF|LCFIRST|LOWER|REGEX_EXTRACT|REGEX_EXTRACT_ALL|REPLACE|SIZE|STRSPLIT|SUBSTRING|TOKENIZE|TRIM|UCFIRST|UPPER|LTRIM|RTRIM|ENDSWITH|STARTSWITH|TRIM)\b/},{token:"support.function.udf.datetime.pig",regex:/\b(?:AddDuration|CurrentTime|DaysBetween|GetDay|GetHour|GetMilliSecond|GetMinute|GetMonth|GetSecond|GetWeek|GetWeekYear|GetYear|HoursBetween|MilliSecondsBetween|MinutesBetween|MonthsBetween|SecondsBetween|SubtractDuration|ToDate|WeeksBetween|YearsBetween|ToMilliSeconds|ToString|ToUnixTime)\b/},{token:"support.function.command.pig",regex:/\b(?:cat|cd|copyFromLocal|copyToLocal|cp|ls|mkdir|mv|pwd|rm)\b/},{token:"variable.pig",regex:/\$[a_zA-Z0-9_]+/},{token:"constant.language.pig",regex:/\b(?:NULL|true|false|stdin|stdout|stderr)\b/,caseInsensitive:!0},{token:"constant.numeric.pig",regex:/\b\d+(?:\.\d+)?\b/},{token:"keyword.operator.comparison.pig",regex:/!=|==|<|>|<=|>=|\b(?:MATCHES|IS|OR|AND|NOT)\b/,caseInsensitive:!0},{token:"keyword.operator.arithmetic.pig",regex:/\+|\-|\*|\/|\%|\?|:|::|\.\.|#/},{token:"string.quoted.double.pig",regex:/"/,push:[{token:"string.quoted.double.pig",regex:/"/,next:"pop"},{token:"constant.character.escape.pig",regex:/\\./},{defaultToken:"string.quoted.double.pig"}]},{token:"string.quoted.single.pig",regex:/'/,push:[{token:"string.quoted.single.pig",regex:/'/,next:"pop"},{token:"constant.character.escape.pig",regex:/\\./},{defaultToken:"string.quoted.single.pig"}]},{todo:{token:["text","keyword.parameter.pig","text","storage.type.parameter.pig"],regex:/^(\s*)(set)(\s+)(\S+)/,caseInsensitive:!0,push:[{token:"text",regex:/$/,next:"pop"},{include:"$self"}]}},{token:["text","keyword.alias.pig","text","storage.type.alias.pig"],regex:/(\s*)(DEFINE|DECLARE|REGISTER)(\s+)(\S+)/,caseInsensitive:!0,push:[{token:"text",regex:/;?$/,next:"pop"}]}]},this.normalizeRules()};l.metaData={fileTypes:["pig"],name:"Pig",scopeName:"source.pig"},h.inherits(l,d),u.PigHighlightRules=l}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,u,f){"use strict";var h=n("../../lib/oop"),d=n("../../range").Range,l=n("./fold_mode").FoldMode,T=u.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};h.inherits(T,l),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var a=e.getLine(i);if(this.singleLineBlockCommentRe.test(a)&&!this.startRegionRe.test(a)&&!this.tripleStarBlockCommentRe.test(a))return"";var r=this._getFoldWidgetBase(e,t,i);return!r&&this.startRegionRe.test(a)?"start":r},this.getFoldWidgetRange=function(e,t,i,a){var r=e.getLine(i);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,i);var o=r.match(this.foldingStartMarker);if(o){var s=o.index;if(o[1])return this.openingBracketBlock(e,o[1],i,s);var g=e.getCommentFoldRange(i,s+o[0].length,1);return g&&!g.isMultiLine()&&(a?g=this.getSectionRange(e,i):t!="all"&&(g=null)),g}if(t!=="markbegin"){var o=r.match(this.foldingStopMarker);if(o){var s=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],i,s):e.getCommentFoldRange(i,s,-1)}}},this.getSectionRange=function(e,t){var i=e.getLine(t),a=i.search(/\S/),r=t,s=i.length;t=t+1;for(var g=t,o=e.getLength();++t<o;){i=e.getLine(t);var p=i.search(/\S/);if(p!==-1){if(a>p)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=r)break;if(c.isMultiLine())t=c.end.row;else if(a==p)break}g=t}}return new d(r,s,g,e.getLine(g).length)},this.getCommentRegionBlock=function(e,t,i){for(var a=t.search(/\s*$/),r=e.getLength(),s=i,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++i<r;){t=e.getLine(i);var p=g.exec(t);if(p&&(p[1]?o--:o++,!o))break}var c=i;if(c>s)return new d(s,a,c,t.length)}}.call(T.prototype)}),ace.define("ace/mode/pig",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/pig_highlight_rules","ace/mode/folding/cstyle"],function(n,u,f){"use strict";var h=n("../lib/oop"),d=n("./text").Mode,l=n("./pig_highlight_rules").PigHighlightRules,T=n("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=l,this.foldingRules=new T};h.inherits(e,d),function(){this.lineCommentStart="--",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/pig"}.call(e.prototype),u.Mode=e}),function(){ace.require(["ace/mode/pig"],function(n){R&&(R.exports=n)})}()}}]);
