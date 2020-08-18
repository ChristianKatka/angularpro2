import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// My modules
import { AuthFormModule } from './auth-form/auth-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AuthFormModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
