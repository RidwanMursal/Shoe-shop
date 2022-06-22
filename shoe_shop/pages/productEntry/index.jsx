import Input from "../../components/Input/Input"
import Link from "next/link"
import checkInput from "../../utils/peoductEntryUtils";
import { useState } from 'react';


const ProductEntry = () => {
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

export default ProductEntry