const express = require("express")
const productsRoute = require("./routes/products.js")
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const cors = require("cors")
//require("dotenv/config")


mongoose.connect(process.env.DB_CONNECTION)
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));


// products route 
app = express()
app.use(bodyParser.json())
app.use(cors({origin: "*", methods: ["GET", "POST", "PATCH", "DELETE"]}))
app.get("/", (req, res) => res.send("hello this is the index page"))
app.use("/products", productsRoute) 




app.listen(process.env.PORT, () => console.log("Server Started..."))