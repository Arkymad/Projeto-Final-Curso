import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IslamismoPageRoutingModule } from './islamismo-routing.module';

import { IslamismoPage } from './islamismo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IslamismoPageRoutingModule
  ],
  declarations: [IslamismoPage]
})
export class IslamismoPageModule {}
