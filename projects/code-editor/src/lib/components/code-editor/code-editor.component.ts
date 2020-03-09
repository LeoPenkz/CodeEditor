import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BooleanInput} from '../../helpers/decorator.input.boolean';
import {
  AfterViewInit,
  Component, EventEmitter,
  forwardRef,
  Input,
  OnDestroy, Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/meta.js';
import {EditorMode} from '../../models/modes';

/**
 * CodeEditor Component
 */
@Component({
  selector: 'code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: [
    '../../themes/styles.scss'
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodeEditorComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class CodeEditorComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {

  @BooleanInput @Input('show-toolbar') showToolbar: boolean;
  @BooleanInput @Input('show-footer') showFooter: boolean;

  @Input() code: EditorMode = 'Textile';

  @Output() change = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() cursorActivity = new EventEmitter();

  @ViewChild('codeEditor') codeEditor;

  @Input() config;
  @Input() public set model(v) {
    if (v !== this.value) {
      this.value = v;
      this.onChange(v);
    }
  }
  public get model() {
    return this.value;
  }

  private instance = null;
  private value = '';
  private mode: any;

  constructor(
  ) {}

  ngOnDestroy() { }

  ngAfterViewInit() {

    this.mode = CodeMirror.findModeByName(this.code);

    this.config = this.config || {
      mode: this.mode.mimes ? this.mode.mimes[1] : this.mode.mime,
      indentWithTabs: false,
      smartIndent: true,
      lineNumbers: true,
      matchBrackets : true,
      autofocus: true,
      theme: 'ayu-dark'
    };

    this.codeEditorInit(this.config);
  }

  codeEditorInit(config) {

    const mode = this.mode;

    import(`codemirror/mode/${mode.mode}/${mode.mode}`)

      .then(() => {

        this.instance = CodeMirror
          .fromTextArea(this.codeEditor.nativeElement, config);

        this.instance.setValue(this.value);

        this.instance.on('change', () => {
          this.updateValue(this.instance.getValue());
        });

        this.instance.on('focus', (instance, event) => {
          this.focus.emit({instance, event});
        });

        this.instance.on('blur', (instance) => {
          this.cursorActivity.emit({instance});
        });

        this.instance.on('cursorActivity', (instance, event) => {
          this.blur.emit({instance, event});
        });

      })
      .catch((r) => {
        throw new Error(r);
      })
    ;

  }

  updateValue(value) {
    this.model = value;
    this.onTouched();
    this.change.emit(value);
  }

  writeValue(value) {
    this.value = value || '';
    if (this.instance) {
      this.instance.setValue(this.value);
    }
  }

  changeMode(editorMode: EditorMode) {
    try {
      const mode = CodeMirror.findModeByName(editorMode);
      if (!mode) throw new Error(`Mode [${editorMode}] not found!`);

      import(`codemirror/mode/${mode.mode}/${mode.mode}`)
        .then(() => {

          this.instance.setOption('mode', mode.mimes ? mode.mimes[0] : mode.mime);

          this.code = editorMode;
          this.mode = mode;
        });
    } catch (er) {
      console.log(`[ERROR] => ${er}` );
    }
  }

  onChange(_) {}
  onTouched() {}
  registerOnChange(fn) { this.onChange = fn; }
  registerOnTouched(fn) { this.onTouched = fn; }

}
