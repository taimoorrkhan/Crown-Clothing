import { createContext, useState,useEffect } from "react";

const addCartItem = (cartItem, item) => {
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === item.id
  );
  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItem,{...item,quantity:1}]
};
const removeCartItem = (cartItem, itemToRemove) => {
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItem.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }
  return cartItem.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (cartItem, itemToClear) => {
  return cartItem.filter((cartItem) => cartItem.id !== itemToClear.id);

};


export const CartContext = createContext({
  isCartOpen: false,
  toggleCart: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
  total : 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
 const [cartCount, setCartCount] = useState(0);
 const [cartTotal, setCartTotal] = useState(0);

 useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);
		setCartCount(newCartCount);
 }, [cartItems]);

 useEffect(() => {
		const newCartTotal = cartItems.reduce(
			(total, cartItem) =>
				total + cartItem.quantity * cartItem.price,
			0
		);
		setCartTotal(newCartTotal);
 }, [cartItems]);

const addItemToCart = (item) => {
    setCartItem(addCartItem(cartItems,item));
  };

  const removeItemFromCart = (item) => {
    setCartItem(removeCartItem(cartItems,item));
  };

  const clearItemFromCart = (item) => {
    setCartItem(clearCartItem(cartItems,item));
    
  }
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartContext.Provider value={{ isCartOpen, toggleCart,addItemToCart,cartItems ,removeItemFromCart ,clearItemFromCart,cartCount,cartTotal}}>
      {children}
    </CartContext.Provider>
  );
}