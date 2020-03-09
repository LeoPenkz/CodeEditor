import {Component, Input, OnInit} from '@angular/core';
import {EditorMode} from '../../models/modes';
import {CodeEditorComponent} from '../code-editor/code-editor.component';

/**
 * EditorToolbar
 * @desc: For changing editor options
 */
@Component({
  selector: 'code-editor-toolbar',
  templateUrl: './code-editor-toolbar.component.html'
})
export class CodeEditorToolbarComponent implements OnInit {

  @Input() title = 'Code Editor';

  mode: EditorMode;
  modesList: EditorMode[];

  private editor: CodeEditorComponent;

  constructor(
    cmp: CodeEditorComponent
  ) {
    this.editor = cmp;
    this.mode = cmp.code;
    this.modesList = cmp.modeList.map( m => m.name);
  }

  ngOnInit() {
  }

  changeMode(event) {
    const mode = event.target.value;
    this.editor.changeMode(mode);
  }
}
