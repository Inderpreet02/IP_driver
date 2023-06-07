import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './page/Login';
import Rides from './page/Rides';
import RidePage from './page/RidePage';
import {useNavigate} from 'react-router-dom'  
import { useSelector } from 'react-redux';
import AcceptedRide from './page/AcceptedRide';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/currentRides",
    element: <Rides/>,
  },
  {
    path: "/ride/:id",
    element: <RidePage/>,
  },
  {
    path: "/accepted/:username",
    element: <AcceptedRide/>,
  },
]);

function App() {

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
