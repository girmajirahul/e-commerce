import React from 'react'
import Item from './Item'
import data from '../assets/data'
import banner1 from '../assets/images/banner_women.png'
export default function Women() {
  return (
    <div>
      <div
        className="relative text-white h-[300px]  w-full bg-cover bg-center grid place-items-center mb-10 m-8"
        style={{ backgroundImage: `url(${banner1})` }}>
      </div>  
      <div className='flex flex-wrap gap-7 '>
          {data.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} description={item.description} />
          })}
        </div>
      
      </div>    

  )
}
