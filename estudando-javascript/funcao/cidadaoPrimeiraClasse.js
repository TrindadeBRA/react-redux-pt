// Função em JS é First-Class Object
//High-ordem function

//Forma Literal
function fun1() { }


//Armazernar em uma variavel
const fun2 = function () { }


//Armazenar em um array
const array = [function(a,b) { return a + b }, fun1, fun2]
// console.log(array[0](2,3))


//Armazenar em um objeto
const obj = {}
obj.falar = function () { return 'Opa!' }
// console.log(obj.falar())


// Passar funcao como parametro
function run (fun) {
    fun()
}
// run(function() { console.log('Executando..') })


//Uma funcao pode retornar/cintem uma funcao
function soma(a,b) {
    return function (c) {
        console.log(a+b+c)
    }
}

soma(1,2)(4)