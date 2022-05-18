function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return valor

}

let opcao = 0

while(opcao >= -1){
    opcao = getInteiroAleatorioEntre(-5, 10)
    console.log(`Opção escolhida foi ${opcao}` )
}

console.log('Até a proxima')