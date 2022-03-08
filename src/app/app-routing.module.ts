import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'listarcoche',
    loadChildren: () => import('./listacoches/listacoches.module').then( m => m.ListacochesPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'anadircoche',
    loadChildren: () => import('./anadircoche/anadircoche.module').then( m => m.AnadircochePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'vercoche',
    loadChildren: () => import('./vercoche/vercoche.module').then( m => m.VercochePageModule)
  },
  {
    path: 'editarcoche',
    loadChildren: () => import('./editarcoche/editarcoche.module').then( m => m.EditarcochePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
