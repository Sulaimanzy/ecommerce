import { Component } from '@angular/core';
import { HeroBannerComponent } from "./hero-banner/hero-banner.component";
import { NavbarComponent } from './navbar/navbar.component';
import { AboutDisplayComponent } from "./about-display/about-display.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-about',
  imports: [HeroBannerComponent, NavbarComponent, AboutDisplayComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
