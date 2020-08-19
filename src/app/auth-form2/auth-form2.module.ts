
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthForm2Component } from './auth-form2.component';
import { AuthRemember2Component } from './auth-remember2.component';
import { AuthMessage2Component } from './auth-message2.component';

@NgModule({
  declarations: [
    AuthForm2Component,
    AuthRemember2Component,
    AuthMessage2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthForm2Component,
    AuthRemember2Component,
    AuthMessage2Component
  ],
  // when accessing components dynamically. (binding component to div via element ref or id)
  entryComponents: [
    AuthForm2Component
  ]
})
export class AuthForm2Module {}