import {CartDropdownContainer,CartItems,EmptyMessage } from'./cart-dropdown.style.jsx'
import Button from '../buttons/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../context/cart.context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
const CartDropdown = ()=>{
    const navigator = useNavigate()
    const  goToCheckoutHandler = ()=>{
            navigator('/checkout')
    }
    const {cartItems} = useContext(CartContext)

        return(
            <CartDropdownContainer>
                <CartItems>
                    {cartItems.length? (
                        cartItems.map((cartItem) => (
                            <CartItem key={cartItem.id} cartItem={cartItem} />
                        ))) :(
                            <EmptyMessage>Your cart is empty</EmptyMessage>
                        )
                    }
                
                </CartItems>
                    <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
                
            </CartDropdownContainer>
        )
}


export default CartDropdown