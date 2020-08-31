const Adress = require("../models/Adress");

module.exports = {
  async createadress(request, response) {
    const user_id = request.headers.authorization;
    const { cep, uf, cidade, rua, casa, complement } = request.body;

    await Adress.create({
      cd_usuario: user_id,
      cd_cep: cep,
      sg_estado: uf,
      nm_cidade: cidade,
      nm_rua: rua,
      nr_casa: casa,
      ds_complemento: complement,
    }).then((newadress) => {
      return response
        .status(200)
        .json({
          msg: "Endereço cadastrado com sucesso",
          id_adress: newadress.id_endereco,
        });
    });
  },
};
