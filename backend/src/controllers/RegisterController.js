const User  = require('../models/User.js')
const Adress = require('../models/Adress')
const Advertiser = require('../models/Advertiser');
const validacpf = require('validar-cpf');

module.exports = {

    async createuser(request, response){
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

// criando usuário 

    async createadress(request, response){
    const user_id = request.headers.authorization;
    const{cep, uf, cidade, rua, casa, complement} = request.body;

    await Adress.create({
        cd_usuario: user_id, cd_cep: cep, sg_estado: uf,
        nm_cidade: cidade, nm_rua: rua, nr_casa: casa, ds_complemento: complement
      }).then(newadress => {
        return response.status(200).json({msg: "Endereço cadastrado com sucesso", id_adress: newadress.id_endereco})
    })
  },

  async createadvertiser(request, response){
    const user_id = request.headers.authorization;
    const {nome, cpf, ds, img} = request.body;

    if(!validacpf(cpf)) return response.status(400).json({msg: "CPF inválido!"})
    
    const vendedor = await Advertiser.create({
        cd_usuario: user_id, nm_negocio: nome, cd_cpf: cpf,  
        ds_perfil: ds, nm_img: img
    })
    
    await User.update({cd_tipo_usuario: 2}, {
      where: {
        cd_usuario: user_id
      }
    });

    return response.status(200).json({msg: "Cadastro de vendedor realizado com sucesso!", id: vendedor});
  }
}
   



   
