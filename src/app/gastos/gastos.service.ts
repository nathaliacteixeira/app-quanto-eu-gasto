import { Injectable } from '@angular/core';
import { CategoriaGasto, Gasto, Mes, MetodoPagamento } from './gastos.model';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  private gastos: Gasto[]; 

  constructor() {
    this.gastos = [
      {
        nome: 'compras',
        categoria: CategoriaGasto.MERCADO,
        icon: '',
        metod_pag: MetodoPagamento.CARTAOCRED,
        valor: 251,
        data: new Date(2021,9,19),
        mes: Mes.NOVEMBRO,
      },
      {
        nome: 'casamento',
        categoria: CategoriaGasto.ROUPAS,
        icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.freepik.com%2Ficones-gratis%2Fcabide-de-roupas_750230.htm&psig=AOvVaw0Popt9Y5dINlruALll2qJm&ust=1637624413038000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDD9r7QqvQCFQAAAAAdAAAAABAD',
        metod_pag: MetodoPagamento.DINHEIRO,
        valor: 152.99,
        data: new Date(2021,11,11),
        mes: Mes.FEVEREIRO,
      },
      {
        nome: 'parque',
        categoria: CategoriaGasto.LAZER,
        icon: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fwine-glass-black-icon-symbol-isolated-vector-illustration-vector-id1254978091%3Fk%3D20%26m%3D1254978091%26s%3D170667a%26w%3D0%26h%3DcUpXnC5UBduE1sRHL0t9Ztvnjo_KozazpC43NlSWSGM%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fbr%2Fvetor%2Fs%25C3%25ADmbolo-de-%25C3%25ADcone-preto-de-ta%25C3%25A7a-de-vinho-ilustra%25C3%25A7%25C3%25A3o-vetorial-isolada-gm1254978091-366993330&tbnid=ua4lffedVm48IM&vet=12ahUKEwjRqu7Q0Kr0AhUfrpUCHSayAdUQMygEegUIARDIAQ..i&docid=CQ3LV-jDIQgKkM&w=416&h=416&q=icone%20de%20ta%C3%A7a%20de%20vinho&ved=2ahUKEwjRqu7Q0Kr0AhUfrpUCHSayAdUQMygEegUIARDIAQ',
        metod_pag: MetodoPagamento.DINHEIRO,
        valor: 57.90,
        data: new Date(2021,11,19),
        mes: Mes.ABRIL
      },
    ];
   }

   public getGastos(){
     return this.gastos;
   }

   public remove(nome: string){
     this.gastos = this.gastos.filter((gasto) => gasto.nome !== nome);
   }
}
