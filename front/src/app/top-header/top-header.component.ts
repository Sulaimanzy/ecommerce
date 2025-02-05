import { Component } from '@angular/core';


@Component({
  selector: 'app-top-header',
  imports: [],
  template: `<div>
    <div class="header-text">
      <div class="header-text-left">
        <span
          >Summer Sale All Swim Suits And Free Express Delivery - OFF 50%!</span
        >
        <a href="#">ShopNow</a>
      </div>
      <div class="header-text-right">
        <select name="" id="">
          <option value="English">English</option>
          <option value="Francais">Français</option>
        </select>
      </div>
    </div>
  </div>`,
  styles: `
    :host {
      display: flex;
      min-width: 1440px;
      max-width:100%;
      height: 48px;
      background-color:#000000;
      gap:148px;
    }
    `,
})
export class TopHeaderComponent {}
