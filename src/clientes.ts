import type { Cliente } from './types'


const clientes: Cliente[] = [
    {nome: 'João', idade: 30}
];

function cadastrarCliente(cliente: Cliente): void {
    clientes.push(cliente);
}

function verClientes(): Cliente[] {
    return clientes;
}

export {
    cadastrarCliente,
    verClientes
}

