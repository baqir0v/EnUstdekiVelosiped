import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import SearchProvider from './Context/searchContext.jsx'
import WishlistProvider from './Context/wishlistContext.jsx'
import BasketProvider from './Context/basketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BasketProvider>
      <WishlistProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </WishlistProvider>
    </BasketProvider>
  </BrowserRouter>,
)
