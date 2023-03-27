import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspiritaPageRoutingModule } from './espirita-routing.module';

import { EspiritaPage } from './espirita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspiritaPageRoutingModule
  ],
  declarations: [EspiritaPage]
})
export class EspiritaPageModule {}
