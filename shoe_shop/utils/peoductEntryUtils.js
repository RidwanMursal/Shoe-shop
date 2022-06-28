import { BASE_URL } from "../constants";

// define helper functions 
const checkInput = async (input, id) => {
    console.log(input)
    id = (id === undefined? "":id)
    console.log(id)
    const method = id === ""? "POST":"PATCH"
    console.log("the method is", method)
    // if any of the required inputs are empty, return an alert
    if (
        input.name === "" || input.slug === "" || input.details ==="" ||
        input.price ==="" || input.type === ""
    ) alert("Please fill out all required fields")
    // if price not in proper form, return an alert
    else if (isNaN(input.price)) {alert("Invalid price input")}

    // else add data to data base 
    else {
        const data = {
            name: input.name, 
            type: input.type.toLowerCase(), 
            details: input.details, 
            price : input.price,
            slug: input.slug.toLowerCase(), 
            imgs: input.imgs.split(", "), 
            brand: input.brand.toLowerCase(), 
            category: input.category.toLowerCase()
        }
        console.log("data is", data)
        await fetch(
            `${BASE_URL}/${id}`, 
            {
                method: method, 
                //mode: "cors",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data) 
            }
        ).then(results => results.json()).then(result => {
            console.log(result)
            if (!result.message) alert(`Your${id === ""? " new ":" "}product ${input.name} has been ${id === ""? "added":"updated"}`)
            else if (result.message && result.message.codeName === "DuplicateKey") alert("Product with slug selected already exists")
        })
    }  
}

export default checkInput