import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {CodeEditorComponent} from './components/code-editor/code-editor.component';
import {CodeEditorToolbarComponent} from './components/code-editor-toolbar/code-editor-toolbar.component';
import {CodeEditorFooterComponent} from './components/code-editor-footer/code-editor-footer.component';
import {CodeEditorIconComponent} from './components/code-editor-icon/code-editor-icon.component';


@NgModule({
  declarations: [
    CodeEditorComponent,
    CodeEditorToolbarComponent,
    CodeEditorFooterComponent,
    CodeEditorIconComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CodeEditorComponent
  ]
})
export class CodeEditorModule {}
