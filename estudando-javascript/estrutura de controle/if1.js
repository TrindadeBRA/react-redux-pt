function soBoaNoticia(nota){

    if(nota >= 7){
        console.log('Aprovado com: ' + nota)
    } 

}


soBoaNoticia(8)
soBoaNoticia(4)


function seForVddEuFalo(valor){

    if(valor){
        console.log('é verdade... ' + valor)
    } 

}

seForVddEuFalo()
seForVddEuFalo(null)
seForVddEuFalo(undefined)
seForVddEuFalo(NaN)
seForVddEuFalo('')
seForVddEuFalo(0)
seForVddEuFalo(-1)
seForVddEuFalo(' ')
seForVddEuFalo('?')
seForVddEuFalo([])
seForVddEuFalo([1.2])
seForVddEuFalo({})