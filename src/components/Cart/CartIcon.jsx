import React,{useContext} from 'react'
import './CartIconStyles.scss'

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { CartContext } from '../../Contexts/CartContext';
export default function CartIcon() {
  const {  toggleCart } = useContext(CartContext)
  const CartToggle = () => {
    toggleCart()
  }
  return (
    <div className='cart-icon-container' onClick={CartToggle}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}
