# CodeEditor

[![Git Hub Release](https://img.shields.io/badge/release-0.0.1-green)](https://github.com/LeoPenkz/CodeEditor)
![](https://img.shields.io/badge/status-development-yellowgreen)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/LeoPenkz/MeanStack?label=last%20release)

CodeEditor wrappers a CodeMirror editor in a Angular library 
for use with Angular Forms. Several features have been added 
to make it easier to use in your applications.

Table of contents
=================

  * [Features](##features)
  * [Getting started](#getting-started)
  * [Usage](#usage-sample)
  * [API](#api)

## Features
- [x] Compatible with Angular Forms (Both Reactive and Template-driven forms).
- [x] Automatic import of code modes.
- [x] Automatic import of styles.
- [x] Toolbar with configurable options
- [x] Footer with configurable options

## Getting started

### Step 1: Install `CodeEditor`:

#### NPM
```shell
npm i @penkz/code-editor
```
### Step 2: Import the CodeEditorModule:
```js
import {CodeEditorModule} from '@penkz/code-editor';

@NgModule({
  declarations: [AppComponent],
  imports: [CodeEditorModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Usage sample

```html
<code-editor
  [(ngModel)]="model"
></code-editor>

```

## API

### Inputs
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title  | `string` | `_` | no | History identifier of history list. When valid history identifier is given, then component stores selected item to local storage of user's browser. If it is null then history is hidden. History list is visible if at least one history item is stored. History identifier must be unique.  |
| placeHolder  | `string` | `-` | no |  HTML `<input>` placeholder text.  |
| [(ngModel)] | `any` | `_` | no |  Tracks the value bound to this directive. Used with Template-driven forms. For more details click [here](https://angular.io/api/forms/NgModel) |
| [formControl] / formControlName | `string` | `_` | no |  Tracks the FormControl instance bound to the directive. Used with Reactive forms. For more details click [here](https://angular.io/api/forms/FormControlDirective) and [here](https://angular.io/api/forms/FormControlName) |
| isLoading | `boolean` | `false` | no | Set the loading state when data is being loaded. |
| disabled | `boolean` | `false` | no | input disable/enable. |

### Outputs
| Output  | Description |
| ------------- | ------------- |
| (change) | Event is emitted when an input is changed. |
| (focus) | Event is emitted when an input is focused. |


### Methods (controls)
 Name  | Description |
| ------------- | ------------- |
| clear | Clears the editor text |

## Versioning

We use [Semantic](https://docs.npmjs.com/about-semantic-versioning) for versioning. 

For the versions available, see the [tags on this repository](https://github.com/LeoPenkz/CodeEditor/tags). 

## Authors
[![](https://avatars3.githubusercontent.com/u/10280553?s=50&v=4)](http://github.com/LeoPenkz)

