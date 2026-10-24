import promptSync = require('prompt-sync');
import { cadastrarCliente, verClientes } from './clientes';
import { cadastrarCarro, listarCarros, removerCarro } from './carros';
import { alugarCarro, listarAlugueis } from './alugueis';

const prompt = promptSync({ sigint: true });

let escolha: number = 0

do {
    console.log('=== Menu Principal ===');
    console.log('1 - Carros (Ver, Cadastrar, Buscar, Excluir)');
    console.log('2 - Clientes (Ver, Cadastrar, Buscar, Excluir)');
    console.log('3 - Alugueis (Alugue seus carros)');
    let escolha = Number(prompt('O que você deseja fazer? '));
    switch (escolha) {
        case 1:
            menuCarros();
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