import { Injectable } from '@angular/core';
import { InputBase } from './input-base';

export class DropdownService extends InputBase<string> {
  override controlType = 'dropdown';

}
