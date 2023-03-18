import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JudaismoPage } from './judaismo.page';

const routes: Routes = [
  {
    path: '',
    component: JudaismoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JudaismoPageRoutingModule {}
