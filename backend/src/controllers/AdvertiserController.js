const Advertiser = require('../models/Advertiser');
const User  = require('../models/User.js')
const validacpf = require('validar-cpf');

module.exports = {
 async createadvertiser(request, response){
        const user_id = request.headers.authorization;
        const {nome, cpf, ds} = request.body;
        const img = "default.png"
   
        if(!validacpf(cpf)) return response.status(400).json({msg: "CPF inválido!"})
    
        const vendedor = await Advertiser.create({
        cd_usuario: user_id, nm_negocio: nome, cd_cpf: cpf,  
        ds_perfil: ds, nm_img_negocio: img
        })
    
    await User.update({cd_tipo_usuario: 2}, {
      where: {
        cd_usuario: user_id
      }
    });

    return response.status(200).json({msg: "Cadastro de vendedor realizado com sucesso!", id: vendedor});
 }
}