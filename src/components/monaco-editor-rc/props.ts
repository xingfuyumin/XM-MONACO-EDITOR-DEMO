import 'monaco-editor/monaco';

export type MONACO_EDITOR_LOCALE = 'zh-CN' | 'ja-JP' | 'ko-KR' | 'en-US';
export type MONACO_EDITOR_LANGUAGE = 'sql' | 'text';
export type MONACO_EDITOR_MONACO = typeof monaco;
export type MONACO_EDITOR_EDITOR = monaco.editor.IStandaloneCodeEditor;
export type MONACO_EDITOR_REF = {
  monaco?: MONACO_EDITOR_MONACO,
  editor?: MONACO_EDITOR_EDITOR,
};

export interface MONACO_EDITOR {
  /**
   * 自定义样式
   */
  className?: string;
  /**
   * 文本内容
   */
  value?: string;
  /**
   * 编辑器语种，对所有实例生效
   */
  locale?: MONACO_EDITOR_LOCALE;
  /**
   * 编辑器支持语言
   */
  language?: MONACO_EDITOR_LANGUAGE;
  /**
   * 初始化配置
   */
  initOptions?: Omit<Omit<monaco.editor.IStandaloneEditorConstructionOptions, 'language'>, 'value'>;
  /**
   * 更新配置
   */
  options?: monaco.editor.IEditorOptions;
  /**
   * ref对象，返回全局monaco对象和editor实例化对象
   */
  ref?: MONACO_EDITOR_REF;
  /**
   * 编辑器初始化后调用，切换语言时也会触发
   * @returns 
   */
  onInit?: (
    monaco: MONACO_EDITOR_MONACO,
    editor: MONACO_EDITOR_EDITOR,
  ) => Promise<void>;
  /**
   * 编辑器内容变化
   * @returns 
   */
  onValueChange?: (
    editor: MONACO_EDITOR_EDITOR,
    monaco: MONACO_EDITOR_MONACO,
  ) => Promise<void>;
  /**
   * 编辑器配置变化
   * @returns 
   */
  onOptionChange?: (
    editor: MONACO_EDITOR_EDITOR,
    monaco: MONACO_EDITOR_MONACO,
  ) => Promise<void>;
  /**
   * 编辑器选择区域变化
   * @returns 
   */
  onSelectionChange?: (
    editor: MONACO_EDITOR_EDITOR,
    monaco: MONACO_EDITOR_MONACO,
  ) => Promise<void>;
  /**
   * 编辑器内容配置变化
   * @returns 
   */
  onConfigureChange?: (
    hasChanged: (k: monaco.editor.EditorOption) => boolean,
    editor: MONACO_EDITOR_EDITOR,
    monaco: MONACO_EDITOR_MONACO,
  ) => Promise<void>;
}