import { Component, Output, EventEmitter } from '@angular/core';

import { User } from '../models/auth-form.interface';

@Component({
  selector: 'auth-form2',
  styles: [`
    .email { border-color: #9f72e6; }
  `],
  template: './auth-form2.component.html'
})
export class AuthForm2Component {

  title = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

}