import './index.less';
import useData from './hook';
import { forwardRef } from 'react';
import { TERMINAL_SH_API } from './props';
import TerminalRC from '../terminal-rc';
import { TERMINAL_REF } from '../terminal-rc/props';



const Index = forwardRef<TERMINAL_REF, Omit<TERMINAL_SH_API, 'ref'>>((props, ref) => {
  const {
    cacheRef,
  } = useData(props, ref);
  return (
    <TerminalRC
      ref={cacheRef}
      {...(props || {})}
    />
  );
});

export default Index;