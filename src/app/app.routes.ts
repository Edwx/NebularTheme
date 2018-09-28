import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
