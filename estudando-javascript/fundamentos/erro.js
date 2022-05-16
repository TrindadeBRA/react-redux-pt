function tratarErroELancar(erro){
    // throw new Error('...')
    // throw 10
    // throw 'Erro xxx'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj){ 
    try{
        console.log(obj.nome.toUpperCase() + '!!!!')
    } catch (e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Lucas'}
imprimirNomeGritando(obj)