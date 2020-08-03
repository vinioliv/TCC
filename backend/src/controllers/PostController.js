const Post = require("../models/Post.js");

module.exports = {
     async crete(request, response){
      const{categoria, nome, dsanuncio, valor, imagem} = request.body;

      const cd_usuario = request.headers.authorization;
          try{
         await Post.create({cd_anunciante: cd_usuario, cd_categoria: categoria, nm_anuncio: nome,
          ds_anuncio: dsanuncio, vl_anuncio: valor, nm_img: imagem})
          .then(newpost => {
          return response.status(200).json({msg: "Anúncio Realizado com Sucesso", id_post: newpost.cd_anuncio})
          });
          }catch(err){
          return response.status(500).json({msg: "Falha ao realizar o anúncio, por favor tente novamente"})
          }
     },
     async delete(request, response){
          const id = request.headers.advertiser;
          
          try{
            await Post.destroy({
            where: {
              cd_usuario: id
            }
          })
          return response.status(200).json({msg: "Post excluído com sucesso"});
          } catch(err){

          }
        }
      }




        
        
       

 

     

         

