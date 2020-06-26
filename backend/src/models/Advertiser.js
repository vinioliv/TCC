const {Model, DataTypes} = require('sequelize');
const connection = require('../database/index')
const User = require('./User')

class Advertiser extends Model{}
          
Advertiser.init({

cd_vendedor:{
    type: DataTypes.INTEGER,
    allowNull: false
},
cpf_vendedor:{
    type: DataTypes.INTEGER,
    allowNull: false
},
ds_perfil: {
    type: DataTypes.STRING,
    allowNull: true
},
nm_img_negocio: {
    type: DataTypes.STRING,
    allowNull: true
}

    },{sequelize: connection,
       modelName: 'tb_vendedor'})

Advertiser.belongsTo(User, {foreignKey: "cd_usuario", as: "cd_usuario_fk"})

Advertiser.sync();

module.exports = Advertiser;
