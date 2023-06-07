import React from 'react'
import './Ride.css'
import {useNavigate} from 'react-router-dom'  

const Ride = ({data, id}) => {
    const navigate = useNavigate();
  return (
    <div className='ride'onClick={() => navigate(`/ride/${id}`)}>
        <div className="ride__left">
            <img className='ride__img' src={data.src} alt="" />
            <div className="ride__item">Ride: {data.title}</div>
        </div>
        <div className="ride__mid">
            <div className="ride__item">From: {data.pickup}</div>
            <div className="ride__item">To: {data.dropoff}</div>
        </div>
        <div className="ride__right">
            <div className="ride__itemPrice">Price: {data.price}</div>
            <div className="ride__item">Time: {data.time}</div>

        </div>
    </div>
  )
}

export default Ride