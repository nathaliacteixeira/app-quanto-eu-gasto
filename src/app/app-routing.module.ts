import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./gastos/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'adicionar',
    loadChildren: () => import('./gastos/adicionar/adicionar.module').then( m => m.AdicionarPageModule)
  },
  {
    path: 'interna-gasto-mes',
    loadChildren: () => import('./gastos/interna-gasto-mes/interna-gasto-mes.module').then( m => m.InternaGastoMesPageModule)
  },
  {
    path: 'adicionar-categoria',
    loadChildren: () => import('./gastos/adicionar-categoria/adicionar-categoria.module').then( m => m.AdicionarCategoriaPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
