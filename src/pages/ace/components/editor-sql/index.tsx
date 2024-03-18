import './index.less';
import useData from './hook';
import { forwardRef } from 'react';
import { EDITOR_SQL_API } from './props';
import Editor from '../editor-rc';
import classNames from 'classnames';
import { EDITOR_REF } from '../editor-rc/props';


const Index = forwardRef<EDITOR_REF, Omit<EDITOR_SQL_API, 'ref'>>((props, ref) => {
  const {
    className, ...ext
  } = props;
  const {
    handleInit, handleSelectionChange, handleModeChange, handleTextRender,
  } = useData(props);
  return (
    <Editor
      className={classNames('tant-editor-sql', className)}
      ref={ref}
      mode="sql"
      {...ext}
      onInit={handleInit}
      onSelectionChange={handleSelectionChange}
      onModeChange={handleModeChange}
      textRender={handleTextRender}
    />
  );
});

export default Index;