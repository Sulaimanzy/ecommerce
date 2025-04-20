import { Component } from '@angular/core';
import { HeroBannerComponent } from "./hero-banner/hero-banner.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CartDisplayComponent } from "./cart-display/cart-display.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-cart',
  imports: [HeroBannerComponent, NavbarComponent, CartDisplayComponent, FooterComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
