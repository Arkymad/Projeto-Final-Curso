import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamdomblePageRoutingModule } from './camdomble-routing.module';

import { CamdomblePage } from './camdomble.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamdomblePageRoutingModule
  ],
  declarations: [CamdomblePage]
})
export class CamdomblePageModule {}
