
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

function App() {
  const [cart,setCart]=useState([])
  
    const addToCart=(product)=>{
      setCart((prev)=>[...prev,product])
    };
    console.log("Updated Cart",cart);
    

  
  return (
    <>
      {/* <Navbar/> */}
    
      <BrowserRouter>
        <Navbar />
        <CartPage cartItems={cart}/>
        <Routes>
          <Route path="/" element={<Home  addToCart={addToCart}/>}/>
          <Route path="/register" element={<Singup />}/>
          <Route path="/women" element={<Women />}/>
          <Route path="/Kids" element={<Kids />}/>
          <Route path="/phones" element={<Electronics />}/>
          <Route path="/cart" element={<CartPage cartItems={cart} />} />
          <Route path="/product/:id/" element={<ProductDetails />}/>
          
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
