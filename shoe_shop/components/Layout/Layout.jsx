import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Layout = ({children}) => {
  return (
    <>
    <Header /> 
    <Navbar /> 

    <div className="main-container">
      {children}
    </div>

    {/* <Footer />  */}

    </>
  )
}

export default Layout