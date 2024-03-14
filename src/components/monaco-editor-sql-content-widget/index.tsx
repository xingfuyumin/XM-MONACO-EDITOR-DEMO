class Index implements monaco.editor.IContentWidget{
  id: string = 'sql-run-widget';
  domNode: HTMLDivElement = document.createElement('div');
  constructor (callback: () => void = () => {}) {
    this.domNode.style.position = 'absolute';
    this.domNode.innerHTML = '我是自定义内容';
    this.domNode.onclick = callback;
  } 
  getId() {
    return this.id;
  }

  getDomNode() {
    return this.domNode;
  }

  getPosition() {
    return {
      position: {
        lineNumber: 1,
        column: 2,
      },
      preference: [
        monaco.editor.ContentWidgetPositionPreference.EXACT
      ],
    };
  }
}

export default Index;