export interface Gasto {
    id: number;
    nome: string;
    metod_pag: MetodoPagamento;
    valor: number;
    data: Date;
    mes: Mes;
}

export enum MetodoPagamento{
    CARTAOCRED = 'Cartão de Crédito',
    CARTAODEB  = 'Cartao de Débito',
    DINHEIRO   = 'Dinheiro',
}

export enum Mes{
    JANEIRO   = 'Janeiro',
    FEVEREIRO = 'Fevereiro',
    MARCO     = 'Março',
    ABRIL     = 'Abril',
    MAIO      = 'Maio',
    JUNHO     = 'Junho',
    JULHO     = 'Julho',
    AGASTO    = 'Agosto',
    SETEMBRO  = 'Setembro',
    OUTUBRO   = 'Outubro',
    NOVEMBRO  = 'Novembro',
    DEZEMBRO  = 'Dezembro',
}