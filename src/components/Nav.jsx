import React, { useContext } from "react";
import cartIcon from "../imgs/cartIcon.svg";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../utils/CartContext";

export default function Nav() {
    const navigate = useNavigate()
      const { state } = useContext(cartContext);
  return (
    <div className="w-full py-2 px-2 flex justify-between items-center bg-blue-800">
      <div>
        <h1 className="text-white hidden md:inline-block text-4xl font-bold">
          Shopping App
        </h1>
      </div>
      <button onClick={() => navigate("/cart")} className="relative p-4">
        <img src={cartIcon} alt="cart" className="text-lg h-8 w-8 white" />
        <small className="absolute top-[0]  right-[0] shadow bg-red-500 rounded-full w-6 h-6 flex justify-center items-center text-white text-xs">
          {state.items.length}
        </small>
      </button>
    </div>
  );
}
