import React from 'react';

import './App.css';

import Card from './components/layout/Card';
import Aleatorio from './components/basicos/Aleatorio.tsx';
import Fragmento from './components/basicos/Fragmento.tsx';
import ComParametro from './components/basicos/ComParametro.tsx';
import Primeiro from './components/basicos/Primeiro.tsx';
import Familia from './components/basicos/Familia.tsx';
import FamiliaMembro from './components/basicos/FamiliaMembro.tsx';
import ListaAlunos from './components/repeticao/ListaAlunos.tsx';
import TabelaProdutos from './components/repeticao/TabelaProdutos.tsx';
import ParOuImpar from './components/condicional/ParOuImpar.tsx';
import UsuarioInfo from './components/condicional/UsuarioInfo.tsx';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/megasena/Mega'
import MegaRes from './components/megasena-resposta/Mega'


export default () => {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>

            <div className="cards">

                <Card titulo="#13.1 - Desafio MegaSena / Resposta">
                    <MegaRes qtde={10}/>
                </Card>

                <Card titulo="#13 - Desafio MegaSena">
                    <Mega/>
                </Card>

                <Card titulo="#12 - Contador">
                    <Contador numeroInicial={10}/>
                </Card>

                <Card titulo="#11 - Componente Controlado">
                    <Input/>
                </Card>

                <Card titulo="#10 - Comunicação Indireta">
                    <IndiretaPai/>
                </Card>

                <Card titulo="#09 - Comunicação Direta">
                    <DiretaPai/>
                </Card>

                <Card titulo="#08.1 - Renderização Condicional 2">
                    <UsuarioInfo usuario={{nome: 'Lucas'}} />
                    <UsuarioInfo usuario={{email: 'lucas@gmail.com'}} />
                    <UsuarioInfo/>
                </Card>

                <Card titulo="#08 - Renderização Condicional">
                    <ParOuImpar numero={4854} />
                </Card>

                <Card titulo="#07 - Tabela de Produtos">
                    <TabelaProdutos />
                </Card>
                
                <Card titulo="#06 - Repetição">
                    <ListaAlunos />
                </Card>

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