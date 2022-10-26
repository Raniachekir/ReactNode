import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize,DataTypes : any) => {

    const Product = sequelize.define("product", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        }
       
    
    })

    return Product

}