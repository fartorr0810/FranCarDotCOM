import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { ListacochesPage } from './listacoches.page';

const routes: Routes = [
  {
    path: '',
    component: ListacochesPage,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacochesPageRoutingModule {}
