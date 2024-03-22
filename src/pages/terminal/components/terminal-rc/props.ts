import { ITerminalInitOnlyOptions, ITerminalOptions, Terminal } from 'xterm';
import { FitAddon } from "xterm-addon-fit";

export type EDITOR_THEME = 'light' | 'dark';

export type TERMINAL_REF = {
  terminal?: Terminal,
  fitAddon?: FitAddon,
  add?: (v: string) => void,
  clear?: () => void,
};

export interface TERMINAL_API {
  /**
   * 自定义样式
   */
  className?: string;
  /**
   * 内容是否只读
   */
  readonly?: boolean;
  /**
   * 初始化配置
   */
  initOptions?: ITerminalOptions & ITerminalInitOnlyOptions
  /**
   * 编辑器支持主题
   */
  theme?: EDITOR_THEME;
  /**
   * ref对象，返回全局monaco对象和editor实例化对象
   */
  ref?: TERMINAL_REF;
}