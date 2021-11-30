import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Gasto, MetodoPagamento, Mes } from '../gastos.model';
import { GastosService } from '../gastos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  gastos: Gasto[];

  constructor(
    private alertController: AlertController,
    private gastosService: GastosService
  ) {
    this.gastos = this.gastosService.getGastos();
  }
  
  ngOnInit() {}
  excluir(gasto: Gasto){
    this.alertController.create({
      header: 'Remover',
      message: `Você deseja remover o gasto <strong> ${gasto.nome}</strong> ?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.gastosService.remove(gasto.nome);
            this.gastos = this.gastosService.getGastos();
          },
        },
        {
          text: 'Não',
        },
      ],
    })
    .then((alert) => alert.present());
  }
  
}
