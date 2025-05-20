import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
 

export default function Item(props) {
  const navigate = useNavigate();
  
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
    
  };
  return (
    <div style={styles.grid}>
      <div style={styles.card}>
        <img style={styles.image}
          src={props.image}
          alt={props.name}
          className="w-full h-[200px] object-contain p-0"
        />
        <p className="text-center font-medium mt-2 text-black">{props.name}</p>
        <div className="flex flex-col items-center gap-2 mt-2 mb-3">
          <div className="text-lg font-semibold text-green-600">${props.new_price}</div>
          <button
            
            className="bg-amber-500 hover:bg-amber-600 text-white py-1 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
