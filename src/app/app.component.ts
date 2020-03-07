import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'code-editor-app';

  formGroup: FormGroup;
  text = 'Text Test';
  php = '<?php echo "Hello World!"; ?>';
  sql = `SELECT * FROM TABLE WHERE COLUMN = 'VALUE'`;

  constructor(
    private builder: FormBuilder
  ) {
    this.formGroup = this.builder.group({
      text: [this.text],
      sql: [this.sql],
      php: [this.php]
    });
  }
}
