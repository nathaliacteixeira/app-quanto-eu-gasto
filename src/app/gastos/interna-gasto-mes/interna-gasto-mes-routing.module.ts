import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternaGastoMesPage } from './interna-gasto-mes.page';

const routes: Routes = [
  {
    path: '',
    component: InternaGastoMesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternaGastoMesPageRoutingModule {}
