import React from 'react'
import MyButton from '../Button/MyButton'
import './ProductCardStyle.scss'
export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{ name}</span>
        <span className="price">{ price}</span>
      </div>
      <MyButton buttonType='inverted'>Add to Cart</MyButton>
    </div>
  )
}
