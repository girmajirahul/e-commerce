
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Singup from './components/Singup'
import Women from './components/Women'
import Kids from './components/Kids'
import Electronics from './components/Electronics'
import { useState } from 'react'
import CartPage from './components/Cart/CartPages'
import { CartProvider } from './Context/CartContext'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

function App() {
   return (
    <>
      {/* <Navbar/> */}
      <CartProvider >
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home  />}/>
          <Route path="/register" element={<Singup />}/>
          <Route path="/women" element={<Women />}/>
          <Route path="/Kids" element={<Kids />}/>
          <Route path="/phones" element={<Electronics />}/>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id/" element={<ProductDetails />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
