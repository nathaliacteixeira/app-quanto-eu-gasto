import { Injectable } from '@angular/core';
import { CategoriaGasto, Gasto, Mes, MetodoPagamento } from './gastos.model';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  private gastos: Gasto[]; 
  private contador = 5;

  constructor() {
    this.gastos = [
      {
        id: 1,
        nome: CategoriaGasto.MERCADO,
        metod_pag: MetodoPagamento.CARTAOCRED,
        valor: 251,
        data: new Date(2021,9,19),
        mes: Mes.NOVEMBRO,
      },
      {
        id: 2,
        nome: CategoriaGasto.ROUPAS,
        metod_pag: MetodoPagamento.DINHEIRO,
        valor: 152.99,
        data: new Date(2021,11,11),
        mes: Mes.FEVEREIRO,
      },
      {
        id: 3,
        nome: CategoriaGasto.LAZER,
        metod_pag: MetodoPagamento.DINHEIRO,
        valor: 57.90,
        data: new Date(2021,11,19),
        mes: Mes.ABRIL
      },
      {
        id: 4,
        nome: CategoriaGasto.PAGAMENTO,
        metod_pag: MetodoPagamento.DINHEIRO,
        valor: 125.90,
        data: new Date(2021,5,19),
        mes: Mes.MAIO
      },
    ];
   }

   public getGastos(){
     return this.gastos;
   }

   public remove(nome: string){
     this.gastos = this.gastos.filter((gasto) => gasto.nome !== nome);
   }

   public save(gasto: Gasto){
     if (gasto.id){
       const index = this.gastos.findIndex(g => g.id === gasto.id);
       this.gastos[index] = gasto;
      }else{
       const id = this.contador++;
       this.gastos.push({...gasto,id});
     }
    }

    public findById(id: number) {
      return this.gastos.find(gasto => gasto.id === id);
    }
}
