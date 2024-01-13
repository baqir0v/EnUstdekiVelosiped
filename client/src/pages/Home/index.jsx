import React from 'react'
import Header from '../../components/Header'
import Services from '../../components/Services'
import OnlyOnline from '../../components/OnlyOnline'
import Shopify from '../../components/ShopifySection'
import LatestNews from '../../components/Latest News'
import Footer from '../../layout/Footer'
import NewProduct from '../../components/NewProducts'

const HomePage = () => {
    return (
        <>
            <Header />
            <Services/>
            <NewProduct/>
            <OnlyOnline/>
            <Shopify/>
            <LatestNews/>
            <Footer/>
        </>
    )
}

export default HomePage