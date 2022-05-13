const nome = "Lucas"

//Retorna qual caractere tem na posicao
console.log(nome.charAt(0))
console.log(nome.charAt(1))
console.log(nome.charAt(2))
console.log(nome.charAt(3))
console.log(nome.charAt(4))
console.log("---")

//Numero do char code
//https://www.w3schools.com/charsets/ref_html_ascii.asp
console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))
console.log(nome.charCodeAt(4))

//Retorna a posição do caractere na variavel
console.log(nome.indexOf("L"))
console.log(nome.indexOf("u"))
console.log(nome.indexOf("c"))
console.log(nome.indexOf("a"))
console.log(nome.indexOf("s"))
//traz -1 como erro (para caractere nao existente / sensitive case)
console.log(nome.indexOf("!"))
console.log(nome.indexOf("U"))

//Não substrai strings
//Removou o indice do primeiro caractere da string
console.log(nome.substring(0))
//Mostrou do indice 0 ao 2
console.log(nome.substring(0,2))

//Concatenar Strings
console.log('Meu nome é '.concat(nome).concat("!"))

//Replace
console.log(nome.replace('s', 'XXX'))

//Transforma em Array mostrando o separador
console.log('Lucas, Bruno, Pietro'.split(','))
