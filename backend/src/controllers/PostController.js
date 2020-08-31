const Post = require("../models/Post.js");
const PostImage = require("../models/PostImage.js");

module.exports = {
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
    const id = request.headers.advertiser;

    try {
      await Post.destroy({
        where: {
          cd_anunciante: id,
        },
      });
      return response.status(200).json({ msg: "Post excluído com sucesso" });
    } catch (err) {
      return response.status.json(500)({
        msg: "Erro ao realizar operação, verifique seu acesso",
      });
    }
  },
};
