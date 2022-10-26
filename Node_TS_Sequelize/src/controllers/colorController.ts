import { Request, Response } from "express";
import { MSG } from "../common/ResponsesMessages";
import { db, sequelize } from "../config/sequelize";

// create main Model
const Color = db.colors;

// 1. create product

const addColor = async (req: Request, res: Response) => {
  let name = req.body.name;
  if (!name) {
    return res.status(400).send({ success: false, message: MSG.MISSING_DATA });
  }
  let info = {
    name: req.body.name
  };

  const color = await Color.create(info);
  return res.status(200).send({ success: true, data: color });
 /*sequelize
    .query("insert into products VALUES ("+info.title+ ","+ info.price+ "," + info.description+ ","
    +info.published+ ")") 
    .then((data) => {
      console.log("data", data);
      return res.status(200).send({ success: true, data: data[0] });
    })
    .catch((error) => {
      console.log("error", error);
      return res.status(500).send({
        success: false,
        message: MSG.ERROE_SERVER
      });
    }); */
};

// 2. get all colors

/*const getAllProducts = async (req, res) => {

    let products = await Product.findAll({})
   // let listProducts= products.map((product,index)=>{
     //   return {
       //     name:product.name,
         //   createdAt:product.created_at

        //}
   // })
   return res.status(200).send({success:true,data:products})

} */
const getAllColors = async (req: Request, res: Response) => {
  //let products = await Product.findAll({})
  //console.log("porducts",products)
  sequelize
    .query("SELECT * from colors")
    .then((data) => {
      console.log("data", data);
      return res.status(200).send({ success: true, data: data[0] });
    })
    .catch((error) => {
      console.log("error", error);
      return res.status(500).send({
        success: false,
        message: MSG.ERROE_SERVER
      });
    }); //res.status(200).send(products)
};

// 3. get single color

const getOneColor = async (req: Request, res: Response) => {
  let id = req.params.id;
  let color = await Color.findOne({ where: { id: id } });
  return res.status(200).send({ success: true, data: color });
};

// 4. update Color

const updateColor = async (req: Request, res: Response) => {
  let id = req.params.id;

  const color = await Color.update(req.body, { where: { id: id } });
  return res.status(200).send({ success: true, data: color });
};

// 5. delete Color by id

const deleteColor = async (req: Request, res: Response) => {
  let id = req.params.id;

  await Color.destroy({ where: { id: id } });
  return res.status(200).send({ success: true, message: MSG.DELETE_DATA });
};



export {
  addColor,
  getAllColors,
  getOneColor,
  updateColor,
  deleteColor,
};
