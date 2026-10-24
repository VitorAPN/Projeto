import type { Carro, FiltrosCarro } from "./types";
import { validaTexto } from "./helper"
import promptSync = require('prompt-sync');

const prompt = promptSync({ sigint: true });

const carros: Carro[] = [];

function menuCarros(): void {
    console.log('== Submenu Carros ==');
    console.log('1 - Cadastrar carro');
    console.log('2 - Procurar carro');
    console.log('3 - Excluir carro');
    console.log('4 - Alterar carro');
    console.log('======================');
    const selecionado = Number(prompt('Qual opção você deseja escolher?'));
    switch (selecionado) {
        case 1:
            cadastrarCarro();
            break;
        case 2:
    }
}

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

function buscaDetalhada() {
    const filtros = definirFiltros();
    if (!filtros) {
        console.log("Não foram definidos filtros")
        return
    }

    const carrosFiltrados = aplicarFiltros(filtros);
    if (!carrosFiltrados.length) {
        console.log("")
    }
}

function aplicarFiltros(filtros: FiltrosCarro): Carro[] {
    return carros.filter((carro: Carro) => {
        let cor: boolean = true;
        let placa: boolean = true;
        let quilometragem: boolean = true
        if (filtros.cor) {
            cor = carro.cor === filtros.cor;
        }
        if (filtros.placa) {
            placa = carro.placa === filtros.placa;
        }
        if (filtros.quilometragem) {
            quilometragem = carro.quilometragem <= filtros.quilometragem
        }
        return cor && placa && quilometragem
    })
}



function definirFiltros(): FiltrosCarro | false {
    const filtros: FiltrosCarro = {
        placa: undefined,
        quilometragem: undefined,
        cor: undefined,
    }

    let escolha: number = 0;
    do {
        console.log("Qual filtro você deseja adicionar?")
        if (filtros.quilometragem === undefined) console.log("1 - Quilometragem");
        if (filtros.placa === undefined) console.log("2 - Placa");
        if (filtros.cor === undefined) console.log("3 - Cor");
        console.log("4 - Confirmar")

        escolha = Number(prompt('Qual a sua escolha?'));

        switch (escolha) {
            case 1:
                if (filtros.quilometragem) {
                    console.log('Filtro já existente')
                } else {
                    filtros.quilometragem = Number(prompt("Qual a quilometragem máxima?"))
                }
                break;
            case 2:
                if (filtros.placa) {
                    console.log('Filtro já existente')
                } else {
                    filtros.placa = prompt("Qual a placa?")
                }
                break;
            case 3:
                if (filtros.cor) {
                    console.log('Filtro já existente')
                } else {
                    filtros.placa = prompt("Qual a cor?")
                }
                break;
            case 4:
                console.log("Você escolheu sair do sistema");
                break;
            default:
                console.log("Informe uma opção válida");
        }
    } while (escolha !== 4)


    if (filtros.quilometragem === undefined
        && filtros.placa === undefined
        && filtros.cor === undefined) {
        return false
    }

    return filtros

}

export {
    cadastrarCarro,
    listarCarros,
    buscarCarrosPelaCor,
    buscarCarroPelaQuilometragemMaxima,
    removerCarro
}

