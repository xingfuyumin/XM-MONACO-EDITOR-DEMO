import { Ace } from 'ace-code/ace';
import { ReactNode } from 'react';

export type EDITOR_LOCALE = 'zh-CN' | 'ja-JP' | 'ko-KR' | 'en-US';
export type EDITOR_MODE = 'sql' | 'text' | 'shell' | 'python';
export type EDITOR_THEME = 'tomorrow' | 'tomorrow_night';
export type EDITOR_COMPLETION = { value: string, score: number, meta: string };
export interface EDITOR extends Ace.Editor {
  format: () => void;
  onCompletionsChange: EDITOR_API['onCompletionsChange']
};
export type EDITOR_REF = {
  editor?: EDITOR,
};

export interface EDITOR_API {
  /**
   * 自定义样式
   */
  className?: string;
  /**
   * 文本内容
   */
  value?: string;
  /**
   * 编辑器支持语言
   */
  mode?: EDITOR_MODE;
  /**
   * 编辑器支持主题
   */
  theme?: EDITOR_THEME;
  /**
   * 初始化配置
   */
  initOptions?: Omit<Omit<Omit<Partial<Ace.EditorOptions>, 'mode'>, 'value'>, 'theme'>;
  /**
   * 更新配置
   */
  options?: Record<string, any>;
  /**
   * ref对象，返回全局monaco对象和editor实例化对象
   */
  ref?: EDITOR_REF;
  /**
   * 编辑器初始化后调用，切换语言时也会触发
   * @returns 
   */
  onInit?: (
    editor: EDITOR,
  ) => Promise<void> | void;
  /**
   * 编辑器内容变化
   * @returns 
   */
  onValueChange?: (
    editor: EDITOR,
  ) => Promise<void> | void;
  /**
   * 编辑器配置变化
   * @returns 
   */
  onOptionChange?: (
    editor: EDITOR,
  ) => Promise<void> | void;
  /**
   * 编辑器选择区域变化
   * @returns 
   */
  onSelectionChange?: (
    editor: EDITOR,
  ) => Promise<void> | void;
  /**
   * 代码补全时触发，不设置表示不开启代码提示
   * @param editor 
   * @param pos 
   * @param prefix 
   * @returns 
   */
  onCompletionsChange?: (
    editor: EDITOR,
    pos: Ace.Position,
    prefix: string,
  ) => Promise<EDITOR_COMPLETION[]> | EDITOR_COMPLETION[],

  /**
   * 切换和加载mode时触发，初次也会触发
   * @param editor 
   * @param pos 
   * @param prefix 
   * @returns 
   */
  onModeChange?: (
    editor: EDITOR,
  ) => Promise<void> | void,
/**
 * 自定义渲染内容
 * @param parent 
 * @param screenColumn 
 * @param token 
 * @param value 
 * @returns 
 */
  textRender?: (
    parent: HTMLDivElement,
    screenColumn: any,
    token: { type: string, value: string },
    value: string,
  ) => ReactNode,
}