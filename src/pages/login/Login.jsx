import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Login = () => {
   const navigate = useNavigate()
  return (
    <div className='w-96 p-3 border mx-auto mt-7'>
        <h2>Login</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum soluta quod ad iusto neque voluptas cumque quaerat maxime quisquam!</p>
        <button onClick={()=> navigate("/")} className='bg-slate-300'>Go home</button>
        <button onClick={()=> navigate(-1)}>Go back</button>
    </div>
  )
}

export default Login