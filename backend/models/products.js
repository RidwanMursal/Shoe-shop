const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema( {
    productName: {
        type: String,
        required: true
    },

    productDetails: {
        type: String, 
        required: true
    },

    productType: {
        type: String, 
        required: true
    },

    productBrand: {
        type: String
    }, 

    productCategory: {
        type: String,
        required: true

    },

    productPrice: {
        type: Number, 
        required: true
    },
    
    productSlug: {
        type: String,
        required: true, 
        unique: true
    },

    productImages: {
        type: [{type: String}]
    }
})

module.exports = mongoose.model("Products", productsSchema)