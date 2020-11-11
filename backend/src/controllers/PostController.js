const Post = require("../models/Post.js");
const PostImage = require("../models/PostImage.js");
const { Op } = require("sequelize");

module.exports = {
  async index(request, response) {
    const id = request.headers.userid;
    if (id == null || id == undefined) {
      return response.status(403).json("Verifique seu acesso");
    }
    const posts = await Post.findAll({
      where: { ic_pago: 1 },
      include: {
        model: PostImage,
      },
    });
    return response.status(200).json({ result: posts });
  },

  async crete(request, response) {
    const { categoria, nome, dsanuncio, valor } = request.body;

    const advertiserid = request.headers.advertiserid;
    try {
      const post = await Post.create({
        cd_anunciante: advertiserid,
        cd_categoria: categoria,
        nm_anuncio: nome,
        ds_anuncio: dsanuncio,
        vl_anuncio: valor,
        ic_pago: 0,
      });

      request.files.forEach(async (file) => {
        await PostImage.create({
          nm_imagem: file.filename,
          cd_anuncio: post.cd_anuncio,
        });
      });
      return response
        .status(200)
        .json({ msg: "Anúncio Realizado com Sucesso", id: post.cd_anuncio });
    } catch (err) {
      return response.status(500).json({
        msg: "Falha ao realizar o anúncio, por favor tente novamente",
      });
    }
  },
  async delete(request, response) {
    const { id } = request.params;
    const advertiserid = request.headers.advertiserid;
    if (advertiserid == null || advertiserid == undefined) {
      return response.status(403).json("Verifique seu acesso");
    }
    const exist = await Post.findAll({
      where: { cd_anuncio: id },
    });
    if (exist == "") {
      return response.status(404).json("O anúncio em questão não existe mais!");
    } else {
      await Post.destroy({
        where: { cd_anuncio: id, cd_anunciante: advertiserid },
      });
      return response.status(200).json({ msg: "Post excluído com sucesso" });
    }
  },
  
  async filter(request, response) {
    const { category, name } = request.query;

    const posts = await Post.findAll({
      where: { cd_categoria: category, nm_anuncio: { [Op.like]: `${name}%` } },
      include: {
        model: PostImage,
      },
      order: [["ic_pago", "Desc"]],
    });
    return response.status(200).json({ result: posts });
  },
};
