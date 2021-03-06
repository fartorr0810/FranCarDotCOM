import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { ListafavoritosPage } from './listafavoritos.page';

const routes: Routes = [
  {
    path: '',
    component: ListafavoritosPage,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListafavoritosPageRoutingModule {}
