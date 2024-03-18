
import { Ref, useEffect, useImperativeHandle, useRef } from 'react';
import { edit } from 'ace-builds';
import { EDITOR, EDITOR_API, EDITOR_REF } from './props';
import languageTools from 'ace-builds/src-min-noconflict/ext-language_tools';
import { HoverTooltip as AceHoverTooltip } from 'ace-code/src/tooltip';
import { Ace } from 'ace-code';
import { useUpdateEffect } from 'ahooks';
import { createRoot } from 'react-dom/client';
const MODE_MAP = {
  sql: 'mysql',
  text: 'text',
  python: 'python',
  shell: 'sh',
}

const requireMap: Record<string, any> = {};

const requireMode = async (name: string) => {
  if (!requireMap[`mode_${name}`]) {
    requireMap[`mode_${name}`] = true;
  } else {
    return;
  }
  return import(`ace-builds/src-noconflict/mode-${name}`);
}
const requireTheme = async (name: string) => {
  if (!requireMap[`theme_${name}`]) {
    requireMap[`theme_${name}`] = true;
  } else {
    return;
  }
  await import(`ace-builds/src-noconflict/theme-${name}`);
}



export default (props: EDITOR_API, ref?: Ref<EDITOR_REF>) => {
  const continerRef = useRef<HTMLDivElement>(null);
  const cacheRef = useRef<EDITOR_REF>({});
  if (cacheRef.current.editor) {
    cacheRef.current.editor.onCompletionsChange = props.onCompletionsChange;
  }
  const handleBeforeInit = async (editor: EDITOR) => {
    const renderer =  editor.renderer as any;
    const originalDrawToken = renderer.$textLayer.$renderToken;
    renderer.$textLayer.$renderToken = function (parent: HTMLDivElement, screenColumn: any, token: { type: string, value: string }, value: string) {
      if (editor.renderer.lineHeight !== 30) {
        (editor.renderer as any).lineHeight = 30; // 偷偷改
      }
      const render = props.textRender ? props.textRender(parent,screenColumn, token, value) : null;
      if (!render || !parent) {
        originalDrawToken.apply(this, arguments);
        return;
      }
      const dom = document.createElement('div');
      dom.style.display = 'inline-block';
      parent.append(dom);
      const root = createRoot(dom);
      root.render(render);
    };
    const docTooltip = new AceHoverTooltip();
    docTooltip.addToEditor(editor)
    docTooltip.setDataProvider(function(e, editor) {
      let session = editor.session;
      let docPos = e.getDocumentPosition();
      
      const range = session.getWordRange(docPos.row, docPos.column);

      const domNode = document.createElement("span");
      domNode.textContent = "tooltip " + range;
      domNode.className = "doc-tooltip";
      docTooltip.showForRange(editor, range, domNode, e);
  });
  }
  const handleInit = async () => {
    const container = continerRef.current;
    if (!container) {
      return;
    }
    // const ace = (window as any).ace;
    const mode = MODE_MAP[props.mode || 'text'] || MODE_MAP.text;
    const theme = props.theme || 'tomorrow';
    await requireMode(mode);
    await requireTheme(theme);
    const editor = edit(container, {
      theme: `ace/theme/${theme}`,
      value: props.value || '',
      enableLiveAutocompletion: !!props.onCompletionsChange,
      ...(props.initOptions || {})
    }) as EDITOR;
    await handleBeforeInit(editor);
    editor.session.setMode(`ace/mode/${mode}`, () => props.onModeChange ? props.onModeChange(editor) : null);
    editor.format = () => { };
    cacheRef.current.editor = editor;
    if (!editor) {
      return;
    }
    if (props.onInit) {
      await props.onInit(editor);
    }
    editor.addEventListener('change', () => {
      if (props.onValueChange) {
        props.onValueChange(editor);
      }
    })
    editor.addEventListener('changeSelection', () => {
      if (props.onSelectionChange) {
        props.onSelectionChange(editor);
      }
    })
    editor.addEventListener('changeCursor', () => {
      if (props.onSelectionChange) {
        props.onSelectionChange(editor);
      }
    })
    editor.completers = [
      {
        getCompletions: async (editor: EDITOR, session: Ace.EditSession, pos: Ace.Position, prefix: any, callback: (arg0: null, arg1: { caption: string; value: string; score: number; meta: string; }[]) => void) => {
          const list = editor.onCompletionsChange ? await editor.onCompletionsChange(editor, pos, prefix) : [];
          callback(null, list.map(d => {
            return {
              caption: d.value,
              value: d.value,
              score: d.score,
              meta: d.meta
            };
          }));
        }
      },
      languageTools.keyWordCompleter,
    ]
    window.editor = editor;
  }

  useEffect(() => {
    handleInit();
    return () => {
      const { editor } = cacheRef.current;
      if (editor) {
        editor.destroy();
      }
    }
  }, []);

  useEffect(() => {
    const editor = cacheRef.current.editor;
    if (editor && props.options) {
      editor.setOptions(props.options);
    }
  }, [props.options])
  useEffect(() => {
    const editor = cacheRef.current.editor;
    if (editor) {
      const theme = props.theme || 'tomorrow';
      requireTheme(theme)
        .then(() => {
          editor.setTheme(`ace/theme/${theme}`);
        });
    }
  }, [props.theme]);
  useEffect(() => {
    const editor = cacheRef.current.editor;
    if (editor) {
      const mode = MODE_MAP[props.mode || 'text'] || MODE_MAP.text;
      requireMode(mode)
        .then(() => {
          editor.session.setMode(`ace/mode/${mode}`, () => props.onModeChange ? props.onModeChange(editor) : null);
        });
    }
  }, [props.mode]);
  useEffect(() => {
    const editor = cacheRef.current.editor;
    if (!editor) {
      return;
    }
    const oldValue = editor.getValue();
    if ((props.value || '') !== oldValue) {
      editor.session.setValue(props.value || '');
    }
  }, [props.value])
  useUpdateEffect(() => {
    const editor = cacheRef.current.editor;
    if (editor) {
      editor.setOptions({
        enableLiveAutocompletion: !!props.onCompletionsChange,
      });
    }
  }, [!!props.onCompletionsChange])
  useImperativeHandle(ref, () => {
    return cacheRef.current;
  }, []);
  return {
    continerRef,
  };
}