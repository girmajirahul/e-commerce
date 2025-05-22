import CartItem from "./CartItems";
import { useState } from "react";

const CartPage = ({cartItems}) => {
  const [shipping, setShipping] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * 1,
    0
  );
  const shippingCost = shipping ? 10 : 0;
  const youSave = 20;
  const total = subtotal + shippingCost - youSave;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow">
        {/* Header */}
        <div className="bg-blue-600 text-white text-sm font-semibold uppercase px-4 py-3 grid grid-cols-5 md:grid-cols-7 text-center">
          <div className="col-span-2 text-left">Product</div>
          <div className="hidden md:block">Unit Price</div>
          <div className="hidden md:block">Quantity</div>
          <div className="hidden md:block">Total</div>
          <div className="hidden md:block">Delete</div>
        </div>

        {/* Cart Items */}
        {cartItems.length==0 ? (
        <h4 className="text-center text-red-600 p-3 font-bold">No items in cart.</h4>
      ) : (
        <>
        {cartItems.map((item, index) => (
          <CartItem key={index} product={item} />
        ))}

        </>
      )
      }
        {/* Coupon & Summary */}
        <div className="p-6 grid md:grid-cols-2 gap-3 border-t">
          {/* Coupon Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                placeholder="Enter Your Coupon"
                className="border border-gray-300 rounded px-4 py-2 w-full md:w-auto"
              />
              <button className="bg-gray-900 text-white px-4 py-2 rounded">
                APPLY
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={shipping}
                onChange={() => setShipping(!shipping)}
              />
              <label>Shipping (+10$)</label>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gray-50 border p-6 rounded text-sm space-y-3">
            <div className="flex justify-between">
              <span>Cart Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{shipping ? "$10.00" : "Free"}</span>
            </div>
            <div className="flex justify-between">
              <span>You Save</span>
              <span>-${youSave.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>You Pay</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <button className="bg-black text-white py-2 rounded hover:bg-gray-800">
                CHECKOUT
              </button>
              <button className="bg-black text-white py-2 rounded hover:bg-gray-800">
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </div>

        {/* Footer Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 text-center p-6 text-sm border-t">
          <div className="py-2">
            <strong>FREE SHIPPING</strong>
            <p>Orders over $100</p>
          </div>
          <div className="py-2">
            <strong>FREE RETURN</strong>
            <p>Within 30 days returns</p>
          </div>
          <div className="py-2">
            <strong>SECURE PAYMENT</strong>
            <p>100% secure payment</p>
          </div>
          <div className="py-2">
            <strong>BEST PRICE</strong>
            <p>Guaranteed price</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
