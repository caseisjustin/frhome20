import axios from "../../api";
import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../context";
import { IoCartOutline } from "react-icons/io5";


const Detail = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const [imanger, setImager] = useState(null)
    const { setWishlist, wishlist, setCart, cart } = useStateValue()

    const handleLike = (product) => {
        const index = wishlist?.findIndex(item => item.id === product.id)
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


    useEffect(() => {
        axios
            .get(`/product/${id}`)
            .then(res => {
                setData(res.data)
                setImager(res.data?.images[0])
            })
            .catch(err => setError(err))
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className="text-center py-24">Loading</div>
    }
    if (error) {
        return <div className="text-center py-24"><p>{error?.message}</p></div>
    }
    return (
        <div className="container min-h-[80vh] py-5 grid grid-cols-2">
            <div>
                <div>
                    <img src={imanger} alt="photo" />
                </div>
                <div className="flex gap-2">
                    {
                        data?.images?.map((url, inx) => {
                            return <img className="w-10 bg-yellow-300" onClick={() => setImager(url)} src={url} key={inx} alt="" />
                        })
                    }
                </div>
            </div>
            <div>
                <h2 className="text-3xl">{data?.title}</h2>
                <p>{data?.description}</p>
                <button onClick={() => handleLike(data)} className='top-3 right-3 text-xl'>
                    {
                        wishlist?.some(item => item.id === data?.id) ?
                            <FaHeart />
                            :
                            <FaRegHeart />
                    }
                </button>
                <button onClick={() => handleAddToCart(data)} className="top-10 right-3 text-xl">
                    <IoCartOutline />
                </button>
            </div>
        </div>
    )
}

export default Detail