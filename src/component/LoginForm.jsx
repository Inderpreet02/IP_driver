import React, { useState } from 'react'
import './LoginForm.css'
import { useDispatch } from 'react-redux'
import { login } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [model, setModel] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            login({
                name,
                email,
                model
            })
        )
        setName("")
        setEmail("")
        setModel("")

        navigate("currentRides")
    }
  return (
    <div className='login'>
        <div className="login__container">
            <h1>Login</h1>
            <form className='login__form' onSubmit={handleSubmit}>
                <input required className='login__input' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input required className='login__input' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input required className='login__input' type="text" placeholder='Car Model' value={model} onChange={(e) => setModel(e.target.value)}/>
                <button type='submit' className='login__btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default LoginForm