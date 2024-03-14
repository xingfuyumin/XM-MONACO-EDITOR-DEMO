
import { useEffect, useRef } from 'react';
import { Form } from '@douyinfe/semi-ui';
import { useSetState } from 'ahooks';
import { cloneDeepWith } from 'lodash';
import { MONACO_EDITOR_REF } from '@/components/monaco-editor-rc/props';


type State = {
  tab: number,
  row: number,
  col: number,
  total: number,
  selectionNum: number,
  value: string;
  language: string,
  showMinMap: boolean,
  showFormat: boolean,
  theme: string,
  code: boolean,
  insert: string,
  selection: string,
  locale: string
  widget: boolean,
}
const defaultState: State = {
  tab: 0,
  row: 1,
  col: 1,
  total: 0,
  selectionNum: 0,
  value: 'SELECT "$part_event","$part_date","#user_id","#event_name","#event_time","#account_id","#distinct_id","#server_time","platform","logintime","channel","#zone_offset","#lib","#lib_version","level","firstlogintime","systemversion","shoptype","consumegoldcoins","entertime","firstbuyitemtime","iswin","firstentertime","combattime","rehcargecount","logouttime","firstrechargetime","rechagelibao","#data_source","#os","#ip","#ram","#screen_height","#system_language","#device_model","#network_type","#city","#disk","#carrier","test01","#country_code","#device_id","#province","#bundle_id","#screen_width","#install_time","#simulator","#country","#fps","#manufacturer","#app_version","#os_version","click","istest","properties","isfirstbuy","product_num","product_name","#element_type","#screen_name","#resume_from_background","#background_duration","pay_currency_type","activity_reward","reward_amount","object_list","interest","temperature","micro_decimal","device_id","luky_day","attend_progress","is_fine","inteset_arrray_string","serial_no","object","cost","card_list","diamond_amount","draw_type","cost_type","item_list","battle_id","enter_time","url","cost_amount","special_char","long_english","mix_list","json_string","duration","is_max_battle","is_first_pay","pay_amount","currency_type","payment_name","long_mixed","lib","app_version","device_type","manufacturer","network","screen_height","browser","model","browser_version","brand","carrier_name","screen_width","os","os_version","ip","serverid","vip_level","city","listtest","metric_events","#ops_receipt_properties","bool","mark","dict","row","card_id","b","batchno","id","version","subversion","request","request_method","request_url","result_detail","result","repect_result","header","updatetime","last_time","stamp","level_before","reason","gold_get_amount","gold_change_after","gold_change_before","hero_type","hero_id","hero_quality","diamond_get_amount","online_time","te_ads_object","gxy001","gxy_a_1","currency",split("buyitems",chr(0009)) AS "buyitems" FROM  ta.v_event_11 WHERE ${PartDate:date1} and ${Variable2} and ${PartDate:date3} and ${Number:number4} and ${Selector:selector5} ',
  language: 'sql',
  showMinMap: true,
  showFormat: true,
  theme: 'vs',
  code: true,
  insert: '我是要插入的内容',
  selection: '',
  locale: 'zh-CN',
  widget: true,
}
export default () => {
  const [state, setState] = useSetState(cloneDeepWith(defaultState))
  const formRef = useRef<Form>(null);
  const monacoRef = useRef<MONACO_EDITOR_REF>({});
  const handleInsert = () => {
    const monaco = monacoRef.current.monaco;
    if (!monaco) {
      return;
    }
    const editor = monacoRef.current.editor;
    if (!editor) {
      return;
    }
    const str: string = formRef.current?.formApi.getValue('insert');
    const position = editor.getPosition() || { lineNumber: 1, column: 1 };
    const row = position?.lineNumber || 1;
    const col = position?.column || 1;
    editor.executeEdits('', [
      {
        range: new monaco.Range(row, col, row, col),
        text: str,
        forceMoveMarkers: true
      }
    ]);
  }
  const handleAction = (actionId: string) => {
    const editor = monacoRef.current.editor;
    if (!editor) {
      return;
    }
    editor.focus();
    editor.trigger('', `editor.action.${actionId}`, () => {})
  }
  const handleValueChange = (value: any, obj: any) => {
    setState({
      ...obj,
    });
  }
  return {
    formRef,
    monacoRef,
    handleValueChange,
    handleInsert,
    handleAction,
    ...state,
  };
}