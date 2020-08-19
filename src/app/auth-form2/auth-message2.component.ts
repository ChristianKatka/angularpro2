import { Component } from '@angular/core';

@Component({
  selector: 'auth-message2',
  template: `
    <div>
      You will be logged in for {{ days }} days
    </div>
  `
})
export class AuthMessage2Component {
  days: number = 7;
}