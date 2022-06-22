
const CartFooter = ({cartItems}) => {
  let subtotal = 0 
  cartItems.forEach(item => subtotal += (item.product.productPrice*item.quantity))
  return (
    <div>
        <div className="subtotal-container" >
            <h5>Subtotal:</h5>
            <h5>${Math.round(subtotal*100)/100}</h5>
        </div>

        <div className="checkout-button-container">
            <button className="checkout-button">Checkout</button>
        </div>
        
        
    </div>
  )
}

export default CartFooter