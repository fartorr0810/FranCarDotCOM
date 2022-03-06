import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadircochePage } from './anadircoche.page';

const routes: Routes = [
  {
    path: '',
    component: AnadircochePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadircochePageRoutingModule {}
