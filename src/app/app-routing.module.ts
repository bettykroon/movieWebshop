import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { WebshopComponent } from './components/webshop/webshop.component';

const routes: Routes = [
  {path: '', component: WebshopComponent},
  {path: 'varukorg', component: CartComponent},
  {path: 'kassa', component: CheckoutComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'tack', component: ThanksComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
