import { Component } from '@angular/core';
import { HeroBannerComponent } from "./hero-banner/hero-banner.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-product',
  imports: [HeroBannerComponent, NavbarComponent, ProductDetailsComponent, FooterComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
