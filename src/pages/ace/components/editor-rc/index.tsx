import './index.less';
import useData from './hook';
import { forwardRef } from 'react';
import classnames from 'classnames';
import { EDITOR_API, EDITOR_REF } from './props';



const Index = forwardRef<EDITOR_REF, Omit<EDITOR_API, 'ref'>>((props, ref) => {
  const {
    continerRef,
  } = useData(props, ref);
  return (
    <div className={classnames('tant-editor', props.className)} ref={continerRef} />
  );
});

export default Index;