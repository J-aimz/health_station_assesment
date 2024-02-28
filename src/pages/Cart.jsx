import React, { useContext } from "react";
import { cartContext } from "../utils/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { state, dispatch } = useContext(cartContext);
  const cart = state.items;
  const navigate = useNavigate()
  console.log(cart)
  function removeItem(id) {
    console.log(id)
    dispatch({ type: "REMOVE", payload: id });
  }

  function clearCart() {
    dispatch({ type: "CLEAR" });
  }
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="border border-blue-600 hover:bg-blue-50 text-blue-700 font-bold py-2 px-4 rounded"
      >
        Back
      </button>
      <div className="mt-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-xl  text-center">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-gray-200 py-2"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 mt-4 rounded border border-red-500 hover:bg-red-50 py-2 px-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={clearCart}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </>
  );
}
