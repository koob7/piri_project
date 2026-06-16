import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./screens/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'identity',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./screens/identity/identity.component').then(
        (m) => m.IdentityComponent
      ),
  },
  {
    path: 'security',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./screens/security/security.component').then(
        (m) => m.SecurityComponent
      ),
  },
  {
    path: 'wallet',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./screens/wallet/wallet.component').then(
        (m) => m.WalletComponent
      ),
  },
  {
    path: 'settings',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./screens/settings/settings.component').then(
        (m) => m.SettingsComponent
      ),
  },
];
