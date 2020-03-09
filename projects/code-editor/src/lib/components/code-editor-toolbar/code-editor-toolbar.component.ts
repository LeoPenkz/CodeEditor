import {Component, Input, OnInit} from '@angular/core';
import {EditorMode} from '../../models/modes';
import * as CodeMirror from 'codemirror';
import {CodeEditorComponent} from '../code-editor/code-editor.component';

@Component({
  selector: 'code-editor-toolbar',
  templateUrl: './code-editor-toolbar.component.html',
  styleUrls: []
})
export class CodeEditorToolbarComponent implements OnInit {

  @Input() title = 'Code Editor';

  modesList: EditorMode[];

  mode: EditorMode;

  private editor: CodeEditorComponent;

  constructor(
    cmp: CodeEditorComponent
  ) {
    this.editor = cmp;
    this.mode = cmp.code;
  }

  ngOnInit() {
    this.modesList = CodeMirror.modeInfo.map( m => m.name);
  }

  changeMode(event) {
    const mode = event.target.value;
    this.editor.changeMode(mode);
  }
}
