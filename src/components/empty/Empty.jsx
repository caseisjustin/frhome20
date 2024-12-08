import React from 'react'
import { useNavigate } from 'react-router-dom'

const Empty = ({title, url}) => {
  const navigate =  useNavigate()
  return (
    <div className='text-center'>
        <img className='w-40 mx-auto' src={url} alt="" />
        <p>{title}</p>
        <button onClick={()=>navigate("/")}>Go home</button>
    </div>
  )
}

export default Empty