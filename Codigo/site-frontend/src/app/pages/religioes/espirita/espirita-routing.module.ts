import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspiritaPage } from './espirita.page';

const routes: Routes = [
  {
    path: '',
    component: EspiritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspiritaPageRoutingModule {}
