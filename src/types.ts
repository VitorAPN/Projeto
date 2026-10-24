type Cliente = {
    id: number
    nome: string,
    idade: number
}

type Carro = {
    id: number,
    placa: string,
    quilometragem: number,
    cor: string
}

type Aluguel = {
    id: number,
    idCarro: number,
    idCliente: number,
    dataInicio: Date,
    dataFim: Date,
    preco: number
}

type FiltrosCarro = {
    placa?: string | undefined,
    quilometragem?: number | undefined,
    cor?: string | undefined
}


export type {
    Carro,
    Cliente,
    Aluguel,
    FiltrosCarro
}



