import { useStateContext } from '../context/stateContext'
import CartItem from "./CartItem"

const CartItms = () => {
  const {cartItems} = useStateContext()
  console.log(cartItems)
  return (
    <div className="cart-items-container">
      {cartItems.map(item => <CartItem key={item.product._id} item={item}/>)}
    </div>
  )
}

export default CartItms