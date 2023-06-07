import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { useSelector } from 'react-redux'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import db from '../firebase'
import './AcceptedRide.css'

const AcceptedRide = () => {
    const name = useSelector(state=> state.user.user?.name)
    const [data, setData] = useState();
    console.log(name);
    useEffect(() => {
        const q = query(collection(db, name), orderBy("createdAt", 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const rides = [];
            querySnapshot.forEach((doc) => {
                rides.push({
                id: doc.id,
                ...doc.data()
                });
            });
            setData(rides)
        });
        return () =>{
            unsubscribe()
        }
    }, [])
    console.log(data);
  return (
    <div className='ar'>
        <Navbar/>
        <div className="ar__container">
            <h1>Accepted Rides</h1>

            <div className="ar__items">
                {
                    data && data.map((ride) =>  (
                        <div key={ride.id} className="ar__item">
                            <div className="ar__top">
                                <img src={ride.src} alt="" className="ar__img" />
                                <div className="ar__user">Customer: {ride.id}</div>
                            </div>
                            <div className="ar__bottom">
                                <div className="arr__left">
                                    <p>PickUp: {ride.pickup}</p>
                                    <p>DropOff: {ride.dropoff}</p>
                                </div>
                                <div className="ar__right">
                                    <p>
                                        Driver Name: {ride.name}
                                    </p>
                                    <div className="ar__price">Total: Rs. {ride.price}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default AcceptedRide