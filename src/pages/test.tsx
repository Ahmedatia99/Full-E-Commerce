import React from "react";
import { Link } from "react-router-dom";
import { mockProducts } from "../components/common/ProductDetails/mockProduct"; // اتأكد إن المسار مظبوط

function Test() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      <ul className="space-y-2">
        {mockProducts.map((product) => (
          <li key={product.id}>
            <Link
              to={`/products/${product.id}`}
              className="text-blue-600 underline"
            >
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;



