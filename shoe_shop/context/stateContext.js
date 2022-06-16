import react, {useState, useContext, useEffect, createContext} from "react"

// helper functions 
const updateQuantity = (cartItems, quantity, index) => {
    const dummyObj = structuredClone(cartItems)
    dummyObj[index].quantity += quantity 
    return dummyObj
}
const itemInCart = (cartItems, product, size) => {
    let itemIndex = -1 
    cartItems.forEach((item, index) => {
        if (item.product.productSlug === product.productSlug && item.size === size) itemIndex = index
    })
    return itemIndex
}
const addCartItem = (cartItems, setCartItems, cartEntry) => {
    const {product, size, quantity} = cartEntry
    const index = itemInCart(cartItems, product, size)
    console.log("this is the index", index)
    if (index !== -1) {
        const dummyObj = updateQuantity(cartItems, quantity, index) 
        setCartItems(dummyObj)
        console.log(cartItems)
    }
    else setCartItems([...cartItems, cartEntry])
    return;
}

const deleteCartItem = (cartItems, setCartItems, item) => {
    setCartItems( cartItems.filter(cItem => cItem !== item) )
    return; 
}

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