import {Component, Input, OnInit} from '@angular/core';
import {CodeEditorComponent} from '../code-editor/code-editor.component';

@Component({
  selector: 'code-editor-footer',
  templateUrl: './code-editor-footer.component.html'
})
export class CodeEditorFooterComponent implements OnInit {

  constructor(
    private cmp: CodeEditorComponent
  ) { }

  ngOnInit() {
  }

}
