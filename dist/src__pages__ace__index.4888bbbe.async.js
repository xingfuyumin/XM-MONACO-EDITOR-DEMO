"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8570,3105,1622],{44749:function(R,u,r){r.r(u);var i=r(157),d=r.n(i),n=r(19058),p=r.n(n),e=r(68136),m=r(46858),C=r(24798),h=r(33130),g={tab:0,row:1,col:1,total:0,selectionNum:0,value:'SELECT "$part_event","$part_date","#user_id","#event_name","#event_time","#account_id","#distinct_id","#server_time","platform","logintime","channel","#zone_offset","#lib","#lib_version","level","firstlogintime","systemversion","shoptype","consumegoldcoins","entertime","firstbuyitemtime","iswin","firstentertime","combattime","rehcargecount","logouttime","firstrechargetime","rechagelibao","#data_source","#os","#ip","#ram","#screen_height","#system_language","#device_model","#network_type","#city","#disk","#carrier","test01","#country_code","#device_id","#province","#bundle_id","#screen_width","#install_time","#simulator","#country","#fps","#manufacturer","#app_version","#os_version","click","istest","properties","isfirstbuy","product_num","product_name","#element_type","#screen_name","#resume_from_background","#background_duration","pay_currency_type","activity_reward","reward_amount","object_list","interest","temperature","micro_decimal","device_id","luky_day","attend_progress","is_fine","inteset_arrray_string","serial_no","object","cost","card_list","diamond_amount","draw_type","cost_type","item_list","battle_id","enter_time","url","cost_amount","special_char","long_english","mix_list","json_string","duration","is_max_battle","is_first_pay","pay_amount","currency_type","payment_name","long_mixed","lib","app_version","device_type","manufacturer","network","screen_height","browser","model","browser_version","brand","carrier_name","screen_width","os","os_version","ip","serverid","vip_level","city","listtest","metric_events","#ops_receipt_properties","bool","mark","dict","row","card_id","b","batchno","id","version","subversion","request","request_method","request_url","result_detail","result","repect_result","header","updatetime","last_time","stamp","level_before","reason","gold_get_amount","gold_change_after","gold_change_before","hero_type","hero_id","hero_quality","diamond_get_amount","online_time","te_ads_object","gxy001","gxy_a_1","currency",split("buyitems",chr(0009)) AS "buyitems" FROM  ta.v_event_11 WHERE ${PartDate:date1} and ${Variable2} and ${PartDate:date3} and ${Number:number4} and ${Selector:selector5} ',mode:"sql",showMinMap:!0,showFormat:!0,theme:"tomorrow",code:!0,insert:"\u6211\u662F\u8981\u63D2\u5165\u7684\u5185\u5BB9",selection:"",locale:"zh-CN",debug:!0,completion:!1};u.default=function(){var O=(0,C.Z)(d()(d()({},g),{},{total:g.value.length})),t=p()(O,2),b=t[0],o=t[1],c=(0,e.useRef)({}),v=function(a,F,_,P){if(_.type==="tant-variable"){var s=_.value.slice(2);return s=s.slice(0,s.length-1),(0,h.jsx)(m.zx,{size:"small",children:s})}return _.value==="v_event_11"?(0,h.jsx)(m.u,{content:"\u6211\u662F\u4E00\u5F20\u65E0\u6BD4\u8BA8\u538C\u7684\u8868",children:(0,h.jsx)("div",{style:{cursor:"pointer",color:"red"},children:_.value})}):null},f=function(a){o({mode:a})},x=function(){var a;(a=c.current.editor)===null||a===void 0||a.format()},j=function(a){o({theme:a})},y=function(a){o({total:a.getValue().length})},E=function(a){o({selectionNum:a.getSelectedText().length||0,col:a.getCursorPosition().column,row:a.getCursorPosition().row})},D=function(a){o({completion:a})},M=function(a){o({debug:a})};return d()({aceRef:c,handleModeChange:f,handleFormat:x,handleThemeChange:j,handleValueChange:y,handleSelectionChange:E,handleDebugChange:M,handleCompletionChange:D,handleTextRender:v},b)}},65523:function(R,u,r){r.r(u),r.d(u,{default:function(){return g}});var i={root:"root___Fw2jA",editor:"editor___SPPnK",container:"container___YOsCX",tool:"tool___jBv93",info:"info___EoFQG",info2:"info2___o2PF9"},d=r(44749),n=r(46858),p=r(5479),e=r(33130),m=[{value:"sql",label:"Sql",otherKey:0},{value:"shell",label:"Shell",otherKey:1},{value:"python",label:"Python",otherKey:2},{value:"text",label:"Text",otherKey:3}],C=[{value:"tomorrow",label:"\u9ED8\u8BA4\u4EAE",otherKey:0},{value:"tomorrow_night",label:"\u9ED8\u8BA4\u9ED1",otherKey:1}],h=function(){var t=(0,d.default)(),b=t.mode,o=t.theme,c=t.debug,v=t.completion,f=t.handleModeChange,x=t.handleFormat,j=t.handleThemeChange,y=t.handleValueChange,E=t.handleSelectionChange,D=t.handleDebugChange,M=t.handleCompletionChange,l=t.handleTextRender,a=t.total,F=t.col,_=t.row,P=t.tab,s=t.selectionNum,T=t.value,S=t.locale,B=t.showFormat,w=t.widget,I=t.formRef,X=t.aceRef;return(0,e.jsxs)("div",{className:i.root,children:[(0,e.jsx)("div",{className:i.container,children:(0,e.jsx)(p.default,{className:i.editor,value:T,ref:X,theme:o,onValueChange:y,onSelectionChange:E,runWidget:{show:c,render:function(A){return(0,e.jsx)(n.zx,{onClick:function(){n.u_.confirm({title:"\u5C06\u6267\u884C\u4EE5\u4E0B\u8BED\u53E5",content:A})},children:"\u8C03\u8BD5"})}},textRender:l,onCompletionsChange:v?function(){return[{value:"USER_INFO",score:1e3,meta:"\u8868"},{value:"id",score:1e3,meta:"\u5B57\u6BB5"}]}:void 0})}),(0,e.jsxs)("div",{className:i.tool,children:[(0,e.jsxs)(n.X2,{children:[(0,e.jsx)(n.JX,{span:6,children:"\u7F16\u7A0B\u8BED\u8A00"}),(0,e.jsx)(n.JX,{span:18,children:(0,e.jsx)(n.Ph,{value:b,onChange:f,optionList:m,style:{width:"100%"}})})]}),(0,e.jsx)("br",{}),(0,e.jsxs)(n.X2,{children:[(0,e.jsx)(n.JX,{span:6,children:"\u4E3B\u9898"}),(0,e.jsx)(n.JX,{span:18,children:(0,e.jsx)(n.Ph,{value:o,onChange:j,optionList:C,style:{width:"100%"}})})]}),(0,e.jsx)("br",{}),(0,e.jsxs)(n.X2,{children:[(0,e.jsx)(n.JX,{span:6,children:"\u5F00\u542F\u8C03\u8BD5"}),(0,e.jsx)(n.JX,{span:18,children:(0,e.jsx)(n.rs,{checked:c,onChange:D})})]}),(0,e.jsx)("br",{}),(0,e.jsxs)(n.X2,{children:[(0,e.jsx)(n.JX,{span:6,children:"\u5F00\u542F\u81EA\u52A8\u8865\u5168"}),(0,e.jsx)(n.JX,{span:18,children:(0,e.jsx)(n.rs,{checked:v,onChange:M})})]}),(0,e.jsx)("br",{}),(0,e.jsxs)(n.X2,{children:[(0,e.jsx)(n.JX,{span:6,children:"\u683C\u5F0F\u5316"}),(0,e.jsx)(n.JX,{span:18,children:(0,e.jsx)(n.zx,{onClick:x,children:"\u70B9\u51FB\u683C\u5F0F\u5316"})})]}),(0,e.jsx)("br",{}),(0,e.jsxs)(n.X2,{children:[(0,e.jsx)(n.JX,{span:6,children:"\u603B\u5B57\u6570"}),(0,e.jsxs)(n.JX,{span:18,children:[a," ",s?"(\u5DF2\u9009\u62E9\uFF1A".concat(s,")"):""]})]}),(0,e.jsx)("br",{}),(0,e.jsxs)(n.X2,{children:[(0,e.jsx)(n.JX,{span:6,children:"\u5F53\u524D\u4F4D\u7F6E"}),(0,e.jsxs)(n.JX,{span:18,children:["\u884C ",_,"\uFF0C\u5217 ",F]})]}),(0,e.jsx)("br",{}),(0,e.jsx)(n.l0,{labelPosition:"left",labelWidth:"120px"})]})]})},g=h}}]);
