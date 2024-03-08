import styles from './index.less';
import useData from './hook';
import { FC } from 'react';
import { Form } from '@douyinfe/semi-ui';
import React from 'react';
import { Button } from 'antd';

const language_list = [
  { value: 'sql', label: 'Sql', otherKey: 0 },
  { value: 'shell', label: 'Shell', otherKey: 1 },
];
const theme_list = [
  { value: 'vs', label: '默认亮', otherKey: 0 },
  { value: 'vs-dark', label: '默认黑', otherKey: 1 },
  { value: 'hc-light', label: '高对比亮', otherKey: 2 },
  { value: 'hc-black', label: '高对比黑', otherKey: 3 },
  { value: 'de-light', label: '自定义亮', otherKey: 4 },
  { value: 'de-black', label: '自定义黑', otherKey: 5 },
];

const Index: FC = () => {
  const {
    continerRef, formRef,
    handleValueChange, handleInsert,
  } = useData();
  return (
    <div className={styles.root}>
      <div className={styles.editor} ref={continerRef}></div>
      <div className={styles.tool}>
        <Form labelPosition="left" labelWidth="120px" ref={formRef} onValueChange={handleValueChange}>
          <Form.Select field='language' label='编程语言' optionList={language_list} style={{ width: '100%' }} />
          <Form.Switch field='showMinMap' label='展示小地图' />
          <Form.Switch field='showFormat' label='展示格式化菜单' />
          <Form.Select field='theme' label='主题' optionList={theme_list} style={{ width: '100%' }} />
          <Form.Switch field='code' label='代码补全' disabled/>
          <Form.Input field='insert' label='光标插入' addonAfter={<Button type="primary" onClick={handleInsert}>插入</Button>}/>
        </Form>
      </div>
    </div>
  );
};

export default Index;