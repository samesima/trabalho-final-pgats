export function geradorDeTagsDeIdentificacao(nome) {
    return nome.toUpperCase()
}

export function verificarSePodeSerAdotado(idade, porte) {
    let idadeMinima = 2

    if (idade >= idadeMinima || porte === 'M') {
        return true
    } else {
        return false
    }
}

export function calcularConsumoDeRacao(nome, idade, peso) {
    let quantidadePorKg = 300

    console.log(`Nome do cachorro: ${nome}`)

    switch (idade) {
        case 1:
            return quantidadePorKg * peso
        case 2:
            return (quantidadePorKg + 100) * peso
        default:
            return (quantidadePorKg + 200) * peso
    }
}

export function decidirTipoDeAtividadePorPorte(porte) {

    switch (porte) {
        case 'pequeno':
            return 'brincar dentro de casa'
        case 'médio':
            return 'caminhar no condomínio'
        case 'grande':
            return 'correr na praia'
        default:
            return 'porte inválido'
    }
}



export async function buscarDadoAsync() {
    return new Promise(
        (resolve) => {
            resolve('Pipoca')
        }
    )
}