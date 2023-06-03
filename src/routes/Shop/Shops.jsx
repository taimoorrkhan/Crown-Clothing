

import { useContext } from "react";
import React from 'react'
import { ProductsContext } from "../../Contexts/ProductsContexts";
import ProductCard from "../../components/ProductCard/ProductCard";
import './ShopsStyles.scss'
export default function Shops() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
  )
}
