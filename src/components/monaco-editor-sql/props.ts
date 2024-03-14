import 'monaco-editor/monaco';
import { MONACO_EDITOR } from '../monaco-editor-rc/props';
import { ReactNode } from 'react';

export interface MONACO_EDITOR_SQL extends Omit<MONACO_EDITOR, 'language'> {
  /**
   * 右击菜单支持sql格式化
   */
  formatter?: boolean;
  /**
   * 右击格式化菜单名称
   */
  formatterText?: string;
  /**
   * sql关键字触发
   * @param str 
   * @returns 
   */
  onCompletionItemProvider?: (str: string, keywords: string[]) => Promise<monaco.languages.CompletionItem[]>,
  /**
   * 展示运行按钮，仅初次设置有效
   */
  runWidget?: boolean;
  /**
   * 展示运行按钮，仅初次设置有效
   */
  runWidgetRender?: (sql: string) => ReactNode;
}