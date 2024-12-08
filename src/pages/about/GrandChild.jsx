import React, {useContext} from 'react'
import { Context } from './About'

const GrandChild = () => {
    const data = useContext(Context)
    console.log(data);
    
  return (
    <div>
        <h2>GrandChild</h2>
        <p>{data.number}</p>
        <p>{data.str}</p>
    </div>
  )
}

export default GrandChild