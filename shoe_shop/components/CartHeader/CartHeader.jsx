import React from 'react'
import {BiArrowBack} from "react-icons/bi"

const CartHeader = ({setCartClosed, cartLength}) => {
  return (
    <div className="cart-header-container" onClick={() => setCartClosed(true)}>
        <BiArrowBack cursor="pointer" /> 
        <p>Your Cart <span>({cartLength} {cartLength===1? "item":"items"})</span></p>
    </div>
  )
}

export default CartHeader