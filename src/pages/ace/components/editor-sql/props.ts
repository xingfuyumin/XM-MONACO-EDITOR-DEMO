import { ReactNode } from 'react';
import { EDITOR_API } from '../editor-rc/props';

export interface EDITOR_SQL_API extends Omit<EDITOR_API, 'mode'> {
  /**
   * 调试小组件配置
   */
  runWidget?: {
    /**
     * 是否展示
     */
    show: boolean;
    /**
     * 组件dom
     */
    render: (str: string) => ReactNode;
  };
}