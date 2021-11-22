export interface Gasto {
    nome: CategoriaGasto; 
    icon: string;
    metod_pag: MetodoPagamento;
    valor: number;
    data: Date;
}

export enum CategoriaGasto{
    MERCADO = 'Mercado',
    LAZER = 'Lazer',
    PAGAMENTO = 'Pagamento',
    COMIDA = 'Comida',
    ROUPAS = 'Roupas',
    COMBUSTIVEL = 'Combustivel',
}

export enum MetodoPagamento{
    CARTAOCRED = 'Cartao de Credito',
    CARTAODEB = 'Cartao de Debito',
    DINHEIRO = 'Dinheiro',
}