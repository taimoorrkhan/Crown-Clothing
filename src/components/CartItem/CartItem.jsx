import './CartItemStyle.scss'


export default function CartItem({ CartItem }) {
  const { name, price, imageUrl, quantity } = CartItem;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{ quantity} x ${price}</span>
      </div>
    </div>
  )
}
