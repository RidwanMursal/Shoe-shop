import {AiFillCloseCircle} from "react-icons/ai"
import { useStateContext } from "../../context/stateContext"

const CartItem = ({item}) => {
  const {cartItems, setCartItems, deleteCartItem} = useStateContext()
  //console.log(cartItems, setCartItems, deleteCartItem)
  //console.log(item)
  const {productImages, productPrice, productName} = item.product 
  const {size} = item; const {quantity} = item
  return (
    <div className="cart-item-container">
        <img src={productImages[0]} alt="" className="cart-image" />

        <div className="cart-item-desc">
            <div className="cart-item-name-container">
                <p>{productName}</p>
                <p>${productPrice}</p>
            </div>

            <div className="cart-item-qty-container">
                <div className="cart-item-size-qty-container">
                    <p>Quantity: {quantity}</p>
                    <p>Size: {size}</p>
                </div>
                
                <AiFillCloseCircle className='delete-cart-item-button' size={20} color="red" onClick={() => deleteCartItem(cartItems, setCartItems, item)} />
            </div>
        </div>


    </div>
  )
}

export default CartItem