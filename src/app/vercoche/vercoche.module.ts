import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VercochePageRoutingModule } from './vercoche-routing.module';

import { VercochePage } from './vercoche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VercochePageRoutingModule
  ],
  declarations: [VercochePage]
})
export class VercochePageModule {}
