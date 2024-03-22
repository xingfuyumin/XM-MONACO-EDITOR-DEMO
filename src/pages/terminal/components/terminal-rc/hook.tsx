
import { Ref, useEffect, useImperativeHandle, useRef } from 'react';
import { TERMINAL_API, TERMINAL_REF } from './props';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css'
import { FitAddon } from "xterm-addon-fit";
import { useSize } from 'ahooks';
import { WebLinksAddon } from 'xterm-addon-web-links';


const THEME_MAP = {
  light: {
    foreground: '#000000', // 文字颜色
    background: '#ffffff', // 背景颜色
    cursor: '#8b8b8b', // 光标颜色
    cursorAccent: '#000000', // 光标亮色
    selection: '#cccccc', // 选择文本颜色
    black: '#2e3436',
    red: '#cc0000',
    green: '#4e9a06',
    yellow: '#c4a000',
    blue: '#3465a4',
    magenta: '#75507b',
    cyan: '#06989a',
    white: '#d3d7cf',
    brightBlack: '#555753',
    brightRed: '#ef2929',
    brightGreen: '#8ae234',
    brightYellow: '#fce94f',
    brightBlue: '#729fcf',
    brightMagenta: '#ad7fa8',
    brightCyan: '#34e2e2',
    brightWhite: '#eeeeec'
  },
  dark: undefined
}


export default (props: TERMINAL_API, ref?: Ref<TERMINAL_REF>) => {
  const continerRef = useRef<HTMLDivElement>(null);
  const cacheRef = useRef<TERMINAL_REF>({
    add: () => {},
    clear: () => {},
  });
  const continerSize = useSize(continerRef);

  const handleInit = async () => {
    const container = continerRef.current;
    if (!container) {
      return;
    }
    const terminal = new Terminal({
      theme: THEME_MAP[props.theme || 'dark'],
      ...(props.initOptions || {}),
    });
    const fitAddon = new FitAddon();
    cacheRef.current.terminal = terminal;
    cacheRef.current.fitAddon = fitAddon;
    cacheRef.current.add = (v) => terminal.write(v);
    cacheRef.current.clear = () => terminal.write('\x1b[3J\x1b[H\x1b[2J');
    terminal.loadAddon(fitAddon);
    terminal.loadAddon(new WebLinksAddon());
    terminal.open(container);
    fitAddon.fit();
    window.terminal = terminal;
  }

  useEffect(() => {
    handleInit();
    return () => {
      const { terminal, fitAddon } = cacheRef.current;
      if (fitAddon) {
        fitAddon.dispose();
      }
      if (terminal) {
        terminal.dispose();
      }
    }
  }, []);
  useEffect(() => {
    const { fitAddon } = cacheRef.current;
    if (fitAddon) {
      fitAddon.fit();
    }
  }, [continerSize])
  useEffect(() => {
    const { terminal } = cacheRef.current;
    if (terminal) {
      terminal.options.theme = THEME_MAP[props.theme || 'dark'] as any;
    }
  }, [props.theme])
  useImperativeHandle(ref, () => {
    return cacheRef.current;
  }, []);
  return {
    continerRef,
  };
}