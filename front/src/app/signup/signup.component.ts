import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@Component({
  selector: 'app-signup',
  imports: [
    HeroBannerComponent,
    NavbarComponent,
    SignupFormComponent,
    FooterComponent,
  ],
  templateUrl: './signup.component.html',
})
export class SignupComponent {}
