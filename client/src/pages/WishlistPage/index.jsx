import React, { useContext } from 'react'
import { wishlistContext } from '../../Context/wishlistContext'
import "./index.scss"
import ShopNavbar from '../../layout/ShopNavbar'
import Footer from '../../layout/Footer'
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'


const WishlistPage = () => {
    const { wishlist, addToWishlist } = useContext(wishlistContext)
    return (
        <>
            <ShopNavbar />
            <div className='wishlist'>
                {wishlist && wishlist.length > 0 ? wishlist.map((item) => (
                    <ul key={item._id}>
                        <li><img src={item.image} alt="" /></li>
                        <li>{item.title}</li>
                        <li>{item.price}$</li>
                        <li><span onClick={() => addToWishlist(item)}><FaRegHeart /></span></li>
                    </ul>
                )) : <div className='emptywishlist'>
                    <h1>Your Wishlist is Empty</h1>
                    <h3><Link to={"/shop"}>Click To Go Back To Shopping</Link></h3>
                </div>
                }
            </div>
            <Footer />
        </>
    )
}

export default WishlistPage