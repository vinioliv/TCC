const {Model, DataTypes} = require('sequelize');
const connection = require('../database/index')
class Category extends Model{}
      
Category.init({

cd_categoria:{
     autoIncrement: true,
     primaryKey: true,
     type: DataTypes.INTEGER,
     allowNull: false,       
},
nm_categoria:{
    type: DataTypes.STRING,
    allowNull: false
}
    },{sequelize: connection,
    modelName: 'tb_categoria' })
    

Category.sync();

module.exports = Category;
