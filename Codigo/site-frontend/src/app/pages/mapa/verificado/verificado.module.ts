import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificadoPageRoutingModule } from './verificado-routing.module';

import { VerificadoPage } from './verificado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificadoPageRoutingModule
  ],
  declarations: [VerificadoPage]
})
export class VerificadoPageModule {}
