import React, { useContext } from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { SearchContext } from '../../Context/searchContext';

function ShopNavbar() {
  const { handleSearch } = useContext(SearchContext)
    return (
        <nav id='shopnav'>
            <div className="navbox">
                <div className="navleft">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/shop"}>Shop</Link></li>
                        <li><Link>Featured</Link></li>
                        <li><Link>Pages</Link></li>
                        <li><Link to={"/add"}>Add</Link></li>
                        <li><Link to={"/signup"}>Signup</Link></li>
                    </ul>
                </div>
                <div className="navmid">
                    <Link to={"/"}><img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279" alt="" /></Link>
                </div>
                <div className="navright">
                    <div className="rightbox">
                        <span><FaMagnifyingGlass onClick={() => handleSearch()} /></span>
                        <span><FaRegUser /></span>
                        <span><Link to={"/wishlist"}><FaRegHeart /></Link></span>
                        <span><AiOutlineShopping /></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default ShopNavbar