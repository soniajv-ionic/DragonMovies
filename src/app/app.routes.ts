import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'details/:title',
    loadComponent: () => import('./pages/details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'details',
    loadComponent: () => import('./pages/details/details.page').then( m => m.DetailsPage)
  }
];
