import React from "react";
import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
      <div className="h-3/4">
        <Link to={`/product/${product.id}`}>
          <img
            className="w-full object-cover"
            src={product.images[0]}
            alt={product.name}
          />
        </Link>
      </div>
      <div className="px-6 py-4">
        <Link to={`/product/${product.id}`}>
          <h5 className="font-bold text-xl mb-2">{product.name}</h5>
        </Link>
        <p className="text-gray-700 text-base">
          {product.description.substring(0, 40) + "..."}
        </p>
        <p className="text-gray-700 text-base">${product.price}</p>
      </div>
    </div>
  );
}