import shoeImageTopView from "../images/air-force-ones.png"
import shoeImageProfile from "../images/air-force-ones-profile.png"
import mobileBanner from "../images/nike.jpg"
import Link from "next/link"



const Banner = () => { 
  return (
    <>
    <div className="banner-image-container-mobile">
      <img src={mobileBanner.src} alt="Nike Banner" className="mobile-banner" />

    </div>
      <div className="banner-container">
          <div className="banner-details-container">
            <div>
              <h1 className="banner-heading">Nike Air Force Ones</h1>
              <p className="banner-item-desc">Experience the reimagined retro jordans </p>
            </div>

            <div>
              <h2 className="banner-item-price">$79.99</h2>
              <Link href="/productInfo/nike-af1-new">
                <button className="banner-shop-button">Shop Now</button>
              </Link>
            </div>
          </div>
          <img className="banner-image"src={shoeImageTopView.src} alt="oh no" />
          <img src={shoeImageProfile.src} alt="" className="banner-image" />

      </div>
    </>
  )
}

export default Banner