import React from 'react'
import Heropic from '../assets/images/image1.jpg'
import ProductList from './ProductList'
import { useCart } from '../Context/CartContext'
function Home() {
  const  {addToCart}=useCart()
  return (
    <div>
      <div
        className="relative text-white h-[300px]  w-full bg-cover bg-center grid place-items-center"
        style={{ backgroundImage: `url(${Heropic})` }}
      >
        <div className=" p-6 rounded-lg text-center font-italic">
          <h1 className="text-3xl font-bold mb-2">Shop With Us</h1>
          <p className="text-lg">Unbeatable Styles. Exclusive Discounts. Just for You!</p>
        </div>
      </div>

      <div>
        <ProductList addToCart={addToCart} />
       
      </div>
     
    </div>
  )
}

export default Home
