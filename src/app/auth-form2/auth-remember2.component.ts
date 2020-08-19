import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'auth-remember2',
  template: `
    <label>
      <input type="checkbox" (change)="onChecked($event.target.checked)">
      Keep me logged in
    </label>
  `
})
export class AuthRemember2Component {

  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

  onChecked(value: boolean) {
    this.checked.emit(value);
  }

}