const { Model, DataTypes } = require("sequelize");
const connection = require("../database/index");
const Post = require("./Post.js");
class PostImage extends Model {}

PostImage.init(
  {
    nm_imagem: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: connection, modelName: "tb_imganuncio" }
);

Post.hasMany(PostImage, { foreignKey: "cd_anuncio_img" });
PostImage.belongsTo(Post, {
  foreignKey: "cd_anuncio_img",
  as: "cd_anuncio_img_fk",
});

PostImage.sync();

module.exports = PostImage;
