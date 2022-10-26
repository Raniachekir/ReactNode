import { Router } from "express";

//const router = require('express').Router()
import {Paths} from "../common/Paths";

import { addColor, getAllColors, 
getOneColor, updateColor,deleteColor} from "../controllers/colorController" ;
//const productController = require('../controllers/productController.js')

const ColorsRoutes = Router();

ColorsRoutes.post(Paths.ADD_COLORS, addColor)
ColorsRoutes.get(Paths.GET_ALL_COLORS, getAllColors)

ColorsRoutes.get(Paths.GET_ONE_COLOR, getOneColor)
ColorsRoutes.put(Paths.PUT_COLOR, updateColor)
ColorsRoutes.delete(Paths.DELETE_COLOR, deleteColor)

export default ColorsRoutes;