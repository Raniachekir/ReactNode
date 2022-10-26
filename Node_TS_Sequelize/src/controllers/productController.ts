import { Request, Response } from "express";
import { MSG } from "../common/ResponsesMessages";
import { db, sequelize } from "../config/sequelize";

// create main Model
const Product = db.products;
const Size = db.sizes;

// 1. create product

const addProduct = async (req: Request, res: Response) => {
  const {title, price, description, published,sizeId} = req.body
 
  if (!title || !price || !description ) {
    return res.status(400).send({ success: false, message: MSG.MISSING_DATA });
  }
  let info = {
    title,
    price,
    description,
    published: published ? published : false,
    sizeId:sizeId
  };


 /* await Product.create(info).then((product:any)=>{
    return res.status(200).send({ success: true, data: product });

  }).catch(()=>{
    return res.status(500).send({ success: false,message:MSG.ERROE_SERVER });

  })*/
 try{  const product=await Product.create(info)
  return res.status(200).send({ success: true, data: product });

}catch{
  return res.status(500).send({ success: false,message:MSG.ERROE_SERVER });
}


    
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

// 2. get all products

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
const getAllProducts = async (req: Request, res: Response) => {
  //let products = await Product.findAll({})
  //console.log("porducts",products)
  sequelize
    .query("SELECT * from products")
    .then((data) => {
      console.log("data", data);
      return res.status(200).send({ success: true, data: data[0] });
    })
    .catch((error) => {
      console.log("error", error);
      return res.status(500).send({
        success: false,
        message: MSG.ERROE_SERVER,
      });
    }); //res.status(200).send(products)
};

// 3. get single product

const getOneProduct = async (req: Request, res: Response) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  return res.status(200).send({ success: true, data: product });
};

// 4. update Product

const updateProduct = async (req: Request, res: Response) => {
  let id = req.params.id;
  if(!id){
    return res.status(400).send({success:false,message:"missing data"})
  }
  const product = await Product.update(req.body, { where: { id: id } });
  return res.status(200).send({ success: true, data: product });
};

// 5. delete product by id

const deleteProduct = async (req: Request, res: Response) => {
  let id = req.params.id;

  await Product.destroy({ where: { id: id } });
  return res.status(200).send({ success: true, message: MSG.DELETE_DATA });
};

// 6. get published product

const getPublishedProduct = async (req: Request, res: Response) => {
  const products = await Product.findAll({ where: { published: true } });
  return res.status(200).send({ success: true, data: products });
};

//7 get size product

const getSizeProduct = async (req: Request, res: Response) => {
  let id = req.params.id;
  sequelize
    .query(
      "SELECT products.title, sizes.sizer FROM products AND sizes WHERE (products.sizeId=sizes.id AND products.id=" +id)
    .then((data) => {
      console.log("data", data);
      return res.status(200).send({ success: true, data: data });
    })
    .catch((error) => {
      console.log("error", error);
      return res.status(500).send({
        success: false,
        message: MSG.ERROE_SERVER,
      });
    });
};

export {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
  getSizeProduct,
};
