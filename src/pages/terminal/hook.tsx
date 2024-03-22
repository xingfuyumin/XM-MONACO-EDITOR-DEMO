
import { useRef } from 'react';
import { useSetState } from 'ahooks';
import { TERMINAL_REF } from './components/terminal-rc/props';


type State = {
  readonly: boolean, 
  theme: 'light' | 'dark',
  inputPrefix: string,
  value: string,
  editValue: string,
}
const defaultState: State = {
  readonly: true, 
  theme: 'dark',
  inputPrefix: '~ % ',
  value: '',
  editValue: '我是要插入的文本，可以插入链接试试呦！',
}
const valuePrefix = [
  '',
  '\x1b[31m',
  '\x1b[32m',
  '\x1b[34m',
];
export default () => {
  const [state, setState] = useSetState({
    ...defaultState,
  });
  const ref = useRef<TERMINAL_REF>();
  const handleReadonlyChange = (v: any) => {
    setState({ readonly: v })
  }
  const handleThemeChange = (v: any) => {
    setState({ theme: v })
  }
  const handleInputPrefixChange = (v: any) => {
    setState({ inputPrefix: v })
  }
  const handleValueChange = (type: number) => {
    ref.current?.add(`${valuePrefix[type]}${state.editValue.replaceAll('\n', '\n\r')}\x1b[0m\n\r`);
  }
  const handleEditValueChange = (v: any) => {
    setState({ editValue: v })
  }

  return {
    handleReadonlyChange,
    handleThemeChange,
    handleInputPrefixChange,
    handleValueChange,
    handleEditValueChange,
    ref,
    ...state,
  };
}