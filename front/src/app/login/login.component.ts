import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-login',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
