import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () => import('./pages/user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user/create',
    loadChildren: () => import('./pages/user/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'user/details',
    loadChildren: () => import('./pages/user/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'user/list',
    loadChildren: () => import('./pages/user/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'paste/create',
    loadChildren: () => import('./pages/paste/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'paste/details',
    loadChildren: () => import('./pages/paste/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'paste/list',
    loadChildren: () => import('./pages/paste/list/list.module').then( m => m.ListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }