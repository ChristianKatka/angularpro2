import {
  Component,
  EventEmitter,
  Output,
  AfterContentInit,
  ContentChildren,
  QueryList,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  ChangeDetectorRef,
  ElementRef
} from '@angular/core';
import { User } from '../../models/auth-form.interface';
import { AuthRememberComponent } from './auth-remember.component';
import { AuthMessageComponent } from './auth-message.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  // wether remember me check box is checked or not
  showMessage: boolean;

  // html #email
  @ViewChild('email') email: ElementRef;

  // can acces the values in component ts file
  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;

  // allows to query the dom
  @ContentChildren(AuthRememberComponent) remember: QueryList<
    AuthRememberComponent
  >;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
  // cd used to go production mode so angular wont double check values that gets manipulated in ngafterviewinit
  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit() { 
    // nativa element aka ref 
    console.log(this.email.nativeElement);


    this.email.nativeElement.setAttribute('placeholder', 'enter your email address');
    // adding class to the elememnt
    this.email.nativeElement.classList.add('email');
    // type email without clicking input box
    this.email.nativeElement.focus();

    // message works in this lifecycle hook but cant change value in here cause angular double checks
    // console.log(this.message);
    if (this.message) {
      this.message.forEach((message) => {
        message.days = 12;
      }); 
      // angular wont throw error when manipulating data in viewinit
      this.cd.detectChanges();
    }
  }

  // subscibe to checked @output and when it changes change showmessage boolean
  ngAfterContentInit() {
    // returns undefined in this lifecycle hook
      // this.message.days = 31;

    // if we have access to this component
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe(
          (checked: boolean) => (this.showMessage = checked)
        );
      });
    }
  }
}
