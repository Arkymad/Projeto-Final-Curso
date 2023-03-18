import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UmbandaPageRoutingModule } from './umbanda-routing.module';

import { UmbandaPage } from './umbanda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UmbandaPageRoutingModule
  ],
  declarations: [UmbandaPage]
})
export class UmbandaPageModule {}
