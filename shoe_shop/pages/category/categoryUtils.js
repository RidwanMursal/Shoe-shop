import { BASE_URL } from "../../constants"

const shoeTypeQuery = async (e, setProductsState, setTypeStates, category) => {
    const typeParam = e.target.dataset.shoetype
    let selection = ""
    if (typeParam !== "all") {
      selection = `&&type=${typeParam}`
    }
    const response =  await (await fetch(`${BASE_URL}?category=${category}${selection}`)).json()
    setProductsState(response)
    setTypeStates(typeParam === "all" ? "" : typeParam)
}

export {shoeTypeQuery}