import styles from './index.less';
import useData from './hook';
import { FC } from 'react';
import { Button, Form, Modal } from '@douyinfe/semi-ui';
import MonacoEditorSQL from '../components/monaco-editor-sql';
import { MONACO_EDITOR_LOCALE } from '@/components/monaco-editor-rc/props';

const language_list = [
  { value: 'sql', label: 'Sql', otherKey: 0 },
  { value: 'shell', label: 'Shell', otherKey: 1 },
];
const theme_list = [
  { value: 'vs', label: '默认亮', otherKey: 0 },
  { value: 'vs-dark', label: '默认黑', otherKey: 1 },
  { value: 'hc-light', label: '高对比亮', otherKey: 2 },
  { value: 'hc-black', label: '高对比黑', otherKey: 3 },
  { value: 'tant-sql-light', label: '自定义亮', otherKey: 4 },
  { value: 'tant-sql-black', label: '自定义黑', otherKey: 5 },
];
const locale_list = [
  { value: 'zh-CN', label: '中文', otherKey: 0 },
  { value: 'en-US', label: '英文', otherKey: 1 },
  { value: 'ko-KR', label: '韩文', otherKey: 2 },
  { value: 'ja-JP', label: '日文', otherKey: 3 },
];

const Index: FC = () => {
  const {
    total, col, row, tab, selectionNum, value, locale, showFormat, theme, widget,
    formRef, monacoRef,
    handleValueChange, handleInsert, handleAction,
  } = useData();
  return (
    <div className={styles.root}>
      <div className={styles.container}>
      <MonacoEditorSQL
        className={styles.editor}
        value={value}
        ref={monacoRef}
        locale={locale as MONACO_EDITOR_LOCALE}
        formatter={showFormat}
        runWidget={widget}
        runWidgetRender={(sql: string) => <Button onClick={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
          Modal.confirm({
            title: '将执行以下语句',
            content: sql,
          })
        }} >执行</Button>}
        options={{
          theme,
        } as any}
      />
      {/* <MonacoEditorSQL
        className={styles.editor}
        value={value}
        language='shell'
        locale={locale as MONACO_EDITOR_LOCALE}
        options={{
          theme,
        } as any}
      /> */}
      </div>
      <div className={styles.tool}>
        <Form
          labelPosition="left"
          labelWidth="120px"
          ref={formRef}
          onValueChange={handleValueChange}
          initValues={{
            language: 'sql',
            showMinMap: true,
            showFormat: true,
            theme: 'vs',
            code: true,
            insert: '我是要插入的内容',
            selection: '',
            locale: 'zh-CN',
            widget: true,
          }}
        >
          <Form.Select field='language' label='编程语言' optionList={language_list} style={{ width: '100%' }} />
          <Form.Select field='locale' label='编辑器语言' optionList={locale_list} style={{ width: '100%' }} />
          <Form.Switch field='showMinMap' label='展示小地图' />
          <Form.Switch field='showFormat' label='展示格式化菜单' />
          <Form.Select field='theme' label='主题' optionList={theme_list} style={{ width: '100%' }} />
          <Form.Switch field='code' label='代码补全' disabled />
          <Form.Switch field='widget' label='代码选择运行' />
          <Form.Input field='insert' label='光标插入' addonAfter={<Button type="primary" onClick={handleInsert}>插入</Button>} />
          <div className={styles.info2}>
            总字数：{total} {selectionNum ? `(已选择：${selectionNum})` : ''}
          </div>
          <div className={styles.info} onClick={() => handleAction('gotoLine')}>
            当前位置：行 {row}，列 {col}
          </div>
          <div className={styles.info} onClick={() => handleAction('changeTabDisplaySize')}>
            空格：{tab}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Index;