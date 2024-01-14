import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./index.scss"
import ShopNavbar from '../../layout/ShopNavbar'
import Footer from '../../layout/Footer'
import Search from '../../components/Search'

const AddPage = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState()
    const [categories, setCategories] = useState("")
    const [discount, setDiscount] = useState()
    const [data, setData] = useState([])

    const fetchData = async () => {
        const resp = await fetch("http://localhost:8000/api/products/")
        const jsonData = await resp.json()
        setData(jsonData)
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleDeleteProducts = async (_id) => {
        const deleteProduct = await axios.delete(`http://localhost:8000/api/products/${_id}`)
    }

    const handleAddProduct = async () => {
        const resp = await axios.post("http://localhost:8000/api/products/", {
            title: title,
            image: image,
            price: price,
            categories: categories,
            discount: discount
        })
        setTitle("")
        setImage("")
        setPrice(0)
        setCategories("")
        setCategories("")
        setDiscount("")
    }
    return (
        <div className='addpage'>
            <Search/>
            <ShopNavbar />
            <div className='addform'>
                <h1>Add Product</h1>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder='Image' />
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price' />
                <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} placeholder='Categories' />
                <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder='Discount' />
                <button onClick={() => handleAddProduct()}>Add</button>
            </div>
            <table className='tables'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Category</th>
                        {/* <th>Discount</th> */}
                        <th>Delete</th>
                    </tr>
                    {data && data.map((item) => (
                        <tr key={item._id}>
                            <td><img src={item.image} alt="" /></td>
                            <td>{item.title}</td>
                            <td className='price'>{item.price}$</td>
                            <td>{item.categories}</td>
                            {/* <td>{item.discount}</td> */}
                            <td><button onClick={() => handleDeleteProducts(item._id)}>Delete</button></td>
                        </tr>
                    ))}
                </thead>
            </table>
            <Footer/>
        </div>
    )
}

export default AddPage