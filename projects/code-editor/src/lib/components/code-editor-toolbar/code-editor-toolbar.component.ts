import {Component, Input, OnInit} from '@angular/core';
import {EditorMode} from '../../models/modes';
import {CodeEditorComponent} from '../code-editor/code-editor.component';

@Component({
  selector: 'code-editor-toolbar',
  templateUrl: './code-editor-toolbar.component.html',
  styleUrls: []
})
export class CodeEditorToolbarComponent implements OnInit {

  @Input() title = 'Code Editor';
  @Input() showIcon: boolean;
  @Input('change-mode') changeMode: boolean;

  mode: EditorMode;
  modeList: any;

  selectMode: boolean;

  private editor: CodeEditorComponent;

  constructor(
    cmp: CodeEditorComponent
  ) {
    this.editor = cmp;
    this.modeList = cmp.modeList
      .map( m => m.name)
      .sort( (a, b) => a > b ? 1 : -1);
    cmp.currentMode
      .subscribe( m => this.mode = m);
  }

  ngOnInit() {
  }

  changeEditorMode(mode) {
    this.editor.changeEditorMode(mode);
    this.selectMode = false;
  }

}
