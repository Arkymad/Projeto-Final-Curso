import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HinduismoPageRoutingModule } from './hinduismo-routing.module';

import { HinduismoPage } from './hinduismo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HinduismoPageRoutingModule
  ],
  declarations: [HinduismoPage]
})
export class HinduismoPageModule {}
