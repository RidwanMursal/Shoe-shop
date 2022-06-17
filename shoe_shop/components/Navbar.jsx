import Link from "next/link"
import CartHeader from "./CartHeader"
import CartItms from "./CartItms"
import CartFooter from "./CartFooter"
import { useStateContext } from "../context/stateContext"
import {AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import { useState } from "react"

const Navbar = () => {
  const [menuClosed, setMenuClosed] = useState(true)
  const [cartClosed, setCartClosed] = useState(true)
  const {cartItems} = useStateContext()
  return (
    <div className="navbar-container">
        <div className="navbar">
            <div className="navbar-left">
                <Link href="/"><h3 id="home-link">SNEAKHEAD</h3></Link>
                <div className="navbar-left-text-container">
                    <Link href="/category/mens"><p className="navbar-text">Mens</p></Link>
                    <Link href="/category/womens"><p className="navbar-text">Womens</p></Link>
                    <Link href="/category/kids"><p className="navbar-text">Kids</p></Link>
                </div>
            </div>

            <div className="navbar-right" >
                <div>
                    <div className="cart-count-container"><p>{cartItems.length}</p></div>
                    <AiOutlineShoppingCart size={30} className="cart" onClick={() => setCartClosed(!cartClosed)}/>
                </div>
                <CgProfile size={30} /> 
                <div className="hamburger-icon-contianer" onClick={() => {setMenuClosed(!menuClosed);}}>
                    {menuClosed? <AiOutlineMenu size={29}/>:<AiOutlineClose size={29}/> }
                </div>
            </div>

        </div>

        <div className={menuClosed? "hidden":"menue"} >
            <Link href="/category/mens"><p className="navbar-text">Mens</p></Link>
            <Link href="/category/womens"><p className="navbar-text">Womens</p></Link>
            <Link href="/category/kids"><p className="navbar-text">Kids</p></Link>
        </div>

        <div className={cartClosed? "hidden":"cart-container"} >
            <div>
                <CartHeader setCartClosed={setCartClosed} cartLength={cartItems.length}/> 
                <CartItms />
            </div>
            <CartFooter cartItems={cartItems} /> 
        </div>

        <div className={cartClosed? "hidden":"overlay"} onClick={() => setCartClosed(true)}></div>

        
    </div>
  )
}

export default Navbar