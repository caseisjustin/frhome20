import React, { useRef } from 'react'
import { useStateValue } from '../../context'
import { Navigate, useNavigate } from 'react-router-dom'

const BOT_TOKEN = "7806572114:AAEG9tILErt-mO65Xu9WyNCPEWTFzOK4cJI"
const USER_ID = "997501693"
const CHAT_ID = "-4749368920"


// https://api.telegram.org/bot7806572114:AAEG9tILErt-mO65Xu9WyNCPEWTFzOK4cJI/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]
const Checkout = () => {
  const {cart, setCart} = useStateValue()

  if(!cart.length){
    return <Navigate replace to={"/cart"}/>
  }
  

  const fname = useRef(null)
  const lname = useRef(null)
  const handleSubmit = e => {
    e.preventDefault()
    let text = "Order %0A%0A"
    text +=  `Name: ${fname.current.value} %0A`
    text +=  `LastName: ${lname.current.value} %0A%0A`

    cart.forEach((product)=> {
      text += `Name: ${product.title} %0A`
      text += `Amount: ${product.amount} %0A`
      text += `Price: ${product.price} %0A%0A`
    })
    text += `Total: ${cart.reduce((sum,item)=> sum + item.amount * item.price, 0)}`

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
    let api = new XMLHttpRequest()

    api.open("GET", url, true)
    api.send("")
    setCart([])
  }
  return (
    <div className='container min-h-[80vh]'>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} action="">
        <input ref={fname} type="text" className='border'/>
        <input ref={lname} type="text" className='border'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Checkout