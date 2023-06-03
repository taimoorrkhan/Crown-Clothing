import React from 'react'
import './CartDropDownStyles.scss'
import MyButton from '../Button/MyButton'
export default function CartDropDown() {
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
        <MyButton>Checkout</MyButton>
      </div>
    </div>
  )
}
