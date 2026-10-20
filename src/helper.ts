
function validaTexto(texto: string): boolean {
    if (texto.trim() === '') {
        console.log('Não pode ser vazio')
        return false;
    }
    return true
}

export {
    validaTexto
}