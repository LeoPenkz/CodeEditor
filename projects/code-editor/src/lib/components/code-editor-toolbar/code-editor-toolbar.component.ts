import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'code-editor-toolbar',
  templateUrl: './code-editor-toolbar.component.html',
  styleUrls: []
})
export class CodeEditorToolbarComponent implements OnInit {

  @Input() title = 'Code Editor';

  constructor() { }

  ngOnInit() {
  }

  changeMode() {

  }
}
