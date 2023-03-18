import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatolicaPageRoutingModule } from './catolica-routing.module';

import { CatolicaPage } from './catolica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatolicaPageRoutingModule
  ],
  declarations: [CatolicaPage]
})
export class CatolicaPageModule {}
