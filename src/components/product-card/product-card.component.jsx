import React, { useContext } from 'react'
import './product-card.style.scss'
import { CartContext } from '../../context/cart.context'

import Button from '../buttons/button.component'
export default function Productcard({product}) {
  
    const {name,price,imageUrl:imageURL} = product
      const {addItemToCart} = useContext(CartContext)


    const addProductToCart = () => {addItemToCart(product)}
  return (
    <div className='product-card-container' >
        <img src={imageURL} alt="" />
        <div className="footer">
            <div className="name">{name}</div>
            <div className="price">{price}</div>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart} >Add to cart</Button>
    </div>
  )
}
