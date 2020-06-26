const {Model, DataTypes} = require('sequelize');
const connection = require('../database/index');
const Advertiser = require('./Advertiser')
const Category = require('./Category')
class Post extends Model{}
     
Post.init({

cd_anuncio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
     
},
cd_anunciante:{
        type: DataTypes.INTEGER,
        allowNull: false,
       
}, 
cd_categoria:{
        type: DataTypes.INTEGER, 
        allowNull: false,
             
},
nm_anuncio:{
        type: DataTypes.STRING,
        allowNull: false,
        
},
ds_anuncio:{
        type: DataTypes.STRING,
        allowNull: true
},
vl_anuncio:{
        type: DataTypes.INTEGER,
        allowNull: false
},
nm_img: {
        type: DataTypes.STRING,
        allowNull: true

}
        },{sequelize: connection,
            modelName: 'tb_anuncio' })
  
Post.belongsTo(Advertiser, {foreignKey: "cd_anunciante", as: "cd_anunciante_fk"})
Post.belongsTo(Category, {foreignKey: "cd_categoria", as: "cd_categoria_fk"})
Post.sync();

module.exports = Post;

 
           
    

