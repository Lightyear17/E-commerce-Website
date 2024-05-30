import React from 'react'
import  './button.style.scss'

const BUTTON_TYPE_CLASSES={
  base:'base',
    google:'google-sign-in',
    inverted:'inverted'
}

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base)=>(
//   {
//     [BUTTON_TYPE_CLASSES.base]:BaseButton,
//     [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
//     [BUTTON_TYPE_CLASSES.inverted]:InvertedButton
//   }[buttonType]
// )


export default function Button({children,buttonType,...otherProps}) {
    
    
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}{...otherProps}>
       {children}
        </button>
  )
}
