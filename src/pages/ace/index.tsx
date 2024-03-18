import styles from './index.less';
import useData from './hook';
import { FC } from 'react';
import { Button, Col, Form, Modal, Row, Select, Switch } from '@douyinfe/semi-ui';
import EditorSQL from './components/editor-sql';

const language_list = [
  { value: 'sql', label: 'Sql', otherKey: 0 },
  { value: 'shell', label: 'Shell', otherKey: 1 },
  { value: 'python', label: 'Python', otherKey: 2 },
  { value: 'text', label: 'Text', otherKey: 3 },
];
const theme_list = [
  { value: 'tomorrow', label: '默认亮', otherKey: 0 },
  { value: 'tomorrow_night', label: '默认黑', otherKey: 1 },
  // { value: 'tant-sql-light', label: '自定义亮', otherKey: 4 },
  // { value: 'tant-sql-black', label: '自定义黑', otherKey: 5 },
];

const Index: FC = () => {
  const {
    mode, theme, debug, completion,
    handleModeChange, handleFormat, handleThemeChange, handleValueChange, handleSelectionChange,
    handleDebugChange, handleCompletionChange, handleTextRender,
    total, col, row, tab, selectionNum, value, locale, showFormat, widget,
    formRef, aceRef,
    // handleValueChange, handleInsert, handleAction,
  } = useData();
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <EditorSQL
          className={styles.editor}
          value={value}
          ref={aceRef}
          theme={theme as any}
          onValueChange={handleValueChange}
          onSelectionChange={handleSelectionChange}
          runWidget={{
            show: debug,
            render: (str: string) => <Button onClick={() => {
              Modal.confirm({
                title: '将执行以下语句',
                content: str,
              })
            }}>调试</Button>
          }}
          textRender={handleTextRender}
          onCompletionsChange={completion ? () => [
            // 这里是你想要提供自动补全的词汇列表
            { value: 'USER_INFO', score: 1000, meta: '表' },
            { value: 'id', score: 1000, meta: '字段' },
          ] : undefined}
        />
      </div>
      <div className={styles.tool}>
        <Row>
          <Col span={6}>编程语言</Col>
          <Col span={18}>
            <Select value={mode} onChange={handleModeChange} optionList={language_list} style={{ width: '100%' }} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={6}>主题</Col>
          <Col span={18}>
            <Select value={theme} onChange={handleThemeChange} optionList={theme_list} style={{ width: '100%' }} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={6}>开启调试</Col>
          <Col span={18}>
            <Switch checked={debug} onChange={handleDebugChange} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={6}>开启自动补全</Col>
          <Col span={18}>
            <Switch checked={completion} onChange={handleCompletionChange} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={6}>格式化</Col>
          <Col span={18}>
            <Button onClick={handleFormat}>点击格式化</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={6}>总字数</Col>
          <Col span={18}>
            {total} {selectionNum ? `(已选择：${selectionNum})` : ''}
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={6}>当前位置</Col>
          <Col span={18}>
            行 {row}，列 {col}
          </Col>
        </Row>
        <br/>
        <Form
          labelPosition="left"
          labelWidth="120px"
        >
          {/* <Form.Switch field='code' label='代码补全' disabled />
          <Form.Switch field='widget' label='代码选择运行' /> */}
          {/* <Form.Input field='insert' label='光标插入' addonAfter={<Button type="primary" onClick={handleInsert}>插入</Button>} /> */}
          {/* <div className={styles.info2}>
            总字数：{total} {selectionNum ? `(已选择：${selectionNum})` : ''}
          </div>
          <div className={styles.info} onClick={() => handleAction('gotoLine')}>
            当前位置：行 {row}，列 {col}
          </div>
          <div className={styles.info} onClick={() => handleAction('changeTabDisplaySize')}>
            空格：{tab}
          </div> */}
        </Form>
      </div>
    </div>
  );
};

export default Index;