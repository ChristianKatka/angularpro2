import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// My modules
import { AuthFormModule } from './auth-form/auth-form.module';
import { ThirdModule } from './third/third.module';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthFormModule,
    ThirdModule,
    StockInventoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
