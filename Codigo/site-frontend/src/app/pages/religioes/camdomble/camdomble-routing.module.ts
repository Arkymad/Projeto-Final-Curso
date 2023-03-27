import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamdomblePage } from './camdomble.page';

const routes: Routes = [
  {
    path: '',
    component: CamdomblePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamdomblePageRoutingModule {}
