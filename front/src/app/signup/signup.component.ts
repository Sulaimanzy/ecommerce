import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-signup',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './signup.component.html',
})
export class SignupComponent {}
