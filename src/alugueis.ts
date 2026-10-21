import type { Aluguel, Carro } from './types';
import { listarCarros } from './carros';
import { verClientes, procurarClienteId } from './clientes';
import promptSync = require('prompt-sync');
const prompt = promptSync({ sigint: true });

const alugueis: Aluguel[] = []
let contadorAtual = 0;
let teste = 2

function alugarCarro(): void {
    listarCarrosDisponiveis();
    const carroSelecionado = Number(prompt('Digite o id do carro que você deseja alugar: '));
    if (!verificarSeCarroDisponivel(carroSelecionado)) {
        console.log("Esse carro não está disponível");
        return;
    }
    console.log('Para qual cliente você deseja Alugar?');
    console.log(verClientes());
    const clienteSelecionado = Number(prompt('Digite o id do cliente que deseja alugar o veículo: '));
    if (!procurarClienteId(clienteSelecionado)) {
        console.log("Esse cliente não existe");
        return;
    }
    const preco = Number(prompt('Digite o preço do aluguel '));
    const dataAtual = new Date();
    const dataFim = new Date();
    dataFim.setDate(dataFim.getDate() + 7);
    const novoAluguel: Aluguel = {
        id: contadorAtual,
        idCarro: carroSelecionado,
        idCliente: clienteSelecionado,
        dataInicio: dataAtual,
        dataFim: dataFim,
        preco: preco
    }

    alugueis.push(novoAluguel);
    contadorAtual++;
}

function listarCarrosDisponiveis(): Carro[] {
    const listaCarros = listarCarros();
    const carrosDisponiveis = listaCarros.filter((carro: Carro) => {
        return !alugueis.find((aluguel: Aluguel) => {
            carro.id === aluguel.idCarro
        })
    })

    console.log('Os carros disponíveis são: ')
    console.log(carrosDisponiveis)

    return carrosDisponiveis;
}

function verificarSeCarroDisponivel(id: number): boolean {
    const listaDisponiveis = listarCarrosDisponiveis();
    return Boolean(listaDisponiveis.find((carro: Carro) => {
        return id === carro.id
    }))
}

function listarAlugueis(): Aluguel[] {
    return alugueis
}

export { alugarCarro, listarAlugueis }