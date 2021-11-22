import { Component, OnInit } from '@angular/core';
import { Gasto } from '../gastos.model';
import { GastosService } from '../gastos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  gastos: Gasto[];

  constructor(
    private gastosService: GastosService
  ) {
    this.gastos = this.gastosService.getGastos();
  }

  ngOnInit() {
  }

}
