import { Injectable } from '@angular/core';
import { CategoriaGasto, Gasto, MetodoPagamento } from './gastos.model';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  gastos: Gasto[];

  constructor() {
    this.gastos = [
      {
        nome: CategoriaGasto.MERCADO,
        icon: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2387%2FPNG%2F512%2Fmarket_icon_144628.png&imgrefurl=https%3A%2F%2Ficon-icons.com%2Fpt%2Ficone%2Fmercado%2F144628&tbnid=51aX-PVqikcOgM&vet=12ahUKEwiR7_Ou0Kr0AhV4p5UCHbMDAvcQMygLegUIARDSAQ..i&docid=HJxf-cEwiN0LiM&w=512&h=512&q=icone%20de%20mercado&ved=2ahUKEwiR7_Ou0Kr0AhV4p5UCHbMDAvcQMygLegUIARDSAQ',
        metod_pag: MetodoPagamento.CARTAOCRED,
        valor: 251.68,
        data: new Date(2021,25,09),
      },
      {
        nome: CategoriaGasto.ROUPAS,
        icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ficones-gratis%2Fcabide-de-roupas_750230.htm&psig=AOvVaw0Popt9Y5dINlruALll2qJm&ust=1637624413038000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDD9r7QqvQCFQAAAAAdAAAAABAD',
        metod_pag: MetodoPagamento.DINHEIRO,
        valor: 152.99,
        data: new Date(2021,27,09),
      },
      {
        nome: CategoriaGasto.LAZER,
        icon: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fwine-glass-black-icon-symbol-isolated-vector-illustration-vector-id1254978091%3Fk%3D20%26m%3D1254978091%26s%3D170667a%26w%3D0%26h%3DcUpXnC5UBduE1sRHL0t9Ztvnjo_KozazpC43NlSWSGM%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fbr%2Fvetor%2Fs%25C3%25ADmbolo-de-%25C3%25ADcone-preto-de-ta%25C3%25A7a-de-vinho-ilustra%25C3%25A7%25C3%25A3o-vetorial-isolada-gm1254978091-366993330&tbnid=ua4lffedVm48IM&vet=12ahUKEwjRqu7Q0Kr0AhUfrpUCHSayAdUQMygEegUIARDIAQ..i&docid=CQ3LV-jDIQgKkM&w=416&h=416&q=icone%20de%20ta%C3%A7a%20de%20vinho&ved=2ahUKEwjRqu7Q0Kr0AhUfrpUCHSayAdUQMygEegUIARDIAQ',
        metod_pag: MetodoPagamento.DINHEIRO,
        valor: 57.90,
        data: new Date(2021,30,09),
      }
    ];
   }

   public getGastos(){
     return this.gastos;
   }
}
