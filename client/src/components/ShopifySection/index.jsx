import React from 'react'
import "./index.scss"

const Shopify = () => {
    return (
        <section id='shopify'>
            <div className="shopifybox">
                <div className="card">
                    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/collection-bike.jpg?v=1613575695" alt="" />
                    <span>Bicycle</span>
                </div>
                <div className="card">
                    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/collection-accessory.jpg?v=1613575695" alt="" />
                    <span>Bike Accessories</span>
                </div>
                <div className="card">
                    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/collection-helmet.jpg?v=1613575695" alt="" />
                    <span>Helmet</span>
                </div>
            </div>
        </section>
    )
}

export default Shopify