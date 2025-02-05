import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="header">
      <div class="header-left">
        <h3>Exclusive</h3>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>
      </div>
      <div class="header-right">
        <div class="header-right-left">
          <input type="text" placeholder="What are you looking for" />
          <button class='search-button'>
          <img src="../../assets/rechercher.png" alt="rechercher" />  
          </button>        
        </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: flex;
      min-width: 1170px;
      height: 38px;
      background-color: #FFFFFF;
      margin-top: 88px;
      margin-left:135px;
    } 
    `,
})
export class HeaderComponent {}
