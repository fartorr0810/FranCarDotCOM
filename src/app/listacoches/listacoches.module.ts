import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListacochesPageRoutingModule } from './listacoches-routing.module';

import { ListacochesPage } from './listacoches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacochesPageRoutingModule
  ],
  declarations: [ListacochesPage]
})
export class ListacochesPageModule {}
