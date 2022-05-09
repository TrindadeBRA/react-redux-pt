import React from "react";

export default function Primeiro(){
    const msg = 'Bem vindo';
    return (
             <>
                <h2 className="text-red-700">Primeiro componente</h2>
                <p> {msg} </p>
            </>
        )
}