import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JeovaPageRoutingModule } from './jeova-routing.module';

import { JeovaPage } from './jeova.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JeovaPageRoutingModule
  ],
  declarations: [JeovaPage]
})
export class JeovaPageModule {}
