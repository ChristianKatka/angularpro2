// directives cant have a template
// directives is like a component, but without template or css file

import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  // have to use attribute selector [] se we can bind it to template like this; <input credit-card>
  selector: '[credit-card]',
})
export class CreditCardDirective {
  // add property or change property to host
  @HostBinding('style.border')
  border: string;

  // host is the element we have bound the directive to. define element name: input
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // casts target to htmlInputElement
    const input = event.target as HTMLInputElement;
    // trim out any existing white space
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }
    let numbers = [];
    // output = ['1234', '1234', '1234', '1234']
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }
    // every 4 characters is going to get seperated with space
    input.value = numbers.join('  ');

    // BORDER
    this.border = '';
    // check if trimmed only contains numbers
    if (/[^\d]+/.test(trimmed)) {
        // if string contains something other than numbers
        // end result in html style="border: 1px solid red;"
        this.border = '1px solid red';
    }
  }
}
