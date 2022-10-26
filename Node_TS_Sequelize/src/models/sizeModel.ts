import { DataTypes, Sequelize } from "sequelize"

module.exports = (sequelize: Sequelize,DataTypes : any) => {

    const Size = sequelize.define("size", {
        sizer: {
            type: DataTypes.STRING,
            allowNull: false
        }, 

    })

    return Size

}