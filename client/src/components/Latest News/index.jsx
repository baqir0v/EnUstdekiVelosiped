import React from 'react'
import "./index.scss"

const LatestNews = () => {
    return (
        <section id='latestnews'>
            <h2>Latest News</h2>
            <div className="latestnewsbox">
                <div className="card">
                    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/articles/blog-post3_1024x1024.jpg?v=1607478877" alt="" />
                    <h4>News</h4>
                    <a href="">One Week in Bali: A Great Trip for a Lifetime to Choose</a>
                    <p>                  Are you planning to have a short trip to Bali? What is best about a short visit to a particular place is...
                    </p>
                    <button>Readmore</button>
                </div>
                <div className="card">
                    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/articles/blog-post2_1024x1024.jpg?v=1607478478" alt="" />
                    <h4>News</h4>
                    <a href="">Outdoor Adventures – Fun and Healthy Adventures</a>
                    <p>                  In the dark, cold winter, it’s easy to stay cooped up and fall out of our exercise routines. However, the longer days...

                    </p>
                    <button>Readmore</button>
                </div>
                <div className="card">
                    <img src="https://topbike-store-demo.myshopify.com/cdn/shop/articles/blog-post1_1024x1024.jpg?v=1607478360" alt="" />
                    <h4>News</h4>
                    <a href="">You Can Save an Average of $544 on Expenses Annually</a>
                    <p>                  In the dark, cold winter, it’s easy to stay cooped up and fall out of our exercise routines. However, the longer days...
                    </p>
                    <button>Readmore</button>
                </div>
            </div>
        </section>
    )
}

export default LatestNews