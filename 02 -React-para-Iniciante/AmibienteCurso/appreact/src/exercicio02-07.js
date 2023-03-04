// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

import React from "react";
const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
};

const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
        { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
};


const Exercicio = () =>
{
    const dados = [ luana, mario ];

    const calculaSoma = ( values = [] ) =>
    {
        const numberValues = values.map( ( values ) => ( +values.replace( 'R$ ', '' ) ) );

        return numberValues.reduce( ( a, b ) => { return a + b; }, 0 );
    };
    return (
        <div style={ { display: "flex" } }>
            { dados.map( ( pessoa ) =>
            {
                const compras = pessoa.compras.map( ( compra ) => { return compra.preco; } );
                const total = calculaSoma( compras );
                return ( <div style={ { marginRight: '4px', padding: '8px' } }>
                    <p>Nome:{ ' ' + pessoa.cliente } </p>
                    <p>Idade:{ ' ' + pessoa.idade }</p>
                    <p>Situação:<span style={ { color: pessoa.ativa ? "green" : "red" } }>{ pessoa.ativa ? " Ativa" : " Inativa" }</span></p>
                    <p>Total:{ ' ' + total }</p>
                    { total > 10000 && <p>GASTOU MUITO BILL GATES!!!</p> }
                </div> );

            } ) }
        </div> );
};


export default Exercicio;