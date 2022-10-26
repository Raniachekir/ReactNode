import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import { CONFIG } from "./dbConfig";
//import {CONFIG} from "./dbConfig";
//import {sequelize, DataTypes} from "../models/productModel"
interface IDb{
sequelize:Sequelize;
products:any
colors:any,
sizes:any
}

export const sequelize = new Sequelize(
  "node_sequelize_api_db",
  "root",
  "",
  {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    pool: {
      max: 1000000,
      min: 0,
      idle: 20000,
      acquire: 100000,
    },
  }
);
sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

let db :IDb ={sequelize,products:require('../models/productModel')(sequelize, DataTypes),
colors:require('../models/colorModel')(sequelize, DataTypes),
sizes:require('../models/sizeModel')(sequelize, DataTypes)}
//db.sequelize= sequelize

//import {sequelize, DataTypes} from "../models/productModel"
//db.products = require('../models/productModel')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})


//product and color connexion many to many
db.products.belongsToMany(db.colors, {
  through: "product_color",
  as: "colors",
  foreignkey: "id", //idProduct
});
db.colors.belongsToMany(db.products, {
  through: "product_color",
  as: "products",
  foreignkey: "id", //idColor
});


//product and size connexion 1 to many
db.sizes.hasMany(db.products);
db.products.belongsTo(db.sizes)


export {db};

