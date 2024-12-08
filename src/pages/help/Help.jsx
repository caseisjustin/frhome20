import React from 'react'
import { useStateValue } from '../../context'

const Help = () => {
  const {setCount} = useStateValue()
  return (
    <div>
      <h2>Help</h2>
      <button onClick={()=> setCount(prev => prev +1)}>increment</button>
    </div>
  )
}

export default Help