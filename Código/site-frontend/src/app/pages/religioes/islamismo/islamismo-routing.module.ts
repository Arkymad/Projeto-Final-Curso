import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IslamismoPage } from './islamismo.page';

const routes: Routes = [
  {
    path: '',
    component: IslamismoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IslamismoPageRoutingModule {}
