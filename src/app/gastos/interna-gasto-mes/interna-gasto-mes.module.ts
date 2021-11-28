import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternaGastoMesPageRoutingModule } from './interna-gasto-mes-routing.module';

import { InternaGastoMesPage } from './interna-gasto-mes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternaGastoMesPageRoutingModule
  ],
  declarations: [InternaGastoMesPage]
})
export class InternaGastoMesPageModule {}
