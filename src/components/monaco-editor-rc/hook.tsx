
import { Ref, useEffect, useImperativeHandle, useRef } from 'react';
import { MONACO_EDITOR, MONACO_EDITOR_LOCALE, MONACO_EDITOR_REF } from './props';

const Locale_map = {
  'zh-CN': 'zh-cn',
  'ko-KR': 'ko',
  'en-US': 'es',
  'ja-JP': 'ja',
}

function setLocale(locale: MONACO_EDITOR_LOCALE) {
  const monacoRequire = window.require as any;
  if (monacoRequire.getConfig()?.['vs/nls']?.availableLanguages?.['*'] !== locale) {
    monacoRequire.reset();
    monacoRequire.locale = locale;
    monacoRequire.config({
      paths: {
        vs: '/monaco-editor/vs'
      },
      "vs/nls": {
        availableLanguages: {
          "*": locale,
        }
      },
    });
  }
}

export default (props: MONACO_EDITOR, ref?: Ref<MONACO_EDITOR_REF>) => {
  const continerRef = useRef<HTMLDivElement>(null);
  const cacheRef = useRef<MONACO_EDITOR_REF>({});

  const handleInit = async () => {
    const container = continerRef.current;
    if (!container) {
      return;
    }
    const monacoRequire = window.require as any;
    setLocale( Locale_map[props.locale || 'zh-CN'] as MONACO_EDITOR_LOCALE);
    cacheRef.current.monaco = await new Promise((resolve, reject) => {
      monacoRequire(
        [`${process.env.NODE_ENV === 'development' ? '/' : '/XM-MONACO-EDITOR-DEMO/dist/'}vs/editor/editor.main`],
        function (monaco: any) {
          resolve(monaco);
        },
        function () {
          reject(null);
        },
      );
    })
    const monaco = cacheRef.current.monaco;
    if (!monaco) {
      return;
    }
    let editor = cacheRef.current.editor;
    let lastValue = '';
    if (editor) {
      lastValue = editor.getValue();
      editor.dispose();
      cacheRef.current.editor = undefined;
      editor = undefined;
    }
    cacheRef.current.editor = monaco.editor.create(container, {
      language: props.language || 'text',
      value: lastValue || props.value || '',
      ...(props.initOptions || {})
    });
    editor = cacheRef.current.editor;
    if (editor) {
      if (props.onInit) {
        await props.onInit(monaco, editor);
      }
      editor.onDidChangeModelContent(() => {
        if (props.onValueChange) {
          props.onValueChange(editor, monaco);
        }
      });
      editor.onDidChangeCursorSelection(() => {
        if (props.onSelectionChange) {
          props.onSelectionChange(editor, monaco);
        }
      });
      editor.getModel()?.onDidChangeOptions(() => {
        if (props.onOptionChange) {
          props.onOptionChange(editor, monaco);
        }
      });
      editor.onDidChangeConfiguration((e) => {
        if (props.onConfigureChange) {
          props.onConfigureChange(e.hasChanged, editor, monaco);
        }

      })
    }
  }

  useEffect(() => {
    handleInit();
  }, [props.locale])
  useEffect(() => {
    return () => {
      const { editor } = cacheRef.current;
      if (editor) {
        editor.dispose();
      }
    }
  }, [])

  useEffect(() => {
    const editor = cacheRef.current.editor;
    if (editor && props.options) {
      editor.updateOptions(props.options);
    }
  }, [props.options])
  useEffect(() => {
    const editor = cacheRef.current.editor;
    if (!editor) {
      return;
    }
    const oldValue = editor.getValue();
    if ((props.value || '') !== oldValue) {
      const position = editor.getPosition() || { lineNumber: 1, column: 1 };
      const row = position?.lineNumber || 1;
      const col = position?.column || 1;
      editor.executeEdits('', [
        {
          range: new monaco.Range(row, col, row, col),
          text: props.value || '',
          forceMoveMarkers: true,
        }
      ]);
    }
  }, [props.value])
  useImperativeHandle(ref, () => {
    return cacheRef.current;
  }, [cacheRef.current]);
  return {
    continerRef,
  };
}