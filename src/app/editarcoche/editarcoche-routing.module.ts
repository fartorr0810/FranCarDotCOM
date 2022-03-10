import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { EditarcochePage } from './editarcoche.page';

const routes: Routes = [
  {
    path: ':id',
    component: EditarcochePage,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarcochePageRoutingModule {}
