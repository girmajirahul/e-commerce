import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Item(props) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4 p-5">
      <div
        className="cursor-pointer w-[250px] border border-amber-100 shadow-xl rounded-md hover:shadow-2xl transition"
       
      >
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-[200px] object-contain p-0"
        />
        <p className="text-center font-medium mt-2">{props.name}</p>
        <div className="flex justify-center gap-5 mt-2 mb-3">
          <div className="text-lg font-semibold text-green-600">${props.new_price}</div>
        </div>
      </div>
    </div>
  );
}
