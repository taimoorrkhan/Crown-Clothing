import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './CartDropDownStyles.scss'
import MyButton from '../Button/MyButton'
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../Contexts/CartContext'
export default function CartDropDown() {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const handleCheckout = () => {
		navigate('/checkout');
	};
  return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
			
				{cartItems &&
					cartItems.map((item) => (
						<CartItem CartItem={item} key={item.id} />
					))}
		
			</div>
			<MyButton onClick={handleCheckout} >Checkout</MyButton>
		</div>
  );
}
