import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VercochePage } from './vercoche.page';

const routes: Routes = [
  {
    path: ':id',
    component: VercochePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VercochePageRoutingModule {}
