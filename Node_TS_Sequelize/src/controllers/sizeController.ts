import { Request, Response } from "express";
import { MSG } from "../common/ResponsesMessages";
import { db, sequelize } from "../config/sequelize";

// create main Model
const Size = db.sizes;

// 1. create size

const addSize = async (req: Request, res: Response) => {
  let sizer = req.body.sizer;
  if (!sizer) {
    return res.status(400).send({ success: false, message: MSG.MISSING_DATA });
  }
  let info = {
    sizer: req.body.sizer
  };

  const size = await Size.create(info);
  return res.status(200).send({ success: true, data: size });
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
const getAllSizes = async (req: Request, res: Response) => {
  //let products = await Product.findAll({})
  //console.log("porducts",products)
  sequelize
    .query("SELECT * from sizes")
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

// 3. get single size

const getOneSize = async (req: Request, res: Response) => {
  let id = req.params.id;
  let size = await Size.findOne({ where: { id: id } });
  return res.status(200).send({ success: true, data: size });
};

// 4. update size

const updateSize = async (req: Request, res: Response) => {
  let id = req.params.id;

  const size = await Size.update(req.body, { where: { id: id } });
  return res.status(200).send({ success: true, data: size });
};

// 5. delete size by id

const deleteSize = async (req: Request, res: Response) => {
  let id = req.params.id;

  await Size.destroy({ where: { id: id } });
  return res.status(200).send({ success: true, message: MSG.DELETE_DATA });
};



export {
  addSize,
  getAllSizes,
  getOneSize,
  updateSize,
  deleteSize,
};
