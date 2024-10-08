import { Routes } from '@angular/router';
import { LandingPage } from './Pages/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: LandingPage }
];
