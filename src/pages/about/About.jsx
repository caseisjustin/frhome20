import React, { createContext } from 'react'
import Child from './Child'

export const Context = createContext()

const About = () => {
  const number = 255
  return (
    <div id='about'>
      <h2>About</h2>
      <Context.Provider value={{number, str: "salom"}}>
        <Child />
      </Context.Provider>
    </div>
  )
}

export default About