//Sempre retorna um boolean True ou false

// o valor é igual?
console.log("01)" ,"1" == 1)

// o valor e tipo são iguais?
console.log("02)" ,"1" === 1)

// o valor é diferente?
console.log("03)" ,"3" != 3)

// o valor e tipo são diferentes?
console.log("04)" ,"3" !== 3)

//Menor que?
console.log("05)" , 3 < 2)

//Maior que?
console.log("06)" , 3 > 2)

//Menor ou igual?
console.log("07)" , 3 <= 2)

//Maior ou igual?
console.log("08)" , 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

//referencia de memorias
console.log("09)" , d1 === d2)
console.log("10)" , d1 == d2)

//Em number
console.log("11)" , d1.getTime() === d2.getTime())

//undefined e null
console.log("12)" , undefined == null)
console.log("13)" , undefined === null)

//Usar na igualdade ===