//const express = require('express')
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";




//const app = express()
const app = express();


// middleware
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json({ limit: "50mb" }))
app.use(cors())



// routers
//app.use(ProductsRoutes);
import routerProduct from "./src/routes/productRouter";
app.use('/api/products', routerProduct)

import routerColor from "./src/routes/colorRouter";
app.use('/api/colors', routerColor)

import routerSize from "./src/routes/sizeRouter";
app.use('/api/sizes', routerSize)


//testing api (!)
app.get('/', (req, res) => {
    res.json({ message : 'hello from api'})
})

//port
const PORT = process.env.PORT || 3001

//server
app.listen(PORT, () => {
    console.log("server is running on port" ,PORT);
})
