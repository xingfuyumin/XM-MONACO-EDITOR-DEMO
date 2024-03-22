import { TERMINAL_API } from '../terminal-rc/props';

export interface TERMINAL_SH_API extends TERMINAL_API {
  /**
   * 输入前缀
   */
  inputPrefix: string;
  /**
   * 编辑器内容输入回车后触发
   * @returns 
   */
  onEnter?: (
    str: string,
  ) => void | Promise<void>;
}