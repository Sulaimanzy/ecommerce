import { Component } from '@angular/core';
import { TopHeaderComponent } from './top-header/top-header.component';

@Component({
  selector: 'app-root',
  imports: [TopHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front';
}
