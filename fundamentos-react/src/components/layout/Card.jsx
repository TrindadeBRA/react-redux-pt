import React from "react";

import "./Card.css"

export default props => {

    //Gera cores aleatorias
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    //console.log(randomColor)

    const cardColor = {
        backgroundColor: '#'+randomColor,
        borderColor: '#'+randomColor,
    }

    return(

        <div className="card" style={cardColor}>
            <div className="title">{props.titulo}</div>
            <div className="content">
                {props.children}
            </div>
        </div>

    );

}