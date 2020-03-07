import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Inject, Input, OnInit, Optional} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {BooleanInput} from '../../helpers/decorator.input.boolean';
import {CodeEditorIconService} from './code-editor-icon-service';
import {convertIconToSVG, Icon, IconName, Icons, RotateProp, SizeProp} from '../../models/icons';

@Component({
  selector: 'code-editor-icon',
  template: `<ng-content></ng-content>`,
  styleUrls: ['code-editor.icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeEditorIconComponent implements OnInit {

  @HostBinding('class.spin')
  @BooleanInput @Input() spin: boolean;

  @HostBinding('class.pulse')
  @BooleanInput @Input() pulse: boolean;

  @HostBinding('class.fw')
  @BooleanInput @Input() fixedWidth: boolean;

  @HostBinding('class.border')
  @BooleanInput @Input('show-border') border: boolean;

  @Input() title?: string;

  @Input() inverse?: boolean;

  @Input() set rotate(rotate: RotateProp) {
    this.element.nativeElement.classList.add('rotate-' + rotate);
  }

  @Input() set size(size: SizeProp) {
    this.element.nativeElement.classList.add('size-' + size);
  }

  @Input()
  set icon(icon: IconName) {
    this.iconSVG = Icons.find(i => i.name === icon);
    if (!this.iconSVG) {
      console.log(`Icon [${icon}] not found!`);
      return;
    }
    const iconSVG = this.createIconSVGElement(this.iconSVG);
    this.element.nativeElement.appendChild(iconSVG);
  }

  iconSVG: Icon;

  constructor(
    private element: ElementRef,
    private iconService: CodeEditorIconService,
    @Optional() @Inject(DOCUMENT) private document: any
    ) { }

  ngOnInit() {
  }

  private createIconSVGElement(icon: Icon): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = convertIconToSVG(icon);
    return div.querySelector('svg')
      || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
  }

}
