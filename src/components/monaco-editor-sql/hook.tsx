
import { useEffect, useRef } from 'react';
import { MONACO_EDITOR_EDITOR, MONACO_EDITOR_MONACO } from '../monaco-editor-rc/props';
import { MONACO_EDITOR_SQL } from './props';
import { format as SqlFormatter } from 'sql-formatter';
import { language } from 'monaco-editor/esm/vs/basic-languages/mysql/mysql';
import RunWidget from '../monaco-editor-sql-run-widget';
import ContentWidget from '../monaco-editor-sql-content-widget';
import { useUpdateEffect } from 'ahooks';

const sqlKeywords = [
  ...language.keywords,
  ...language.operators,
  ...language.builtinFunctions,
];

export default (props: MONACO_EDITOR_SQL) => {
  const cacheRef = useRef<{
    formatter?: monaco.editor.IContextKey,
    completionItemProvider?: monaco.IDisposable,
    editor?: MONACO_EDITOR_EDITOR,
    runWidget?: RunWidget,
    contentWidget?: ContentWidget,
  }>({})

  const handleSelectionChange = async (editor: MONACO_EDITOR_EDITOR, monaco: MONACO_EDITOR_MONACO) => {
    if (props.runWidget && cacheRef.current.runWidget) {
      cacheRef.current.runWidget.update();
    }
    if (props.onSelectionChange) {
      props.onSelectionChange(editor, monaco);
    }
  }
  const handleInit = async (monaco: MONACO_EDITOR_MONACO, editor: MONACO_EDITOR_EDITOR) => {
    monaco.editor.defineTheme('tant-sql-light', {
      base: 'vs',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: 'FF0000', fontStyle: 'bold' },
        { token: 'operator.sql', foreground: 'FF0000', fontStyle: 'bold' },
        { token: 'identifier', foreground: '00FF00' },
        { token: 'number', foreground: '0000FF' },
        { token: 'comment', foreground: '888888' },
        { token: 'delimiter', foreground: 'FFFF00' },
      ],
      colors: [] as any,
    });
    monaco.editor.defineTheme('tant-sql-black', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: 'FF0000', fontStyle: 'bold' },
        { token: 'operator.sql', foreground: 'FF0000', fontStyle: 'bold' },
        { token: 'identifier', foreground: '00FF00' },
        { token: 'number', foreground: '0000FF' },
        { token: 'comment', foreground: '000000' },
        { token: 'delimiter', foreground: 'FFFF00' },
      ],
      colors: [] as any,
    });
    cacheRef.current.formatter = editor.createContextKey('shouldShowSQLFormatter', props.formatter);
    editor.addAction({
      id: 'formatter',
      label: props.formatterText || '格式化',
      precondition: 'shouldShowSQLFormatter',
      contextMenuGroupId: 'navigation',
      contextMenuOrder: 2,
      keybindings: [
        monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KeyF,
      ],
      run: () => {
        const model = editor?.getModel();
        if (!model) {
          return;
        }
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
        editor.executeEdits('formatter', [
          {
            range: model.getFullModelRange(),
            text: originStr,
          },
        ]);
      }
    });
    cacheRef.current.editor = editor;
    cacheRef.current.completionItemProvider = monaco.languages.registerCompletionItemProvider('sql', {
      triggerCharacters: ['.'],
      provideCompletionItems: async (model: any, position: any) => {
        const { lineNumber, column } = position
        const arr = model.getValueInRange({
          startLineNumber: lineNumber,
          startColumn: 0,
          endLineNumber: lineNumber,
          endColumn: column
        })?.split(' ') || [];
        const str = arr[arr.length - 1] || '';
        const list = props.onCompletionItemProvider ? await props.onCompletionItemProvider(str, sqlKeywords) : [];
        return { suggestions: list, incomplete: true, dispose: true } as any;
      },
      resolveCompletionItem: (item: any) => {
        return item;
      }
    });
    if (props.runWidget) {
      cacheRef.current.runWidget = new RunWidget(editor, props.runWidgetRender);
    }
    cacheRef.current.contentWidget = new ContentWidget();
    // editor.addContentWidget(cacheRef.current.contentWidget);
    // editor.createDecorationsCollection([
    //   {
    //     range: {
    //       startLineNumber: 1,
    //       startColumn: 1,
    //       endLineNumber: 1,
    //       endColumn: 7,
    //     },
    //     options: {
    //       after: {
    //         content: '1234',
    //         inlineClassName: 'replace-test',
    //       },
    //       className: 'test1-1',
    //     }
    //   }
    // ])
    monaco.languages.registerHoverProvider('sql', {
      provideHover(model: monaco.editor.ITextModel, position: monaco.Position) {
        // 根据 position 获取当前的 word 或 token
        const word = model.getWordAtPosition(position);
        if (word) {
            // 创建自定义的 DOM 内容
            const domNode = document.createElement('div');
            domNode.innerHTML = '<strong>Custom HTML Content</strong><br/>This is a custom tooltip for token: ' + word.word;
            domNode.style.background = 'white';
            domNode.style.padding = '80px';
            domNode.style.border = '1px solid black';

            console.log(domNode.outerHTML);
            // 返回 hover 对象
            return {
                range: new monaco.Range(position.lineNumber, word.startColumn, position.lineNumber, word.endColumn),
                // contents: [{ value: 'Simple **Markdown** content' }],
                content: [{ isTrusted: true, value: domNode.outerHTML, supportHtml: true }]
            };
        }
        return null;
      }
    })
  }
  useEffect(() => {
    if (cacheRef.current.formatter) {
      cacheRef.current.formatter.set(props.formatter)
    }
  }, [props.formatter]);

  useUpdateEffect(() => {
    const editor = cacheRef.current.editor;
    if (!editor) {
      return;
    }

    if (cacheRef.current.runWidget) {
      cacheRef.current.runWidget.dispose();
      cacheRef.current.runWidget = undefined;
    }
    if (props.runWidget) {
      cacheRef.current.runWidget = new RunWidget(editor, props.runWidgetRender);
    }
  }, [props.runWidget]);
  useEffect(() => {
    return () => {
      const { completionItemProvider } = cacheRef.current;
      if (completionItemProvider) {
        completionItemProvider.dispose();
      }
    }
  }, [])

  return {
    handleInit,
    handleSelectionChange,
  };
}