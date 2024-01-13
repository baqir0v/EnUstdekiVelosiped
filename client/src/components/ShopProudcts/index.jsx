import React, { useEffect, useState } from 'react'
import "./index.scss"
import { FaFilter } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ShopProducts = () => {
    const [isGridOpen, setIsGridOpen] = useState(false)
    const [data, setData] = useState([])
    const [grid2, setGrid2] = useState(2)
    const [grid3, setGrid3] = useState(3)
    const [grid4, setGrid4] = useState(4)
    const [grid5, setGrid5] = useState(5)
    const [customGrid, setCustomGrid] = useState(4)

    const handleGrid2 = () => {
        setCustomGrid(grid2)
    }
    const handleGrid3 = () => {
        setCustomGrid(grid3)
    }
    const handleGrid4 = () => {
        setCustomGrid(grid4)
    }
    const handleGrid5 = () => {
        setCustomGrid(grid5)
    }

    const fetchData = async () => {
        const res = await fetch("http://localhost:8000/api/products/")
        const jsonData = await res.json()
        setData(jsonData)
    }
    useEffect(() => {
        fetchData()
    }, [])


    const handleGridOpen = () => {
        setIsGridOpen(!isGridOpen)
    }
    return (
        <section id='shopproducts'>
            <div className="shopproductbox">
                <div className="shoptop">
                    <div className="filter">
                        <button><FaFilter />Filter</button>
                    </div>
                    <div className="sort">
                        <div className="grid">
                            <div className={isGridOpen ? "btnsdiv" : "dnone"}>
                                <button onClick={handleGrid2}>2</button>
                                <button onClick={handleGrid3}>3</button>
                                <button onClick={handleGrid4}>4</button>
                                <button onClick={handleGrid5}>5</button>
                            </div>
                            <button className='gridbtn' onClick={handleGridOpen}>
                                <BsGrid3X3GapFill />
                            </button>
                        </div>
                        <div className="select">
                            <select>
                                <option value="">Featured</option>
                                <option value="">Best Selling</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="shopbottom" style={{ gridTemplateColumns: `repeat(${customGrid}, 1fr)` }}>
                    {data && data.map((item) => (
                        <ul key={item._id}>
                            <li><img src={item.image} alt="" /></li>
                            <li className='title'>{item.title}</li>
                            <li className={item.discount ? "prices" : ""}><span className='newprice'>{item.discount ? `$${item.price - item.discount}` : ""}</span><span className={item.discount ? "oldprice" : "newprice"}>${item.price}</span></li>
                            {item.sale ? <li className='sale'>{item.sale}</li> : ""}
                            <div className='producticons'>
                                <span className='heart'><FaRegHeart /></span>
                                <span className='bag'><AiOutlineShopping /></span>
                                <span className='glass'><Link to={`/${item._id}`}><FaMagnifyingGlass /></Link></span>
                            </div>
                        </ul>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ShopProducts