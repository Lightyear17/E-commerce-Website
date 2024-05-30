import React, { useContext } from 'react'

import  {CartIconContainer,ShoppingIcon,ItemCount} from'./cart-icon.style.jsx'
import {CartContext} from '../../context/cart.context'

export default function CartIcon() {
  const {isCartOpen,setIsCartOpen,itemcount} = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <CartIconContainer>
        <ShoppingIcon onClick={toggleIsCartOpen}/>
        <ItemCount>{itemcount}</ItemCount>
    </CartIconContainer>
  )
}
