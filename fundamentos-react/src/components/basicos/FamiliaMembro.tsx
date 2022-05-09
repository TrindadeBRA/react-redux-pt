import React from 'react';

export default props => {
    return(
        <div>
            <p>{props.nome} <b> {props.sobrenome}</b></p>
        </div>
    );
}