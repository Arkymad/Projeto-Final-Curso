import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaoVerificadoPage } from './nao-verificado.page';

const routes: Routes = [
  {
    path: '',
    component: NaoVerificadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaoVerificadoPageRoutingModule {}
