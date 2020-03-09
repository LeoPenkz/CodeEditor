import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {CodeEditorComponent} from '../code-editor/code-editor.component';

@Component({
  selector: 'code-editor-footer',
  templateUrl: './code-editor-footer.component.html'
})
export class CodeEditorFooterComponent implements OnInit, AfterViewInit {

  editor: CodeEditorComponent;
  mode: string;

  constructor(
    private cmp: CodeEditorComponent
  ) {
    this.editor = cmp;
    this.mode = cmp.code;
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

}
