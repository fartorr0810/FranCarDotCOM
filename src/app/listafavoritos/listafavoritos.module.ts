import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListafavoritosPageRoutingModule } from './listafavoritos-routing.module';

import { ListafavoritosPage } from './listafavoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListafavoritosPageRoutingModule
  ],
  declarations: [ListafavoritosPage]
})
export class ListafavoritosPageModule {}
