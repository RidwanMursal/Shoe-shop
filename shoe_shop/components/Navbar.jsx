import Link from "next/link"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navbar-left">
                <Link href="/"><h3 id="home-link">SNEAKHEAD</h3></Link>
                <div className="navbar-left-text-container">
                    <Link href="/category/mens"><p className="navbar-text">Mens</p></Link>
                    <Link href="/category/womens"><p className="navbar-text">Womens</p></Link>
                    <Link href="/category/kids"><p className="navbar-text">Kids</p></Link>
                    <Link href="/about"><p className="navbar-text">About</p></Link>
                </div>
            </div>

            <div className="navbar-right">
                <AiOutlineShoppingCart size={30} className="cart"/>
                <CgProfile size={30} /> 
            </div>

        </div>

        {/* <hr className="navbar-break" /> */}
    </>
  )
}

export default Navbar