import React, { useEffect, useState } from "react";
import { Card } from "../components";

export default function LandingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
    async function getProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
          const data = await response.json();
      setProducts(data.products);
      } catch (err) {
        console.log("Error fetching products:", err);
      }
    }
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {products.map((el) => (
        <Card key={el.id} product={el} />
      ))}
    </div>
  );
}
