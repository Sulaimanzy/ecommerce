import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Log In Page',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Sign Up Page',
  },
  {
    path: 'product',
    component: ProductComponent,
    title: 'Product Page',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Page',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart Page',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Page',
  },
  {
    path: '**',
    component: ErrorPageComponent,
    title: 'Error Page',
  },
];
