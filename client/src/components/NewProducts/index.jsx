import React, { useEffect, useState } from 'react'
import "./index.scss"
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from 'react-router-dom';


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
                {data && data.filter(item => item.categories === "bike").map((item) => (
                    <ul key={item._id}>
                        <img src={item.image} alt="" />
                        <li className='title'>{item.title}</li>
                        <li className={item.discount ? "prices" : ""}><span className='newprice'>{item.discount ? `$${item.price - item.discount}` : ""}</span><span className={item.discount ? "oldprice" : "newprice"}>${item.price}</span></li>
                        {item.sale ? <li className='sale'>{item.sale}</li> : ""}
                        <div className='producticons'>
                            <span className='heart'><FaRegHeart /></span>
                            <span className='bag'><AiOutlineShopping /></span>
                            <span className='glass'><Link to={`/${item._id}`}><FaMagnifyingGlass/></Link></span>
                        </div>
                    </ul>
                ))}
            </div>
        </section>
    )
}

export default NewProduct