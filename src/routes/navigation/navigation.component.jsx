import React, { Fragment, useContext } from 'react'

import { Link, Outlet } from 'react-router-dom'
import  {NavigationContainer,LogoContainer,NavLinksContainer,NavLink} from  './navigation.style.jsx'
import CartIcon from '../../components/cart-icon/cart-icon.component'

import {ReactComponent as CrownLogo} from '../../assets/007 crown.svg'
import { UserContext } from '../../context/user.context'
import {signOutUser} from '../../utils/firebase/firebase.utils'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { CartContext } from '../../context/cart.context'

export default function Navigation() {

    const {currentUser} = useContext(UserContext)
  
    const {isCartOpen} = useContext(CartContext)
   
    return (
        <Fragment>

            <NavigationContainer>

                <LogoContainer to='/'><CrownLogo className='logo'/></LogoContainer>

                <NavLinksContainer>
                    <NavLink to="/shope">SHOPE</NavLink>
                    {currentUser?  (<NavLink as='span' onClick={signOutUser}>Sign out</NavLink>): (

                    <NavLink to="/auth" >SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinksContainer>
                    {isCartOpen &&  <CartDropdown/>}
                    
            </NavigationContainer>
                <Outlet />
        </Fragment>
    )
}
