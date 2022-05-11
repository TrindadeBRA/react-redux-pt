import React from 'react'

const megaFilho = (props) => {
    
    function gerarNumerosNovos(min, max){
        //Criando e Declarando um array vazio
        const resultadoArray = []

        //Rode até o array ser de 6 itens
        for (let i = 0; resultadoArray.length < 6; ++i) {

            //Gerando um numero aleatorio de min e max (setados por props)
            const numAleatorio = Math.floor(Math.random() * (max)) + min;

            //Se o numero gerado NÃO for repetido, adicione no array 
            !resultadoArray.includes(numAleatorio) && resultadoArray.push(numAleatorio)

            // Numero Gerado aleatoriamente
            // console.log('Numero gerado: ' + numAleatorio)
        }
    
        //Colocando em ordem crescente
        resultadoArray.sort((a, b) => a - b);
        
        //Transformando array em uma string separada por virgula
        const resultadoFinal = resultadoArray.join(", ")
        
        //Mostrando o tamanho do array
        //console.log('Lenght: ' + resultadoArray.length)
        
        return resultadoFinal
    }  
    
    
    return(
        <div>
            <button onClick={
                _ => {
                    props.qndClicar(gerarNumerosNovos(props.min, props.max))
                }
            }>
                Gerar números megasena!
            </button>
        </div>
    )
}

export default megaFilho;