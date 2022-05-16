//Objeto

function rand({ min = 0, max = 1001}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max:50, min: 40 }
console.log(rand(obj))

console.log(rand({min:999}))
console.log(rand({}))

console.log(rand({ max:9990, min: 9000 }))