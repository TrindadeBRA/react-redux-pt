function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return valor

}


let opcao //somente iniciada a variável, sem valor inicial!
 

do {
    opcao = getInteiroAleatorioEntre(-5, 10)
    console.log(`Opção escolhida foi ${opcao}` )
} while(opcao >= -1)

console.log('Até a proxima')