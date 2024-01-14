import React, {  createContext, useEffect, useState } from 'react'
export const wishlistContext = createContext()

const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState(localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [])

    const addToWishlist = (product) => {
        const wishlistProduct = wishlist.find(x=>(x._id === product._id))

        if (!wishlistProduct) {
            setWishlist([...wishlist,product])
        }

        else(
            setWishlist(wishlist.filter(x=>(x._id !== product._id)))
        )
    }
    useEffect(() => {
      localStorage.setItem("wishlist",JSON.stringify(wishlist))
    }, [wishlist])

    const data = {wishlist,addToWishlist}
    
    return (
        <wishlistContext.Provider value={data}>
            {children}
        </wishlistContext.Provider>
    )
}

export default WishlistProvider