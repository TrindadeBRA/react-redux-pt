import React from "react";

import "./Card.css"

export default props => {

    //Gera cores aleatorias em hex
    // const randomColor2 = Math.floor(Math.random()*16777215).toString(16)
    // console.log(randomColor2)

    // Gera cores escuras rgb
    const red = Math.floor(Math.random() * 256/2);
    const green = Math.floor(Math.random() * 256/2);
    const blue = Math.floor(Math.random() * 256/2);
    const randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    // console.log(randomColor)


    


    const cardColor = {
        backgroundColor: randomColor,
        borderColor: randomColor,
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