import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize,DataTypes : any) => {

    const Color = sequelize.define("color", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }, 

    })

    return Color

}