import React,{useContext} from 'react'
import MyButton from '../Button/MyButton'
import './ProductCardStyle.scss'
import { CartContext } from '../../Contexts/CartContext';
export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext)
  const handleAddToCart = () => {
    addItemToCart(product);
  }
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{ name}</span>
        <span className="price">{ price}</span>
      </div>
      <MyButton buttonType='inverted' onClick={handleAddToCart} >Add to Cart</MyButton>
    </div>
  )
}
