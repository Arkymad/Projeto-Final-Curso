import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificadoPage } from './verificado.page';

const routes: Routes = [
  {
    path: '',
    component: VerificadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificadoPageRoutingModule {}
