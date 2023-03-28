import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CriarEventoPageRoutingModule } from './criar-evento-routing.module';
import { CriarEventoPage } from './criar-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarEventoPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CriarEventoPage]
})
export class CriarEventoPageModule {}
