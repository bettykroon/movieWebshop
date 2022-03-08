import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { CartComponent } from './components/cart/cart.component';
import { WebshopComponent } from './components/webshop/webshop.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CheckoutComponent,
    HeaderComponent,
    NotFoundComponent,
    ThanksComponent,
    CartComponent,
    WebshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
