import React from 'react'
import kids_data from '../assets/Kids'
import Item from './Item'
export default function Kids() {
  return (
    <div>
     <div className='flex flex-wrap gap-7'>
          {kids_data.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} description={item.description} />
          })}
        </div>
    </div>
  )
}
