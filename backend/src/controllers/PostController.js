const post = require("../models/post");

module.exports = {
     async crete(request, response){
      const{categoria, nome, dsanuncio, tipo, valor} = request.body;

      const cd_usuario = request.headers.authorization;

         const {msg, status} = await post.Create(cd_usuario, categoria, nome, dsanuncio, tipo, valor);
         return response.status(status).json({msg: msg});  
     }
}
         

