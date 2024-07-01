import React, { useState } from 'react';
import './Tarifs.css';
import { IoTicket } from "react-icons/io5";
import TicketOption from '../TicketOption/TicketOption';

const Tarifs = () => {
  const [tickets, setTickets] = useState({
    'Tarif -14ans' : { price: 7, quantity: 0 },
    'Tarif -26 ans': { price: 9, quantity: 0 },
    'Normal': { price: 12, quantity: 0 },
  });

  const handleIncrement = (type) => {
    setTickets((prevTickets) => ({
      ...prevTickets,
      [type]: {
        ...prevTickets[type],
        quantity: prevTickets[type].quantity + 1
      }
    }));
  };

  const handleDecrement = (type) => {
    setTickets((prevTickets) => ({
      ...prevTickets,
      [type]: {
        ...prevTickets[type],
        quantity: Math.max(prevTickets[type].quantity - 1, 0)
      }
    }));
  };

  const calculateTotal = () => {
    return Object.values(tickets).reduce((total, ticket) => total + (ticket.price * ticket.quantity), 0);
  };

//   const handlePurchase = () => {
//     // Logic for handling ticket purchase
//     alert(`You have purchased tickets totaling ${calculateTotal()}€`);
//   };

  return (
    <>
      <div className='tarifsprice'>
        <h1 className='h3tarif'>
          TARIFS
        </h1>
      </div>
      <hr className='red-underline'></hr>
      <div className='summary'>
        {Object.keys(tickets).map((type) => (
          <TicketOption
            key={type}
            type={type}
            price={tickets[type].price}
            quantity={tickets[type].quantity}
            onIncrement={() => handleIncrement(type)}
            onDecrement={() => handleDecrement(type)}
          />
        ))}
      </div>
      <div className='finalprice'>
        <p className='totaltopay'>Total à payer : {calculateTotal()}€</p>
        <button className='buy-button'  >Achetez vos tickets</button>
      </div>
    </>
  );
};

export default Tarifs;
