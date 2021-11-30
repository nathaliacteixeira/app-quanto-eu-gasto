import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionarCategoriaPage } from './adicionar-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionarCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionarCategoriaPageRoutingModule {}
