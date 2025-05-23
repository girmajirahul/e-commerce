import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const CartItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1); // Fake Store products don't have quantity

  const handleQuantity = (type) => {
    setQuantity((prev) =>
      type === "inc" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };
  console.log("Recieved Item ",product)
  const total = (product.price * quantity).toFixed(2); // Use `price` instead of `unitPrice`

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border-b py-4 px-2">
      <div className="flex items-center gap-4 w-full md:w-1/3">
        <img src={product.image} alt={product.title} className="w-16 h-16" />
        <div>
          <h3 className="font-semibold">{product.title}</h3>
          <p className="text-sm text-gray-500">{product.description}</p>
        </div>
      </div>

      <div className="flex justify-between items-center w-full md:w-2/3 mt-4 md:mt-0 text-center">
        <div className="w-1/4">${product.price.toFixed(2)}</div>

        <div className="w-1/4 flex items-center justify-center gap-2">
          <button onClick={() => handleQuantity("dec")} className="px-2 py-1 border rounded">-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantity("inc")} className="px-2 py-1 border rounded">+</button>
        </div>

        <div className="w-1/4">${total}</div>

        <div className="w-1/12">
          <button className="text-red-500 hover:text-red-700">
            <FaRegTrashAlt size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};


export default CartItem;
