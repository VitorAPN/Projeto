import type { Cliente } from './types'
import promptSync = require('prompt-sync');

const prompt = promptSync({ sigint: true });


const clientes: Cliente[] = [];

function cadastrarCliente(): void {
    const nomeInput: string = prompt('Digite o nome do cliente ');
    const idadeInput: number = Number(prompt('Digite a idade do cliente '));
    const idInput: number = Number(prompt('Digite o id do cliente '));

    const novoCliente: Cliente = {
        nome: nomeInput,
        idade: idadeInput,
        id: idInput
    }

    adicionarALista(novoCliente);
}

function adicionarALista(cliente: Cliente) {
    if (cliente.nome === '') {
        console.log('O nome do cliente deve ser preenchido!');
        return false;
    }
    clientes.push(cliente);
    console.log('Cliente cadastrado com sucesso');
    return true;
}

function verClientes(): Cliente[] {
    return clientes;
}

function procurarClienteId(id: number): Cliente | undefined {
    return clientes.find(cliente => cliente.id === id)
}

export {
    cadastrarCliente,
    verClientes,
    procurarClienteId
}

