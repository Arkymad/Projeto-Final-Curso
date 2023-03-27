import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReligioesPage } from './religioes.page';

const routes: Routes = [
  {
    path: '',
    component: ReligioesPage
  },
  {
    path: 'catolica',
    loadChildren: () => import('./catolica/catolica.module').then( m => m.CatolicaPageModule)
  },
  {
    path: 'espirita',
    loadChildren: () => import('./espirita/espirita.module').then( m => m.EspiritaPageModule)
  },
  {
    path: 'jeova',
    loadChildren: () => import('./jeova/jeova.module').then( m => m.JeovaPageModule)
  },
  {
    path: 'islamismo',
    loadChildren: () => import('./islamismo/islamismo.module').then( m => m.IslamismoPageModule)
  },
  {
    path: 'evangelico',
    loadChildren: () => import('./evangelico/evangelico.module').then( m => m.EvangelicoPageModule)
  },
  {
    path: 'umbanda',
    loadChildren: () => import('./umbanda/umbanda.module').then( m => m.UmbandaPageModule)
  },
  {
    path: 'camdomble',
    loadChildren: () => import('./camdomble/camdomble.module').then( m => m.CamdomblePageModule)
  },
  {
    path: 'budismo',
    loadChildren: () => import('./budismo/budismo.module').then( m => m.BudismoPageModule)
  },
  {
    path: 'judaismo',
    loadChildren: () => import('./judaismo/judaismo.module').then( m => m.JudaismoPageModule)
  },
  {
    path: 'hinduismo',
    loadChildren: () => import('./hinduismo/hinduismo.module').then( m => m.HinduismoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReligioesPageRoutingModule {}
