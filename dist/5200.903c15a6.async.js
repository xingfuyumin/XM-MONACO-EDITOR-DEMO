(self.webpackChunk=self.webpackChunk||[]).push([[5200],{35200:function(o,l,c){o=c.nmd(o),ace.define("ace/mode/gcode_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,r,s){"use strict";var n=e("../lib/oop"),a=e("./text_highlight_rules").TextHighlightRules,i=function(){var g="IF|DO|WHILE|ENDWHILE|CALL|ENDIF|SUB|ENDSUB|GOTO|REPEAT|ENDREPEAT|CALL",t="PI",h="ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN",u=this.createKeywordMapper({"support.function":h,keyword:g,"constant.language":t},"identifier",!0);this.$rules={start:[{token:"comment",regex:"\\(.*\\)"},{token:"comment",regex:"([N])([0-9]+)"},{token:"string",regex:"([G])([0-9]+\\.?[0-9]?)"},{token:"string",regex:"([M])([0-9]+\\.?[0-9]?)"},{token:"constant.numeric",regex:"([-+]?([0-9]*\\.?[0-9]+\\.?))|(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"},{token:u,regex:"[A-Z]"},{token:"keyword.operator",regex:"EQ|LT|GT|NE|GE|LE|OR|XOR"},{token:"paren.lparen",regex:"[\\[]"},{token:"paren.rparen",regex:"[\\]]"},{token:"text",regex:"\\s+"}]}};n.inherits(i,a),r.GcodeHighlightRules=i}),ace.define("ace/mode/gcode",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/gcode_highlight_rules","ace/range"],function(e,r,s){"use strict";var n=e("../lib/oop"),a=e("./text").Mode,i=e("./gcode_highlight_rules").GcodeHighlightRules,g=e("../range").Range,t=function(){this.HighlightRules=i,this.$behaviour=this.$defaultBehaviour};n.inherits(t,a),function(){this.$id="ace/mode/gcode"}.call(t.prototype),r.Mode=t}),function(){ace.require(["ace/mode/gcode"],function(e){o&&(o.exports=e)})}()}}]);