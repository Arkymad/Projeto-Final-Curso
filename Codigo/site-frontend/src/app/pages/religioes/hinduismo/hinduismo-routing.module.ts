import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HinduismoPage } from './hinduismo.page';

const routes: Routes = [
  {
    path: '',
    component: HinduismoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HinduismoPageRoutingModule {}
