import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReligioesPageRoutingModule } from './religioes-routing.module';

import { ReligioesPage } from './religioes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReligioesPageRoutingModule
  ],
  declarations: [ReligioesPage]
})
export class ReligioesPageModule {}
