import './index.less';
import useData from './hook';
import { forwardRef } from 'react';
import classnames from 'classnames';
import { TERMINAL_REF, TERMINAL_API } from './props';



const Index = forwardRef<TERMINAL_REF, Omit<TERMINAL_API, 'ref'>>((props, ref) => {
  const {
    continerRef,
  } = useData(props, ref);
  return (
    <div className={classnames('tant-terminal', props.readonly ? 'tant-terminal-readonly' : '', props.className)} ref={continerRef} />
  );
});

export default Index;