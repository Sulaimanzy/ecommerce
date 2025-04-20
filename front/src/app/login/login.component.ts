import { Component } from '@angular/core';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-login',
  imports: [
    HeroBannerComponent,
    LoginFormComponent,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
