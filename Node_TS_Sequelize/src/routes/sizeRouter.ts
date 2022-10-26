import { Router } from "express";

//const router = require('express').Router()
import {Paths} from "../common/Paths";
import { getAllColors, getOneColor } from "../controllers/colorController";

import { addSize, getAllSizes, 
getOneSize, updateSize,deleteSize} from "../controllers/sizeController" ;
//const productController = require('../controllers/productController.js')

const SizesRoutes = Router();

SizesRoutes.post(Paths.ADD_SIZES, addSize)
SizesRoutes.get(Paths.GET_ALL_SIZES, getAllSizes)

SizesRoutes.get(Paths.GET_ONE_SIZE, getOneSize)
SizesRoutes.put(Paths.PUT_SIZE, updateSize)
SizesRoutes.delete(Paths.DELETE_SIZE, deleteSize)

export default SizesRoutes;