import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvangelicoPageRoutingModule } from './evangelico-routing.module';

import { EvangelicoPage } from './evangelico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvangelicoPageRoutingModule
  ],
  declarations: [EvangelicoPage]
})
export class EvangelicoPageModule {}
