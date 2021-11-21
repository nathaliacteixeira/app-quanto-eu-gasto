export interface Gasto {
    nome: CategoriaGasto; 
    icon: string;
    metod_pag: MetodoPagamento;
    valor: number;
    data: Date;
    mes: Mes;
}

export enum CategoriaGasto{
    MERCADO = "Mercado",
    LAZER = "Lazer",
    PAGAMENTO = "Pagamento",
    COMIDA = "Comida",
    ROUPAS = "Roupas",
    COMBUSTIVEL = "Combustivel"
}

export enum MetodoPagamento{
    CARTAOCRED = "Cartao de Credito",
    CARTAODEB = "Cartao de Debito",
    DINHEIRO = "Dinheiro",
}

export enum Mes{
    JANEIRO = "Janeiro",
    FEVEREIRO = "Fevereiro",
    MARCO = "Março",
    ABRIL = "Abril",
    MAIO = "Maio",
    JUNHO = "Junho",
    JULHO = "Julho",
    SETEMBRO = "Setembro",
    OUTUBRO = "Outubro",
    NOVEMBRO = "Novembro",
    DEZEMBRO = "Dezembro"
}