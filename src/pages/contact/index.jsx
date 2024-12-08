import React, { useState, useMemo, memo } from 'react'
import Child from './Child'

const salaries = [200,500,800,150]

const Contact = () => {
    const [count, setCount] = useState(0)

    console.log("Contact render");
    
    const totalSalary = ()=>{
        console.log("totalSalary render");
        return salaries.reduce((sum, item)=> sum + item, 0)
    }

    const cacheTotalSalary = useMemo(()=>{
        return totalSalary()
    }, [])

  return (
    <div>
        <h2>Contact</h2>
        <button onClick={()=> setCount(p => p + 1)}>Counter {count}</button>
        <Child count={25}/>
        <h2>Total salary: {cacheTotalSalary}</h2>
    </div>
  )
}

export default memo(Contact)