import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShopNavbar from '../../layout/ShopNavbar'
import Footer from '../../layout/Footer'
import Search from '../../components/Search'

const DetailPage = () => {
    const [detail, setDetail] = useState([])
    const { id } = useParams()

    const fetchData = async () => {
        const resp = await fetch(`http://localhost:8000/api/products/${id}`)
        const jsonData = await resp.json()
        setDetail(jsonData)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div>
                <Search/>
                <ShopNavbar/>
                {detail ? <>
                    <div>
                        <ul>
                            <img src={detail.image} alt="" style={{ width: "300px" }} />
                            <li>{detail.title}</li>
                            <li>${detail.price}</li>
                        </ul>
                    </div>
                </>
                    : ""
                }
                <Footer/>
            </div>
        </>
    )
}

export default DetailPage