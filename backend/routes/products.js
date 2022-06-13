const express = require("express")
const Products = require("../models/products")

router = express.Router()

// helper object from query fromction

const buildObjFromQuery = (query) => {
    const selection = {}

    if (query.name) selection.productName = query.name 
    if (query.details) selection.productDetails = query.details
    if (query.type) selection.productType = query.type
    if (query.brand) selection.productBrand = query.brand 
    if (query.category) selection.productCategory = query.category 
    if (query.price) selection.productPrice = query.price 
    if (query.slug) selection.productSlug = query.slug 
    if (query.imgs) selection.produceImages = query.imgs 

    return selection
}

// get all items from db based on a specific selection  
router.get("/", async (req, res) => {
    console.log("got 'get' request")
    const query = req.query 
    console.log(query)
    const selection = buildObjFromQuery(query)
    console.log(selection)
    try {
        const allProducts = await Products.find(selection)
        res.json(allProducts)
    }   
    catch (error) {
        res.json({message: error})
    }
    
})

// Get a singular item based on id
router.get("/:slug", async (req, res) => {
    console.log("got 'get a single item' request")
    try {
        const slug = req.params.slug
        if (await Products.exists({productSlug: slug})) {
            const post = await Products.findOne({productSlug: slug})
            res.status(200).json(post)
        } else {
            res.status(400).json({message: `No element in database with given slug ${slug}` })
        }
    }
    catch (err) {
        res.status(400).json({message: err})
    } 
})



// add an item to database
router.post("/", async (req, res) => {
    console.log("got 'post' request")
    console.log("the body's content is", req.body)
    

    try {
        const product = new Products({
            productName: req.body.name, 
            productDetails: req.body.details,
            productType: req.body.type,
            productPrice: req.body.price, 
            productSlug: req.body.slug, 
            productImages: req.body.imgs,
            productCategory: req.body.category, 
            productBrand: req.body.brand 
        })

        const newProduct = await product.save() 
        res.status(201).json(newProduct)
    }

    catch (err) {
        res.status(400).json({message: err})
    }
})


 

// delete by id 
router.delete("/:id", async (req, res) => {
    console.log("got 'delete' request")

    try {
        const id = req.params.id
        if (await Products.exists({_id: id})) {
            const deletedPost = await Products.deleteOne({_id: id})
            res.status(200).json(deletedPost)
        } else {
            res.status(400).json({message: "No element in database with given id"})
        }
        
    }

    catch (err) {
        FileSystem.out.println
        res.status(400).json({message: err})
    } 
})

// update by id  
router.patch("/:id", async (req, res) => {
    console.log("got 'patch' request")

    try {
        const id = req.params.id
        if (await Products.exists({_id: id})) {
            const updatedPost = await Products.findByIdAndUpdate(id, 
                {
                    productName: req.body.name, 
                    productDetails: req.body.details, 
                    productType: req.body.type, 
                    productSlug: req.body.slug, 
                    productPrice: req.body.price,
                    productImages: req.body.imgs, 
                    productCategory: req.body.category, 
                    productBrand: req.body.brand 
                }
            )
            res.status(200).json(updatedPost)
            
        } else {
            res.status(400).json({message: "No element in database with given id"})
        }
        
    }

    catch (err) {
        res.status(400).json({message: err})
    } 
})

module.exports = router