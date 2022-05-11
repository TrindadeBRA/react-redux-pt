import React, {useState} from 'react'

import './index.css'

export default props => {

    //Gerando um numero que não tenha no array
    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    //Gera o tamanho do array com apenas numero 0, vai reduzindo e colocando os numeros nao contidos novos dentro do array e deixa em ordem
    function gerarNumeros(qnde){
        const numeros = Array(qnde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, [])
        .sort((a, b) => a - b);

        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return(
        <div className='Mega'>
            <span>{numeros.join(", ")}</span>
            <br />
            <div className='form-qntd'>
                <label>Quantidade de Números</label>
                <input
                    type="number"
                    value={qtde}
                    onChange={e => {
                            setQtde(+e.target.value)
                            setNumeros(gerarNumeros(+e.target.value))
                        }}
                />
            </div>
            <button onClick={
                (_) => setNumeros(gerarNumeros(qtde))
            }>
                Gerar números
            </button>
        </div>
    );
}