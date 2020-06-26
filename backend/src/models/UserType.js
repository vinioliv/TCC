const {Model, DataTypes} = require('sequelize');
const connection = require('../database/index');


class UserType extends Model {}

UserType.init({
   
cd_tipo:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
},
nm_tipo:{
        type: DataTypes.STRING, 
        allowNull: false
}
   
},{sequelize: connection,
    modelName: 'tb_tipo_usuario' })
    
UserType.sync();

module.exports = UserType;