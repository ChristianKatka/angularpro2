import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// forms module need to be imported to app module and child modules to work!
import { FormsModule } from '@angular/forms';

// components
import { AuthFormComponent } from './auth-form-component/auth-form.component';
import { AuthRememberComponent } from './auth-form-component/auth-remember.component';
import { AuthMessageComponent } from './auth-form-component/auth-message.component';

// controllers
import { AuthFormController } from './auth-form-controller/auth-form.controller';

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    AuthFormController,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    AuthFormController,
  ],
  providers: [],
})
export class AuthFormModule {}
