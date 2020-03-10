import { Component } from '@angular/core';
import { CodeEditorComponent } from '../code-editor/code-editor.component';

@Component({
  selector: 'code-editor-footer',
  templateUrl: './code-editor-footer.component.html'
})
export class CodeEditorFooterComponent {

  editor: CodeEditorComponent;
  mode: string;

  constructor(
    private cmp: CodeEditorComponent
  ) {
    this.editor = cmp;
    cmp.currentMode.subscribe( mode =>
      this.mode = mode
    );
  }

}
