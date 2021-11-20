import React, { useState } from 'react';

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <>
        <h3>Adicionar nova transação</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Texto</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Descrição..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Valor</label>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Digite aqui' />
        </div>
        <button className="btn">Adicionar</button>
      </form>
        </>
    )
}