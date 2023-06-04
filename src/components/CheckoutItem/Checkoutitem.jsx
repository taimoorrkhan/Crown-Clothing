import './CheckoutItemStyles.scss'

import React, { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext'

export default function Checkoutitem({ cartItem }) {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
		useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem
  const clearItem = () => {
    clearItemFromCart(cartItem)
  }
  return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div
					onClick={() => removeItemFromCart(cartItem)}
					className="arrow"
				>
					&#8722;
				</div>
				<span className="value">{quantity}</span>
				<div
					onClick={() => addItemToCart(cartItem)}
					className="arrow"
				>
					&#43;
				</div>
			</span>
			<span className="price">${price}</span>
			<div onClick={clearItem} className="remove-button">
				&#10005;
			</div>
		</div>
  );
}
