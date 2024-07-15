import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { CartComponent } from './cart/cart.component';
import { AuthComponent } from './pages/auth/auth.component';
import { authGuard } from './gaurds/auth.guard';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'auth' , component: AuthComponent,canActivate: [authGuard]
  },

  {
    path: 'cart',component:CartComponent,canActivate: [authGuard]
  },
  {
    path: 'footer', component:FooterComponent,canActivate: [authGuard]
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
