import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudismoPage } from './budismo.page';

const routes: Routes = [
  {
    path: '',
    component: BudismoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudismoPageRoutingModule {}
