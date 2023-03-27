import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudismoPageRoutingModule } from './budismo-routing.module';

import { BudismoPage } from './budismo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudismoPageRoutingModule
  ],
  declarations: [BudismoPage]
})
export class BudismoPageModule {}
