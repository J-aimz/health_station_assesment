import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { cartContext } from '../utils/CartContext'

export default function ProductPage() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = useState({})
    const [img, setImg] = useState(null)

    const {dispatch} = useContext(cartContext)

  useEffect(() => {
      if (Object.keys(product).length === 0) {
      getProductDetails();
    }
    async function getProductDetails() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
          const data = await response.json();
          setImg(data.images[0])
        setProduct(data);
      } catch (err) {
        console.log("Error fetching products:", err);
      }
    }
  }, [id]);
    
    function handleAddToCart(item){
        dispatch({type: 'ADD', payload: item})
    }
    
  return (
    <div className="">
      <button
        onClick={() => navigate(-1)}
        className="border border-blue-600 hover:bg-blue-50 text-blue-700 font-bold py-2 px-4 rounded"
      >
        Back
      </button>
      <div className="max-w-4xl mx-auto px-4 py-8 border mt-4">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
            <img src={img} alt={product?.brand} className="w-full h-auto" />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-2xl font-bold mb-2">{product?.title}</h2>
            <p className="text-lg mb-2">{product?.description}</p>
            <p className="text-gray-700 mb-2">Category: {product?.category}</p>
            <p className="text-gray-700 mb-2">Brand: {product?.brand}</p>
            <p className="text-gray-700 mb-2">Price: ${product?.price}</p>
            <p className="text-gray-700 mb-2">Rating: {product?.rating}</p>
            <p className="text-gray-700 mb-2">
              Discount: {product?.discountPercentage}%
            </p>
            <p className="text-gray-700 mb-2">Stock: {product?.stock}</p>
               <button
                          onClick={() => handleAddToCart({ id: product.id, img: product.images[0], name: product.brand, price: product.price, quantity: 1 })}
        className="border border-blue-600 hover:bg-blue-50 text-blue-700 font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
          </div>
              </div>
      </div>
    </div>
  );
}