import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'AC Dev Studio | Desarrollo Web y Software a Medida en México',
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent),
    title: 'Servicios de Desarrollo Web y Software | AC Dev Studio',
  },
  {
    path: 'portafolio',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
    title: 'Portafolio de Proyectos | AC Dev Studio',
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    title: 'Nosotros | AC Dev Studio',
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contacto | AC Dev Studio',
  },
  { path: '**', redirectTo: '' },
];
