
import { useRef } from 'react';
import { format as SqlFormatter } from 'sql-formatter';
import { EDITOR_SQL_API } from './props';
import { EDITOR } from '../editor-rc/props';
import RunWidget from '../sql-run-widget';
import { useUpdateEffect } from 'ahooks';

export default (props: EDITOR_SQL_API) => {
  const cacheRef = useRef<{
    editor?: EDITOR,
    runWidget?: RunWidget,
  }>({})

  const handleSelectionChange = async (editor: EDITOR) => {
    if (props.onSelectionChange) {
      await props.onSelectionChange(editor);
    }
    if (cacheRef.current.runWidget) {
      cacheRef.current.runWidget.update();
    }
  }
  const handleInit = async (editor: EDITOR) => {
    editor.format = () => {
      const str = editor.getValue();
      const argus: string[] = [];
      const a = Date.now();
      const dealStr = str.replace(/\$\{.*?\}/g, (s: string) => {
        argus.push(s);
        return `${a} = ${a}`;
      })
      const formatStr = SqlFormatter(dealStr);
      let i = -1;
      const originStr = formatStr.replaceAll(`${a} = ${a}`, () => {
        i += 1;
        return argus[i];
      });
      editor.session.setValue(originStr);
    }
    if (props.runWidget?.show) {
      cacheRef.current.runWidget = new RunWidget(editor, props.runWidget?.render);
    }
  }
  const handleModeChange = async (editor: EDITOR) => {
    if (props.onModeChange) {
      await props.onModeChange(editor);
    }
    const session = editor.session as any;
    const rules = session.$mode.$highlightRules.getRules();
    rules.start.push({
      regex: /\$\{.*?\}/,
      token: 'tant-variable',
      caseInsensitive: true,
    });
    try {
      session.$mode.$tokenizer = null;
      session.bgTokenizer.setTokenizer(session.$mode.getTokenizer());
      session.bgTokenizer.start(0);
    } catch {}
  }
  const handleTextRender = (
    parent: HTMLDivElement,
    screenColumn: any,
    token: { type: string, value: string },
    value: string,
  ) => {
    if (props.textRender) {
      return props.textRender(parent, screenColumn, token, value);
    }
    return null;
  }
  useUpdateEffect(() => {
    const editor = cacheRef.current.editor;
    if (!editor) {
      return;
    }
    if (props.runWidget?.show && !cacheRef.current.runWidget) {
      cacheRef.current.runWidget = new RunWidget(editor, props.runWidget?.render);
      return;
    }
    if (!props.runWidget?.show && cacheRef.current.runWidget) {
      cacheRef.current.runWidget.dispose();
    }
  }, [props.runWidget?.show]);


  return {
    handleInit,
    handleSelectionChange,
    handleModeChange,
    handleTextRender,
  };
}