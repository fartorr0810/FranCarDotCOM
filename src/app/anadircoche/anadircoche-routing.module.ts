import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { AnadircochePage } from './anadircoche.page';

const routes: Routes = [
  {
    path: '',
    component: AnadircochePage,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadircochePageRoutingModule {}
