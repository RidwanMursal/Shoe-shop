import Link from "next/link"
import {AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import { useState } from "react"

const Navbar = () => {
  const [menuClosed, setMenuClosed] = useState(true)
  return (
    <div className="navbar-container">
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

            <div className="navbar-right" onClick={() => {setMenuClosed(!menuClosed);}}>
                <AiOutlineShoppingCart size={30} className="cart"/>
                <CgProfile size={30} /> 
                <div className="hamburger-icon-contianer">
                    {menuClosed? <AiOutlineMenu size={29}/>:<AiOutlineClose size={29}/> }
                </div>
            </div>

        </div>

        <div className={menuClosed? "hidden":"menue"} >
            <Link href="/category/mens"><p className="navbar-text">Mens</p></Link>
            <Link href="/category/womens"><p className="navbar-text">Womens</p></Link>
            <Link href="/category/kids"><p className="navbar-text">Kids</p></Link>
            <Link href="/about"><p className="navbar-text">About</p></Link>
        </div>

        
    </div>
  )
}

export default Navbar