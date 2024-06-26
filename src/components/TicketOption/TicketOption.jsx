import React from 'react';
import './TicketOption.css'

const TicketOption = ({ type, price, quantity, onIncrement, onDecrement }) => {
  return (
    <div className='ticket-option'>
      <h2 className='h2ticket'>{type} - {price}€</h2>
      <button onClick={onDecrement} className='buttticket'>-</button>
      <span>{quantity}</span>
      <button onClick={onIncrement} className='buttticket'>+</button>
    </div>
  );
};

export default TicketOption;
