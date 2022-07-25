import { Injectable } from '@angular/core';
import { InputBase } from './input-base';

export class TextBoxService extends InputBase<string> {
  override controlType = 'text-box';

}
