import React from 'react'
import Item from './Item'
import data from '../assets/data'
import banner1 from '../assets/images/banner_women.png'
export default function Women() {
  return (
    <div>
        <div>
            <img src={banner1} alt="" className='h-[200px] w-full'/>
        </div>
        <div className='flex items-center h-[90vh] mt-20 ' >
        
        <hr/>
        <div className='flex flex-wrap gap-7'>
          {data.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
          })}
        </div>
      </div>
    </div>

  )
}
