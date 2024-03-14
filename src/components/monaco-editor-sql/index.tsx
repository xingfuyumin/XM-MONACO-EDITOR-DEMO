import './index.less';
import useData from './hook';
import { forwardRef } from 'react';
import { MONACO_EDITOR_SQL } from './props';
import { MONACO_EDITOR_REF } from '../monaco-editor-rc/props';
import MonacoEditor from '../monaco-editor-rc';
import classNames from 'classnames';


const Index = forwardRef<MONACO_EDITOR_REF, Omit<MONACO_EDITOR_SQL, 'ref'>>((props, ref) => {
  const {
    className, locale, ...ext
  } = props;
  const {
    handleInit, handleSelectionChange,
  } = useData(props);
  return (
    <MonacoEditor
      className={classNames('tant-monaco-editor-sql', className)}
      ref={ref}
      language={'sql'}
      locale={locale}
      {...ext}
      onInit={handleInit}
      onSelectionChange={handleSelectionChange}
    />
  );
});

export default Index;