import React from 'react'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/user/userSlice'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
    const name = useSelector((state) => state.user.user?.name)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handelLogout = () => {
        dispatch(logout())
        navigate('/')
    }
  return (
    <div className='nav'>
        <div className="nav__container">
            <div className="nav__logo">
                <h2 onClick={() => navigate('/')}>RideAhead</h2>
            </div>
            <div className="nav__options">
                {
                    name &&
                    <div className="nav__option" onClick={() => navigate(`/accepted/${name}`)}>{name}</div>
                }
                {
                    isLoggedIn ? 
                    <div className="nav__option" onClick={handelLogout}>Logout</div> :
                    <div className="nav__option" onClick={() => navigate('/')}>Login</div> 
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar