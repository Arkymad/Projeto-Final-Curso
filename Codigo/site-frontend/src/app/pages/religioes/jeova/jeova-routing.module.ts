import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JeovaPage } from './jeova.page';

const routes: Routes = [
  {
    path: '',
    component: JeovaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JeovaPageRoutingModule {}
