import { Component, OnInit } from '@angular/core';
import { CategoriaGasto, Gasto, MetodoPagamento, Mes } from '../gastos.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  gastos: Gasto[];

  constructor() { 
    this.gastos = [
      {
        nome: CategoriaGasto.LAZER,
        icon: 'icon',
        metod_pag: MetodoPagamento.CARTAOCRED,
        valor: 99.0,
        data: new Date(2021,11,11),
        mes: Mes.JANEIRO,
      },
      {
        nome: CategoriaGasto.MERCADO,
        icon: 'icon',
        metod_pag: MetodoPagamento.DINHEIRO,
        valor: 100.0,
        data: new Date(2021,11,11), 
        mes: Mes.FEVEREIRO,
      },
      {
        nome: CategoriaGasto.PAGAMENTO,
        icon: 'icon',
        metod_pag: MetodoPagamento.CARTAODEB,
        valor: 50.0,
        data: new Date(2021,11,11), 
        mes: Mes.MARCO,
      },
    ];
  }

  ngOnInit() {}

}
