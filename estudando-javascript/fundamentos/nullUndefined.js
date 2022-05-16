let valor // nao inciializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)

// console.log(valor.toString()) //Erro!


const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar
// delete produto.preco

console.log(!!produto)
console.log(produto)

produto.preco = null  //sempreco
console.log(!!produto.preco)
console.log(produto)