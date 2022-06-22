import { useStateContext } from "../../context/stateContext"
import CartItem from "../CartItem/CartItem"

const CartItms = () => {
  const {cartItems} = useStateContext()
  //console.log(cartItems)
  return (
    <div className="cart-items-container">
      {cartItems.map((item, index)=> <CartItem key={index} item={item}/>)}
    </div>
  )
}

export default CartItms