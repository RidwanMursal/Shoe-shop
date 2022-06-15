const DEFAULT_IMAGE_LINK = "https://i.imgur.com/Cn7Wtcx.png"

import Options from "../../components/Options"
import capitalize from "../../helper_files"
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai"
import {useState} from "react"



const productInfo = ({product}) => {
  // console.log(product)
  let sizes = []; for (let i = 3; i < 16; i++) sizes.push(i)
  const [index, setIndex] = useState(0)
  const [size, setSize] = useState(9)
  const [quantity, setQuantity] = useState(1)
  const decrementQty = () => {if(quantity > 0) setQuantity(quantity-1);}
  const {productImages, productPrice, productDetails, productBrand, productName} = product
  console.log("index is:", index)
  console.log(productImages)
  return (
    <div className="product-container">
      <div className="product-info-container">
        <div className="product-info-images">
          <img src={productImages[index] !== "" ? productImages[index]:DEFAULT_IMAGE_LINK} alt="" className="product-image" onError={(e) => e.target.src=DEFAULT_IMAGE_LINK}/>
          <div className="other-images-container">
            {productImages?.map((image, i) => <img src={image} className={i === index? "preview-image selected": "preview-image"} onClick={(e) =>  setIndex(i)} />)}
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
                  <p className="qty">{quantity}</p>
                  <button className="picker-button" onClick={() => setQuantity(quantity + 1)}><AiFillPlusCircle/></button>
                </div>
                
                <select name="sizes" id="" defaultValue="9"onChange={(e) => setSize(e.target.selectedOptions.item(0).value)}>
                  <Options values={sizes} />
                </select>
              </div>

              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({params: {slug}}) => {
  const product = await (await fetch(`http://localhost:5050/products/${slug}`)).json()
  return {props: {product}}
}

export default productInfo