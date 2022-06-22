import { toast } from "react-toastify"

const addToCart = (product, size, quantity, addCartItem, cartItems, setCartItems) => {
    const cartEntry = {
      product, 
      size, 
      quantity,
    }  
    addCartItem(cartItems, setCartItems, cartEntry)
    toast.success(`Item Added To Cart`, {
      position:"top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false, 
    })
  }

// carousel function 
const toggleCarousel = (e, index, setIndex, productImages) => {
    console.log(e.target.className)
    if (e.target.className === "next") {
        console.log("this is the index", index)
        setIndex(index + 1 < productImages.length? index+1:0)
    } else {
        setIndex(index-1 >= 0? index-1 : productImages.length-1)
    }
}

export {addToCart, toggleCarousel}