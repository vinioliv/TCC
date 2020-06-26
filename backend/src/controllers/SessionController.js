const User = require('../models/User.js')

module.exports = {
   
    async create(request, response){   //criando a função
       
        const {email, senha} = request.body;  //guardando os dados passados
        const usuario = await User.findOne({
        where: {
          nm_email: email, 
          nm_senha: senha
        }
        })
        if(usuario) return response.status(200).json({msg: "Bem vindo ", data: usuario.nm_usuario})
        else return response.status(401).json({msg: "Usuário ou senha incorreto"});
  }
}