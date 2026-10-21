import promptSync = require('prompt-sync');
import { cadastrarCliente, verClientes } from './clientes';
import { cadastrarCarro, listarCarros, removerCarro } from './carros';
import { alugarCarro, listarAlugueis } from './alugueis';

const prompt = promptSync({ sigint: true });

let escolha: number = 0

do {
    console.log('1 - Cadastrar cliente');
    console.log('2 - Ver clientes');
    console.log('3 - Cadastrar carro');
    console.log('4 - Ver carros');
    console.log('5 - Alugar carro');
    console.log('6 - Ver alugueis');
    console.log('7 - remover carro');
    console.log('9 - Sair do sitema');
    let escolha = Number(prompt('O que você deseja fazer? '));
    switch (escolha) {
        case 1:
            cadastrarCliente();
            break;
        case 2:
            console.log('Seus clientes são: ');
            console.log(verClientes());
            break;
        case 3:
            cadastrarCarro();
            break;
        case 4:
            console.log('Seus carros são');
            console.log(listarCarros());
            break;
        case 5:
            alugarCarro();
            break;
        case 6:
            console.log(listarAlugueis());
            break;
        case 7:
            removerCarro();
            break
        case 9:
            console.log("Você escolheu sair do sistema");
            break;
        default:
            console.log('Digite uma opção válida!')
    }
} while (escolha !== 9)