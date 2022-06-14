import Link from "next/link"
const DEFAULT_IMAGE_LINK = "https://i.imgur.com/Cn7Wtcx.png"
import capitalize from "../helper_files"


const Product = ({product}) => {
  const {productName, productPrice, productType, productImages, productSlug} = product
  //console.log(productImages)
  return (
    <Link href={`/productInfo/${productSlug}`}>
      <div className="product-card">
          {/* <div className="card-image-container">
          </div> */}
        <div className="card-image-container">
          <img src={productImages[0] !== "" ? productImages[0]:DEFAULT_IMAGE_LINK} alt="" className="card-image" onError={(e) => e.target.src=DEFAULT_IMAGE_LINK} />
        </div>

          <div className="product-information">
              <h3>{productName}</h3>
              <p>{capitalize(productType)} Shoes</p>
          </div>

          <h4>${productPrice}</h4>

      </div>
    </Link>
  )
}

export default Product