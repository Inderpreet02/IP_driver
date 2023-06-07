import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { getFirestore, collection, orderBy, query, onSnapshot } from "firebase/firestore";
import Ride from "../component/Ride";
import db from "../firebase";

const Rides = () => {
  const [data, setData] = useState()
  
  useEffect(() => {
    const q = query(collection(db, "Pluto"), orderBy("createdAt", 'desc'));
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
    <div>
      <Navbar />
      {data &&
        data.map((doc) => (
          <Ride key={doc.id} data={doc} id={doc.id} />
        ))}
    </div>
  );
};

export default Rides;
