import React, { useEffect, useState } from 'react'
import "./index.scss"

const NewProduct = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const resp = await fetch("http://localhost:8000/api/products")
        const jsonData = await resp.json()
        setData(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section id='newproducts'>
            <div className='h3'><h3>New Product</h3></div>
            <div className='products'>
                {data && data.filter(item=>item.categories === "bike").map((item)=>(
                    <ul key={item._id}>
                        <img src={item.image} alt="" />
                        <li className='title'>{item.title}</li>
                        <li className={item.discount?"prices":""}><span className='newprice'>{item.discount? `$${item.price-item.discount}`:""}</span><span className={item.discount?"oldprice":"newprice"}>${item.price}</span></li>
                        {item.sale?<li className='sale'>{item.sale}</li>:""}
                    </ul>
                ))}
            </div>
        </section>
    )
}

export default NewProduct