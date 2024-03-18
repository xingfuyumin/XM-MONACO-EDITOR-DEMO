
import './index.less';
import { debounce } from "lodash";
import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { EDITOR } from '../editor-rc/props';

class Index {
  private _editor: EDITOR;
  private _render: (sql: string) => ReactNode;
  private _domNode: HTMLDivElement = document.createElement('div');
  private _root = createRoot(this._domNode);
  private _timer: any = null;
  constructor(editor: EDITOR, render: (sql: string) => ReactNode = () => '运行') {
    this._editor = editor;

    const editorDom = editor.container;
    const lineNumberDom = editorDom;
    this._domNode.className = 'tant-editor-run-widget';
    lineNumberDom?.append(this._domNode);
    this._domNode.style.display = 'none';
    this._domNode.style.top = '0px';
    this._domNode.onmousedown = e => e.stopPropagation(); // 屏蔽鼠标事件避免点击换行
    this._render = render;

    editor.session.addEventListener('changeScrollTop', () => {
      this.hidden();
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = null;
      }
      this._timer = setTimeout(() => {
        this.updateImmediate();
      }, 200)
    });
  }
  updateImmediate = () => {
    const selection = this._editor.getSelectionRange()


    const startPosition = selection.start;
    const endPosition = selection.end;


    if (!startPosition || !endPosition || (startPosition.column === endPosition.column && startPosition.row === endPosition.row)) {
      this._domNode.style.display = 'none';
      this._domNode.style.top = '0px';
      return;
    }
    const renderer = (this._editor.renderer as any);
    const { top } = renderer.$cursorLayer.getPixelPosition({ row: this._editor.getCursorPosition().row, column: 0 }, true);
    this._domNode.style.display = 'block';
    this._domNode.style.top = `${top}px`;
    this._domNode.style.right = `${renderer.$size.width - renderer.gutterWidth}px`;
    const render = this._render(this._editor.getSelectedText() || '');
    this._root.render(render);
  };
  update = debounce(this.updateImmediate, 200);
  hidden = () => {
    this._domNode.style.display = 'none';
    this._domNode.style.top = '0px';
    return;
  }
  dispose = () => {
    this._root.unmount();
    this._domNode.remove();
  }
}

export default Index;