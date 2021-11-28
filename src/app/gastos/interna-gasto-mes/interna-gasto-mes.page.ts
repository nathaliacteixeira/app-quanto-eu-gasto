import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Gasto } from '../gastos.model';
import { GastosService } from '../gastos.service';

@Component({
  selector: 'app-interna-gasto-mes',
  templateUrl: './interna-gasto-mes.page.html',
  styleUrls: ['./interna-gasto-mes.page.scss'],
})
export class InternaGastoMesPage implements OnInit {
  gastos: Gasto[];
  constructor(
    private alertController: AlertController,
    private gastosService: GastosService
  ) { 
    this.gastos = this.gastosService.getGastos();
  }

  ngOnInit() {
  }
  excluir(gasto: Gasto){
    this.alertController.create({
      header: 'Remover',
      message: `Você deseja remover o gasto ${gasto.nome}?`,
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
