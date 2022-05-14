//Arrays

function rand([min = 0, max = 1001]) {

    // se o min for maior q o maximo

    if (min > max){
        [min, max] = [max, min]
    }

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([40,50]))

console.log(rand([900]))
console.log(rand([,900]))

console.log(rand([]))
