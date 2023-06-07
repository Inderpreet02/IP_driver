import React from 'react'
import './Offer.css'
const Offer = ({data}) => {
  return (
    <div className='offer'>
        <div className="offer_details">
            <div className='offer__model'>Car Model: {data.model}</div>
            <div className='offer__name'>Driver Name: {data.name}</div>
        </div>
        <div className="offer__price">
            Rs. {data.price}
        </div>
    </div>
  )
}

export default Offer