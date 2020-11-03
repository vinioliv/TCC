const User = require("../models/User.js");

module.exports = {
  async createuser(request, response) {
    const { nome, email, senha, dtnascimento, tipo } = request.body;
    const img = "default.png";
    const find = await User.findOne({
      where: {
        nm_email: email,
      },
    });
    if (find == null) {
      await User.create({
        nm_usuario: nome,
        nm_email: email,
        nm_senha: senha,
        dt_nascimento: dtnascimento,
        cd_tipo_usuario: tipo,
        nm_img: img,
      }).then((newuser) => {
        return response.status(200).json({
          msg: "Cadastro Realizado com sucesso!",
          id: newuser.cd_usuario,
        });
      });
    } else return response.status(422).json("E-mail Já cadastrado");
  },
};
