import React from 'react'
import "./index.scss"
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id='footer'>
            <div className="footerbox">
                <div className="card">
                    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279" alt="" />
                    <p class="mb-0 content_footer">The simple, delicate and light design<br />makes it comfortable for everyone.</p>
                    <span>
                        <FaTwitter />
                        <FaDribbble />
                        <FaBehance />
                        <FaInstagram />
                    </span>
                </div>
                <div className="card">
                    <h4>Shop</h4>
                    <ul>
                        <li>Shopping</li>
                        <li>Bicycle</li>
                        <li>Bicycle Accessory</li>
                        <li>Helmet</li>
                    </ul>
                </div>
                <div className="card">
                    <h4>About Us</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Pagination</li>
                        <li>Terms & Conditions</li>
                        <li>Contact</li>
                        <li>Accessories</li>
                        <li>Term of use</li>
                    </ul>
                </div>
                <div className="card">
                    <h4>Infomation</h4>
                    <ul>
                        <li>Address</li>
                        <li>Terms & Conditions</li>
                        <li>Products Return</li>
                        <li>Wholesale Policy</li>
                    </ul>
                </div>

            </div>
            <div className='footerbottom'>
                <p>© Copyright 2020 | <a href="#" rel="nofollow" target="_blank" class="underline_hover bold">  TopBike</a> By <a href="http://engotheme.com/" rel="nofollow" target="_blank" class="underline_hover link"> EngoTheme.</a><a href="https://www.shopify.com/free-trial?ref=shopifycenter" target="_blank" class=""> Powered by Shopify.</a></p>
                <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/payment.png?v=1613576066" alt="" />
            </div>
        </footer>
    )
}

export default Footer