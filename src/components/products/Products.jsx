import React from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useStateValue } from '../../context';
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Products = ({ data, title }) => {
  const navigate = useNavigate()
  const { setWishlist, wishlist, setCart, cart } = useStateValue()

  const handleLike = (product) => {
    const index = wishlist.findIndex(item => item.id === product.id)
    if (index < 0) {
      setWishlist(prev => [...prev, product])
    } else {
      setWishlist(prev => prev.filter(item => item.id !== product.id))
    }
  }

  const handleAddToCart = product => {
    const index = cart.findIndex((item) => item.id === product.id)
    if (index < 0) {
      setCart(prev => [...prev, { ...product, amount: 1 }])
    }
  }

  const productItems = data?.map(product => (
    <div key={product.id} className='shadow p-3'>
      <div className='w-full h-64 relative'>
        <img onClick={() => navigate(`/product/${product.id}`)} className='w-full h-full object-contain' src={product.thumbnail} alt="" />
        <button onClick={() => handleLike(product)} className='absolute top-3 right-3 text-xl'>
          {
            wishlist?.some(item => item.id === product.id) ?
              <FaHeart />
              :
              <FaRegHeart />
          }
        </button>
        <button onClick={() => handleAddToCart(product)} className="absolute top-10 right-3 text-xl">
          <IoCartOutline />
        </button>
      </div>
      <div className=''>
        <h3>{product.title}</h3>
      </div>
    </div>
  ))
  return (
    <div >
      <div className="container">

        <h2 className=' text-2xl'>{title}</h2>
      </div>
      <div className='grid container gap-3 grid-cols-4'>
        {productItems}
      </div>
    </div>
  )
}

export default Products