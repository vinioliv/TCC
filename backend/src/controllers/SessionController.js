const User = require("../models/User.js");
const Advertiser = require("../models/Advertiser.js");

module.exports = {
  async create(request, response) {
    //criando a função

    const { email, senha } = request.body; //guardando os dados passados
    const usuario = await User.findOne({
      where: {
        nm_email: email,
        nm_senha: senha,
      },
    });
    if (usuario) {
      const anunciante = await Advertiser.findOne({
        where: {
          cd_usuario: usuario.cd_usuario,
        },
      });
      if (anunciante)
        return response
          .status(200)
          .json({
            msg: "Bem vindo ",
            userid: usuario.cd_usuario,
            advertiserid: anunciante.cd_vendedor,
          });
      else
        return response
          .status(200)
          .json({ msg: "Bem vindo ", userid: usuario.cd_usuario });
    } else
      return response.status(401).json({ msg: "Usuário ou senha incorreto" });
  },
};
