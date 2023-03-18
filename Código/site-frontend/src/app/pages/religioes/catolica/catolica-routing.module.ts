import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatolicaPage } from './catolica.page';

const routes: Routes = [
  {
    path: '',
    component: CatolicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatolicaPageRoutingModule {}
