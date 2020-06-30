const User  = require('../models/User.js')
const Adress = require('../models/Adress')


module.exports = {
    async create(request, response){
    const{nome, email, senha, dtnascimento, tipo, img} = request.body;
    const find = await User.findOne({
    where: {
    nm_email: email
    }
  })
  if(find == null){
    await User.create({
      nm_usuario: nome, nm_email: email, nm_senha: senha,
      dt_nascimento: dtnascimento, cd_tipo_usuario: tipo,
      nm_img: img
    
    }).then(newuser => {
      return response.status(200).json({msg: "Cadastro Realizado com sucesso!", id: newuser.cd_usuario })
    });
    
  }
  else return response.status(422).json("E-mail Já cadastrado")
    },

    async createadress(request, response){
      const user_id = request.headers.authorization;
      const{cep, uf, cidade, rua, casa, complement} = request.body;


      await Adress.create({
        cd_usuario: user_id, cd_cep: cep, sg_estado: uf,
        nm_cidade: cidade, nm_rua: rua, nr_casa: casa, ds_complemento: complement
      }).then(newadress => {
        return response.status(200).json({msg: "Endereço cadastrado com sucesso", id_adress: newadress.id_endereco})
      })
    }
}
   
