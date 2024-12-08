import React, { memo, useRef } from 'react'
import { PROMOCODES } from '../../static'

const Promocode = ({setPromoStatus, promoStatus}) => {
    const code = useRef(null)
    const handleSubmit = event => {
        if(!promoStatus){
            event.preventDefault()
            if(PROMOCODES.includes(code.current.value.toUpperCase())){
                setPromoStatus(p => ({msg: "Promocode muvaffaqiyatli qabul qilindi", error: false, success: 1}))
            }else{
                setPromoStatus({msg: "Promocode xato ekan", error: true, success: 0});
            }
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input ref={code} type="text" className='border' placeholder='enter promocode' />
        <button>send</button>
    </form>
  )
}

export default memo( Promocode)