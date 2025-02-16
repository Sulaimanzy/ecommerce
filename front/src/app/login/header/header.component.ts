import { Component } from '@angular/core';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MainHeaderComponent } from './main-header/main-header.component';

@Component({
  selector: 'app-header',
  imports: [TopHeaderComponent, MainHeaderComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
