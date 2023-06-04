import {useContext} from 'react'
import './CheckoutStyles.scss'
import Checkoutitem from '../CheckoutItem/Checkoutitem'
import { CartContext } from '../../Contexts/CartContext'
export default function Checkout() {
  const { cartItems,cartTotal } = useContext(CartContext)
  
  return (
		<div className="checkout-container">
			<div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
			</div>
			{cartItems.map((item) => {
				
				return (
					<Checkoutitem key={item.id} cartItem={item} />
				);
      })}
      <span className="total">Total: ${cartTotal}</span>
		</div>
  );
}
