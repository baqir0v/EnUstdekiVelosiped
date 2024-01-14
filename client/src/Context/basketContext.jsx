import React, { createContext, useEffect, useState } from 'react'
export const basketContext = createContext()

const BasketProvider = ({children}) => {
    const [basket,setBasket] = useState(localStorage.getItem("basket")?JSON.parse(localStorage.getItem("wishlist")):[])
    const [count, setCount] = useState(0)

    const addToBasket = (product) => {
        const basketProduct = basket.find(i=>(i._id === product._id))

        if (basketProduct) {
            setBasket([...basket,product])
        } else {
            setCount(count+1)
        }
    }
    useEffect(() => {
      localStorage.setItem("basket",JSON.stringify(basket))
    }, [basket])

    const data = {basket,addToBasket}
    
    return (
    <basketContext.Provider value={data}>
        {children}
    </basketContext.Provider>
  )
}

export default BasketProvider