import './index.less';
import useData from './hook';
import { forwardRef } from 'react';
import { MONACO_EDITOR, MONACO_EDITOR_REF } from './props';
import classnames from 'classnames';



const Index = forwardRef<MONACO_EDITOR_REF, Omit<MONACO_EDITOR, 'ref'>>((props, ref) => {
  const {
    continerRef,
  } = useData(props, ref);
  return (
    <div className={classnames('tant-monaco-editor', props.className)} ref={continerRef} />
  );
});

export default Index;