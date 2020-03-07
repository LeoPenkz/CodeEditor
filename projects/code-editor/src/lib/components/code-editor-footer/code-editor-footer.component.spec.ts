import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEditorFooterComponent } from './code-editor-footer.component';

describe('CodeEditorFooterComponent', () => {
  let component: CodeEditorFooterComponent;
  let fixture: ComponentFixture<CodeEditorFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeEditorFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeEditorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
