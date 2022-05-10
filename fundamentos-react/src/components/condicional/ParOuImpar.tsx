import React from 'react'

export default props => {
    const isPar = props.numero % 2 === 0
    const isImpar = props.numero % 2 === 0!

    // console.log(isPar)

    return(
        <div>
            {isPar ? <p>Par</p> : <p>Ímpar</p>}
        </div>
    )
}