import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvangelicoPage } from './evangelico.page';

const routes: Routes = [
  {
    path: '',
    component: EvangelicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvangelicoPageRoutingModule {}
