import {useState, useContext, createContext} from "react"
import { addCartItem, deleteCartItem } from "./cartContextUtils"


const Context = createContext()

export const StateContext = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    return (
        <Context.Provider
        value={{
            cartItems,
            setCartItems, 
            addCartItem, 
            deleteCartItem
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)