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


export type {
    Carro,
    Cliente,
    Aluguel
}



