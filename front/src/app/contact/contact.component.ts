import { Component } from '@angular/core';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from '../signup/footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [
    HeroBannerComponent,
    NavbarComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {}
