import styles from './index.less';
import useData from './hook';
import { FC } from 'react';
import { Button, Col, Dropdown, Input, Row, Select, Switch, TextArea } from '@douyinfe/semi-ui';
// import TerminalRC from './components/terminal-rc';
import Terminal from './components/terminal-sh';
import { IconTreeTriangleDown } from '@douyinfe/semi-icons';

const theme_list = [
  { value: 'light', label: '自定义亮', otherKey: 0 },
  { value: 'dark', label: '默认黑', otherKey: 1 },
];

const Index: FC = () => {
  const {
    readonly, theme, inputPrefix, value, editValue, ref,
    handleReadonlyChange, handleThemeChange, handleInputPrefixChange, handleValueChange, handleEditValueChange,
  } = useData();
  const value_list = [
    { node: 'item', name: '插入红色文本', onClick: () => handleValueChange(1) },
    { node: 'item', name: '插入绿色文本', onClick: () => handleValueChange(2) },
    { node: 'item', name: '插入蓝色文本', onClick: () => handleValueChange(3) },
  ];
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Terminal
          className={styles.editor}
          value={value}
          theme={theme as any}
          readonly={readonly}
          inputPrefix={inputPrefix}
          ref={ref}
          onEnter={(str) => {
            ref.current?.add(`\n\r执行命令：${str}`);
          }}
        />
      </div>
      <div className={styles.tool}>
        <Row>
          <Col span={6}>只读模式</Col>
          <Col span={18}>
            <Switch checked={readonly} onChange={handleReadonlyChange} />
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
          <Col span={6}>输入前缀</Col>
          <Col span={18}>
            <Input value={inputPrefix} disabled={readonly} onChange={handleInputPrefixChange} style={{ width: '100%' }} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={6}>插入内容</Col>
          <Col span={18}>
            <TextArea
              value={editValue}
              onChange={handleEditValueChange}
              style={{ width: '100%' }}
            />
            <Button onClick={() => handleValueChange(0)} type="primary" style={{ marginTop: 10 }}>插入内容</Button>
            <Dropdown menu={value_list} position="bottomRight">
              <Button type="primary" style={{ marginTop: 10 }} icon={<IconTreeTriangleDown />}></Button>
            </Dropdown>
          </Col>
        </Row>
        <br />
      </div>
    </div>
  );
};

export default Index;