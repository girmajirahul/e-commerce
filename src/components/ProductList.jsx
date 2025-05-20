import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const ProductList = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const navigate=useNavigate()

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
  },
  description: {
    fontSize: '0.9rem',
    color: '#666',
  },
};

  // Fetch data from Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(products);
        setProducts(data);
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
    <div style={styles.grid}>
      {products.map((product) => (  
        <div key={product.id} style={styles.card} >
          <img src={product.image} alt={product.title} style={styles.image} />
          <h3>{product.title}</h3>
          <h4 className='font-serif'>{product.price} $</h4>
          <div className="flex gap-2">
            <button className=' bg-amber-300 p-3 rounded-[10px]  ' >Add to Cart </button>
            <button className=' bg-amber-500 p-3 rounded-[10px] ' onClick={()=>navigate(`/product/${product.id}`)} >Proceed Buy </button>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ProductList;
