import React from 'react';

import './App.css';

import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio.tsx';
import Fragmento from './components/basicos/Fragmento.tsx';
import ComParametro from './components/basicos/ComParametro.tsx';
import Primeiro from './components/basicos/Primeiro.tsx';
import Familia from './components/basicos/Familia.tsx';
import FamiliaMembro from './components/basicos/FamiliaMembro.tsx';


export default () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <div className="cards">

                <Card titulo="#05 - Componente com filhos">
                    <Familia sobrenome="Trindade">
                        <FamiliaMembro nome="Lucas"/>
                        <FamiliaMembro nome="Lavinia"/>
                        <FamiliaMembro nome="Veridiana"/>
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório">
                    <Aleatorio min={10} max={150}/>
                </Card>

                <Card titulo="#03 - Fragmento">
                    <Fragmento />
                </Card>
                
                <Card titulo="#02 - Parametros (props)">
                    <ComParametro titulo="Ensinando a usar props" subtitulo="props"/>
                </Card>

                <Card titulo="#01 - Primeiro Componente">
                    <Primeiro/>
                </Card>
            </div>
            
        </div>
    );
}