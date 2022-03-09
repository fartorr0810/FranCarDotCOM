import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListafavoritosPage } from './listafavoritos.page';

const routes: Routes = [
  {
    path: '',
    component: ListafavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListafavoritosPageRoutingModule {}
