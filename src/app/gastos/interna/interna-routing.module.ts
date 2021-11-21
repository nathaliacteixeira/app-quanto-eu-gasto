import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternaPage } from './interna.page';

const routes: Routes = [
  {
    path: '',
    component: InternaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternaPageRoutingModule {}
