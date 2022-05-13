const valores = [10.0,7.7,8.1,4.9,2.9]
console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5] || "Valor não existente")

valores[5] =  7.5
console.log(valores[5] || "Valor não existente")

//Push adiciona outros elementos noa array
valores.push({id:3}, false, null, 'teste')

console.log(valores)

//pop saca o ultimo item do array, e retorna ele
console.log(valores.pop())

console.log(valores[0])
delete valores[0]
console.log(valores[0])