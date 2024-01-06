import React from 'react'
import "./index.scss"

const Services = () => {
  return (
    <section id='services'>
      <div className="servicesbox">
        <div className="servicescard">
          <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/free-delivery.png?v=1613577961" alt="" />
          <h4>Free Shipping</h4>
          <p>Only order from $230</p>
        </div>
        <div className="servicescard">
          <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/return-of-investment.png?v=1613577961" alt="" />
          <h4 class="title">Money return</h4>
          <p class="content">30 days free for return money</p>
        </div>
        <div className="servicescard">
          <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/24-hours-support.png?v=1613577961" alt="" />
          <h4 class="title">Support 24/7</h4>
          <p class="content">Always ready to support</p>
        </div>
      </div>
    </section>
  )
}

export default Services