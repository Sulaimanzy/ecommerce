import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';

@Component({
  selector: 'app-root',
  imports:[TopHeaderComponent,HeaderComponent],
  template: `<app-top-header /><app-header />`,
})
export class AppComponent {
  title = 'front';
}
