import { BASE_URL } from "../constants"
// delete Database entry 
const deleteEntry = async (id, productsState, setProducts) => {
    await fetch(
        `${BASE_URL}/${id}`, 
        {method: "delete"}
        ).then(response => {
            if (response.status === 200) {
                setProducts(productsState.filter(product => product._id !== id))
            }
        })
}

export default deleteEntry