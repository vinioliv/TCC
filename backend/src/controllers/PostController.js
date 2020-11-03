const Post = require("../models/Post.js");
const PostImage = require("../models/PostImage.js");
const Advertiser = require("../models/Advertiser.js");

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
        required: true,
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


};
