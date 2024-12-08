import React, { useEffect, useState } from 'react'
import Empty from '../../components/empty/Empty'
import {useStateValue} from "../../context"
import { useNavigate } from 'react-router-dom'
import Promocode from '../../components/promocode/Promocode'

const Cart = () => {
    const [promoStatus, setPromoStatus] = useState(JSON.parse(localStorage.getItem("promo")) || {msg: "", error: false, success: 0})
    console.log(promoStatus);
    
    useEffect(()=>{
        localStorage.setItem("promo", JSON.stringify(promoStatus))
    }, [promoStatus])

    const {cart, setCart} = useStateValue()
    const navigate = useNavigate()
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    const handleIncrement = product => {
        setCart(prev => prev.map((item)=> {
            if(item.id === product.id){
                return {...item, amount: item.amount + 1}
            }else{
                return item
            }
        }))        
    }
    const handleDecrement = product => {
        if(product.amount > 1){
            setCart(prev => prev.map((item)=> {
                if(item.id === product.id){
                    return {...item, amount: item.amount - 1}
                }else{
                    return item
                }
            }))     
        }
    }
    const handleDelete = product => {
        setCart(prev => prev.filter(({id}) => id !== product.id))
    }

    // useEffect(()=>{
    //     if(promoStatus.success === 1){
    //         setCart(prev => prev.map(item=> ({...item, price: item.price * .8})))
    //     }
    // }, [promoStatus.success])

    const totalPrice = cart?.reduce((sum, item)=> sum + item.price * item.amount, 0)
  
  return (
    <div className='min-h-[80vh]'>
        <h2>Cart</h2>
        {
            cart.length ? 
            <div className='container flex gap-4' >
                <div className='flex-1'>
                {
                    cart?.map((item)=> (
                        <div key={item.id}>
                            <img src={item.thumbnail} width={80} alt="" />
                            <h3>{item.title}</h3>
                            <p>{(item.amount * item.price)?.brm()}</p>
                            <button onClick={()=> handleDelete(item)}>delete</button>
                            <div className='border w-20 flex h-9 items-center rounded-md justify-between'>
                                <button disabled={item.amount <= 1} onClick={()=> handleDecrement(item)} className='flex-1'>-</button>
                                <span>{item.amount}</span>
                                <button onClick={()=> handleIncrement(item)} className='flex-1'>+</button>
                            </div>
                        </div>
                    ))
                }
                </div>
                <div className='w-96 border p-4 h-72 sticky top-20'>
                    <p>Buyurtmangiz</p>
                    <p>Total : {( totalPrice ).brm()}</p>
                    <Promocode setPromoStatus={setPromoStatus} promoStatus={promoStatus}/>
                    {promoStatus.error && <p className='text-red-500'>{promoStatus.msg}</p>}
                    {promoStatus.success && <p className='text-green-500'>{promoStatus.msg}</p>}
                    <button onClick={()=> navigate("/checkout")}>Checkout</button>
                </div>
            </div>
            :
            <Empty title="Savatingiz hozircha bo‘sh" url="https://uzum.uz/static/img/shopocat.490a4a1.png"/>

        }
    </div>
  )
}


export default Cart