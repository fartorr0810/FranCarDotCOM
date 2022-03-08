import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarcochePageRoutingModule } from './editarcoche-routing.module';

import { EditarcochePage } from './editarcoche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarcochePageRoutingModule
  ],
  declarations: [EditarcochePage]
})
export class EditarcochePageModule {}
