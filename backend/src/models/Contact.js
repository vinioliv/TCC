const {Model, DataTypes} = require('sequelize');
const connection = require('../database/index');
const User = require('./User')

class Contact extends Model{}
        
Contact.init({

cd_usuario:{
     autoIncrement: true,
     primaryKey: true,
     type: DataTypes.INTEGER,
     allowNull: false,       
},
nr_telefone1:{
    type: DataTypes.INTEGER,
    allowNull: false
},
nr_telefone2:{
    type: DataTypes.STRING,
    allowNull: false
}
    },
    {sequelize: connection,
    modelName: 'tb_telefone' })


Contact.belongsTo(User, {foreignKey: "cd_usuario", as: "cd_usuario_telefone_fk"})
Contact.sync();

module.exports = Contact;
