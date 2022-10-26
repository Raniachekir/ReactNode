import { Router } from "express";

//const router = require('express').Router()
import {Paths} from "../common/Paths";

import { addProduct, getAllProducts,getPublishedProduct, 
getOneProduct, updateProduct,deleteProduct, getSizeProduct} from "../controllers/productController" ;
//const productController = require('../controllers/productController.js')

const ProductsRoutes = Router();

//ProductsRoutes.post(Paths.GET_ALL_PRODUCTS, getAllProducts);
ProductsRoutes.post(Paths.ADD_PRODUCTS, addProduct)
ProductsRoutes.get(Paths.GET_ALL_PRODUCTS, getAllProducts)
ProductsRoutes.get(Paths.GET_PUBLISHED_PRODUCTS, getPublishedProduct)
ProductsRoutes.get(Paths.GET_SIZE_PRODUCT, getSizeProduct)

ProductsRoutes.get(Paths.GET_ONE_PRODUCT, getOneProduct)
ProductsRoutes.put(Paths.PUT_PRODUCT, updateProduct)
ProductsRoutes.delete(Paths.DELETE_PRODUCT, deleteProduct)

export default ProductsRoutes;