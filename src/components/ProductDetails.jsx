import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader';

export default function ProductDetails() {
 const {id}=useParams();
 const [product,setProducts]=useState(null);
 const [loading,setLoading]=useState(true);

 useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(data=>{
        setProducts(data);
        setLoading(false);
    })
    .catch(err=>{
        console.log("Error in fectching data");
        setLoading(false);
    });
 },[id]);
console.log(product);
 if(loading) return <Loader/>

 if(!product) return <p>product details not found </p>
    return (
        <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <img src={product.image} alt={product.title} className="w-64 h-64 object-contain mb-4" />
        <p className="text-lg text-gray-700 mb-2">{product.description}</p>
        <h3 className="text-xl font-semibold text-green-600">${product.price}</h3>
      </div>
  )
}
