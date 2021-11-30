import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarCategoriaPageRoutingModule } from './adicionar-categoria-routing.module';

import { AdicionarCategoriaPage } from './adicionar-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarCategoriaPageRoutingModule
  ],
  declarations: [AdicionarCategoriaPage]
})
export class AdicionarCategoriaPageModule {}
