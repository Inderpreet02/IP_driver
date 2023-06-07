import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import {useParams} from 'react-router-dom'
import { getFirestore, collection, orderBy, onSnapshot, doc, query, where, setDoc, serverTimestamp } from 'firebase/firestore';
import db from '../firebase';
import Offer from '../component/Offer';
import { v4 as uuidv4 } from 'uuid';
import './Ridepage.css'
import { useSelector } from 'react-redux';

const RidePage = () => {
  const {id} = useParams();
  const [data, setData] = useState()
  const [price, setPrice] = useState(0)
  const user = useSelector((state) => state.user.user)
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const docData = {
      price: price,
      ...user,
      createdAt: serverTimestamp(),
      src: "https://i.ibb.co/cyvcpfF/uberx.png",
      title: user.model,
      time: 20
    }
    console.log(docData);
    try {
      await setDoc(doc(db, "Pluto", id, "driver", `${uuidv4()}`), docData)
    } catch (error) {
      console.log("Error in RidePage", error);
    }
  }
  
  useEffect(() => {
    const q = query(collection(db, "Pluto", id, "driver"), orderBy("createdAt", 'desc'));
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
  return (
    <div className='rideP'>
      <Navbar/>
      <h1>Current Offers</h1>
      <p>Suggested price: Rs 1000</p>
      <div className="ride__options">
        {
          data &&
          data.map((doc) => (
            <Offer key={doc.id} data={doc}/>
          ))
        }
      </div>
      <form className="ride__bet" onSubmit={handleSubmit}>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Offer price'/>
        <button type='submit' className='ride__betBtn'>+</button>
      </form>
    </div>
  )
}

export default RidePage