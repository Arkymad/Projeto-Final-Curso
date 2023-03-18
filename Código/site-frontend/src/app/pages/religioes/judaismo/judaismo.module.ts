import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JudaismoPageRoutingModule } from './judaismo-routing.module';

import { JudaismoPage } from './judaismo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JudaismoPageRoutingModule
  ],
  declarations: [JudaismoPage]
})
export class JudaismoPageModule {}
