import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UmbandaPage } from './umbanda.page';

const routes: Routes = [
  {
    path: '',
    component: UmbandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UmbandaPageRoutingModule {}
