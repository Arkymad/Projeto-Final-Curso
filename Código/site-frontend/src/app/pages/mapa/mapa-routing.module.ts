import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaPage } from './mapa.page';

const routes: Routes = [
  {
    path: '',
    component: MapaPage,
  },
  {
    path: 'verificado',
    loadChildren: () =>
      import('./verificado/verificado.module').then(
        (m) => m.VerificadoPageModule
      ),
  },
  {
    path: 'nao-verificado',
    loadChildren: () =>
      import('./nao-verificado/nao-verificado.module').then(
        (m) => m.NaoVerificadoPageModule
      ),
  },  {
    path: 'todos',
    loadChildren: () => import('./todos/todos.module').then( m => m.TodosPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaPageRoutingModule {}
