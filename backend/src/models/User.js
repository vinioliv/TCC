const {Model, DataTypes} = require('sequelize');
const connection = require('../database/index');
const UserType = require('./UserType');

class User extends Model {}

User.init({

cd_usuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
},
nm_usuario:{
        type: DataTypes.STRING,
        allowNull: false,
}, 
nm_email:{
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
},
nm_senha:{
        type: DataTypes.STRING,
        allowNull: false
},
dt_nascimento:{
        type: DataTypes.DATEONLY,
        allowNull: false
},
nm_img:{
        type: DataTypes.STRING,
        allowNull: true
        }
}, {sequelize: connection,
    modelName: 'tb_usuario'});


User.belongsTo(UserType, {foreignKey: 'cd_tipo_usuario', as: 'cd_tipo_usuario_fk'});


User.sync();      


module.exports = User;

 
           

