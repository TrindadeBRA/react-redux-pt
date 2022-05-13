const nome = 'Trindade'
const concatenacao = 'Olá ' + nome + '!'
const template = `Olá ${nome}!`

console.log(concatenacao)
console.log(template)

//expressoes..
console.log(`1 + 1 = ${1 + 1}`)

//Chamando funcao...
const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('cuidado')}!`)