import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaoVerificadoPageRoutingModule } from './nao-verificado-routing.module';

import { NaoVerificadoPage } from './nao-verificado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaoVerificadoPageRoutingModule
  ],
  declarations: [NaoVerificadoPage]
})
export class NaoVerificadoPageModule {}
