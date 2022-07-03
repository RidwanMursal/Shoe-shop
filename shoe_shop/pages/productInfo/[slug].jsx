const DEFAULT_IMAGE_LINK = "https://i.imgur.com/Cn7Wtcx.png"

import Options from "../../components/Options/Options"
import { addToCart, toggleCarousel } from "../../utils/productInfoUtils"
import capitalize from "../../helper_files"
import {BASE_URL} from "../../constants.js"
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai"
import {useState} from "react"
import { useStateContext } from "../../context/stateContext"



const ProductInfo = ({product}) => {
  //console.log("this is the base url", BASE_URL)
  
  const {cartItems, setCartItems, addCartItem} = useStateContext()
  //console.log(cartItems)
  
  // console.log(product)
  let sizes = []; for (let i = 3; i < 16; i++) sizes.push(i)
  const [index, setIndex] = useState(0)
  const [size, setSize] = useState(9)
  const [quantity, setQuantity] = useState(1)
  const decrementQty = () => {if(quantity > 1) setQuantity(quantity-1);}
  const {productImages, productPrice, productDetails, productBrand, productName} = product
  
  

  return (
   
    <div className="product-container">
       
      <div className="product-info-container">
        <div className="product-info-images">
          <div className="carousel">
            <button className="prev" onClick={(e) => toggleCarousel(e, index, setIndex, productImages)}>&#8656;</button>
            <button className="next" onClick={(e) => toggleCarousel(e, index, setIndex, productImages)}>&#8658;</button>
            {productImages?.map((image, i) => <img src={image} key={i} className={i === index? "product-image": "height-hidden"} onClick={(e) =>  setIndex(i)} />)}
          </div>
          <img id="product-image" src={productImages[index] !== "" ? productImages[index]:DEFAULT_IMAGE_LINK} alt="" className="product-image" onError={(e) => e.target.src=DEFAULT_IMAGE_LINK}/>
          <div className="other-images-container">
            {productImages?.map((image, i) => <img src={image} key={i} className={i === index? "preview-image selected": "preview-image"} onClick={(e) =>  setIndex(i)} />)}
          </div>
        </div>

        <div className="product-description">
            <h3 className="company-name">{capitalize(productBrand)}</h3>
            <h1 className="sneaker-name">{productName}</h1>
            <p className="product-blurb">{productDetails}</p>
            <h3 className="product-price">${productPrice}</h3>

            <div className="product-buttons-container">

              <div className="qty-and-size-container">
                <div className="qty-picker">
                  <button className="picker-button" onClick={() => decrementQty()}><AiFillMinusCircle /></button>
                  <div className="break-line"></div>
                  <p className="qty">{quantity}</p>
                  <div className="break-line"></div>
                  <button className="picker-button" onClick={() => setQuantity(quantity + 1)}><AiFillPlusCircle/></button>
                </div>
                
                <select name="sizes" id="" defaultValue="9"onChange={(e) => setSize(e.target.selectedOptions.item(0).value)}>
                  <Options values={sizes} />
                </select>
              </div>

              <button className="add-to-cart-btn" onClick={() => addToCart(product, size, quantity, addCartItem, cartItems, setCartItems)}>Add to Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

  
export const getStaticPaths = async () => {

  const products = await (await fetch(`${BASE_URL}`)).json()

  const paths = products.map((product) => ({
      params: {
          slug: product.productSlug
      }
  }))

  return {
      paths, 
      fallback: "blocking"
  }
}

export const getStaticProps = async( {params: {slug}} ) => {
  const product = await (await fetch(`${BASE_URL}/${slug}`)).json()
  return {props: {product}}
}

// export const getServerSideProps = async ({params: {slug}}) => {
  
//   const product = await (await fetch(`${BASE_URL}/${slug}`)).json()
//   return {props: {product}}
// }

export default ProductInfo