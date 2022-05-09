import React from "react";

export default (props) => {
    const {min, max} = props;
    const numRandomico = Math.floor(Math.random() * (max - min)) + min;
    return(
        <>
            <h2>Valor Aleatório</h2>
            <p>Valor Mínimo: {min}</p>
            <p>Valor Máximo: {max}</p>
            <p>Valor Escolhido: {numRandomico}</p>
        </>
    );
}