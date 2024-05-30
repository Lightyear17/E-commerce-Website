import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity===1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== cartItemToRemove.id;
    });
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );




};

const clearCartItem = (cartItems,cartItemToClear) =>{
  return cartItems.filter((cartItem) => {
    return cartItem.id !== cartItemToClear.id;
  });
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  itemcount: 0,
  cartTotal:0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [itemcount, setItemcount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
 

  useEffect(() => {
    const newItemcount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setItemcount(newItemcount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);



  const addItemToCart = (productToAdd) => {
    setcartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setcartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear)=>{
      setcartItems(clearCartItem(cartItems,cartItemToClear))
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    itemcount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal
  };
  // console.log(cartItems);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
