function soma() {
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(100,200))
console.log(soma(1,1))
console.log(soma(4,"Teste"))
console.log(soma("a","a", "a"))