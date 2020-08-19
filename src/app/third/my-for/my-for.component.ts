import { Component } from '@angular/core';

@Component({
  selector: 'app-my-for',
  templateUrl: 'my-for.component.html',
})
export class MyForComponent {
  items = [
    {
      name: 'Mark Hoppus',
      age: 44,
      location: 'California',
    },
    {
      name: 'Tom Delonge',
      age: 41,
      location: 'California',
    },
    {
      name: 'Travis Barker',
      age: 41,
      location: 'California',
    },
  ];
  constructor() {
    setTimeout(() => {
      // pushing items to array but with better way
      this.items = [
        ...this.items,
        { name: 'Matt Skiba', age: 40, location: 'California' },
      ];
    }, 2000);
  }
}
