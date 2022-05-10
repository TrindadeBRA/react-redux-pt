import React from 'react';
import produtos from  "../../data/produtos";
import './index.css'

export default props => {

    const produtosTr = produtos.map((produto) => {
        return (
            <tr key={produto.id} className={produto.id % 2 === 0 ? 'claro' : 'escuro'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
            </tr>
        );
    })

    return(
    <div>
        <table style={{width: '100%', backgroundColor: '#39cf85'}}>
            <thead>
                <tr>
                    <th>SKU</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr>
            </thead>
            <tbody>
                {produtosTr}
            </tbody>
        </table>
    </div>
    )
}