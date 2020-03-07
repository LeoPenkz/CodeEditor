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

  @Input() code: string = 'Textile';

  @Output() change = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() cursorActivity = new EventEmitter();

  @ViewChild('codeEditor') codeEditor;

  @Input() config;
  @Input() set model(v) {
    if (v !== this.value) {
      this.value = v;
      this.onChange(v);
    }
  }
  get model() {
    return this.value;
  }

  private instance = null;
  private value = '';
  private mode: any;

  constructor(
    // private editorService: CodeEditorService
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
      theme: 'darcula'
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
        console.log(r);
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
  onChange(_) {}
  onTouched() {}
  registerOnChange(fn) { this.onChange = fn; }
  registerOnTouched(fn) { this.onTouched = fn; }

}
