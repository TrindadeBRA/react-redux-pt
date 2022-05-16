//Objeto
const pessoa = {
    nome: 'Ana',
    idade:25,
    endereco: {
        logradouro: 'Rua ABC123',
        numero: 1000
    }
}

// Operador Destruct {}
const { nome,idade } = pessoa
console.log( nome,idade )

//Nomeando a variavel
const { nome: n, idade: i } = pessoa
console.log( n,i )

//vai retornar sobrenome undefined, pois nao foi setenciado // bomHumor foi dado um valor
const { sobrenome, bomHumor = true } = pessoa
console.log( sobrenome, bomHumor )

const { endereco: { logradouro, numero, cep = 09820310 } } = pessoa
console.log( logradouro,numero,cep )


