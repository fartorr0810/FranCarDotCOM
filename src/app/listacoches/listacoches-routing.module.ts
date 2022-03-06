import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacochesPage } from './listacoches.page';

const routes: Routes = [
  {
    path: '',
    component: ListacochesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacochesPageRoutingModule {}
