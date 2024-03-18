(self.webpackChunk=self.webpackChunk||[]).push([[3943],{73943:function(p,x,k){p=k.nmd(p),ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,h,R){"use strict";var u=o("../lib/oop"),g=o("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},s.getTagRule(),{defaultToken:"comment.doc",caseInsensitive:!0}]}};u.inherits(s,g),s.getTagRule=function(d){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},s.getStartRule=function(d){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:d}},s.getEndRule=function(d){return{token:"comment.doc",regex:"\\*\\/",next:d}},h.DocCommentHighlightRules=s}),ace.define("ace/mode/asl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(o,h,R){"use strict";var u=o("../lib/oop"),g=o("./doc_comment_highlight_rules").DocCommentHighlightRules,s=o("./text_highlight_rules").TextHighlightRules,d=function(){var e="Default|DefinitionBlock|Device|Method|Else|ElseIf|For|Function|If|Include|Method|Return|Scope|Switch|Case|While|Break|BreakPoint|Continue|NoOp|Wait|True|False|AccessAs|Acquire|Alias|BankField|Buffer|Concatenate|ConcatenateResTemplate|CondRefOf|Connection|CopyObject|CreateBitField|CreateByteField|CreateDWordField|CreateField|CreateQWordField|CreateWordField|DataTableRegion|Debug|DMA|DWordIO|DWordMemory|DWordSpace|EisaId|EISAID|EndDependentFn|Event|ExtendedIO|ExtendedMemory|ExtendedSpace|External|Fatal|Field|FindSetLeftBit|FindSetRightBit|FixedDMA|FixedIO|Fprintf|FromBCD|GpioInt|GpioIo|I2CSerialBusV2|IndexField|Interrupt|IO|IRQ|IRQNoFlags|Load|LoadTable|Match|Memory32|Memory32Fixed|Mid|Mutex|Name|Notify|Offset|ObjectType|OperationRegion|Package|PowerResource|Printf|QWordIO|QWordMemory|QWordSpace|RawDataBuffer|Register|Release|Reset|ResourceTemplate|Signal|SizeOf|Sleep|SPISerialBusV2|Stall|StartDependentFn|StartDependentFnNoPri|Store|ThermalZone|Timer|ToBCD|ToBuffer|ToDecimalString|ToInteger|ToPLD|ToString|ToUUID|UARTSerialBusV2|Unicode|Unload|VendorLong|VendorShort|WordBusNumber|WordIO|WordSpace",t="Add|And|Decrement|Divide|Increment|Index|LAnd|LEqual|LGreater|LGreaterEqual|LLess|LLessEqual|LNot|LNotEqual|LOr|Mod|Multiply|NAnd|NOr|Not|Or|RefOf|Revision|ShiftLeft|ShiftRight|Subtract|XOr|DerefOf",r="AttribQuick|AttribSendReceive|AttribByte|AttribBytes|AttribRawBytes|AttribRawProcessBytes|AttribWord|AttribBlock|AttribProcessCall|AttribBlockProcessCall|AnyAcc|ByteAcc|WordAcc|DWordAcc|QWordAcc|BufferAcc|AddressRangeMemory|AddressRangeReserved|AddressRangeNVS|AddressRangeACPI|RegionSpaceKeyword|FFixedHW|PCC|AddressingMode7Bit|AddressingMode10Bit|DataBitsFive|DataBitsSix|DataBitsSeven|DataBitsEight|DataBitsNine|BusMaster|NotBusMaster|ClockPhaseFirst|ClockPhaseSecond|ClockPolarityLow|ClockPolarityHigh|SubDecode|PosDecode|BigEndianing|LittleEndian|FlowControlNone|FlowControlXon|FlowControlHardware|Edge|Level|ActiveHigh|ActiveLow|ActiveBoth|Decode16|Decode10|IoRestrictionNone|IoRestrictionInputOnly|IoRestrictionOutputOnly|IoRestrictionNoneAndPreserve|Lock|NoLock|MTR|MEQ|MLE|MLT|MGE|MGT|MaxFixed|MaxNotFixed|Cacheable|WriteCombining|Prefetchable|NonCacheable|MinFixed|MinNotFixed|ParityTypeNone|ParityTypeSpace|ParityTypeMark|ParityTypeOdd|ParityTypeEven|PullDefault|PullUp|PullDown|PullNone|PolarityHigh|PolarityLow|ISAOnlyRanges|NonISAOnlyRanges|EntireRange|ReadWrite|ReadOnly|UserDefRegionSpace|SystemIO|SystemMemory|PCI_Config|EmbeddedControl|SMBus|SystemCMOS|PciBarTarget|IPMI|GeneralPurposeIO|GenericSerialBus|ResourceConsumer|ResourceProducer|Serialized|NotSerialized|Shared|Exclusive|SharedAndWake|ExclusiveAndWake|ControllerInitiated|DeviceInitiated|StopBitsZero|StopBitsOne|StopBitsOnePlusHalf|StopBitsTwo|Width8Bit|Width16Bit|Width32Bit|Width64Bit|Width128Bit|Width256Bit|SparseTranslation|DenseTranslation|TypeTranslation|TypeStatic|Preserve|WriteAsOnes|WriteAsZeros|Transfer8|Transfer16|Transfer8_16|ThreeWireMode|FourWireMode",a="UnknownObj|IntObj|StrObj|BuffObj|PkgObj|FieldUnitObj|DeviceObj|EventObj|MethodObj|MutexObj|OpRegionObj|PowerResObj|ProcessorObj|ThermalZoneObj|BuffFieldObj|DDBHandleObj",n="__FILE__|__PATH__|__LINE__|__DATE__|__IASL__",c="One|Ones|Zero",l="Memory24|Processor",i=this.createKeywordMapper({keyword:e,"constant.numeric":c,"keyword.operator":t,"constant.language":n,"storage.type":a,"constant.library":r,"invalid.deprecated":l},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},g.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},g.getStartRule("doc-start"),{token:"comment",regex:"\\[",next:"ignoredfield"},{token:"variable",regex:"\\Local[0-7]|\\Arg[0-6]"},{token:"keyword",regex:"#\\s*(?:define|elif|else|endif|error|if|ifdef|ifndef|include|includebuffer|line|pragma|undef|warning)\\b",next:"directive"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"constant.character",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:/0[xX][0-9a-fA-F]+\b/},{token:"constant.numeric",regex:/[0-9]+\b/},{token:i,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:/[!\~\*\/%+-<>\^|=&]/},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],ignoredfield:[{token:"comment",regex:"\\]",next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>*s",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]*s',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(g,"doc-",[g.getEndRule("start")])};u.inherits(d,s),h.ASLHighlightRules=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(o,h,R){"use strict";var u=o("../../lib/oop"),g=o("../../range").Range,s=o("./fold_mode").FoldMode,d=h.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};u.inherits(d,s),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,r){var a=e.getLine(r);if(this.singleLineBlockCommentRe.test(a)&&!this.startRegionRe.test(a)&&!this.tripleStarBlockCommentRe.test(a))return"";var n=this._getFoldWidgetBase(e,t,r);return!n&&this.startRegionRe.test(a)?"start":n},this.getFoldWidgetRange=function(e,t,r,a){var n=e.getLine(r);if(this.startRegionRe.test(n))return this.getCommentRegionBlock(e,n,r);var i=n.match(this.foldingStartMarker);if(i){var c=i.index;if(i[1])return this.openingBracketBlock(e,i[1],r,c);var l=e.getCommentFoldRange(r,c+i[0].length,1);return l&&!l.isMultiLine()&&(a?l=this.getSectionRange(e,r):t!="all"&&(l=null)),l}if(t!=="markbegin"){var i=n.match(this.foldingStopMarker);if(i){var c=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],r,c):e.getCommentFoldRange(r,c,-1)}}},this.getSectionRange=function(e,t){var r=e.getLine(t),a=r.search(/\S/),n=t,c=r.length;t=t+1;for(var l=t,i=e.getLength();++t<i;){r=e.getLine(t);var m=r.search(/\S/);if(m!==-1){if(a>m)break;var f=this.getFoldWidgetRange(e,"all",t);if(f){if(f.start.row<=n)break;if(f.isMultiLine())t=f.end.row;else if(a==m)break}l=t}}return new g(n,c,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,r){for(var a=t.search(/\s*$/),n=e.getLength(),c=r,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,i=1;++r<n;){t=e.getLine(r);var m=l.exec(t);if(m&&(m[1]?i--:i++,!i))break}var f=r;if(f>c)return new g(c,a,f,t.length)}}.call(d.prototype)}),ace.define("ace/mode/asl",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/asl_highlight_rules","ace/mode/folding/cstyle"],function(o,h,R){"use strict";var u=o("../lib/oop"),g=o("./text").Mode,s=o("./asl_highlight_rules").ASLHighlightRules,d=o("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=s,this.foldingRules=new d,this.$behaviour=this.$defaultBehaviour};u.inherits(e,g),function(){this.$id="ace/mode/asl"}.call(e.prototype),h.Mode=e}),function(){ace.require(["ace/mode/asl"],function(o){p&&(p.exports=o)})}()}}]);
