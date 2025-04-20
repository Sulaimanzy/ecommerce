import { Component } from '@angular/core';
import { HeroBannerComponent } from "./hero-banner/hero-banner.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ErrorDisplayComponent } from "./error-display/error-display.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-error-page',
  imports: [HeroBannerComponent, NavbarComponent, ErrorDisplayComponent, FooterComponent],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {

}
