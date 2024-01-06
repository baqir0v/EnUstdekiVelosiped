import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Link } from "react-router-dom"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const handleSearchOpen = ()=>{
        setIsSearchOpen(!isSearchOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id='navbar' className={scrolling ? "blacknav": "" }>
            <div className="navbox">
                <div className="navleft">
                    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/Untitled-2.png?v=1613575289" alt="" />
                </div>
                <div className="navmid">
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/shop"}>Shop</Link></li>
                        <li><Link>Featured</Link></li>
                        <li><Link>Pages</Link></li>
                        <li><Link>Blogs</Link></li> 
                        <li><Link to={"/signup"}>Signup</Link></li> 
                    </ul>
                </div>
                <div className="navright">
                    <FaMagnifyingGlass onClick={()=>handleSearchOpen()} />
                    <FaRegUser />
                    <FaRegHeart />
                    <AiOutlineShopping />
                </div>
            </div>
        </nav>
    )
}

export default Navbar