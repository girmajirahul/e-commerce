import React,{useState,useEffect} from 'react'
import Loader from './Loader';
import Item from './Item';

export default function Electronics() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

// Fetch data from Fake Store API
  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones')
      .then((res) => res.json())
      .then((data) => {
        console.log(products);
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />
  }
  return (
    <div>
       <div className='flex flex-wrap gap-7'>
          {products.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.title} image={item.thumbnail} price={item.price} />
          })}
        </div>
    </div>
  )
}
