import React from 'react';

export const TransactionList = () => {
    return (
        <>
        <h3>Histórico de transações</h3>
        <ul className="list">
            <li className="minus">
          Dinheiro <span>-R$400</span><button className="delete-btn">x</button>
            </li>
      </ul>
        </>
    )
}