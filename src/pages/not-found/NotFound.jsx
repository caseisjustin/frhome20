import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='text-center'>
        <h2 className=' text-4xl'>404</h2>
        <button onClick={()=> navigate("/")} className='bg-slate-300'>Go home</button>
    </div>
  )
}

export default NotFound