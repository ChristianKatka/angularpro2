import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// My modules
import { AuthFormModule } from './auth-form/auth-form.module';
import { AuthForm2Module } from './auth-form2/auth-form2.module';

// My directives
import { CreditCardDirective } from './credit-card/credit-card.directive';

@NgModule({
  declarations: [AppComponent, CreditCardDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthFormModule,
    AuthForm2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
