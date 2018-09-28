import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-pages',
  template: `
    <app-theme>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </app-theme>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;
}
