
import { Ref, useEffect, useImperativeHandle, useRef } from 'react';
import { TERMINAL_SH_API } from './props';
import 'xterm/css/xterm.css'
import { TERMINAL_REF } from '../terminal-rc/props';
import { IDisposable } from 'xterm';


export default (props: TERMINAL_SH_API, ref?: Ref<TERMINAL_REF>) => {
  const cacheRef = useRef<TERMINAL_REF>({});
  const inputRef = useRef('');
  const dataListenerRef = useRef<IDisposable>();

  const handleInit = async () => {
    const inputPrefix = props.inputPrefix || '';
    const { terminal } = cacheRef.current;
    if (!terminal) {
      return;
    }
    inputRef.current = '';
    terminal.writeln('');
    if (!props.readonly) {
      terminal.write(inputPrefix);
    }
    if (dataListenerRef.current) {
      dataListenerRef.current.dispose();
      dataListenerRef.current = undefined;
    }
    let len = 0;
    inputPrefix.split('').forEach((c) => {
      if (c.charCodeAt(0) < 128) {
        len += 1;
      } else {
        len += 2;
      }
    })
    dataListenerRef.current = terminal.onData(async (e: string) => {
      const inputPrefix = props.inputPrefix || '';
      const { terminal } = cacheRef.current;
      if (!terminal || props.readonly) {
        return;
      }
      switch (e) {
        case '\u0003': // Ctrl+C
          terminal.writeln('^C');
          terminal.write(inputPrefix);
          break;
        case '\r': // Enter
          if (props.onEnter) {
            await props.onEnter(inputRef.current);
          }
          terminal.writeln('');
          terminal.write(inputPrefix);
          inputRef.current = '';
          break;
        case '\u007F': // Backspace (DEL)
          if ((terminal as any)._core.buffer.x > len) {
            terminal.write('\b \b');
            if (inputRef.current.length > 0) {
              inputRef.current = inputRef.current.substr(0, inputRef.current.length - 1);
            }
          }
          break;
        default: // Print all other characters for demo
          if (e >= String.fromCharCode(0x20) && e <= String.fromCharCode(0x7E) || e >= '\u00a0') {
            inputRef.current += e;
            terminal.write(e);
          }
      }
    });
  }
  useEffect(() => {
    handleInit();
  }, [props.inputPrefix, props.readonly]);
  useImperativeHandle(ref, () => {
    return cacheRef.current;
  }, []);
  return {
    cacheRef,
  };
}