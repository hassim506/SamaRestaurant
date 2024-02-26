import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'listing',
        loadChildren: () => import('../Screens/listing/listing.module').then( m => m.ListingPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../Screens/cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../Screens/signup/signup.module').then( m => m.SignupPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../Screens/login/login.module').then( m => m.LoginPageModule)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('../Screens/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
      },
      {
        path: 'landing',
        loadChildren: () => import('../Screens/landing/landing.module').then( m => m.LandingPageModule)
      },
      {
        path: 'commande',
        loadChildren: () => import('../Screens/commande/commande.module').then( m => m.CommandePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../Screens/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../Screens/contact/contact.module').then( m => m.ContactPageModule)
      },
    
    
      {
        path: '',
        redirectTo: 'listing',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
