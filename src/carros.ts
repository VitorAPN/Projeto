import type { Carro } from "./types";
import { validaTexto } from "./helper"
import promptSync = require('prompt-sync');

const prompt = promptSync({ sigint: true });

const carros: Carro[] = [];

function cadastrarCarro() {
    const placaInput: string = String(prompt('Digite a placa do carro '));
    const quilometragemInput: number = Number(prompt('Digite a quilometragem do carro '));
    const corInput: string = String(prompt('Digite a cor do carro '));
    const idInput: number = Number(prompt('Digite o id '));

    if (carros.find((carro: Carro) => {
        return carro.id === idInput
    })) {
        console.log('Já existe carro com esse ID')
        return;
    }

    const novoCarro: Carro = {
        placa: placaInput,
        quilometragem: quilometragemInput,
        cor: corInput,
        id: idInput
    }

    adicionarCarro(novoCarro);
}

function adicionarCarro(carro: Carro): boolean {
    if (!validaTexto(carro.placa) || !validaTexto(carro.cor)) {
        return false
    }
    carros.push(carro)
    return true
}


function buscarCarrosPelaCor(cor: string): Carro[] {
    return carros.filter((carro: Carro) => {
        return carro.cor === cor
    })
}

function removerCarro(): void {
    const idInput: number = Number(prompt('Digite o id do qual você deseja excluir'));
    const carroIndex = carros.findIndex((carro) => carro.id === idInput);
    carros.splice(carroIndex);
}

function buscarCarroPelaQuilometragemMaxima(quilometragem: number): Carro[] {
    return carros.filter((carro: Carro) => {
        return carro.quilometragem <= quilometragem
    })
}

function listarCarros(): Carro[] {
    return carros
}

export {
    cadastrarCarro,
    listarCarros,
    buscarCarrosPelaCor,
    buscarCarroPelaQuilometragemMaxima,
    removerCarro
}

