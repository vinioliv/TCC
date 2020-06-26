const {Model, DataTypes} = require('sequelize');
const User = require('./User')
const connection = require('../database/index');

class Adress extends Model{}
         
Adress.init({

cd_endereco:{
     autoIncrement: true,
     primaryKey: true,
     type: DataTypes.INTEGER,
     allowNull: false,       
},
cd_cep:{
    type: DataTypes.INTEGER,
    allowNull: false
},
sg_estado:{
    type: DataTypes.STRING,
    allowNull: false
},
nm_cidade: {
    type: DataTypes.STRING,
    allowNull: false
},
nm_rua: {
    type: DataTypes.STRING,
    allowNull: false
},
nr_casa: {
    type: DataTypes.INTEGER,
    allowNull: false
},
ds_complemento: {
    type: DataTypes.STRING,
    allowNull: true
}

    },{sequelize: connection,
modelName: 'tb_endereco' })

Adress.belongsTo(User, {foreignKey: "cd_usuario", as: "cd_usuario_endereco_fk"})
Adress.sync();

module.exports = Adress;
