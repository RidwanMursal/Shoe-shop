import Input from "../../components/Input"
import Link from "next/link"
import {BASE_URL} from "../../constants.js"
import { useState } from 'react';

// define helper functions 
const checkInput = async (input) => {
    console.log(input)
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
            name: input.name.toLowerCase(), 
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
            `${BASE_URL}`, 
            {
                method: "post", 
                //mode: "cors",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data) 
            }
        ).then(results => results.json()).then(result => {
            console.log(result)
            if (!result.message) alert(`Your new product ${input.name} has been added`)
            else if (result.message && result.message.codeName === "DuplicateKey") alert("Product with slug selected already exists")
        })
    }  
}


const productEntry = () => {
  const [formInput, setFormInput] = useState({
      name: "", 
      slug: "", 
      details: "", 
      price: "",
      type: "", 
      imgs: "", 
      brand: "", 
      category: "" 
  })

  // function to update input 
  const updateFormData = (e) => {
      const field = e.target.name 
      const value = e.target.value
      setFormInput({...formInput, [field]: value })
  }
  return (
    <div className="add-update-entry-container">
        
        <div className="add-update-entry-title">
            <h2>Add Product</h2>
        </div>
        <div className="add-update-entry-form"  >
            <Input type="text" value={formInput.name} required={true} name="name" changed={updateFormData} />
            <Input type="text" value={formInput.type} required={true} name="type" changed={updateFormData} />
            <Input type="text" value={formInput.slug} required={true} name="slug" changed={updateFormData} />
            <Input type="text" value={formInput.details} required={true} name="details" changed={updateFormData} />
            <Input type="text" value={formInput.price} required={true} name="price" changed={updateFormData} />
            <Input type="text" value={formInput.imgs} required={true} name="imgs" changed={updateFormData} />
            <Input type="text" value={formInput.brand} required={true} name="brand" changed={updateFormData} />
            <Input type="text" value={formInput.category} required={true} name="category" changed={updateFormData} />
            <div className="entry-buttons-container">
                <Link href="/dashBoard">
                    <button className="entry-back-btn"> Back To Dashboard </button>
                </Link>
                <button className="entry-add-update-btn" onClick={() => checkInput(formInput)}> Add Product </button>
                
            </div>
        </div>
        
        
    </div>
  )
}

export default productEntry