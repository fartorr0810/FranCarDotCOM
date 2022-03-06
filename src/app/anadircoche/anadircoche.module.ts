import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadircochePageRoutingModule } from './anadircoche-routing.module';

import { AnadircochePage } from './anadircoche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadircochePageRoutingModule
  ],
  declarations: [AnadircochePage]
})
export class AnadircochePageModule {}
